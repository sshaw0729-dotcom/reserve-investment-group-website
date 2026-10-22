// /medicare-answers-cleveland — citable education page built from the
// approved 2026-10-22 draft. Strictly educational, CMS-aligned: no plan
// recommendations, no enrollment steering. Disclaimer wording built
// 2026-10-22 per Ron's instruction.
const THEME_TOGGLE = `<div class="funnel-theme-control"><button aria-label="Toggle light or dark mode" class="theme-toggle" id="theme-toggle" type="button"><svg fill="none" id="theme-icon" viewbox="0 0 16 16"><path d="M13.5 9.8A6 6 0 0 1 6.2 2.5a6 6 0 1 0 7.3 7.3z" fill="currentColor"></path></svg><span>Theme</span></button></div>`;

const DISCLAIMER = `<p class="compliance-note" style="max-width: 760px; margin: var(--space-8) auto 0;">This page is educational information about how Medicare works, written in general terms. It is not a recommendation of any plan or plan type, not plan-specific guidance for any individual's situation, and not an offer or solicitation to enroll in any plan. Reserve Investment Group, Inc. is a private, Ohio-licensed insurance agency (Ohio insurance license #1293258) and is not affiliated with or endorsed by the federal government, the Centers for Medicare &amp; Medicaid Services (CMS), or the Medicare program. Medicare plan availability, costs, and coverage vary by state and county and can change over time. For official information, visit Medicare.gov or call 1-800-MEDICARE (1-800-633-4227). Ohio residents can also get free, unbiased counseling from OSHIIP — the Ohio Senior Health Insurance Information Program — at 1-800-686-1578.</p>`;

export const MEDICARE_ANSWERS_BODY_HTML = `${THEME_TOGGLE}
<section class="hero">
<div class="container">
<div class="hero-copy" style="max-width: 760px;">
<span class="badge">Medicare education · South Euclid, Ohio</span>
<h1>Medicare Answers for Cleveland: When to Enroll, What It Covers, and How to Choose</h1>
<p class="lede">If you just turned 65, the short version is this: most people sign up for Medicare during a 7-month window around their 65th birthday, Medicare covers hospital and medical care through different parts that work differently, and the biggest decision — Original Medicare with a supplement, or a Medicare Advantage plan — comes down to how you use doctors, prescriptions, and travel. This page walks through each piece in plain English.</p>
<div class="hero-actions">
<a class="btn btn-primary btn-lg" href="/medicare/#one-pager">Get the free one-page breakdown</a>
<a class="btn btn-ghost btn-lg" href="tel:2162843615">Call (216) 284-3615</a>
</div>
<p class="hero-microcopy">Education only · No plan pitches · Ohio-licensed agency #1293258</p>
</div>
</div>
</section>
<section>
<div class="container" style="max-width: 760px;">
<p>Reserve Investment Group is an insurance agency in South Euclid, Ohio. Education is where we start every Medicare conversation — it's also why we run the <a href="https://www.facebook.com/groups/109103845383260" rel="noopener" target="_blank">Turning 65 Club</a>, a free Facebook community where Cleveland-area neighbors turning 65 learn the basics together. Nothing on this page is a recommendation; it's the map, so you can have an informed conversation with whoever helps you.</p>
</div>
</section>
<section class="section-surface">
<div class="container" style="max-width: 760px;">
<div class="section-header">
<span class="eyebrow">Your first window</span>
<h2>I just turned 65. When do I sign up for Medicare?</h2>
</div>
<p>Most people enroll during their <strong>Initial Enrollment Period</strong> — a 7-month window that starts 3 months before the month you turn 65, includes your birthday month, and ends 3 months after. Enrolling in the first 3 months means coverage can start the month you turn 65.</p>
<p>A few timing facts worth knowing before the window closes:</p>
<ul>
<li><strong>Part A (hospital insurance)</strong> is premium-free for most people who worked at least 10 years in Medicare-covered employment, and many people enroll in Part A at 65 even if they delay the rest.</li>
<li><strong>Part B (medical insurance)</strong> carries a late-enrollment penalty if you delay past your window <em>without</em> qualifying coverage — generally a group health plan from an employer with 20 or more employees (yours or a spouse's). If you have that kind of coverage, a <strong>Special Enrollment Period</strong> usually lets you enroll in Part B within 8 months after the coverage or employment ends, without penalty.</li>
<li><strong>Part D (prescription drug coverage)</strong> has its own late penalty if you go without creditable drug coverage.</li>
<li>If you're still working at 65, the right sequence depends on your employer's plan and its size — that's a conversation to have <em>before</em> your window closes, not after.</li>
</ul>
</div>
</section>
<section>
<div class="container" style="max-width: 760px;">
<div class="section-header">
<span class="eyebrow">The four parts</span>
<h2>What does Medicare cover?</h2>
</div>
<p>Medicare has four parts, and each covers a different slice of your care:</p>
<div class="grid-2">
<div class="card">
<h3>Part A — hospital insurance</h3>
<p>Inpatient hospital stays, skilled nursing facility care after a qualifying hospital stay, hospice care, and some home health care.</p>
</div>
<div class="card">
<h3>Part B — medical insurance</h3>
<p>Doctor visits, outpatient care, preventive services (screenings, vaccines, an annual wellness visit), lab work, imaging, and durable medical equipment. Part A and Part B together are called <strong>Original Medicare</strong>.</p>
</div>
<div class="card">
<h3>Part C — Medicare Advantage</h3>
<p>Private plans approved by Medicare that bundle Part A and Part B (and usually Part D) into one plan, often with extras like dental or vision allowances. This is an <em>alternative way to receive</em> your Medicare benefits — see the comparison below.</p>
</div>
<div class="card">
<h3>Part D — prescription drug coverage</h3>
<p>Standalone drug plans that pair with Original Medicare, or drug coverage built into most Advantage plans.</p>
</div>
</div>
<p style="margin-top: var(--space-6);">Medicare does <strong>not</strong> cover everything: routine dental, most long-term care, and care outside the U.S. are common gaps people discover late. Knowing the gaps is part of planning around them.</p>
</div>
</section>
<section class="section-surface">
<div class="container" style="max-width: 760px;">
<div class="section-header">
<span class="eyebrow">The big decision</span>
<h2>What is the difference between Medicare Advantage and a Medicare supplement?</h2>
</div>
<p>Both sit on top of the same Medicare — they handle your costs in opposite ways.</p>
<div class="card" style="margin-bottom: var(--space-4);">
<h3>Medicare supplement (Medigap)</h3>
<p>A supplement works <em>with</em> Original Medicare. Medicare pays its share first; the supplement pays much of what remains, depending on the plan. Key traits: you can generally see any doctor or hospital in the country that accepts Medicare, referrals are typically not required, there is no annual out-of-pocket maximum because the supplement is absorbing those costs, and you pay a monthly supplement premium on top of Part B (plus a separate Part D plan for prescriptions). In Ohio, as everywhere, supplements cannot be sold to cover the Part B deductible for people newly eligible after 2020 — and in most situations, the easiest time to buy one without health questions is your 6-month Medigap Open Enrollment Period starting when you first enroll in Part B at 65 or older.</p>
</div>
<div class="card">
<h3>Medicare Advantage (Part C)</h3>
<p>An Advantage plan replaces the <em>delivery</em> of Original Medicare with a private plan. Key traits: usually a lower or $0 additional premium, an annual maximum on out-of-pocket costs, care organized through a network of doctors and hospitals, prior authorizations for some services, prescriptions usually built in, and extras Medicare doesn't cover (dental, vision, hearing allowances) on many plans. Networks and rules apply, and they can change year to year — which is why Advantage members should review their plan every fall.</p>
</div>
<p style="margin-top: var(--space-6);">Neither structure is "better" in the abstract. They trade premium predictability against network flexibility, and the right trade depends on your doctors, your prescriptions, your travel, and your health.</p>
</div>
</section>
<section>
<div class="container" style="max-width: 760px;">
<div class="section-header">
<span class="eyebrow">Choosing in Ohio</span>
<h2>How do I choose in Ohio?</h2>
</div>
<p>Work through these five factors — they're the same ones unbiased counselors use:</p>
<ol>
<li><strong>Your doctors and hospitals.</strong> Do you want any Medicare-accepting provider nationwide (supplement pattern), or are your doctors in one system's network you're comfortable using (check any Advantage plan's network before assuming)?</li>
<li><strong>Your prescriptions.</strong> Every Part D and Advantage plan has its own drug list (formulary) and costs. Check your specific medications in the official <strong>Medicare Plan Finder at Medicare.gov</strong> — totals for the same drugs vary widely plan to plan.</li>
<li><strong>Total cost, not just premium.</strong> Add the premium to likely copays and out-of-pocket exposure for a year of <em>your</em> actual usage. A $0-premium plan you use heavily can cost more than a premium plan that absorbs your costs.</li>
<li><strong>Travel and second homes.</strong> Supplements travel with you anywhere Medicare is accepted. Advantage networks are local, with emergency-only coverage away from home.</li>
<li><strong>How you feel about rules.</strong> Referrals, prior authorizations, and annual plan changes are part of the Advantage structure; the supplement structure trades a higher premium for fewer moving parts.</li>
</ol>
<p>Two free, official resources belong in every Ohio search: the <strong>Medicare Plan Finder (Medicare.gov)</strong> for plan-by-plan math on your prescriptions, and <strong>OSHIIP — the Ohio Senior Health Insurance Information Program (1-800-686-1578)</strong> — free, unbiased counseling from the Ohio Department of Insurance. Use both. Then, if you want a local licensed person to walk through your situation with you, that's the conversation we have at Reserve Investment Group — education first, and we'll tell you plainly when the answer is "keep what you have."</p>
<p><strong>Annual rhythm worth knowing:</strong> the Annual Enrollment Period runs <strong>October 15 – December 7</strong> each year, when Advantage and Part D members can change plans for the following year. Mark it whether or not you plan to move — plan terms change even when you don't.</p>
</div>
</section>
<section class="section-surface">
<div class="container" style="max-width: 760px;">
<div class="section-header">
<span class="eyebrow">Questions, answered straight</span>
<h2>Frequently asked questions</h2>
</div>
<h3>I just turned 65 and live in Cleveland, Ohio. When do I sign up for Medicare, and what does it cover?</h3>
<p>Enroll during your Initial Enrollment Period — the 7 months from 3 months before your 65th-birthday month through 3 months after (earlier enrollment means coverage starting on time). Medicare covers hospital care (Part A), medical care (Part B), an alternative bundled delivery through private plans (Part C / Medicare Advantage), and prescription drugs (Part D). If you have qualifying employer coverage, special rules may let you delay Part B without penalty until that coverage ends.</p>
<h3>What is the difference between Medicare Advantage and a Medicare supplement plan, and how do I choose in Ohio?</h3>
<p>A supplement (Medigap) works with Original Medicare: Medicare pays first, the supplement pays much of the rest, you can use any Medicare provider nationwide, and you pay an added monthly premium plus a separate drug plan. An Advantage plan delivers your Medicare through a private plan: often a lower premium and an annual out-of-pocket maximum, but network rules, possible prior authorizations, and yearly plan changes. Ohioans choose by checking their doctors, their prescriptions in the Medicare Plan Finder, total yearly cost, travel patterns, and tolerance for administrative rules — OSHIIP (1-800-686-1578) provides free unbiased help with exactly this comparison.</p>
<h3>I'm still working at 65. Do I have to enroll in Medicare?</h3>
<p>Not always. If you (or your spouse) have group coverage from an employer with 20 or more employees, you can usually delay Part B — and take Part A, which is premium-free for most people — without penalty, using a Special Enrollment Period when the job or coverage ends. With smaller-employer or retiree coverage, the rules differ and penalties can apply, so confirm your specific situation before your Initial Enrollment Period closes.</p>
<h3>When is Medicare open enrollment?</h3>
<p>The Annual Enrollment Period is October 15 through December 7 each year, when people in Medicare Advantage and Part D plans can switch plans or return to Original Medicare for the next year. Your first enrollment at 65 runs on your own Initial Enrollment Period dates, which are different.</p>
<h3>Does Medicare cover dental, vision, and long-term care?</h3>
<p>Original Medicare generally does not cover routine dental, routine vision, or long-term custodial care. Some Advantage plans include limited dental/vision allowances. These gaps are one of the most common surprises at 65 — knowing them early lets you plan for them instead of discovering them mid-treatment.</p>
<h3>Where can I get free, unbiased Medicare help in Ohio?</h3>
<p>OSHIIP (Ohio Senior Health Insurance Information Program, 1-800-686-1578) offers free counseling through the Ohio Department of Insurance, and Medicare.gov's Plan Finder runs official plan comparisons on your prescriptions. Locally, Reserve Investment Group in South Euclid holds educational Medicare conversations for Cleveland-area residents turning 65, and our Turning 65 Club community covers one topic at a time, all education, no sales pitch.</p>
<p style="margin-top: var(--space-8);">Own a small business in Greater Cleveland? Our companion education page: <a href="/cleveland-credit-card-processing-costs/">How much should a small business pay for credit card processing? →</a></p>
</div>
</section>
<section class="section-navy">
<div class="container" style="max-width: 760px; text-align: center;">
<h2 style="color: var(--color-text-inverse);">Keep learning, one piece at a time</h2>
<p class="lede" style="margin-inline:auto;">The full Medicare education hub — the one-pager, the enrollment-period timelines, and the turning-65 walkthrough — is free, and so is the conversation.</p>
<div class="hero-actions" style="justify-content: center; margin-top: var(--space-8);">
<a class="btn btn-inverse btn-lg" href="/medicare/">Visit the Medicare education hub</a>
<a class="btn btn-ghost btn-lg" href="tel:2162843615">Call (216) 284-3615</a>
</div>
${DISCLAIMER}
</div>
</section>`;
