# Architecture

## Layers

1. **Webflow** — design system, prototypes, approved reusable visual
   sections. Not a production data source unless Model B CMS controls are
   implemented and approved (`CONTENT-MODEL.md`).
2. **Next.js + TypeScript (GitHub)** — production application. Static
   generation by default; server rendering only where necessary (e.g.,
   personalized/consent-dependent content). Semantic HTML, component-based,
   minimal client JS, accessible forms, structured metadata, generated
   sitemap/robots.txt.
3. **Netlify** — build, deploy previews, staging, production hosting,
   redirects, security headers, serverless functions (forms), environment
   variables, rollbacks.
4. **PostHog** — consent-aware analytics via a typed, allowlisted event
   wrapper; autocapture and session recording off by default.

## Content Flow

Webflow (design/content draft) → Cowork compliance package → Claude Code
implements as version-controlled content (`content/**`) and components
(`src/components/**`) → pull request → Netlify Deploy Preview → required
reviews → merge to `staging` → regression → merge to `main` (human-approved)
→ Netlify production deploy.

## Rendering Strategy

- Marketing/informational pages: static generation (SSG) at build time.
- Sitemap/robots: generated at build time from the content model.
- Forms: client component posts to a Next.js server action / Netlify
  Function; no client-side secret usage.
- No page renders draft compliance annotations (`[COMPLIANCE REVIEW
  REQUIRED]`, etc.) — these live only in source content files and are
  stripped by a build-time check (`check:draft-annotations`).

## Directory Structure

```
src/
  app/                # Next.js App Router routes
    (marketing)/
      page.tsx         # Home
      about/
      our-approach/
      who-we-help/
      services/
      insights/
      resources/
      faq/
      contact/
      schedule/
    (legal)/
      disclosures/
      privacy/
      terms/
      accessibility/
    (offers)/
      financial-review/
      retirement-review/
      business-owner-financial-review/
    sitemap.ts
    robots.ts
  components/
    ui/                # design-system primitives (Button, Card, Accordion...)
    marketing/         # Hero, CTAStrip, TestimonialPlaceholder, DisclosureBlock...
    forms/             # LeadForm, FormField, FormStatus
  lib/
    analytics/         # PostHog wrapper + POSTHOG-EVENT-SCHEMA.ts consumer
    content/           # typed content loaders
    seo/               # metadata + structured data helpers
content/
  services/*.mdx
  personas/*.mdx
  locations/*.mdx
  offers/*.mdx
  legal/*.mdx
netlify/functions/
  submit-lead.ts
```
