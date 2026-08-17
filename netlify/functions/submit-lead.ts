import type { Handler } from "@netlify/functions";
import { createHmac } from "node:crypto";
import {
  folkFindPersonByEmail,
  folkCreatePerson,
  folkUpdatePerson,
  folkCreateNote,
  folkIsUnsubscribed,
  FOLK_WEBSITE_LEADS_GROUP_ID,
} from "./lib/folk";

const MAX_BODY_BYTES = 16_384;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const AREA_VALUES = new Set(["", "financial-planning", "retirement-planning", "business-owner-planning", "wealth-management", "other"]);
const CONTACT_METHOD_VALUES = new Set(["email", "phone"]);

const ALLOWED_FIELDS = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "areaOfInterest",
  "preferredContactMethod",
  "consent",
  "formId",
  "pageSlug",
  "website",
] as const;

const MAGNET_SEQUENCE_MAP: Record<string, { sequence: "A" | "B" | "C"; title: string }> = {
  "retirement-readiness-checklist": { sequence: "A", title: "Retirement Readiness Checklist" },
  "business-owner-planning-checklist": { sequence: "B", title: "Business-Owner Planning Checklist" },
  "equity-compensation-checklist": { sequence: "C", title: "Equity Compensation Checklist for Executives" },
};

function cleanString(value: unknown, max: number): string | undefined {
  if (typeof value !== "string") return undefined;
  const cleaned = value.replace(/[\u0000-\u001F\u007F]/g, " ").trim();
  if (cleaned.length > max) return undefined;
  return cleaned;
}

function buildUnsubscribeUrl(email: string): string {
  const secret = process.env.UNSUBSCRIBE_SECRET;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://reserveinvestmentgroup.com";
  if (!secret) return `${siteUrl}/contact/`;
  const token = createHmac("sha256", secret).update(email.toLowerCase().trim()).digest("hex");
  return `${siteUrl}/.netlify/functions/unsubscribe?email=${encodeURIComponent(email)}&token=${token}`;
}

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers: { Allow: "POST" }, body: "Method Not Allowed" };
  }

  const body = event.body ?? "";
  if (Buffer.byteLength(body, "utf8") > MAX_BODY_BYTES) {
    return { statusCode: 413, body: JSON.stringify({ ok: false }) };
  }

  try {
    const raw = JSON.parse(body || "{}");
    if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
      return { statusCode: 400, body: JSON.stringify({ ok: false }) };
    }

    const submission: Record<string, unknown> = {};
    for (const field of ALLOWED_FIELDS) {
      if (field in raw) submission[field] = raw[field];
    }

    const website = cleanString(submission.website, 200);
    if (website) {
      console.log("[submit-lead] rejected honeypot submission");
      return { statusCode: 200, body: JSON.stringify({ ok: true }) };
    }

    const firstName = cleanString(submission.firstName, 80);
    const lastName = cleanString(submission.lastName, 80);
    const email = cleanString(submission.email, 254)?.toLowerCase();
    const phone = cleanString(submission.phone, 40) ?? "";
    const areaOfInterest = cleanString(submission.areaOfInterest, 80) ?? "";
    const preferredContactMethod = cleanString(submission.preferredContactMethod, 20) ?? "email";
    const formId = cleanString(submission.formId, 120);
    const pageSlug = cleanString(submission.pageSlug, 240);
    const consent = submission.consent === true;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !EMAIL_RE.test(email) ||
      !consent ||
      !formId ||
      !pageSlug ||
      !pageSlug.startsWith("/") ||
      !AREA_VALUES.has(areaOfInterest) ||
      !CONTACT_METHOD_VALUES.has(preferredContactMethod)
    ) {
      console.log("[submit-lead] rejected invalid submission", { formId: formId ?? "unknown" });
      return { statusCode: 400, body: JSON.stringify({ ok: false }) };
    }

    console.log("[submit-lead] accepted submission", { formId, pageSlug });

    const magnet = MAGNET_SEQUENCE_MAP[formId];
    const today = new Date().toISOString().slice(0, 10);
    let customFieldValues: Record<string, Record<string, unknown>> | undefined;
    let noteBody: string;

    if (magnet) {
      const unsubscribeUrl = buildUnsubscribeUrl(email);
      const previouslyUnsubscribed = await folkIsUnsubscribed(email);
      const funnelStage = previouslyUnsubscribed
        ? "NURTURE|not_enrolled|reason=previously_unsubscribed"
        : `NURTURE|seq=${magnet.sequence}|enrolled=${today}|next_day=0`;

      customFieldValues = {
        [FOLK_WEBSITE_LEADS_GROUP_ID]: {
          "Lead Source": "Lead Magnet Download",
          "Offer Interest": magnet.title,
          "Landing Page Viewed": pageSlug,
          "Funnel Stage": funnelStage,
          "Notes for AI": previouslyUnsubscribed ? "" : unsubscribeUrl,
        },
      };

      noteBody = previouslyUnsubscribed
        ? `Downloaded "${magnet.title}" on ${today}. NOT enrolled in the automated email sequence — this address is on the Email Unsubscribed list from a prior opt-out. Follow up manually if appropriate.`
        : `Downloaded "${magnet.title}" on ${today}. Enrolled in Email Nurture Sequence ${magnet.sequence} (EMAIL-NURTURE-SEQUENCES.md). Day 0 email due immediately; Day 3/7/14 emails scheduled from this date. Unsubscribe link issued: ${unsubscribeUrl}`;
    } else {
      noteBody = `Website form "${formId}" submitted on ${today} from ${pageSlug}. Area of interest: ${areaOfInterest || "not specified"}. Preferred contact method: ${preferredContactMethod}.`;
    }

    try {
      let person = await folkFindPersonByEmail(email);
      if (!person) {
        person = await folkCreatePerson({
          email,
          phone: phone || undefined,
          firstName,
          lastName,
          groupIds: [FOLK_WEBSITE_LEADS_GROUP_ID],
          customFieldValues,
        });
        if (!person) {
          console.error("[submit-lead] Folk person creation failed", { formId });
          return { statusCode: 502, body: JSON.stringify({ ok: false, error: "crm_write_failed" }) };
        }
      } else {
        const updated = await folkUpdatePerson(person, {
          phone: phone || undefined,
          addGroupIds: [FOLK_WEBSITE_LEADS_GROUP_ID],
          customFieldValues,
        });
        if (!updated) {
          console.error("[submit-lead] Folk person update failed", { formId });
          return { statusCode: 502, body: JSON.stringify({ ok: false, error: "crm_write_failed" }) };
        }
      }

      const noteCreated = await folkCreateNote(person.id, noteBody);
      if (!noteCreated) {
        console.error("[submit-lead] Folk note creation failed after lead persisted", { formId });
      }
    } catch (crmError) {
      console.error("[submit-lead] Folk forwarding failed", crmError);
      return { statusCode: 502, body: JSON.stringify({ ok: false, error: "crm_write_failed" }) };
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch {
    return { statusCode: 400, body: JSON.stringify({ ok: false }) };
  }
};
