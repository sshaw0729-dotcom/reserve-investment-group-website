// COMBO-005 — campaign landing page for wealthmanagementcleveland.com.
// Dual parent: Wealth Management (service) + Cleveland (location).
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
import { TestimonialPlaceholder } from "../../components/marketing/TestimonialPlaceholder";
import { AccordionItem } from "../../components/ui/Accordion";

export const metadata: Metadata = {
  title: "Wealth Management in Cleveland",
  description:
    "Ongoing wealth management for individuals and families in the Cleveland area, coordinating investments and planning as circumstances change.",
};

const FAQS = [
  { q: "How is this different from a one-time investment review?", a: "Wealth management is designed as an ongoing relationship with periodic check-ins, rather than a single review that isn't revisited." },
  { q: "Do I need to already have an investment portfolio?", a: "No — the introductory conversation is a good starting point regardless of where you are today." },
  { q: "Will you coordinate with my accountant or attorney?", a: "Yes, where appropriate, we coordinate with your existing tax and legal professionals rather than working in isolation." },
];

export default function WealthManagementClevelandPage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services/" },
          { label: "Wealth Management", href: "/services/wealth-management/" },
          { label: "Wealth Management in Cleveland", href: "/wealth-management-cleveland/" },
        ]}
      />
      <section className="container">
        <h1>Wealth Management in Cleveland</h1>
        <p>
          Wealth management is designed to be an ongoing relationship —
          coordinating your investments and financial decisions as your
          circumstances change, rather than a single one-time review.
        </p>
      </section>

      <BenefitsList
        heading="What ongoing wealth management is designed to help with"
        benefits={[
          { title: "One coordinated view", description: "Investments, planning, and goals considered together instead of separately." },
          { title: "Built for change", description: "Periodic check-ins as your circumstances — or the environment — shift." },
          { title: "A second set of eyes", description: "Someone reviewing your full picture on an ongoing basis, not just once." },
        ]}
      />

      <ProblemSolution
        problemHeading="The problem"
        problemBody="Many households end up with accounts and decisions made at different times, by different people, for different reasons — a 401(k) here, an old IRA there, insurance bought a decade ago. Reviewed in isolation, it's hard to tell whether the pieces still fit together."
        solutionHeading="The approach"
        solutionBody="Wealth management is designed to bring those pieces into a single, ongoing relationship — reviewed together, and revisited as your circumstances change, rather than left to sit until something forces a look."
      />

      <ProcessSteps
        heading="What happens next"
        steps={[
          { title: "Introductory conversation", description: "A discussion of your goals and current financial picture." },
          { title: "Review", description: "A look at your current investments and planning, together." },
          { title: "Ongoing coordination", description: "Periodic check-ins as your circumstances change over time." },
        ]}
      />

      <TrustSignals />

      <section className="container">
        <h2>Considerations for the Cleveland area</h2>
        <ul>
          <li>Coordinating planning across Cleveland&apos;s mix of corporate, healthcare, and business-owner households</li>
          <li>Periodic check-ins as local and personal circumstances change</li>
          <li>Working alongside your existing tax and legal professionals in the area</li>
        </ul>
        <h2>Frequently asked questions</h2>
        <div className="accordion">
          {FAQS.map((faq) => (
            <AccordionItem key={faq.q} question={faq.q} pageSlug="/wealth-management-cleveland/">
              <p>{faq.a}</p>
            </AccordionItem>
          ))}
        </div>
        <h2>Related reading</h2>
        <ul>
          <li><a href="/services/wealth-management/">Wealth Management</a></li>
          <li><a href="/who-we-help/high-net-worth-families/">High-Net-Worth Families</a></li>
          <li><a href="/locations/cleveland/">Cleveland</a></li>
        </ul>
      </section>

      <TestimonialPlaceholder />

      <DisclosureBlock>
        This page describes planning considerations that may apply to some
        individuals; individual circumstances vary. Reserve Investment Group, Inc. is not a registered investment adviser or broker-dealer. See our <a href="/disclosures/">Form CRS &amp; Disclosures</a> page for additional information.
      </DisclosureBlock>
      <CTAStrip label="Schedule an introductory conversation" href="/schedule/" />
    </main>
  );
}
