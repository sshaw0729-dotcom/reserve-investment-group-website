// Home — wired to the design-system components. Practice owner approved
// publication and instructed removal of the pre-launch banner 2026-08-08
// (see MISSING-INFORMATION-REGISTER.md, COMPLIANCE-PACKAGE-TEMPLATE.md
// asset CORE-001). Layout and visual language rebuilt 2026-08-11 to
// match the approved Canva "Conversion Website v2" concept (see
// MISSING-INFORMATION-REGISTER.md #21). All new section copy below
// mirrors the qualified, non-promissory language already used in
// src/lib/content/services.ts and src/app/faq/page.tsx — no new claims
// about returns, savings, or guaranteed outcomes.

import { Hero } from "../components/marketing/Hero";
import { CTAStrip } from "../components/marketing/CTAStrip";
import { CardGrid } from "../components/marketing/CardGrid";
import { ApproachTabs } from "../components/marketing/ApproachTabs";
import { HomeConversationStarter } from "../components/marketing/HomeConversationStarter";
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

const VALUE_PILLARS = [
  {
    title: "Coordinated, not siloed",
    description:
      "Your investments, planning, and goals are considered together, rather than as separate, disconnected decisions.",
  },
  {
    title: "Built around your goals",
    description:
      "We start with what you're working toward, then help you organize the pieces of your financial life around it.",
  },
  {
    title: "An ongoing relationship",
    description:
      "Designed to check in and adjust as your circumstances, goals, and the broader environment change over time.",
  },
];

// Titles, descriptions, and hrefs pulled directly from the approved
// src/lib/content/services.ts entries (metaDescription copy) rather than
// newly written — keeps homepage service claims identical to the
// already-reviewed service pages.
const HOME_SERVICES = [
  {
    title: "Financial Planning",
    description:
      "Financial planning designed to help organize your goals and current financial picture into a coordinated plan.",
    href: "/services/financial-planning/",
  },
  {
    title: "Wealth Management",
    description:
      "Ongoing coordination of your financial decisions as circumstances, goals, and markets change.",
    href: "/services/wealth-management/",
  },
  {
    title: "Business-Owner Planning",
    description:
      "Planning considerations that balance business and personal financial decisions.",
    href: "/services/business-owner-planning/",
  },
];

// Reused verbatim from src/app/faq/page.tsx (approved copy) rather than
// duplicated with new wording.
const HOME_FAQS = [
  {
    q: "What does an introductory conversation involve?",
    a: "It's a no-obligation discussion about your goals and current planning so we can determine whether working together makes sense.",
  },
  {
    q: "Do you provide tax or legal advice?",
    a: "No. We coordinate with your tax and legal professionals where appropriate, but we do not provide tax or legal advice unless that authority is separately confirmed.",
  },
  {
    q: "Is the complimentary financial review a full financial plan?",
    a: "No. It's an introductory discussion and does not constitute a complete financial plan.",
  },
];

export default function HomePage() {
  return (
    <main>
      <JsonLd data={HOME_LOCAL_BUSINESS_SCHEMA} />

      <Hero
        eyebrow="Reserve Investment Group, Inc"
        title="Financial planning built around your goals"
        subhead="We help individuals, families, and business owners identify financial inefficiencies, address unmanaged risks, and coordinate their financial decisions around the goals that matter to them."
      >
        <div className="home-hero-cta-row">
          <a href="/schedule/" className="btn btn-primary">
            Schedule an introductory conversation
          </a>
          <a href="#approach" className="btn btn-secondary">
            See how we work
          </a>
        </div>
      </Hero>

      <section className="home-section container">
        <div className="home-pillars">
          {VALUE_PILLARS.map((pillar) => (
            <div className="home-pillar" key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section home-services container">
        <div className="home-section-heading">
          <p className="home-section-eyebrow">What we help with</p>
          <h2>Planning built around how you actually live</h2>
          <p>
            A few of the areas we most often help clients organize. See the
            full list of services for more detail.
          </p>
        </div>
        <CardGrid items={HOME_SERVICES} />
      </section>

      <section className="home-approach" id="approach">
        <div className="container">
          <div className="home-section-heading">
            <p className="home-section-eyebrow">Our approach</p>
            <h2>How we work together</h2>
          </div>
          <ApproachTabs />
        </div>
      </section>

      <section className="home-section container">
        <div className="home-section-heading">
          <p className="home-section-eyebrow">Get started</p>
          <h2>What&apos;s on your mind?</h2>
          <p>
            Tell us where you&apos;re starting from, and we&apos;ll follow up
            to schedule an introductory conversation.
          </p>
        </div>
        <HomeConversationStarter />
      </section>

      <section className="home-section home-faq container">
        <div className="home-section-heading">
          <p className="home-section-eyebrow">Common questions</p>
          <h2>Frequently asked questions</h2>
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
          <h2>Ready to talk through your financial picture?</h2>
          <p>
            Schedule a no-obligation introductory conversation to see whether
            working together makes sense.
          </p>
          <CTAStrip label="Schedule an introductory conversation" href="/schedule/" />
        </div>
      </section>
    </main>
  );
}
