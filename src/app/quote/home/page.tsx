import type { Metadata } from "next";
import { QuoteHomePage } from "../../../components/rig-funnel/QuotePages";
import { JsonLd, faqJsonLd } from "../../../lib/seo/jsonld";
import { QUOTE_HOME_FAQS } from "../../../components/rig-funnel/content/quote.faq";

export const metadata: Metadata = {
  title: "Home Insurance Quote Worksheet",
  description:
    "Property, construction, updates, and claims details for an accurate homeowners insurance quote from a licensed Reserve Investment Group insurance agent.",
  alternates: { canonical: "/quote/home" },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd(QUOTE_HOME_FAQS)} />
      <QuoteHomePage />
    </>
  );
}
