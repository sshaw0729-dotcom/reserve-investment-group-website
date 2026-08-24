// AUTO-GENERATED from the static prototype build. Safe to hand-edit copy/markup here.
export const MERCHANT_BODY_HTML = `<div class="funnel-theme-control"><button aria-label="Toggle light or dark mode" class="theme-toggle" id="theme-toggle" type="button"><svg fill="none" id="theme-icon" viewbox="0 0 16 16"><path d="M13.5 9.8A6 6 0 0 1 6.2 2.5a6 6 0 1 0 7.3 7.3z" fill="currentColor"></path></svg><span>Theme</span></button></div>
<section class="hero">
<div class="container hero-grid">
<div class="hero-copy">
<span class="badge">Third-party processing options</span>
<h1>Better understand<br/>your card-processing costs.</h1>
<p class="lede">Request a complimentary review to better understand interchange, processor markup, monthly fees, and other statement charges. Secure document transfer, if needed, is arranged after initial contact.</p>
<div class="hero-actions">
<a class="btn btn-primary btn-lg" href="#audit-form">Request a statement review</a>
<a class="btn btn-ghost btn-lg" href="#calculator">Compare illustrative processing costs</a>
</div>
<p class="hero-microcopy">No obligation · Typical response within 24 hours · Information handled under our Privacy Policy</p>
</div>
<div class="hero-media">
<img alt="Coffee shop owner processing a payment on a card terminal" loading="eager" src="/images/rig-funnel/hero-merchant-services.webp"/>
</div>
</div>
</section>
<div class="trust-bar">
<div class="container">
<span>Complimentary statement review</span>
<span>Typical response within 24 hours</span>
<span>Third-party processing options</span>
<span>(216) 284-3615</span>
</div>
</div>
<section class="section-surface">
<div class="container">
<div class="section-header">
<span class="eyebrow">How it works</span>
<h2>Four steps to understanding your costs</h2>
</div>
<div class="steps-row">
<div class="step-item">
<div class="step-num">1</div>
<h3 style="font-size: var(--text-base);">Request a secure statement review</h3>
<p style="font-size: var(--text-sm);">Start with your contact information; do not upload documents here.</p>
</div>
<div class="step-item">
<div class="step-num">2</div>
<h3 style="font-size: var(--text-base);">We analyze line-by-line</h3>
<p style="font-size: var(--text-sm);">Available statement charges can be organized for discussion.</p>
</div>
<div class="step-item">
<div class="step-num">3</div>
<h3 style="font-size: var(--text-base);">Review your current cost structure</h3>
<p style="font-size: var(--text-sm);">Plain-language breakdown, no jargon.</p>
</div>
<div class="step-item">
<div class="step-num">4</div>
<h3 style="font-size: var(--text-base);">Complimentary review, no obligation</h3>
<p style="font-size: var(--text-sm);">Discuss available alternatives and their qualifications.</p>
</div>
</div>
</div>
</section>
<section id="audit-form">
<div class="container hero-grid" style="align-items:flex-start;">
<div>
<span class="eyebrow">Complimentary statement review</span>
<h2>Request a secure merchant-statement review</h2>
<p class="lede">We can help organize the available cost information and discuss third-party processing alternatives. Actual pricing and approval depend on provider terms and underwriting.</p>
<div class="grid-2" style="margin-top: var(--space-10);">
<div class="card"><div class="stat-value">24 hrs</div><p class="stat-label">Typical response to your request</p></div>
<div class="card"><div class="stat-value">Secure</div><p class="stat-label">Document transfer arranged after initial contact</p></div>
</div>
</div>
<div class="lead-form">
<div aria-label="Start a secure merchant-statement review request" class="dropzone" id="dropzone" role="button" tabindex="0">
<svg fill="none" stroke="currentColor" stroke-width="1.8" viewbox="0 0 24 24"><path d="M12 16V4M7 9l5-5 5 5"></path><path d="M4 16v3a2 2 0 002 2h12a2 2 0 002-2v-3"></path></svg>
<h3 style="font-size: var(--text-base); margin-bottom: var(--space-2);">Start a secure review request</h3>
<p style="font-size: var(--text-sm);">Click to provide contact information. Do not upload documents here.</p>
<input id="statement-file" style="display:none;" type="button"/>
</div>
<div class="divider-or">or</div>
<a class="btn btn-ghost btn-full" href="#calculator">Compare illustrative processing costs instead</a>
<form data-hidden-until-file="" id="audit-details-form" style="margin-top: var(--space-8); display:none;">
<h3 style="margin-bottom: var(--space-5);">Where should we send your audit?</h3>
<div class="field"><label for="bname">Business name</label><input id="bname" required="" type="text"/></div>
<div class="form-row"><div class="field"><label for="bfname">First name</label><input id="bfname" name="firstName" required="" type="text"/></div><div class="field"><label for="blname">Last name</label><input id="blname" name="lastName" required="" type="text"/></div></div>
<div class="field"><label for="bemail">Email</label><input id="bemail" name="email" required="" type="email"/></div>
<div class="field"><label for="bphone">Phone</label><input id="bphone" name="phone" required="" type="tel"/></div>
<p class="lead-form-privacy-notice">Do not upload or submit merchant statements, account numbers, tax documents, or other sensitive information here. Secure document transfer, if needed, will be arranged after initial contact.</p>
<label class="field-check"><input name="consent" required="" type="checkbox"/> I agree to be contacted about this review. Consent is not a condition of purchase. See our <a href="/privacy/">Privacy Policy</a>.</label>
<button class="btn btn-primary btn-full" style="margin-top: var(--space-4);" type="submit">Request my statement review</button>
</form>
<div class="success-panel" hidden="" id="audit-success">
<div class="success-icon"><svg fill="none" viewbox="0 0 16 16"><path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"></path></svg></div>
<h3>Request received.</h3>
<p>A member of our team will typically respond within 24 hours to discuss next steps.</p>
</div>
</div>
</div>
</section>
<section class="section-navy" id="calculator">
<div class="container">
<div class="section-header">
<span class="eyebrow">Quick estimate</span>
<h2 style="color: var(--color-text-inverse);">Compare illustrative processing costs</h2>
</div>
<div class="grid-2" style="max-width: 780px; margin-inline:auto; align-items: center;">
<div class="card" style="background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.15);">
<div class="field"><label style="color: color-mix(in srgb, var(--color-text-inverse) 72%, transparent);">Average monthly card volume</label><input id="calc-volume" placeholder="$25,000" type="text"/></div>
<div class="field"><label style="color: color-mix(in srgb, var(--color-text-inverse) 72%, transparent);">Current effective rate (if known)</label><input id="calc-rate" placeholder="3.2%" type="text"/></div>
<div class="field"><label style="color: color-mix(in srgb, var(--color-text-inverse) 72%, transparent);">Illustrative comparison rate</label><input id="calc-compare-rate" placeholder="2.8%" type="text"/></div>
<button class="btn btn-primary btn-full" id="calc-btn">Compare estimated processing costs</button>
</div>
<div class="card" id="calc-result" style="background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.15); text-align:center;">
<p class="stat-label" style="color: color-mix(in srgb, var(--color-text-inverse) 60%, transparent);">Illustrative monthly cost difference</p>
<div class="stat-value" id="calc-output">—</div>
<p style="font-size: var(--text-xs); color: color-mix(in srgb, var(--color-text-inverse) 55%, transparent); margin-top: var(--space-4);">Illustration only. Actual pricing depends on transaction mix, business type, equipment, provider terms, and underwriting.</p>
</div>
</div>
</div>
</section>
<section class="section-surface">
<div class="container" style="max-width: 760px;">
<div class="section-header">
<span class="eyebrow">Common objections</span>
<h2>Frequently asked questions</h2>
</div>
<details class="accordion-item" open="">
<summary>I'm locked into a contract with my current processor. <svg class="chevron" fill="none" viewbox="0 0 18 18"><path d="M9 3v12M3 9h12" stroke="currentColor" stroke-linecap="round" stroke-width="1.6"></path></svg></summary>
<p>Contract terms vary. We can help identify questions to ask your current or prospective provider, but legal interpretation should be handled by qualified counsel.</p>
</details>
<details class="accordion-item">
<summary>What about PCI compliance? <svg class="chevron" fill="none" viewbox="0 0 18 18"><path d="M9 3v12M3 9h12" stroke="currentColor" stroke-linecap="round" stroke-width="1.6"></path></svg></summary>
<p>PCI requirements depend on the provider, equipment, transaction environment, and merchant responsibilities. Confirm applicable requirements with the processing provider.</p>
</details>
<details class="accordion-item">
<summary>Is my statement data safe? <svg class="chevron" fill="none" viewbox="0 0 18 18"><path d="M9 3v12M3 9h12" stroke="currentColor" stroke-linecap="round" stroke-width="1.6"></path></svg></summary>
<p>Information is handled according to RIG's Privacy Policy and applicable retention practices. Secure document transfer, if needed, will be arranged after initial contact.</p>
</details>
<details class="accordion-item">
<summary>Do I need to lease new equipment? <svg class="chevron" fill="none" viewbox="0 0 18 18"><path d="M9 3v12M3 9h12" stroke="currentColor" stroke-linecap="round" stroke-width="1.6"></path></svg></summary>
<p>Not necessarily — many merchants keep existing hardware or reprogram it. We can review whether alternative equipment or processing arrangements may be appropriate.</p>
</details>
</div>
</section>
<section class="section-navy">
<div class="container" style="text-align:center;">
<h2 style="color: var(--color-text-inverse);">Better understand your processing costs</h2>
<p class="lede" style="max-width: 520px; margin-inline:auto;">No obligation. A member of our team will typically respond within 24 hours.</p>
<a class="btn btn-inverse btn-lg" href="#audit-form" style="margin-top: var(--space-8);">Request a statement review</a>
</div>
</section>
`;
