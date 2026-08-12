# Website Prototype Reference

Status: Reference only. This document records the provenance of the
"Production Website Package v2026-08-09-v1" prototype the practice owner
supplied on 2026-08-12, and how it was used in this repository. The
prototype itself is a static-HTML mockup and is **not** deployed as part
of this Next.js site — it exists solely as a content/design reference.

## What was supplied

A zipped package named `reserve_investment_group_production_site.zip`,
version `2026-08-09-v1`, containing:

- `index.html` — a single-page static mockup of the main site (hero,
  financial-planning/wealth-management/business-owner cards, About
  section with four values, dark "Our approach" journey section, starting
  -point quiz, FAQ, closing CTA), plus inline CSS/JS.
- `retirement.html`, `business-owners.html`, `cash-liquidity.html` —
  topic landing pages.
- `thank-you.html`, `privacy.html`, `disclosures.html` — supporting pages.
- `site-config.js`, `site.js` — scheduling-link and consent-gated
  PostHog config for the static build.
- `netlify.toml`, `_redirects`, `robots.txt`, `sitemap.xml` — static-site
  deploy config for a plain-HTML Netlify deployment (not used by this
  Next.js app, which has its own `netlify.toml`/build pipeline).
- `rig-flat.png`, `rig-3d.png` (and copies under `assets/`) — brand
  monogram assets.
- `README.md` — package documentation, summarized below.

## How it was used

The prototype's homepage copy matches the site's content from **before**
the 2026-08-11 "Interactive Website Concept" Canva reconciliation. On
2026-08-12 the practice owner asked to "fix website back to where it was
before you changed it" while explicitly keeping the 3-D hero/interactive
look added that same day. This prototype was used as the reference for
recovering that original copy — cross-checked against this repo's own
git history (the commit prior to the reconciliation) to confirm exact
wording, since the prototype's own FAQ answer text has at least one
mismatch (its "Do you provide tax or legal advice?" answer does not
actually address tax/legal advice). Where the two sources disagreed, this
repo's prior committed copy was treated as authoritative, since it
already followed the qualified, non-promissory conventions established in
`src/app/faq/page.tsx` and `src/lib/content/services.ts`.

The prototype's nav bar (a single-page, five-link anchor nav: About /
Services / Planning / Why Reserve / Questions) was **not** adopted as-is
— per practice-owner decision, the real site's nine-item, multi-page
`SiteHeader.tsx` navigation was kept, and only the header's visual
styling (floating rounded bar, border/shadow/backdrop blur, gold hover
accent) was updated to echo the prototype's polished look.

## Package README — required pre-launch review (carried over for record)

The prototype package's own README lists a pre-launch review checklist
for whoever eventually approves a production deploy of *that* package
(not this repository, which has its own governance docs — see
`HUMAN-APPROVAL-MATRIX.md`, `MISSING-INFORMATION-REGISTER.md`). Recorded
here for reference:

- Confirm regulatory status language and insert approved Form ADV / Form
  CRS / required disclosure links.
- Confirm privacy-law scope and data-retention periods.
- Confirm scheduling and CRM vendors and their privacy terms.
- Confirm service area and any office-location statements.
- Confirm asset minimums, service cadence, fees, and designations before
  publishing them.
- Keep testimonials/endorsements/ratings/performance off the site unless
  separately reviewed and approved under applicable marketing rules.
- Archive the approved production version and substantive future
  marketing revisions for required recordkeeping.
- Lead forms intentionally omit phone/SMS fields; if phone/text marketing
  is added later, counsel/compliance must approve the consent workflow
  first.

## Where the prototype files live

The prototype zip was not committed into this repository (it is a
reference artifact, not site source). If a future task needs to re-check
it, request it again from the practice owner rather than assuming a copy
exists in this repo.
