// Persona spoke pages — dynamic route driven by src/lib/content/personas.ts.
// Educational framing only, per COMPLIANCE-RISK-MAP.md — never implies
// uniform needs across an entire profession or life stage.
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PERSONAS } from "../../../lib/content/personas";
import { SERVICES } from "../../../lib/content/services";
import { LOCATIONS } from "../../../lib/content/locations";
import { Breadcrumbs } from "../../../components/marketing/Breadcrumbs";
import { CTAStrip } from "../../../components/marketing/CTAStrip";
import { AccordionItem } from "../../../components/ui/Accordion";
import { JsonLd, faqJsonLd } from "../../../lib/seo/jsonld";

export function generateStaticParams() {
  return PERSONAS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const persona = PERSONAS.find((p) => p.slug === params.slug);
  if (!persona) return {};
  return { title: persona.title, description: persona.metaDescription };
}

export default function PersonaPage({ params }: { params: { slug: string } }) {
  const persona = PERSONAS.find((p) => p.slug === params.slug);
  if (!persona) return notFound();

  const relatedServices = SERVICES.filter((s) => persona.relatedServiceSlugs.includes(s.slug));
  const relatedLocations = LOCATIONS.filter((l) => persona.relatedLocationSlugs.includes(l.slug));

  return (
    <main>
      <JsonLd data={faqJsonLd(persona.faqs)} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Who We Help", href: "/who-we-help/" },
          { label: persona.title, href: `/who-we-help/${persona.slug}/` },
        ]}
      />
      <section className="container">
        <h1>{persona.title}</h1>
        <p>{persona.intro}</p>

        <h2>Typical financial questions</h2>
        <ul>
          {persona.typicalQuestions.map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ul>

        <h2>Potential planning priorities</h2>
        <ul>
          {persona.planningPriorities.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>

        {relatedServices.length > 0 && (
          <>
            <h2>Relevant services</h2>
            <ul>
              {relatedServices.map((s) => (
                <li key={s.slug}>
                  <a href={`/services/${s.slug}/`}>{s.title}</a>
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

        {persona.faqs.length > 0 && (
          <>
            <h2>Frequently asked questions</h2>
            <div className="accordion">
              {persona.faqs.map((faq) => (
                <AccordionItem key={faq.q} question={faq.q} pageSlug={`/who-we-help/${persona.slug}/`}>
                  <p>{faq.a}</p>
                </AccordionItem>
              ))}
            </div>
          </>
        )}
      </section>
      <CTAStrip label="Speak with our team" href="/schedule/" />
    </main>
  );
}
