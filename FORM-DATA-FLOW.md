# Form Data Flow

## Architecture (preferred)

Browser form → Next.js server route / Netlify Function →
  1. Server-side validation of allowlisted fields only
  2. Input sanitization
  3. Rate limiting
  4. Spam controls (honeypot + server-side heuristic; consider a managed
     spam filter)
  5. Strip any unexpected/extra fields
  6. Prevent header injection / script injection
  7. Exclude field contents from application logs (log event metadata only:
     timestamp, form_id, status — never field values)
  8. Forward approved fields to the approved CRM or notification system
     over an authenticated, encrypted channel
  9. Return a generic success/error response to the browser
  10. Fire a non-PII `form_submitted` PostHog event (no field values)
  11. Apply the approved data-retention policy at the CRM/destination
  12. Support deletion requests per the firm's privacy policy

## Alternative: Netlify Forms

Permitted only after verifying current suitability for privacy controls,
data residency, retention, access controls, spam protection, CRM
integration, auditability, and compliance recordkeeping against Netlify's
current documentation. Record the verification in
`PLATFORM-DECISION-LOG.md` before use.

## Fields Never Collected Through a Public Marketing Form

Social Security numbers, full account numbers, passwords, tax returns,
brokerage/investment statements, insurance documents, merchant statements,
detailed holdings, free-form confidential messages. Route any such need to
a separately approved secure-upload/client-portal system.

## Required Adjacent Copy

Every public form must display, near the submit control:

> Do not submit confidential account information, Social Security numbers,
> passwords, tax documents, investment statements, or other sensitive
> information through this form.

Plus: purpose of collection, link to Privacy Policy, consent language
where required, communication expectations, and a no-obligation
clarification where accurate.

## Standard Introductory Form Fields

First name, last name, email, phone (optional unless operationally
necessary), general area of interest, preferred contact method, consent
checkbox where required. Nothing beyond this without a documented
operational reason and privacy review.
