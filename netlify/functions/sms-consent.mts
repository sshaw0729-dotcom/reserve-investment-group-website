import type { Config } from "@netlify/functions";
import { randomUUID } from "node:crypto";
import { SMS_CONSENT_COPY, SMS_CONSENT_VERSION, latestConsentState, normalizeUsMobile, type SmsConsentEvent } from "../../src/lib/sms/consent-policy";
import { findOrCreateSmsPerson, listSmsEvents, persistAndVerifySmsEvent } from "./lib/sms-ledger";

declare const Netlify: { env: { get(name: string): string | undefined } };

const MAX_BODY_BYTES = 8192;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const json = (body: object, status = 200) => new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" } });

export default async function smsConsent(request: Request): Promise<Response> {
  const enabled = Netlify.env.get("SMS_CONSENT_COLLECTION_ENABLED") === "true";
  if (request.method === "GET") return json({ acceptingEnrollment: enabled });
  if (request.method !== "POST") return json({ error: "method_not_allowed" }, 405);
  if (!enabled) return json({ error: "enrollment_not_active" }, 503);

  const origin = request.headers.get("origin");
  if (origin !== new URL(request.url).origin) return json({ error: "invalid_origin" }, 403);
  if (!request.headers.get("content-type")?.startsWith("application/json")) return json({ error: "invalid_content_type" }, 415);
  const raw = await request.text();
  if (new TextEncoder().encode(raw).length > MAX_BODY_BYTES) return json({ error: "too_large" }, 413);

  let input: Record<string, unknown>;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("invalid");
    input = parsed as Record<string, unknown>;
  } catch { return json({ error: "invalid_request" }, 400); }

  // Consent never inherits from ordinary lead forms and must be explicitly checked.
  if (input.website || input.smsConsent !== true || input.consentVersion !== SMS_CONSENT_VERSION || input.source !== "/sms-consent/") {
    return json({ error: "explicit_sms_consent_required" }, 400);
  }
  const firstName = typeof input.firstName === "string" ? input.firstName.trim() : "";
  const lastName = typeof input.lastName === "string" ? input.lastName.trim() : "";
  const email = typeof input.email === "string" ? input.email.trim().toLowerCase() : "";
  const phone = normalizeUsMobile(input.phone);
  if (!firstName || firstName.length > 80 || !lastName || lastName.length > 80 || !EMAIL_RE.test(email) || email.length > 254 || !phone) {
    return json({ error: "invalid_contact_information" }, 400);
  }

  const apiKey = Netlify.env.get("FOLK_API_KEY");
  if (!apiKey) return json({ error: "enrollment_unavailable" }, 503);
  try {
    const person = await findOrCreateSmsPerson({ email, firstName, lastName, phone }, apiKey);
    // Read the full history before and after writing. No sending occurs here.
    await listSmsEvents(person.id, apiKey);
    const event: SmsConsentEvent = {
      id: randomUUID(), kind: "OPT_IN", phone, occurredAt: new Date().toISOString(),
      source: new URL("/sms-consent/", request.url).toString(), disclosureVersion: SMS_CONSENT_VERSION,
      disclosureCopy: SMS_CONSENT_COPY, method: "unchecked_web_checkbox",
    };
    const noteId = await persistAndVerifySmsEvent(person.id, event, apiKey);
    const history = await listSmsEvents(person.id, apiKey);
    if (!history.some((entry) => entry.id === event.id && entry.phone === phone) || latestConsentState(history, phone) !== "opted_in") {
      throw new Error("Consent ledger verification failed");
    }
    // Not a carrier enrollment confirmation. SMS sending is a separate, provider-gated system.
    return json({ recorded: true, reference: event.id, message: "Your SMS consent was recorded. Messages are not sent by this form." }, 201);
  } catch {
    // Fail closed; do not expose CRM identifiers, notes, API keys or contact details.
    return json({ recorded: false, error: "consent_record_not_verified" }, 503);
  }
}

export const config: Config = { path: "/api/sms-consent" };
