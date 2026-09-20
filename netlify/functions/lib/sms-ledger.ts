import type { SmsConsentEvent } from "../../../src/lib/sms/consent-policy";

const BASE = "https://api.folk.app/v1";
const GROUP_ID = "grp_1a8efb94-b81f-4182-beac-e439d1ddf681";
const PREFIX = "RIG_SMS_CONSENT_EVENT_V1 ";

type Person = { id: string; emails?: string[]; phones?: string[]; firstName?: string; lastName?: string; groups?: Array<{ id: string }> };

type Note = { id: string; content: string; entity?: { id: string } };

function headers(apiKey: string): HeadersInit {
  return { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" };
}

async function folkJson(url: string, apiKey: string, init?: RequestInit): Promise<any> {
  const response = await fetch(url, { ...init, headers: headers(apiKey), cache: "no-store" });
  if (!response.ok) throw new Error(`Folk request failed: HTTP ${response.status}`);
  return response.json();
}

export async function findPersonByEmail(email: string, apiKey: string): Promise<Person | null> {
  const url = new URL(`${BASE}/people`);
  url.searchParams.set("filter[emails][eq]", email);
  url.searchParams.set("limit", "2");
  const result = await folkJson(url.toString(), apiKey);
  const people: Person[] = Array.isArray(result?.data?.items) ? result.data.items : Array.isArray(result?.data) ? result.data : [];
  if (people.length > 1) throw new Error("Ambiguous CRM record");
  return people[0] ?? null;
}

export async function findOrCreateSmsPerson(input: {
  email: string; firstName: string; lastName: string; phone: string;
}, apiKey: string): Promise<Person> {
  const existing = await findPersonByEmail(input.email, apiKey);
  if (!existing) {
    const created = await folkJson(`${BASE}/people`, apiKey, {
      method: "POST",
      body: JSON.stringify({ emails: [input.email], phones: [input.phone], firstName: input.firstName, lastName: input.lastName, groups: [{ id: GROUP_ID }] }),
    });
    if (typeof created?.data?.id !== "string") throw new Error("CRM person not persisted");
    return created.data;
  }
  const groupIds = [...new Set([...(existing.groups ?? []).map((group) => group.id), GROUP_ID])];
  const phones = [...new Set([...(existing.phones ?? []), input.phone])];
  const updated = await folkJson(`${BASE}/people/${encodeURIComponent(existing.id)}`, apiKey, {
    method: "PATCH",
    body: JSON.stringify({ phones, groups: groupIds.map((id) => ({ id })) }),
  });
  if (typeof updated?.data?.id !== "string") throw new Error("CRM update not confirmed");
  return updated.data;
}

export async function persistAndVerifySmsEvent(personId: string, event: SmsConsentEvent, apiKey: string): Promise<string> {
  const content = PREFIX + JSON.stringify(event);
  const created = await folkJson(`${BASE}/notes`, apiKey, {
    method: "POST",
    body: JSON.stringify({ entity: { id: personId }, visibility: "public", content }),
  });
  const noteId = created?.data?.id;
  if (typeof noteId !== "string") throw new Error("Consent note not persisted");
  const readBack = await folkJson(`${BASE}/notes/${encodeURIComponent(noteId)}`, apiKey);
  const note: Note | undefined = readBack?.data;
  if (note?.id !== noteId || note.content !== content || note.entity?.id !== personId) {
    throw new Error("Consent read-back verification failed");
  }
  return noteId;
}

export async function listSmsEvents(personId: string, apiKey: string): Promise<SmsConsentEvent[]> {
  const events: SmsConsentEvent[] = [];
  let url: string | undefined = `${BASE}/notes?entity.id=${encodeURIComponent(personId)}&limit=100`;
  // Fail closed if an unexpectedly large note history cannot be completely evaluated.
  for (let page = 0; url && page < 20; page++) {
    const result = await folkJson(url, apiKey);
    if (!Array.isArray(result?.data?.items)) throw new Error("CRM note history unavailable");
    for (const note of result.data.items as Note[]) {
      if (!note.content?.startsWith(PREFIX)) continue;
      try {
        const event: SmsConsentEvent = JSON.parse(note.content.slice(PREFIX.length));
        if (typeof event.id !== "string" || typeof event.phone !== "string" || typeof event.occurredAt !== "string" || !["OPT_IN", "STOP"].includes(event.kind)) throw new Error("Invalid audit record");
        events.push(event);
      } catch { throw new Error("Malformed SMS audit event: fail closed"); }
    }
    const next: unknown = result?.data?.pagination?.nextLink;
    if (typeof next !== "string") return events;
    if (!next.startsWith(`${BASE}/notes?`)) throw new Error("Unsafe CRM pagination link");
    url = next;
  }
  throw new Error("SMS audit history truncated: fail closed");
}
