type Benefit = { title: string; description: string };

/**
 * Landing Page System — Benefits block. Copy must describe what the
 * process is designed to help with, never a guaranteed outcome. See
 * PROJECT-BRIEF.md prohibited-language list.
 */
export function BenefitsList({ heading, benefits }: { heading: string; benefits: Benefit[] }) {
  return (
    <section className="lp-benefits container">
      <h2>{heading}</h2>
      <div className="lp-benefits-grid">
        {benefits.map((b) => (
          <div key={b.title} className="lp-benefit">
            <h3>{b.title}</h3>
            <p>{b.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
