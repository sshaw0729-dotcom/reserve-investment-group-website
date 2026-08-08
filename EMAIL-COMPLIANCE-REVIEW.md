# Email-Channel Compliance Review

**Resolution, 2026-08-07:** the practice owner routed Section 5's exact
question to Edward Jones directly. Answer: no conditions attached — no
requirement to route, copy, or archive OBA-related email through an
Edward-Jones-supervised system. This project's separate mailbox/domain
architecture is confirmed acceptable. This was relayed verbally by the
practice owner, not reviewed by this project as a written document from
Edward Jones — worth keeping any future written confirmation on file if
Edward Jones provides one. `submit-lead.ts` and `send-nurture-email.ts`
are no longer blocked on this specific question — see
`MISSING-INFORMATION-REGISTER.md` #5a and #17a for what (if anything)
remains before deployment.

Status: Added 2026-08-07, resolving the open item flagged since
`EMAIL-NURTURE-SEQUENCES.md` Section 1 ("Compliance review of email as
a channel... confirm with compliance before enabling any automated
send"). **This document does not itself constitute compliance
approval.** Like every other compliance document in this project
(`PROJECT-BRIEF.md`: "Not a representation of FINRA or SEC compliance"),
it's a research-and-framework deliverable — it identifies the applicable
rules, states what's already confirmed, and lists exactly what still
needs a decision from Sharron's actual compliance authority before
`submit-lead.ts` and `send-nurture-email.ts` are deployed. I'm not a
FINRA principal, not Edward Jones's compliance department, and not
licensed to make this determination — nobody should treat this as
sign-off.

## 1. Why Email Is a Different Question From Web Copy

Everything already established for on-site copy (no superlatives, no
promised outcomes, qualified language) still applies to email content —
that part isn't new. What's different about email specifically is
**recordkeeping**: securities regulation generally requires that
business-related electronic communications be captured, preserved, and
retrievable for a defined period, in a way that a static web page
doesn't. That obligation exists independently of whether the content is
otherwise compliant.

## 2. The Regulatory Frameworks That Could Apply

Checked 2026-08-07 against current FINRA/SEC guidance. Two separate,
independent frameworks are potentially relevant, and which one(s)
actually apply depends on facts not yet confirmed (Section 3):

**If the relevant activity is supervised as Edward Jones broker-dealer
business** (SEA Rules 17a-3/17a-4, FINRA Rule 3110(b)(4), FINRA Rule
4511 — the "Books and Records Rules"): member firms must create and
preserve originals of all communications relating to their "business as
such" — FINRA uses a **content-based test**, meaning the medium doesn't
matter (email, text, chat all count) and using a channel outside the
firm's own systems does not exempt the communication if its content is
business-related. Baseline retention is at least 3 years in an easily
accessible, tamper-evident format (traditionally WORM; SEC's 2022
amendments, compliance date May 2023, added an audit-trail alternative
that permits reconstructing the original if altered). Source:
[FINRA Books and Records](https://www.finra.org/rules-guidance/key-topics/books-records),
[SEA Rule 17a-4 and Related Interpretations](https://www.finra.org/rules-guidance/guidance/interpretations-financial-operational-rules/sea-rule-17a-4-and-related-interpretations),
[LeGaye Law Firm summary of the 2022 amendments](https://www.legayelaw.com/implementation-deadline-for-amended-electronic-recordkeeping-rules-for-broker-dealers-nears/).

**If Reserve Investment Group's activity is conducted through a
Registered Investment Adviser** (a separate, still-open question — see
`MISSING-INFORMATION-REGISTER.md` #4): SEC Investment Advisers Act
**Rule 204-2** imposes its own, independent recordkeeping requirement on
RIA communications, with its own retention period and categories
(commonly cited as 5 years, first 2 in an easily accessible place — not
independently re-verified line-by-line here, since RIA status itself
isn't confirmed yet; revisit this rule specifically once #4 resolves).

**A specific, concrete risk worth naming directly, not softening:** the
same 2026 legal-industry guidance above lists, as an active supervisory
red flag broker-dealers are told to watch for, *"email chains that copy
unapproved representative email addresses [and] references in emails to
communications that occurred outside approved firm channels."* This
project's build — a completely separate Microsoft 365 tenant, a
non-Edward-Jones domain (`info@reserveinvestmentgroup.com`), built
specifically per Sharron's instruction to keep Reserve Investment Group
"completely separate" from Edward Jones in branding — is, by
construction, an outside-the-firm's-own-systems channel. That's exactly
the right outcome for the branding-separation goal, and may be entirely
fine for the OBA activity itself — but it's also exactly the pattern
that trips this specific supervisory flag if Edward Jones's OBA approval
expected business communications to run through firm-supervised
channels instead. Both things can be true — a genuinely separate business
and a communications channel that still needs to satisfy someone's
supervision — and only Edward Jones's compliance department knows which
applies here.

## 3. What's Confirmed vs. What's Genuinely Open

**Confirmed:** Sharron Shaw is affiliated with Edward Jones
(`MISSING-INFORMATION-REGISTER.md` #2). Edward Jones outside-business-
activity approval for Reserve Investment Group, Inc has been received
(#5, Resolved). The branding-separation instruction governing what the
*site* says (#2) is clear and already implemented throughout.

**Genuinely open, and not answerable from anything already in this
project:**

- **Does the OBA approval say anything about communications channels or
  recordkeeping?** Some OBA approvals are silent on this; many require
  all OBA-related correspondence to run through, or be copied/archived
  to, a firm-supervised system regardless of what domain it's sent from.
  This is the single most important open question and the one already
  flagged (unresolved) back when #5 was first recorded.
- **Is Reserve Investment Group's advisory activity conducted through an
  RIA** (#4)? If yes, Rule 204-2 applies independently of whatever the
  OBA approval says about Edward Jones's own BD recordkeeping.
- **Does Sharron's own compliance program (whichever entity is
  ultimately responsible for supervision) have retention/archiving
  requirements or an approved vendor** separate from anything above?

None of these can be resolved by researching regulations in the
abstract — they depend on the specific text of a specific approval
letter and specific firm relationships that only Sharron (and her
compliance contacts) have access to.

## 4. What's Already Technically in Place, Regardless of the Answer

Worth stating plainly, since it may partially satisfy whatever the
answer turns out to be, or may not — this is descriptive, not a claim of
compliance:

- `netlify/functions/lib/msgraph.ts` sets `saveToSentItems: true` on
  every send, so a copy of every nurture email lands in
  `ron.shaw@reserveinvestmentgroup.com`'s own Sent Items folder in
  Exchange — a real, retained copy, in a mailbox already subject to
  whatever retention policy that Microsoft 365 tenant has configured
  (not independently verified here — worth checking what that tenant's
  own mailbox retention policy actually is, separate from this
  document's scope).
- Every send is also logged as a folk CRM note
  (`netlify/functions/submit-lead.ts`, the scheduled task's Step 7) —
  recipient, sequence, day, and timestamp, though not the full message
  content. A parallel, if partial, audit trail.
- Neither of these was designed as a books-and-records solution — they
  exist for operational reasons (debugging, CRM history) — so don't
  assume they satisfy a specific retention rule's format/duration/
  accessibility requirements without someone who knows the actual rule
  confirming that.

## 5. What Needs to Happen Before Deployment

**Recommended next step — a specific question to route to whoever holds
compliance authority over this OBA** (Edward Jones's OBA/compliance
desk, or Sharron's own compliance counsel if the activity runs through
an independent RIA):

> "I'm sending marketing emails (educational checklists and short
> follow-up notes, no investment advice or performance claims) from
> info@reserveinvestmentgroup.com, a domain and mailbox entirely
> separate from Edward Jones systems, related to my approved outside
> business activity, Reserve Investment Group, Inc. Does my OBA approval
> — or your firm's supervisory procedures generally — require these
> communications to be routed through, copied to, or archived within an
> Edward-Jones-supervised system? Is a separate retention/archiving
> solution required, and if so, is there an approved vendor?"

Until that question has a real answer, `submit-lead.ts` and
`send-nurture-email.ts` should stay undeployed — consistent with every
other gate this project has held (GBP edits, domain cutover, the
Microsoft Graph sending mechanism itself) until the specific human
authority with the relevant knowledge signs off.

## 6. Not In Scope Here

This document covers recordkeeping/channel-approval only. It doesn't
re-litigate content compliance (already covered throughout this
project's other docs) or address SEC Marketing Rule 206(4)-1
considerations for the email content itself (covered in
`LOCAL-SEO-OPERATIONS.md` Section 3 for reviews specifically; the
nurture emails contain no testimonials or endorsements, so that rule's
core triggers don't appear to apply, but that's a separate check from
this one).
