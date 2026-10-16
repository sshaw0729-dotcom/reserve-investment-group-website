import type { Metadata } from "next";
import { MedicarePeriodsPage } from "../../../components/rig-funnel/MedicarePages";

export const metadata: Metadata = {
  title: "Medicare Enrollment Periods, Explained: IEP, AEP, and the Rest",
  description:
    "Medicare has more than one enrollment window, and each one does a different job. The Initial, Annual, General, and Special Enrollment Periods — plus the Medicare Advantage window — explained in plain English.",
  alternates: { canonical: "/medicare/enrollment-periods" },
};

export default function Page() {
  return <MedicarePeriodsPage />;
}
