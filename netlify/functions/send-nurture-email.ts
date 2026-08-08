import type { Handler } from "@netlify/functions";
import { timingSafeEqual } from "node:crypto";
import { sendGraphMail } from "./lib/msgraph";

// Internal-only endpoint, added 2026-08-06. The daily
// `email-nurture-sequence-sender` scheduled task calls this (via curl)
// instead of the Outlook MCP connector's outlook_send_mail, specifically
// so nurture emails can go out with a real
// "From: info@reserveinvestmentgroup.com" — something the MCP connector
// explicitly can't do (see EMAIL-NURTURE-SEQUENCES.md Section 8).
//
// Keeping the actual Microsoft Graph credentials here, in a proper
// Netlify environment variable, rather than inside the scheduled task's
// own prompt file (which is a plaintext file on disk with no secret-
// storage properties) is the whole reason this exists as a separate
// function rather than folding Graph calls directly into the scheduled
// task's own instructions.
//
// Protected by a shared secret header, not public auth — this is not a
// user-facing endpoint and should never be linked from the site. Anyone
// with the secret can send email as this mailbox, so treat
// INTERNAL_SEND_SECRET with the same care as any other credential in
// this project.

function isAuthorized(providedSecret: string | undefined): boolean {
  const expected = process.env.INTERNAL_SEND_SECRET;
  if (!expected || !providedSecret) return false;
  const expectedBuf = Buffer.from(expected);
  const providedBuf = Buffer.from(providedSecret);
  if (expectedBuf.length !== providedBuf.length) return false;
  return timingSafeEqual(expectedBuf, providedBuf);
}

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ ok: false, error: "Method Not Allowed" }) };
  }

  const providedSecret = event.headers["x-internal-secret"] ?? event.headers["X-Internal-Secret"];
  if (!isAuthorized(providedSecret)) {
    return { statusCode: 401, body: JSON.stringify({ ok: false, error: "Unauthorized" }) };
  }

  try {
    const raw = JSON.parse(event.body ?? "{}");
    const to = typeof raw.to === "string" ? raw.to : undefined;
    const subject = typeof raw.subject === "string" ? raw.subject : undefined;
    const htmlBody = typeof raw.htmlBody === "string" ? raw.htmlBody : undefined;

    if (!to || !subject || !htmlBody) {
      return { statusCode: 400, body: JSON.stringify({ ok: false, error: "to, subject, and htmlBody are required" }) };
    }

    // Non-PII logging only, consistent with FORM-DATA-FLOW.md.
    console.log("[send-nurture-email] send requested");

    const result = await sendGraphMail({ to, subject, htmlBody });
    if (!result.ok) {
      console.error("[send-nurture-email] Graph send failed", result.error);
      return { statusCode: 502, body: JSON.stringify({ ok: false, error: result.error }) };
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch {
    return { statusCode: 400, body: JSON.stringify({ ok: false, error: "Invalid request body" }) };
  }
};
