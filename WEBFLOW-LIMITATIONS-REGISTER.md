# Webflow Limitations & Workaround Register

Status: Draft. Populate/verify each row against current Webflow
documentation before relying on it — this register must be re-checked at
each Webflow platform update.

| Area | Known constraint (verify current) | Workaround selected | Verified date | Source |
|---|---|---|---|---|
| Native site search | Does not carry over to an externally hosted/rebuilt site | Static search index (Pagefind or Algolia) built into Next.js | [FACT TO VERIFY] | webflow.com/docs |
| Form processing | Webflow-native form backend does not apply to a site exported/rebuilt and hosted on Netlify | Next.js server route or Netlify Function with server-side validation, sanitization, rate limiting | [FACT TO VERIFY] | webflow.com/docs |
| CMS live publishing | Webflow CMS publishes without a compliance gate by default | Model A (version-controlled content) unless Model B controls are implemented; see `CONTENT-MODEL.md` | [FACT TO VERIFY] | webflow.com/docs |
| Interactions/animations | Webflow IX2 interactions do not export 1:1 to React | Rebuild as accessible React/CSS behavior; respect `prefers-reduced-motion` | [FACT TO VERIFY] | webflow.com/docs |
| DevLink component parity | Not all Webflow component types or CMS bindings may be supported | Confirm current supported component set before adopting; fall back to manual rebuild for unsupported components | [FACT TO VERIFY] | developers.webflow.com |
| Hosting | Webflow hosting is not used for production; Netlify is production | N/A — architectural decision, not a limitation | Confirmed | This document |
| Site creation | The connected Webflow account has zero sites. No `create_site` action exists in the available Data API tools, and a live verification query to Webflow AI failed (service error) | Requested the user create a blank site via the Webflow Dashboard UI (select workspace, start blank or from a starter template); Claude will discover it via `list_sites` afterward | 2026-08-06 (attempted, inconclusive) | data_sites_tool schema; ask_webflow_ai (failed) |

Every `[FACT TO VERIFY]` row must be resolved with a dated check against
current official Webflow documentation before the related feature is
built, per the Platform Verification Requirement.
