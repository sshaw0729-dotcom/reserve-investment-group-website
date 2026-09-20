# SMS consent and messaging verification — Reserve Investment Group, Inc.

**Status: implementation in draft PR; NOT an operationally verified SMS campaign or authorization to send.** Owner has approved publication of legal language, but no SMS provider, carrier registration, signed inbound webhook, or live STOP/HELP test has been identified or verified in this repository. Do not claim A2P approval.

## What the code now implements

1. `/sms-consent/`: a standalone, initially unchecked, optional SMS consent form, not bundled with the existing lead form. Exact text and `SMS_CONSENT_VERSION` are sourced from `src/lib/sms/consent-policy.ts`. Terms and Privacy links are next to the box. The page checks `/api/sms-consent` for availability and otherwise shows a non-enrollment message.
2. `POST /api/sms-consent`: disabled by default. When the server-side Netlify environment variable `SMS_CONSENT_COLLECTION_ENABLED` equals `true`, validates the same-origin request, checkbox, exact disclosure version, source, contact fields, and North American phone syntax. It creates/updates a Folk CRM person, persists a private, timestamped, versioned consent note, reads that exact note back, re-reads the full audit history, verifies the new event and latest consent state, then returns `201` and a random reference. Any failure returns an error instead of claiming successful enrollment. **It does not send SMS.**
3. `/sms-opt-out/` and `POST /api/sms-opt-out`: a separate website withdrawal route. It matches email and phone to a CRM person, records a `STOP` audit event, reads it back, and verifies that STOP is the latest state. If verification fails, it does not claim success and refers the visitor to STOP by text or telephone support. This route also does not send SMS or interface with the carrier.
4. `src/lib/sms/consent-policy.ts`: normalizes phone-number syntax, computes latest consent state with STOP winning ties, classifies STOP/HELP keyword replies, and exposes a fail-closed sending gate. These functions **do not constitute a connected sender**. The number-format check does not establish that a phone belongs to the submitter or is a mobile line.
5. Audit records live in Folk notes connected to the person's CRM record. Each event records a unique identifier, E.164-format number, UTC timestamp, event kind, source, consent method, exact disclosure version, and full disclosure text. Notes are private to the configured Folk API user. Neither consent nor phone numbers are sent to PostHog through this form.

## Activation controls

- `SMS_CONSENT_COLLECTION_ENABLED`: absent/anything other than exact `true` means enrollment is disabled and POST returns 503. Configure only after privacy and operational checks. The existing `FOLK_API_KEY` must be present in the appropriate Netlify environment; never place it in GitHub or client code. Deploy Preview testing should use an isolated test CRM workspace/key, not pollute production records.
- There is **no SMS sending implementation or provider-ready environment switch** in this PR. No other system should send solely because the Folk contact has a phone number or an opt-in event. Before any future sending, implement a gateway that reads the current consent state and the provider's own suppression list immediately before each message, requires provider readiness plus verified STOP/HELP, and fails closed on missing records or API errors.
- Add request throttling/bot protection and abuse monitoring before enabling public enrollment. The honeypot and same-origin check are not sufficient rate limiting or proof of telephone ownership. Verify ownership of the submitted number if required by the chosen use case/vendor.

## Automated verification

`npm run typecheck`, `npm run lint`, `npm run test`, and `npm run build` run in the GitHub quality-gates workflow. Relevant Vitest coverage checks number parsing, unknown consent, STOP precedence and same-time tie, re-opt-in only after a new express event, HELP/STOP keywords, sending denied while provider checks are false, Folk note read-back verification, paginated history, and failure on malformed/unavailable records. Passing unit tests is not an end-to-end SMS vendor test.

## Required end-to-end acceptance test (with selected vendor)

1. Confirm the exact sender/provider, campaign type, approved sample texts, provider application status, service-provider contractual limits, and real inbound webhook authentication format. Implement and test the adapter with signature verification and replay defense. Do not point a provider at an unverified generic webhook.
2. In an isolated test environment, check GET `/api/sms-consent` shows disabled until intentionally enabled. An unchecked form, bad phone, wrong disclosure version, and invalid origin must not produce consent records. Confirm failure if Folk is unavailable.
3. Enable only the test environment; submit one checked form using a controlled test number. Confirm exact disclosure and version, contact, UTC timestamp, source URL, method, unique event reference, and successful CRM read-back. Check there is no SMS transmission from form submission.
4. Send an authorized test SMS **only after** an independently built send gateway verifies current consent and provider suppression; confirm that unconsented, opted-out, invalid, and CRM-unavailable states all reject sending.
5. Reply STOP from the controlled test phone. Confirm the provider immediately suppresses that number, the verified inbound webhook records STOP in the audit ledger, an opt-out confirmation is sent only as permitted, and all later outbound messages are blocked. Test STOPALL/UNSUBSCRIBE/CANCEL/END/QUIT as applicable to the provider.
6. Reply HELP. Confirm the provider returns business identity, contact details and STOP instructions without creating a fresh opt-in. Test an ordinary reply is not interpreted as consent.
7. Exercise `/sms-opt-out/` using the controlled record; confirm the STOP event is persisted and read back. Where a website opt-out is used, ensure it also reaches the **provider's suppression list** before further traffic. Current code records withdrawal in CRM only, so this synchronization remains a blocker.
8. Confirm re-enrollment after STOP requires a genuinely new affirmative action, followed by an updated provider opt-in state. Capture screenshots of the exact consent page and verify live public Terms and Privacy URLs, redirects, mobile layout, and carrier-required wording.
9. Document dated test evidence, provider message IDs, consent reference, webhook receipt, STOP/HELP results, suppressions, owner signoff, and the exact deployed commit in the compliance file before resubmitting A2P registration.

**Until the provider adapter, provider suppression synchronization, abuse controls, tests, and deployment checks are finished, this implementation is a non-sending, disabled-by-default consent-recording foundation, not a verified messaging workflow.**
