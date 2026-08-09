// FAQ — CORE-008. Draft, pending compliance review.
import type { Metadata } from "next";
import { Breadcrumbs } from "../../components/marketing/Breadcrumbs";
import { AccordionItem } from "../../components/ui/Accordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers to common questions about working with Reserve Investment Group, Inc.",
  alternates: { canonical: "/faq/" },
};

const FAQS = [
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

export default function FaqPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQ", href: "/faq/" }]} />
      <section className="container">
        <h1>Frequently Asked Questions</h1>
        <div className="accordion">
          {FAQS.map((item) => (
            <AccordionItem key={item.q} question={item.q} pageSlug="/faq/">
              <p>{item.a}</p>
            </AccordionItem>
          ))}
        </div>
      </section>
    </main>
  );
}
