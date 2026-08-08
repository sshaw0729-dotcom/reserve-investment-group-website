# Google Ads Architecture

Status: Added 2026-08-06, `MARKETING-ECOSYSTEM-BRIEF.md` Section 7. This
is a planning document, not a live campaign — no Google Ads account is
connected in this project, and nothing here spends money until a human
sets it up in Google Ads directly. Built last in the sequence
(`MARKETING-ECOSYSTEM-BRIEF.md` Section 3, item 7) so it maps to
landing pages that already exist rather than pages that don't.

## 1. Sources and Their Limits

This architecture uses the existing `KEYWORD-AND-INTENT-MAP.csv` for
keyword themes and intent grouping. **No live Google Ads/Keyword Planner
data is connected in this session** — the same caveat already logged in
`MARKETING-ECOSYSTEM-BRIEF.md` Section 2. Treat keyword groupings below
as structurally sound starting points, not a media plan. Before actual
spend: pull real search volume, CPC ranges, and competition data from
Keyword Planner, and re-prioritize campaign order and budget split
against that data.

No budget figures, target CPA, or bid amounts are specified anywhere in
this document — none were provided, and inventing them would misstate
this as a media plan rather than a structure.

## 2. Compliance Requirements Specific to Google Ads (Read First)

Two separate layers of rules apply here, on top of everything already
governing this project (`PROJECT-BRIEF.md`, `COMPLIANCE-RISK-MAP.md`):

**Google's own financial-services ad policy.** Checked 2026-08-06
against Google's current Advertising Policies (Financial products and
services). Financial planning / investment advisory activity — including
personalized advice — falls under Google's "financial products and
services" definition. That means, independent of any securities
regulation:

- Every ad's landing page must prominently display, without requiring a
  click or hover: the business's physical address, all associated fees,
  and links to any third-party accreditation/affiliation the ads or
  pages assert. "Prominently" means on the page itself, not behind a
  rollover, tab, or secondary link.
- Some locations require a separate "location-specific financial
  services verification" step in the Google Ads account (business type,
  licenses held, registration numbers) before financial-services ads
  can run at all — confirm whether this applies to Ohio-targeted ads
  when the account is actually set up; policy specifics change and
  weren't independently re-verified per target ZIP/state here.
- Full account **certification** (the badge Google requires for some
  categories) applies to specific higher-risk categories — debt
  settlement/management, complex speculative products (CFDs, forex),
  cryptocurrency, prediction markets. Standard fee-based financial
  planning / RIA advisory advertising, as this firm offers, does not
  appear to fall into a certification-required category under the
  current policy — but this should be confirmed directly in the Google
  Ads account at setup time, since Google updates this policy on an
  ongoing basis and this document reflects a point-in-time check.
- None of the above substitutes for the securities-specific compliance
  rules already governing this project (no superlatives, no promised
  outcomes, no performance figures — see `PROJECT-BRIEF.md` and
  `COMPLIANCE-RISK-MAP.md`). Google's policy is an additional, separate
  gate, not a replacement one.

**This project's own compliance rules still apply in full** to ad copy:
no "best/only/top/leading/most trusted/premier," no promised outcomes,
no performance claims, `[COMPLIANCE REVIEW REQUIRED]` on anything not
already approved. Ad copy is public-facing commercial speech — if
anything, it gets more compliance scrutiny than on-site copy, not less.

**Pages excluded from ads entirely, same as `sitemap.ts`:**
`/shaker-heights/retirement-planning-for-executives/` (COMBO-003,
excluded pending the office/service-area gate — see
`IMPLEMENTATION-ROADMAP.md` Phase 5) and everything under
`/business-fee-audit/` (gated on the entity-disclosure item,
`MISSING-INFORMATION-REGISTER.md` #23). Do not build campaigns pointing
at either until those gates clear.

## 3. Account Structure

```
Reserve Investment Group, Inc (account)
├── Campaign: Retirement Planning
├── Campaign: Wealth Management
├── Campaign: Business Owner Planning
├── Campaign: Executive & Equity Compensation
├── Campaign: Physician-Specific
└── Campaign: Brand (firm name)
```

One campaign per service/persona theme rather than one per city —
consistent with `SITE-ARCHITECTURE.md`'s rejection of city-swapped
doorway pages. Geography is handled as **location targeting settings
within each campaign** (the confirmed service area — South Euclid,
Cleveland, Cleveland Heights, Shaker Heights, Beachwood, Solon,
Willoughby, Mentor, plus the 5 new Wave 2 cities), not as separate
campaigns or ad groups per city. This mirrors how the site itself is
structured: service/persona pages carry the substance, location pages
handle local relevance.

## 4. Campaign → Ad Group → Landing Page Map

| Campaign | Ad group | Landing page | Persona(s) |
|---|---|---|---|
| Retirement Planning | Retirement income planning | `/retirement-planning-cleveland/` | Pre-Retirees, Retirees |
| Retirement Planning | Retirement review (offer) | `/retirement-review/` | Pre-Retirees, Retirees |
| Retirement Planning | Retirement readiness checklist | `/resources/retirement-readiness-checklist/` | Pre-Retirees, Retirees |
| Wealth Management | Wealth management, general | `/wealth-management-cleveland/` | High-Net-Worth Families |
| Wealth Management | Financial review (offer) | `/financial-review/` | High-Net-Worth Families |
| Business Owner Planning | Manufacturing business advisory | `/manufacturing-business-advisors/` | Manufacturing Leaders |
| Business Owner Planning | Business owner planning, general | `/greater-cleveland/business-owner-financial-planning/` | Business Owners, Contractors |
| Business Owner Planning | Business owner review (offer) | `/business-owner-financial-review/` | Business Owners |
| Business Owner Planning | Business planning checklist | `/resources/business-owner-planning-checklist/` | Business Owners |
| Business Owner Planning | Succession planning | `/services/business-succession-planning/` | Business Owners |
| Executive & Equity Compensation | Equity compensation | `/resources/equity-compensation-checklist/` | Corporate Executives |
| Executive & Equity Compensation | Executive financial planning | `/services/executive-financial-planning/` | Corporate Executives |
| Physician-Specific | Physician financial planning | `/greater-cleveland/financial-planning-for-physicians/` | Physicians, Healthcare Professionals |
| Brand | Firm name / branded terms | `/` (Home) | All |

Every ad group points to a page that already exists and already carries
the compliant disclosure block, lead form, and (where applicable)
`localBusinessJsonLd` schema — no new pages required to launch this.
Lead-magnet resource pages and offer pages are included as ad group
destinations, not just the top-level campaign pages, since a
checklist-download or a "request a review" offer is often a lower-
friction first click than a general services page.

## 5. Keyword Themes (Structural, Pending Real Volume Data)

Grouped from `KEYWORD-AND-INTENT-MAP.csv`'s existing intent categories.
Each ad group should be built around one intent cluster, not mixed —
this keeps Quality Score coherent between keyword, ad copy, and landing
page, and avoids the single-ad-group-for-everything anti-pattern.

| Ad group | Example keyword themes | Match type guidance |
|---|---|---|
| Retirement income planning | retirement planning [city], retirement income advisor, required minimum distribution planning | Phrase + exact on high-intent terms; avoid broad match until negative list is mature |
| Retirement review (offer) | free retirement review, retirement plan check-up, second opinion retirement plan | Exact/phrase — offer-specific terms convert differently than informational terms and shouldn't share a group with them |
| Wealth management, general | wealth management [city], financial advisor for high net worth, investment strategy advisor | Phrase + exact |
| Manufacturing business advisory | financial advisor for manufacturing business, manufacturing business succession | Phrase + exact — low volume, high relevance |
| Business owner planning, general | financial planning for business owners, business owner financial advisor [city] | Phrase + exact |
| Succession planning | business succession planning advisor, exit planning financial advisor | Phrase + exact |
| Equity compensation | equity compensation financial advisor, RSU stock option planning, executive compensation planning | Phrase + exact — this is a specific-enough term that broad match will pull in irrelevant HR/legal traffic |
| Physician financial planning | financial planning for physicians, financial advisor for doctors [city] | Phrase + exact |
| Brand | reserve investment group, reserve investment group [city] | Exact — defensive/low-spend, protects against competitor bidding on the firm name |

**Negative keywords (account-level, apply to all campaigns):** free
[when not paired with an actual offer], jobs, careers, salary, DIY,
software, courses, certification classes, "how to become a," student,
internship. Financial-advisor search terms attract a lot of
career-research and DIY-education traffic that isn't a lead — this list
should be built out further once real search-term reports exist, but
these are the obvious ones to pre-empt.

## 6. Ad Copy Guidance and Examples

All ad copy must clear the same bar as on-site copy: no superlatives, no
promised outcomes, no performance figures, process-and-access framing
instead of results framing. A few compliant examples, built from
language already approved elsewhere on the site (not new claims):

**Retirement income planning (RSA-style, illustrative):**
- Headline: "Retirement Income Planning" / "Serving Greater Cleveland" / "Coordinated, Personalized Approach"
- Description: "Work through retirement income sequencing, Social Security timing, and tax considerations with a local advisor. Schedule a no-obligation conversation."

**Business owner planning:**
- Headline: "Financial Planning for Business Owners" / "Cleveland-Based Advisor" / "Succession & Growth Planning"
- Description: "Coordinate personal and business financial planning, including succession planning. Request a complimentary financial review to start."

**Physician-specific:**
- Headline: "Financial Planning for Physicians" / "Serving Greater Cleveland Physicians" / "Equity & Income Planning"
- Description: "Financial planning built around a physician's income timeline and equity compensation. Schedule an introductory conversation."

Every description ends in one of the two already-approved CTAs
("Schedule an introductory conversation" / "Request a complimentary
financial review"), consistent with `PROJECT-BRIEF.md` and
`EMAIL-NURTURE-SEQUENCES.md`. These are drafts, not final approved ad
copy — they route through the same compliance-approval process as any
other public-facing copy before going live (`HUMAN-APPROVAL-MATRIX.md`).

**Sitelink extensions:** link to Services hub, Who We Help hub, Our
Approach, and Contact — reuses existing pages, no new URLs.
**Callout extensions:** "No-Obligation Conversation," "Local to Greater
Cleveland," "Coordinated Planning Approach" — descriptive, not
superlative.
**Structured snippets / call extension:** business phone
(216-284-3615, confirmed) and physical address
(1414 S. Green Rd., Suite 105, South Euclid, OH 44121) — these also
satisfy Google's financial-services disclosure requirement (Section 2
above) when they appear on the landing page itself, which they already
do on Home and Contact via `localBusinessJsonLd`.

## 7. Conversion Tracking

No new PostHog events needed — `POSTHOG-EVENT-SCHEMA.ts` already has
`campaign_id` and `traffic_source` as allowed properties on existing
events (`page_viewed`, `form_submitted`, `resource_downloaded`, etc.).
When a real Google Ads account is connected:

- Append UTM parameters (`utm_source=google`, `utm_medium=cpc`,
  `utm_campaign=<campaign name>`) to final URLs; map `utm_campaign` into
  the existing `campaign_id` property and `utm_source` into
  `traffic_source` at ingestion — no schema change required.
- Primary conversion actions to import into Google Ads from PostHog (or
  from Google Ads conversion tracking directly, once GTM/gtag is added —
  not yet present in this codebase): `form_submitted` (all lead forms),
  `resource_downloaded` (checklist downloads), `appointment_link_clicked`
  and `phone_link_clicked` if/when the scheduling system
  (`MISSING-INFORMATION-REGISTER.md` #16) is chosen and wired in.
- Google Ads conversion tracking (the `gtag`/global site tag) is not yet
  installed anywhere in this codebase — that's a setup step for whenever
  the account is actually created, and should go through the same
  consent-framework rules already established for PostHog
  (`ANALYTICS-MEASUREMENT-PLAN.md`) rather than being added ad hoc.

## 8. Open Items Before This Can Go Live

- Real keyword volume/CPC data (Section 1) to set actual budget and
  bid strategy — none of that is fabricated here.
- Google Ads account creation and, if applicable, the location-specific
  financial-services verification step (Section 2) — confirm
  requirement status for Ohio at setup time.
- Google Ads conversion tag installation, gated through the existing
  consent framework.
- Final ad copy compliance approval (Section 6 drafts are illustrative,
  not final).
- Scheduling-system decision (`MISSING-INFORMATION-REGISTER.md` #16) if
  "appointment booked" is wanted as a conversion action rather than just
  form submission.

## 9. Next Recommended Task

One item remains from the original `MARKETING-ECOSYSTEM-BRIEF.md`
sequencing plan: the **CRO recommendations doc** (Section 8) — this can
be drafted now that the Landing Page System pattern (Section 1) is in
active use, and can incorporate ad-traffic-specific CRO notes (e.g.,
message match between ad copy above and landing-page headlines) now
that this document exists.
