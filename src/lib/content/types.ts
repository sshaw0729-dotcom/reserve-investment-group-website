export type Faq = { q: string; a: string };

export type ServiceContent = {
  assetId: string;
  slug: string;
  title: string;
  metaDescription: string;
  intro: string;
  appropriateFor: string;
  considerations: string[];
  process: string[];
  relatedPersonaSlugs: string[];
  relatedLocationSlugs: string[];
  faqs: Faq[];
};

export type PersonaContent = {
  assetId: string;
  slug: string;
  title: string;
  metaDescription: string;
  intro: string;
  typicalQuestions: string[];
  planningPriorities: string[];
  relatedServiceSlugs: string[];
  relatedLocationSlugs: string[];
  faqs: Faq[];
};

export type LocationContent = {
  assetId: string;
  slug: string;
  title: string;
  metaDescription: string;
  areaDescription: string;
  audienceConsiderations: string;
  relevantServiceSlugs: string[];
  relevantPersonaSlugs: string[];
  faqs: Faq[];
};

// Lead magnets (MARKETING-ECOSYSTEM-BRIEF.md Section 5). Each is a real
// PDF checklist in public/resources/{pdfFilename}, gated behind LeadForm
// on its own landing page. No promised outcomes; educational framing
// only, same rules as every other content type in this file.
export type LeadMagnetContent = {
  assetId: string;
  slug: string;
  title: string;
  metaDescription: string;
  pdfFilename: string;
  intro: string;
  whatsInside: string[];
  relatedServiceSlugs: string[];
  relatedPersonaSlugs: string[];
  relatedInsightSlugs: string[];
};

export type InsightSection = { heading: string; body: string };

// Content clusters / pillar pages (MARKETING-ECOSYSTEM-BRIEF.md Section
// 3). contentType "pillar" is the broad overview page for a cluster;
// "cluster" articles are narrower supporting pieces that link back to
// their pillar. Educational framing only — no promised outcomes, no
// specific investment recommendations, no tax/legal advice presented as
// definitive (see PROJECT-BRIEF.md, COMPLIANCE-RISK-MAP.md).
export type InsightContent = {
  assetId: string;
  slug: string;
  title: string;
  metaDescription: string;
  contentType: "pillar" | "cluster";
  clusterId: string;
  clusterTitle: string;
  intro: string;
  sections: InsightSection[];
  keyTakeaways: string[];
  relatedServiceSlugs: string[];
  relatedPersonaSlugs: string[];
  relatedInsightSlugs: string[];
  faqs: Faq[];
};
