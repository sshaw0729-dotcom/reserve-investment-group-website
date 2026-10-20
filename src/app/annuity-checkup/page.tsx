import type { Metadata } from "next";
import { AnnuityLandingPage } from "../../components/rig-funnel/AnnuityPages";

export const metadata: Metadata = {
  title: "Annuity Owner's Checkup",
  description:
    "A free, no-obligation review for annuity owners from Reserve Investment Group: what your contract costs you, what it will pay you, where your surrender period stands, and whether it is still doing its job.",
  alternates: { canonical: "/annuity-checkup" },
};

export default function Page() {
  return <AnnuityLandingPage />;
}
