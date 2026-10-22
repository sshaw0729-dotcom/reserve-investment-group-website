import type { Metadata } from "next";
import { QuoteLifePage } from "../../../components/rig-funnel/QuotePages";
import { JsonLd, faqJsonLd } from "../../../lib/seo/jsonld";
import { QUOTE_LIFE_FAQS } from "../../../components/rig-funnel/content/quote.faq";

export const metadata: Metadata = {
  title: "Life Insurance Quote Worksheet",
  description:
    "Health picture, coverage goal, existing coverage, and beneficiaries — what a licensed Reserve Investment Group insurance agent needs to quote life insurance.",
  alternates: { canonical: "/quote/life" },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd(QUOTE_LIFE_FAQS)} />
      <QuoteLifePage />
    </>
  );
}
