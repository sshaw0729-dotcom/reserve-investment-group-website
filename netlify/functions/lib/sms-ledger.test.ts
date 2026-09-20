import { afterEach, describe, expect, it, vi } from "vitest";
import { listSmsEvents, persistAndVerifySmsEvent } from "./sms-ledger";
import { SMS_CONSENT_COPY, SMS_CONSENT_VERSION, type SmsConsentEvent } from "../../../src/lib/sms/consent-policy";

const personId = "per_55175e81-9a52-4ac3-930e-82792c23499b";
const noteId = "nte_91118b73-5a75-480b-b8e3-a33671c35cdc";
const event: SmsConsentEvent = {
  id: "test-event", kind: "OPT_IN", phone: "+12165550123", occurredAt: "2026-09-20T12:00:00.000Z",
  source: "https://reserveinvestmentgroup.com/sms-consent/", disclosureVersion: SMS_CONSENT_VERSION,
  disclosureCopy: SMS_CONSENT_COPY, method: "unchecked_web_checkbox",
};
const text = `RIG_SMS_CONSENT_EVENT_V1 ${JSON.stringify(event)}`;
const ok = (data: object) => new Response(JSON.stringify({ data }), { status: 200, headers: { "content-type": "application/json" } });

afterEach(() => vi.unstubAllGlobals());

describe("SMS audit persistence", () => {
  it("writes a private note and reads it back before confirming", async () => {
    const fetchMock = vi.fn().mockResolvedValueOnce(ok({ id: noteId })).mockResolvedValueOnce(ok({ id: noteId, entity: { id: personId }, content: text }));
    vi.stubGlobal("fetch", fetchMock);
    await expect(persistAndVerifySmsEvent(personId, event, "test-secret")).resolves.toBe(noteId);
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(JSON.parse(fetchMock.mock.calls[0][1].body).visibility).toBe("private");
  });
  it("rejects mismatched read-back data rather than accepting the POST alone", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValueOnce(ok({ id: noteId })).mockResolvedValueOnce(ok({ id: noteId, entity: { id: personId }, content: "tampered" })));
    await expect(persistAndVerifySmsEvent(personId, event, "test-secret")).rejects.toThrow("read-back verification failed");
  });
  it("reads the entire paginated event history", async () => {
    const pageOne = { items: [], pagination: { nextLink: `https://api.folk.app/v1/notes?limit=100&cursor=NEXT` } };
    const pageTwo = { items: [{ id: noteId, entity: { id: personId }, content: text }], pagination: {} };
    vi.stubGlobal("fetch", vi.fn().mockResolvedValueOnce(ok(pageOne)).mockResolvedValueOnce(ok(pageTwo)));
    await expect(listSmsEvents(personId, "test-secret")).resolves.toEqual([event]);
  });
  it("fails closed on malformed audit evidence", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(ok({ items: [{ id: noteId, entity: { id: personId }, content: "RIG_SMS_CONSENT_EVENT_V1 invalid" }], pagination: {} })));
    await expect(listSmsEvents(personId, "test-secret")).rejects.toThrow("Malformed SMS audit event");
  });
  it("fails closed when CRM history cannot be read", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(ok({ bogus: [] })));
    await expect(listSmsEvents(personId, "test-secret")).rejects.toThrow("CRM note history unavailable");
  });
});
