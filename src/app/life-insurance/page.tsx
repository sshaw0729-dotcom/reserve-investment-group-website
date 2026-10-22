import type { Metadata } from "next";
import LifeInsurancePage from "../../components/rig-funnel/LifeInsurancePage";
import { JsonLd, faqJsonLd } from "../../lib/seo/jsonld";
import { LIFE_FAQS } from "../../components/rig-funnel/content/life.faq";

export const metadata: Metadata = {
  title: "Term, IUL & Final Expense Life Insurance",
  description:
    "Explore term, indexed universal life, and final-expense insurance options with a licensed Reserve Investment Group insurance agent.",
  alternates: { canonical: "/life-insurance" },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd(LIFE_FAQS)} />
      <LifeInsurancePage />
    </>
  );
}
