import type { Config } from "@netlify/functions";
import { randomUUID } from "node:crypto";
import { latestConsentState, normalizeUsMobile, SMS_CONSENT_COPY, SMS_CONSENT_VERSION, type SmsConsentEvent } from "../../src/lib/sms/consent-policy";
import { findPersonByEmail, listSmsEvents, persistAndVerifySmsEvent } from "./lib/sms-ledger";

declare const Netlify: { env: { get(name: string): string | undefined } };
const reply = (body: object, status = 200) => new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" } });

export default async function smsOptOut(request: Request): Promise<Response> {
  if (request.method !== "POST") return reply({ error: "method_not_allowed" }, 405);
  if (request.headers.get("origin") !== new URL(request.url).origin) return reply({ error: "invalid_origin" }, 403);
  if (!request.headers.get("content-type")?.startsWith("application/json")) return reply({ error: "invalid_content_type" }, 415);
  const raw = await request.text();
  if (new TextEncoder().encode(raw).length > 4096) return reply({ error: "too_large" }, 413);
  let data: Record<string, unknown>;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("invalid");
    data = parsed as Record<string, unknown>;
  } catch { return reply({ error: "invalid_request" }, 400); }
  const phone = normalizeUsMobile(data.phone);
  const email = typeof data.email === "string" ? data.email.trim().toLowerCase() : "";
  if (!phone || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return reply({ error: "invalid_contact_information" }, 400);
  const apiKey = Netlify.env.get("FOLK_API_KEY");
  if (!apiKey) return reply({ recorded: false, error: "opt_out_unavailable" }, 503);
  try {
    const person = await findPersonByEmail(email, apiKey);
    if (!person || !(person.phones ?? []).some((number) => normalizeUsMobile(number) === phone)) throw new Error("Unmatched phone");
    await listSmsEvents(person.id, apiKey);
    const event: SmsConsentEvent = {
      id: randomUUID(), kind: "STOP", phone, occurredAt: new Date().toISOString(),
      source: new URL("/sms-consent/", request.url).toString(), disclosureVersion: SMS_CONSENT_VERSION,
      disclosureCopy: SMS_CONSENT_COPY, method: "manual_opt_out",
    };
    await persistAndVerifySmsEvent(person.id, event, apiKey);
    const history = await listSmsEvents(person.id, apiKey);
    if (!history.some((entry) => entry.id === event.id) || latestConsentState(history, phone) !== "opted_out") throw new Error("Opt-out read-back failed");
    return reply({ recorded: true, reference: event.id, message: "Your website SMS opt-out has been recorded. You may also reply STOP to an SMS message." });
  } catch {
    return reply({ recorded: false, error: "opt_out_not_verified", message: "We could not confirm this opt-out. Contact us at 216-284-3615, and reply STOP to any message you receive." }, 503);
  }
}

export const config: Config = { path: "/api/sms-opt-out" };
