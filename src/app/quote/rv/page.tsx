import type { Metadata } from "next";
import { QuoteRvPage } from "../../../components/rig-funnel/QuotePages";
import { JsonLd, faqJsonLd } from "../../../lib/seo/jsonld";
import { QUOTE_RV_FAQS } from "../../../components/rig-funnel/content/quote.faq";

export const metadata: Metadata = {
  title: "RV Insurance Quote Worksheet",
  description:
    "The rig and how you use it — collected for an RV insurance quote from a licensed Reserve Investment Group insurance agent.",
  alternates: { canonical: "/quote/rv" },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd(QUOTE_RV_FAQS)} />
      <QuoteRvPage />
    </>
  );
}
