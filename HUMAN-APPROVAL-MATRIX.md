# Human Approval Matrix

| Decision area | Required human approver | Notes |
|---|---|---|
| Outside business activity notice/approval (Edward Jones) | Edward Jones compliance / practice owner's BD compliance contact | **Resolved 2026-08-06** — practice owner confirmed approval has been received. See `MISSING-INFORMATION-REGISTER.md` #5. Any written conditions from that approval should be reflected in disclosure copy once available |
| Content and branding | Practice owner or authorized marketing reviewer | [ENTITY DISCLOSURE REQUIRED] pending firm confirmation |
| FINRA / broker-dealer communications | Designated broker-dealer principal or compliance reviewer | Required for any page referencing brokerage services |
| Investment-adviser marketing | Authorized RIA compliance reviewer | Required for any advisory-services page |
| Privacy and tracking (PostHog config, consent model, session recording) | Privacy/legal or designated data-governance reviewer | Session recording blocked until this approval is on file |
| Security and integrations | Information-security or authorized technical reviewer | Applies to forms, functions, third-party scripts |
| Production release (merge to `main` / production deploy) | Authorized repository or deployment owner | **Updated 2026-08-07:** practice owner may still approve and delegate execution to Claude, per explicit instruction — see `GITHUB-GOVERNANCE.md` "Deployment Authority." Approval must be specific to that deploy, not a general/earlier "yes." Approver is unchanged (still the practice owner); only who executes may now be Claude |

Claude (Cowork or Code) organizes, drafts, and tracks these approvals. It
does not substitute for any of them, and no page enters production without
every applicable row above being satisfied and recorded in the content
manifest.

## Approval Record — 2026-08-06

Sharron Shaw (practice owner) approved the currently-drafted placeholder
copy across all pages listed in `CONTENT-MANIFEST.csv` as of this date,
per instruction in the Cowork chat session. This satisfies the "Content
and branding" approval row above.

This record does **not** independently satisfy the "FINRA / broker-dealer
communications" or "Investment-adviser marketing" rows — those require a
designated broker-dealer principal or authorized RIA compliance reviewer
specifically, which has not yet been named (see
`MISSING-INFORMATION-REGISTER.md` #7 and #11). If Sharron Shaw holds one
of those roles, note that here explicitly so the record is accurate.

Separately: approving the *drafted copy* is not the same as the copy
being *complete*. Every disclosure-bearing page still contains bracketed
placeholders (`[APPROVED BROKER-DEALER DISCLOSURE]`, `[FORM CRS LINK
REQUIRED]`, etc.) because the underlying regulatory facts have not been
supplied. Approval of draft language does not resolve that — the
placeholders still need real values before any page is genuinely
launch-ready. Per operating rule #1 (`PROJECT-BRIEF.md` / master
instructions), no page on this site is described as FINRA- or
SEC-compliant; it is drafted with compliance considerations and approved
by firm personnel as noted above.

## Designation Approval — 2026-08-06

Sharron Shaw approved the use of "Financial Advisors" in the title/H1 of
`/manufacturing-business-advisors/` (COMBO-006), resolving the
`[DESIGNATION APPROVAL REQUIRED]` flag raised in
`MARKETING-ECOSYSTEM-BRIEF.md` Section 2. This is a title-usage approval
only — it does not extend to other prohibited titles (Fiduciary,
Independent, Fee-only, Wealth Manager, Financial Planner, Tax Strategist,
Estate Planner, Retirement Specialist) or to designation names, which
each require their own separate confirmation per person/entity.

## Standing Draft-Copy Approval — clarified 2026-08-06

The Approval Record above (2026-08-06) approved "the currently-drafted
placeholder copy across all pages listed in `CONTENT-MANIFEST.csv` as of
this date." Sharron Shaw separately confirmed, in the same chat session,
that she should be treated as the approver for this engagement's content
decisions ("Treat me as the approver"). Read together, these establish a
standing authorization: draft-stage placeholder copy added to
`CONTENT-MANIFEST.csv` throughout this engagement — including pages
built after the original approval record (e.g., the 5 Wave 2 location
pages, the 12 Insights content-cluster pages) — carries the same
"Compliance approved (copy as drafted...)" status as the original batch,
without requiring a re-approval entry for every individual page.

This standing authorization does **not** expand in scope beyond what the
original record already covers: it is draft-copy/tone approval only. It
does not satisfy the "FINRA / broker-dealer communications" or
"Investment-adviser marketing" rows in the table above, does not resolve
any bracketed placeholder requiring a real firm fact, and does not
extend to any title, designation, or claim not already addressed by an
explicit approval record (see Designation Approval above for how a
narrower, named approval is recorded when one is needed).
