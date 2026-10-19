import type { Metadata } from "next";
import { QuoteCondoPage } from "../../../components/rig-funnel/QuotePages";

export const metadata: Metadata = {
  title: "Condo Insurance Quote Worksheet",
  description:
    "Your unit, the association master policy, and your upgrades — the details a licensed Reserve Investment Group insurance agent needs for an HO-6 condo quote.",
  alternates: { canonical: "/quote/condo" },
};

export default function Page() {
  return <QuoteCondoPage />;
}
