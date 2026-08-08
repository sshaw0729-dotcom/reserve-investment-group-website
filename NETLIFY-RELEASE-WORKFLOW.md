# Netlify Release Workflow

## Deploy Preview (every pull request)
Used for marketing, compliance, legal, privacy, infosec, accessibility,
mobile QA, desktop QA, analytics validation, form validation, metadata
review, and disclosure review. Restrict public access where the preview
contains unreleased campaigns, unapproved claims, or confidential
information. Never seed a preview with real client data.

## Staging
Persistent deployment from `staging`. Used for full regression testing,
compliance-approved preproduction review, integration testing, consent
testing, form testing, redirect testing, and release-candidate approval.
Blocked from search indexing, access-controlled, uses separate credentials.

## Production
Deployment to `main` may occur only when all of the following are true:

1. Pull request approved per `GITHUB-GOVERNANCE.md`.
2. Compliance approval recorded (reference number in the PR and content
   manifest).
3. All required status checks pass.
4. Release manifest complete (`RELEASE-MANIFEST-TEMPLATE.md`).
5. Release candidate tested on staging.
6. Production secrets available only through Netlify's scoped
   environment-variable storage — never in the repository.
7. Rollback plan confirmed.
8. A human with deployment authority merges/approves the release. Claude
   does not perform this step.

## Netlify Configuration Targets

- Production branch: `main`.
- Branch deploys restricted to explicitly approved branches
  (`staging`, active `feature/*`/`content/*` under review).
- Deploy Previews enabled for all pull requests.
- Environment variables scoped per context (Production / Deploy Preview /
  Branch deploy) — never a single shared secret across contexts.
- Deploy notifications and failed-build alerts routed to the engineering
  owner.
- Form/function error alerts enabled.
- No manual drag-and-drop production deploys except under a documented,
  logged emergency procedure with post-hoc review.
