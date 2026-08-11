import type { ServiceContent } from "./types";

// All copy below is placeholder/draft and carries [COMPLIANCE REVIEW
// REQUIRED] status until approved — see COMPLIANCE-PACKAGE-TEMPLATE.md.
// Language is intentionally qualified ("may help", "designed to", "can
// identify") per PROJECT-BRIEF.md. No promises of returns, savings, or
// guaranteed outcomes appear anywhere in this file.
export const SERVICES: ServiceContent[] = [
  {
    assetId: "SVC-001",
    slug: "financial-planning",
    title: "Financial Planning",
    metaDescription:
      "Financial planning designed to help organize your goals and current financial picture into a coordinated plan.",
    intro:
      "Financial planning is designed to help you organize your goals, understand your current financial picture, and identify areas that may need attention.",
    appropriateFor:
      "Individuals and families who want a clearer, more coordinated view of their finances rather than a collection of disconnected accounts and decisions.",
    considerations: [
      "How cash flow, savings, and debt fit together across your household",
      "Whether existing accounts and coverage still match your current goals",
      "How near-term decisions may affect longer-term plans",
    ],
    process: [
      "An introductory conversation about your goals and current situation",
      "A review of your current financial picture",
      "A discussion of considerations and options, coordinated with your tax and legal professionals where appropriate",
    ],
    relatedPersonaSlugs: ["pre-retirees", "retirees", "high-net-worth-families"],
    relatedLocationSlugs: ["cleveland", "shaker-heights", "westlake", "strongsville", "lakewood"],
    faqs: [
      { q: "Do I need a certain amount of assets to start?", a: "Reserve Investment Group, Inc. generally works with clients who have at least $500,000 in investable assets for ongoing financial planning services. An introductory conversation is available regardless of asset level to help determine fit." },
      { q: "How is financial planning different from investment management?", a: "Financial planning looks at your broader financial picture; investment strategy is one part of that picture. See Investment Strategy for more detail." },
    ],
  },
  {
    assetId: "SVC-002",
    slug: "wealth-management",
    title: "Wealth Management",
    metaDescription:
      "Ongoing coordination of your financial decisions as circumstances, goals, and markets change.",
    intro:
      "Wealth management is designed to be an ongoing relationship — coordinating your financial decisions as your circumstances, goals, and the broader environment change over time.",
    appropriateFor:
      "Individuals and families who want ongoing coordination across investments, planning, and periodic check-ins rather than a single one-time review.",
    considerations: [
      "How your investment approach lines up with your goals and time horizon",
      "How life changes (a sale, inheritance, career change) may affect your plan",
      "How often your plan should be revisited",
    ],
    process: [
      "An initial review of your goals, current investments, and planning",
      "A discussion of a coordinated approach going forward",
      "Periodic check-ins to revisit the plan as circumstances change",
    ],
    relatedPersonaSlugs: ["high-net-worth-families", "business-owners"],
    relatedLocationSlugs: ["shaker-heights", "beachwood", "hudson", "independence", "westlake"],
    faqs: [
      { q: "How often will we meet?", a: "We typically meet quarterly, with additional check-ins as needed when your circumstances or goals change." },
    ],
  },
  {
    assetId: "SVC-003",
    slug: "retirement-planning",
    title: "Retirement Planning",
    metaDescription:
      "Planning considerations for income, spending, and timing around retirement.",
    intro:
      "Retirement planning is designed to help you think through income, spending, and timing considerations as you approach or move through retirement.",
    appropriateFor:
      "Pre-retirees weighing when and how to retire, and retirees coordinating income sources and spending.",
    considerations: [
      "How different income sources (savings, Social Security, pensions) may work together",
      "How spending needs may change through different phases of retirement",
      "How timing decisions may affect flexibility later on",
    ],
    process: [
      "A discussion of your retirement timeline and priorities",
      "A review of income sources and current savings",
      "A discussion of considerations for sequencing decisions, coordinated with your tax professional where appropriate",
    ],
    relatedPersonaSlugs: ["pre-retirees", "retirees"],
    relatedLocationSlugs: ["willoughby", "mentor", "solon", "westlake", "strongsville", "lakewood"],
    faqs: [
      { q: "When should I start thinking about retirement planning?", a: "There's no single right time — many people find it helpful to start a few years before their target retirement date, but earlier conversations can also be useful." },
    ],
  },
  {
    assetId: "SVC-004",
    slug: "investment-strategy",
    title: "Investment Strategy",
    metaDescription:
      "Coordinating an investment approach aligned to your goals, time horizon, and risk tolerance.",
    intro:
      "Investment strategy is designed to coordinate how your assets are positioned relative to your goals, time horizon, and comfort with risk.",
    appropriateFor:
      "Individuals who want their investment approach to be explicitly tied to a broader plan rather than managed in isolation.",
    considerations: [
      "How your time horizon and goals may inform an appropriate approach",
      "How much risk you're comfortable with, and how that may change over time",
      "How your approach is reviewed and adjusted as circumstances change",
    ],
    process: [
      "A discussion of your goals, time horizon, and risk tolerance",
      "A review of your current approach, if any",
      "A discussion of considerations going forward",
    ],
    relatedPersonaSlugs: ["high-net-worth-families", "corporate-executives"],
    relatedLocationSlugs: ["cleveland", "beachwood"],
                faqs: [],
  },
  {
    assetId: "SVC-005",
    slug: "business-owner-planning",
    title: "Business-Owner Planning",
    metaDescription:
      "Planning considerations that balance business and personal financial decisions.",
    intro:
      "Business-owner planning is designed to help you think through how your business and personal finances relate to one another.",
    appropriateFor:
      "Owners whose personal financial picture is closely tied to the performance and future of their business.",
    considerations: [
      "How business cash flow relates to personal savings and spending",
      "How retirement plan options for the business may fit your own goals",
      "How business value factors into your overall financial picture",
    ],
    process: [
      "A discussion of both your business and personal financial goals",
      "A review of how the two currently relate to one another",
      "A discussion of considerations going forward, coordinated with your other advisors where appropriate",
    ],
    relatedPersonaSlugs: ["business-owners", "contractors", "manufacturing-leaders"],
    relatedLocationSlugs: ["cleveland", "solon", "cleveland-heights", "independence", "lakewood"],
    faqs: [],
  },
  {
    assetId: "SVC-006",
    slug: "executive-financial-planning",
    title: "Executive Financial Planning",
    metaDescription:
      "Planning considerations around equity compensation, deferred income, and career transitions.",
    intro:
      "Executive financial planning is designed to address considerations that often come with corporate leadership roles — equity compensation, deferred income, and career transitions among them.",
    appropriateFor:
      "Corporate executives navigating compensation structures that go beyond salary alone.",
    considerations: [
      "How equity compensation (options, RSUs) may fit into your broader plan",
      "How deferred-compensation timing decisions may affect your finances",
      "How a career transition or departure may affect your plan",
    ],
    process: [
      "A discussion of your compensation structure and goals",
      "A review of how current elections and timing decisions fit your situation",
      "A discussion of considerations going forward, coordinated with your tax professional where appropriate",
    ],
    relatedPersonaSlugs: ["corporate-executives"],
    relatedLocationSlugs: ["shaker-heights", "beachwood", "hudson", "independence"],
    faqs: [],
  },
  {
    assetId: "SVC-007",
    slug: "business-succession-planning",
    title: "Business Succession Planning",
    metaDescription:
      "Planning considerations for transitioning or exiting a business.",
    intro:
      "Business succession planning is designed to help you think through the financial considerations involved in eventually transitioning or exiting your business.",
    appropriateFor:
      "Business owners who want to start thinking ahead about a transition, whether that's years away or approaching.",
    considerations: [
      "How business value and personal financial goals relate to a transition timeline",
      "How different transition paths (family, employees, outside sale) may affect planning",
      "How to coordinate financial, legal, and tax considerations together",
    ],
    process: [
      "A discussion of your transition goals and timeline, if any",
      "A review of how the business currently fits into your broader financial picture",
      "A discussion of considerations going forward, coordinated with your legal and tax professionals",
    ],
    relatedPersonaSlugs: ["business-owners", "manufacturing-leaders", "contractors"],
    relatedLocationSlugs: ["cleveland"],
    faqs: [],
  },
  {
    assetId: "SVC-008",
    slug: "estate-planning-coordination",
    title: "Estate-Planning Coordination",
    metaDescription:
      "Coordinating with your legal professionals on estate-planning considerations.",
    intro:
      "Estate-planning coordination is designed to help align your financial plan with your estate-planning documents, in coordination with your legal professionals.",
    appropriateFor:
      "Individuals and families who want their financial plan and estate documents to reflect the same goals.",
    considerations: [
      "Whether beneficiary designations and account titling reflect your current wishes",
      "How your financial plan relates to your existing (or planned) estate documents",
      "How to coordinate updates with your attorney as circumstances change",
    ],
    process: [
      "A discussion of your goals for beneficiaries and legacy",
      "A review of current beneficiary designations and account structures",
      "Coordination with your estate-planning attorney; we do not draft legal documents ourselves",
    ],
    relatedPersonaSlugs: ["high-net-worth-families", "retirees"],
    relatedLocationSlugs: ["shaker-heights", "beachwood", "hudson"],
    faqs: [
      { q: "Can you draft my will or trust?", a: "No — we are not a law firm and do not provide legal advice or draft legal documents. We coordinate with your attorney on the financial aspects of your estate plan." },
    ],
  },
  {
    assetId: "SVC-009",
    slug: "insurance-and-risk-planning",
    title: "Insurance and Risk Planning",
    metaDescription:
      "Identifying unmanaged risks and reviewing coverage considerations.",
    intro:
      "Insurance and risk planning is designed to help identify risks that may be unmanaged and review how existing coverage lines up with your circumstances.",
    appropriateFor:
      "Individuals and families who haven't reviewed their coverage recently, or who have had a major life change.",
    considerations: [
      "Whether existing coverage still matches your current circumstances",
      "What risks may currently be unaddressed",
      "How coverage decisions relate to your broader financial plan",
    ],
    process: [
      "A review of your current coverage, where available",
      "A discussion of risks that may warrant attention",
      "A discussion of considerations and options; final coverage decisions and purchases involve a licensed insurance professional",
    ],
    relatedPersonaSlugs: ["business-owners", "physicians"],
    relatedLocationSlugs: ["mentor", "willoughby", "strongsville"],
    faqs: [],
  },
  {
    assetId: "SVC-010",
    slug: "tax-aware-financial-planning",
    title: "Tax-Aware Financial Planning",
    metaDescription:
      "Coordinating with your tax professional on planning considerations.",
    intro:
      "Tax-aware financial planning is designed to consider tax implications as part of your broader plan, in coordination with your tax professional.",
    appropriateFor:
      "Individuals who want their financial decisions considered alongside tax implications rather than separately.",
    considerations: [
      "How the timing of certain decisions may have tax implications",
      "How account types and withdrawal sequencing may relate to tax considerations",
      "How to coordinate planning conversations with your CPA or tax preparer",
    ],
    process: [
      "A discussion of your financial goals and current tax situation, at a high level",
      "A review of how current accounts and decisions may relate to tax considerations",
      "Coordination with your tax professional; we do not prepare tax returns or provide tax advice",
    ],
    relatedPersonaSlugs: ["business-owners", "high-net-worth-families"],
    relatedLocationSlugs: ["cleveland", "solon"],
    faqs: [
      { q: "Do you prepare tax returns?", a: "No. Tax-aware financial planning is not tax preparation, accounting, or legal advice. We coordinate with your tax professional." },
    ],
  },
];
