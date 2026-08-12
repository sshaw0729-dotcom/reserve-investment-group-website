// Home — wired to the design-system components. Practice owner approved
// publication and instructed removal of the pre-launch banner 2026-08-08
// (see MISSING-INFORMATION-REGISTER.md, COMPLIANCE-PACKAGE-TEMPLATE.md
// asset CORE-001). Layout and visual language rebuilt 2026-08-11 to match
// the approved Canva "Conversion Website v2" concept (see
// MISSING-INFORMATION-REGISTER.md #21). Rebuilt again 2026-08-11 (later
// same day, per practice owner feedback) to restore the concept's hero
// gradient/floating-card graphic, numbered process sections, and section
// copy that the first pass had simplified away. Briefly reconciled again
// 2026-08-11 against a newer Canva reference ("Interactive Website
// Concept"), then reverted the same day per practice owner instruction,
// using the approved "Production Website Package v2026-08-09-v1"
// prototype as the reference for the original copy (see
// WEBSITE-PROTOTYPE-REFERENCE.md). The 3-D hero graphic, floating cards,
// hover-lift interactions, and entrance animations added during that
// window are intentionally kept — only the section copy was reverted.
// The site's real navigation (not any concept's fictional simplified
// nav) and the LeadForm/submit-lead backend pipeline are intentionally
// unchanged — see FORM-DATA-FLOW.md. All section copy below mirrors the
// qualified, non-promissory language already used in
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
const HOME_MINI_STEPS = [
  { number: "01", label: "Start with what matters" },
  { number: "02", label: "Build a coordinated plan" },
  { number: "03", label: "Review and adapt" },
];

// Numbered process cards. hrefs point at the real service pages (or the
// schedule page for the third card, matching the Canva concept's "Start a
// conversation" link) rather than the Canva prototype's placeholder hrefs.
const HOME_PROCESS_CARDS = [
  {
    number: "01",
    title: "Financial planning",
    description:
      "Explore financial planning topics and services that may be relevant to your goals and circumstances—including retirement, cash flow, major decisions, and the financial information that connects them.",
    linkLabel: "See the planning path",
    href: "/services/financial-planning/",
  },
  {
    number: "02",
    title: "Wealth management",
    description:
      "Discuss how investments, liquidity, time horizon, risk considerations, and account structure may fit within your broader financial picture.",
    linkLabel: "Explore your priorities",
    href: "/services/wealth-management/",
  },
  {
    number: "03",
    title: "Business owners & changing priorities",
    description:
      "Business decisions, retirement, career changes, family responsibilities, and other transitions can change which financial questions deserve attention next.",
    linkLabel: "Start a conversation",
    href: "/schedule/",
  },
];

const HOME_ABOUT_ITEMS = [
  { title: "Clarity", description: "Make the information easier to understand before making the decision." },
  { title: "Preparedness", description: "Think through important questions before timing becomes urgent." },
  { title: "Flexibility", description: "Recognize that goals, markets, work, family, and priorities can change." },
  { title: "Options", description: "Understand tradeoffs so you can make a more informed choice." },
];

const HOME_WHY_ITEMS = [
  { title: "Understandable", description: "Clear language and organized financial information." },
  { title: "Practical", description: "Focus on the decisions that are relevant to your goals and circumstances." },
  { title: "Prepared", description: "Consider tradeoffs before a decision becomes urgent." },
  { title: "Personal", description: "Begin with what matters to you." },
];

// Question phrasing matches the approved Canva concept; answers reuse the
// qualified language already established in src/app/faq/page.tsx rather
// than introducing new claims.
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
    q: "Do you provide tax or legal advice?",
    a: "No. We coordinate with your tax and legal professionals where appropriate, but we do not provide tax or legal advice unless that authority is separately confirmed.",
  },
  {
    q: "How do I know whether your services are a fit?",
    a: "The best way to find out is an introductory conversation—we'll discuss your goals and situation, and you can decide whether it makes sense to move forward.",
  },
];

export default function HomePage() {
  return (
    <main>
      <JsonLd data={HOME_LOCAL_BUSINESS_SCHEMA} />

      <Hero
        eyebrow="Clarity for the decisions that matter."
        title="Make financial decisions feel more understandable."
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
          <p className="home-section-eyebrow">Financial planning should start with you</p>
          <h2>A clearer way to organize the decisions in front of you.</h2>
          <p>
            We begin by learning what matters to you and organizing the
            financial information relevant to your goals. From there, we
            discuss the areas that may deserve further attention based on
            your goals and circumstances.
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

      <section className="home-section container">
        <div className="home-section-heading">
          <p className="home-section-eyebrow">About Reserve Investment Group</p>
          <h2>Built to make financial decisions feel more understandable.</h2>
          <p>
            Reserve Investment Group is centered on clarity, practical
            planning, preparedness, flexibility, resilience, and options. We
            begin by learning what matters to you, organizing the financial
            information relevant to your goals, and discussing areas that
            may deserve further attention based on your goals and
            circumstances.
          </p>
        </div>
        <div className="home-feature-row">
          {HOME_ABOUT_ITEMS.map((item) => (
            <div className="home-feature-row-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-approach" id="approach">
        <div className="container">
          <div className="home-section-heading">
            <p className="home-section-eyebrow">Our approach</p>
            <h2>Start with what matters. Organize what connects. Decide what comes next.</h2>
            <p>
              A relationship-driven process designed to make the financial
              information around your goals easier to understand and
              discuss.
            </p>
          </div>
          <ApproachTabs />
        </div>
      </section>

      <section className="home-section container">
        <div className="home-section-heading">
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
          <h2>No hype. No predictions. No false certainty.</h2>
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
          <h2>Start with the decision that matters most.</h2>
          <p>
            Start with the financial question, decision, or transition that
            matters most to you. We can begin there and discuss what
            information may be relevant next.
          </p>
          <CTAStrip label="Schedule a Conversation" href="/schedule/" />
        </div>
      </section>
    </main>
  );
}
