// /cleveland-credit-card-processing-costs — citable education page built
// from the approved 2026-10-22 draft. Copy quotes NO RIG rates or program
// terms; the only offer is the Processing Cost Review itself.
const THEME_TOGGLE = `<div class="funnel-theme-control"><button aria-label="Toggle light or dark mode" class="theme-toggle" id="theme-toggle" type="button"><svg fill="none" id="theme-icon" viewbox="0 0 16 16"><path d="M13.5 9.8A6 6 0 0 1 6.2 2.5a6 6 0 1 0 7.3 7.3z" fill="currentColor"></path></svg><span>Theme</span></button></div>`;

export const PROCESSING_COST_BODY_HTML = `${THEME_TOGGLE}
<section class="hero">
<div class="container">
<div class="hero-copy" style="max-width: 760px;">
<span class="badge">Merchant services education · Greater Cleveland</span>
<h1>How Much Should a Small Business in Cleveland Pay for Credit Card Processing?</h1>
<p class="lede">Most small businesses pay somewhere between roughly 2% and 3.5% of every card dollar they take — all in, after every fee. Where you land in that range depends on the cards your customers use, your average ticket, and how your processor prices you.</p>
<div class="hero-actions">
<a class="btn btn-primary btn-lg" href="#review">Get your Cost of Acceptance Report</a>
<a class="btn btn-ghost btn-lg" href="tel:2162843615">Call (216) 284-3615</a>
</div>
<p class="hero-microcopy">Free written review · No obligation · A person reads every statement</p>
</div>
</div>
</section>
<section>
<div class="container" style="max-width: 760px;">
<p>The number that matters isn't the rate you were quoted. It's your <strong>cost of acceptance</strong>: everything you paid to accept cards last month, divided by the card volume you ran. If you've never done that division, you don't actually know your rate — and neither does your processor's quote sheet.</p>
<p>Reserve Investment Group is an insurance agency in South Euclid serving Greater Cleveland businesses. Our merchant-services team reads processing statements the way we read insurance policies: line by line, in plain English, before anyone talks about switching anything.</p>
</div>
</section>
<section class="section-surface">
<div class="container" style="max-width: 760px;">
<div class="section-header">
<span class="eyebrow">The three buckets</span>
<h2>Where does the money actually go? The three buckets</h2>
</div>
<p>Every dollar you pay to accept cards lands in one of three buckets. Learning to sort your statement into them is the whole skill.</p>
<div class="card" style="margin-bottom: var(--space-4);">
<h3>Bucket 1 — Pass-through</h3>
<p>Interchange (paid to the customer's card-issuing bank) plus card-brand assessments (Visa, Mastercard). Nobody can change these — not us, not your processor, not anyone. They are published rates, and they are the honest floor under every processor's price. When a salesperson claims they can cut your interchange, they are telling you something that isn't true.</p>
</div>
<div class="card" style="margin-bottom: var(--space-4);">
<h3>Bucket 2 — Markup</h3>
<p>What your processor charges on top of pass-through: its percentage and per-transaction markup, plus monthly platform and service fees. <strong>This is the only bucket where processors actually differ</strong> — and it's the bucket your quote sheet is designed to keep blurry.</p>
</div>
<div class="card">
<h3>Bucket 3 — Junk</h3>
<p>Fees that buy you nothing: PCI non-compliance penalties (commonly $19.95–$60 a month for an unfiled form — roughly a 20-minute cure once you know it's there), inflated assessment pass-throughs, batch fees, statement fees, monthly minimums that charge you for not processing enough. Junk rarely announces itself. It accumulates a line at a time, statement after statement.</p>
</div>
</div>
</section>
<section>
<div class="container" style="max-width: 760px;">
<div class="section-header">
<span class="eyebrow">Run the test</span>
<h2>How do I know if I'm overpaying for credit card processing?</h2>
</div>
<p>Run this test first — it takes one statement and a calculator: <strong>add up every fee your processor took last month, then divide by your total card volume.</strong> That percentage is your true cost of acceptance. Compare it honestly to your volume and ticket size: a busy café with small tickets runs higher than a contractor with $2,000 invoices, so judge your number against your own mix — but if the division surprises you, that's the finding.</p>
<p>Beyond the number, these are the signs that show up on statements we read:</p>
<ul>
<li><strong>Your effective rate crept up</strong> without your volume or card mix changing.</li>
<li><strong>A PCI non-compliance fee</strong> appears month after month. That one is a form you haven't filed, not a service you're receiving.</li>
<li><strong>You're leasing a terminal.</strong> The math on a typical lease is brutal: $59.95 a month over a 48-month lease is $2,877.60 — for a terminal that sells outright for a few hundred dollars.</li>
<li><strong>You can't tell which bucket a fee belongs to.</strong> A statement an owner can't read is not an accident. Opacity is a pricing strategy — the processor's, not yours.</li>
<li><strong>Your "rate" is one number</strong> but your statement has pages of line items. One quoted rate plus pages of charges means the charges are where the money is.</li>
</ul>
</div>
</section>
<section class="section-surface">
<div class="container">
<div class="section-header">
<span class="eyebrow">When rates rise</span>
<h2>My processor raised my rates. What can a Cleveland business do?</h2>
</div>
<p style="max-width: 760px;">Start with the statement, not with a new quote. A rate increase lands in bucket 2 or bucket 3, and until you know which, you can't negotiate, switch, or stay with any confidence.</p>
<div class="steps-row">
<div class="step-item">
<div class="step-num">1</div>
<h3 style="font-size: var(--text-base);">Do the division</h3>
<p style="font-size: var(--text-sm);">Compute last month's cost of acceptance. That is the number any alternative has to beat — on the same transactions, with every fee in.</p>
</div>
<div class="step-item">
<div class="step-num">2</div>
<h3 style="font-size: var(--text-base);">Sort the fees into the three buckets</h3>
<p style="font-size: var(--text-sm);">Keep pass-through out of the argument (nobody controls it), and put the increase and the junk under the light.</p>
</div>
<div class="step-item">
<div class="step-num">3</div>
<h3 style="font-size: var(--text-base);">Ask your current processor the questions, in writing</h3>
<p style="font-size: var(--text-sm);">Why did the rate change? Which fees are pass-through and which are markup? What is the PCI fee for, and what cures it? What are the contract's renewal and cancellation terms? A processor who won't answer in writing has answered.</p>
</div>
<div class="step-item">
<div class="step-num">4</div>
<h3 style="font-size: var(--text-base);">Compare against the same month's actual transactions</h3>
<p style="font-size: var(--text-sm);">Every recurring charge and switching cost included — never against a "typical" month the salesperson chose.</p>
</div>
</div>
</div>
</section>
<section>
<div class="container" style="max-width: 760px;">
<div class="section-header">
<span class="eyebrow">One test</span>
<h2>The register test: what's a surcharge, whatever it's called?</h2>
</div>
<p>One test cuts through all the vocabulary — "non-cash adjustment," "service fee," "cash discount program." <strong>If the price goes up when a customer pays by card, that fee is a surcharge in the card networks' eyes, whatever the sign on the register calls it</strong> — and surcharges carry network rules: caps, disclosure, and no surcharging debit cards, ever. A true cash discount is the reverse: the posted price <em>is</em> the card price, and cash pays less. Programs that blur that line put the compliance risk on the business, not the rep who sold it. If you're offered a "zero-fee" program, ask which side of the register test it sits on, and ask for the answer in writing.</p>
</div>
</section>
<section class="section-navy" id="review">
<div class="container" style="max-width: 760px;">
<div class="section-header">
<span class="eyebrow">The Processing Cost Review</span>
<h2 style="color: var(--color-text-inverse);">A second opinion on your statement, in writing</h2>
</div>
<p>Send us last month's processing statement. You'll get your <strong>Cost of Acceptance Report</strong>.</p>
<p>Within one business day, a real person on our team reads your statement and sends you a written report:</p>
<ul>
<li><strong>Your true cost of acceptance</strong> — everything you paid to accept cards, in cents of every dollar you ran. Not the rate you were quoted. The rate you paid.</li>
<li><strong>Every fee, translated</strong> — each line in plain English, sorted into the three buckets: what nobody can change, what can move, and what shouldn't be there at all.</li>
<li><strong>The questions worth asking your current processor</strong> — in writing, whether you ever process with us or not.</li>
</ul>
<p>The report is yours to keep either way. There is no pitch inside it. If you later want to see what we'd propose, that conversation starts from your report — and we'll price the same transactions under any quote you're holding, ours included, every fee in, so you can check the math yourself.</p>
<p><em>We take 25 reviews a month. A person reads every statement — that's the whole reason for the cap.</em></p>
<p><strong>Comment AUDIT on our posts, or call <a href="tel:2162843615" style="color:inherit;">(216) 284-3615</a> to start yours.</strong></p>
<div class="hero-actions" style="margin-top: var(--space-8);">
<a class="btn btn-inverse btn-lg" href="/merchant-services/">Request a statement review</a>
<a class="btn btn-ghost btn-lg" href="https://processingcostreview.com" rel="noopener" target="_blank">The Processing Cost Review</a>
</div>
</div>
</section>
<section class="section-surface">
<div class="container" style="max-width: 760px;">
<div class="section-header">
<span class="eyebrow">Questions, answered straight</span>
<h2>Frequently asked questions</h2>
</div>
<h3>How much should a small business pay for credit card processing?</h3>
<p>Most small businesses pay roughly 2% to 3.5% of card volume all in, depending on card mix, average ticket, and pricing structure. The only honest number is your own: total fees for the month divided by total card volume. That's your cost of acceptance, and it's the number every quote should be judged against.</p>
<h3>How do I know if I'm overpaying for processing?</h3>
<p>Compute your cost of acceptance and sort your fees into pass-through (unchangeable), markup (where processors differ), and junk (fees that buy nothing — PCI non-compliance penalties are the most common). If your statement won't sort, or your effective rate crept up without explanation, you're likely paying more than you should.</p>
<h3>My processor raised my rates. How can I lower my processing fees?</h3>
<p>First, identify what actually rose — markup, junk, or pass-through changes you can't control. Then ask your processor the specific questions in writing, and judge any alternative by pricing the same month's transactions with every fee and switching cost included. A written statement review does exactly this; that's what our Processing Cost Review is.</p>
<h3>What is a Processing Cost Review?</h3>
<p>It's a free review by Reserve Investment Group: you send last month's processing statement, a real person on our team reads it, and you receive a written Cost of Acceptance Report — your true rate in plain English, every fee translated into the three buckets, and the questions worth asking your current processor. The report is yours to keep whether you switch processors or not.</p>
<h3>What does the Processing Cost Review cost?</h3>
<p>Nothing. The Review is free, with no obligation — and the report is yours to keep either way. We do it because educated business owners become long-term relationships; some become processing clients, and most send us their friends either way.</p>
<h3>I was offered a free terminal. Should I take it?</h3>
<p>Ask what it's attached to. Free terminals are never unattached — there's a lease, a term, or a rate holding them up, and the total usually exceeds what the terminal costs outright. If you want the attachment priced, send the statement or the lease paperwork with your review request and your report will price it.</p>
<p style="margin-top: var(--space-8);">Turning 65 this year, or helping a parent who is? Our companion education page: <a href="/medicare-answers-cleveland/">Medicare Answers for Cleveland →</a></p>
</div>
</section>`;
