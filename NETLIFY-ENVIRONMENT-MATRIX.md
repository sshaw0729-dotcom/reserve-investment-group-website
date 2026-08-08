# Netlify Environment Matrix

| Environment | Branch | Purpose | Indexable | Data destinations | PostHog project |
|---|---|---|---|---|---|
| Local | n/a | Developer machine | No (`noindex`) | Test/mock only | Development |
| Deploy Preview | any PR branch | Stakeholder/compliance review per PR | No (`noindex, nofollow`) | Test CRM, test email, test scheduling link | Development or dedicated preview project |
| Staging | `staging` | Full regression + compliance-approved preproduction review | No (`noindex, nofollow`, access-controlled) | Test destinations, watermarked records | Development/Staging |
| Production | `main` | Live public site | Yes, after launch approval | Approved CRM, approved notification system | Production |

Rules:
- Production secrets exist only in the Production environment-variable
  scope in Netlify; Preview/Staging use separate, clearly labeled test
  credentials.
- No environment other than Production may write into the live prospect/
  client workflow.
- Preview and Staging must display a nonproduction indicator in the UI
  (e.g., a persistent banner) until removed for launch.

**Added 2026-08-06 — `FOLK_API_KEY` (CRM = folk, resolved
`MISSING-INFORMATION-REGISTER.md` #17 for lead-magnet forms) and
`UNSUBSCRIBE_SECRET`.** Per the "no environment other than Production may
write into the live prospect/client workflow" rule above: `FOLK_API_KEY`
must be set **only** in the Production scope, pointing at the practice's
real folk workspace ("Reserve Investment Group, Inc."). Leave it unset in
Deploy Preview and Staging — `netlify/functions/lib/folk.ts` fails
gracefully (logs and continues) when the key is missing, so Preview/
Staging form submissions simply won't reach folk rather than writing test
data into the real CRM. `UNSUBSCRIBE_SECRET` should still be set in every
environment (any value, doesn't need to match Production) so the
unsubscribe-link flow doesn't 400 during Preview/Staging review.

**Verified live 2026-08-07, via the connected Netlify MCP integration
against the actual `businessaudittest` project:** `UNSUBSCRIBE_SECRET` was
confirmed missing and has now been set (Claude generated a random
64-character hex value and wrote it directly to Netlify — this is a
purely internal HMAC secret with no external account attached, so no
practice-owner-supplied value was needed). `FOLK_API_KEY` is still
**not set** — this one Claude cannot generate; it's a real credential
issued by folk to the practice's own workspace. Practice owner needs to
retrieve it from folk (Workspace Settings > API, or equivalent) and
provide it so it can be written into Netlify the same way.

**Added 2026-08-06 — `MS_GRAPH_TENANT_ID`, `MS_GRAPH_CLIENT_ID`,
`MS_GRAPH_CLIENT_SECRET`, `MS_GRAPH_SEND_AS_MAILBOX`,
`MS_GRAPH_FROM_ALIAS`, `INTERNAL_SEND_SECRET`** (`send-nurture-email.ts`,
`lib/msgraph.ts`) — same "Production only" rule as `FOLK_API_KEY`:
`MS_GRAPH_CLIENT_SECRET` in particular authorizes sending real email as
the firm's mailbox and must never be set in Preview/Staging or committed
anywhere. See `MISSING-INFORMATION-REGISTER.md` #17b for the tenant-admin
setup these depend on, which is outside what this repo or an AI agent can
configure.
