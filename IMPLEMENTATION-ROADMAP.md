# Implementation Roadmap

Phases follow the mandated execution order. No phase after Phase 3 begins
until the phase before it has a reviewed deliverable; no production
publish occurs before Phase 9, and Phase 9 requires explicit human
authorization. Updated 2026-08-07: "human-authorized" now permits Claude
to execute the actual deploy step itself, given clear, specific,
per-deploy approval — see `GITHUB-GOVERNANCE.md` "Deployment Authority."
Authorization is still always human; only who clicks/executes has
changed, and only when asked to.

| Phase | Deliverable | Status |
|---|---|---|
| 0 — Discovery & constraints | `MISSING-INFORMATION-REGISTER.md` | Complete (open items tracked, non-blocking) |
| 1 — Strategy | This roadmap, `SITE-ARCHITECTURE.md`, `KEYWORD-AND-INTENT-MAP.csv`, `INTERNAL-LINKING-MODEL.md`, `DOMAIN-STRATEGY.md`, `ANALYTICS-MEASUREMENT-PLAN.md`, `COMPLIANCE-RISK-MAP.md` | Complete |
| Governance | Cowork/Claude Code operating models, GitHub governance, Netlify/PostHog/Webflow workflows, access & approval matrices | Complete (this delivery) |
| 2 — Design system | Webflow visual system (site created, tokens + Home page built), Next.js component mapping (tokens.css + Button/Card/Accordion/Hero/CTAStrip/AlertBlock/Breadcrumbs/CardGrid/LeadForm), responsive/accessibility specs, disclosure & form patterns | Substantially complete; component-level Deploy Preview screenshots still pending |
| 3 — Technical foundation | Next.js repo scaffold, TS config, lint/test setup, Netlify config, env schema, sitemap/robots, base metadata, PostHog consent framework | Scaffolded (this delivery); consent framework and full test suite pending |
| 4 — Primary website | Homepage, About, Our Approach, Services hub, Who We Help hub, Resources hub, Insights hub, FAQ, Contact (with lead form), Schedule, Disclosures, Privacy, Terms, Accessibility | Code scaffolded with placeholder copy for all 14 pages; every page still requires compliance approval before it can move past Draft status. Insights hub and Resources hub now list real content (see Phase 11) rather than empty-shell placeholders. Office address/phone resolved 2026-08-06 (`MISSING-INFORMATION-REGISTER.md` #14/#15) and reflected on Home and Contact |
| 5 — Priority spokes | Wave 1 service/persona/location hubs + validated combined pages, plus Wave 2 priority locations | Code scaffolded: 10 service and 9 persona pages, and 12 location pages (7 Wave 1 + 5 Wave 2 priority: Hudson, Independence, Westlake, Strongsville, Lakewood, added 2026-08-06 per `MARKETING-ECOSYSTEM-BRIEF.md` Section 2 validation), built as data-driven dynamic routes (`src/lib/content/*.ts`), plus a `/locations/` hub and the 2 unconditionally-approved combined pages. COMBO-003 (Shaker Heights executive retirement) is built but deliberately excluded from `sitemap.ts` pending the office/service-area gate. All cross-links (including new bidirectional service/persona ↔ location references) verified programmatically with no broken references. Chagrin Falls (lower-priority Wave 2 build) not yet built |
| 6 — Offer landing pages | Financial Review, Retirement Review, Business-Owner Financial Review, (Business Fee Audit if separately approved) | Code scaffolded for the first three (built early to avoid dead links from the new combined pages) with the compliant lead-form pattern; Business Fee Audit remains untouched pending its entity-disclosure gate |
| 7 — Analytics | Event taxonomy implementation, funnels, dashboards, consent, PII protections, QA docs | Schema defined; implementation pending |
| 8 — Compliance review | Review package, page inventory, copy deck, disclosure inventory, screenshots, substantiation file, approval tracker | Templates ready; content pending |
| 9 — Production launch | Human-authorized merge/deploy (Claude may execute the deploy itself given explicit per-deploy approval, 2026-08-07), DNS/SSL/redirect/form/analytics verification, sitemap submission, rollback test, archive | In progress, informally: live site already exists (`reserveinvestmentgroup.com`, deployed via Netlify Drop, not through this roadmap's intended git/CI pipeline — see `GITHUB-GOVERNANCE.md`). Formal Phase 9 sign-off (verification checklist, rollback test, archive) has not been run against what's currently live |
| 10 — Optimization | Monthly traffic/conversion/SEO/form-quality/device/content/compliance-re-review reports | Not started |
| 11 — Marketing ecosystem expansion | `MARKETING-ECOSYSTEM-BRIEF.md`: Landing Page System upgrade, Wave-2 local-SEO validation, content clusters, local SEO ops, lead magnets, email nurture, Google Ads, CRO doc | Added to workflow 2026-08-06, reconciled against compliance rules. Section 1 (Landing Page System) delivered. Section 2 (Local SEO Silo validation) delivered — 9 Wave 2 cities scored, 5 recommended to build next, 3 deferred, 1 lower-priority build; results in `KEYWORD-AND-INTENT-MAP.csv`. The 5 priority Wave 2 location pages built 2026-08-06 — see Phase 5 row. Section 3 (Content Clusters / Pillar Pages) delivered 2026-08-06 — 3 clusters (Retirement Income Planning, Equity Compensation for Executives, Business Succession Planning), 1 pillar + 3 supporting articles each, 12 pages total under `/insights/`. Section 4 (Local SEO Operations) delivered 2026-08-06 — `LOCAL-SEO-OPERATIONS.md` covers GBP, citations, and reviews; `localBusinessJsonLd()` schema wired into the Home page using the confirmed office address and phone. Live GBP listing phone number updated 2026-08-06 to 216-284-3615 (pending Google's review). Edward Jones outside-business-activity approval confirmed 2026-08-06 (`MISSING-INFORMATION-REGISTER.md` #5), resolving the project's top compliance blocker. Section 5 (Lead Magnets) delivered 2026-08-06 — 3 real PDF checklists (Retirement Readiness, Business-Owner Planning, Equity Compensation for Executives) gated behind `LeadForm` on new `/resources/{slug}/` landing pages; `/resources/` hub now data-driven. Section 6 (Email Nurture Sequences) delivered 2026-08-06 — `EMAIL-NURTURE-SEQUENCES.md`, 3 sequences / 12 emails total, full draft copy; not wired to any ESP (none connected), open items tracked; sender address updated to the `info@reserveinvestmentgroup.com` alias, resolving the earlier name-discrepancy flag (`MISSING-INFORMATION-REGISTER.md` #24, Resolved). Section 7 (Google Ads Architecture) delivered 2026-08-06 — `GOOGLE-ADS-ARCHITECTURE.md`, campaign/ad-group/landing-page map, keyword themes (structural, no live volume data), draft compliant ad copy, conversion tracking mapped onto existing PostHog schema (no new events), Google Ads' own financial-services disclosure policy reconciled against existing site disclosures/schema. Email trigger/sequence mechanism built and activated 2026-08-06 on folk CRM + direct Microsoft Graph API access (`netlify/functions/submit-lead.ts`, `netlify/functions/unsubscribe.ts`, `netlify/functions/send-nurture-email.ts`, `netlify/functions/lib/folk.ts`, `netlify/functions/lib/msgraph.ts`, plus the daily `email-nurture-sequence-sender` scheduled task) — live in code and, for the scheduler, actively running, but currently inert: none of the three functions are deployed, and the Graph sending path additionally needs tenant-admin setup (Entra ID app registration, `Mail.Send` permission, Exchange Application Access Policy) tracked in `MISSING-INFORMATION-REGISTER.md` #17b. That setup, once done, resolves the earlier `outlook_send_mail` sender-address limitation (confirmed unfixable within that connector) by sending from the intended `info@reserveinvestmentgroup.com` alias instead; a plain-language setup walkthrough for the practice owner is at `MICROSOFT-EMAIL-SETUP-GUIDE-SIMPLE.md`. Section 8 (CRO Recommendations) delivered 2026-08-06 — `CRO-RECOMMENDATIONS.md` — closing out all 8 sections of the original `MARKETING-ECOSYSTEM-BRIEF.md` |

## Recommended First Sprint (2 weeks)

1. Resolve highest-impact items in `MISSING-INFORMATION-REGISTER.md`:
   firm name, entity/regulatory disclosures, office/service area, contact
   info, Form CRS link.
2. Human owner: configure GitHub branch protection and CODEOWNERS per
   `GITHUB-GOVERNANCE.md`.
3. Human owner: connect Netlify to the repository, configure environments
   per `NETLIFY-ENVIRONMENT-MATRIX.md`.
4. Build the design-token system and core page templates (Phase 2) in
   parallel with firm-fact collection.
5. Draft Home, About, Our Approach, Services hub, Who We Help hub copy with
   placeholders, and route through the compliance-package template for
   early reviewer feedback on tone/claims before full build-out.
6. Stand up PostHog project(s) with autocapture and session recording off,
   implement the allowlist wrapper, and validate zero-PII event flow in
   Development only.
