// Schedule a Conversation — CORE-010. Scheduling via Microsoft Bookings.
import type { Metadata } from "next";
import { Breadcrumbs } from "../../components/marketing/Breadcrumbs";

export const metadata: Metadata = {
  title: "Schedule a Conversation",
  description: "Schedule an introductory conversation with Reserve Investment Group, Inc.",
  alternates: { canonical: "/schedule/" },
};

export default function SchedulePage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Schedule a Conversation", href: "/schedule/" }]} />
      <section className="container">
        <h1>Schedule an Introductory Conversation</h1>
        <p>
          Pick a time that works for you. This is a no-pressure conversation
          about your goals and current planning.
        </p>
        <p>
            <a
              className="button"
              href="https://outlook.office.com/book/ReserveInvestmentGroup1@reserveinvestmentgroup.com/?ismsaljsauthenabled"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a time on our calendar
            </a>
          </p>
      </section>
    </main>
  );
}
