# Greater Cleveland Financial-Services Digital Authority Platform

Status: **Scaffold — no production content, no live forms, no session
recording, no fabricated firm facts.** This repository is drafted with
compliance considerations and requires review and approval by appropriate
firm personnel before any public deployment. It is not represented as
FINRA- or SEC-compliant.

## What this is

A governed Next.js + TypeScript site, deployed via Netlify, designed in
Webflow, and measured with a privacy-gated PostHog implementation, for a
financial-advisory practice serving Greater Cleveland. See
`PROJECT-BRIEF.md` for the full brief.

## Start here

1. `COWORK-OPERATING-MODEL.md` / `CLAUDE-CODE-OPERATING-MODEL.md` — who
   does what.
2. `GITHUB-GOVERNANCE.md` — branch protection, CODEOWNERS, required checks.
3. `MISSING-INFORMATION-REGISTER.md` — every fact this project is waiting
   on. Nothing here is invented.
4. `HUMAN-APPROVAL-MATRIX.md` — required human sign-offs before anything
   ships.
5. `IMPLEMENTATION-ROADMAP.md` — phase-by-phase plan and current status.

## Local development

```
npm install
npm run dev
```

Requires Node 20. No production secrets are used or required for local
development; forms and analytics run against test/mock destinations only
(see `NETLIFY-ENVIRONMENT-MATRIX.md`, `FORM-DATA-FLOW.md`).

## Repository map

- `src/app/` — Next.js App Router pages (scaffold stubs only)
- `src/components/` — shared UI components
- `content/` — version-controlled page content (Model A; see
  `CONTENT-MODEL.md`)
- `netlify/functions/` — form-handling and other serverless functions
- `public/legal/` — compliance/legal static assets
- `.github/` — PR template and CI workflow
- Root-level `*.md` / `*.csv` — governance, strategy, and compliance
  documentation (see file list in `IMPLEMENTATION-ROADMAP.md`)

## Rules enforced by this repository's process

No direct push to `main`. No AI merge rights. No production deploy without
recorded human approval. No session recording or broad analytics
autocapture without written privacy/compliance/infosec approval. No
testimonials, awards, or performance content without compliance approval.
See `COMPLIANCE-RISK-MAP.md` and `HUMAN-APPROVAL-MATRIX.md`.
