# Content Model

## Default: Model A — Version-Controlled Content

Production content lives in `content/**` as MDX/JSON/typed TS objects,
committed to Git, reviewed via pull request, and gated by the compliance
status field in the content manifest. This is the default and current
model for this project.

Each content file's frontmatter includes: `assetId`, `status` (Draft →
Internal Review → Fact Verification → Compliance Submission → Compliance
Revisions Required → Compliance Approved → Technical QA → Production
Approved → Published → Archived), `complianceApprovalRef`, `reviewDate`,
`disclosures[]`.

## Optional: Model B — Controlled Webflow CMS Synchronization

Not adopted by default. May be proposed later only if all of the following
are implemented and approved:

- Draft content cannot appear in production.
- Only explicitly approved records sync.
- Sync creates a Git change or an immutable approval record.
- Sync failures are logged.
- Published content is archived.
- Every change is attributable to a user.
- Rollback is available.
- Disclosures are versioned with the content.
- Production synchronization requires approval.
- Compliance status is stored with each regulated content item.

If these controls cannot be enforced in the current Webflow plan/API,
Webflow CMS is not connected to production, per the operating model.

## Rule

Regardless of model, no content reaches `main` without passing through
`status: Production Approved` in its frontmatter and the corresponding row
in `CONTENT-MANIFEST.csv`.
