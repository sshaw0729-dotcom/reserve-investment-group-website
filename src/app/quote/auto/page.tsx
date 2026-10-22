import type { Metadata } from "next";
import { QuoteAutoPage } from "../../../components/rig-funnel/QuotePages";
import { JsonLd, faqJsonLd } from "../../../lib/seo/jsonld";
import { QUOTE_AUTO_FAQS } from "../../../components/rig-funnel/content/quote.faq";

export const metadata: Metadata = {
  title: "Auto Insurance Quote Worksheet",
  description:
    "Give us your drivers, vehicles, and current coverage once, and a licensed Reserve Investment Group insurance agent will prepare your auto insurance quote.",
  alternates: { canonical: "/quote/auto" },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd(QUOTE_AUTO_FAQS)} />
      <QuoteAutoPage />
    </>
  );
}
