# GitHub Repository Governance

Status: Draft — requires repository-owner implementation. Claude cannot
change branch-protection rules; a human with admin access must configure
these settings in GitHub (Settings > Branches / Rulesets).

**Material finding, 2026-08-07 — this framework was not operative as of
earlier today, and is now partially operative.** Checked the live
Netlify project (`businessaudittest`, serving reserveinvestmentgroup.com)
directly: its most recent deploy (Aug 4) was via **Netlify Drop** (a
manual zip upload), not a git-connected deploy. That meant none of the
PR/branch-protection/required-status-check machinery below — including
`compliance-manifest-validation`, `secret-scan`, and every other gate in
this document — had run against what was live, because there was no
git-triggered pipeline wired up at all.

**Update, same day, later:** the practice owner connected Netlify's
GitHub App and authorized Claude to complete the "push to a new
repository" flow. A new **private** repository now exists —
`github.com/sshaw0729-dotcom/reserve-investment-group-website` — and the
Netlify project is now linked to it (production branch `main`), confirmed
live via the Netlify dashboard. This is real progress, but two things
still need attention before the framework below is actually enforced:
(1) the repository was created from whatever was live at the time (the
Aug 4 Netlify Drop upload) — it does **not** yet contain the newer code
built during this engagement (the folk CRM integration, the Microsoft
Graph email-sending functions, the unsubscribe endpoint) — that still
needs to be pushed in as a separate step; (2) Netlify's build settings for
this project show Build command, Publish directory, and Runtime all as
"Not set" — until those are configured (or a `netlify.toml` committed to
the repo defines them), a git push may not produce a working deploy.
Branch protection, required reviewers, and required status checks
(the rest of this document) still need to be configured in GitHub's own
Settings > Branches UI — none of that exists yet just because a repo now
exists. See "Deployment Authority" below for how this interacts with the
merge-rights question.

## Branch Model

| Branch | Purpose |
|---|---|
| `main` | Production-ready code only |
| `staging` | Approved preproduction integration |
| `develop` | Optional development integration |
| `feature/*` | Technical features |
| `content/*` | Copy and SEO changes |
| `design/*` | Visual-system changes |
| `analytics/*` | Tracking changes |
| `compliance/*` | Disclosure/compliance-driven revisions |
| `experiment/*` | Approved experiments |
| `hotfix/*` | Urgent production corrections |

## `main` Branch Protection (target configuration)

- Require a pull request before merging.
- Require at least 1 human technical approval.
- Require a second human approval (compliance/legal/privacy) for any PR
  touching `/content/**`, `/disclosures/**`, `/public/legal/**`, or
  `/analytics/**`.
- Require Code Owner approval for protected paths (see `CODEOWNERS`).
- Require all review conversations resolved before merge.
- Dismiss stale approvals when new commits are pushed.
- Require branches to be up to date before merging.
- Require all listed status checks to pass (see below).
- Block direct pushes, force pushes, and branch deletion.
- Restrict who can merge to designated human maintainers by default. See
  "Deployment Authority" below for the one narrow exception the practice
  owner has authorized.
- Apply protections to administrators where org policy permits.
- Require signed commits and linear history where practical.

For high-risk regulated changes, require **two** human approvals: one
technical/marketing, one compliance/legal/privacy/infosec as applicable.

## Required Status Checks

- `build`
- `typecheck`
- `lint`
- `unit-tests`
- `integration-tests`
- `link-check`
- `accessibility-scan`
- `seo-validation`
- `structured-data-validation`
- `secret-scan`
- `dependency-vulnerability-scan`
- `netlify-deploy-preview`
- `analytics-schema-validation`
- `draft-annotation-leak-check`
- `compliance-manifest-validation`

See `.github/workflows/quality-gates.yml` for the CI skeleton implementing
the automatable subset of these checks.

## Repository Access

- Claude Code operates through a scoped bot/service account with write
  access to non-protected branches and pull-request creation rights only —
  never admin, never owner.
- No AI identity (Cowork or Claude Code) may be the sole required reviewer.

## Deployment Authority

Updated 2026-08-07 per explicit practice-owner instruction ("change
governance so that you have authority to merge to production with my
approval"). This replaces the blanket "Claude Code is never a
merge-eligible identity" rule with a narrower, conditional one:

- **Cowork/Claude may execute a production deploy (merge and/or publish
  to Netlify) only when the practice owner has given clear, specific,
  unambiguous approval for that exact deploy** — a message that names
  the action ("deploy this," "publish to production," "push this live"),
  not a general affirmative that happens to arrive near a deploy-related
  conversation. General approvals of content, compliance sign-offs, or
  words like "go," "yes," "greenlight," or "execute" used for a different
  purpose earlier in a conversation do **not** carry over to authorize a
  deploy — each one needs its own, since this session alone has already
  had a few moments where a short reply's meaning needed a follow-up
  question to pin down, and a deploy is exactly the wrong place for that
  ambiguity to matter.
- This authorization applies **per deploy**, not as a standing rule that
  activates once and persists — consistent with how every other
  high-stakes live action in this project (GBP edits, DNS/domain
  cutover, the Microsoft Graph sending mechanism) has been handled:
  built freely, executed only on explicit, specific confirmation.
- All existing quality gates (compliance-manifest-validation,
  secret-scan, etc.) still apply in spirit even though — per the finding
  above — they aren't currently wired into an actual CI pipeline for
  this project. Until they are, "clear approval" should be understood to
  include the practice owner (or Claude, before asking for that
  approval) having actually checked the content/compliance status of
  what's being deployed, not just trusting that no gate would have
  caught a problem.
- **Technical reality, separate from the policy above:** as of
  2026-08-07, Claude has no actual write access to any GitHub repository
  for this project (none is connected to this session) and no live
  Netlify deploy credential — production deploys currently happen by
  Claude building a zip and the practice owner (or "RIG Team," the
  Netlify project's current owner) dragging it onto Netlify Drop
  manually. This governance change permits Claude to deploy directly
  once approved; it doesn't yet grant the technical means to do so.
  Real, scoped, revocable deploy capability would require connecting a
  Netlify integration (a connector card for this was surfaced to the
  practice owner 2026-08-07) — until that's connected, "Claude deploys"
  in practice still means "Claude tells the practice owner exactly what
  to upload and where."
