# CRO Recommendations

Status: Added 2026-08-06, `MARKETING-ECOSYSTEM-BRIEF.md` Section 8 (the
final section of the original 8-part brief). This is a recommendations
document, not new code — it audits conversion-relevant decisions already
built into this codebase, maps them to the funnel already defined in
`ANALYTICS-MEASUREMENT-PLAN.md`, and proposes what to test or change
next. Every recommendation and every proposed test is checked against
`ANALYTICS-MEASUREMENT-PLAN.md`'s experimentation rules before being
listed — nothing here proposes testing a disclosure, a risk statement, or
urgency/scarcity language, because those are explicitly prohibited test
categories regardless of what CRO orthodoxy might otherwise suggest for
a typical commercial site.

## 1. The Funnel This Document Optimizes Against

From `ANALYTICS-MEASUREMENT-PLAN.md`: landing-page view → primary CTA
click → form start → form completion → appointment-link click →
confirmed appointment. Everything below is organized by which stage of
that funnel it affects, since a change that helps one stage can hurt
another (e.g., a shorter form helps form completion but may reduce lead
quality, which shows up later as a worse appointment-confirmation rate —
worth watching both, not just the stage being optimized).

## 2. What's Already Built, and Why It Counts as a CRO Decision

Worth stating plainly before recommending anything new: this site
already embeds a number of conversion-relevant decisions, made during
earlier build phases rather than called out separately. Restating them
here so they're visible as deliberate choices, not defaults:

- **44px minimum touch targets** (`--touch-target-min` in
  `tokens.css`), applied to buttons, form inputs, and nav links.
  Undersized mobile tap targets are one of the most common,
  measurable sources of mobile form abandonment — this was built in
  from the start rather than retrofitted.
- **Single, consistent lead-form pattern** (`LeadForm.tsx`) used
  everywhere a form appears — first/last name, email, optional phone,
  area of interest, preferred contact method, one consent checkbox.
  Not the shortest possible form (a single email field would convert
  more raw submissions), but a deliberate quality/volume tradeoff:
  `ANALYTICS-MEASUREMENT-PLAN.md` explicitly prioritizes "qualified
  form submissions... over raw clicks."
- **Exactly two approved CTAs used everywhere** ("Schedule an
  introductory conversation" / "Request a complimentary financial
  review") instead of ad hoc button copy per page. Consistent CTA
  language is itself a conversion lever — it sets a stable expectation
  and simplifies what's being measured.
- **Inline field-level validation with `aria-describedby` errors**,
  not a single generic "form failed" message — reduces abandonment from
  unclear errors and is already instrumented (`form_validation_error`
  event captures where forms break down, not just that they did).
- **Post-submission download pattern** (`LeadForm`'s success state) —
  the checklist download appears only after submission, not before,
  which is both the compliance-correct order (data collected before
  value delivered, consistent with `FORM-DATA-FLOW.md`) and generally
  the better-converting order for this kind of offer.
- **Process-based `TrustSignals` component** (Section 1,
  `MARKETING-ECOSYSTEM-BRIEF.md`) ships with default copy about
  no-pressure conversations, written disclosures, and coordination with
  other professionals — trust-building copy that doesn't depend on
  numbers, credentials, or testimonials not yet available, so it isn't
  sitting empty while those get approved.

## 3. Funnel Stage: Landing-Page View → CTA Click

**Recommendation — message match between ad copy and landing headline.**
Now that `GOOGLE-ADS-ARCHITECTURE.md` exists, the ad copy drafted there
and each landing page's H1 should use closely related language — a
visitor who clicks "Financial Planning for Business Owners" should land
on a headline that echoes that phrase back, not a generic "Welcome to
Reserve Investment Group." This is a copy-alignment pass, not a new
build; worth doing as part of whichever section finalizes ad copy for
launch.

**Recommendation — hero subhead specificity.** Where a page's hero
subhead is still generic filler copy, tighten it to name the specific
audience or situation the page addresses (already done well on the
combined campaign pages from Section 1; worth auditing the plain
service/persona spoke pages against the same bar).

**Safe to test:** headline clarity/specificity variants. Not safe to
test: adding urgency ("only a few spots," "limited time") — explicitly
prohibited regardless of how common it is elsewhere, per
`ANALYTICS-MEASUREMENT-PLAN.md` and `PROJECT-BRIEF.md`.

## 4. Funnel Stage: CTA Click → Form Start

**Recommendation — sticky mobile CTA on long pages.** Content-cluster
pillar articles and location pages can run long on mobile; a lightweight
sticky footer bar with the page's primary CTA (not a popup, not
dismissible-then-reappearing) keeps the action reachable without
requiring a scroll back to the top. Low compliance surface — it's the
same approved CTA text in a persistent position, not new claims.

**Recommendation — reduce CTA choice paralysis on hub pages.** Hub pages
(Services, Who We Help, Resources) currently mix multiple calls to
action at different weights. Worth a pass ensuring one primary CTA per
page is visually dominant, with secondary links (browse more services,
read related insight) clearly secondary — supports the existing
`primary_cta_clicked` / `secondary_cta_clicked` event split, which only
means something if the visual hierarchy actually matches the event
naming.

**Safe to test:** CTA button copy variants that stay within the two
approved phrases' spirit (e.g., testing "Schedule an introductory
conversation" against "Schedule a conversation" for length/clarity) —
any new variant still needs compliance sign-off before running, since
"safe category" (CTA placement/wording) doesn't mean "pre-approved
copy," only "an approvable kind of test."

## 5. Funnel Stage: Form Start → Form Completion

This is the stage with the most existing instrumentation
(`form_started`, `form_validation_error`, `form_submitted`) and the most
genuine tradeoffs, so recommendations here lean toward "measure before
changing" rather than prescribing a change outright.

**Recommendation — watch field-level abandonment before shortening the
form.** The standard field set (first/last name, email, phone-optional,
area of interest, contact method, consent) is already close to
`FORM-DATA-FLOW.md`'s minimum standard set. Removing fields (e.g.,
dropping "preferred contact method") would likely lift raw completion
slightly, at the cost of a lower-context lead. Recommend waiting for
real `form_started` vs. `form_submitted` volume before trading lead
quality for a form-length change that current instrumentation can
actually justify.

**Recommendation — confirm mobile keyboard types are set correctly.**
`LeadForm.tsx`'s inputs already use semantic `type="email"` and
`type="tel"` with `autoComplete` attributes, which triggers the right
mobile keyboard and autofill — worth a manual device check once the
Deploy Preview environment is live for a quick pass, since this is easy
to silently regress in future edits.

**Safe to test:** form length (e.g., phone required vs. optional framing
already in place vs. testing its removal entirely), field order,
progressive disclosure (show phone/contact-method fields only after name
+ email are filled). Not safe to test: removing or softening the consent
checkbox, or changing what the privacy notice says — those are
compliance requirements, not conversion levers.

## 6. Funnel Stage: Form Completion → Resource Delivery / Next Step

**Recommendation — confirm the download-and-nurture handoff feels like
one experience.** Right now: submit form → success message with
download link → (once deployed) an automated Day-0 email restates the
same download link. Recommend the on-page success message set clear
expectations ("you'll also get a short series of related notes by
email over the next two weeks") so the first nurture email isn't a
surprise — reduces spam-complaint risk as a side effect, not just a
conversion nicety.

**Recommendation — Insights cross-links on the success state.** The
success state currently shows only the download button. Adding one or
two related Insights links (already modeled via `relatedInsightSlugs`
on each lead magnet) gives visitors who aren't ready to schedule
something else useful to do besides leaving the tab — keeps them in the
site rather than ending the session at the download click.

## 7. Funnel Stage: Appointment-Link Click → Confirmed Appointment

Currently unmeasurable past the click itself — `appointment_link_clicked`
fires, but nothing downstream confirms a booking happened, since no
scheduling system is chosen yet (`MISSING-INFORMATION-REGISTER.md` #16).
**Recommendation:** whichever scheduling tool gets selected, prioritize
one that can fire a confirmation webhook/event back into the funnel —
without it, the funnel's last and most important stage stays permanently
dark, and every CRO decision upstream is being optimized against a proxy
metric (link clicks) rather than the real outcome (booked, attended
appointments).

## 8. Experimentation Roadmap

Consistent with `ANALYTICS-MEASUREMENT-PLAN.md`'s rule that no test
activates automatically and every test needs a written hypothesis,
guardrail metrics, and compliance review — this is a backlog of
candidate tests, not a plan to start testing immediately, and none of
these should run before there's enough real traffic for a valid result.

| Priority | Test | Primary metric | Guardrail metric |
|---|---|---|---|
| 1 | Form field order (name/email first, contact-preference last vs. current order) | `form_submitted` rate from `form_started` | none expected, low risk |
| 2 | Hero headline specificity on generic spoke pages | `primary_cta_clicked` rate | bounce/exit rate (via scroll depth as proxy) |
| 3 | Sticky mobile CTA presence/absence on long pages | `primary_cta_clicked` rate, mobile only | scroll depth (make sure it's not just replacing organic scroll-to-CTA behavior) |
| 4 | Resource-page success-state cross-links (Insights links present vs. absent) | subsequent `page_viewed` from the success state | `form_submitted` rate (make sure this doesn't inadvertently look like a required step) |
| 5 | CTA copy length ("Schedule an introductory conversation" vs. a shorter approved variant) | `primary_cta_clicked` rate | requires compliance sign-off on the shorter variant before it can run at all |

**Explicitly excluded from this backlog, per `ANALYTICS-MEASUREMENT-PLAN.md`'s
prohibited categories:** anything testing disclosure visibility or
wording, anything introducing urgency/scarcity, anything involving
testimonials (none exist yet, none should be tested into existence),
anything implying a range of possible investment outcomes.

## 9. Non-Testing Quick Wins (No Experiment Needed)

These are correctness/consistency fixes, not experiments — no
hypothesis needed, just implementation and a normal compliance-copy
review if any wording changes:

- Audit hero subhead specificity across plain service/persona spoke
  pages (Section 3 above).
- Add 1–2 Insights cross-links to the `LeadForm` success state
  (Section 6 above).
- Confirm mobile keyboard types / autofill still work correctly after
  any future `LeadForm.tsx` edits (Section 5 above).
- Message-match pass between `GOOGLE-ADS-ARCHITECTURE.md` ad copy and
  landing-page headlines once ad copy is finalized (Section 3 above).

## 10. Measurement Cadence

Ties into the existing dashboard structure in
`ANALYTICS-MEASUREMENT-PLAN.md` rather than proposing new dashboards:
review the **Funnel** dashboard weekly once real traffic exists, looking
specifically at the two biggest expected drop-off points —
`primary_cta_clicked` → `form_started` (does the click deliver what the
CTA promised?) and `form_started` → `form_submitted` (does the form
itself lose people?). Anything upstream of real traffic (pre-launch) is
guesswork; this document should be revisited with actual numbers within
the first month of Production traffic, per `IMPLEMENTATION-ROADMAP.md`
Phase 10's monthly optimization cadence.

## 11. Marketing Ecosystem Brief — All 8 Sections Now Delivered

This closes out the original 8-part brief: Landing Page System (1),
Local SEO Silo validation (2), Content Clusters (3), Local SEO
Operations (4), Lead Magnets (5), Email Nurture Sequences (6), Google
Ads Architecture (7), CRO Recommendations (8, this document). Remaining
open items are tracked individually rather than as a section backlog:
Chagrin Falls (lower-priority Wave 2 city), a second content-cluster
wave (tax-aware financial planning, estate-planning coordination,
insurance/risk planning), the Microsoft Graph tenant-admin setup
(`MISSING-INFORMATION-REGISTER.md` #17b), and the remaining firm-fact
gaps in that same register (#6–#11, #16, #20–#22).
