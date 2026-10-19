import type { Metadata } from "next";
import { QuoteIndexPage } from "../../components/rig-funnel/QuotePages";

export const metadata: Metadata = {
  title: "Insurance Quote Worksheets",
  description:
    "Start an insurance quote with Reserve Investment Group: worksheets for auto, home, condo, life, health & Medicare, motorcycle, boat, and RV coverage.",
  alternates: { canonical: "/quote" },
};

export default function Page() {
  return <QuoteIndexPage />;
}
