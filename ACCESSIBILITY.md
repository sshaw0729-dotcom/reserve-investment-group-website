# Accessibility

Target: WCAG 2.2 AA conformance across all pages.

## Requirements

Mobile-first, no horizontal scrolling, readable type without zoom, ~44x44
CSS px minimum touch targets, persistent non-obstructive mobile CTA where
appropriate, no intrusive interstitials, keyboard- and screen-reader-
operable navigation, one-column mobile forms, correct input types/
autocomplete, field-associated error messages, visible focus states,
responsive images, no text embedded only in images, accessible table/
card patterns on small screens, respect for `prefers-reduced-motion`,
sufficient contrast, no autoplaying audio/video.

## Testing

Automated scanning (axe or equivalent) in CI (`check:a11y`) plus manual
checks: keyboard navigation, focus order, screen-reader labels, form
errors, modal behavior, heading structure, link purpose, contrast, zoom,
reduced motion. Required breakpoints: 320, 375, 390, 430, 768, 1024, 1280,
1440px, plus large desktop. See `TESTING.md`.

## Sign-off

No page is marked "Production approved" with an unresolved critical
accessibility issue.
