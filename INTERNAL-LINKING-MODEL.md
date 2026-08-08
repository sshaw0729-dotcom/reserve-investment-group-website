# Internal Linking Model

## Principles

- Every spoke page (service, persona, location, offer) links back to its
  parent hub and to the most relevant sibling pages across the other three
  systems — a service links to related personas and locations; a persona
  links to related services and locations; a location links to related
  services and personas.
- Offer pages link up to the relevant service/persona hub and down to a
  single primary CTA; they carry minimal navigation by design (see
  `SITE-ARCHITECTURE.md`).
- Combined high-intent pages (e.g., Financial Planning for Physicians in
  Cleveland) link to all three parents: the service hub, the persona hub,
  and the location hub, and are linked from all three in return.
- No orphan pages: every published page must be reachable from at least
  one hub and from the sitemap/navigation.
- Resource/Insights content links contextually into service and persona
  pages where topically relevant, and back to a low-pressure CTA.

## Link Matrix (illustrative, Wave 1)

| From | Links to |
|---|---|
| /services/financial-planning/ | /who-we-help/*, /locations/cleveland/, /locations/shaker-heights/, /resources/, /schedule/ |
| /who-we-help/physicians/ | /services/financial-planning/, /services/retirement-planning/, /services/insurance-and-risk-planning/, /locations/cleveland/, /financial-review/ |
| /locations/cleveland/ | /services/*, /who-we-help/business-owners/, /who-we-help/physicians/, /schedule/ |
| /financial-review/ | /services/financial-planning/, /faq/, /privacy/ |
| /insights/retirement-income-planning/ (pillar) | 3 cluster articles, /services/retirement-planning/, /who-we-help/pre-retirees/, /who-we-help/retirees/, /schedule/ |

## Breadcrumbs

Hub > Category > Page (e.g., Home > Services > Financial Planning; Home >
Locations > Cleveland). Combined pages use a dual-path breadcrumb reflecting
their primary parent, with the secondary parent linked inline.

## Governance

Internal-link changes that alter compliance-relevant context (e.g., linking
an offer page to a new persona) are treated as a content change and follow
the standard PR + compliance workflow, not a silent edit.
