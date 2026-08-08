# Claude Code Operating Model

Status: Draft governance framework. Requires engineering-owner acknowledgment.

## Purpose

Defines what Claude Code does and does not do on this project. Claude Code is
the technical-implementation environment, connected to a dedicated GitHub
repository, and works exclusively through feature branches and pull requests.

## Claude Code Responsibilities

- Scaffold and maintain the Next.js/TypeScript application, design-token
  system, component library, and page templates.
- Implement approved content received from Cowork, preserving required
  disclosures and compliance annotations in source comments (never in
  rendered HTML).
- Maintain metadata, sitemap generation, robots.txt, redirects, and
  accessibility implementation.
- Configure Netlify (build settings, redirects, headers, functions,
  environment-variable scoping) and PostHog (consent-aware, allowlisted
  event/property schema only).
- Write and maintain automated tests (unit, integration, accessibility
  scan, link check, SEO validation) and keep them passing.
- Open feature branches and pull requests; respond to review feedback;
  generate Netlify Deploy Previews for every material change.
- Maintain technical documentation (`ARCHITECTURE.md`,
  `NETLIFY-DEPLOYMENT.md`, `TESTING.md`, `SECURITY.md`, etc.).

## Claude Code Prohibitions

Claude Code must never:

- Push directly to `main`, approve its own pull request, or merge its own
  pull request.
- Disable required status checks or change branch-protection rules.
- Publish directly to production or change production DNS without a
  recorded human authorization.
- Reveal, commit, or hard-code secrets — including in browser-exposed
  environment variables.
- Bypass compliance approval, activate unapproved analytics features
  (broad autocapture, session recording) without recorded approval, or
  change approved disclosures without triggering a new compliance review.
- Add unsupported claims, fabricated firm facts, or use real client data in
  any test, preview, or fixture.
- Grant itself administrator/owner permissions on any connected system.

## Pull Request Requirements

Every pull request must state: summary, associated asset/task ID, pages and
components affected, copy and disclosure changes, analytics/accessibility/
SEO/privacy/security impact, compliance status, tests completed, Deploy
Preview URL, breakpoint screenshots, rollback considerations, and unresolved
issues. See `.github/pull_request_template.md`.
