import type { Handler } from "@netlify/functions";
import { createHmac, timingSafeEqual } from "node:crypto";
import { folkFindPersonByEmail, folkCreatePerson, folkUpdatePerson, FOLK_EMAIL_UNSUBSCRIBED_GROUP_ID } from "./lib/folk";

// CAN-SPAM requires a working unsubscribe mechanism (see
// EMAIL-NURTURE-SEQUENCES.md Section 1). This is that mechanism: a link
// in every nurture email's footer points here with the recipient's email
// and a signed token, so clicking it immediately (not on some manual
// review cycle) adds them to the "Email Unsubscribed" folk group. The
// scheduled sequence-sender checks that group before every send.
//
// Token is a simple HMAC over the email address using UNSUBSCRIBE_SECRET,
// so a stranger can't unsubscribe someone else's address by guessing a
// URL — not full auth, but enough to stop casual abuse. Generate the
// token when building each email's unsubscribe link:
//   crypto.createHmac("sha256", UNSUBSCRIBE_SECRET).update(email.toLowerCase()).digest("hex")

function isValidToken(email: string, token: string): boolean {
  const secret = process.env.UNSUBSCRIBE_SECRET;
  if (!secret) return false;
  const expected = createHmac("sha256", secret).update(email.toLowerCase().trim()).digest("hex");
  const expectedBuf = Buffer.from(expected, "hex");
  const providedBuf = Buffer.from(token, "hex");
  if (expectedBuf.length !== providedBuf.length) return false;
  return timingSafeEqual(expectedBuf, providedBuf);
}

const CONFIRMATION_PAGE = (message: string) => `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<title>Unsubscribe — Reserve Investment Group, Inc</title>
<meta name="robots" content="noindex, nofollow">
<style>body{font-family:system-ui,sans-serif;max-width:32rem;margin:4rem auto;padding:0 1.5rem;color:#1a1a1a;line-height:1.5;}</style>
</head><body>
<p>${message}</p>
<p><a href="https://reserveinvestmentgroup.com/">Return to reserveinvestmentgroup.com</a></p>
</body></html>`;

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "GET") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const email = event.queryStringParameters?.email?.trim().toLowerCase();
  const token = event.queryStringParameters?.token;

  if (!email || !token || !isValidToken(email, token)) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "text/html" },
      body: CONFIRMATION_PAGE("This unsubscribe link is invalid or has expired. Please contact us directly to be removed from our list."),
    };
  }

  try {
    const existing = await folkFindPersonByEmail(email);
    if (existing) {
      await folkUpdatePerson(existing.id, { addGroupIds: [FOLK_EMAIL_UNSUBSCRIBED_GROUP_ID] });
    } else {
      // No CRM record yet (shouldn't normally happen — you can't get an
      // unsubscribe link without having received an email first, which
      // means a record already exists). Create one anyway so a future
      // sync can't accidentally re-add this address without the
      // suppression flag attached.
      await folkCreatePerson({ email, groupIds: [FOLK_EMAIL_UNSUBSCRIBED_GROUP_ID] });
    }

    // Non-PII confirmation only — no field values logged, consistent with
    // FORM-DATA-FLOW.md.
    console.log("[unsubscribe] processed request");

    return {
      statusCode: 200,
      headers: { "Content-Type": "text/html" },
      body: CONFIRMATION_PAGE("You've been unsubscribed and won't receive further emails from this sequence."),
    };
  } catch {
    return {
      statusCode: 500,
      headers: { "Content-Type": "text/html" },
      body: CONFIRMATION_PAGE("Something went wrong processing this request. Please contact us directly to be removed from our list."),
    };
  }
};
