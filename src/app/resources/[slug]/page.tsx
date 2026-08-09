// Lead magnet landing pages — dynamic route driven by
// src/lib/content/leadmagnets.ts. Each gates a real PDF checklist
// (public/resources/{pdfFilename}) behind LeadForm. Educational framing
// only — no promised outcomes. See MARKETING-ECOSYSTEM-BRIEF.md Section 5.
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LEAD_MAGNETS } from "../../../lib/content/leadmagnets";
import { SERVICES } from "../../../lib/content/services";
import { PERSONAS } from "../../../lib/content/personas";
import { INSIGHTS } from "../../../lib/content/insights";
import { Breadcrumbs } from "../../../components/marketing/Breadcrumbs";
import { DisclosureBlock } from "../../../components/marketing/DisclosureBlock";
import { LeadForm } from "../../../components/forms/LeadForm";

export function generateStaticParams() {
  return LEAD_MAGNETS.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const magnet = LEAD_MAGNETS.find((m) => m.slug === params.slug);
  if (!magnet) return {};
  return { title: magnet.title, description: magnet.metaDescription };
}

export default function LeadMagnetPage({ params }: { params: { slug: string } }) {
  const magnet = LEAD_MAGNETS.find((m) => m.slug === params.slug);
  if (!magnet) return notFound();

  const relatedServices = SERVICES.filter((s) => magnet.relatedServiceSlugs.includes(s.slug));
  const relatedPersonas = PERSONAS.filter((p) => magnet.relatedPersonaSlugs.includes(p.slug));
  const relatedInsights = INSIGHTS.filter((i) => magnet.relatedInsightSlugs.includes(i.slug));
  const pdfHref = `/resources/${magnet.pdfFilename}`;

  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources/" },
          { label: magnet.title, href: `/resources/${magnet.slug}/` },
        ]}
      />
      <section className="container">
        <h1>{magnet.title}</h1>
        <p>{magnet.intro}</p>

        <h2>What&apos;s inside</h2>
        <ul>
          {magnet.whatsInside.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>Get your copy</h2>
        <p>
          Fill out the form below and your checklist will be available to
          download immediately.
        </p>
        <LeadForm
          formId={magnet.slug}
          pageSlug={`/resources/${magnet.slug}/`}
          downloadHref={pdfHref}
          downloadLabel={`Download the ${magnet.title}`}
        />

        {relatedInsights.length > 0 && (
          <>
            <h2>Related reading</h2>
            <ul>
              {relatedInsights.map((i) => (
                <li key={i.slug}>
                  <a href={`/insights/${i.slug}/`}>{i.title}</a>
                </li>
              ))}
            </ul>
          </>
        )}

        {relatedServices.length > 0 && (
          <>
            <h2>Related services</h2>
            <ul>
              {relatedServices.map((s) => (
                <li key={s.slug}>
                  <a href={`/services/${s.slug}/`}>{s.title}</a>
                </li>
              ))}
            </ul>
          </>
        )}

        {relatedPersonas.length > 0 && (
          <>
            <h2>Who this may be relevant for</h2>
            <ul>
              {relatedPersonas.map((p) => (
                <li key={p.slug}>
                  <a href={`/who-we-help/${p.slug}/`}>{p.title}</a>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>

      <DisclosureBlock>
        This checklist is educational and informational only. It is not
        individualized investment, tax, or legal advice, is not a
        complete financial plan, and should not be relied on as the sole
        basis for any financial decision. Reserve Investment Group, Inc. is not a registered investment adviser or broker-dealer. See our{" "}
        <a href="/disclosures/">Form CRS &amp; Disclosures</a> page for additional information.
      </DisclosureBlock>
    </main>
  );
}
