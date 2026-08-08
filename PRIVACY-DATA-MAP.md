# Privacy Data Map

| Data | Collected? | Where | Sent to PostHog? | Retention |
|---|---|---|---|---|
| Name, email, phone (lead form) | Yes | Form → server function → CRM | No | Per firm retention policy `[FACT TO VERIFY]` |
| General area of interest, preferred contact method | Yes | Form → server function → CRM | No | Per firm retention policy |
| Account numbers, SSN, tax/investment documents | Never via public form | N/A — routed to a separately approved secure-upload system if needed | No | N/A |
| Page views, CTA clicks, scroll depth, resource downloads | Yes | Client → PostHog (allowlisted events only) | Yes, non-PII properties only | Per approved PostHog retention config `[FACT TO VERIFY]` |
| Session recordings | No — disabled by default | N/A | No | N/A until approved |
| IP address | Per approved PostHog IP-handling configuration | PostHog | Per approved config `[PRIVACY REVIEW REQUIRED]` | `[FACT TO VERIFY]` |

## Rules

Form-field values and free text never reach PostHog. The pre-send PII
filter (`POSTHOG-PRIVACY-CONFIGURATION.md`) enforces this technically; this
map is the human-readable record for privacy/legal review.
