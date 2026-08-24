import type { Metadata } from "next";
import LifeInsurancePage from "../../components/rig-funnel/LifeInsurancePage";

export const metadata: Metadata = {
  title: "Term, IUL & Final Expense Life Insurance",
  description:
    "Explore term, indexed universal life, and final-expense insurance options with a licensed Reserve Investment Group insurance agent.",
  alternates: { canonical: "/life-insurance" },
};

export default function Page() {
  return <LifeInsurancePage />;
}
