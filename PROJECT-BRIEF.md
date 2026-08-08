# Project Brief — Greater Cleveland Financial-Services Digital Authority Platform

Status: Draft. Drafted with compliance considerations; requires review and
approval by appropriate firm personnel before any public use. Not a
representation of FINRA or SEC compliance.

## Objective

Build a fast, accessible, mobile-first financial-services web presence that
generates qualified appointments from Greater Cleveland, structured to
withstand broker-dealer, investment-adviser, privacy, and advertising
review.

## Core Message

We help individuals, families, and business owners identify financial
inefficiencies, address unmanaged risks, and coordinate their financial
decisions around the goals that matter to them.

## Prohibited Language (hard rules, enforced in content review)

No superlative claims ("best," "only," "top," "leading," "most trusted,"
"premier"). No promises of returns, tax savings, fee savings, risk
elimination, better performance, guaranteed outcomes, specific results, or
that an audit will always find a problem. No implication the firm offers
legal or tax advice unless that authority is confirmed for the specific
person/entity.

## Required Qualified Language

"may help," "designed to," "can identify," "seeks to," "depending on your
circumstances," "where appropriate," "in coordination with your tax and
legal professionals."

## Platform Stack

Webflow (design/prototyping/approved components) → Next.js + TypeScript
(production app, GitHub source of truth) → Netlify (hosting, previews,
functions, headers) → PostHog (privacy-gated analytics). See
`ARCHITECTURE.md` for detail and `COWORK-OPERATING-MODEL.md` /
`CLAUDE-CODE-OPERATING-MODEL.md` for the operating split.

## Scope (this engagement)

1. Primary brand website
2. Service-based SEO landing pages
3. Persona-based SEO landing pages
4. Greater Cleveland location pages
5. Offer-specific campaign pages/microsites
6. Lead-capture and appointment-conversion workflows
7. Privacy-controlled analytics/conversion tracking
8. Documented compliance review and publication process

## Explicit Non-Goals At This Stage

No production publishing, no live public forms, no session recording, no
fabricated firm facts, no automatically generated service×persona×location
permutations, no direct Webflow-CMS-to-production pipeline without
documented controls.

## Governing Documents

`MISSING-INFORMATION-REGISTER.md`, `COMPLIANCE-RISK-MAP.md`,
`SITE-ARCHITECTURE.md`, `DOMAIN-STRATEGY.md`,
`ANALYTICS-MEASUREMENT-PLAN.md`, `IMPLEMENTATION-ROADMAP.md`,
`HUMAN-APPROVAL-MATRIX.md`.
