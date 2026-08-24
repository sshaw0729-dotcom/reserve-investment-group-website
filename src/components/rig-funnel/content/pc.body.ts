// AUTO-GENERATED from the static prototype build. Safe to hand-edit copy/markup here.
export const PC_BODY_HTML = `<div class="funnel-theme-control"><button aria-label="Toggle light or dark mode" class="theme-toggle" id="theme-toggle" type="button"><svg fill="none" id="theme-icon" viewbox="0 0 16 16"><path d="M13.5 9.8A6 6 0 0 1 6.2 2.5a6 6 0 1 0 7.3 7.3z" fill="currentColor"></path></svg><span>Theme</span></button></div>
<section class="hero">
<div class="container hero-grid">
<div class="hero-copy">
<span class="badge">Auto · Home · Renters · Condo · Commercial</span>
<h1>Explore coverage options<br/>with an independent agent.</h1>
<p class="lede">Tell us what you need to protect. A licensed insurance agent can review available options from the carriers RIG represents, based on your needs, eligibility, and carrier availability.</p>
<div class="hero-actions">
<a class="btn btn-primary btn-lg" href="#quote-form">Request a complimentary coverage review</a>
</div>
<p class="hero-microcopy">No obligation · Takes about 3 minutes · Reviewed by a licensed insurance agent</p>
</div>
<div class="hero-media">
<img alt="Family standing in front of their suburban home at golden hour" loading="eager" src="/images/rig-funnel/hero-pc-insurance.webp"/>
</div>
</div>
</section>
<div class="trust-bar">
<div class="container">
<span>Available carrier options</span>
<span>Licensed independent agents</span>
<span>Potential multi-policy discounts</span>
<span>(216) 284-3615</span>
</div>
</div>
<section class="section-surface" id="coverage-types">
<div class="container">
<div class="section-header">
<span class="eyebrow">What are you covering?</span>
<h2>Pick a coverage type to start</h2>
</div>
<div class="grid-4">
<div class="card" style="text-align:center;">
<div class="path-icon" style="margin-inline:auto; margin-bottom: var(--space-4);"><svg fill="none" stroke="currentColor" stroke-width="1.8" viewbox="0 0 24 24"><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11"></path><rect height="7" rx="2" width="18" x="3" y="11"></rect><circle cx="7.5" cy="18" r="1.5"></circle><circle cx="16.5" cy="18" r="1.5"></circle></svg></div>
<h3 style="font-size: var(--text-base);">Auto</h3>
<p style="font-size: var(--text-sm);">Liability, collision &amp; comprehensive</p>
</div>
<div class="card" style="text-align:center;">
<div class="path-icon" style="margin-inline:auto; margin-bottom: var(--space-4);"><svg fill="none" stroke="currentColor" stroke-width="1.8" viewbox="0 0 24 24"><path d="M3 11l9-8 9 8"></path><path d="M5 10v10h14V10"></path></svg></div>
<h3 style="font-size: var(--text-base);">Home</h3>
<p style="font-size: var(--text-sm);">Homeowners &amp; dwelling coverage</p>
</div>
<div class="card" style="text-align:center;">
<div class="path-icon" style="margin-inline:auto; margin-bottom: var(--space-4);"><svg fill="none" stroke="currentColor" stroke-width="1.8" viewbox="0 0 24 24"><rect height="18" rx="1.5" width="16" x="4" y="3"></rect><path d="M8 8h8M8 12h8M8 16h4"></path></svg></div>
<h3 style="font-size: var(--text-base);">Renters &amp; Condo</h3>
<p style="font-size: var(--text-sm);">Personal property &amp; liability</p>
</div>
<div class="card" style="text-align:center;">
<div class="path-icon" style="margin-inline:auto; margin-bottom: var(--space-4);"><svg fill="none" stroke="currentColor" stroke-width="1.8" viewbox="0 0 24 24"><rect height="11" rx="1.5" width="13" x="3" y="7"></rect><path d="M16 11h3l2 3v4h-5"></path><circle cx="7.5" cy="18.5" r="1.5"></circle><circle cx="17.5" cy="18.5" r="1.5"></circle></svg></div>
<h3 style="font-size: var(--text-base);">Commercial</h3>
<p style="font-size: var(--text-sm);">General liability, BOP &amp; fleet</p>
</div>
</div>
</div>
</section>
<section id="quote-form">
<div class="container hero-grid" style="align-items: flex-start;">
<div>
<span class="eyebrow">Potential multi-policy discounts</span>
<h2>Ask whether combining eligible policies may qualify for discounts</h2>
<p class="lede">Multi-policy discounts vary by carrier, location, coverage, underwriting, and eligibility. A licensed agent can review the options available to you.</p>
<div class="grid-2" style="margin-top: var(--space-10);">
<div class="card">
<div class="stat-value">Options</div>
<p class="stat-label">Potential multi-policy discounts</p>
</div>
<div class="card">
<div class="stat-value">3 min</div>
<p class="stat-label">Average time to complete this form</p>
</div>
</div>
<div class="card" style="margin-top: var(--space-8); background: var(--color-primary-highlight); border-color: transparent;">
<h3 style="font-size: var(--text-base);">Running a business?</h3>
<p style="font-size: var(--text-sm);">Commercial coverage is priced differently from personal lines. <a href="#commercial" style="color: var(--color-primary-hover); font-weight:600; text-decoration: underline;">Jump to commercial coverage →</a></p>
</div>
</div>
<form class="lead-form" id="pc-form">
<div class="step-track">
<div class="step-dot active" data-step-dot="1"></div>
<div class="step-dot" data-step-dot="2"></div>
<div class="step-dot" data-step-dot="3"></div>
</div>
<div class="form-step" data-step="1">
<h3 style="margin-bottom: var(--space-5);">What do you want to insure?</h3>
<div class="field">
<label for="coverage">Coverage type</label>
<select id="coverage" name="coverage" required="">
<option value="">Select one</option>
<option>Auto only</option>
<option>Home only</option>
<option>Auto + Home bundle</option>
<option>Renters</option>
<option>Condo</option>
</select>
</div>
<div class="field">
<label for="zip">ZIP code</label>
<input id="zip" inputmode="numeric" maxlength="5" name="zip" placeholder="44121" required="" type="text"/>
</div>
<button class="btn btn-primary btn-full" data-next="" type="button">Continue →</button>
</div>
<div class="form-step" data-step="2" hidden="">
<h3 style="margin-bottom: var(--space-5);">A little about your current coverage</h3>
<div class="field">
<label for="currently">Currently insured?</label>
<select id="currently" name="currently">
<option>Yes, want to compare</option>
<option>No, shopping for the first time</option>
<option>Not sure</option>
</select>
</div>
<div class="field">
<label for="renewal">Policy renewal date (if known)</label>
<input id="renewal" name="renewal" placeholder="MM/YYYY" type="text"/>
</div>
<div class="hero-actions" style="margin-top: var(--space-2);">
<button class="btn btn-ghost" data-back="" type="button">← Back</button>
<button class="btn btn-primary" data-next="" type="button">Continue →</button>
</div>
</div>
<div class="form-step" data-step="3" hidden="">
<h3 style="margin-bottom: var(--space-5);">Where should we send your comparison?</h3>
<div class="form-row">
<div class="field"><label for="fname">First name</label><input id="fname" name="fname" required="" type="text"/></div>
<div class="field"><label for="lname">Last name</label><input id="lname" name="lname" required="" type="text"/></div>
</div>
<div class="field"><label for="phone">Phone</label><input id="phone" name="phone" required="" type="tel"/></div>
<div class="field"><label for="email">Email</label><input id="email" name="email" required="" type="email"/></div>
<p class="lead-form-privacy-notice">Do not submit Social Security numbers, account numbers, policy documents, or other sensitive information through this form.</p>
<label class="field-check"><input name="consent" required="" type="checkbox"/> I agree to be contacted by phone, text, or email about this request. Consent is not a condition of purchase. Message/data rates may apply. See our <a href="/privacy/">Privacy Policy</a>.</label>
<div class="hero-actions" style="margin-top: var(--space-4);">
<button class="btn btn-ghost" data-back="" type="button">← Back</button>
<button class="btn btn-primary btn-full" type="submit">Request my coverage review</button>
</div>
</div>
<div class="success-panel" data-success="" hidden="">
<div class="success-icon"><svg fill="none" viewbox="0 0 16 16"><path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"></path></svg></div>
<h3>You're all set.</h3>
<p>A member of our team will typically respond within 24 hours.</p>
</div>
</form>
</div>
</section>
<section class="section-navy" id="commercial">
<div class="container hero-grid">
<div class="hero-media" style="order:1;">
<img alt="Fleet of branded delivery vans at dawn" loading="lazy" src="/images/rig-funnel/hero-commercial-lines.webp"/>
</div>
<div class="hero-copy">
<span class="eyebrow">Commercial &amp; business coverage</span>
<h2>What kind of work do you do?</h2>
<p class="lede">Business coverage depends on your operations, risk class, location, underwriting, and carrier availability. Tell us about your business so a licensed agent can discuss potentially appropriate coverage options.</p>
<div class="grid-2" style="margin-top: var(--space-8);">
<div class="card" style="background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.15);">
<h3 style="color:var(--color-text-inverse); font-size: var(--text-base);">Certificate assistance</h3>
<p style="font-size: var(--text-sm);">Active policyholders can contact the team for help with certificate requests.</p>
</div>
<div class="card" style="background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.15);">
<h3 style="color:var(--color-text-inverse); font-size: var(--text-base);">A range of business types</h3>
<p style="font-size: var(--text-sm);">Contractors, retail, professional services, transportation &amp; more.</p>
</div>
</div>
<a class="btn btn-inverse btn-lg" href="tel:+12162843615" style="margin-top: var(--space-8);">Call (216) 284-3615 for a business review</a>
</div>
</div>
</section>
<section class="section-surface">
<div class="container" style="max-width: 760px;">
<div class="section-header">
<span class="eyebrow">Common questions</span>
<h2>Frequently asked questions</h2>
</div>
<details class="accordion-item" open="">
<summary>What happens after I request a coverage review? <svg class="chevron" fill="none" viewbox="0 0 18 18"><path d="M9 3v12M3 9h12" stroke="currentColor" stroke-linecap="round" stroke-width="1.6"></path></svg></summary>
<p>Submitting this questionnaire does not bind coverage. Additional information or authorization may be required before a quote is completed, and a member of the RIG team will contact you about your request.</p>
</details>
<details class="accordion-item">
<summary>Do I have to switch carriers to get a comparison? <svg class="chevron" fill="none" viewbox="0 0 18 18"><path d="M9 3v12M3 9h12" stroke="currentColor" stroke-linecap="round" stroke-width="1.6"></path></svg></summary>
<p>No obligation at all. Requesting a review does not require you to purchase or change coverage.</p>
</details>
<details class="accordion-item">
<summary>How do multi-policy discounts work? <svg class="chevron" fill="none" viewbox="0 0 18 18"><path d="M9 3v12M3 9h12" stroke="currentColor" stroke-linecap="round" stroke-width="1.6"></path></svg></summary>
<p>Multi-policy discounts vary by carrier, location, coverage, underwriting, and eligibility.</p>
</details>
<details class="accordion-item">
<summary>What if I need coverage for my business, not just my home? <svg class="chevron" fill="none" viewbox="0 0 18 18"><path d="M9 3v12M3 9h12" stroke="currentColor" stroke-linecap="round" stroke-width="1.6"></path></svg></summary>
<p>Commercial coverage is quoted separately by risk class — use the commercial section above or call us directly and we'll walk through your specific operations.</p>
</details>
</div>
</section>
<section class="section-navy">
<div class="container" style="text-align:center;">
<h2 style="color: var(--color-text-inverse);">Ready to see your options?</h2>
<p class="lede" style="max-width: 520px; margin-inline:auto;">It takes about three minutes to request a review from a licensed insurance agent.</p>
<a class="btn btn-inverse btn-lg" href="#quote-form" style="margin-top: var(--space-8);">Request a complimentary coverage review</a>
</div>
</section>
`;
