import type { Metadata } from "next";
import { AnnuitySheetPage } from "../../../components/rig-funnel/AnnuityPages";

export const metadata: Metadata = {
  title: "Annuity Owner's Checkup Sheet",
  description:
    "The free Checkup Sheet: decode contract value, surrender value, and income base on your annuity statement, then work through the four questions every annuity owner should be able to answer.",
  alternates: { canonical: "/annuity-checkup/checkup-sheet" },
};

export default function Page() {
  return <AnnuitySheetPage />;
}
