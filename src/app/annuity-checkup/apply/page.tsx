import type { Metadata } from "next";
import { AnnuityApplyPage } from "../../../components/rig-funnel/AnnuityPages";

export const metadata: Metadata = {
  title: "Annuity Owner's Checkup — Application",
  description:
    "A few questions about your annuity so your free Annuity Owner's Checkup is prepared before we talk. No obligation, and no Social Security number or account credentials are ever requested.",
  alternates: { canonical: "/annuity-checkup/apply" },
};

export default function Page() {
  return <AnnuityApplyPage />;
}
