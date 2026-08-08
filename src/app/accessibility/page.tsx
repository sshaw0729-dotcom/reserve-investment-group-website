// Accessibility Statement — CORE-014. Draft.
import type { Metadata } from "next";
import { Breadcrumbs } from "../../components/marketing/Breadcrumbs";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Accessibility statement for the Reserve Investment Group, Inc website.",
};

export default function AccessibilityPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Accessibility Statement", href: "/accessibility/" }]} />
      <section className="container">
        <h1>Accessibility Statement</h1>
        <p>
          Reserve Investment Group, Inc is committed to making this website
          usable by as many people as possible, and targets WCAG 2.2 AA
          conformance. See ACCESSIBILITY.md in the project repository for
          the full testing standard.
        </p>
        <p>
          If you encounter an accessibility barrier on this site, contact us
          at [APPROVED PHONE NUMBER] or through our <a href="/contact/">contact form</a>.
        </p>
      </section>
    </main>
  );
}
