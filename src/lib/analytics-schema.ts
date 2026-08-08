/**
 * PostHog Event Schema — allowlist. Any event name or property not listed
 * here is rejected by the tracking wrapper before it reaches PostHog.
 * Update this file (and get analytics + privacy sign-off) before adding
 * new events or properties.
 */

export const ALLOWED_EVENTS = [
  "page_viewed",
  "primary_cta_clicked",
  "secondary_cta_clicked",
  "form_started",
  "form_validation_error",
  "form_submitted",
  "appointment_link_clicked",
  "phone_link_clicked",
  "email_link_clicked",
  "resource_downloaded",
  "faq_expanded",
  "disclosure_opened",
  "scroll_depth_reached",
  "video_started",
  "video_completed",
  "consent_preference_updated",
] as const;

export type AllowedEvent = (typeof ALLOWED_EVENTS)[number];

// Approved, non-PII properties only. No names, emails, phone numbers,
// form-field values, financial details, health information, account
// information, document names, or free-form text.
export interface AllowedEventProperties {
  page_type?: "hub" | "service" | "persona" | "location" | "offer" | "insight" | "utility";
  page_slug?: string;
  service_category?: string;
  persona_category?: string;
  location_category?: string;
  campaign_id?: string;
  traffic_source?: string;
  device_category?: "mobile" | "tablet" | "desktop";
  experiment_variant?: string;
  cta_location?: string;
  resource_id?: string;
  scroll_depth_percent?: 25 | 50 | 75 | 100;
  form_id?: string;
}

export const DISALLOWED_PROPERTY_PATTERNS: RegExp[] = [
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // email
  /\+?\d[\d\s().-]{7,}\d/, // phone-like
  /\b\d{9,}\b/, // long numeric sequences (account-like)
];
