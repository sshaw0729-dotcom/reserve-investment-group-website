# Reserve Investment Group, Inc. — SMS compliance implementation review

**Prepared:** September 20, 2026  
**Status:** Draft for independent compliance/legal review; not authorization to deploy or resubmit an A2P registration.

## Scope of this pull request

- `src/app/terms/page.tsx`: SMS program name, scope, express consent, optional participation, message frequency, carrier charges, STOP/HELP, carrier-delivery disclaimer, sensitive-data warning, non-sharing for third-party marketing, and direct Privacy link. Original website legal protections remain.
- `src/app/privacy/page.tsx`: prominent explicit no-sale/no-sharing of mobile telephone numbers and SMS originator opt-in/consent for third-party/affiliate marketing; limits operational carrier/platform disclosures to message delivery; describes collection, purposes, retention, STOP/HELP, and Terms cross-link. Existing analytics, session-recording, retention, and other jurisdictional disclosures preserved.
- `src/app/contact/page.tsx`: removes language that incorrectly treated submitting the ordinary contact form or entering a phone number as SMS enrollment. Contact-form submission now authorizes an ordinary inquiry response, **not** SMS-program consent.

## Blockers before registration or SMS launch

1. **Verify program behavior and approved messaging vendor**: confirm actual SMS sender, exact message purposes, STOP/HELP handling, delivery support, vendor processing restrictions, response address, and actual recordkeeping. Do not claim features that are not configured.
2. **Implement and verify an independently optional, unchecked SMS enrollment control** on the actual opt-in channel; it must not be bundled with general inquiry/contact or website Terms acceptance. Display the business/program name, specific message categories, frequency, message/data rates, STOP/HELP, and working Terms/Privacy links immediately beside it. Where appropriate, separately distinguish informational vs marketing enrollment.
3. **Persist verifiable consent** in an approved backend/CRM with telephone number, consent language version, timestamp, source URL, opt-in method, and opt-out history. Do not transmit SMS merely because a lead record contains a telephone number or a general contact consent checkbox. Existing `LeadForm.tsx` and `submit-lead.ts` do **not** currently support separately recording SMS consent, so this PR deliberately does not turn SMS enrollment on.
4. **Test STOP and HELP end-to-end**, including final confirmation only where appropriate, suppression of future traffic, opt-in renewal after STOP, and staff workflows. Verify all campaign samples and descriptions match actual practices.
5. **Verify production domain**: `reserveinvestmentgroup.com` is hosted by Netlify, not the separately connected Webflow site. Confirm that the approved commit is built on a Netlify Deploy Preview and that both `/terms/` and `/privacy/` resolve publicly without login or access restrictions and expose the correct content. Check canonical `/terms` and `/privacy` redirect behavior as submitted to the registry.
6. **Confirm actual representations**: mobile data is not sold/shared for third-party marketing; messaging service providers act only as processors for delivery; PostHog session-recording and analytics descriptions remain accurate; and legally required retention and disclosures reflect practice. The company disclosure states Reserve Investment Group, Inc. itself is neither a broker-dealer nor registered investment adviser; preserve that distinction and do not advertise its own Form CRS unless verified.
7. **Obtain named human compliance/legal and technical approval** of the exact PR and production preview, plus practice-owner authorization for this specific production deployment. Repository governance does not permit an agent to merge or publish this change merely from a general 'execute recommendations' instruction.
8. After live deployment, verify live URL contents in an unauthenticated browser, update the A2P campaign application with accurate opt-in screenshots and sample texts, and then resubmit. Carrier approval cannot be promised or independently certified here.

## Suggested opt-in disclosure (only when a separate recording workflow exists)

Unchecked optional checkbox: “I agree to receive text messages from Reserve Investment Group, Inc. about appointment scheduling and reminders, replies to my inquiries, requested educational resources, events, and support. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for assistance. Consent is not a condition of purchase. See our Terms of Use and Privacy Policy.”

Do not present this checkbox as enabled until its backend, suppression mechanism, and consent record have passed testing.

## Example operational replies (subject to vendor verification)

STOP: “Reserve Investment Group: You have been unsubscribed from our text messages. No further messages will be sent unless you opt in again.”

HELP: “Reserve Investment Group: For help with our SMS program, visit https://reserveinvestmentgroup.com/contact/ or call 216-284-3615. Reply STOP to unsubscribe. Message and data rates may apply.”

## Release checklist

- [ ] Human compliance/legal approval recorded.
- [ ] Technical review and build, accessibility, and link checks passed.
- [ ] Approved SMS enrollment workflow deployed and opt-in evidence verified, or registration uses a separately verified existing opt-in channel.
- [ ] SMS vendor and STOP/HELP tested and message scopes reconciled.
- [ ] Domain routes, non-sharing text, and cross-links verified on production.
- [ ] Specific production-deploy approval recorded before merge/publish.
- [ ] A2P application resubmitted only after live verification.
