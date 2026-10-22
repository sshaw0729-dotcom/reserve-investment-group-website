import type { Metadata } from "next";
import { MedicareAnswersPage } from "../../components/rig-funnel/VisibilityPages";
import { JsonLd, faqJsonLd } from "../../lib/seo/jsonld";
import { MEDICARE_ANSWERS_FAQS } from "../../components/rig-funnel/content/medicare-answers.faq";

export const metadata: Metadata = {
  title: "Medicare Answers for Cleveland: When to Enroll, What It Covers, How to Choose",
  description:
    "Plain-English Medicare answers for Cleveland-area residents turning 65: when to enroll, what Parts A–D cover, Medicare Advantage vs. a supplement, and how Ohioans choose — education only, from Reserve Investment Group in South Euclid.",
  alternates: { canonical: "/medicare-answers-cleveland" },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd(MEDICARE_ANSWERS_FAQS)} />
      <MedicareAnswersPage />
    </>
  );
}
