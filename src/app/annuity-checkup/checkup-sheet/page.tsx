import type { Metadata } from "next";
import { AnnuitySheetPage } from "../../../components/rig-funnel/AnnuityPages";
import { JsonLd, faqJsonLd } from "../../../lib/seo/jsonld";
import { ANNUITY_SHEET_FAQS } from "../../../components/rig-funnel/content/annuity.faq";

export const metadata: Metadata = {
  title: "Annuity Owner's Checkup Sheet",
  description:
    "The free Checkup Sheet: decode contract value, surrender value, and income base on your annuity statement, then work through the four questions every annuity owner should be able to answer.",
  alternates: { canonical: "/annuity-checkup/checkup-sheet" },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd(ANNUITY_SHEET_FAQS)} />
      <AnnuitySheetPage />
    </>
  );
}
