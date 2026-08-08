// folk CRM API client — thin wrapper for the Netlify Functions that need
// to read/write the practice's real folk workspace (workspace name
// "Reserve Investment Group, Inc.", confirmed 2026-08-06).
//
// [FACT TO VERIFY] This is written against folk's documented public REST
// API pattern (https://developer.folk.app — bearer-token auth, JSON,
// resource-oriented URLs) as of 2026-08-06. The exact request/response
// shape for each endpoint below was not independently re-verified against
// the live API reference before this was written (developer.folk.app is a
// JS-rendered app; the fetch tool available in this environment could not
// render it). Confirm each endpoint against
// https://developer.folk.app/api-reference before this ships to
// production, the same way DOMAIN-STRATEGY.md flags the Netlify routing
// assumption as unverified. Do not treat this file as a verified
// integration until that check happens.
//
// Requires FOLK_API_KEY as a Netlify environment variable (per-context).
// Generate it in folk: workspace settings → API. Never commit the actual
// key value — see .env.example.

const FOLK_API_BASE = "https://api.folk.app/v1";

// Fixed workspace identifiers from the practice's real folk workspace,
// confirmed 2026-08-06. Group IDs are workspace-specific and don't change
// unless the group is deleted/recreated in folk directly.
export const FOLK_WEBSITE_LEADS_GROUP_ID = "grp_1a8efb94-b81f-4182-beac-e439d1ddf681";
export const FOLK_EMAIL_UNSUBSCRIBED_GROUP_ID = "grp_0943ea67-78ff-4974-b66d-22b58056520d";

function folkHeaders(): HeadersInit {
  const apiKey = process.env.FOLK_API_KEY;
  if (!apiKey) {
    throw new Error("FOLK_API_KEY is not configured");
  }
  return {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  };
}

export type FolkPerson = {
  id: string;
  emails?: string[];
  firstName?: string;
  lastName?: string;
};

/**
 * Look up an existing folk person by email so downloads/replies don't
 * create duplicate records. Returns null on no match or on any API
 * failure — callers should treat this as "unknown, proceed to create"
 * rather than block the site's user-facing response on a CRM outage.
 */
export async function folkFindPersonByEmail(email: string): Promise<FolkPerson | null> {
  try {
    const res = await fetch(
      `${FOLK_API_BASE}/people?email=${encodeURIComponent(email)}`,
      { headers: folkHeaders() }
    );
    if (!res.ok) return null;
    const data = await res.json();
    const match = Array.isArray(data?.items) ? data.items[0] : data?.[0];
    return match ?? null;
  } catch {
    return null;
  }
}

export async function folkCreatePerson(input: {
  email: string;
  firstName?: string;
  lastName?: string;
  groupIds: string[];
  customFieldValues?: Record<string, Record<string, string>>;
}): Promise<FolkPerson | null> {
  try {
    const res = await fetch(`${FOLK_API_BASE}/people`, {
      method: "POST",
      headers: folkHeaders(),
      body: JSON.stringify({
        emails: [input.email],
        firstName: input.firstName,
        lastName: input.lastName,
        groups: input.groupIds.map((id) => ({ id })),
        customFieldValues: input.customFieldValues,
      }),
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function folkUpdatePerson(
  personId: string,
  input: {
    addGroupIds?: string[];
    customFieldValues?: Record<string, Record<string, string>>;
  }
): Promise<boolean> {
  try {
    const res = await fetch(`${FOLK_API_BASE}/people/${personId}`, {
      method: "PATCH",
      headers: folkHeaders(),
      body: JSON.stringify({
        addGroupIds: input.addGroupIds,
        customFieldValues: input.customFieldValues,
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function folkCreateNote(personId: string, content: string): Promise<boolean> {
  try {
    const res = await fetch(`${FOLK_API_BASE}/notes`, {
      method: "POST",
      headers: folkHeaders(),
      body: JSON.stringify({
        entity: { id: personId },
        visibility: "public",
        content,
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

/**
 * Returns true if this email is on the suppression list and must never
 * receive an automated nurture email. Fails closed on API error — if we
 * can't confirm someone ISN'T unsubscribed, we don't send to them. This
 * is the opposite fail-direction from the lookups above deliberately:
 * a missed lead-capture is a minor inconvenience, an email to someone
 * who opted out is a compliance problem.
 */
export async function folkIsUnsubscribed(email: string): Promise<boolean> {
  try {
    const person = await folkFindPersonByEmail(email);
    if (!person) return false;
    const res = await fetch(
      `${FOLK_API_BASE}/people/${person.id}?include=groups`,
      { headers: folkHeaders() }
    );
    if (!res.ok) return true; // fail closed
    const data = await res.json();
    const groupIds: string[] = (data?.groups ?? []).map((g: { id: string }) => g.id);
    return groupIds.includes(FOLK_EMAIL_UNSUBSCRIBED_GROUP_ID);
  } catch {
    return true; // fail closed
  }
}
