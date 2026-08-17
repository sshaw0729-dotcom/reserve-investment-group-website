// folk CRM API client — thin wrapper for the Netlify Functions that need
// to read/write the practice's real folk workspace.
//
// Verified against folk's public REST API documentation on 2026-08-16.
// Requires FOLK_API_KEY as a Netlify environment variable.

const FOLK_API_BASE = "https://api.folk.app/v1";

export const FOLK_WEBSITE_LEADS_GROUP_ID = "grp_1a8efb94-b81f-4182-beac-e439d1ddf681";
export const FOLK_EMAIL_UNSUBSCRIBED_GROUP_ID = "grp_0943ea67-78ff-4974-b66d-22b58056520d";

function folkHeaders(): HeadersInit {
  const apiKey = process.env.FOLK_API_KEY;
  if (!apiKey) throw new Error("FOLK_API_KEY is not configured");
  return {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  };
}

export type FolkPerson = {
  id: string;
  emails?: string[];
  phones?: string[];
  firstName?: string;
  lastName?: string;
  groups?: Array<{ id: string; name?: string }>;
};

type FolkEnvelope<T> = { data?: T };

export async function folkFindPersonByEmail(email: string): Promise<FolkPerson | null> {
  try {
    const url = new URL(`${FOLK_API_BASE}/people`);
    url.searchParams.set("filter[emails][eq]", email.toLowerCase().trim());
    url.searchParams.set("limit", "1");
    const res = await fetch(url, { headers: folkHeaders() });
    if (!res.ok) return null;
    const payload = (await res.json()) as FolkEnvelope<FolkPerson[]>;
    return Array.isArray(payload.data) ? payload.data[0] ?? null : null;
  } catch {
    return null;
  }
}

export async function folkCreatePerson(input: {
  email: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  groupIds: string[];
  customFieldValues?: Record<string, Record<string, unknown>>;
}): Promise<FolkPerson | null> {
  try {
    const res = await fetch(`${FOLK_API_BASE}/people`, {
      method: "POST",
      headers: folkHeaders(),
      body: JSON.stringify({
        emails: [input.email],
        phones: input.phone ? [input.phone] : undefined,
        firstName: input.firstName,
        lastName: input.lastName,
        groups: input.groupIds.map((id) => ({ id })),
        customFieldValues: input.customFieldValues,
      }),
    });
    if (!res.ok) return null;
    const payload = (await res.json()) as FolkEnvelope<FolkPerson>;
    return payload.data ?? null;
  } catch {
    return null;
  }
}

export async function folkUpdatePerson(
  person: FolkPerson,
  input: {
    phone?: string;
    addGroupIds?: string[];
    customFieldValues?: Record<string, Record<string, unknown>>;
  }
): Promise<boolean> {
  try {
    const existingGroupIds = (person.groups ?? []).map((group) => group.id);
    const groups = [...new Set([...existingGroupIds, ...(input.addGroupIds ?? [])])].map((id) => ({ id }));
    const existingPhones = person.phones ?? [];
    const phones = input.phone ? [...new Set([...existingPhones, input.phone])] : undefined;
    const res = await fetch(`${FOLK_API_BASE}/people/${person.id}`, {
      method: "PATCH",
      headers: folkHeaders(),
      body: JSON.stringify({
        groups,
        phones,
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

/** Fail closed: an API failure is treated as suppressed. */
export async function folkIsUnsubscribed(email: string): Promise<boolean> {
  try {
    const url = new URL(`${FOLK_API_BASE}/people`);
    url.searchParams.set("filter[emails][eq]", email.toLowerCase().trim());
    url.searchParams.set("filter[groups][in][id]", FOLK_EMAIL_UNSUBSCRIBED_GROUP_ID);
    url.searchParams.set("limit", "1");
    const res = await fetch(url, { headers: folkHeaders() });
    if (!res.ok) return true;
    const payload = (await res.json()) as FolkEnvelope<FolkPerson[]>;
    if (!Array.isArray(payload.data)) return true;
    return payload.data.length > 0;
  } catch {
    return true;
  }
}
