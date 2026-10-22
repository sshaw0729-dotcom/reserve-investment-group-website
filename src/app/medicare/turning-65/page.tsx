import type { Metadata } from "next";
import { MedicareTurning65Page } from "../../../components/rig-funnel/MedicarePages";
import { JsonLd, faqJsonLd } from "../../../lib/seo/jsonld";
import { MEDICARE_TURNING65_FAQS } from "../../../components/rig-funnel/content/medicare-turning65.faq";

export const metadata: Metadata = {
  title: "Turning 65: Your Medicare Enrollment Window, Explained",
  description:
    "Your first Medicare window is 7 months long and it's built around your birthday. How the Initial Enrollment Period works, what happens if you miss it, and the working-past-65 rules — in plain English.",
  alternates: { canonical: "/medicare/turning-65" },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd(MEDICARE_TURNING65_FAQS)} />
      <MedicareTurning65Page />
    </>
  );
}
