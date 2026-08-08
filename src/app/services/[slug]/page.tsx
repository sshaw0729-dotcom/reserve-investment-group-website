// Service spoke pages — dynamic route driven by src/lib/content/services.ts.
// Each entry carries distinct intro/considerations/process/FAQ content per
// SITE-ARCHITECTURE.md's page-creation checklist — this is not a
// city/service-swap template. All copy is Draft pending compliance review.
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES } from "../../../lib/content/services";
import { PERSONAS } from "../../../lib/content/personas";
import { LOCATIONS } from "../../../lib/content/locations";
import { Breadcrumbs } from "../../../components/marketing/Breadcrumbs";
import { CTAStrip } from "../../../components/marketing/CTAStrip";
import { AccordionItem } from "../../../components/ui/Accordion";
import { JsonLd, faqJsonLd } from "../../../lib/seo/jsonld";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return {};
  return { title: service.title, description: service.metaDescription };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return notFound();

  const relatedPersonas = PERSONAS.filter((p) => service.relatedPersonaSlugs.includes(p.slug));
  const relatedLocations = LOCATIONS.filter((l) => service.relatedLocationSlugs.includes(l.slug));

  return (
    <main>
      <JsonLd data={faqJsonLd(service.faqs)} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services/" },
          { label: service.title, href: `/services/${service.slug}/` },
        ]}
      />
      <section className="container">
        <h1>{service.title}</h1>
        <p>{service.intro}</p>

        <h2>Who this may be appropriate for</h2>
        <p>{service.appropriateFor}</p>

        <h2>Common planning considerations</h2>
        <ul>
          {service.considerations.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>

        <h2>Our approved process</h2>
        <ol>
          {service.process.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>

        {relatedPersonas.length > 0 && (
          <>
            <h2>Who we work with</h2>
            <ul>
              {relatedPersonas.map((p) => (
                <li key={p.slug}>
                  <a href={`/who-we-help/${p.slug}/`}>{p.title}</a>
                </li>
              ))}
            </ul>
          </>
        )}

        {relatedLocations.length > 0 && (
          <>
            <h2>Areas we serve</h2>
            <ul>
              {relatedLocations.map((l) => (
                <li key={l.slug}>
                  <a href={`/locations/${l.slug}/`}>{l.title}</a>
                </li>
              ))}
            </ul>
          </>
        )}

        {service.faqs.length > 0 && (
          <>
            <h2>Frequently asked questions</h2>
            <div className="accordion">
              {service.faqs.map((faq) => (
                <AccordionItem key={faq.q} question={faq.q} pageSlug={`/services/${service.slug}/`}>
                  <p>{faq.a}</p>
                </AccordionItem>
              ))}
            </div>
          </>
        )}
      </section>
      <CTAStrip label="Discuss your planning priorities" href="/schedule/" />
    </main>
  );
}
