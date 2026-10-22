// Annuity Owner's Checkup (/annuity-checkup/*) — hand-built 2026-10-20
// in the shared funnel pattern, per the funnel blueprint. The opt-in
// form files the magnet request (formId annuity-checkup-optin); the
// application collects qualification fields via data-cfield keys (see
// wireMultiStepForm.ts) and the server tier-scores it (blueprint §4).

const THEME_CONTROL = `<div class="funnel-theme-control"><button aria-label="Toggle light or dark mode" class="theme-toggle" id="theme-toggle" type="button"><svg fill="none" id="theme-icon" viewbox="0 0 16 16"><path d="M13.5 9.8A6 6 0 0 1 6.2 2.5a6 6 0 1 0 7.3 7.3z" fill="currentColor"></path></svg><span>Theme</span></button></div>`;

export const ANNUITY_LANDING_BODY_HTML = `${THEME_CONTROL}
<section class="hero">
<div class="container">
<div class="hero-copy" style="max-width: 760px;">
<span class="badge">Free owner review</span>
<h1>Do you know what your annuity costs you — and what it will pay you?</h1>
<p class="lede">If you own an annuity and your statement might as well be written in another language, you are not alone. The Checkup is a free, no-obligation review that answers four plain questions about the contract you already own — what it costs you, what it will pay you, where your surrender period stands, and whether it is still doing the job you bought it for.</p>
<p class="hero-microcopy">Free · No obligation · Educational — not a sales pitch · Ohio, Michigan &amp; Florida</p>
</div>
</div>
</section>
<div class="trust-bar">
<div class="container">
<span>Licensed &amp; independent</span>
<span>Plain-language guidance, no pressure</span>
<span>Sometimes the answer is: keep what you have</span>
<span>(216) 284-3615</span>
</div>
</div>
<section style="background: var(--color-surface-navy); color: var(--color-text-inverse);">
<div class="container" style="max-width: 820px;">
<div class="section-header">
<span class="eyebrow" style="color: var(--color-primary);">Meet Morgan, RIG&#x27;s AI host</span>
<h2 style="color: var(--color-text-inverse);">The checkup, in Morgan&#x27;s words</h2>
<p style="color: var(--color-text-inverse); opacity: 0.75; font-size: var(--text-sm);">The full video walkthrough is on its way. Until it lands, here are the lines from it that matter:</p>
</div>
<p style="font-family: var(--font-display); font-size: var(--text-xl); line-height: 1.35; margin-bottom: var(--space-6);">&ldquo;If you own an annuity and your statement might as well be written in another language, you&#x27;re not alone.&rdquo;</p>
<p style="font-size: var(--text-lg); line-height: 1.5; margin-bottom: var(--space-6);">&ldquo;This is not a sales pitch, and it is not a recommendation to move anything. Sometimes the answer is: keep exactly what you have.&rdquo;</p>
<p style="font-size: var(--text-lg); line-height: 1.5;">&ldquo;Bring your latest statement. That is the only homework.&rdquo;</p>
</div>
</section>
<section>
<div class="container">
<div class="section-header">
<span class="eyebrow">What the checkup answers</span>
<h2>Four questions, in plain English</h2>
</div>
<div class="path-grid">
<div class="path-card">
<h3>1 · What is it costing you?</h3>
<p>Every fee and rider on your contract, named and priced — including the ones that never show up as a line on your statement.</p>
</div>
<div class="path-card">
<h3>2 · What will it pay you?</h3>
<p>The income it can actually guarantee, the death benefit as it stands today, and what happens if you simply leave it alone.</p>
</div>
<div class="path-card">
<h3>3 · Where is your surrender window?</h3>
<p>How far into the surrender period you are, what it would cost to walk away today, and when that changes.</p>
</div>
<div class="path-card">
<h3>4 · Is it still doing its job?</h3>
<p>Contracts are bought for a reason. Life changes. The checkup measures the contract against the reason you bought it.</p>
</div>
</div>
</div>
</section>
<section class="section-surface">
<div class="container" style="max-width: 720px;">
<div class="section-header">
<span class="eyebrow">Start with the free sheet</span>
<h2>Get the Checkup Sheet</h2>
<p>The one-page sheet walks you through the four questions and decodes the three numbers on every annuity statement — contract value, surrender value, and income base — in plain English. Tell us where to send it and it is yours, free.</p>
</div>
<form class="lead-form" id="annuity-optin-form">
<div class="form-step" data-step="1">
<div class="form-row">
<div class="field"><label for="afname">First name</label><input id="afname" name="firstName" required="" type="text"/></div>
<div class="field"><label for="alname">Last name</label><input id="alname" name="lastName" required="" type="text"/></div>
</div>
<div class="field"><label for="aemail">Email</label><input id="aemail" name="email" required="" type="email"/></div>
<div class="field"><label for="aphone">Mobile phone</label><input id="aphone" name="phone" required="" type="tel"/></div>
<label class="field-check"><input name="consent" required="" type="checkbox"/> Text me at this mobile number and contact me by phone or email about the Annuity Owner&#x27;s Checkup. Consent is not a condition of purchase. Message/data rates may apply; reply STOP to opt out of texts. See our <a href="/privacy/">Privacy Policy</a>.</label>
<button class="btn btn-primary btn-full" type="submit">Send me the checkup sheet</button>
<p style="margin-top: var(--space-4); font-size: var(--text-sm); color: var(--color-text-muted);">Prefer to start the full checkup now? <a href="/annuity-checkup/apply/" style="text-decoration: underline;">Answer a few questions</a> so your checkup is prepared before we talk — no surprises, no pitch.</p>
</div>
<div class="success-panel" data-success="" hidden="">
<h3>Your checkup sheet is ready.</h3>
<p>Read it here any time — and bring your latest annuity statement to work through it.</p>
<p style="margin-top: var(--space-4);"><a class="btn btn-primary" href="/annuity-checkup/checkup-sheet/">Open the Checkup Sheet</a></p>
<p style="margin-top: var(--space-4);">Want your checkup prepared before we talk? <a href="/annuity-checkup/apply/" style="text-decoration: underline;">Answer a few questions</a> and we will do the homework first.</p>
</div>
</form>
</div>
</section>
<section>
<div class="container" style="max-width: 760px;">
<div class="section-header">
<span class="eyebrow">How it works</span>
<h2>How does the Checkup work?</h2>
</div>
<p><strong>1. Read the sheet.</strong> Five minutes with your latest statement. Most owners find at least one number they cannot explain — that is normal, and it is exactly what the checkup is for.</p>
<p><strong>2. Answer a few questions.</strong> The short application tells us what you own and what is on your mind, so your checkup is prepared before we meet. We will never ask for a Social Security number or account credentials.</p>
<p><strong>3. A 30-minute call.</strong> We confirm a time that suits you, walk the four questions with your statement in hand, and you leave with answers — whether or not anything ever changes.</p>
<p style="margin-top: var(--space-6);"><a class="btn btn-primary" href="/annuity-checkup/apply/">Start the checkup application</a></p>
</div>
</section>
<section class="section-surface">
<div class="container" style="max-width: 760px;">
<div class="section-header">
<span class="eyebrow">Questions, answered straight</span>
<h2>Frequently asked questions</h2>
</div>
<h3>My annuity is coming out of its surrender period. What are my options?</h3>
<p>When a surrender period ends, the cost of leaving drops away — but ending isn't automatically the right move, and staying isn't either. Your options generally include leaving the contract as it is, turning on or adjusting income, exchanging into a different contract, or withdrawing some or all of the value. Each carries tax consequences and, for a new contract, a new surrender clock. The Checkup measures your contract against the job you bought it for before anyone weighs those options.</p>
<h3>How do I find out what my annuity is costing me?</h3>
<p>Add up every charge: rider fees (income, death benefit, long-term care), mortality and expense charges on variable contracts, and the spread built into fixed and indexed crediting. Some appear on your statement; some only appear in the contract. The Checkup names and prices each one — including the ones that never show up as a line on your statement.</p>
<h3>What is the difference between contract value, surrender value, and income base?</h3>
<p>Contract value is the running total inside the contract — the scoreboard. Surrender value is what you would actually receive if you cashed out today — the exit price. Income base is a bookkeeping figure used only to calculate guaranteed lifetime income payments — a measuring stick, not money you can withdraw. Our free Checkup Sheet walks through all three with your own statement.</p>
<h3>What happens at the Annuity Owner's Checkup?</h3>
<p>You read the Checkup Sheet with your latest statement, answer a short application so we can prepare, and then sit a 30-minute call where we walk the four questions — what it costs, what it will pay, where your surrender window stands, and whether it is still doing its job — with your statement in hand. You leave with answers whether or not anything ever changes.</p>
<h3>Is the Checkup a sales pitch for a new annuity?</h3>
<p>No. It is a free educational review of the contract you already own, and sometimes the answer is: keep exactly what you have. Nothing is sold on the call, and the review is not a recommendation to buy, sell, surrender, or exchange any contract.</p>
</div>
</section>
<section>
<div class="container" style="max-width: 760px;">
<p style="font-size: var(--text-sm); color: var(--color-text-muted);">The Annuity Owner&#x27;s Checkup is a free educational review offered by Reserve Investment Group, Inc. It is not tax or legal advice, and it is not a recommendation to buy, sell, surrender, or exchange any contract. Annuity guarantees rest on the claims-paying ability of the issuing insurer. Your information is used only to deliver the checkup sheet and, if you ask, to prepare your checkup — see our <a href="/privacy/" style="text-decoration: underline;">Privacy Policy</a>.</p>
</div>
</section>
`;

export const ANNUITY_APPLY_BODY_HTML = `${THEME_CONTROL}
<section class="hero">
<div class="container">
<div class="hero-copy" style="max-width: 760px;">
<span class="badge">Annuity Owner&#x27;s Checkup · Application</span>
<h1>Ready to have your checkup prepared before we talk?</h1>
<p class="lede">A few questions about what you own and what is on your mind — so your 30-minute checkup starts with answers, not intake. No surprises, no pitch, and we will never ask for a Social Security number or account credentials.</p>
<p class="hero-microcopy">About 3 minutes · Free · No obligation</p>
</div>
</div>
</section>
<div class="trust-bar">
<div class="container">
<span>Licensed &amp; independent</span>
<span>Plain-language guidance, no pressure</span>
<span>Sometimes the answer is: keep what you have</span>
<span>(216) 284-3615</span>
</div>
</div>
<section>
<div class="container" style="max-width: 860px;">
<form class="lead-form" id="annuity-apply-form">
<div class="step-track">
<div class="step-dot active" data-step-dot="1"></div>
<div class="step-dot" data-step-dot="2"></div>
<div class="step-dot" data-step-dot="3"></div>
<div class="step-dot" data-step-dot="4"></div>
</div>
<div class="form-step" data-step="1">
<h3 style="margin-bottom: var(--space-5);">About you</h3>
<div class="form-row">
<div class="field"><label for="cfname">First name</label><input id="cfname" name="firstName" required="" type="text"/></div>
<div class="field"><label for="clname">Last name</label><input id="clname" name="lastName" required="" type="text"/></div>
</div>
<div class="field"><label for="cemail">Email</label><input id="cemail" name="email" required="" type="email"/></div>
<div class="field"><label for="cphone">Mobile phone</label><input id="cphone" name="phone" required="" type="tel"/></div>
<label class="field-check"><input name="consent" required="" type="checkbox"/> Text me at this mobile number and contact me by phone or email about my Annuity Owner&#x27;s Checkup, including confirming my appointment. Consent is not a condition of purchase. Message/data rates may apply; reply STOP to opt out of texts. See our <a href="/privacy/">Privacy Policy</a>.</label>
<div class="form-row">
<div class="field"><label for="cstate">State</label><select data-cfield="state" id="cstate"><option>Ohio</option><option>Michigan</option><option>Florida</option><option>Other state</option></select></div>
<div class="field"><label for="cage">Age band</label><select data-cfield="age_band" id="cage"><option>55–59</option><option>60–64</option><option>65–69</option><option>70–75</option><option>76+</option></select></div>
</div>
<button class="btn btn-primary btn-full" data-next="" type="button">Continue →</button>
</div>
<div class="form-step" data-step="2" hidden="">
<h3 style="margin-bottom: var(--space-5);">Your annuity</h3>
<div class="field"><label>Do you currently own an annuity?</label>
<label class="field-check"><input checked="" data-cfield="owns_annuity" name="ac-owns" type="radio" value="Yes"/> Yes, I own one</label>
<label class="field-check"><input data-cfield="owns_annuity" name="ac-owns" type="radio" value="Not yet"/> Not yet — I am considering one</label>
</div>
<div id="ac-owner-fields">
<div class="form-row">
<div class="field"><label for="ctype">Type, if known</label><select class="ac-owner-only" data-cfield="annuity_type" id="ctype"><option>Fixed</option><option>Fixed indexed</option><option>Variable</option><option>Not sure</option></select></div>
<div class="field"><label for="ccarrier">Company / carrier (optional)</label><input class="ac-owner-only" data-cfield="carrier" id="ccarrier" type="text"/></div>
</div>
<div class="form-row">
<div class="field"><label for="cpurchase">Roughly when did you buy it?</label><select class="ac-owner-only" data-cfield="purchase_window" id="cpurchase"><option>Under 3 years ago</option><option>3–5 years ago</option><option>5–7 years ago</option><option>7–10 years ago</option><option>10+ years ago</option><option>Not sure</option></select></div>
<div class="field"><label>Have you started taking income from it?</label>
<label class="field-check"><input class="ac-owner-only" data-cfield="income_started" name="ac-income" type="radio" value="Yes"/> Yes</label>
<label class="field-check"><input checked="" class="ac-owner-only" data-cfield="income_started" name="ac-income" type="radio" value="No"/> No</label>
<label class="field-check"><input class="ac-owner-only" data-cfield="income_started" name="ac-income" type="radio" value="Planned"/> Planned</label>
</div>
</div>
</div>
<div class="field"><label for="cvalue" id="ac-value-label">Approximate contract value</label><select data-cfield="value_band" id="cvalue"><option>Under $100K</option><option>$100–250K</option><option>$250–500K</option><option>$500K–$1M</option><option>$1M+</option><option>Not sure</option></select></div>
<div class="hero-actions" style="margin-top: var(--space-4);">
<button class="btn btn-ghost" data-back="" type="button">← Back</button><button class="btn btn-primary btn-full" data-next="" type="button">Continue →</button>
</div>
</div>
<div class="form-step" data-step="3" hidden="">
<h3 style="margin-bottom: var(--space-5);">What&#x27;s on your mind</h3>
<div class="field"><label>Pick any that sound familiar</label>
<label class="field-check"><input data-cfield="concerns" type="checkbox" value="I don't understand my statement"/> I don&#x27;t understand my statement</label>
<label class="field-check"><input data-cfield="concerns" type="checkbox" value="I'm worried about fees"/> I&#x27;m worried about fees</label>
<label class="field-check"><input data-cfield="concerns" type="checkbox" value="I want to know what income it will pay"/> I want to know what income it will pay</label>
<label class="field-check"><input data-cfield="concerns" type="checkbox" value="I think I was sold the wrong thing"/> I think I was sold the wrong thing</label>
<label class="field-check"><input data-cfield="concerns" type="checkbox" value="Beneficiary / legacy questions"/> Beneficiary / legacy questions</label>
<label class="field-check"><input data-cfield="concerns" type="checkbox" value="Required distributions"/> Required distributions</label>
<label class="field-check"><input data-cfield="concerns" type="checkbox" value="Other"/> Other</label>
</div>
<div class="field"><label for="cother">Anything else on your mind? (optional)</label><input data-cfield="concerns_other" id="cother" type="text"/></div>
<h3 style="margin: var(--space-6) 0 var(--space-5);">The bigger picture</h3>
<div class="field"><label for="cassets">Other retirement savings, roughly (IRA, 401(k), CDs, other — combined)</label><select data-cfield="other_assets_band" id="cassets"><option>Under $100K</option><option>$100–250K</option><option>$250–500K</option><option>$500K–$1M</option><option>$1M+</option><option>Not sure</option></select></div>
<div class="field"><label for="ctimeline">Your timeline</label><select data-cfield="timeline" id="ctimeline"><option>I'm exploring now</option><option>I'd like answers in the next 30–90 days</option><option>Just learning for later</option></select></div>
<div class="hero-actions" style="margin-top: var(--space-4);">
<button class="btn btn-ghost" data-back="" type="button">← Back</button><button class="btn btn-primary btn-full" data-next="" type="button">Continue →</button>
</div>
</div>
<div class="form-step" data-step="4" hidden="">
<h3 style="margin-bottom: var(--space-5);">Booking</h3>
<div class="form-row">
<div class="field"><label for="cformat">Preferred format</label><select data-cfield="preferred_format" id="cformat"><option>Phone</option><option>Zoom</option><option>In person</option></select></div>
<div class="field"><label for="ctime">Best time to reach you</label><select data-cfield="best_time" id="ctime"><option>Morning</option><option>Afternoon</option><option>Evening</option></select></div>
</div>
<p class="lead-form-privacy-notice">Here is what happens next: Bethany from our team will call or text the mobile number you gave us — usually within one business day — to confirm a couple of details and lock in your 30-minute checkup time. Bring your latest annuity statement; that is the only homework. Your answers are used only to prepare your checkup.</p>
<div class="hero-actions" style="margin-top: var(--space-4);">
<button class="btn btn-ghost" data-back="" type="button">← Back</button>
<button class="btn btn-primary btn-full" type="submit">Request my checkup</button>
</div>
</div>
<div class="success-panel" data-success="" hidden="" id="ac-success">
<h3>Application received.</h3>
<p>Thank you — Bethany will call or text you, usually within one business day, to confirm a couple of details and lock in your checkup time. Have your latest annuity statement handy for the call.</p>
<p style="margin-top: var(--space-4);">New to the checkup? <a href="/annuity-checkup/checkup-sheet/" style="text-decoration: underline;">Read the Checkup Sheet</a> while you wait.</p>
</div>
<div class="success-panel" hidden="" id="ac-disqualified">
<h3>Thanks for your interest.</h3>
<p>The Checkup is currently offered to annuity owners in Ohio, Michigan, and Florida, where Reserve Investment Group is licensed. The Checkup Sheet is free to everyone — it walks you through the same four questions with your own statement.</p>
<p style="margin-top: var(--space-4);"><a class="btn btn-primary" href="/annuity-checkup/checkup-sheet/">Open the Checkup Sheet</a></p>
</div>
</form>
</div>
</section>
`;

export const ANNUITY_SHEET_BODY_HTML = `${THEME_CONTROL}
<section class="hero">
<div class="container">
<div class="hero-copy" style="max-width: 760px;">
<span class="badge">Annuity Owner&#x27;s Checkup · The sheet</span>
<h1>How do you read your annuity statement, in plain English?</h1>
<p class="lede">Work through this sheet with your latest annuity statement in hand. Four questions, three decoded numbers, about five minutes — and you will know more about your contract than most owners ever do.</p>
<p class="hero-microcopy">Free · Educational · Bring your latest statement</p>
</div>
</div>
</section>
<div class="trust-bar">
<div class="container">
<span>Licensed &amp; independent</span>
<span>Plain-language guidance, no pressure</span>
<span>Sometimes the answer is: keep what you have</span>
<span>(216) 284-3615</span>
</div>
</div>
<section>
<div class="container" style="max-width: 760px;">
<div class="section-header">
<span class="eyebrow">First, decode the statement</span>
<h2>Why does your statement show three different numbers?</h2>
</div>
<p style="margin-bottom: var(--space-5);">Most annuity statements show at least three different values, and owners routinely mistake one for another. Find all three on yours:</p>
<p style="margin-bottom: var(--space-4);"><strong>Contract value</strong> (sometimes &ldquo;accumulation value&rdquo;) — the running total inside the contract, after credited interest or market performance and after fees come out. It is the number that grows or shrinks — but it is <em>not</em> what you would walk away with today.</p>
<p style="margin-bottom: var(--space-4);"><strong>Surrender value</strong> (sometimes &ldquo;cash surrender value&rdquo;) — what you would actually receive if you cashed the contract out today: the contract value minus any surrender charge still in force, and before any taxes. Early in a contract this can be thousands less than the contract value. This is your real exit price.</p>
<p style="margin-bottom: var(--space-6);"><strong>Income base</strong> (sometimes &ldquo;benefit base&rdquo; or &ldquo;guaranteed withdrawal base&rdquo;) — a bookkeeping number that exists for one purpose only: calculating your guaranteed lifetime income payments, if your contract has an income rider. It often grows at a stated rate that looks generous — but you cannot withdraw it, cash it out, or leave it to anyone as a lump sum. It is a measuring stick for income, not a pile of money.</p>
<p><strong>The one-sentence version:</strong> contract value is the scoreboard, surrender value is the exit price, and income base is the ruler your future income checks are measured with.</p>
</div>
</section>
<section class="section-surface">
<div class="container" style="max-width: 760px;">
<div class="section-header">
<span class="eyebrow">The checkup</span>
<h2>What four questions should every annuity owner ask?</h2>
</div>
<p style="margin-bottom: var(--space-5);"><strong>1. What do I actually own — and what is it costing me?</strong> Find your contract type (fixed, fixed indexed, or variable) and list every rider attached to it. Each rider — income, death benefit, long-term care — carries its own annual charge, often a percentage of the income base rather than the contract value. Add them up. If your statement does not show them clearly, that is itself an answer worth having.</p>
<p style="margin-bottom: var(--space-5);"><strong>2. What will it pay me?</strong> Look in three places: the guaranteed income amount if you turn on the income rider (and at what age it pays best), the death benefit as it stands today (not the day you bought it), and the do-nothing path — what the contract projects if you simply leave it alone. Guaranteed figures and illustrated figures are different animals; know which one you are reading.</p>
<p style="margin-bottom: var(--space-5);"><strong>3. Where am I in my surrender period?</strong> Most contracts charge a penalty for leaving in the early years — commonly starting around 7–10% and stepping down to zero over 6–10 years. Find your contract&#x27;s anniversary date and its surrender schedule. The gap between your contract value and surrender value tells you exactly what leaving today would cost, and the schedule tells you when that cost disappears.</p>
<p style="margin-bottom: var(--space-6);"><strong>4. Is it still doing the job I bought it for?</strong> You bought this contract for a reason — safety, income, growth with a floor, something for the grandkids. Write the reason down in one sentence. Then ask whether the contract, as it stands today, is still the cleanest way to do that job. Sometimes the answer is yes, and you can file the statement away in peace. Sometimes the reason itself has changed — retirement arrived, a spouse died, income needs moved — and the contract never got the memo.</p>
</div>
</section>
<section>
<div class="container" style="max-width: 760px;">
<div class="section-header">
<span class="eyebrow">If you book the free checkup</span>
<h2>What should you bring to your free checkup?</h2>
</div>
<p style="margin-bottom: var(--space-3);">☐ Your latest annuity statement (the whole thing, not just the summary page)</p>
<p style="margin-bottom: var(--space-3);">☐ The contract itself, if you still have it</p>
<p style="margin-bottom: var(--space-3);">☐ This sheet, with anything you could not answer circled</p>
<p style="margin-bottom: var(--space-6);">☐ Your questions — including the one you think sounds basic. There are no basic questions about your own money.</p>
<p><a class="btn btn-primary" href="/annuity-checkup/apply/">Answer a few questions and book the free checkup</a></p>
<p style="margin-top: var(--space-6); font-size: var(--text-sm); color: var(--color-text-muted);">This sheet is educational material from Reserve Investment Group, Inc. It is not tax or legal advice and not a recommendation to buy, sell, surrender, or exchange any contract. Figures on your statement that are labeled illustrated, hypothetical, or projected are not guarantees; annuity guarantees rest on the claims-paying ability of the issuing insurer.</p>
</div>
</section>
<section class="section-surface">
<div class="container" style="max-width: 760px;">
<div class="section-header">
<span class="eyebrow">Questions, answered straight</span>
<h2>Frequently asked questions</h2>
</div>
<h3>What is the difference between contract value and surrender value?</h3>
<p>Contract value is the running total inside the contract. Surrender value is what you would actually receive if you cashed out today — contract value minus any surrender charge still in force, and before taxes. Early in a contract, the gap between them can be thousands of dollars.</p>
<h3>Can I withdraw my income base?</h3>
<p>No. The income base (or benefit base) exists for one purpose only: calculating your guaranteed lifetime income payments, if your contract has an income rider. It is a measuring stick for income, not a balance you can withdraw, cash out, or leave as a lump sum.</p>
<h3>How long do annuity surrender periods usually last?</h3>
<p>Commonly 6 to 10 years, with charges often starting around 7–10% and stepping down to zero. Your contract's anniversary date and surrender schedule say exactly where you stand — the gap between your contract value and surrender value is what leaving today would cost.</p>
<h3>Are the growth figures on my statement guaranteed?</h3>
<p>Only the figures labeled guaranteed. Anything marked illustrated, hypothetical, or projected is not a promise, and annuity guarantees rest on the claims-paying ability of the issuing insurer.</p>
</div>
</section>
`;
