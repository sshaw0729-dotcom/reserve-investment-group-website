// Medicare education hub bodies — hand-written from the council-cleared
// Medicare launch pack (Facebook Posts 1-3 + DM script), rewritten in the
// site's insurance-first voice per the Oct 15, 2026 positioning brief.
// Education only: no plan names, no carriers, no premiums, no steering.
const THEME_TOGGLE = `<div class="funnel-theme-control"><button aria-label="Toggle light or dark mode" class="theme-toggle" id="theme-toggle" type="button"><svg fill="none" id="theme-icon" viewbox="0 0 16 16"><path d="M13.5 9.8A6 6 0 0 1 6.2 2.5a6 6 0 1 0 7.3 7.3z" fill="currentColor"></path></svg><span>Theme</span></button></div>`;

const DISCLAIMER = `<p class="compliance-note" style="max-width: 760px; margin: var(--space-8) auto 0;">Educational information about how Medicare works — not a plan recommendation or enrollment guidance. Reserve Investment Group, Inc. is a private insurance agency and is not affiliated with the federal government or the federal Medicare program. Medicare plan availability, costs, and coverage vary by state and county and can change over time. For official information, visit Medicare.gov or call 1-800-MEDICARE (1-800-633-4227).</p>`;

const CTA_BAND = `<section class="section-navy">
<div class="container" style="max-width: 760px; text-align: center;">
<h2 style="color: var(--color-text-inverse);">Get the free one-page Medicare breakdown</h2>
<p style="color: color-mix(in srgb, var(--color-text-inverse) 82%, transparent);">One page: Parts A through D, the Medigap vs. Medicare Advantage tradeoffs, and the enrollment timeline — in plain English, to keep.</p>
<div class="hero-actions" style="justify-content: center;">
<a class="btn btn-primary btn-lg" href="/medicare/#one-pager">Get the one-pager</a>
<a class="btn btn-ghost btn-lg" href="tel:2162843615">Call (216) 284-3615</a>
</div>
</div>
</section>`;

export const MEDICARE_BODY_HTML = `${THEME_TOGGLE}
<section class="hero">
<div class="container hero-grid">
<div class="hero-copy">
<span class="badge">Medicare education · South Euclid, Ohio</span>
<h1>Turning 65 in Cleveland, Ohio? When do you sign up for Medicare — and what does it cover?</h1>
<p class="lede">Most people first sign up during a 7-month window that starts 3 months before the month they turn 65 — and Medicare covers hospital care under Part A, medical care under Part B, and, through private plans, Medicare Advantage (Part C) and prescription drugs (Part D). Turning 65 also comes with a vocabulary lesson nobody teaches you: Part A, Part B, Part C, Part D — four letters, four completely different jobs, and a set of enrollment windows that don't wait for anyone.</p>
<p>We're Reserve Investment Group — a Cleveland-area insurance agency in South Euclid, Ohio. Medicare education is one of our core services, and this page is our approach in one place: how Medicare works, in plain English, with the timelines laid out honestly. No plan pitches live here. When you understand the pieces, the decisions get smaller.</p>
<div class="hero-actions">
<a class="btn btn-primary btn-lg" href="#one-pager">Get the free one-page breakdown</a>
<a class="btn btn-ghost btn-lg" href="tel:2162843615">Call (216) 284-3615</a>
</div>
<p class="hero-microcopy">Education only · No plan pitches · Ohio-licensed agency #1293258</p>
</div>
<div class="hero-media">
<img alt="Senior couple reviewing paperwork together at home" loading="eager" src="/images/rig-funnel/hero-life-insurance.webp"/>
</div>
</div>
</section>
<div class="trust-bar">
<div class="container">
<span>Ohio-licensed insurance agency</span>
<span>Education, not a sales pitch</span>
<span>South Euclid, OH · serving Greater Cleveland</span>
<span>(216) 284-3615</span>
</div>
</div>
<section>
<div class="container">
<div class="section-header">
<span class="eyebrow">Start where you are</span>
<h2>Turning 65, or already on Medicare — which path are you on?</h2>
</div>
<div class="path-grid">
<a class="path-card" href="/medicare/turning-65/" style="color:inherit;">
<h3>Turning 65?</h3>
<p>Your first enrollment window is 7 months long, and when it opens depends on your birthday — not on a calendar you can look up in the fall.</p>
<span class="btn btn-ghost btn-full" style="margin-top:auto;">Turning 65: your window, explained →</span>
</a>
<a class="path-card" href="/medicare/enrollment-periods/" style="color:inherit;">
<h3>Already on Medicare?</h3>
<p>Your coverage isn't a set-it-and-forget-it decision. Every fall there's a review window, and plans change even when you don't.</p>
<span class="btn btn-ghost btn-full" style="margin-top:auto;">Enrollment periods, explained →</span>
</a>
</div>
</div>
</section>
<section class="section-surface">
<div class="container">
<div class="section-header">
<span class="eyebrow">The basics</span>
<h2>What are Medicare Parts A, B, C, and D?</h2>
</div>
<div class="grid-2">
<div class="card">
<h3>Part A — hospital insurance</h3>
<p>Part A covers inpatient hospital stays, limited skilled nursing care, hospice, and some home health care. Most people pay no premium for Part A, because they or a spouse paid Medicare taxes long enough while working.</p>
</div>
<div class="card">
<h3>Part B — medical insurance</h3>
<p>Part B covers doctors, outpatient care, and preventive services. A monthly premium applies — Medicare sets the amount each year, and higher-income households pay more.</p>
</div>
<div class="card">
<h3>Part C — Medicare Advantage</h3>
<p>Part C is an alternative way to receive your Medicare benefits: private plans that bundle Part A, Part B, and usually Part D into one plan. Advantage plans work through provider networks, and their costs and rules vary by plan and by where you live.</p>
</div>
<div class="card">
<h3>Part D — prescription drug coverage</h3>
<p>Part D is drug coverage, offered by private plans. The list of covered drugs and what you pay vary by plan — which is one reason the fall review window matters.</p>
</div>
</div>
<p style="margin-top: var(--space-6);"><strong>Part A and Part B together are called Original Medicare.</strong> And Original Medicare doesn't cover everything — which raises the question every Medicare decision eventually runs into:</p>
<h3 style="margin-top: var(--space-6);">The gap question: Medigap or Medicare Advantage?</h3>
<p>They're two different answers to the same question: how do you handle what Original Medicare doesn't cover?</p>
<div class="grid-2">
<div class="card">
<h3>Medigap</h3>
<p>Extra insurance paired with Original Medicare that helps with out-of-pocket costs. Its trade: a higher monthly premium — in exchange, you can generally keep any doctor who accepts Medicare, and drug coverage is bought separately.</p>
</div>
<div class="card">
<h3>Medicare Advantage</h3>
<p>One private plan bundling A, B, and usually D. Its trade: the extra premium is often lower — but you work within the plan's network, pay copays when you get care, and prior authorization is common.</p>
</div>
</div>
<p style="margin-top: var(--space-6);">Neither one is "better." It depends on how you get care. Anyone who tells you otherwise before asking about your doctors, your prescriptions, and your budget is selling, not teaching.</p>
</div>
</section>
<section>
<div class="container" style="max-width: 760px;">
<div class="section-header">
<span class="eyebrow">How we work</span>
<h2>How does Reserve Investment Group help you understand Medicare?</h2>
</div>
<div class="card" style="margin-bottom: var(--space-4);">
<h3>Education first</h3>
<p>Everything on this page and in our free one-pager explains how Medicare works — the same for every reader. It is not a recommendation for anyone's situation.</p>
</div>
<div class="card" style="margin-bottom: var(--space-4);">
<h3>Benefits reviews</h3>
<p>Choosing coverage involves your doctors, your prescriptions, your budget, and your timing, and that belongs in a conversation, not a webpage. Our benefits review is a no-cost, no-obligation conversation — about 20 minutes — where we walk through how the pieces fit your situation. You keep the notes either way. Call us at <a href="tel:2162843615">(216) 284-3615</a>.</p>
</div>
<div class="card">
<h3>What we don't do</h3>
<p>We don't publish plan rankings, "best plan" lists, or premium quotes, and nothing here will steer you toward a plan or a company. If a piece of content ever sounds like that, it isn't ours.</p>
</div>
<p style="margin-top: var(--space-6);">Reserve Investment Group, Inc. is an Ohio-licensed insurance agency (Ohio insurance license #1293258).</p>
</div>
</section>
<section class="section-surface">
<div class="container" style="max-width: 760px;">
<div class="section-header">
<span class="eyebrow">Questions, answered straight</span>
<h2>Frequently asked questions</h2>
</div>
<h3>What are Medicare Parts A, B, C, and D?</h3>
<p>Part A is hospital insurance — it covers inpatient hospital stays, limited skilled nursing care, hospice, and some home health care. Part B is medical insurance — it covers doctors, outpatient care, and preventive services, and a monthly premium applies. Part C, called Medicare Advantage, is an alternative way to receive your Medicare benefits through private plans that bundle Part A, Part B, and usually Part D. Part D is prescription drug coverage from private plans; the list of covered drugs and the costs vary by plan. Together, Part A and Part B are called Original Medicare.</p>
<h3>When do I sign up for Medicare if I'm turning 65?</h3>
<p>Most people first sign up during their Initial Enrollment Period — a 7-month window that starts 3 months before the month you turn 65, includes your birthday month, and ends 3 months after it. If you're already receiving Social Security benefits when you turn 65, you're generally enrolled in Part A and Part B automatically. If you're not receiving benefits yet, enrollment doesn't happen on its own — you sign up through Social Security.</p>
<h3>What happens if I miss my enrollment window?</h3>
<p>If you miss your Initial Enrollment Period and don't qualify for a Special Enrollment Period, you can sign up during the General Enrollment Period, January 1 through March 31 each year, and your coverage starts the month after you enroll. Waiting can also mean late enrollment penalties. For Part B, the penalty is 10% for each full 12-month period you could have had Part B but didn't, and you generally pay it for as long as you have Part B. Part D has its own penalty — about 1% for each month you went without Part D or other creditable drug coverage — generally paid for as long as you have drug coverage.</p>
<h3>I'm still working at 65. Can I delay Medicare?</h3>
<p>Often, yes — it depends mainly on the size of your employer. If you have group health coverage from an employer with 20 or more employees (yours or a spouse's), you can usually delay Part B without a penalty, and when that coverage or the job ends, you get an 8-month Special Enrollment Period to sign up. If the employer has fewer than 20 employees, Medicare is generally expected to pay first at 65, so delaying Part B can leave coverage gaps and penalties. Two cautions: COBRA and retiree coverage do not count as employer coverage for delaying Part B, and if you have a health savings account (HSA), enrolling in Part A stops HSA contributions — and because Part A can backdate up to 6 months, timing matters. Check your specific situation before you decide; employer size and coverage type decide the answer.</p>
<h3>What's the difference between Medigap and Medicare Advantage?</h3>
<p>They are two different answers to the same question: how do you handle the costs Original Medicare doesn't cover? A Medigap policy is extra insurance paired with Original Medicare that helps with out-of-pocket costs; in exchange for a higher monthly premium, you can generally see any doctor who accepts Medicare, and drug coverage is bought separately. A Medicare Advantage plan (Part C) is one private plan that bundles Part A, Part B, and usually drug coverage; the extra premium is often lower, but you use the plan's network, pay copays when you get care, and prior authorization is common. Neither is simply better — it depends on how you get care, which doctors matter to you, and how you prefer to pay. Your first six months with Part B are also your Medigap open enrollment window: during it, insurers generally can't turn you down or charge you more because of your health.</p>
<h3>When can I change my Medicare coverage?</h3>
<p>The main window is the Annual Enrollment Period, October 15 through December 7 each year, when anyone with Medicare can review their coverage and make changes that take effect January 1. If you're in a Medicare Advantage plan, there's also a Medicare Advantage Open Enrollment Period, January 1 through March 31, when you can make one change — switch Advantage plans or move back to Original Medicare. Outside these windows, major life changes — like losing employer coverage or moving — can open a Special Enrollment Period of your own.</p>
<h3>How much does Medicare cost?</h3>
<p>It varies, and no honest page can quote you a personal number. Most people pay no premium for Part A, because they or a spouse paid Medicare taxes long enough while working. Part B has a monthly premium that Medicare sets each year, and higher-income households pay more. Part C and Part D are offered by private plans, so their premiums and costs vary by plan and by where you live. What you can control is timing: enrolling late without qualifying coverage adds penalties that follow you for years.</p>
<h3>Can Reserve Investment Group tell me which plan to pick?</h3>
<p>In our educational materials, no — deliberately. Everything on this page explains how Medicare works, the same for every reader, and it is not a recommendation for anyone's situation. Choosing coverage involves your doctors, your prescriptions, your budget, and your timing, and that conversation belongs one-on-one. If you'd like, we hold no-cost, no-obligation benefits reviews where we walk through how the pieces fit your situation and you keep the notes either way. You can also get free, independent help from Ohio's State Health Insurance Assistance Program (OSHIIP) or from Medicare itself at Medicare.gov or 1-800-MEDICARE (1-800-633-4227).</p>
</div>
</section>
<section id="one-pager">
<div class="container hero-grid" style="align-items:flex-start;">
<div>
<span class="eyebrow">Free one-pager</span>
<h2>Get the free one-page Medicare breakdown</h2>
<p class="lede">One page: Parts A through D, the Medigap vs. Medicare Advantage tradeoffs, and the enrollment timeline — in plain English, to keep.</p>
<p>Prefer to talk? Call <a href="tel:2162843615">(216) 284-3615</a>, or use our <a href="/contact/">full contact form</a> and choose "Medicare" as your area of interest.</p>
<p>Planning ahead? Our <a href="/quote/health/">health &amp; Medicare quote worksheet</a> collects your situation, doctors, and prescriptions so a licensed agent can prepare for your review.</p>
</div>
<form class="lead-form" id="medicare-onepager-form">
<div class="form-step" data-step="1">
<div class="field"><label for="mstatus">Quick one — which best describes you?</label><select id="mstatus"><option>I'm turning 65 soon</option><option>I'm reviewing my coverage during AEP</option><option>I'm helping a parent or spouse</option><option>I'm just learning</option></select></div>
<div class="form-row">
<div class="field" style="min-width:0;"><label for="mfname">First name</label><input id="mfname" name="firstName" required="" style="width:100%;" type="text"/></div>
<div class="field" style="min-width:0;"><label for="mlname">Last name</label><input id="mlname" name="lastName" required="" style="width:100%;" type="text"/></div>
</div>
<div class="field"><label for="memail">Email</label><input id="memail" name="email" required="" type="email"/></div>
<div class="field"><label for="mphone">Phone (optional)</label><input id="mphone" name="phone" type="tel"/></div>
<p class="lead-form-privacy-notice">Do not submit medical records, account information, tax documents, or other sensitive information through this form.</p>
<label class="field-check"><input name="consent" required="" type="checkbox"/><span> I agree to be contacted about Medicare education and my one-pager request. Consent is not a condition of purchase. See our <a href="/privacy/">Privacy Policy</a>.</span></label>
<button class="btn btn-primary btn-full" style="margin-top: var(--space-4);" type="submit">Send me the one-pager</button>
</div>
<div class="success-panel" data-success="" hidden="">
<h3>Your one-pager is ready.</h3>
<p><a class="btn btn-primary" href="https://drive.google.com/file/d/1L1Faz6mQTu8PmIDrt9MJ6vGz0n8CCOg2/view?usp=drivesdk" rel="noopener" target="_blank">Download the Medicare one-pager (PDF)</a></p>
<p>We've also noted your request. If you'd like a no-cost benefits review, we'll be in touch — or call us at (216) 284-3615.</p>
</div>
</form>
</div>
${DISCLAIMER}
</section>`;

export const MEDICARE_TURNING65_BODY_HTML = `${THEME_TOGGLE}
<section class="hero">
<div class="container">
<div class="hero-copy" style="max-width: 760px;">
<span class="badge">Medicare education · Turning 65</span>
<h1>Turning 65? When does your Medicare enrollment window open — and what happens if you miss it?</h1>
<p class="lede">Most people become eligible for Medicare at 65, and your first chance to sign up is built around your birthday — not around the fall enrollment season you hear advertised.</p>
<div class="hero-actions">
<a class="btn btn-primary btn-lg" href="/medicare/#one-pager">Get the free one-page breakdown</a>
<a class="btn btn-ghost btn-lg" href="tel:2162843615">Call (216) 284-3615</a>
</div>
</div>
</div>
</section>
<section>
<div class="container" style="max-width: 760px;">
<span class="eyebrow">Your first window</span>
<h2>What is your Initial Enrollment Period?</h2>
<p>Your first chance to sign up is your <strong>Initial Enrollment Period (IEP)</strong> — a 7-month window built around your birthday:</p>
<ul>
<li>It <strong>starts 3 months before</strong> the month you turn 65</li>
<li>It <strong>includes your birthday month</strong></li>
<li>It <strong>ends 3 months after</strong> your birthday month</li>
</ul>
<div class="card" style="margin: var(--space-6) 0;">
<h3>An example</h3>
<p>If your birthday is in June, your window runs March 1 through September 30. The earlier in your window you sign up, the sooner your coverage starts — signing up before your birthday month generally starts coverage on the first day of that month.</p>
</div>
<p>One exception to "you have to sign up": if you're already receiving Social Security benefits when you turn 65, you're generally enrolled in Part A and Part B automatically, and your Medicare card arrives by mail. If you're not receiving benefits yet, nothing happens automatically — you sign up through Social Security.</p>
</div>
</section>
<section class="section-surface">
<div class="container" style="max-width: 760px;">
<span class="eyebrow">If the window closes</span>
<h2>What happens if you miss your enrollment window?</h2>
<p>If your IEP closes and you don't have coverage that qualifies you for a Special Enrollment Period, the fallback is the <strong>General Enrollment Period — January 1 through March 31</strong> each year. Coverage starts the month after you enroll, which can leave a real gap.</p>
<p>The longer cost is penalties:</p>
<ul>
<li><strong>Part B:</strong> a late enrollment penalty of 10% for each full 12-month period you could have had Part B but didn't — generally paid for as long as you have Part B.</li>
<li><strong>Part D:</strong> if you go 63 days or more without Part D or other creditable drug coverage, a penalty of about 1% for each uncovered month is generally added to your drug premium for as long as you have drug coverage.</li>
</ul>
<p>Missing the window isn't fatal. It's just expensive in slow motion — which is why the timeline is worth learning before your birthday, not after. Full period-by-period detail: <a href="/medicare/enrollment-periods/">Enrollment periods →</a></p>
</div>
</section>
<section>
<div class="container" style="max-width: 760px;">
<span class="eyebrow">Still on the job</span>
<h2>Still working at 65? Can you delay Medicare?</h2>
<p>Plenty of people work past 65 with employer health coverage. Whether you can safely delay Medicare depends mainly on one number: <strong>how many people work for the employer.</strong></p>
<div class="grid-2" style="margin: var(--space-6) 0;">
<div class="card">
<h3>20 or more employees</h3>
<p>Your group plan generally stays primary, and you can usually delay Part B without a penalty. When the job or the coverage ends, an <strong>8-month Special Enrollment Period</strong> opens for you to enroll — and if that window closes unused, the penalties above apply.</p>
</div>
<div class="card">
<h3>Fewer than 20 employees</h3>
<p>Medicare is generally expected to pay first once you turn 65, even while you're still on the company plan. Delaying Part B here can leave you with coverage gaps — your employer plan may pay as if Medicare already paid its share — on top of penalties.</p>
</div>
</div>
<h3>Three traps that catch working people every year</h3>
<div class="card" style="margin-bottom: var(--space-4);">
<h3>1. COBRA is not a shield</h3>
<p>COBRA and retiree coverage do not count as employer coverage for delaying Part B. The 8-month clock starts when employment or group coverage ends — not when COBRA runs out.</p>
</div>
<div class="card" style="margin-bottom: var(--space-4);">
<h3>2. The HSA collision</h3>
<p>If you contribute to a health savings account, enrolling in Medicare ends your eligibility to contribute. And if you delay Part A past 65 and sign up later, Part A coverage can backdate up to 6 months — HSA contributions made in that backdated window can create a tax problem. Many people stop HSA contributions at least 6 months before applying for Medicare. This one deserves a conversation with your tax professional before your birthday, not after.</p>
</div>
<div class="card">
<h3>3. Your Medigap clock is tied to Part B</h3>
<p>Your 6-month Medigap open enrollment period starts the month you're 65 or older <em>and</em> enrolled in Part B. During it, insurers generally can't deny you or charge more because of your health. When you start Part B decides when that protected window runs — one more reason the timing is a decision, not a default.</p>
</div>
<h3 style="margin-top: var(--space-8);">Where to start</h3>
<ol>
<li>Find your window: count 3 months back from your birthday month.</li>
<li>Check your current coverage: employer size, and whether your drug coverage is "creditable" (your employer sends a notice about this each year — keep it).</li>
<li>Decide your Part A / Part B timing with those two facts in hand — then sign up through Social Security during your window.</li>
</ol>
<p>New to the basics? Start with <a href="/medicare/">the ABCD of Medicare →</a></p>
</div>
</section>
<section class="section-surface">
<div class="container" style="max-width: 760px;">
<div class="section-header">
<span class="eyebrow">Questions, answered straight</span>
<h2>Frequently asked questions</h2>
</div>
<h3>When exactly is my Initial Enrollment Period?</h3>
<p>It's a 7-month window: it starts 3 months before the month you turn 65, includes your birthday month, and ends 3 months after. If your birthday is in June, your window runs March 1 through September 30. Signing up before your birthday month generally starts coverage on the first day of that month.</p>
<h3>I'm already receiving Social Security. Do I still need to sign up?</h3>
<p>Generally, no — if you're already receiving Social Security benefits when you turn 65, you're usually enrolled in Part A and Part B automatically and your Medicare card arrives by mail. If you're not receiving benefits yet, nothing happens automatically; you sign up through Social Security.</p>
<h3>Can I delay Medicare if I'm still working at 65?</h3>
<p>Often — it depends mainly on your employer's size. With group coverage from an employer with 20 or more employees, you can usually delay Part B without a penalty, and you get an 8-month Special Enrollment Period when that coverage or the job ends. With fewer than 20 employees, Medicare is generally expected to pay first at 65, so delaying Part B can leave coverage gaps and penalties. COBRA and retiree coverage do not count as employer coverage for delaying Part B.</p>
<h3>What happens if I miss my window?</h3>
<p>The fallback is the General Enrollment Period, January 1 through March 31 each year, with coverage starting the month after you enroll. Waiting can also add late-enrollment penalties that follow you for years — 10% for each full 12-month period for Part B, and about 1% per uncovered month for Part D — generally paid for as long as you have that coverage.</p>
<h3>What if I have a health savings account (HSA)?</h3>
<p>Enrolling in Medicare ends your eligibility to contribute to an HSA — and if you delay Part A past 65 and sign up later, Part A coverage can backdate up to 6 months, which can make HSA contributions in that backdated window a tax problem. Many people stop HSA contributions at least 6 months before applying for Medicare. This one deserves a conversation with your tax professional before your birthday, not after.</p>
</div>
</section>
${CTA_BAND}
<section>
<div class="container">
${DISCLAIMER}
</div>
</section>`;

export const MEDICARE_PERIODS_BODY_HTML = `${THEME_TOGGLE}
<section class="hero">
<div class="container">
<div class="hero-copy" style="max-width: 760px;">
<span class="badge">Medicare education · Enrollment periods</span>
<h1>Which Medicare enrollment period are you in — and what can you change during it?</h1>
<p class="lede">Medicare doesn't have one sign-up season — it has several windows, each with its own job, its own dates, and its own consequences. Here's the whole map.</p>
<div class="hero-actions">
<a class="btn btn-primary btn-lg" href="/medicare/#one-pager">Get the free one-page breakdown</a>
<a class="btn btn-ghost btn-lg" href="tel:2162843615">Call (216) 284-3615</a>
</div>
</div>
</div>
</section>
<section>
<div class="container">
<div class="section-header">
<span class="eyebrow">The whole map</span>
<h2>How many Medicare enrollment periods are there — and what does each one do?</h2>
</div>
<div class="grid-2">
<div class="card">
<h3>Initial Enrollment Period (IEP)</h3>
<p><strong>When:</strong> the 7 months around your 65th birthday.<br/><strong>Who it's for:</strong> people new to Medicare.<br/><strong>What it does:</strong> your first chance to sign up for Part A and Part B.</p>
</div>
<div class="card">
<h3>Annual Enrollment Period (AEP)</h3>
<p><strong>When:</strong> October 15 – December 7, every year.<br/><strong>Who it's for:</strong> everyone with Medicare.<br/><strong>What it does:</strong> review and change coverage; changes take effect January 1.</p>
</div>
<div class="card">
<h3>Medicare Advantage Open Enrollment Period</h3>
<p><strong>When:</strong> January 1 – March 31, every year.<br/><strong>Who it's for:</strong> people already in a Medicare Advantage plan.<br/><strong>What it does:</strong> make one change — switch Advantage plans or return to Original Medicare.</p>
</div>
<div class="card">
<h3>General Enrollment Period (GEP)</h3>
<p><strong>When:</strong> January 1 – March 31, every year.<br/><strong>Who it's for:</strong> people who missed their IEP.<br/><strong>What it does:</strong> sign up for Part A and Part B; coverage starts the month after you enroll — and late penalties may apply.</p>
</div>
<div class="card">
<h3>Special Enrollment Periods (SEPs)</h3>
<p><strong>When:</strong> triggered by life events.<br/><strong>Who it's for:</strong> people whose circumstances changed.<br/><strong>What it does:</strong> opens your own window — losing employer coverage, moving, and similar events.</p>
</div>
</div>
</div>
</section>
<section class="section-surface">
<div class="container" style="max-width: 760px;">
<span class="eyebrow">The fall review</span>
<h2>The Annual Enrollment Period: when is it, and what should you review?</h2>
<p><strong>October 15 through December 7</strong>, every year. Anyone with Medicare can use it to join, switch, or drop a Medicare Advantage plan or a Part D drug plan, or to move between Original Medicare and Medicare Advantage. Anything you change takes effect <strong>January 1</strong>.</p>
<p>Why review at all? Because plans change even when you don't. Each fall, your plan sends an <strong>Annual Notice of Change</strong> (it should arrive by the end of September) describing what's different next year — costs, covered drugs, networks. Before December 7, three questions are worth five minutes:</p>
<ol>
<li><strong>Did your prescriptions change?</strong> Your plan's covered-drug list may have changed too.</li>
<li><strong>Are your doctors and pharmacy still in the plan next year?</strong> Networks change.</li>
<li><strong>What did your plan change for next year?</strong> Compare the premium, copays, and maximum out-of-pocket in the notice against how you actually used your care.</li>
</ol>
<p>If you do nothing, you generally stay in your current plan — even if its costs or coverage changed. "No change" is a decision too; make it on purpose.</p>
</div>
</section>
<section>
<div class="container" style="max-width: 760px;">
<span class="eyebrow">A second look</span>
<h2>In a Medicare Advantage plan? What can you change January through March?</h2>
<p><strong>January 1 through March 31.</strong> If you're enrolled in a Medicare Advantage plan, this window lets you make <strong>one</strong> change: switch to a different Advantage plan, or leave Advantage and return to Original Medicare (adding a standalone Part D plan if you return). It isn't open to people on Original Medicare, and it can't be used to join Advantage for the first time — that happens during AEP or when you're first eligible.</p>
<span class="eyebrow">Windows life opens</span>
<h2>What life changes open a Special Enrollment Period?</h2>
<p>Some windows aren't on the calendar — they're triggered. Losing job-based coverage, retiring, or moving out of your plan's service area can open a Special Enrollment Period with its own deadline. The most common: when employer coverage ends, you generally get <strong>8 months</strong> to sign up for Part B without a penalty. These clocks run whether or not anyone reminds you — if a big change is coming, learn your date before the change, not after.</p>
</div>
</section>
<section class="section-surface">
<div class="container" style="max-width: 760px;">
<span class="eyebrow">Find yours</span>
<h2>Which window are you in?</h2>
<ul>
<li><strong>Turning 65 this year:</strong> your IEP. <a href="/medicare/turning-65/">Turning 65, explained →</a></li>
<li><strong>On Medicare and it's fall:</strong> AEP — run the three questions above.</li>
<li><strong>In an Advantage plan and unhappy in the new year:</strong> the January–March Advantage window.</li>
<li><strong>Missed your first window:</strong> the GEP, January–March — and ask about penalties before you enroll, not after.</li>
<li><strong>Retiring, losing coverage, or moving:</strong> you likely have a Special Enrollment Period — with a deadline attached.</li>
</ul>
<p>New to the basics? Start with <a href="/medicare/">the ABCD of Medicare →</a></p>
</div>
</section>
<section class="section-surface">
<div class="container" style="max-width: 760px;">
<div class="section-header">
<span class="eyebrow">Questions, answered straight</span>
<h2>Frequently asked questions</h2>
</div>
<h3>When is the Annual Enrollment Period?</h3>
<p>October 15 through December 7, every year. Anyone with Medicare can join, switch, or drop a Medicare Advantage plan or a Part D drug plan, or move between Original Medicare and Medicare Advantage. Anything you change takes effect January 1.</p>
<h3>What if I do nothing during the Annual Enrollment Period?</h3>
<p>You generally stay in your current plan — even if its costs, covered drugs, or network changed for next year. “No change” is a decision too; it's worth five minutes with your plan's Annual Notice of Change before December 7.</p>
<h3>Can I change my Medicare Advantage plan in January?</h3>
<p>Yes — the Medicare Advantage Open Enrollment Period runs January 1 through March 31. If you're in an Advantage plan, you can make one change: switch to a different Advantage plan, or return to Original Medicare and add a standalone Part D plan. It isn't open to people on Original Medicare, and it can't be used to join Advantage for the first time.</p>
<h3>I missed my first enrollment window. What now?</h3>
<p>The General Enrollment Period runs January 1 through March 31 each year for people who missed their Initial Enrollment Period. Coverage starts the month after you enroll — and late-enrollment penalties may apply, so ask about them before you enroll, not after.</p>
<h3>I'm retiring soon. Do I get my own enrollment window?</h3>
<p>Usually, yes. Losing job-based coverage opens a Special Enrollment Period — for Part B, you generally get 8 months from when the coverage or the job ends to enroll without a penalty. These clocks run whether or not anyone reminds you, so learn your date before the change, not after.</p>
</div>
</section>
${CTA_BAND}
<section>
<div class="container">
${DISCLAIMER}
</div>
</section>`;
