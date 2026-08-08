# Testing

## Functional

Navigation, links, forms, validation, thank-you pages, redirects,
downloads, appointment links, phone links, error pages (404/500).

## Responsive

All required breakpoints: 320, 375, 390, 430, 768, 1024, 1280, 1440px, plus
large desktop. No horizontal overflow at any width.

## Accessibility

Automated scan + manual: keyboard nav, focus order, screen-reader labels,
form errors, modal behavior, heading structure, link purpose, contrast,
zoom, reduced motion.

## Performance

LCP, INP, CLS, total JS weight, image weight, font loading, third-party
script impact — measured on Deploy Previews before merge.

## SEO

Indexability, canonicals, sitemap, robots.txt, metadata, structured data,
redirects, status codes, internal links.

## Privacy & Analytics

No PII in events, no form values captured, consent state respected,
session recording disabled by default, dev traffic separated, events fire
once, cross-domain tracking only as approved.

## Compliance

Correct entity names, correct disclosures, no unapproved testimonials, no
unsupported awards, no performance content, no prohibited claims, no draft
annotations visible in rendered HTML, approval reference recorded in
`CONTENT-MANIFEST.csv`.

## Required PR Evidence

Screenshots per breakpoint (mobile hero/nav/form/disclosures; desktop
hero/nav/form/disclosures) plus the checklist in
`.github/pull_request_template.md`.
