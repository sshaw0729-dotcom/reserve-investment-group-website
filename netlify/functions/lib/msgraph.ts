// Microsoft Graph client — app-only (client-credentials) mail sending,
// added 2026-08-06 specifically to send nurture-sequence emails with a
// real "From: info@reserveinvestmentgroup.com" address, which the
// connected Outlook/Exchange MCP connector's outlook_send_mail tool
// cannot do (it hard-blocks any From other than the signed-in account —
// see EMAIL-NURTURE-SEQUENCES.md Section 8).
//
// This does NOT work out of the box. It requires tenant-admin setup that
// nothing in this codebase or this agent can perform — see the checklist
// in MISSING-INFORMATION-REGISTER.md #17b before wiring this up for
// real. Until that setup exists, every call here will fail with a clear
// auth error, not silently do the wrong thing.
//
// Confirmed working 2026-08-07: the practice owner completed the tenant-
// admin setup (MISSING-INFORMATION-REGISTER.md #17b) and ran a live test
// send via this exact token + sendMail pattern — the message arrived
// with From: info@reserveinvestmentgroup.com as intended. The "send
// from a proxy address/alias by setting message.from" behavior is
// confirmed on this tenant, not just documented. What's still unverified
// is this specific file's error handling and the folk-driven scheduled
// job around it (netlify/functions/lib/folk.ts remains flagged
// separately) — this comment previously said the whole mechanism was
// unverified; narrowing that claim now that the core auth+send path has
// a real, positive test result.

const GRAPH_BASE = "https://graph.microsoft.com/v1.0";

async function getGraphAccessToken(): Promise<string> {
  const tenantId = process.env.MS_GRAPH_TENANT_ID;
  const clientId = process.env.MS_GRAPH_CLIENT_ID;
  const clientSecret = process.env.MS_GRAPH_CLIENT_SECRET;
  if (!tenantId || !clientId || !clientSecret) {
    throw new Error("MS_GRAPH_TENANT_ID / MS_GRAPH_CLIENT_ID / MS_GRAPH_CLIENT_SECRET not configured");
  }

  const res = await fetch(`https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: "client_credentials",
      scope: "https://graph.microsoft.com/.default",
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Graph token request failed (${res.status}): ${detail.slice(0, 300)}`);
  }
  const data = await res.json();
  if (!data.access_token) throw new Error("Graph token response missing access_token");
  return data.access_token as string;
}

export async function sendGraphMail(input: {
  to: string;
  subject: string;
  htmlBody: string;
}): Promise<{ ok: true } | { ok: false; error: string }> {
  const mailboxUpn = process.env.MS_GRAPH_SEND_AS_MAILBOX; // the real mailbox, e.g. ron.shaw@reserveinvestmentgroup.com
  const fromAlias = process.env.MS_GRAPH_FROM_ALIAS; // the alias to show as From, e.g. info@reserveinvestmentgroup.com
  if (!mailboxUpn || !fromAlias) {
    return { ok: false, error: "MS_GRAPH_SEND_AS_MAILBOX / MS_GRAPH_FROM_ALIAS not configured" };
  }

  try {
    const token = await getGraphAccessToken();
    const res = await fetch(
      `${GRAPH_BASE}/users/${encodeURIComponent(mailboxUpn)}/sendMail`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: {
            subject: input.subject,
            body: { contentType: "HTML", content: input.htmlBody },
            toRecipients: [{ emailAddress: { address: input.to } }],
            from: { emailAddress: { address: fromAlias } },
          },
          saveToSentItems: true,
        }),
      }
    );

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      return { ok: false, error: `Graph sendMail failed (${res.status}): ${detail.slice(0, 300)}` };
    }
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "unknown error" };
  }
}
