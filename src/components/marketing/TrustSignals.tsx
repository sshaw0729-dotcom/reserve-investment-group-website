type TrustSignal = { title: string; description: string };

/**
 * Landing Page System — Trust Signals block. Deliberately built around
 * process-based, verifiable-by-construction claims (how we operate)
 * rather than unverifiable credential/number claims (years in business,
 * client counts, AUM). See COMPLIANCE-RISK-MAP.md and
 * PROJECT-BRIEF.md's prohibited-claims list. Do not add a trust signal
 * here that requires a number, ranking, or award to be true — those go
 * through the separate ranking/award approval workflow instead
 * (COMPLIANCE-WORKFLOW.md), not this component.
 */
const DEFAULT_TRUST_SIGNALS: TrustSignal[] = [
  { title: "No-pressure conversation", description: "Every relationship starts with an introductory conversation, not a sales pitch." },
  { title: "Clear, written disclosures", description: "You'll always know what's being recommended and why, in writing." },
  { title: "Coordinated, not siloed", description: "We work alongside your tax and legal professionals rather than in isolation." },
];

export function TrustSignals({ heading = "What working with us looks like", signals = DEFAULT_TRUST_SIGNALS }: { heading?: string; signals?: TrustSignal[] }) {
  return (
    <section className="lp-trust container">
      <h2>{heading}</h2>
      <div className="lp-trust-grid">
        {signals.map((s) => (
          <div key={s.title} className="lp-trust-item">
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
