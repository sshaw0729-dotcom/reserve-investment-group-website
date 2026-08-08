import type { LeadMagnetContent } from "./types";

// Lead magnets — MARKETING-ECOSYSTEM-BRIEF.md Section 5, added 2026-08-06.
// Real PDF checklists (public/resources/*.pdf), gated behind LeadForm.
// Educational/informational only — no promised outcomes, no performance
// figures, qualified language throughout ("may," "designed to help you
// think through"). Every PDF carries the same disclosure block as this
// site's other draft content and is [COMPLIANCE REVIEW REQUIRED] until
// approved. Completes the two placeholder titles that previously existed
// on /resources/ with no actual file, and adds a third tied to the
// Equity Compensation content cluster (Section 3).
export const LEAD_MAGNETS: LeadMagnetContent[] = [
  {
    assetId: "MAG-001",
    slug: "retirement-readiness-checklist",
    title: "Retirement Readiness Checklist",
    metaDescription:
      "A self-guided checklist for thinking through common retirement-planning considerations — income, taxes, healthcare, and estate planning.",
    pdfFilename: "retirement-readiness-checklist.pdf",
    intro:
      "Retirement planning involves coordinating several moving pieces — income, taxes, healthcare, and estate considerations among them. This checklist is designed to help you identify areas that may need attention, whether you're a few years out from retirement or already there.",
    whatsInside: [
      "Income & savings considerations across Social Security, retirement accounts, and other sources",
      "Tax and required-minimum-distribution planning prompts",
      "Healthcare and insurance coverage questions to review",
      "Estate and legacy items worth revisiting",
    ],
    relatedServiceSlugs: ["retirement-planning", "tax-aware-financial-planning"],
    relatedPersonaSlugs: ["pre-retirees", "retirees"],
    relatedInsightSlugs: ["retirement-income-planning"],
  },
  {
    assetId: "MAG-002",
    slug: "business-owner-planning-checklist",
    title: "Business-Owner Planning Checklist",
    metaDescription:
      "A self-guided checklist for business owners balancing business and personal financial decisions — retirement plans, succession, and risk.",
    pdfFilename: "business-owner-planning-checklist.pdf",
    intro:
      "For many business owners, the business itself represents a significant share of personal net worth — which means business decisions and personal financial planning are more connected than they might first appear. This checklist is designed to help you think through where the two intersect.",
    whatsInside: [
      "Where business and personal finances currently overlap",
      "Retirement plan design considerations for you and your employees",
      "Succession, buy-sell, and risk-coverage prompts",
    ],
    relatedServiceSlugs: ["business-owner-planning", "business-succession-planning"],
    relatedPersonaSlugs: ["business-owners", "manufacturing-leaders"],
    relatedInsightSlugs: ["business-succession-planning-getting-started"],
  },
  {
    assetId: "MAG-003",
    slug: "equity-compensation-checklist",
    title: "Equity Compensation Checklist for Executives",
    metaDescription:
      "A self-guided checklist for executives navigating stock options, RSUs, and deferred compensation.",
    pdfFilename: "equity-compensation-checklist.pdf",
    intro:
      "Equity compensation can be a meaningful part of an executive's overall financial picture, but it comes with its own timing, tax, and concentration-risk considerations that don't apply to salary alone. This checklist is designed to help you identify areas that may be worth a closer look.",
    whatsInside: [
      "Understanding vesting schedules and award types",
      "Tax and timing prompts for options and deferred compensation",
      "Concentration-risk and diversification considerations",
    ],
    relatedServiceSlugs: ["executive-financial-planning"],
    relatedPersonaSlugs: ["corporate-executives"],
    relatedInsightSlugs: ["equity-compensation-for-executives"],
  },
];
