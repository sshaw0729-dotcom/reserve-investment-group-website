import type { Metadata } from "next";
import { MedicarePage } from "../../components/rig-funnel/MedicarePages";
import { JsonLd, faqJsonLd } from "../../lib/seo/jsonld";
import { MEDICARE_FAQS } from "../../components/rig-funnel/content/medicare.faq";

export const metadata: Metadata = {
  title: "Medicare, Explained in Plain English",
  description:
    "Turning 65 or reviewing your coverage? Plain-English Medicare education from a Cleveland-area insurance agency — Parts A–D, enrollment windows, and the honest tradeoffs. Education only, never a sales pitch.",
  alternates: { canonical: "/medicare" },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd(MEDICARE_FAQS)} />
      <MedicarePage />
    </>
  );
}
