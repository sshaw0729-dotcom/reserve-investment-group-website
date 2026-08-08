# SEO Strategy

## Per-Page Requirements

Distinct search intent; unique title tag; unique meta description; one H1;
logical heading structure; descriptive URL; canonical URL; Open Graph/
social metadata; breadcrumbs; relevant schema.org structured data; internal
links; descriptive image alt text; source notes where claims are made;
appropriate CTA; compliance-reviewed content before indexing.

## Site-Level Deliverables

XML sitemap (auto-generated from the content model at build time), optional
image sitemap, `robots.txt`, redirect map (`REDIRECT-MAP.csv`), canonical-
domain rules, broken-link checks, orphan-page reports, duplicate-title/
description reports, structured-data validation in CI
(`check:seo`/`structured-data-validation`).

## Structured Data by Page Type

- Organization / FinancialService (home, about) — using only confirmed
  facts, no fabricated review counts or ratings.
- Service (service hub pages).
- FAQPage (any page with an FAQ section).
- BreadcrumbList (all spoke pages).
- LocalBusiness/service-area schema on location pages — only if the
  underlying service-area claim is accurate; never a fabricated office
  address.

## Prohibitions

No keyword stuffing, no city-swapped doorway pages, no AI filler content,
no hidden text, no fake office locations, no purchased/fabricated reviews,
no cloned competitor copy, no unsupported claims, no mass-generated
service×persona×location pages. Every combined page passes the checklist
in `SITE-ARCHITECTURE.md` and the recommendation in
`KEYWORD-AND-INTENT-MAP.csv` before it is built.
