import { describe, expect, it } from "vitest";
import { canTransmitSms, classifySmsReply, latestConsentState, normalizeUsMobile, SMS_CONSENT_COPY, SMS_CONSENT_VERSION, type SmsConsentEvent } from "./consent-policy";

const event = (kind: "OPT_IN" | "STOP", occurredAt: string, id: string): SmsConsentEvent => ({
  kind, occurredAt, id, phone: "+12165550123", source: "https://reserveinvestmentgroup.com/sms-consent/",
  disclosureCopy: SMS_CONSENT_COPY, disclosureVersion: SMS_CONSENT_VERSION,
  method: kind === "OPT_IN" ? "unchecked_web_checkbox" : "verified_provider_stop",
});

describe("consent records and sending gate", () => {
  it("normalizes US numbers and rejects invalid numbers", () => {
    expect(normalizeUsMobile("(216) 555-0123")).toBe("+12165550123");
    expect(normalizeUsMobile("+1 216 555 0123")).toBe("+12165550123");
    expect(normalizeUsMobile("123")).toBeNull();
    expect(normalizeUsMobile("111-555-0123")).toBeNull();
    expect(normalizeUsMobile("(216) 555 0123 ext 5")).toBeNull();
  });
  it("unknown consent never permits sending", () => {
    expect(latestConsentState([], "+12165550123")).toBe("unknown");
    expect(canTransmitSms("unknown", true, true)).toBe(false);
  });
  it("STOP supersedes an opt-in regardless of event array order", () => {
    const optIn = event("OPT_IN", "2026-09-20T10:00:00.000Z", "1");
    const stop = event("STOP", "2026-09-20T11:00:00.000Z", "2");
    expect(latestConsentState([stop, optIn], optIn.phone)).toBe("opted_out");
    expect(canTransmitSms("opted_out", true, true)).toBe(false);
  });
  it("STOP wins timestamp ties and later explicit opt-in can restore consent", () => {
    const optIn = event("OPT_IN", "2026-09-20T10:00:00.000Z", "1");
    const stop = event("STOP", "2026-09-20T10:00:00.000Z", "2");
    expect(latestConsentState([stop, optIn], optIn.phone)).toBe("opted_out");
    const later = event("OPT_IN", "2026-09-20T12:00:00.000Z", "3");
    expect(latestConsentState([optIn, later, stop], optIn.phone)).toBe("opted_in");
  });
  it("blocks all sending while provider or STOP/HELP verification is absent", () => {
    expect(canTransmitSms("opted_in", false, true)).toBe(false);
    expect(canTransmitSms("opted_in", true, false)).toBe(false);
    expect(canTransmitSms("opted_in", true, true)).toBe(true);
  });
  it("classifies carrier keywords without mistaking ordinary replies for a command", () => {
    expect(classifySmsReply(" STOP ")).toBe("STOP");
    expect(classifySmsReply("unsubscribe")).toBe("STOP");
    expect(classifySmsReply("help")).toBe("HELP");
    expect(classifySmsReply("I need help with my appointment")).toBe("OTHER");
  });
});
