# Compliance Publication Workflow

## Status Progression (required for every public asset)

1. Draft
2. Internal marketing review
3. Fact verification
4. Compliance submission
5. Compliance revisions required (loop back to 2–4 as needed)
6. Compliance approved
7. Technical QA
8. Production approved
9. Published
10. Archived or superseded

## Enforcement

- Status is tracked per-asset in `CONTENT-MANIFEST.csv` and in the
  content file's frontmatter (see `CONTENT-MODEL.md`).
- A GitHub Actions check (`compliance-manifest-validation`) fails the
  build if a page under `content/**` targeted at `main` does not have a
  matching `Production approved` row in `CONTENT-MANIFEST.csv`.
- Branch protection additionally requires a named compliance approval for
  any PR touching `content/**`, `public/legal/**`, or `disclosures/**`
  (see `GITHUB-GOVERNANCE.md`).
- No page enters the production branch unless status is "Production
  approved."

## Review Package

Every submission to compliance uses `COMPLIANCE-PACKAGE-TEMPLATE.md`,
duplicated per asset ID.
