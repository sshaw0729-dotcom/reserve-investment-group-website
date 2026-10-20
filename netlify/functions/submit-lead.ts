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
import { sendGraphMail } from "./lib/msgraph";

const MAX_BODY_BYTES = 65_536;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const AREA_VALUES = new Set(["", "medicare", "life-insurance", "auto-home-insurance", "merchant-services", "financial-planning", "retirement-planning", "business-owner-planning", "wealth-management", "other"]);
const AREA_LABELS: Record<string, string> = {
  medicare: "Medicare",
  "life-insurance": "Life Insurance",
  "auto-home-insurance": "Auto & Home Insurance",
  "merchant-services": "Merchant Services",
  "financial-planning": "Financial Planning",
  "retirement-planning": "Retirement Planning",
  "business-owner-planning": "Business Owner Planning",
  "wealth-management": "Wealth Management",
  other: "Other",
};
const CONTACT_METHOD_VALUES = new Set(["email", "phone"]);
// Lead alerts go to the team inbox AND Bethany (Ron's directive,
// 2026-10-19). LEAD_NOTIFICATION_TO may override with a comma-separated
// list; the default already carries both addresses.
const LEAD_NOTIFICATION_RECIPIENTS = (process.env.LEAD_NOTIFICATION_TO ?? "info@reserveinvestmentgroup.com,bethany.williams@reserveinvestmentgroup.com")
  .split(",")
  .map((address) => address.trim())
  .filter(Boolean);

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
  "funnelData",
  "quoteData",
  "checkupData",
] as const;

const FUNNEL_OFFERS: Record<string, string> = {
  "auto-home-insurance-review": "Auto, Home & Business Insurance Review",
  "term-life-review": "Term Life Insurance Review",
  "iul-conversation": "Indexed Universal Life Conversation",
  "final-expense-review": "Final Expense Insurance Review",
  "merchant-statement-review": "Merchant Statement Review",
  "medicare-one-pager": "Medicare One-Pager Download",
};

// Quote worksheets (/quote/*) — full worksheet detail is written to the
// Folk note and the notification email (Ron's directive, 2026-10-19,
// reversing the earlier routing-metadata-only design).
const QUOTE_OFFERS: Record<string, string> = {
  "quote-auto": "Auto Insurance Quote Worksheet",
  "quote-home": "Home Insurance Quote Worksheet",
  "quote-life": "Life Insurance Quote Worksheet",
  "quote-health": "Health & Medicare Quote Worksheet",
  "quote-condo": "Condo Insurance Quote Worksheet",
  "quote-motorcycle": "Motorcycle Insurance Quote Worksheet",
  "quote-boat": "Boat Insurance Quote Worksheet",
  "quote-rv": "RV Insurance Quote Worksheet",
};

// Annuity Owner's Checkup (/annuity-checkup/*) — opt-in captures the
// magnet request; the application carries the full qualification detail
// and is tier-scored per the blueprint (Ron's build order, 2026-10-20).
const CHECKUP_OPTIN_FORM_ID = "annuity-checkup-optin";
const CHECKUP_APPLY_FORM_ID = "annuity-checkup-apply";
const CHECKUP_OFFER_TITLE = "Annuity Checkup";
const CHECKUP_LICENSED_STATES = new Set(["Ohio", "Michigan", "Florida"]);
const CHECKUP_HIGH_VALUE_BANDS = new Set(["$250–500K", "$500K–$1M", "$1M+"]);
const CHECKUP_MID_VALUE_BAND = "$100–250K";
const CHECKUP_SOON_TIMELINES = new Set(["I'm exploring now", "I'd like answers in the next 30–90 days"]);

const CHECKUP_DETAIL_LABELS: Record<string, string> = {
  state: "State",
  age_band: "Age band",
  owns_annuity: "Owns an annuity",
  annuity_type: "Annuity type",
  carrier: "Carrier",
  value_band: "Approximate contract value",
  purchase_window: "Purchased",
  income_started: "Income started",
  concerns: "What's on your mind",
  concerns_other: "Other concern (detail)",
  other_assets_band: "Other retirement savings",
  timeline: "Timeline",
  preferred_format: "Preferred format",
  best_time: "Best time to reach",
};

const FUNNEL_DETAIL_LABELS: Record<string, string> = {
  coverage_type: "Coverage type",
  zip_code: "ZIP code",
  currently_insured: "Currently insured",
  renewal_date: "Renewal date",
  term_length: "Term length",
  coverage_amount: "Coverage amount",
  planning_goal: "Planning goal",
  final_expense_coverage: "Final-expense coverage",
  business_name: "Business name",
  medicare_status: "Medicare situation",
  age: "Age",
  tobacco_use: "Tobacco use",
  health_conditions: "Health conditions (past 2 years)",
};

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

function cleanFunnelData(value: unknown): Record<string, string> {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  const result: Record<string, string> = {};
  for (const key of Object.keys(FUNNEL_DETAIL_LABELS)) {
    const cleaned = cleanString((value as Record<string, unknown>)[key], 120);
    if (cleaned) result[key] = cleaned;
  }
  return result;
}

function formatFunnelDetails(details: Record<string, string>) {
  return Object.entries(details)
    .map(([key, value]) => `${FUNNEL_DETAIL_LABELS[key]}: ${value}`)
    .join("; ");
}

type QuoteEntry = { label: string; value: string };

function cleanQuoteData(value: unknown): QuoteEntry[] {
  if (!Array.isArray(value)) return [];
  const result: QuoteEntry[] = [];
  for (const item of value.slice(0, 150)) {
    if (!item || typeof item !== "object" || Array.isArray(item)) continue;
    const label = cleanString((item as Record<string, unknown>).label, 80);
    // Worksheet long fields (vehicles, claims, medications) need more room
    // than the 120-char funnel cap — allow up to 1000 chars per value.
    const entryValue = cleanString((item as Record<string, unknown>).value, 1000);
    if (label && entryValue) result.push({ label, value: entryValue });
  }
  return result;
}

function formatQuoteDetails(entries: QuoteEntry[]) {
  const lines: string[] = [];
  for (const entry of entries) {
    const prefix = `${entry.label}: `;
    const existing = lines.findIndex((line) => line.startsWith(prefix));
    if (existing >= 0) lines[existing] = `${lines[existing]}, ${entry.value}`;
    else lines.push(`${entry.label}: ${entry.value}`);
  }
  return lines.join("\n");
}

function cleanCheckupData(value: unknown): Record<string, string> {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  const result: Record<string, string> = {};
  for (const key of Object.keys(CHECKUP_DETAIL_LABELS)) {
    // Concern lists and free-text details get more room than short fields.
    const max = key === "concerns" || key === "concerns_other" ? 500 : 120;
    const cleaned = cleanString((value as Record<string, unknown>)[key], max);
    if (cleaned) result[key] = cleaned;
  }
  return result;
}

function formatCheckupDetails(details: Record<string, string>) {
  return Object.entries(details)
    .map(([key, value]) => `${CHECKUP_DETAIL_LABELS[key]}: ${value}`)
    .join("\n");
}

// Blueprint §4: A = owns an annuity ≥ $250K with a near timeline;
// B = owns at $100–250K, or ≥ $250K still just learning;
// C = under $100K (or value unconfirmed), no annuity yet, or wrong state.
function scoreCheckupTier(details: Record<string, string>): "A" | "B" | "C" {
  if (details.state && !CHECKUP_LICENSED_STATES.has(details.state)) return "C";
  if (details.owns_annuity !== "Yes") return "C";
  const isHigh = CHECKUP_HIGH_VALUE_BANDS.has(details.value_band ?? "");
  const isMid = details.value_band === CHECKUP_MID_VALUE_BAND;
  if (isHigh && CHECKUP_SOON_TIMELINES.has(details.timeline ?? "")) return "A";
  if (isHigh || isMid) return "B";
  return "C";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildUnsubscribeUrl(email: string): string {
  const secret = process.env.UNSUBSCRIBE_SECRET;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://reserveinvestmentgroup.com";
  if (!secret) return `${siteUrl}/contact/`;
  const token = createHmac("sha256", secret).update(email.toLowerCase().trim()).digest("hex");
  return `${siteUrl}/.netlify/functions/unsubscribe?email=${encodeURIComponent(email)}&token=${token}`;
}

function buildLeadNotification(input: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  areaOfInterest: string;
  preferredContactMethod: string;
  formId: string;
  pageSlug: string;
  magnetTitle?: string;
  detailBlock?: string;
  detailHeading?: string;
  subjectSuffix?: string;
}): { subject: string; htmlBody: string } {
  const fullName = `${input.firstName} ${input.lastName}`.trim();
  const rows: Array<[string, string]> = [
    ["Name", fullName],
    ["Email", input.email],
    ["Phone", input.phone || "Not provided"],
    ["Preferred contact", input.preferredContactMethod],
    ["Area of interest", input.areaOfInterest || "Not specified"],
    ["Form", input.formId],
    ["Page", input.pageSlug],
    ...(input.magnetTitle ? [["Lead magnet", input.magnetTitle] as [string, string]] : []),
  ];

  const htmlRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px 6px 0;font-weight:600;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:6px 0;">${escapeHtml(value)}</td></tr>`
    )
    .join("");

  const detailRows = (input.detailBlock ?? "")
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      const splitAt = line.indexOf(": ");
      const label = splitAt >= 0 ? line.slice(0, splitAt) : line;
      const value = splitAt >= 0 ? line.slice(splitAt + 2) : "";
      return `<tr><td style="padding:6px 12px 6px 0;font-weight:600;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:6px 0;">${escapeHtml(value)}</td></tr>`;
    })
    .join("");
  const detailSection = detailRows
    ? `<p style="margin-top:16px;"><strong>${escapeHtml(input.detailHeading ?? "Full worksheet detail")}</strong></p><table role="presentation" style="border-collapse:collapse;">${detailRows}</table>`
    : "";

  return {
    subject: `New website lead: ${fullName}${input.subjectSuffix ?? ""}`,
    htmlBody:
      `<p>A new lead was submitted on reserveinvestmentgroup.com.</p>` +
      `<table role="presentation" style="border-collapse:collapse;">${htmlRows}</table>` +
      detailSection +
      `<p style="margin-top:16px;">The lead has also been saved to Folk under Website Leads.</p>` +
      `<p style="font-size:12px;color:#555;">Do not reply with or request Social Security numbers, account credentials, tax documents, investment statements, or other sensitive information by email.</p>`,
  };
}

function buildLeadThankYou(firstName: string): { subject: string; htmlBody: string } {
  const safeFirstName = escapeHtml(firstName);
  return {
    subject: "Thanks for reaching out — one quick question",
    htmlBody:
      `<p>Hi ${safeFirstName},</p>` +
      `<p>Thank you for reaching out to Reserve Investment Group.</p>` +
      `<p>We received your information, and someone from our team will review it shortly.</p>` +
      `<p>Before we connect, I’d like to ask you one simple question:</p>` +
      `<p><strong>What was happening financially that caused you to reach out today?</strong></p>` +
      `<p>There’s no “right” answer. Some people contact us because they’re approaching retirement. Others are concerned about whether they’re making the right financial decisions, paying too much in taxes, managing investments effectively, or simply wondering whether their current plan is still working for them.</p>` +
      `<p>Understanding <strong>what prompted you to take action now</strong> helps us make the conversation more relevant to you.</p>` +
      `<p>If you’d like, simply reply to this email with a sentence or two.</p>` +
      `<p>When we speak, our goal won’t be to pressure you into making a decision. We’ll first try to understand where you are today, what you would like to accomplish, what may be getting in the way, and whether there is actually a reason for us to continue the conversation.</p>` +
      `<p>If we believe we can help, we’ll explain what that might look like. If not, we’ll tell you that too.</p>` +
      `<p>Thank you again for giving us the opportunity to learn more about what’s important to you.</p>` +
      `<p>Warm regards,<br><strong>Reserve Investment Group, Inc.</strong><br>info@reserveinvestmentgroup.com<br>ReserveInvestmentGroup.com</p>` +
      `<p style="font-size:12px;color:#555;">This message is for informational purposes only and is not intended as investment, tax, or legal advice. Please do not send Social Security numbers, account passwords, complete account numbers, tax documents, or other sensitive personal information by email.</p>`,
  };
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
    const funnelData = cleanFunnelData(submission.funnelData);
    const quoteData = cleanQuoteData(submission.quoteData);
    const checkupData = cleanCheckupData(submission.checkupData);

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
    const funnelOffer = FUNNEL_OFFERS[formId];
    const quoteOffer = QUOTE_OFFERS[formId];
    const isCheckupOptin = formId === CHECKUP_OPTIN_FORM_ID;
    const isCheckupApply = formId === CHECKUP_APPLY_FORM_ID;
    let quoteDetailBlock = "";
    let checkupDetailBlock = "";
    let notificationDetailHeading: string | undefined;
    let notificationSubjectSuffix: string | undefined;
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
    } else if (funnelOffer) {
      const detailSummary = formatFunnelDetails(funnelData);
      customFieldValues = {
        [FOLK_WEBSITE_LEADS_GROUP_ID]: {
          "Lead Source": "Website Funnel",
          "Offer Interest": funnelOffer,
          "Landing Page Viewed": pageSlug,
          "Funnel Stage": "New Website Inquiry",
        },
      };
      noteBody = `Website funnel "${funnelOffer}" submitted on ${today} from ${pageSlug}. Preferred contact method: ${preferredContactMethod}.${detailSummary ? ` Funnel details: ${detailSummary}.` : ""}`;
    } else if (quoteOffer) {
      // Full worksheet detail goes into the Folk note (Ron's directive,
      // 2026-10-19) — every field the visitor provided, not a summary.
      quoteDetailBlock = formatQuoteDetails(quoteData);
      customFieldValues = {
        [FOLK_WEBSITE_LEADS_GROUP_ID]: {
          "Lead Source": "Website Quote Worksheet",
          "Offer Interest": quoteOffer,
          "Landing Page Viewed": pageSlug,
          "Funnel Stage": "New Website Inquiry",
        },
      };
      noteBody = `Website quote worksheet "${quoteOffer}" submitted on ${today} from ${pageSlug}. Preferred contact method: ${preferredContactMethod}.\n\nFull worksheet detail:\n${quoteDetailBlock || "(no worksheet fields completed)"}`;
    } else if (isCheckupOptin) {
      customFieldValues = {
        [FOLK_WEBSITE_LEADS_GROUP_ID]: {
          "Lead Source": "Website Annuity Checkup",
          "Offer Interest": CHECKUP_OFFER_TITLE,
          "Landing Page Viewed": pageSlug,
          "Funnel Stage": "Magnet opt-in",
        },
      };
      noteBody = `Requested the Annuity Owner's Checkup sheet on ${today} from ${pageSlug} (magnet opt-in). Checkup sheet: /annuity-checkup/checkup-sheet/. Preferred contact method: ${preferredContactMethod}. Next step: the application at /annuity-checkup/apply/ — Bethany's confirmation step applies once an application is completed.`;
    } else if (isCheckupApply) {
      // Full application detail goes into the Folk note and the alert
      // email (same full-detail rule as the quote worksheets), with the
      // blueprint §4 tier scored server-side and carried in both.
      const tier = scoreCheckupTier(checkupData);
      const checkupDetails = formatCheckupDetails(checkupData);
      checkupDetailBlock = `Checkup tier: ${tier}\n${checkupDetails}`;
      notificationDetailHeading = "Full application detail";
      notificationSubjectSuffix = ` — Annuity Checkup (Tier ${tier})`;
      customFieldValues = {
        [FOLK_WEBSITE_LEADS_GROUP_ID]: {
          "Lead Source": "Website Annuity Checkup",
          "Offer Interest": CHECKUP_OFFER_TITLE,
          "Landing Page Viewed": pageSlug,
          "Funnel Stage": "New Website Inquiry",
        },
      };
      noteBody = `Website Annuity Checkup application submitted on ${today} from ${pageSlug}. Checkup tier: ${tier} (A = book now, DOSSIER before the call; B = booking offered, Bethany calls first if no booking in 48h; C = magnet + nurture only, no calendar access). Preferred contact method: ${preferredContactMethod}.\n\nFull application detail:\n${checkupDetails || "(no application fields completed)"}`;
    } else {
      noteBody = `Website form "${formId}" submitted on ${today} from ${pageSlug}. Area of interest: ${AREA_LABELS[areaOfInterest] ?? areaOfInterest ?? "not specified"}. Preferred contact method: ${preferredContactMethod}.`;
    }

    let personId: string;
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

      personId = person.id;
      const noteCreated = await folkCreateNote(personId, noteBody);
      if (!noteCreated) {
        console.error("[submit-lead] Folk note creation failed after lead persisted", { formId });
      }
    } catch (crmError) {
      console.error("[submit-lead] Folk forwarding failed", crmError);
      return { statusCode: 502, body: JSON.stringify({ ok: false, error: "crm_write_failed" }) };
    }

    const notification = buildLeadNotification({
      firstName,
      lastName,
      email,
      phone,
      areaOfInterest: AREA_LABELS[areaOfInterest] ?? areaOfInterest,
      preferredContactMethod,
      formId,
      pageSlug,
      magnetTitle: magnet?.title,
      detailBlock: quoteDetailBlock || checkupDetailBlock || undefined,
      detailHeading: notificationDetailHeading,
      subjectSuffix: notificationSubjectSuffix,
    });
    // Alert every recipient (team inbox + Bethany). The notification
    // counts as sent if at least one copy lands; failures are named in a
    // Folk note so a missed alert is never silent.
    const notificationAttempts = await Promise.all(
      LEAD_NOTIFICATION_RECIPIENTS.map(async (to) => ({
        to,
        result: await sendGraphMail({ to, subject: notification.subject, htmlBody: notification.htmlBody }),
      }))
    );
    const failedRecipients = notificationAttempts.filter((attempt) => !attempt.result.ok).map((attempt) => attempt.to);
    const notificationResult = { ok: failedRecipients.length < notificationAttempts.length };

    if (!notificationResult.ok) {
      console.error("[submit-lead] internal lead notification failed for all recipients", failedRecipients);
      await folkCreateNote(personId, `Internal lead-notification email to ${LEAD_NOTIFICATION_RECIPIENTS.join(", ")} failed after this lead was saved. Review Netlify function logs and Microsoft Graph configuration.`).catch(() => false);
    } else {
      console.log("[submit-lead] internal lead notification sent", { formId });
      if (failedRecipients.length > 0) {
        console.error("[submit-lead] internal lead notification failed for some recipients", failedRecipients);
        await folkCreateNote(personId, `Internal lead-notification email failed for: ${failedRecipients.join(", ")} (the other recipients were alerted). Review Netlify function logs and Microsoft Graph configuration.`).catch(() => false);
      }
    }

    const thankYou = buildLeadThankYou(firstName);
    const thankYouResult = await sendGraphMail({
      to: email,
      subject: thankYou.subject,
      htmlBody: thankYou.htmlBody,
    });

    if (!thankYouResult.ok) {
      console.error("[submit-lead] lead thank-you email failed", thankYouResult.error);
      await folkCreateNote(personId, "Automatic thank-you email failed after this lead was saved. Review Netlify function logs and Microsoft Graph configuration.").catch(() => false);
    } else {
      console.log("[submit-lead] lead thank-you email sent", { formId });
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        ok: true,
        notificationSent: notificationResult.ok,
        thankYouSent: thankYouResult.ok,
      }),
    };
  } catch {
    return { statusCode: 400, body: JSON.stringify({ ok: false }) };
  }
};
