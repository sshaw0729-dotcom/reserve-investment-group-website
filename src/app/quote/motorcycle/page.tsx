import type { Metadata } from "next";
import { QuoteMotorcyclePage } from "../../../components/rig-funnel/QuotePages";
import { JsonLd, faqJsonLd } from "../../../lib/seo/jsonld";
import { QUOTE_MOTORCYCLE_FAQS } from "../../../components/rig-funnel/content/quote.faq";

export const metadata: Metadata = {
  title: "Motorcycle Insurance Quote Worksheet",
  description:
    "The rider, the bike, and how you ride — collected for a motorcycle insurance quote from a licensed Reserve Investment Group insurance agent.",
  alternates: { canonical: "/quote/motorcycle" },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd(QUOTE_MOTORCYCLE_FAQS)} />
      <QuoteMotorcyclePage />
    </>
  );
}
