// Location spoke pages — dynamic route driven by src/lib/content/locations.ts.
// Never claims a physical office unless MISSING-INFORMATION-REGISTER.md
// item #14 is resolved. No fabricated local history, memberships, or
// client counts anywhere in this template or its content source.
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCATIONS } from "../../../lib/content/locations";
import { SERVICES } from "../../../lib/content/services";
import { PERSONAS } from "../../../lib/content/personas";
import { Breadcrumbs } from "../../../components/marketing/Breadcrumbs";
import { CTAStrip } from "../../../components/marketing/CTAStrip";
import { AccordionItem } from "../../../components/ui/Accordion";
import { JsonLd, faqJsonLd } from "../../../lib/seo/jsonld";

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const location = LOCATIONS.find((l) => l.slug === params.slug);
  if (!location) return {};
  return { title: location.title, description: location.metaDescription, alternates: { canonical: `/locations/${location.slug}/` } };
}

export default function LocationPage({ params }: { params: { slug: string } }) {
  const location = LOCATIONS.find((l) => l.slug === params.slug);
  if (!location) return notFound();

  const relevantServices = SERVICES.filter((s) => location.relevantServiceSlugs.includes(s.slug));
  const relevantPersonas = PERSONAS.filter((p) => location.relevantPersonaSlugs.includes(p.slug));

  return (
    <main>
      <JsonLd data={faqJsonLd(location.faqs)} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/locations/" },
          { label: location.title, href: `/locations/${location.slug}/` },
        ]}
      />
      <section className="container">
        <h1>Financial Planning in {location.title}, Ohio</h1>
        <p>{location.areaDescription}</p>
        <p>{location.audienceConsiderations}</p>

        {relevantServices.length > 0 && (
          <>
            <h2>Relevant services</h2>
            <ul>
              {relevantServices.map((s) => (
                <li key={s.slug}>
                  <a href={`/services/${s.slug}/`}>{s.title}</a>
                </li>
              ))}
            </ul>
          </>
        )}

        {relevantPersonas.length > 0 && (
          <>
            <h2>Who we work with here</h2>
            <ul>
              {relevantPersonas.map((p) => (
                <li key={p.slug}>
                  <a href={`/who-we-help/${p.slug}/`}>{p.title}</a>
                </li>
              ))}
            </ul>
          </>
        )}

        {location.faqs.length > 0 && (
          <>
            <h2>Frequently asked questions</h2>
            <div className="accordion">
              {location.faqs.map((faq) => (
                <AccordionItem key={faq.q} question={faq.q} pageSlug={`/locations/${location.slug}/`}>
                  <p>{faq.a}</p>
                </AccordionItem>
              ))}
            </div>
          </>
        )}
      </section>
      <CTAStrip label="Schedule an introductory conversation" href="/schedule/" />
    </main>
  );
}
