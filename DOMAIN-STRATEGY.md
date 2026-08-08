# Domain Strategy

Status: Draft, updated 2026-08-06 with confirmed owned domains. Routing
mechanism (Netlify domain alias + Host-based redirect vs. dedicated site
per domain) is marked `[FACT TO VERIFY]` pending a current-documentation
check per the Platform Verification Requirement.

## Primary Brand Domain

`reserveinvestmentgroup.com` — the authoritative site. Structure:
`/`, `/services/`, `/who-we-help/`, `/locations/`, `/insights/`,
`/resources/`, `/reviews/` (reviews section published only once approved,
genuine testimonials/ratings exist — currently empty/placeholder).

**Migration note, resolved-intent 2026-08-06 (see
`MISSING-INFORMATION-REGISTER.md` #18/#19):** public web search found
this domain currently live in production — a member/client login at
`/m/login`, a paid financial-planning software subscription, webinars,
and a wellness program. The practice owner confirmed the new build is
intended as a **full replacement** of that existing site, not a
coexistence/subdomain split.

**Update 2026-08-06:** user confirmed there are no active subscribers to
the existing $79/month product and the tools/portal are no longer in
use — the main risk (locking out paying clients mid-cutover) is off the
table. Remaining, lower-urgency item before DNS is repointed:

- A basic redirect plan for any of the old site's indexed URLs (SEO
  equity, old bookmarks/collateral pointing to old paths) —
  `netlify.toml` currently only routes the newly built pages, not
  redirects *from* the old site's URL structure. Worth a quick pass
  once the old site's sitemap/URL list is available, but not a blocker.

With the subscriber-continuity risk resolved, this domain is clear for
a Netlify deployment once the rest of Phases 0–8 (compliance review,
firm-fact resolution) are complete — see `IMPLEMENTATION-ROADMAP.md`.

## Owned Campaign Domains

| Domain | Offer / purpose | Relationship to primary brand | Status |
|---|---|---|---|
| `retirementplanningcleveland.com` | Retirement Planning × Cleveland combined landing page | Same firm, clearly disclosed | Built this session — `/retirement-planning-cleveland/` |
| `wealthmanagementcleveland.com` | Wealth Management × Cleveland combined landing page | Same firm, clearly disclosed | Built this session — `/wealth-management-cleveland/` |
| `manufaturingbusinessadvisors.com` *(spelling as registered — confirm intentional)* | Business advisory landing page for manufacturing-industry leaders/owners | Same firm, clearly disclosed | Built this session — `/manufacturing-business-advisors/` |
| `physicianfinancialplans.com` | Alias for the existing Physicians × Cleveland combined page | Same firm, clearly disclosed | Canonicalized to `/greater-cleveland/financial-planning-for-physicians/` — no duplicate content built |
| `businessfeeaudit.com` | Business Fee Audit offer (credit-card processing fee / overhead cost review) | **Requires explicit entity/affiliation/compensation disclosure** — must not imply the same regulated entity provides investment advice, insurance, and payment processing unless confirmed | Skeleton built this session; **still gated** on `MISSING-INFORMATION-REGISTER.md` #23 (entity relationship, compensation/referral arrangement). General content-compliance approval does not resolve this — it's a missing fact, not a pending sign-off. Netlify redirect intentionally not yet activated. |
| `processingcostreview.com` | Same Business Fee Audit offer (replaces `businessreviewohio.com`, removed by user) | Same firm, same gate as above | Canonicalized to `businessfeeaudit.com` rather than built as a duplicate site, per the no-duplicate-content rule below. Same entity/compensation gate; Netlify redirect intentionally not yet activated. |
| `greaterclevelandadvisors.com` | Not specified by user (replaces `statefinancialadvisor.com`, removed by user) | Same firm | **Assumed** general brand/SEO domain, routed to the primary site root (`/`) — this is an assumption, not a confirmed instruction. Flag if a dedicated landing page was intended instead. |

## Rules

- Campaign domains are used only when they increase message clarity, never
  to disguise ownership or impersonate an independent review/government/
  regulator entity.
- Each campaign domain includes clear firm identity and required
  disclosures on every page.
- Canonical tags are applied intentionally to avoid duplicate-content
  penalties between campaign domains and the primary site. Two domains
  pointing at the same offer (`businessfeeaudit.com` /
  `processingcostreview.com`) serve one canonical page, not two copies.
- Retired campaign domains get permanent (301) redirects, not silent
  deactivation.
- Maintain a domain registry (`DOMAIN-REGISTRY.md`) recording owner,
  purpose, renewal date, approval status, and destination for every domain.

## Routing Mechanism `[FACT TO VERIFY]`

All campaign domains are implemented as Host-based redirect/rewrite rules
in `netlify.toml` against the single primary Netlify site, rather than as
separate Netlify sites — this keeps one GitHub repository as the single
source of truth instead of fragmenting the codebase across seven
deployments. This assumes Netlify's redirect engine supports
domain-scoped `from`/`to` rules with `force = true` (proxy/rewrite,
domain stays visible in the address bar). **Verify this against current
Netlify documentation before relying on it** — if unsupported at the
needed scope, the fallback is a dedicated Netlify site (or domain alias)
per campaign domain, each pointed at a build of the same repository with
an environment variable selecting which route to serve at `/`.
