# Analytics & Measurement Plan

## Objective

Measure qualified-appointment generation without collecting PII, financial
detail, or health information. See `POSTHOG-PRIVACY-CONFIGURATION.md` and
`POSTHOG-EVENT-SCHEMA.ts` for the enforced technical implementation.

## Event Taxonomy (summary — authoritative list in POSTHOG-EVENT-SCHEMA.ts)

page_viewed, primary_cta_clicked, secondary_cta_clicked, form_started,
form_validation_error, form_submitted, appointment_link_clicked,
phone_link_clicked, email_link_clicked, resource_downloaded, faq_expanded,
disclosure_opened, scroll_depth_reached, video_started, video_completed,
consent_preference_updated.

## Dashboards

**Executive:** qualified leads, appointment-intent events, conversion
rate, cost per lead (when ad data available), conversion by audience/
location/service, top landing pages, traffic-source performance.

**SEO:** organic sessions, organic conversions, landing-page engagement,
resource downloads, internal CTA performance, location- and
service-page performance.

**Funnel:** landing-page view → primary CTA click → form start → form
completion → appointment-link click → confirmed appointment (only via an
approved integration supplying that event).

**UX:** device category, Core Web Vitals/approved performance signals,
form errors, exit points, scroll depth, CTA usage, broken journeys.

## Optimization Priorities

Qualified form submissions and appointment requests over raw clicks;
audience fit; low spam rate; completed follow-up; compliance-safe
acquisition only.

## Experimentation

No experiment activates automatically. Every A/B test requires a written
hypothesis, primary metric, guardrail metrics, defined audience, planned
duration, traffic requirement, privacy review, compliance review, approved
variants, stop conditions, documented result, and archive of both winning
and losing versions. Prohibited test categories: different risk
disclosures, hidden disclosures, misleading urgency, promissory claims,
unsupported savings claims, fear-based language, unapproved testimonials,
or claims of preferential investment results. Safe categories: CTA
placement, form length, navigation density, headline clarity, layout,
resource format, approved wording alternatives, hero treatment, FAQ
placement.

## Consent & Environment

PostHog does not initialize before an approved consent resolution (see
`POSTHOG-PRIVACY-CONFIGURATION.md`). Separate projects/environments for
Development, Deploy Preview, Staging, Production; internal/bot/test
traffic filtered out of production reporting.
