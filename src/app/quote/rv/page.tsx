import type { Metadata } from "next";
import { QuoteRvPage } from "../../../components/rig-funnel/QuotePages";

export const metadata: Metadata = {
  title: "RV Insurance Quote Worksheet",
  description:
    "The rig and how you use it — collected for an RV insurance quote from a licensed Reserve Investment Group insurance agent.",
  alternates: { canonical: "/quote/rv" },
};

export default function Page() {
  return <QuoteRvPage />;
}
