import type { Metadata } from "next";
import { MedicarePeriodsPage } from "../../../components/rig-funnel/MedicarePages";
import { JsonLd, faqJsonLd } from "../../../lib/seo/jsonld";
import { MEDICARE_PERIODS_FAQS } from "../../../components/rig-funnel/content/medicare-periods.faq";

export const metadata: Metadata = {
  title: "Medicare Enrollment Periods, Explained: IEP, AEP, and the Rest",
  description:
    "Medicare has more than one enrollment window, and each one does a different job. The Initial, Annual, General, and Special Enrollment Periods — plus the Medicare Advantage window — explained in plain English.",
  alternates: { canonical: "/medicare/enrollment-periods" },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd(MEDICARE_PERIODS_FAQS)} />
      <MedicarePeriodsPage />
    </>
  );
}
