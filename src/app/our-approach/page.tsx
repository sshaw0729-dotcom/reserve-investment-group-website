// Our Approach — CORE-003. Draft, pending compliance review.
import type { Metadata } from "next";
import { Breadcrumbs } from "../../components/marketing/Breadcrumbs";
import { CTAStrip } from "../../components/marketing/CTAStrip";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "How Reserve Investment Group, Inc approaches financial planning: identifying inefficiencies, addressing unmanaged risks, and coordinating decisions around your goals.",
  alternates: { canonical: "/our-approach/" },
};

const STEPS = [
  {
    title: "Understand your goals",
    body: "We start by discussing what matters to you — your priorities, timeline, and circumstances.",
  },
  {
    title: "Identify considerations",
    body: "We review your current financial picture to help identify inefficiencies and unmanaged risks that may be worth addressing.",
  },
  {
    title: "Coordinate a plan",
    body: "Where appropriate, we coordinate recommendations with your tax and legal professionals rather than working in isolation.",
  },
];

export default function OurApproachPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Our Approach", href: "/our-approach/" }]} />
      <section className="container">
        <h1>Our Approach</h1>
        <p>
          Financial planning is designed to help you organize your goals,
          understand your current financial picture, and identify areas
          that may need attention.
        </p>
        <ol className="approach-steps">
          {STEPS.map((step) => (
            <li key={step.title}>
              <h2>{step.title}</h2>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </section>
      <CTAStrip label="Discuss your planning priorities" href="/schedule/" />
    </main>
  );
}
