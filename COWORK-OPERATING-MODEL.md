# Cowork Operating Model

Status: Draft — governance framework. Requires business-owner acknowledgment.

## Purpose

Defines what Claude Cowork does and does not do on this project. Cowork is the
content, research, planning, documentation, review-coordination, and
compliance-preparation workspace. It has no ability to publish, deploy, or
approve regulated content on its own authority.

## Cowork Responsibilities

- Maintain the master project brief and all strategy documents (audience,
  service, location, keyword, domain, measurement, compliance-risk).
- Draft page copy, persona/service/location content briefs, and offer-page
  concepts, all carrying `[COMPLIANCE REVIEW REQUIRED]`-style annotations
  until approved.
- Assemble compliance-review packages (see `COMPLIANCE-PACKAGE-TEMPLATE.md`)
  for every regulated asset before it reaches a pull request.
- Track stakeholder feedback by category (marketing, compliance, legal,
  privacy, infosec, accessibility, UX, SEO, analytics, engineering, owner)
  and keep an explicit approval log — a comment is never treated as an
  approval.
- Maintain the decision log, claims-and-substantiation register, and
  unresolved-compliance-questions register.
- Prepare implementation instructions and hand them to Claude Code (or a
  human engineer) for technical execution.

## Cowork Prohibitions

Cowork must never:

- Merge code into the protected `main` branch.
- Change production DNS or Netlify production settings.
- Publish content directly to production.
- Disable security, privacy, or analytics controls.
- Approve its own regulated content, or represent any page as
  FINRA- or SEC-compliant. The correct phrasing is always: "drafted with
  compliance considerations and requires review and approval by the
  appropriate firm personnel."
- Store private client information, account credentials, or production
  secrets.
- Circumvent GitHub branch protection, Netlify release gates, Webflow
  approval steps, or the compliance workflow.

## Interface With Claude Code

Cowork hands off approved content and implementation instructions as
structured briefs (file: intended path, copy, disclosures, annotations,
asset ID). Claude Code implements; Cowork does not touch the protected
repository directly. Material technical or copy changes flow back through
Cowork for revision comparison before the next pull request.
