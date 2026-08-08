# Security

## Secrets

No API keys, tokens, or credentials in the repository or in browser-
exposed environment variables. Secrets live only in Netlify's scoped
environment-variable storage and GitHub Actions secrets, separated by
context (Preview / Staging / Production).

## Application Security

Server-side validation and sanitization on all form input; rate limiting
and spam controls on the form-submission function; protection against
header injection and script injection; security headers configured at the
Netlify edge (`netlify.toml`): `X-Frame-Options`, `X-Content-Type-Options`,
`Referrer-Policy`, `Permissions-Policy`, `Content-Security-Policy`,
`Strict-Transport-Security`.

## CI Gates

Secret scanning and dependency-vulnerability scanning are required status
checks (`GITHUB-GOVERNANCE.md`). A critical finding blocks merge.

## Access

Least-privilege, scoped service accounts only; see
`PRODUCTION-ACCESS-MATRIX.md`. No AI identity holds admin/owner access to
GitHub, Netlify, Webflow, PostHog, DNS, CRM, email, password manager, or
financial systems.

## Incident Response

See `INCIDENT-ROLLBACK.md` and `NETLIFY-ROLLBACK-PROCEDURE.md`.
