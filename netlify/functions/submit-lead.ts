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

// Scaffold — server-side lead intake. Implements the flow in
// FORM-DATA-FLOW.md. Do not log field values. Do not forward to PostHog.
//
// CRM destination resolved 2026-08-06 (MISSING-INFORMATION-REGISTER.md
// #17, lead-magnet slice only): folk, into the practice's existing
// "Website Leads" group. General (non-lead-magnet) contact-form routing
// is intentionally left as-is for now — this only wires the forms that
// need to trigger EMAIL-NURTURE-SEQUENCES.md.

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
] as const;

// formId → nurture sequence, matching EMAIL-NURTURE-SEQUENCES.md Section 2.
const MAGNET_SEQUENCE_MAP: Record<string, { sequence: "A" | "B" | "C"; title: string }> = {
  "retirement-readiness-checklist": { sequence: "A", title: "Retirement Readiness Checklist" },
  "business-owner-planning-checklist": { sequence: "B", title: "Business-Owner Planning Checklist" },
  "equity-compensation-checklist": { sequence: "C", title: "Equity Compensation Checklist for Executives" },
};

function buildUnsubscribeUrl(email: string): string {
  const secret = process.env.UNSUBSCRIBE_SECRET;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://reserveinvestmentgroup.com";
  if (!secret) return `${siteUrl}/contact/`; // fail open to a real page, never a broken link
  const token = createHmac("sha256", secret).update(email.toLowerCase().trim()).digest("hex");
  return `${siteUrl}/.netlify/functions/unsubscribe?email=${encodeURIComponent(email)}&token=${token}`;
}

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const raw = JSON.parse(event.body ?? "{}");
    const submission: Record<string, unknown> = {};
    for (const field of ALLOWED_FIELDS) {
      if (field in raw) submission[field] = raw[field];
    }

    // TODO: full server-side validation, sanitization, rate limiting, spam
    // checks. Log only non-PII metadata.
    console.log("[submit-lead] received submission", { fields: Object.keys(submission) });

    const formId = typeof submission.formId === "string" ? submission.formId : undefined;
    const magnet = formId ? MAGNET_SEQUENCE_MAP[formId] : undefined;
    const email = typeof submission.email === "string" ? submission.email : undefined;

    if (magnet && email) {
      // Best-effort: a folk/CRM outage must never block the visitor from
      // getting their download. Errors are swallowed after this point —
      // the checklist link the browser already has still works either way.
      try {
        const today = new Date().toISOString().slice(0, 10);
        const firstName = typeof submission.firstName === "string" ? submission.firstName : undefined;
        const lastName = typeof submission.lastName === "string" ? submission.lastName : undefined;
        const landingPage = typeof submission.pageSlug === "string" ? submission.pageSlug : formId ?? "";
        const unsubscribeUrl = buildUnsubscribeUrl(email);

        // Someone who previously unsubscribed and later fills out a new
        // form has taken a fresh affirmative action, so we still log the
        // interest and let them have the download — but we don't silently
        // re-enroll them in the automated sequence off the back of an old
        // opt-out. See EMAIL-NURTURE-SEQUENCES.md Section 8.
        const previouslyUnsubscribed = await folkIsUnsubscribed(email);

        // Funnel Stage uses a compact, machine-parseable format (not
        // prose) because the scheduled sender job (EMAIL-NURTURE-
        // SEQUENCES.md Section 8) reads it back with no conversation
        // context — it can't infer meaning, only parse a fixed pattern.
        // next_day tracks which email is still owed; "Day 0" is due, not
        // sent, at enrollment — this function can't send email itself
        // (no Exchange access from serverless code), only the scheduled
        // job can.
        const funnelStage = previouslyUnsubscribed
          ? "NURTURE|not_enrolled|reason=previously_unsubscribed"
          : `NURTURE|seq=${magnet.sequence}|enrolled=${today}|next_day=0`;

        const fieldValues = {
          [FOLK_WEBSITE_LEADS_GROUP_ID]: {
            "Lead Source": "Lead Magnet Download",
            "Offer Interest": magnet.title,
            "Landing Page Viewed": landingPage,
            "Funnel Stage": funnelStage,
            // Reused verbatim by the scheduled sender job for every email
            // in this person's sequence — never regenerated, so it never
            // needs the signing secret outside this function.
            "Notes for AI": previouslyUnsubscribed ? "" : unsubscribeUrl,
          },
        };

        let person = await folkFindPersonByEmail(email);
        if (!person) {
          person = await folkCreatePerson({
            email,
            firstName,
            lastName,
            groupIds: [FOLK_WEBSITE_LEADS_GROUP_ID],
            customFieldValues: fieldValues,
          });
        } else {
          await folkUpdatePerson(person.id, {
            addGroupIds: [FOLK_WEBSITE_LEADS_GROUP_ID],
            customFieldValues: fieldValues,
          });
        }

        if (person) {
          const noteBody = previouslyUnsubscribed
            ? `Downloaded "${magnet.title}" on ${today}. NOT enrolled in the automated email sequence — ` +
              `this address is on the Email Unsubscribed list from a prior opt-out. Follow up manually if appropriate.`
            : `Downloaded "${magnet.title}" on ${today}. Enrolled in Email Nurture Sequence ${magnet.sequence} ` +
              `(EMAIL-NURTURE-SEQUENCES.md). Day 0 email due immediately; Day 3/7/14 emails scheduled from this date. ` +
              `Unsubscribe link issued: ${unsubscribeUrl}`;
          await folkCreateNote(person.id, noteBody);
        }
      } catch (crmError) {
        console.error("[submit-lead] folk forwarding failed, continuing", crmError);
      }
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch {
    return { statusCode: 400, body: JSON.stringify({ ok: false }) };
  }
};
