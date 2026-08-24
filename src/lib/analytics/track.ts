import posthog from "posthog-js";
import {
  ALLOWED_EVENTS,
  DISALLOWED_PROPERTY_PATTERNS,
  type AllowedEvent,
  type AllowedEventProperties,
} from "../../../POSTHOG-EVENT-SCHEMA";

/**
 * Typed, allowlisted tracking wrapper. This is the ONLY approved way to
 * send events to PostHog in this codebase — never call posthog.capture()
 * directly elsewhere. See POSTHOG-PRIVACY-CONFIGURATION.md.
 */
export function track(event: AllowedEvent, properties: AllowedEventProperties = {}): void {
  if (!ALLOWED_EVENTS.includes(event)) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[analytics] rejected unknown event: ${event}`);
    }
    return;
  }

  const safeProperties: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(properties)) {
    if (typeof value === "string" && DISALLOWED_PROPERTY_PATTERNS.some((p) => p.test(value))) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(`[analytics] rejected property "${key}" — matched a disallowed pattern`);
      }
      continue;
    }
    safeProperties[key] = value;
  }

  if (typeof window === "undefined" || !posthogInitialized()) return;
  posthog.capture(event, safeProperties);
}

let initialized = false;
let enabled = false;

function posthogInitialized(): boolean {
  return initialized && enabled;
}

export function disableAnalytics(): void {
  if (typeof window === "undefined") return;
  if (initialized) {
    posthog.opt_out_capturing();
    posthog.reset();
  }
  enabled = false;
}

/**
 * Call only after an approved consent resolution. See
 * POSTHOG-PRIVACY-CONFIGURATION.md — do not call this on page load
 * unconditionally.
 */
export function initAnalyticsAfterConsent(): void {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;
  if (!key || !host) return;

  if (initialized) {
    posthog.opt_in_capturing();
    enabled = true;
    return;
  }

  posthog.init(key, {
    api_host: host,
    autocapture: false,
    capture_pageview: false, // page_viewed is sent explicitly via track()
    disable_session_recording: true, // remains true until written approval per POSTHOG-PRIVACY-CONFIGURATION.md
    persistence: "memory",
    property_denylist: [],
  });
  posthog.opt_in_capturing();
  initialized = true;
  enabled = true;
}
