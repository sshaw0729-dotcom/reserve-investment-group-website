// Terms of Use — CORE-013. Liability/governing-law language filled
// 2026-08-08 with owner-supplied final text, confirmed by practice
// owner 2026-08-08 as attorney-reviewed.
import type { Metadata } from "next";
import { Breadcrumbs } from "../../components/marketing/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for the Reserve Investment Group, Inc website.",
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms of Use", href: "/terms/" }]} />
      <section className="container">
        <h1>Terms of Use</h1>
        <p>
          By using this website, you agree to these Terms of Use. If you
          do not agree, please do not use this site.
        </p>
        <h2>Informational purposes only</h2>
        <p>
          Content on this site is provided for general informational
          purposes only. It is not individualized investment, tax, or
          legal advice, is not a recommendation to buy, sell, or hold any
          security or investment product, and should not be relied on as
          the sole basis for any financial decision. Speaking with us
          directly about your specific situation is the only way to
          receive individualized guidance.
        </p>
        <h2>No guarantee of results</h2>
        <p>
          Nothing on this site guarantees any particular outcome,
          savings, or investment result. Past discussions of general
          approaches or considerations do not indicate future results.
        </p>
        <h2>Intellectual property</h2>
        <p>
          The content, design, and organization of this site are owned by
          Reserve Investment Group, Inc or its licensors and may not be
          copied, reproduced, or distributed without permission.
        </p>
        <h2>Third-party links</h2>
        <p>
          This site may link to third-party websites we do not control.
          We are not responsible for the content, privacy practices, or
          availability of those sites.
        </p>
        {/* Items filled 2026-08-08 with owner-supplied final language.
            Confirmed by practice owner 2026-08-08 as attorney-reviewed. */}
        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by applicable law, Reserve
          Investment Group, Inc. and its affiliates, officers, directors,
          employees, representatives, agents, service providers, and
          licensors will not be liable for any indirect, incidental,
          special, consequential, exemplary, or punitive damages arising
          out of or relating to your use of, inability to use, or reliance
          upon this website or its content.
        </p>
        <p>
          The website and its content are provided for general
          informational and educational purposes. Although we seek to
          provide information that is accurate and useful, we do not
          warrant that all website content will always be complete,
          current, error-free, or suitable for any particular purpose.
        </p>
        <p>
          You are responsible for evaluating information on this website
          in light of your own circumstances before making financial,
          investment, tax, legal, or other decisions.
        </p>
        <p>
          Nothing in these Terms of Use excludes, restricts, or limits any
          liability, duty, obligation, right, or remedy that cannot
          lawfully be excluded, restricted, limited, or waived under
          applicable federal or state law. Nothing in these Terms alters
          any duties or obligations that may apply to us under applicable
          securities laws, regulations, or an agreement governing an
          actual client relationship.
        </p>
        <h2>Governing Law</h2>
        <p>
          These Terms of Use are governed by and construed in accordance
          with the laws of the State of Ohio, without regard to its
          conflict-of-laws principles, except to the extent that
          applicable federal law governs.
        </p>
        <p>
          Nothing in this provision is intended to restrict, waive, or
          limit any right, remedy, protection, or forum that cannot
          lawfully be restricted, waived, or limited under applicable
          federal or state law.
        </p>
        <p>
          Any separate agreement governing an investment advisory,
          brokerage, insurance, or other financial-services relationship
          may contain different or additional provisions concerning
          governing law, dispute resolution, arbitration, or venue. In the
          event of a conflict, the applicable agreement will control to
          the extent permitted by law.
        </p>
        <h2>Changes to these terms</h2>
        <p>
          We may update these Terms of Use from time to time. Continued
          use of this site after changes are posted constitutes
          acceptance of the updated terms.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about these terms can be directed to us through our{" "}
          <a href="/contact/">contact page</a>.
        </p>
      </section>
    </main>
  );
}
