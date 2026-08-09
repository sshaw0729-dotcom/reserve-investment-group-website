// COMBO-004 — campaign landing page for retirementplanningcleveland.com.
// Dual parent: Retirement Planning (service) + Cleveland (location).
// Upgraded to the Landing Page System template (MARKETING-ECOSYSTEM-BRIEF.md,
// Section 1) — same URL, no new page created, only sections added.
import type { Metadata } from "next";
import { Breadcrumbs } from "../../components/marketing/Breadcrumbs";
import { CTAStrip } from "../../components/marketing/CTAStrip";
import { DisclosureBlock } from "../../components/marketing/DisclosureBlock";
import { BenefitsList } from "../../components/marketing/BenefitsList";
import { ProblemSolution } from "../../components/marketing/ProblemSolution";
import { ProcessSteps } from "../../components/marketing/ProcessSteps";
import { TrustSignals } from "../../components/marketing/TrustSignals";
import { AccordionItem } from "../../components/ui/Accordion";

export const metadata: Metadata = {
  title: "Retirement Planning in Cleveland",
  description:
    "Retirement planning considerations for individuals and couples in the Cleveland area — income timing, Social Security, and spending considerations.",
  alternates: { canonical: "/retirement-planning-cleveland/" },
};

const FAQS = [
  { q: "Is this a full retirement plan?", a: "This page describes an introductory conversation and general considerations — a full plan follows only after that conversation and a review of your specific situation." },
  { q: "Do you work with people who are already retired?", a: "Yes — retirement planning considerations apply both before and during retirement." },
  { q: "What does the first conversation cost?", a: "The introductory conversation is complimentary. See the Financial Review offer for what to expect." },
];

export default function RetirementPlanningClevelandPage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services/" },
          { label: "Retirement Planning", href: "/services/retirement-planning/" },
          { label: "Retirement Planning in Cleveland", href: "/retirement-planning-cleveland/" },
        ]}
      />
      <section className="container">
        <h1>Retirement Planning in Cleveland</h1>
        <p>
          Whether retirement is a few years away or already underway,
          retirement planning is designed to help you think through
          income timing, spending, and the decisions that come with each
          phase of retirement.
        </p>
      </section>

      <BenefitsList
        heading="What a coordinated retirement plan is designed to help with"
        benefits={[
          { title: "Income timing", description: "Thinking through when to draw from savings, Social Security, and any pension." },
          { title: "Spending clarity", description: "A clearer picture of what your spending may look like across different phases of retirement." },
          { title: "Fewer surprises", description: "Identifying decisions and deadlines ahead of time instead of reacting to them." },
        ]}
      />

      <ProblemSolution
        problemHeading="The problem"
        problemBody="Retirement income often comes from several places at once — savings, Social Security, a pension, maybe rental or part-time income — and deciding when to draw from each isn't obvious. Decisions made without a coordinated view can be harder to unwind later."
        solutionHeading="The approach"
        solutionBody="Retirement planning is designed to bring those pieces into one coordinated view, so the timing decisions you make are made with the full picture in front of you, not one account at a time."
      />

      <ProcessSteps
        heading="What happens next"
        steps={[
          { title: "Introductory conversation", description: "A no-obligation discussion about your timeline, goals, and current situation." },
          { title: "Review", description: "We look at your income sources and current savings together." },
          { title: "Considerations", description: "A discussion of timing and sequencing considerations, coordinated with your tax professional where appropriate." },
        ]}
      />

      <TrustSignals />

      <section className="container">
        <h2>Considerations for the Cleveland area</h2>
        <ul>
          <li>Coordinating pension, Social Security, and personal savings for households in Northeast Ohio</li>
          <li>Planning around cost-of-living and healthcare considerations specific to the region</li>
          <li>Timing decisions if you&apos;re weighing relocation versus staying in the area</li>
        </ul>
        <h2>Frequently asked questions</h2>
        <div className="accordion">
          {FAQS.map((faq) => (
            <AccordionItem key={faq.q} question={faq.q} pageSlug="/retirement-planning-cleveland/">
              <p>{faq.a}</p>
            </AccordionItem>
          ))}
        </div>
        <h2>Related reading</h2>
        <ul>
          <li><a href="/services/retirement-planning/">Retirement Planning</a></li>
          <li><a href="/who-we-help/pre-retirees/">Pre-Retirees</a></li>
          <li><a href="/who-we-help/retirees/">Retirees</a></li>
          <li><a href="/locations/cleveland/">Cleveland</a></li>
        </ul>
      </section>

      <DisclosureBlock>
        This page describes planning considerations that may apply to some
        individuals; individual circumstances vary. Reserve Investment Group, Inc. is not a registered investment adviser or broker-dealer. See our <a href="/disclosures/">Form CRS &amp; Disclosures</a> page for additional information.
      </DisclosureBlock>
      <CTAStrip label="Request a complimentary retirement review" href="/retirement-review/" />
    </main>
  );
}
