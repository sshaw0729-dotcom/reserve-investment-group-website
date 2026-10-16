import type { Metadata } from "next";
import { MedicareTurning65Page } from "../../../components/rig-funnel/MedicarePages";

export const metadata: Metadata = {
  title: "Turning 65: Your Medicare Enrollment Window, Explained",
  description:
    "Your first Medicare window is 7 months long and it's built around your birthday. How the Initial Enrollment Period works, what happens if you miss it, and the working-past-65 rules — in plain English.",
  alternates: { canonical: "/medicare/turning-65" },
};

export default function Page() {
  return <MedicareTurning65Page />;
}
