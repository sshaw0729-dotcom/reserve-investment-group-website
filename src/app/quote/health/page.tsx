import type { Metadata } from "next";
import { QuoteHealthPage } from "../../../components/rig-funnel/QuotePages";
import { JsonLd, faqJsonLd } from "../../../lib/seo/jsonld";
import { QUOTE_HEALTH_FAQS } from "../../../components/rig-funnel/content/quote.faq";

export const metadata: Metadata = {
  title: "Health & Medicare Quote Worksheet",
  description:
    "Your situation, doctors, and prescriptions, collected for an educational health and Medicare review with a licensed Reserve Investment Group insurance agent.",
  alternates: { canonical: "/quote/health" },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd(QUOTE_HEALTH_FAQS)} />
      <QuoteHealthPage />
    </>
  );
}
