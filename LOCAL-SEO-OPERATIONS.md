# Local SEO Operations

Status: Added 2026-08-06, `MARKETING-ECOSYSTEM-BRIEF.md` Section 4. This
is an operations/process document — most of what it describes happens
off-site (Google Business Profile, directories, review platforms), not
in the Next.js codebase. Where it does touch code (structured data), the
implementation is noted and gated appropriately.

This document sets up the operating process. It does not itself claim
any of the following has been done — every action item below is
something a human owner needs to execute, using real firm facts that
don't yet exist in this project (see gates called out inline and in
`MISSING-INFORMATION-REGISTER.md`).

## 1. Google Business Profile (GBP)

**Update 2026-08-06:** office address (1414 S. Green Rd., Suite 105,
South Euclid, OH 44121) and phone (216-284-3615, confirmed correct —
855-498-0515 in public directories is outdated) resolved —
`MISSING-INFORMATION-REGISTER.md` #14/#15. The practice owner also
confirmed the new site will fully replace what's currently live at
`reserveinvestmentgroup.com`.

**Confirmed 2026-08-06 — a listing already exists and is owner-managed.**
Checked directly (Google search, signed into the practice owner's own
Google account): "Reserve Investment Group" has an active, verified GBP
listing at the confirmed address, category "Financial planner," with
**13 Google reviews at a 5.0 average** (plus 6 reviews at 5.0 on
Facebook, 230+ followers). The practice owner's Google account shows as
a manager of this profile. This is a claim/optimize task, not a
creation task — do not create a second listing.

**Things needing attention, not creation:**

1. **Phone number — updated 2026-08-06.** Removed both prior numbers
   ((855) 498-0515 and the secondary (216) 243-9408) and set
   216-284-3615 as the sole primary number on the live listing, per
   direct confirmation. Google shows this as pending review (typically
   up to 10 minutes) as of this edit — worth a spot-check to confirm it
   went live. See `MISSING-INFORMATION-REGISTER.md` #15.
2. **Website field is empty.** The listing's website field currently
   shows "Not set" — Google auto-removed a previous
   `reserveinvestmentgroup.com` entry at some point. Re-add once the new
   site is ready to link (not before — don't point a live GBP listing at
   a pre-launch draft).
3. **Categories already set are broad.** Primary: Financial planner.
   Secondary: Insurance broker, Investment service, Financial
   consultant, Life/Dental/Health insurance agency, Credit counseling
   service, Business management consultant. Worth a pass to confirm
   these all still accurately reflect current services (some — Dental
   insurance agency, Credit counseling service — read as legacy from an
   earlier iteration of the business and may be worth removing).
4. **Existing description mentions "affiliates."** The current listing
   description reads in part: "Together with our affiliates, we offer
   products and services designed to meet your unique needs..." — worth
   reviewing given the Edward Jones separation instruction
   (`MISSING-INFORMATION-REGISTER.md` #2/#5); confirm this doesn't
   inadvertently reference an affiliation the practice owner wants kept
   separate.
5. **Profile is otherwise stale.** Last photo upload roughly 5+ years
   ago; several completeness prompts (chat, social profiles) unfilled.
   Low-risk cleanup once the above are settled.

Once the phone-number question is resolved:

- **Update the existing listing** — do not create a new one — using the
  exact legal/DBA name approved for public use, the confirmed address,
  and the confirmed phone number.
- **Category selection.** Choose the most accurate primary category
  (e.g., "Financial Planner" or "Financial Consultant" — not
  "Investment Service" or similar unless that specifically matches the
  firm's registration) plus accurate secondary categories. Category
  choice should not imply a designation or registration status the firm
  doesn't hold — same rule as page titles in `PROJECT-BRIEF.md`.
- **Business description.** Same prohibited-language rules as the rest
  of the site apply here: no superlatives, no promised outcomes, no
  fabricated claims. Draft through the same compliance review path as
  web copy, not as a separate off-site exception.
- **Hours, website link, appointment link.** Populate once confirmed;
  link to `/schedule/` and `/contact/`, not directly to a lead form
  bypassing the site's disclosure content.
- **Photos.** Only real photos (office exterior/interior if applicable,
  team headshots with consent) — no stock photography presented as if
  it depicts the firm's actual location or people.
- **Posts feature.** Treat exactly like any other public content —
  route through compliance review, no performance claims, no
  urgency/scarcity language ("limited spots," "act now").
- **Q&A section.** Monitor for questions that invite an
  investment-advice-sounding public answer; route substantive answers
  through the same review process as FAQ content elsewhere on the site.
- **Messaging feature.** If enabled, treat as a business communication
  channel subject to the same recordkeeping obligations as email —
  confirm with compliance/legal whether it needs to be archived like
  other client communications before turning it on. [COMPLIANCE REVIEW
  REQUIRED]

## 2. Citations and Directory Listings

**Update 2026-08-06:** NAP is now confirmed (see Section 1). Public
search already found this firm listed on several directories
(BuyBlack.org, D&B, LinkedIn, Facebook, BBB category page), at least one
of which (BuyBlack.org) shows the outdated 855-498-0515 number. This is
very likely an **existing-listing audit and correction** task, not a
from-scratch citation-building task. Before creating any new listing,
search for and inventory what's already out there, and correct the
phone number anywhere it shows the outdated one.

- **Core platforms to prioritize** for the audit: Google
  Business Profile (above), Bing Places, Apple Maps/Business Connect,
  and the major data aggregators that feed hundreds of smaller
  directories (e.g., Data Axle, Foursquare, Neustar Localeze — specific
  aggregator relationships change over time; confirm current options at
  build time). [FACT TO VERIFY — aggregator landscape shifts; confirm
  current best options before executing.]
- **NAP consistency is the entire point.** Every listing should use the
  identical business name, address format, and phone number as the
  approved GBP listing — inconsistent NAP data actively hurts local
  search performance and can look like multiple different businesses to
  search engines.
- **Avoid duplicate listings.** Search for existing/legacy listings
  (a previous website, a data aggregator auto-generating a listing from
  public records, etc.) before creating new ones — duplicates split
  authority and can confuse users.
- **Industry-specific directories** (e.g., financial-advisor directory
  sites) should be evaluated individually — some require or display
  information (AUM, client minimums, awards) that would need the same
  fact-verification and compliance review as anything published on the
  primary site. Do not let a third-party directory's required-fields
  form become a backdoor around the site's own compliance process.

## 3. Reviews

**Status check completed 2026-08-06.** The GBP listing (Section 1)
already has 13 organic Google reviews at a 5.0 average, and Facebook
shows 6 reviews also at 5.0. Spot-checked a handful of the Google
reviews: dated (at least two from Oct/Nov 2022), all positive, mentioning
specific services (life insurance, estate planning) and by name a staff
member, "Jazmen Pace." Nothing concerning surfaced — no negative or
recent complaint-pattern reviews were visible. These reviews already
exist and weren't solicited by this project.

**This is still the highest-compliance-risk item in this document and
should not proceed to active solicitation without named legal/compliance
sign-off.** `COMPLIANCE-RISK-MAP.md` already rates
"Testimonials/reviews/awards" as High risk, and that applies here too —
a Google review is functionally a public testimonial, and *featuring*
any of these existing reviews on the new site (not just their existing
presence on Google) would itself need compliance review before
publishing, per the same rule that governs `TestimonialPlaceholder`
elsewhere on the site.

Context for that reviewer, not a substitute for their judgment: the SEC
Marketing Rule (Investment Advisers Act Rule 206(4)-1) permits RIAs to
use testimonials and endorsements, but subject to specific conditions —
clear and prominent disclosure of whether the reviewer was compensated,
whether they are a current client, and any material conflicts of
interest, among other requirements. [FACT TO VERIFY — confirm current
rule text and any applicable state-level requirements with your
compliance/legal counsel before relying on this summary; rules and
guidance are periodically updated.] If the firm operates as or through a
broker-dealer for any activity, FINRA's separate communications rules
may also apply instead of or alongside the SEC rule — relevant here
given the confirmed Edward Jones affiliation and OBA approval
(`MISSING-INFORMATION-REGISTER.md` #2/#5). [ENTITY DISCLOSURE REQUIRED —
confirm which regulatory regime(s) apply before building any review
program or featuring existing reviews on-site.]

Until that sign-off is on file, this project's default posture is:

- **Monitor and respond, don't solicit.** Responding professionally to
  reviews that appear organically (thanking reviewers, addressing
  concerns) is lower-risk than actively soliciting reviews, and can
  proceed under the same "no superlatives, no promised outcomes"
  language rules as everything else. Do not solicit reviews until a
  compliant program (disclosure language, record retention, monitoring
  for compensation/conflicts) is approved.
- **No review-gating.** Never filter who gets asked for a review based
  on expected sentiment (e.g., only asking happy clients) — this is a
  deceptive-practice risk independent of the securities-specific rules
  above.
- **No incentivized reviews.** Do not offer anything of value in
  exchange for a review; this both violates most platforms' terms of
  service and complicates the compensation-disclosure question under
  the Marketing Rule.
- **Record retention.** Any testimonial/endorsement content that is
  ultimately used (a review, a quote, a case study) needs to be
  retained per the firm's recordkeeping policy, coordinated with
  compliance/legal — this project does not currently have that policy
  documented (see `MISSING-INFORMATION-REGISTER.md`).
- **`TestimonialPlaceholder` stays a placeholder.** The component built
  in `MARKETING-ECOSYSTEM-BRIEF.md` Section 1 renders only labeled
  placeholder text and should not be replaced with real testimonial
  content until the above is resolved.

## 4. Structured Data (LocalBusiness / FinancialService Schema)

Per `SEO-STRATEGY.md`: "LocalBusiness/service-area schema on location
pages — only if the underlying service-area claim is accurate; never a
fabricated office address." Since office address and phone are now confirmed
(2026-08-06), `localBusinessJsonLd()` is wired into the Home page
(`src/app/page.tsx`) using the real address and 216-284-3615 (confirmed
correct) — not 855-498-0515, the outdated number found in public
listings (see Section 1). This still needs a compliance pass before the
site goes live (the whole site is pre-launch draft).

- `localBusinessJsonLd()` lives in `src/lib/seo/jsonld.tsx` — builds
  `LocalBusiness`/`FinancialService`-type structured data from an
  explicit `address`/`telephone` object passed in by the caller. It
  does not read from any hardcoded placeholder values, and there is no
  default address baked in — a caller must supply real data or the
  function will not produce a schema block with fabricated content.
- **Called from the Home page only, for now.** South Euclid — the
  actual office city — does not currently have its own `/locations/`
  spoke page (the 12 built so far are Cleveland, Cleveland Heights,
  Shaker Heights, Beachwood, Solon, Willoughby, Mentor, Hudson,
  Independence, Westlake, Strongsville, Lakewood). Worth considering as
  a location page in its own right, given it's where the office
  actually is.
- Existing `FAQPage`, `BreadcrumbList`, `Service`, and `Article` schema
  (from Sections 1–3 and Phase 5) are unaffected and already live.

## 5. Ongoing Cadence (once launched)

A lightweight recurring checklist for after production launch — not
executed now, documented for the eventual owner:

- Monthly: check GBP Insights (views, calls, direction requests) for
  anomalies; respond to any new reviews within a few business days;
  spot-check NAP consistency on the 3–5 highest-traffic citation
  sources.
- Quarterly: re-audit citations for consistency drift (business moves,
  phone changes); review GBP category and description against current
  approved copy; confirm structured data still validates
  (`check:seo` once implemented).
- Annually: full citation audit against a citation-tracking tool; review
  this document against current SEC Marketing Rule guidance, since
  regulatory interpretation in this area continues to evolve.
