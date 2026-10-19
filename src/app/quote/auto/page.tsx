import type { Metadata } from "next";
import { QuoteAutoPage } from "../../../components/rig-funnel/QuotePages";

export const metadata: Metadata = {
  title: "Auto Insurance Quote Worksheet",
  description:
    "Give us your drivers, vehicles, and current coverage once, and a licensed Reserve Investment Group insurance agent will prepare your auto insurance quote.",
  alternates: { canonical: "/quote/auto" },
};

export default function Page() {
  return <QuoteAutoPage />;
}
