# Netlify Rollback Procedure

## Per-Release Record (complete for every production deploy)

1. Production deployment ID.
2. Deployed commit SHA.
3. Smoke test result.
4. Form verification (test submission through to non-PII event only).
5. Disclosure verification (correct entity names, correct required text).
6. PostHog event verification (events fire once, no PII, correct project).
7. Canonical URL verification.
8. Redirect verification.
9. Mobile rendering verification.
10. Desktop rendering verification.
11. Security header verification.
12. Archived release manifest location.

## If a Critical Defect Is Found

1. Stop related ad/campaign spend if applicable.
2. Roll back to the most recent approved Netlify deployment (atomic
   rollback via Netlify's deploy history — no rebuild required).
3. Record the incident in `INCIDENT-ROLLBACK.md` with timestamp, defect
   description, and detection source.
4. Preserve the defective deployment (do not delete) for root-cause
   analysis.
5. Fix on a new branch, repeat the full approval and status-check process.
6. Do not re-deploy the same commit without a new PR and new approvals.
