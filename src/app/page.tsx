import Image from "next/image";
import { Hero } from "../components/marketing/Hero";
import { CTAStrip } from "../components/marketing/CTAStrip";
import { ApproachTabs } from "../components/marketing/ApproachTabs";
import { HomeConversationStarter } from "../components/marketing/HomeConversationStarter";
import { HeroGraphic } from "../components/marketing/HeroGraphic";
import { AccordionItem } from "../components/ui/Accordion";
import { referenceRigArtwork } from "../lib/brand/referenceRigArtwork";
import { JsonLd, localBusinessJsonLd } from "../lib/seo/jsonld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

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

const HOME_TRUST_ITEMS = [
  "Clear, unhurried process",
  "Educational approach",
  "No-pressure introductory conversation",
  "Registration and disclosures available",
];

const HOME_MINI_STEPS = [
  { number: "01", label: "Start with what matters" },
  { number: "02", label: "Build a coordinated plan" },
  { number: "03", label: "Review and adapt" },
];

const HOME_PROCESS_CARDS = [
  {
    number: "01",
    icon: "plan",
    title: "Financial planning",
    description:
      "Explore financial planning topics and services that may be relevant to your goals and circumstances—including retirement, cash flow, major decisions, and the financial information that connects them.",
    linkLabel: "See the planning path",
    href: "/services/financial-planning/",
  },
  {
    number: "02",
    icon: "wealth",
    title: "Wealth management",
    description:
      "Discuss how investments, liquidity, time horizon, risk considerations, and account structure may fit within your broader financial picture.",
    linkLabel: "Explore your priorities",
    href: "/services/wealth-management/",
  },
  {
    number: "03",
    icon: "change",
    title: "Business owners & changing priorities",
    description:
      "Business decisions, retirement, career changes, family responsibilities, and other transitions can change which financial questions deserve attention next.",
    linkLabel: "Schedule an introductory conversation",
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
    q: "Who do you typically work with?",
    a: "We work with individuals, families, and business owners at different stages of their financial planning journey, depending on their circumstances and goals.",
  },
  {
    q: "How is your firm compensated?",
    a: "Fees, commissions, or other compensation, if any, depend on the specific product, service, provider, and scope of the relationship. Applicable fees and compensation are disclosed in the relevant agreements, product materials, or other required disclosures before the applicable engagement or transaction.",
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
            Schedule an introductory conversation <span aria-hidden="true">→</span>
          </a>
          <a href="#approach" className="btn btn-secondary">
            Learn about our approach
          </a>
        </div>
        <ul className="home-hero-trust-row">
          <li><span aria-hidden="true">✓</span> No-pressure first conversation</li>
          <li><span aria-hidden="true">✓</span> Clear next steps</li>
          <li><span aria-hidden="true">✓</span> Personalized guidance</li>
        </ul>
      </Hero>

      <section className="home-trust-band" aria-label="What to expect">
        <div className="container home-trust-band-inner">
          {HOME_TRUST_ITEMS.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

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
            We begin by learning what matters to you and organizing the financial information relevant to your goals. From there, we discuss the areas that may deserve further attention based on your goals and circumstances.
          </p>
        </div>
        <div className="home-process-cards">
          {HOME_PROCESS_CARDS.map((card) => (
            <div className="home-process-card" key={card.number}>
              <div className={`home-process-icon home-process-icon-${card.icon}`} aria-hidden="true"><span /></div>
              <p className="home-process-card-number">{card.number}</p>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <a href={card.href}>{card.linkLabel} <span aria-hidden="true">→</span></a>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section home-decision-section container">
        <div className="home-section-heading home-section-heading-centered">
          <p className="home-section-eyebrow">Choose your starting point</p>
          <h2>What financial decision is taking up the most space in your mind?</h2>
          <p>Select the closest fit. You can begin with that question without having everything organized first.</p>
        </div>
        <HomeConversationStarter />
      </section>

      <section className="home-section container">
        <div className="home-section-heading">
          <p className="home-section-eyebrow">About Reserve Investment Group</p>
          <h2>Built to make financial decisions feel more understandable.</h2>
          <p>
            Reserve Investment Group is centered on clarity, practical planning, preparedness, flexibility, resilience, and options. We begin by learning what matters to you, organizing the financial information relevant to your goals, and discussing areas that may deserve further attention based on your goals and circumstances.
          </p>
        </div>
        <div className="home-feature-row">
          {HOME_ABOUT_ITEMS.map((item) => (
            <div className="home-feature-row-item" key={item.title}>
              <h3>{item.title}</h3><p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-editorial-bridge container" aria-label="Planning perspective">
        <span aria-hidden="true" />
        <p>Financial decisions rarely happen in isolation.</p>
        <span aria-hidden="true" />
      </section>

      <section className="home-approach" id="approach">
        <div className="container">
          <div className="home-section-heading">
            <p className="home-section-eyebrow">Our approach</p>
            <h2>Start with what matters. Organize what connects. Decide what comes next.</h2>
            <p>A relationship-driven process designed to make the financial information around your goals easier to understand and discuss.</p>
          </div>
          <ApproachTabs />
        </div>
      </section>

      <section className="home-section container">
        <div className="home-section-heading">
          <p className="home-section-eyebrow">Why Reserve</p>
          <h2>No hype. No predictions. No false certainty.</h2>
          <p>
            Financial planning involves tradeoffs, uncertainty, and changing priorities. Our role is to help make the information easier to understand so you can make informed decisions with greater context.
          </p>
        </div>
        <div className="home-feature-row">
          {HOME_WHY_ITEMS.map((item) => (
            <div className="home-feature-row-item" key={item.title}>
              <h3>{item.title}</h3><p>{item.description}</p>
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
            <AccordionItem key={item.q} question={item.q} pageSlug="/"><p>{item.a}</p></AccordionItem>
          ))}
        </div>
        <p><a href="/faq/">See all frequently asked questions</a></p>
      </section>

      <section className="home-closing-cta">
        <Image className="home-closing-cta-watermark" src={referenceRigArtwork} alt="" width={335} height={315} unoptimized aria-hidden="true" />
        <div className="container">
          <h2>Start with the decision that matters most.</h2>
          <p>Start with the financial question, decision, or transition that matters most to you. We can begin there and discuss what information may be relevant next.</p>
          <CTAStrip label="Schedule an introductory conversation" href="/schedule/" />
        </div>
      </section>
    </main>
  );
}
