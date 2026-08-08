# Email Nurture Sequences

Status: Added 2026-08-06, `MARKETING-ECOSYSTEM-BRIEF.md` Section 6. This
is a copy + strategy document, not a code deliverable — no ESP (email
service provider) is connected in this project, so nothing here sends
automatically yet. Copy is written in portable Markdown, not tied to any
specific platform's template syntax, so it can be pasted into whichever
ESP is eventually chosen.

## 1. What This Depends On (Still Open)

Before any of this can actually send, the following need to be resolved
— none of them are things this document or the codebase can answer:

- **ESP selection** (`MISSING-INFORMATION-REGISTER.md` #17, CRM
  destination — closely related). Common choices for a firm this size:
  a dedicated ESP with light CRM features (e.g., ActiveCampaign,
  Mailchimp) or a full CRM with email capability. Whichever is chosen
  needs to support timed/triggered sequences and unsubscribe management
  natively — don't build this on a platform that can't do both.
- **Trigger wiring.** The lead-magnet download pages
  (`MARKETING-ECOSYSTEM-BRIEF.md` Section 5) currently post to a Netlify
  Function (`/.netlify/functions/submit-lead`) with a `formId` matching
  the magnet slug (e.g., `retirement-readiness-checklist`). Once an ESP
  is chosen, that function needs to forward submissions to it (or to the
  CRM, which forwards to the ESP) with the `formId` intact, so the
  correct sequence triggers.
- **Compliance review of email as a channel — researched 2026-08-07,
  still requires a human answer.** Everything already established for
  web copy (no superlatives, no promised outcomes, no performance
  figures) applies here too — but email as a business communication
  channel carries its own recordkeeping requirements (FINRA Rule 4511 /
  SEA Rule 17a-4, and SEC Rule 204-2 if Reserve Investment Group's
  activity runs through an RIA). Full research and the specific open
  question: `EMAIL-COMPLIANCE-REVIEW.md`. The short version: the
  applicable rules are identified, but whether the Edward Jones OBA
  approval requires this project's deliberately separate email channel
  (`info@reserveinvestmentgroup.com`, its own tenant, per the
  branding-separation instruction) to instead run through or archive to
  an Edward-Jones-supervised system is a question only Edward Jones's
  compliance desk can answer — not something research resolves.
  [ENTITY DISCLOSURE REQUIRED — confirm with compliance before enabling
  any automated send; this remains the deployment gate.]
- **CAN-SPAM basics**, unrelated to securities regulation but legally
  required regardless: every email needs a physical mailing address, a
  working unsubscribe mechanism, an accurate "From" name, and a subject
  line that isn't deceptive. The templates below leave placeholders for
  the footer; the address is now confirmed (1414 S. Green Rd., Suite
  105, South Euclid, OH 44121) and can be used once the ESP is set up.
- **Sender identity confirmed 2026-08-06, updated same day**:
  `info@reserveinvestmentgroup.com` is the address to use as the
  CAN-SPAM "From" address once an ESP is connected — the user's alias,
  replacing an earlier personal-mailbox address used in a first draft.
  A role-based alias sidesteps the earlier open question about which
  named individual's mailbox to use, so this item is resolved. The
  `{{sender_name}}` merge tag in the sign-offs below is left as a
  placeholder — a role alias implies a signature name still needs to be
  chosen separately (e.g., the firm name, or a named advisor), which
  hasn't been specified.
- **Sending mechanism — connector status corrected 2026-08-06.** Earlier
  the same day, the Microsoft 365/Exchange connector checked as not
  connected in this environment, with a toolset that appeared to lack
  send capability. Re-checked later in the same session: the connector
  is now connected (signed in as `ron.shaw@reserveinvestmentgroup.com`,
  President), and its toolset does include `outlook_send_mail` and
  `outlook_create_draft` — so the earlier "no send capability" finding
  was wrong; retracted. User confirmed `info@reserveinvestmentgroup.com`
  is an alias on this same mailbox, not a separate shared mailbox — so
  no additional Send-As permission should be needed to send from that
  address; still worth one manual test send to confirm before relying on
  it. What's still unresolved: whether one-off `outlook_send_mail` calls
  are the right mechanism at all for a timed/triggered 4-email sequence
  — that still points toward Power Automate on top of Exchange, or a
  dedicated ESP, same as the ESP-selection bullet above. Manually
  triggering 12 emails
  per lead isn't a substitute for sequence automation.

## 2. Architecture

One sequence per lead magnet, triggered by that magnet's download event
— not one generic sequence for everyone. This keeps content relevant to
why someone actually signed up, consistent with `SEO-STRATEGY.md` and
`PROJECT-BRIEF.md`'s general preference for specific, relevant content
over generic mass messaging.

| Sequence | Triggered by | Persona |
|---|---|---|
| A — Retirement Readiness | `retirement-readiness-checklist` download | Pre-Retirees, Retirees |
| B — Business-Owner Planning | `business-owner-planning-checklist` download | Business Owners, Manufacturing Leaders |
| C — Equity Compensation | `equity-compensation-checklist` download | Corporate Executives |

Each sequence: 4 emails over ~2 weeks (Day 0, Day 3, Day 7, Day 14).
Every email links to the relevant Insights cluster article (Section 3)
and ends with one of the two approved CTAs already in use across the
site ("Schedule an introductory conversation" / "Request a complimentary
financial review") — never urgency or scarcity language, per
`PROJECT-BRIEF.md`.

## 3. Sequence A — Retirement Readiness

### A1 — Day 0 (immediate, on download)

**Subject:** Your Retirement Readiness Checklist

Hi {{first_name}},

Thanks for downloading the Retirement Readiness Checklist — you should
already have it, but here's the link again in case: [Retirement
Readiness Checklist](/resources/retirement-readiness-checklist.pdf).

One item people often skip on a first pass: the section on how required
minimum distributions may affect your tax picture. It's easy to focus
on saving enough and put off thinking about how you'll actually draw it
down — but the sequencing of withdrawals can matter as much as the
saving itself.

Over the next couple of weeks I'll send a few short notes on some of the
other items from the checklist. No obligation to do anything with
them — just information you can use however's helpful.

{{sender_name}}
Reserve Investment Group, Inc
1414 S. Green Rd., Suite 105, South Euclid, OH 44121

[Unsubscribe from these emails]({{unsubscribe_url}})

### A2 — Day 3

**Subject:** When to claim Social Security (it's not just about the math)

Hi {{first_name}},

Following up on the checklist — one of the more common questions is
when to claim Social Security. There's a mathematical answer (claiming
later generally means a larger monthly benefit), but the right timing
for any individual usually depends on more than the math: health,
other income sources, and whether a spouse's benefit is also part of
the picture.

I wrote a longer piece on this if you want to go deeper: [Social
Security Claiming Considerations](/insights/social-security-claiming-considerations/).

Reply if any of this raises a question for you — happy to point you in
the right direction either way.

{{sender_name}}
Reserve Investment Group, Inc
1414 S. Green Rd., Suite 105, South Euclid, OH 44121

[Unsubscribe from these emails]({{unsubscribe_url}})

### A3 — Day 7

**Subject:** The order your investments get drawn down in

Hi {{first_name}},

Here's one that's easy to overlook: the *order* in which retirement
income is drawn from different accounts can matter, especially if
withdrawals happen to start during a market downturn. This is sometimes
called sequence-of-returns risk — and while there's no way to eliminate
it entirely, understanding it is a useful first step.

More on that here: [Sequence of Returns Risk in
Retirement](/insights/sequence-of-returns-risk-in-retirement/).

{{sender_name}}
Reserve Investment Group, Inc
1414 S. Green Rd., Suite 105, South Euclid, OH 44121

[Unsubscribe from these emails]({{unsubscribe_url}})

### A4 — Day 14

**Subject:** No pressure — just an open door

Hi {{first_name}},

Last note in this short series. If working through the checklist raised
more questions than it answered, that's normal — retirement income
planning usually involves coordinating several moving pieces at once.

If it would help to talk it through, [schedule an introductory
conversation](/schedule/). No cost, no obligation — just a conversation
about where things stand for you.

Either way, thanks for reading, and best of luck putting the checklist
to use.

{{sender_name}}
Reserve Investment Group, Inc
1414 S. Green Rd., Suite 105, South Euclid, OH 44121

[Unsubscribe from these emails]({{unsubscribe_url}})

---

## 4. Sequence B — Business-Owner Planning

### B1 — Day 0 (immediate, on download)

**Subject:** Your Business-Owner Planning Checklist

Hi {{first_name}},

Thanks for downloading the Business-Owner Planning Checklist — here's
the link again: [Business-Owner Planning
Checklist](/resources/business-owner-planning-checklist.pdf).

A theme that comes up a lot with business owners: for many, the
business itself is the single largest asset on their personal balance
sheet — which means business decisions and personal financial planning
are more connected than they might first appear, even when they're
tracked completely separately.

I'll send a few more notes over the next couple of weeks touching on
other parts of the checklist.

{{sender_name}}
Reserve Investment Group, Inc
1414 S. Green Rd., Suite 105, South Euclid, OH 44121

[Unsubscribe from these emails]({{unsubscribe_url}})

### B2 — Day 3

**Subject:** Retirement plans aren't one-size-fits-all

Hi {{first_name}},

One checklist item worth a second look: retirement plan design for you
and your employees. SEP IRAs, SIMPLE IRAs, and 401(k) variations each
have different contribution limits and administrative requirements —
and the right fit often depends on your business's size, cash flow, and
whether you want to prioritize your own contributions or broader
employee participation.

More detail here: [Retirement Plan Design for Business
Owners](/insights/retirement-plan-design-for-business-owners/).

{{sender_name}}
Reserve Investment Group, Inc
1414 S. Green Rd., Suite 105, South Euclid, OH 44121

[Unsubscribe from these emails]({{unsubscribe_url}})

### B3 — Day 7

**Subject:** Family transition or outside sale — different paths, different prep

Hi {{first_name}},

Succession doesn't have to be imminent to be worth thinking about early.
Whether a future transition looks like passing the business to family or
selling to an outside buyer changes a lot about how to prepare — timeline,
valuation approach, and what "ready" even looks like.

A comparison of the two paths: [Family Transition vs. Third-Party Sale:
Comparing Paths](/insights/family-transition-vs-third-party-sale-comparing-paths/).

{{sender_name}}
Reserve Investment Group, Inc
1414 S. Green Rd., Suite 105, South Euclid, OH 44121

[Unsubscribe from these emails]({{unsubscribe_url}})

### B4 — Day 14

**Subject:** No pressure — just an open door

Hi {{first_name}},

Last note in this series. If the checklist surfaced a few things worth
a closer look — plan design, succession, or how the business fits into
your personal financial picture — a conversation might help sort out
where to start.

[Request a complimentary financial review](/business-owner-financial-review/)
any time — no cost, no obligation.

Thanks for reading.

{{sender_name}}
Reserve Investment Group, Inc
1414 S. Green Rd., Suite 105, South Euclid, OH 44121

[Unsubscribe from these emails]({{unsubscribe_url}})

---

## 5. Sequence C — Equity Compensation for Executives

### C1 — Day 0 (immediate, on download)

**Subject:** Your Equity Compensation Checklist

Hi {{first_name}},

Thanks for downloading the Equity Compensation Checklist for
Executives — here's the link again: [Equity Compensation
Checklist](/resources/equity-compensation-checklist.pdf).

A common starting point: knowing the vesting schedule and tax treatment
for *each* type of equity you hold. RSUs, ISOs, and NSOs aren't taxed
the same way, and it's easy to lose track once you're a few years into
holding a mix of them.

More notes coming over the next couple of weeks.

{{sender_name}}
Reserve Investment Group, Inc
1414 S. Green Rd., Suite 105, South Euclid, OH 44121

[Unsubscribe from these emails]({{unsubscribe_url}})

### C2 — Day 3

**Subject:** RSUs vs. options — the difference that actually matters

Hi {{first_name}},

RSUs generally have value regardless of where the stock price moves;
options only have value above the strike price. That distinction alone
changes how each should factor into planning — including when it might
make sense to hold versus sell, and how each is taxed at vesting or
exercise.

Full comparison here: [RSUs vs. Stock Options: Key
Differences](/insights/rsus-vs-stock-options-key-differences/).

{{sender_name}}
Reserve Investment Group, Inc
1414 S. Green Rd., Suite 105, South Euclid, OH 44121

[Unsubscribe from these emails]({{unsubscribe_url}})

### C3 — Day 7

**Subject:** How much of your net worth is tied to one company?

Hi {{first_name}},

If your salary, bonus, and equity compensation all come from the same
employer, that's a different kind of exposure than a diversified
portfolio carries — your income and your investments can move together
in a downturn. Worth periodically checking what percentage of your net
worth is concentrated in company stock.

More on approaches to managing that: [Managing Concentration Risk in
Company Stock](/insights/managing-concentration-risk-in-company-stock/).

{{sender_name}}
Reserve Investment Group, Inc
1414 S. Green Rd., Suite 105, South Euclid, OH 44121

[Unsubscribe from these emails]({{unsubscribe_url}})

### C4 — Day 14

**Subject:** No pressure — just an open door

Hi {{first_name}},

Last note in this series. Equity compensation decisions — when to
exercise, how to diversify, how to time deferred compensation — usually
work best considered alongside the rest of your financial picture, not
in isolation.

If that would be useful to talk through, [schedule an introductory
conversation](/schedule/). No cost, no obligation.

Thanks for reading.

{{sender_name}}
Reserve Investment Group, Inc
1414 S. Green Rd., Suite 105, South Euclid, OH 44121

[Unsubscribe from these emails]({{unsubscribe_url}})

---

## 6. Compliance Notes (Apply to All 12 Emails Above)

- No email above states or implies a guaranteed outcome, promised
  return, tax savings figure, or performance claim.
- No urgency or scarcity language ("act now," "limited time") anywhere
  in any subject line or body copy, per `PROJECT-BRIEF.md`.
- Every email ends with either an approved CTA linking to `/schedule/`
  or `/business-owner-financial-review/` — never a bare "buy now" or
  "sign up" pattern.
- `{{first_name}}` is a merge-tag placeholder filled in by whatever sends
  the email (currently: the scheduled task described in Section 8).
  `{{sender_name}}` is intentionally still unresolved — see Section 1;
  `info@reserveinvestmentgroup.com` is a role alias, and a role alias
  doesn't itself supply a signature name.
- **Physical address and unsubscribe link added 2026-08-06** — every one
  of the 12 emails above now ends with the confirmed office address and
  an `{{unsubscribe_url}}` merge tag, resolving the earlier open CAN-SPAM
  gap. `{{unsubscribe_url}}` is generated per recipient by whatever sends
  the email (Section 8) using the same HMAC scheme as
  `netlify/functions/unsubscribe.ts` — never a static link, since it has
  to identify who's unsubscribing.
- This content still carries the same `[COMPLIANCE REVIEW REQUIRED]`
  sign-off as everything else on this site, and — separately — the
  email-as-channel retention/compliance review flagged in Section 1
  remains open. Building the trigger/send mechanism (Section 8) doesn't
  itself satisfy either of those; both are still required before this
  goes out to a real recipient.

## 7. Section 7 (Google Ads Architecture) and Section 8 (below) delivered

Google Ads architecture is `GOOGLE-ADS-ARCHITECTURE.md`, delivered
2026-08-06 — see `MARKETING-ECOSYSTEM-BRIEF.md` Section 12 for the
write-up. (This file wasn't updated with that cross-reference until this
same-day pass; noting it here since this section previously, incorrectly,
still listed Google Ads as not-yet-started.)

## 8. Trigger/Send Mechanism — Built 2026-08-06

Resolves the "how do these 12 emails actually get triggered and sent"
question left open in Section 1, per the user's direction to build it on
the tools already connected in this workspace (folk CRM + the Microsoft
365/Exchange connector) rather than wait on a dedicated ESP decision.

**Enrollment (live in code, not yet deployed):**
`netlify/functions/submit-lead.ts` now forwards lead-magnet-form
submissions (the three `/resources/{slug}/` pages) into the practice's
real folk workspace ("Reserve Investment Group, Inc.") — into the
existing **Website Leads** group, not a new parallel one, so this plugs
into the CRM Sharron already uses rather than creating a shadow system.
On a qualifying submission it sets `Lead Source`, `Offer Interest`, and
`Landing Page Viewed` on that group's existing custom fields, sets
`Funnel Stage` to `Nurture Sequence {A|B|C} — Day 0 sent {date}`, and
adds a note logging the download, sequence assignment, and the
recipient's unsubscribe link — the note doubles as a lightweight
communication record, relevant to the still-open record-retention item
(`MISSING-INFORMATION-REGISTER.md` #11). See
`netlify/functions/lib/folk.ts` for the client — flagged
`[FACT TO VERIFY]` against folk's live API reference before this ships,
since the exact endpoint contract wasn't independently re-verified.

**Unsubscribe (live in code, not yet deployed):**
`netlify/functions/unsubscribe.ts` — clicking the link in any email's
footer immediately (no manual/batch step) adds that person to a new
folk group, **Email Unsubscribed**, created 2026-08-06 specifically as a
suppression list. Every check below tests membership in that group before
sending.

**Sending — activated 2026-08-06, on explicit confirmation ("execute").**
A daily Cowork scheduled task (`email-nurture-sequence-sender`, 9:05 AM
local, task file at `/Users/sshaw/Claude/Scheduled/email-nurture-sequence-sender/SKILL.md`)
runs automatically: searches folk's Website Leads group for people whose
`Funnel Stage` shows they're due for their next step (Day 3/7/14 since
enrollment), skips anyone in Email Unsubscribed, sends the matching
template, and updates `Funnel Stage` plus a note recording the send. All
12 email bodies are embedded directly in the task's prompt (converted to
HTML), since a scheduled task starts fresh each run with no access to
this conversation or repo.

**Sender-address fix, built 2026-08-06 (superseding the original
`outlook_send_mail` approach):** confirmed that gap wasn't fixable within
the connected Outlook/Exchange connector — even the draft-then-send path
(`outlook_create_draft` + `outlook_send_draft`) explicitly rejects
sending under any From identity other than the signed-in account, by
design, not by omission. So this now sends through a purpose-built
Netlify Function instead: `netlify/functions/send-nurture-email.ts`
calls Microsoft Graph directly (`netlify/functions/lib/msgraph.ts`, app-
only client-credentials auth) and sets `message.from` to
`info@reserveinvestmentgroup.com` — the actual sender identity this
project intended all along. The scheduled task calls this endpoint via
`curl` (Step 6 of its prompt) instead of any Outlook MCP tool, guarded by
a shared `INTERNAL_SEND_SECRET` so it isn't a public sending endpoint.

This requires tenant-admin setup — Entra ID app registration, `Mail.Send`
application permission with admin consent, and an Exchange Application
Access Policy scoping the app to exactly one mailbox — that neither this
codebase nor an AI agent can perform. Full checklist:
`MISSING-INFORMATION-REGISTER.md` #17b. Until that setup is done and the
resulting credentials are set as Netlify environment variables (never in
this repo), `send-nurture-email.ts` will fail closed with a clear auth
error rather than send anything incorrectly, and the scheduled task
treats "not configured yet" as an expected, non-alarming outcome (see its
Step 6).

**Still not fixable, unrelated to the above:** Cowork scheduled tasks
only run while the desktop app is open, by product design; a due run
fires at next launch if it's closed. "Day 3" and "Day 7" mean "at least,"
not exact, for as long as this mechanism is used — there's no available
setting that changes this.

**Update 2026-08-07 — Microsoft-side setup complete and live-tested.**
The practice owner completed the Entra ID/Exchange tenant-admin setup
(`MISSING-INFORMATION-REGISTER.md` #17b) and ran a live test send
directly via Graph (PowerShell, bypassing the undeployed website
entirely) — arrived with `From: info@reserveinvestmentgroup.com`
exactly as intended, no errors. This confirms the piece that carried the
most uncertainty (the "send from an alias" behavior) actually works on
this tenant, not just in documentation.

What's still inert: `submit-lead.ts` and `send-nurture-email.ts` aren't
deployed to production yet, so there's still nothing for the scheduled
task to find or call. That deployment should wait on the still-open
email-channel compliance/retention review (Section 1) — the Microsoft
setup being done doesn't change that gate.
