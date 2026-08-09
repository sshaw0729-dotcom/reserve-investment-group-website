// Locations hub — not in the original CORE- list but required by
// SITE-ARCHITECTURE.md's hub-and-spoke model as the parent of the
// location spoke pages. Wave 1 only; Wave 2 cities are intentionally
// withheld until Wave 1 demonstrates quality per SITE-ARCHITECTURE.md.
import type { Metadata } from "next";
import { Breadcrumbs } from "../../components/marketing/Breadcrumbs";
import { CardGrid } from "../../components/marketing/CardGrid";
import { LOCATIONS } from "../../lib/content/locations";

export const metadata: Metadata = {
  title: "Locations",
  description: "Areas Reserve Investment Group, Inc serves across Greater Cleveland.",
  alternates: { canonical: "/locations/" },
};

export default function LocationsPage() {
  const items = LOCATIONS.map((l) => ({
    title: l.title,
    href: `/locations/${l.slug}/`,
    description: l.metaDescription,
  }));

  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Locations", href: "/locations/" }]} />
      <section className="container">
        <h1>Areas We Serve</h1>
        <p>
          We work with clients across Greater Cleveland. This is not a
          complete list of every community we can serve — reach out if
          your area isn&apos;t listed.
        </p>
      </section>
      <CardGrid items={items} />
    </main>
  );
}
