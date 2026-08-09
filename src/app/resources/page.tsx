// Resources hub — CORE-007. Draft, pending compliance review. Data-driven
// from src/lib/content/leadmagnets.ts as of MARKETING-ECOSYSTEM-BRIEF.md
// Section 5 — each card now links to a real gated checklist, not a
// placeholder with no file behind it.
import type { Metadata } from "next";
import { Breadcrumbs } from "../../components/marketing/Breadcrumbs";
import { CardGrid } from "../../components/marketing/CardGrid";
import { LEAD_MAGNETS } from "../../lib/content/leadmagnets";

export const metadata: Metadata = {
  title: "Resources",
  description: "Educational resources and checklists from Reserve Investment Group, Inc.",
  alternates: { canonical: "/resources/" },
};

export default function ResourcesPage() {
  const RESOURCES = LEAD_MAGNETS.map((m) => ({
    title: m.title,
    href: `/resources/${m.slug}/`,
    description: m.metaDescription,
  }));

  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources/" }]} />
      <section className="container">
        <h1>Resources</h1>
        <p>Educational materials to help you think through your own planning priorities. These resources are informational and are not individualized advice.</p>
      </section>
      <CardGrid items={RESOURCES} />
    </main>
  );
}
