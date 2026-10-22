import type { Metadata } from "next";
import { ProcessingCostPage } from "../../components/rig-funnel/VisibilityPages";
import { JsonLd, faqJsonLd } from "../../lib/seo/jsonld";
import { PROCESSING_FAQS } from "../../components/rig-funnel/content/processing.faq";

export const metadata: Metadata = {
  title: "How Much Should a Cleveland Small Business Pay for Credit Card Processing?",
  description:
    "What a small business should actually pay to accept cards, how to compute your true cost of acceptance from one statement, and how to tell if you're overpaying — plus the free Processing Cost Review from Reserve Investment Group in South Euclid.",
  alternates: { canonical: "/cleveland-credit-card-processing-costs" },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd(PROCESSING_FAQS)} />
      <ProcessingCostPage />
    </>
  );
}
