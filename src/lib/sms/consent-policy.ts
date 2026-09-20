// Versioned copy: any change to consent wording requires a new version.
export const SMS_CONSENT_VERSION = "rig-sms-2026-09-20-v1";
export const SMS_CONSENT_COPY =
  "I agree to receive text messages from Reserve Investment Group, Inc. about appointment scheduling and reminders, responses to my inquiries, requested educational resources, events and customer support. Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe or HELP for assistance. Consent is optional and is not a condition of purchase. See the Terms of Use and Privacy Policy.";

export type SmsEventKind = "OPT_IN" | "STOP";
export type SmsConsentEvent = {
  id: string;
  kind: SmsEventKind;
  phone: string;
  occurredAt: string;
  source: string;
  disclosureVersion: string;
  disclosureCopy: string;
  method: "unchecked_web_checkbox" | "verified_provider_stop" | "manual_opt_out";
};

export function normalizeUsMobile(value: unknown): string | null {
  if (typeof value !== "string" || value.length > 35) return null;
  const digits = value.replace(/[\s().-]/g, "").replace(/^\+/, "");
  const ten = digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;
  if (!/^[2-9]\d{2}[2-9]\d{6}$/.test(ten)) return null;
  return `+1${ten}`;
}

export function latestConsentState(events: SmsConsentEvent[], phone: string): "opted_in" | "opted_out" | "unknown" {
  const relevant = events.filter((e) => e.phone === phone && (e.kind === "OPT_IN" || e.kind === "STOP"));
  if (!relevant.length) return "unknown";
  // A STOP wins ties; a new express OPT_IN after STOP may restore consent.
  relevant.sort((a, b) => a.occurredAt.localeCompare(b.occurredAt) || (a.kind === "STOP" ? 1 : -1));
  return relevant[relevant.length - 1]?.kind === "STOP" ? "opted_out" : "opted_in";
}

export function canTransmitSms(state: ReturnType<typeof latestConsentState>, providerReady: boolean, stopHelpVerified: boolean): boolean {
  return state === "opted_in" && providerReady && stopHelpVerified;
}

export function classifySmsReply(message: string): "STOP" | "HELP" | "OTHER" {
  const command = message.trim().toUpperCase();
  if (["STOP", "STOPALL", "UNSUBSCRIBE", "CANCEL", "END", "QUIT"].includes(command)) return "STOP";
  if (["HELP", "INFO"].includes(command)) return "HELP";
  return "OTHER";
}
