# Production-Approval Punch List

Status: 77 pages currently fail `check:compliance-manifest` -- 42 with no `CONTENT-MANIFEST.csv` row at all, 35 with a row but a status other than "Production approved." This document breaks that down into the actual small number of real-world decisions and facts that, once resolved, unblock most of the site, plus a full accounting of every page and what it specifically needs. Built 2026-08-10 from `CONTENT-MANIFEST.csv`, `MISSING-INFORMATION-REGISTER.md`, `DISCLOSURE-INVENTORY.md`, and `HUMAN-APPROVAL-MATRIX.md`.

## The root blockers

Six open items explain nearly all 77 pages. Resolve these and the vast majority of the punch list clears itself.

**1. Firm/regulatory entity disclosure facts — mostly resolved.** The footer disclosure block's core language is done: the approved firm name ("Reserve Investment Group, Inc," `MISSING-INFORMATION-REGISTER.md` item 1) and the broker-dealer/investment-adviser disclosure ("...is not a registered investment adviser or broker-dealer...") are both live in `SiteFooter.tsx` and `/disclosures/`, and confirmed attorney-reviewed and final by the practice owner 2026-08-10 (`MISSING-INFORMATION-REGISTER.md` items 1 and 3; `DISCLOSURE-INVENTORY.md` updated to match). Item 3 is also now resolved because the site was confirmed to be purely financial-planning/advisory-adjacent content with no BD-regulated activity referenced anywhere, so no separate Edward Jones-specific BD disclosure is needed. What's left under this blocker: CRD/IARD numbers (item 2) are still unsupplied, though it's now an open question whether they're even needed given the live language never names a specific BD/RIA — worth confirming with the practice owner rather than assuming. With the disclosure language itself resolved, root blocker 2 (named compliance reviewer) is now the dominant blocker for most of the pages listed below, not this one.

**2. Named broker-dealer / RIA compliance reviewer — role named, page-level review still pending.** `HUMAN-APPROVAL-MATRIX.md` requires a "designated broker-dealer principal or compliance reviewer" and an "authorized RIA compliance reviewer" to sign off before any page referencing brokerage or advisory services can be considered approved. As of 2026-08-10, the practice owner (Sharron Shaw) has self-designated as this reviewer, per a "Broker-Dealer / RIA Compliance Review and Approval" document she provided and her confirmation in the Cowork chat session (`HUMAN-APPROVAL-MATRIX.md`, "Broker-Dealer / RIA Compliance Reviewer Designation" section; `MISSING-INFORMATION-REGISTER.md` item 22). This closes the structural gap -- someone is now named -- but it is the practice owner's self-certification, not sign-off from an independent broker-dealer compliance department or outside RIA compliance officer, and the approval document itself states it does not constitute blanket approval of marketing materials. The existing "standing draft-copy approval" from the practice owner still only covers tone and copy-as-drafted. Practically: each disclosure-bearing page below still needs this reviewer's actual page-by-page review before it can read "Production approved" in `CONTENT-MANIFEST.csv` -- that review has not yet happened, except for the Zero-Compensation Referral Policy document the approval itself covered.

**3. Form CRS link -- resolved.** `MISSING-INFORMATION-REGISTER.md` item 9 is now Resolved: RIG is confirmed not a registered BD/RIA, so Form CRS doesn't apply to it, and `/disclosures/` already says so explicitly. No page was actually blocked on this in practice.

**4. Business Fee Audit entity/compensation disclosure.** `MISSING-INFORMATION-REGISTER.md` item 23 says this "gates that offer entirely." All five pages under `/business-fee-audit/` are blocked until this is resolved.

**5. Privacy-policy legal review.** Item 10 in the register -- jurisdiction and legal-requirement scope for the privacy policy is still open, blocking `/privacy/`.

**6. Accessibility conformance fact.** Item 11 -- the specific conformance target and contact for the accessibility statement is still a `[FACT TO VERIFY]`, blocking `/accessibility/`.

## Pages blocked only by root blocker 1 (need real firm/entity facts, otherwise draft-approved)

These 18 pages already have a `CONTENT-MANIFEST.csv` row with "Compliance approved (copy as drafted)" status; the only thing standing between them and "Production approved" is the footer disclosure fact plus the named-reviewer sign-off from blocker 2: `/` (home), `/contact/`, `/financial-review/`, `/services/financial-planning/`, `/services/retirement-planning/`, `/services/wealth-management/`, `/who-we-help/physicians/`, `/locations/cleveland/`, `/locations/hudson/`, `/locations/independence/`, `/locations/lakewood/`, `/locations/shaker-heights/`, `/locations/strongsville/`, `/locations/westlake/`, `/retirement-planning-cleveland/`, `/wealth-management-cleveland/`, `/greater-cleveland/financial-planning-for-physicians/`, `/greater-cleveland/business-owner-financial-planning/`.

## Insights articles (12) -- mostly root blockers 1 and 2, four also need a fact-check pass

All 12 already carry standing draft-copy approval per `HUMAN-APPROVAL-MATRIX.md`, so their copy and tone are covered; what's missing is the named broker-dealer/RIA reviewer sign-off (blocker 2) and, for most, the same firm-fact footer bracket (blocker 1). Four of them separately cite specific numeric or regulatory facts the manifest flags as unverified and which need an actual fact-check before publication, independent of any disclosure language: `/insights/retirement-income-planning/` (RMD age/threshold), `/insights/social-security-claiming-considerations/` (full retirement age and credit percentages), `/insights/rsus-vs-stock-options-key-differences/` (ISO/NSO tax treatment), `/insights/required-minimum-distributions-what-to-know/` (RMD age/penalty facts), and `/insights/retirement-plan-design-for-business-owners/` (contribution limits). One article has an additional, separate gap: `/insights/valuing-a-closely-held-business-an-overview/` needs a real answer to whether the firm performs or refers business valuations before its substantiation placeholder can close -- that's a factual/business-model question for the practice owner, not a compliance-language one. The remaining articles with no extra fact-check flag: `/insights/sequence-of-returns-risk-in-retirement/`, `/insights/equity-compensation-for-executives/`, `/insights/managing-concentration-risk-in-company-stock/`, `/insights/deferred-compensation-elections-timing-considerations/`, `/insights/business-succession-planning-getting-started/`, `/insights/family-transition-vs-third-party-sale-comparing-paths/`.

## Lead-magnet landing pages (3)

Same pattern as the insights articles -- standing draft-copy approval covers tone, still need blockers 1 and 2: `/resources/retirement-readiness-checklist/`, `/resources/business-owner-planning-checklist/`, `/resources/equity-compensation-checklist/`.

## One page with a stale gate worth rechecking

`/shaker-heights/retirement-planning-for-executives/` (COMBO-003) is excluded from `sitemap.ts` and marked as gated on office/service-area confirmation, citing `MISSING-INFORMATION-REGISTER.md` item 14. That item is now marked Resolved in the register (office confirmed: 1414 S. Green Rd., Suite 105, South Euclid, OH 44121, confirmed 2026-08-06) -- the manifest note and sitemap exclusion appear to just not have been updated after that resolution. Worth a deliberate look at whether this page can be re-added to the sitemap now, subject to the same blockers 1 and 2 as everything else.

## /manufacturing-business-advisors/ (COMBO-006)

Title/designation use ("Financial Advisors") was explicitly approved by the practice owner per `HUMAN-APPROVAL-MATRIX.md`. Only blockers 1 and 2 remain.

## Business Fee Audit vertical (5 pages, gated entirely)

`/business-fee-audit/`, `/business-fee-audit/contact/`, `/business-fee-audit/disclosures/`, `/business-fee-audit/how-it-works/`, `/business-fee-audit/privacy/` -- none of these have a manifest row, and per the register this offer is gated entirely on the entity/compensation disclosure (root blocker 4). Nothing else about these pages can be resolved until that's answered.

## Pages that just need a manifest row created (content itself isn't separately flagged, but no formal approval has ever been recorded)

Once root blockers 1 and 2 are resolved, these need a `CONTENT-MANIFEST.csv` row added and the same sign-off as every other page -- nothing distinguishes them individually beyond that. Grouped by section:

Services subpages (7): `/services/business-owner-planning/`, `/services/business-succession-planning/`, `/services/estate-planning-coordination/`, `/services/executive-financial-planning/`, `/services/insurance-and-risk-planning/`, `/services/investment-strategy/`, `/services/tax-aware-financial-planning/`. Two of these (Tax-Aware Financial Planning, Estate-Planning Coordination) also need the "not tax/legal advice" disclosure from `DISCLOSURE-INVENTORY.md`, which is itself still in draft, unsigned-off status.

Location pages (5): `/locations/beachwood/`, `/locations/cleveland-heights/`, `/locations/mentor/`, `/locations/solon/`, `/locations/willoughby/`.

Who-we-help persona pages (8): `/who-we-help/business-owners/`, `/who-we-help/contractors/`, `/who-we-help/corporate-executives/`, `/who-we-help/healthcare-professionals/`, `/who-we-help/high-net-worth-families/`, `/who-we-help/manufacturing-leaders/`, `/who-we-help/pre-retirees/`, `/who-we-help/retirees/`.

Section index pages (5): `/services/`, `/insights/`, `/locations/`, `/resources/`, `/who-we-help/`.

Utility and legal pages (7): `/about/`, `/disclosures/`, `/faq/`, `/schedule/`, `/our-approach/`. `/privacy/` additionally needs the jurisdiction/legal-scope review (root blocker 5). `/accessibility/` additionally needs the conformance-target fact (root blocker 6).

Offer pages (2): `/business-owner-financial-review/` and `/retirement-review/` -- both need the "financial review scope" disclosure formally signed off (the language is already drafted and live on `/business-owner-financial-review/`, just not yet approved per `DISCLOSURE-INVENTORY.md`).

## Not actually blocking the site check

`SEQ-A/B/C` (email nurture sequences), `GADS-001` (Google Ads architecture), and `CRO-001` (CRO recommendations) all show as draft-approved-but-not-production in `CONTENT-MANIFEST.csv`, but none of them are website routes, so they don't appear in the 77-page `check:compliance-manifest` failure list and aren't blocking a deploy. They're worth closing out eventually (the email sequences need a CAN-SPAM footer at ESP-template stage; Google Ads needs a separate approval pass before any live spend; the CRO backlog is self-gating -- no experiment runs without its own compliance review), but they're not part of this punch list's urgency.

`/robots.txt/` and `/sitemap.xml/` also appear in the "no manifest row" list. These are generated technical files, not marketing pages, and don't need compliance content or sign-off. This looks like `scripts/check-compliance-manifest.mjs` sweeping every route out of `prerender-manifest.json` without excluding non-page routes -- worth a small script fix to exclude them, rather than a compliance task.
