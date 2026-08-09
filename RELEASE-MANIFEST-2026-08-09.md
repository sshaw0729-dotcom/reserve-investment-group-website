# Release Manifest — 2026-08-09

- Release ID: RIG-2026-08-09-01
- Target branch: main
- Pull request(s) included: none (direct commits via GitHub web editor, per this project's current tooling — see note below)
- Production deployment ID (post-deploy): 6a78dc650023d00008ebf443
- Deployed commit SHA: 3c6251f5300b81e4b8105feb75dd929b0a44b489 ("Add approach steps and call to action section")
- Pages added/changed: src/app/our-approach/page.tsx (restored after accidental truncation broke the production build); this release also captures the state of the several placeholder-removal and TestimonialPlaceholder-removal commits immediately preceding it on main
- Compliance approvals attached (asset IDs + references): Standing Draft-Copy Approval, HUMAN-APPROVAL-MATRIX.md (2026-08-06, clarified 2026-08-06) — draft-copy/tone only, does not resolve remaining MISSING-INFORMATION-REGISTER.md items
- Required status checks: pass/fail summary — no CI/status checks are currently configured to run on this repo (see GITHUB-GOVERNANCE.md); build success verified manually via Netlify deploy log (plugin_state: success, deploy_time 47s)
- Staging regression result: not run — this project has no separate staging environment in use; verification performed directly against production after deploy
- Rollback plan / prior stable deployment ID: 6a78c9422095ab0008f1ef25 (commit 73599a52f882e62ba95ae9b16bbde023a74f819f, "Revise scheduling details and link to Microsoft Bookings") — confirmed still present in Netlify deploy history and available for atomic rollback per NETLIFY-ROLLBACK-PROCEDURE.md
- Human approver(s) and date(s): Sharron Shaw approved draft copy generally per Standing Draft-Copy Approval (2026-08-06); this specific release was not individually pre-approved per-deploy (see note below)

## Post-deploy verification (per NETLIFY-ROLLBACK-PROCEDURE.md Per-Release Record)

| # | Item | Result |
|---|---|---|
| 1 | Production deployment ID | Recorded above |
| 2 | Deployed commit SHA | Recorded above |
| 3 | Smoke test | PASS — homepage, /our-approach/, /contact/ load correctly (200), no console errors observed |
| 4 | Form verification | NOT RUN — did not submit a live test lead, to avoid creating real CRM/email records without prior notice. Contact form renders correctly with required consent language. Per MISSING-INFORMATION-REGISTER.md #17, general contact-form routing (as opposed to the 3 lead-magnet forms) is still open/unconfirmed |
| 5 | Disclosure verification | PASS — spot-checked /contact/, /our-approach/, /disclosures/ for correct entity name and required text; no placeholder brackets found |
| 6 | PostHog event verification | FAIL (expected) — no PostHog script or window.posthog present on live site. Matches roadmap: Phase 7 (Analytics) is "Schema defined; implementation pending," not yet built |
| 7 | Canonical URL verification | FAIL — no <link rel="canonical"> tag found on pages checked (homepage, /contact/). Not yet implemented |
| 8 | Redirect verification | OPEN — REDIRECT-MAP.csv contains headers only, no rows. No 301 redirect plan yet from the prior site's indexed URLs. Per MISSING-INFORMATION-REGISTER.md #18 this is flagged low-urgency (no active subscribers on old site) but is still unresolved |
| 9 | Mobile rendering verification | PASS (partial) — viewport meta tag present and correct (width=device-width, initial-scale=1); full responsive visual QA across breakpoints not performed this pass |
| 10 | Desktop rendering verification | PASS — spot-checked pages render correctly in-browser at desktop width |
| 11 | Security header verification | FAIL — netlify.toml declares X-Frame-Options: DENY, Referrer-Policy, Permissions-Policy, and a full HSTS (max-age=63072000; includeSubDomains; preload) for all paths. Live response headers on the production domain show only X-Content-Type-Options: nosniff and a shorter HSTS (max-age=31536000, missing includeSubDomains/preload). X-Frame-Options, Referrer-Policy, and Permissions-Policy are absent entirely. Likely cause: the Next.js Runtime plugin's own request handling for SSR/dynamic routes does not inherit netlify.toml's static [[headers]] rules — this needs to be set via Next.js's own headers() config (next.config.js/mjs, which does not currently exist in this repo) or Netlify Edge Functions instead |
| 12 | Archived release manifest location | This file |

## Overall result: NOT a clean Phase 9 sign-off

Three of twelve checklist items fail or are open (security headers, canonical
URLs, redirects), one is an expected/known gap already tracked on the
roadmap (PostHog), and form verification was skipped rather than run. This
release is **safe** (it fixes a real production build break and does not
regress anything that was previously working) but does **not** by itself
constitute the formal, clean Phase 9 launch sign-off the roadmap calls for.

## Process note

Per GITHUB-GOVERNANCE.md and HUMAN-APPROVAL-MATRIX.md, production releases
are meant to carry per-deploy human approval, executed either by the
practice owner or by Claude with explicit per-deploy authorization. The
site has been live and iterating for some time via direct commits to
main through the GitHub web UI (no pull request), which is faster but
does not exercise the PR/status-check/CODEOWNERS process this repo's own
governance docs describe. Worth a conscious decision: keep operating this
way deliberately, or move to the PR-based flow for future changes.
