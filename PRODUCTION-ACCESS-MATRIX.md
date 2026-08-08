# Production Access Matrix

| System | Claude access level | Human-only actions |
|---|---|---|
| GitHub org/repo | Scoped bot account: create branches, open PRs. No admin, no owner, not merge-eligible on `main` | Merge to `main`, change branch protection, manage org members |
| Netlify | Scoped deploy-preview/CI access only, no production owner role | Production deploy authorization, DNS/domain changes, env var management for Production context |
| DNS registrar | No access | All changes |
| Webflow | Editor/designer access to design workspace only, no workspace-owner role | Publish Webflow site, manage workspace billing/members |
| PostHog | Scoped project access for schema/config PRs only, no org-owner role | Activate session recording, activate experiments, manage org billing/members |
| CRM | No access unless a scoped, logged, least-privilege integration is explicitly approved | All administration |
| Email system | No access | All administration |
| Password manager | No access | All administration |
| Financial/production systems | No access | All administration |

## Rules

- Least privilege for every service-account/automation credential; scope to
  the minimum required action.
- Preview credentials are separate from production credentials, always.
- Secrets live only in approved secret-management systems (Netlify env
  vars, GitHub Actions secrets) — never in the repository, never in
  frontend/browser-exposed code.
- Rotate per policy, log usage, and restrict use to approved branches.
- Revoke any credential no longer needed.
- Production deployment requires an affirmative human action or a
  human-approved merge to `main`. Claude prepares releases; it does not
  authorize them.
