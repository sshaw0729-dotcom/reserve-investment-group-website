import { describe, it, expect } from "vitest";
import {
  faqJsonLd,
  breadcrumbJsonLd,
  articleJsonLd,
  localBusinessJsonLd,
  serviceJsonLd,
} from "./jsonld";

describe("faqJsonLd", () => {
  it("returns null when there are no FAQs", () => {
    expect(faqJsonLd([])).toBeNull();
  });

         it("builds a FAQPage schema from FAQ entries", () => {
           const result = faqJsonLd([
             { q: "What is a reserve?", a: "A reserve creates options." },
             { q: "How does planning help?", a: "It creates direction." },
             ]);

            expect(result).toEqual({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is a reserve?",
                  acceptedAnswer: { "@type": "Answer", text: "A reserve creates options." },
                },
                {
                  "@type": "Question",
                  name: "How does planning help?",
                  acceptedAnswer: { "@type": "Answer", text: "It creates direction." },
                },
                ],
            });
         });
});

describe("breadcrumbJsonLd", () => {
  it("builds a BreadcrumbList schema with 1-indexed positions and absolute URLs", () => {
    const result = breadcrumbJsonLd(
      [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        ],
      "https://reserveinvestmentgroup.com"
      );

     expect(result).toEqual({
       "@context": "https://schema.org",
       "@type": "BreadcrumbList",
       itemListElement: [
         {
           "@type": "ListItem",
           position: 1,
           name: "Home",
           item: "https://reserveinvestmentgroup.com/",
         },
         {
           "@type": "ListItem",
           position: 2,
           name: "Services",
           item: "https://reserveinvestmentgroup.com/services/",
         },
         ],
     });
  });

         it("returns an empty itemListElement for an empty breadcrumb trail", () => {
           const result = breadcrumbJsonLd([], "https://reserveinvestmentgroup.com");
           expect(result.itemListElement).toEqual([]);
         });
});

describe("articleJsonLd", () => {
  it("builds an Article schema with no fabricated rating/review fields", () => {
    const result = articleJsonLd({
      headline: "Understanding Reserves",
      description: "An overview of financial reserves.",
      url: "https://reserveinvestmentgroup.com/insights/reserves/",
      datePublished: "2026-01-05",
      dateModified: "2026-02-10",
      publisherName: "Reserve Investment Group, Inc",
    });

     expect(result).toEqual({
       "@context": "https://schema.org",
       "@type": "Article",
       headline: "Understanding Reserves",
       description: "An overview of financial reserves.",
       url: "https://reserveinvestmentgroup.com/insights/reserves/",
       datePublished: "2026-01-05",
       dateModified: "2026-02-10",
       publisher: { "@type": "Organization", name: "Reserve Investment Group, Inc" },
     });

     // Guard against ever reintroducing fabricated review/rating data (SEO-STRATEGY.md).
     expect(result).not.toHaveProperty("aggregateRating");
    expect(result).not.toHaveProperty("review");
  });
});

describe("localBusinessJsonLd", () => {
  const baseParams = {
    name: "Reserve Investment Group, Inc",
    description: "Financial planning for individuals, families, and business owners.",
    url: "https://reserveinvestmentgroup.com/",
    telephone: "+1-216-555-0100",
    address: {
      streetAddress: "123 Main St",
      addressLocality: "Cleveland",
      addressRegion: "OH",
      postalCode: "44101",
      addressCountry: "US",
    },
  };

         it("builds a FinancialService schema with the supplied address", () => {
           const result = localBusinessJsonLd(baseParams);

            expect(result).toEqual({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              name: baseParams.name,
              description: baseParams.description,
              url: baseParams.url,
              telephone: baseParams.telephone,
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Main St",
                addressLocality: "Cleveland",
                addressRegion: "OH",
                postalCode: "44101",
                addressCountry: "US",
              },
            });
         });

         it("omits areaServed entirely when not provided", () => {
           const result = localBusinessJsonLd(baseParams);
           expect(result).not.toHaveProperty("areaServed");
         });

         it("includes areaServed when provided", () => {
           const result = localBusinessJsonLd({
             ...baseParams,
             areaServed: ["Cleveland, OH", "Shaker Heights, OH"],
           });
           expect(result.areaServed).toEqual(["Cleveland, OH", "Shaker Heights, OH"]);
         });
});

describe("serviceJsonLd", () => {
  it("builds a Service schema with a FinancialService provider", () => {
    const result = serviceJsonLd({
      name: "Retirement Planning",
      description: "Planning support for retirement readiness.",
      url: "https://reserveinvestmentgroup.com/services/retirement-planning/",
      providerName: "Reserve Investment Group, Inc",
    });

     expect(result).toEqual({
       "@context": "https://schema.org",
       "@type": "Service",
       serviceType: "Retirement Planning",
       description: "Planning support for retirement readiness.",
       url: "https://reserveinvestmentgroup.com/services/retirement-planning/",
       provider: { "@type": "FinancialService", name: "Reserve Investment Group, Inc" },
     });
  });
});
