// EXT-001 — Business Fee Audit microsite home. Serves both
// businessfeeaudit.com and businessreviewohio.com (canonicalized here).
//
// GATED: per PROJECT-BRIEF.md section 9 and MISSING-INFORMATION-REGISTER.md
// #23. Entity relationship, compensation/referral, retention, and
// secure-upload-channel facts were confirmed and filled in 2026-08-08.
// This page remains excluded from sitemap.ts pending formal compliance
// sign-off on the final copy (not because facts are still missing). Do
// not remove the AlertBlock below until that sign-off is recorded.
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
        Entity/compensation facts below are drafted from practice-owner-supplied
        information (2026-08-08). Still needs formal compliance sign-off
        before publish. See MISSING-INFORMATION-REGISTER.md #23.
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
        <p>Fiserv/CardConnect, introduced through Reserve Investment Group, Inc&apos;s agents.</p>
        <h2>Relationship to Reserve Investment Group, Inc</h2>
        <p>
          Reserve Investment Group, Inc&apos;s agents introduce interested
          business owners to Fiserv/CardConnect for this audit. The
          technical review of your payment processing statements and
          rates is performed by Fiserv/CardConnect, not by Reserve
          Investment Group, Inc or its agents directly.
        </p>
        <h2>Scope</h2>
        <p>A review of your recent payment processing statements, rates, and fee structures to identify potential cost savings.</p>
      </section>
      <DisclosureBlock>
        This audit does not guarantee savings. Changing payment processors
        may involve operational and contractual considerations, including
        early-termination fees under an existing agreement. This audit
        itself is provided at no cost, and no fee is charged or received
        for conducting it. However, if you choose to switch your payment
        processing to Fiserv/CardConnect as a result of this audit,
        Reserve Investment Group, Inc. and/or its agents may receive a
        referral fee or other compensation from Fiserv/CardConnect. This
        is a conflict of interest — it gives us a financial incentive to
        recommend switching to Fiserv/CardConnect specifically.
      </DisclosureBlock>
      <CTAStrip label="Learn about our approach" href="/business-fee-audit/how-it-works/" />
    </main>
  );
}
