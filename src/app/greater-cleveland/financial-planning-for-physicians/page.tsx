// COMBO-001 — Financial Planning for Physicians in Cleveland. Validated
// "Build (Wave 1)" recommendation in KEYWORD-AND-INTENT-MAP.csv. Dual
// parent: Financial Planning (service) + Physicians (persona). Distinct
// from both parents by combining physician-specific liability/compensation
// considerations with Cleveland-area context — not a template swap.
// Upgraded to the Landing Page System template (MARKETING-ECOSYSTEM-BRIEF.md,
// Section 1) — same URL, no new page created, only sections added. This is
// also the canonical target for physicianfinancialplans.com.
import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "../../../components/marketing/Breadcrumbs";
import { CTAStrip } from "../../../components/marketing/CTAStrip";
import { DisclosureBlock } from "../../../components/marketing/DisclosureBlock";
import { BenefitsList } from "../../../components/marketing/BenefitsList";
import { ProblemSolution } from "../../../components/marketing/ProblemSolution";
import { ProcessSteps } from "../../../components/marketing/ProcessSteps";
import { TrustSignals } from "../../../components/marketing/TrustSignals";
import { AccordionItem } from "../../../components/ui/Accordion";

export const metadata: Metadata = {
  title: "Financial Planning for Physicians in Cleveland",
  description:
    "Financial planning considerations for physicians in the Cleveland area, including compensation structure, liability exposure, and retirement planning.",
  alternates: { canonical: "/greater-cleveland/financial-planning-for-physicians/" },
};

const FAQS = [
  { q: "I'm early in my career with student loans — is this still relevant?", a: "Balancing loan repayment with long-term savings is one of the more common considerations we discuss with physicians earlier in their careers." },
  { q: "Do you work with physicians at every Cleveland-area health system?", a: "We work with physicians across a range of Cleveland-area health systems and independent practices — an introductory conversation is the best way to determine fit." },
  { q: "What if my compensation changes from year to year?", a: "Variable, RVU-based compensation is common among physicians — planning around it is part of what this conversation is designed to address." },
];

export default function PhysicianCombinedPage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services/" },
          { label: "Financial Planning", href: "/services/financial-planning/" },
          { label: "Financial Planning for Physicians in Cleveland", href: "/greater-cleveland/financial-planning-for-physicians/" },
        ]}
      />
      <section className="container">
        <h1>Financial Planning for Physicians in Cleveland</h1>
        <p>
          Physicians practicing in and around Cleveland — whether affiliated
          with a large health system or an independent practice — may
          encounter planning considerations that don&apos;t come up in a
          general financial-planning conversation: variable or RVU-based
          compensation, liability and asset-protection considerations,
          employer retirement plan options, and balancing loan repayment
          with long-term savings.
        </p>
      </section>

      <BenefitsList
        heading="What this conversation is designed to help with"
        benefits={[
          { title: "Compensation clarity", description: "Making sense of variable or RVU-based pay in your broader financial picture." },
          { title: "Coverage review", description: "A look at liability and asset-protection considerations relevant to your practice." },
          { title: "Loans vs. savings", description: "Thinking through the balance between loan repayment and long-term savings." },
        ]}
      />

      <ProblemSolution
        problemHeading="The problem"
        problemBody="Physician compensation and benefits rarely look like a standard paycheck — RVU-based pay, employer retirement plans that vary by system, liability exposure, and loan balances left over from training all complicate a financial picture that's already hard to find time to look at."
        solutionHeading="The approach"
        solutionBody="This conversation is designed to bring those pieces together — compensation, coverage, retirement plan options, and loan repayment — into one coordinated discussion, worked around a demanding clinical schedule rather than requiring you to make time you don't have."
      />

      <ProcessSteps
        heading="What happens next"
        steps={[
          { title: "Introductory conversation", description: "A discussion of your compensation structure, goals, and current situation." },
          { title: "Review", description: "A look at how your current elections and coverage fit your situation." },
          { title: "Considerations", description: "A discussion of options, coordinated with your tax professional where appropriate." },
        ]}
      />

      <TrustSignals />

      <section className="container">
        <h2>Considerations specific to this area</h2>
        <ul>
          <li>Compensation structures that vary between Cleveland&apos;s major health systems and independent or group practices</li>
          <li>Retirement plan options that differ by employer</li>
          <li>Coordinating financial planning around demanding clinical schedules</li>
        </ul>
        <h2>Frequently asked questions</h2>
        <div className="accordion">
          {FAQS.map((faq) => (
            <AccordionItem key={faq.q} question={faq.q} pageSlug="/greater-cleveland/financial-planning-for-physicians/">
              <p>{faq.a}</p>
            </AccordionItem>
          ))}
        </div>
        <h2>Related reading</h2>
        <ul>
          <li><Link href="/services/financial-planning/">Financial Planning</Link></li>
          <li><Link href="/who-we-help/physicians/">Physicians</Link></li>
          <li><Link href="/locations/cleveland/">Cleveland</Link></li>
        </ul>
      </section>

      <DisclosureBlock>
        This page describes planning considerations that may apply to some
        physicians; individual circumstances vary. Reserve Investment Group,
        Inc. is not a registered investment adviser or broker-dealer. See our{" "}
        <Link href="/disclosures/">Form CRS &amp; Disclosures</Link> page for
        additional information.
      </DisclosureBlock>
      <CTAStrip label="Request a complimentary financial review" href="/financial-review/" />
    </main>
  );
}
