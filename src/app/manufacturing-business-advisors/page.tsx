// COMBO-006 — campaign landing page for manufaturingbusinessadvisors.com.
// Dual parent: Business-Owner Planning / Business Succession Planning
// (services) + Manufacturing Leaders (persona). Greater-Cleveland scope
// rather than a single city, matching the domain's broader framing.
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
  title: "Financial Advisors for Manufacturing Business Owners",
  description:
    "Financial planning considerations for manufacturing business owners and executives in Greater Cleveland — succession, capital decisions, and retirement plan design.",
};

const FAQS = [
  { q: "Do you work with businesses of any size?", a: "We work with manufacturing business owners across a range of company sizes. An introductory conversation is the best way to determine fit." },
  { q: "Can you help design a retirement plan for our employees?", a: "We can discuss considerations around retirement plan design; specific plan setup and administration typically involves a third-party administrator we can help you think through working with." },
  { q: "How far in advance should we start succession planning?", a: "There's no single right time — starting the conversation early generally allows more flexibility than starting close to a planned transition." },
];

export default function ManufacturingBusinessAdvisorsPage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Who We Help", href: "/who-we-help/" },
          { label: "Manufacturing Leaders", href: "/who-we-help/manufacturing-leaders/" },
          { label: "Financial Advisors for Manufacturing Business Owners", href: "/manufacturing-business-advisors/" },
        ]}
      />
      <section className="container">
        <h1>Financial Advisors for Manufacturing Business Owners</h1>
        <p>
          Owners and executives in manufacturing businesses across
          Greater Cleveland often face financial planning considerations
          tied to capital equipment cycles, workforce retirement-plan
          design, and eventually transitioning or succeeding the
          business.
        </p>
      </section>

      <BenefitsList
        heading="What this may help you think through"
        benefits={[
          { title: "Capital vs. personal savings", description: "How reinvesting in equipment or capacity relates to your own financial goals." },
          { title: "Workforce retirement plans", description: "Considerations around retirement plan design for a manufacturing workforce." },
          { title: "Succession timing", description: "Thinking ahead about a transition, whether it's years away or approaching." },
        ]}
      />

      <ProblemSolution
        problemHeading="The problem"
        problemBody="For many manufacturing business owners, most of their net worth is tied up in the business itself — equipment, inventory, and enterprise value — while personal financial planning gets pushed to whenever there's time left over."
        solutionHeading="The approach"
        solutionBody="This is designed to bring business and personal financial considerations into one conversation, so capital decisions, workforce planning, and your own goals aren't being worked out separately."
      />

      <ProcessSteps
        heading="What happens next"
        steps={[
          { title: "Introductory conversation", description: "A discussion of both your business and personal financial goals." },
          { title: "Review", description: "A look at how the two currently relate to one another." },
          { title: "Considerations", description: "A discussion of options, coordinated with your other advisors where appropriate." },
        ]}
      />

      <TrustSignals />

      <section className="container">
        <h2>Considerations for manufacturing businesses</h2>
        <ul>
          <li>Coordinating capital investment decisions with personal financial goals</li>
          <li>Retirement plan design considerations for a manufacturing workforce</li>
          <li>Succession planning, whether the timeline is years away or approaching</li>
        </ul>
        <h2>Frequently asked questions</h2>
        <div className="accordion">
          {FAQS.map((faq) => (
            <AccordionItem key={faq.q} question={faq.q} pageSlug="/manufacturing-business-advisors/">
              <p>{faq.a}</p>
            </AccordionItem>
          ))}
        </div>
        <h2>Related reading</h2>
        <ul>
          <li><a href="/who-we-help/manufacturing-leaders/">Manufacturing Leaders</a></li>
          <li><a href="/services/business-owner-planning/">Business-Owner Planning</a></li>
          <li><a href="/services/business-succession-planning/">Business Succession Planning</a></li>
        </ul>
      </section>

      <DisclosureBlock>
        This page describes planning considerations that may apply to some
        manufacturing business owners; individual circumstances vary.
        Reserve Investment Group, Inc. is not a registered investment adviser or broker-dealer. See our <a href="/disclosures/">Form CRS &amp; Disclosures</a> page for additional information.
      </DisclosureBlock>
      <CTAStrip label="Request a complimentary financial review" href="/business-owner-financial-review/" />
    </main>
  );
}
