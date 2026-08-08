# Domain Registry

Status: Updated 2026-08-06 — user removed `statefinancialadvisor.com` and
`businessreviewohio.com`; added `processingcostreview.com` and
`greaterclevelandadvisors.com`.

| Domain | Owner | Purpose | Renewal date | Approval status | Destination |
|---|---|---|---|---|---|
| reserveinvestmentgroup.com | Sharron Shaw / Reserve Investment Group, Inc | Primary brand site | [FACT TO VERIFY] | Confirmed by user 2026-08-06 | Netlify production site (primary) |
| retirementplanningcleveland.com | Sharron Shaw / Reserve Investment Group, Inc | Retirement Planning × Cleveland campaign landing page | [FACT TO VERIFY] | Confirmed by user 2026-08-06 | Netlify, routed to `/retirement-planning-cleveland/` |
| wealthmanagementcleveland.com | Sharron Shaw / Reserve Investment Group, Inc | Wealth Management × Cleveland campaign landing page | [FACT TO VERIFY] | Confirmed by user 2026-08-06 | Netlify, routed to `/wealth-management-cleveland/` |
| manufaturingbusinessadvisors.com | Sharron Shaw / Reserve Investment Group, Inc | Manufacturing-industry business advisory landing page | [FACT TO VERIFY] | Confirmed by user 2026-08-06 | Netlify, routed to `/manufacturing-business-advisors/` |
| physicianfinancialplans.com | Sharron Shaw / Reserve Investment Group, Inc | Alias for Physicians × Cleveland combined page | [FACT TO VERIFY] | Confirmed by user 2026-08-06 | Netlify, routed to `/greater-cleveland/financial-planning-for-physicians/` (canonical) |
| businessfeeaudit.com | Sharron Shaw / Reserve Investment Group, Inc | Business Fee Audit offer (credit-card processing fee review) | [FACT TO VERIFY] | Confirmed by user 2026-08-06; **content gated** on entity/compensation disclosure (Missing Info #23) | Netlify, routed to `/business-fee-audit/` — **redirect not yet activated in netlify.toml**, pending the gate |
| processingcostreview.com | Sharron Shaw / Reserve Investment Group, Inc | Same Business Fee Audit offer, alternate domain (replaces businessreviewohio.com) | [FACT TO VERIFY] | Added by user 2026-08-06; same entity/compensation gate as businessfeeaudit.com applies | Netlify, routed to `/business-fee-audit/` (same target as businessfeeaudit.com) — **redirect not yet activated**, pending the gate |
| greaterclevelandadvisors.com | Sharron Shaw / Reserve Investment Group, Inc | Not specified by user — **assumed** general brand/SEO domain redirecting to the primary site root, consistent with the "General Ohio-wide SEO/brand domain" option discussed for the domain it replaces. Confirm or redirect elsewhere if a dedicated landing page is intended instead. | [FACT TO VERIFY] | Added by user 2026-08-06 | Netlify, routed to `/` (primary site) — assumption, not yet confirmed |

Note: `manufaturingbusinessadvisors.com` is recorded with the exact
spelling the user provided. If this is a typo for
"manufacturingbusinessadvisors.com," flag it before DNS configuration —
domain names are literal and a misspelled registration won't match a
correctly-spelled one.

Removed 2026-08-06 at user's request: `statefinancialadvisor.com`
(naming-risk concern, held then dropped) and `businessreviewohio.com`
(replaced by `processingcostreview.com` for the same offer).
