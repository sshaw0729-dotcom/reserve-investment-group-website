// Home — wired to the design-system components. Practice owner approved
// publication and instructed removal of the pre-launch banner 2026-08-08
// (see MISSING-INFORMATION-REGISTER.md, COMPLIANCE-PACKAGE-TEMPLATE.md
// asset CORE-001). Layout and visual language rebuilt 2026-08-11 to match
// the approved Canva "Conversion Website v2" concept (see
// MISSING-INFORMATION-REGISTER.md #21). Rebuilt again 2026-08-11 (later
// same day, per practice owner feedback) to restore the concept's hero
// gradient/floating-card graphic, numbered process sections, and section
// copy that the first pass had simplified away. Reconciled again
// 2026-08-11 against a newer Canva reference, "Reserve Investment Group —
// Interactive Website Concept," per practice owner instruction to match
// it exactly: refreshed hero/section copy, replaced the numbered process
// cards' titles and descriptions, removed the separate four-pillar
// "About Reserve Investment Group" section (not present in this concept),
// and updated the "Why Reserve" and FAQ content. Per practice owner
// decision, the "Do you provide tax or legal advice?" compliance
// disclosure FAQ was dropped in favor of matching the concept's four
// questions exactly. The site's real navigation (not the concept's
// fictional simplified nav) and the LeadForm/submit-lead backend pipeline
// are intentionally unchanged — see FORM-DATA-FLOW.md. All section copy
// below mirrors the qualified, non-promissory language already used in
// src/lib/content/services.ts and src/app/faq/page.tsx — no new claims
// about returns, savings, or guaranteed outcomes. The three hero
// floating-card phrases ("Clarity first," "Your priorities," "Long-term
// focus") are qualitative value statements with no numeric or factual
// claims, so they carry the same compliance posture as the value-pillar
// copy elsewhere on this page.

import { Hero } from "../components/marketing/Hero";
import { CTAStrip } from "../components/marketing/CTAStrip";
import { ApproachTabs } from "../components/marketing/ApproachTabs";
import { HomeConversationStarter } from "../components/marketing/HomeConversationStarter";
import { HeroGraphic } from "../components/marketing/HeroGraphic";
import { AccordionItem } from "../components/ui/Accordion";
import { JsonLd, localBusinessJsonLd } from "../lib/seo/jsonld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// Office address and phone confirmed by practice owner 2026-08-06
// (MISSING-INFORMATION-REGISTER.md #14/#15) — this is the first page in
// the codebase to call localBusinessJsonLd() now that real NAP data
// exists. areaServed intentionally lists South Euclid (the actual office
// city) plus the broader Wave 1 service area already used elsewhere on
// the site, rather than implying an office in every listed city.
//
// 216-284-3615 is confirmed correct and is now the primary number on
// the live Google Business Profile (updated 2026-08-06, pending Google's
// review). See MISSING-INFORMATION-REGISTER.md #15.
const HOME_LOCAL_BUSINESS_SCHEMA = localBusinessJsonLd({
  name: "Reserve Investment Group, Inc",
  description:
    "Financial planning for individuals, families, and business owners in the Greater Cleveland area.",
  url: "https://reserveinvestmentgroup.com/",
  telephone: "216-284-3615",
  address: {
    streetAddress: "1414 S. Green Rd., Suite 105",
    addressLocality: "South Euclid",
    addressRegion: "OH",
    postalCode: "44121",
    addressCountry: "US",
  },
  areaServed: ["South Euclid", "Cleveland", "Cleveland Heights", "Shaker Heights", "Beachwood", "Solon", "Willoughby", "Mentor"],
});

// Compact three-step teaser strip that appears directly under the hero in
// the Canva concept, ahead of the fuller numbered card section below.
// Content confirmed unchanged against the newer "Interactive Website
// Concept" reference (exact match, 2026-08-11).
const HOME_MINI_STEPS = [
  { number: "01", label: "Start with what matters" },
  { number: "02", label: "Build a coordinated plan" },
  { number: "03", label: "Review and adapt" },
];

// Numbered process cards. Titles/descriptions match the "Interactive
// Website Concept" Canva reference (2026-08-11); hrefs point at the real
// service pages (or the schedule page for the third card, matching the
// concept's "Start a conversation" link) rather than a Canva prototype
// placeholder href.
const HOME_PROCESS_CARDS = [
  {
    number: "01",
    title: "Retirement & income",
    description:
      "Bring retirement timing, income needs, cash reserves, Social Security considerations, and investment strategy into one coordinated conversation.",
    linkLabel: "See the planning path",
    href: "/services/financial-planning/",
  },
  {
    number: "02",
    title: "Investment strategy",
    description:
      "Build an investment approach around your goals, time horizon, risk comfort, liquidity needs, and the role each account plays.",
    linkLabel: "Explore your priorities",
    href: "/services/wealth-management/",
  },
  {
    number: "03",
    title: "Life transitions",
    description:
      "Retirement, career changes, business decisions, inheritance, or family responsibilities can reshape the plan. The strategy should evolve with you.",
    linkLabel: "Start a conversation",
    href: "/schedule/",
  },
];

// "Why Reserve" pillars — replaces the earlier "About Reserve Investment
// Group" four-pillar section (Clarity/Preparedness/Flexibility/Options),
// which is not present in the "Interactive Website Concept" reference and
// was removed 2026-08-11 per practice owner instruction to match it
// exactly.
const HOME_WHY_ITEMS = [
  { title: "Understandable", description: "Clear language before financial jargon." },
  { title: "Coordinated", description: "Decisions considered as part of the whole plan." },
  { title: "Disciplined", description: "Long-term thinking over short-term noise." },
  { title: "Personal", description: "A relationship built around your priorities." },
];

// Question phrasing matches the "Interactive Website Concept" Canva
// reference (2026-08-11). The reference's prototype accordion did not
// expose answer text (Canva's click-through prototype interactions
// aren't visible outside Presentation mode, which did not render in this
// session), so the two new answers reuse the qualified, non-promissory
// language already established in src/app/faq/page.tsx rather than
// introducing new claims. Per practice owner decision, the previous
// "Do you provide tax or legal advice?" compliance-disclosure question
// was dropped in favor of matching the reference's four questions exactly.
const HOME_FAQS = [
  {
    q: "What happens in the first conversation?",
    a: "It's a no-obligation discussion about your goals and current planning so we can determine whether working together makes sense.",
  },
  {
    q: "Do I need to have everything organized first?",
    a: "No. We help you organize the relevant financial information as part of the conversation—you don't need to have it organized in advance.",
  },
  {
    q: "Is this only about investments?",
    a: "No. While investment management is often part of the conversation, we also discuss retirement income, cash flow, major financial decisions, and how those pieces fit together—based on what's relevant to your goals and circumstances.",
  },
  {
    q: "How do we know whether working together makes sense?",
    a: "The best way to find out is an introductory conversation—we'll discuss your goals and situation, and you can decide together whether it makes sense to move forward.",
  },
];

export default function HomePage() {
  return (
    <main>
      <JsonLd data={HOME_LOCAL_BUSINESS_SCHEMA} />

      <Hero
        eyebrow="Thoughtful guidance. Built around your life."
        title="Plan with clarity. Invest with purpose."
        subhead="Financial planning and investment guidance should feel understandable, personal, and connected to what matters most to you—not built from a template."
        graphic={<HeroGraphic />}
      >
        <div className="home-hero-cta-row">
          <a href="/schedule/" className="btn btn-primary">
            Schedule a Private Conversation <span aria-hidden="true">→</span>
          </a>
          <a href="#approach" className="btn btn-secondary">
            Explore Our Approach
          </a>
        </div>
        <ul className="home-hero-trust-row">
          <li>
            <span aria-hidden="true">✓</span> No-pressure first conversation
          </li>
          <li>
            <span aria-hidden="true">✓</span> Clear next steps
          </li>
          <li>
            <span aria-hidden="true">✓</span> Personalized guidance
          </li>
        </ul>
      </Hero>

      <section className="home-section container">
        <div className="home-mini-steps">
          <p className="home-mini-steps-lead">A more personal way to think about your financial life.</p>
          <div className="home-mini-steps-list">
            {HOME_MINI_STEPS.map((step) => (
              <div key={step.number}>
                <p className="home-mini-step-number">{step.number}</p>
                <p className="home-mini-step-label">{step.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section container">
        <div className="home-section-heading">
          <p className="home-section-eyebrow">Your life is not a template</p>
          <h2>Advice should connect the pieces, not treat them separately.</h2>
          <p>
            We organize complex decisions into a clearer framework so you
            can understand where you are, what matters next, and how each
            decision fits the larger picture.
          </p>
        </div>
        <div className="home-process-cards">
          {HOME_PROCESS_CARDS.map((card) => (
            <div className="home-process-card" key={card.number}>
              <p className="home-process-card-number">{card.number}</p>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <a href={card.href}>
                {card.linkLabel} <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="home-approach" id="approach">
        <div className="container">
          <div className="home-section-heading">
            <p className="home-section-eyebrow">A clear planning experience</p>
            <h2>Three conversations. One connected direction.</h2>
            <p>
              Inspired by the lowest-friction digital journeys in financial
              services—but designed for a relationship-driven advisory
              experience.
            </p>
          </div>
          <ApproachTabs />
        </div>
      </section>

      <section className="home-section container">
        <div className="home-section-heading">
          <p className="home-section-eyebrow">Find your starting point</p>
          <h2>What financial decision is taking up the most space in your mind?</h2>
          <p>
            Select the closest fit. The page will tailor the next
            step—without asking you for information first.
          </p>
        </div>
        <HomeConversationStarter />
      </section>

      <section className="home-section container">
        <div className="home-section-heading">
          <p className="home-section-eyebrow">Why Reserve</p>
          <h2>Institutional discipline. Personal conversation.</h2>
        </div>
        <div className="home-feature-row">
          {HOME_WHY_ITEMS.map((item) => (
            <div className="home-feature-row-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section home-faq container">
        <div className="home-section-heading">
          <p className="home-section-eyebrow">Common questions</p>
          <h2>Before we talk.</h2>
        </div>
        <div className="accordion">
          {HOME_FAQS.map((item) => (
            <AccordionItem key={item.q} question={item.q} pageSlug="/">
              <p>{item.a}</p>
            </AccordionItem>
          ))}
        </div>
        <p>
          <a href="/faq/">See all frequently asked questions</a>
        </p>
      </section>

      <section className="home-closing-cta">
        <span className="home-closing-cta-watermark" aria-hidden="true">R</span>
        <div className="container">
          <p className="home-section-eyebrow">A conversation can create clarity</p>
          <h2>Start with the decision that matters most.</h2>
          <p>
            You do not need to solve everything before reaching out.
            Bring the question. We&rsquo;ll start there.
          </p>
          <CTAStrip label="Schedule a Conversation" href="/schedule/" />
        </div>
      </section>
    </main>
  );
}
