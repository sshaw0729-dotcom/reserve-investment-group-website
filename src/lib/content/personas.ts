import type { PersonaContent } from "./types";

// Educational framing only — no page here implies that everyone in a
// given profession or life stage has the same needs. See
// COMPLIANCE-RISK-MAP.md ("Persona pages implying uniform needs").
export const PERSONAS: PersonaContent[] = [
  {
    assetId: "PER-001",
    slug: "business-owners",
    title: "Business Owners",
    metaDescription:
      "Financial planning considerations for business owners balancing business and personal finances.",
    intro:
      "Business owners often face planning considerations that don't come up for salaried employees — from cash-flow timing to how the business itself factors into long-term goals.",
    typicalQuestions: [
      "How much of my personal financial security is tied to the business?",
      "What retirement plan options make sense for a business like mine?",
      "How would a sale or transition affect my plan?",
    ],
    planningPriorities: [
      "Coordinating business and personal cash flow",
      "Retirement plan design considerations for the business",
      "Longer-term succession or exit considerations",
    ],
    relatedServiceSlugs: ["business-owner-planning", "business-succession-planning", "tax-aware-financial-planning"],
    relatedLocationSlugs: ["cleveland", "solon", "independence", "westlake", "lakewood"],
    faqs: [],
  },
  {
    assetId: "PER-002",
    slug: "healthcare-professionals",
    title: "Healthcare Professionals",
    metaDescription:
      "Financial planning considerations for healthcare professionals with variable compensation and demanding schedules.",
    intro:
      "Healthcare professionals may encounter planning considerations involving variable compensation, demanding schedules that leave little time for financial administration, and employer-sponsored retirement plans with their own quirks.",
    typicalQuestions: [
      "How do I make the most of my employer's retirement plan options?",
      "How should I think about disability coverage given my income?",
      "How do I fit financial planning into a demanding schedule?",
    ],
    planningPriorities: [
      "Understanding employer retirement plan options",
      "Reviewing income-protection coverage",
      "Building a plan that doesn't require constant hands-on management",
    ],
    relatedServiceSlugs: ["financial-planning", "insurance-and-risk-planning"],
    relatedLocationSlugs: ["mentor", "willoughby"],
    faqs: [],
  },
  {
    assetId: "PER-003",
    slug: "physicians",
    title: "Physicians",
    metaDescription:
      "Financial planning considerations for physicians involving variable compensation, liability exposure, and retirement plans.",
    intro:
      "Physicians may encounter planning considerations involving variable compensation, liability exposure, retirement plan options, and competing short- and long-term goals.",
    typicalQuestions: [
      "How does my compensation structure (RVU-based, partnership, employed) affect planning?",
      "What should I know about liability and asset-protection considerations?",
      "How do I balance loan repayment with saving for retirement?",
    ],
    planningPriorities: [
      "Understanding how compensation structure affects planning",
      "Reviewing liability and insurance coverage",
      "Balancing competing near-term and long-term financial goals",
    ],
    relatedServiceSlugs: ["financial-planning", "insurance-and-risk-planning", "retirement-planning"],
    relatedLocationSlugs: ["cleveland", "beachwood"],
    faqs: [
      { q: "Do you work with physicians at every career stage?", a: "We work with individuals at a range of career stages — an introductory conversation is the best way to determine fit. [SUBSTANTIATION REQUIRED]" },
    ],
  },
  {
    assetId: "PER-004",
    slug: "manufacturing-leaders",
    title: "Manufacturing Leaders",
    metaDescription:
      "Financial planning considerations for manufacturing executives and business owners.",
    intro:
      "Executives and owners in manufacturing businesses may encounter planning considerations tied to capital equipment cycles, business succession, and retirement plan design for their workforce.",
    typicalQuestions: [
      "How does equipment financing or capital investment affect my personal planning?",
      "What are my options for a succession plan as the business owner?",
      "What retirement plan options make sense for our workforce?",
    ],
    planningPriorities: [
      "Coordinating business capital decisions with personal financial goals",
      "Succession and transition planning",
      "Retirement plan design for the business",
    ],
    relatedServiceSlugs: ["business-owner-planning", "business-succession-planning"],
    relatedLocationSlugs: ["solon", "willoughby"],
    faqs: [],
  },
  {
    assetId: "PER-005",
    slug: "contractors",
    title: "Contractors",
    metaDescription:
      "Financial planning considerations for contractors and trade-business owners.",
    intro:
      "Contractors and trade-business owners may encounter planning considerations tied to seasonal cash-flow swings, equipment financing, and building savings outside of a traditional paycheck.",
    typicalQuestions: [
      "How do I plan around seasonal or project-based income?",
      "What retirement savings options make sense without an employer plan?",
      "How does equipment or vehicle financing affect my personal finances?",
    ],
    planningPriorities: [
      "Smoothing planning around variable income",
      "Retirement savings options for the self-employed",
      "Coordinating business and personal financial decisions",
    ],
    relatedServiceSlugs: ["business-owner-planning", "financial-planning"],
    relatedLocationSlugs: ["mentor", "willoughby", "strongsville"],
    faqs: [],
  },
  {
    assetId: "PER-006",
    slug: "corporate-executives",
    title: "Corporate Executives",
    metaDescription:
      "Financial planning considerations for corporate executives navigating equity compensation and deferred income.",
    intro:
      "Corporate executives may encounter planning considerations involving equity compensation, deferred-compensation elections, and career transitions.",
    typicalQuestions: [
      "How should I think about vesting schedules and concentration risk in company stock?",
      "What should I consider before making a deferred-compensation election?",
      "How would a departure or transition affect my plan?",
    ],
    planningPriorities: [
      "Coordinating equity compensation with a broader plan",
      "Timing considerations around deferred compensation",
      "Planning ahead of a potential career transition",
    ],
    relatedServiceSlugs: ["executive-financial-planning", "investment-strategy"],
    relatedLocationSlugs: ["shaker-heights", "beachwood", "hudson", "independence"],
    faqs: [],
  },
  {
    assetId: "PER-007",
    slug: "pre-retirees",
    title: "Pre-Retirees",
    metaDescription:
      "Financial planning considerations for those approaching retirement.",
    intro:
      "As retirement approaches, planning priorities often shift from accumulation toward questions of timing, income, and flexibility.",
    typicalQuestions: [
      "When can I afford to retire?",
      "How should my investment approach change as retirement gets closer?",
      "How do different income sources fit together in retirement?",
    ],
    planningPriorities: [
      "Reviewing retirement timing and readiness",
      "Coordinating income sources for retirement",
      "Adjusting investment approach as the time horizon shortens",
    ],
    relatedServiceSlugs: ["retirement-planning", "financial-planning"],
    relatedLocationSlugs: ["willoughby", "mentor", "westlake", "strongsville", "lakewood"],
    faqs: [],
  },
  {
    assetId: "PER-008",
    slug: "retirees",
    title: "Retirees",
    metaDescription:
      "Financial planning considerations for those in retirement.",
    intro:
      "In retirement, planning priorities often center on coordinating income, managing spending, and thinking through legacy considerations.",
    typicalQuestions: [
      "How do I coordinate withdrawals across different account types?",
      "How should my spending plan adapt over time?",
      "How does my plan relate to what I'd like to leave behind?",
    ],
    planningPriorities: [
      "Coordinating income and withdrawal sequencing",
      "Reviewing spending plans periodically",
      "Coordinating legacy considerations with estate-planning documents",
    ],
    relatedServiceSlugs: ["retirement-planning", "estate-planning-coordination"],
    relatedLocationSlugs: ["shaker-heights", "cleveland-heights"],
    faqs: [],
  },
  {
    assetId: "PER-009",
    slug: "high-net-worth-families",
    title: "High-Net-Worth Families",
    metaDescription:
      "Coordinating complex financial planning considerations across generations.",
    intro:
      "Families with more complex financial pictures may encounter planning considerations that span generations — coordinating investments, estate documents, and family conversations together.",
    typicalQuestions: [
      "How do we coordinate planning across multiple family members or generations?",
      "How does our estate plan relate to our investment approach?",
      "How do we think about charitable giving as part of our plan?",
    ],
    planningPriorities: [
      "Coordinating planning across family members",
      "Aligning investment approach with estate-planning documents",
      "Considering charitable-giving priorities where relevant",
    ],
    relatedServiceSlugs: ["wealth-management", "estate-planning-coordination"],
    relatedLocationSlugs: ["shaker-heights", "beachwood", "hudson"],
    faqs: [],
  },
];
