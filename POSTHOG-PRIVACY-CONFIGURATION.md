# PostHog Privacy-Safe Configuration

Status: Draft. Requires privacy, legal, and information-security approval
before any tracking activates on a public deploy. Verify current PostHog
consent, autocapture, session-recording, and masking features against
official documentation before implementation — defaults change between
releases.

## Initialization Rule

PostHog does not initialize until an approved consent model resolves. Do
not assume a given consent model (opt-in, opt-out, legitimate-interest) is
lawful in every jurisdiction the site may reach — this requires privacy/
legal sign-off, documented in `PLATFORM-DECISION-LOG.md`. Until approved,
default to: do not initialize PostHog before consent, and do not use
cookieless "restricted mode" without documented approval.

## Autocapture

Broad autocapture is **disabled**. Only explicitly defined, allowlisted
events (see `POSTHOG-EVENT-SCHEMA.ts`) fire, from explicit handlers on
approved interface elements. No capture of all clicks, all form
interactions, raw text, unfiltered URLs/query strings, or user-entered
search/form values.

## Session Recording

**Disabled by default and not to be activated** until all of the following
are documented and complete: written privacy approval, written compliance
approval, written information-security approval, updated privacy-policy
disclosure, a working consent mechanism, input masking, text masking,
URL sanitization, page exclusions (`POSTHOG-EXCLUDED-PAGES.md`), a defined
retention period, access controls, staff training, test validation, and an
incident procedure. If later approved: mask all inputs by default, mask
text by default where practical, never unmask financial/personal fields,
and disable recording entirely on forms, scheduling pages, secure-upload
pages, client portals, and any authenticated route.

## PII Prevention Layer (pre-send validation)

Before any event reaches PostHog:

1. Validate event name against the allowlist in `POSTHOG-EVENT-SCHEMA.ts`.
2. Validate properties against the typed schema; drop unknown properties.
3. Strip URL query strings unless explicitly approved per-parameter.
4. Strip fragments that may carry identifiers.
5. Reject values matching an email pattern.
6. Reject values matching a phone-number pattern.
7. Reject values resembling account numbers.
8. Reject free-form text values.
9. Reject form-field names/values entirely (form events carry only
   `form_id`/`page_slug`-style metadata, never content).
10. Reject document names, health information, and financial values.
11. On rejection, log a development-only warning — never log the rejected
    value itself.

## Identity

Use an anonymous, randomly generated distinct ID. Never use name, email,
phone, or CRM ID as the PostHog distinct ID.

## Environment Separation

Separate PostHog projects (or clearly separated environments) for
Development, Deploy Preview, Staging, and Production. Filter internal
staff traffic, automated testing, monitoring bots, known development
devices, and preview/staging domains out of production reporting.

## Experiments and Feature Flags

Claude Code may build feature-flag infrastructure. No experiment activates
without: approved hypothesis, approved variants, compliance review, privacy
review, a defined metric, defined audience, defined duration, guardrail
metrics, stop conditions, and an archiving plan (see `PLATFORM-DECISION-LOG.md`
and the Experimentation Rules in the project brief). Feature flags are never
used to bypass the GitHub/compliance release process for regulated content
— all regulated variants must already be approved before activation.
