import type { Metadata } from "next";
import { QuoteBoatPage } from "../../../components/rig-funnel/QuotePages";

export const metadata: Metadata = {
  title: "Boat Insurance Quote Worksheet",
  description:
    "The vessel, its operators, and where it is used and kept — collected for a boat insurance quote from a licensed Reserve Investment Group insurance agent.",
  alternates: { canonical: "/quote/boat" },
};

export default function Page() {
  return <QuoteBoatPage />;
}
