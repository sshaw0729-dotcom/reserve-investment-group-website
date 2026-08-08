// EXT-001 — Business Fee Audit microsite home. Serves both
// businessfeeaudit.com and businessreviewohio.com (canonicalized here).
//
// GATED: per PROJECT-BRIEF.md section 9 and MISSING-INFORMATION-REGISTER.md
// #23, this offer requires a confirmed entity relationship, affiliation
// disclosure, and compensation/referral disclosure before it can be
// truthfully published. The general compliance approval recorded in
// HUMAN-APPROVAL-MATRIX.md (2026-08-06) covers copy tone/claims — it does
// NOT supply these missing facts, which is why every entity-related line
// below is still a bracketed placeholder. Do not remove the AlertBlock
// below or fill in the entity fields without an actual confirmed answer.
import type { Metadata } from "next";
import { AlertBlock } from "../../components/ui/AlertBlock";
import { CTAStrip } from "../../components/marketing/CTAStrip";
import { DisclosureBlock } from "../../components/marketing/DisclosureBlock";

export const metadata: Metadata = {
  title: "Business Fee Audit",
  description:
    "A review of your business's credit-card processing fees and overhead costs to identify potential areas for savings.",
};

export default function BusinessFeeAuditHomePage() {
  return (
    <main>
      <AlertBlock tone="warning">
        [ENTITY DISCLOSURE REQUIRED] This page cannot be published until
        the entity providing this audit, its affiliation (or lack thereof)
        with Reserve Investment Group, Inc&apos;s broker-dealer/advisory
        activity, and any compensation or referral arrangement are
        confirmed. See MISSING-INFORMATION-REGISTER.md #23.
      </AlertBlock>
      <section className="container">
        <h1>Business Fee Audit</h1>
        <p>
          A review of your business&apos;s credit-card processing fees and
          overhead costs, designed to help identify areas that may be
          worth a closer look. Savings are not guaranteed, and switching
          processors may involve operational and contractual
          considerations.
        </p>
        <h2>Provided by</h2>
        <p>[ENTITY DISCLOSURE REQUIRED — name of the entity actually performing this audit]</p>
        <h2>Relationship to Reserve Investment Group, Inc</h2>
        <p>[ENTITY DISCLOSURE REQUIRED — state plainly whether this is the same regulated entity, an affiliate, or an unaffiliated third party, and any referral/compensation arrangement]</p>
        <h2>Scope</h2>
        <p>[FACT TO VERIFY — what exactly is reviewed: statements, contracts, rate structures, etc.]</p>
      </section>
      <DisclosureBlock>
        This audit does not guarantee savings. Changing payment processors
        may involve operational and contractual considerations, including
        early-termination fees under an existing agreement. [ENTITY
        DISCLOSURE REQUIRED]
      </DisclosureBlock>
      <CTAStrip label="Learn about our approach" href="/business-fee-audit/how-it-works/" />
    </main>
  );
}
