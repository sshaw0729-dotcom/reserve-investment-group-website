# Next.js Upgrade Scoping

Status: **Deferred, not started.** This document exists so the upgrade is a plan we can pick up, not a vague TODO.

## Why this exists

The `Dependency vulnerability scan` step in `quality-gates.yml` is intentionally left red. `npm audit --audit-level=high` flags `next` and `postcss` (high/critical severity) because Next.js 14.x no longer receives security patches from Vercel. We accepted this risk deliberately (2026-08-09) rather than rush a breaking-change upgrade into a CI-hardening session. This doc is the follow-up: what the upgrade actually involves, so it can be scheduled as its own reviewed piece of work.

## Current state

Current versions: next `^14.2.0`; react and react-dom `^18.3.0`; eslint-config-next `^14.2.0`; Node engine `>=20`. Routing is App Router only (no `pages/` directory).

## Target options

Two realistic targets. Next.js 15.5.21 (Maintenance LTS) is the smaller jump from 14.x, still supports React 18 for the App Router, and patches the CVEs; it's the lower-risk first step. Next.js 16.2.11 (Active LTS) is a larger jump and may require React 19 -- worth checking Next's own migration notes at upgrade time, since exact requirements shift between minor releases. Recommendation: land on 15.5.21 first, confirm the site is stable there, and treat 16.x as a separate follow-up rather than doing both jumps at once.

## Breaking-change surface in this codebase

Checked via GitHub code search across the repo on 2026-08-10.

`cookies()` from `next/headers`: zero usages, not a factor in this upgrade. `headers()` from `next/headers`: zero usages -- the only `headers()` hits in the repo are `next.config.js`'s own `async headers()` config function (a different, unrelated API) and an unrelated `fetch` call in a Netlify function. `searchParams` as a page prop: zero usages. `params` as a dynamic route prop: five files use the synchronous Next 14 pattern, described below.

The five files, all following the identical pattern: `src/app/services/[slug]/page.tsx`, `src/app/locations/[slug]/page.tsx`, `src/app/insights/[slug]/page.tsx`, `src/app/resources/[slug]/page.tsx`, and `src/app/who-we-help/[slug]/page.tsx`.

Each of these five files has two functions using the synchronous Next 14 signature. In `generateMetadata`, the props are typed `{ params }: { params: { slug: string } }` and `params.slug` is read directly. The default-exported page component uses the identical prop type and also reads `params.slug` directly.

In Next 15+, `params` becomes `Promise<{ slug: string }>` in both functions. The fix is mechanical and identical across all five files: make both functions `async`, change the prop type to `Promise<{ slug: string }>`, and `await params` before reading `.slug`. That's ten call sites total (five files times two functions each), all the same shape. `generateStaticParams()` itself is unaffected -- it does not receive a `params` argument and returns the same shape either way.

## What this means for effort

This is a narrow, contained upgrade as these things go. There is no `cookies()` / `headers()` / `searchParams` cleanup needed, and the `params` change is one repeated pattern across five files rather than five different problems. Realistic scope, roughly in order: bump `next` and `eslint-config-next` to the target version (and `react` / `react-dom` if the target requires it); run `npm run typecheck`, which will immediately flag all ten `params` call sites as type errors once the types change -- a built-in checklist rather than something to track by hand; fix each of the five files (same edit, repeated); run the full `quality-gates` suite locally or via a branch push (typecheck, lint, unit tests, build, link check, accessibility scan, SEO validation); deploy to a Netlify branch or preview deploy and manually click through at least one page per dynamic route type (a service page, a location page, an insight, a resource, a persona page) before promoting to production; and finally re-run `npm audit --audit-level=high` to confirm `next` and `postcss` have dropped out of the report.

No changes are anticipated outside these five files and `package.json` / `package-lock.json`, but that should be confirmed once work starts rather than assumed.

## Not in scope here

This document covers scoping only, not the upgrade itself. The Next.js 16 jump is a separate future decision to be made after 15.x is confirmed stable. Any other dependency upgrades unrelated to Next.js are also out of scope here.
