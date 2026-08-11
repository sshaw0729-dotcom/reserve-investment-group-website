export function Hero({
  eyebrow,
  title,
  subhead,
  graphic,
  children,
}: {
  eyebrow?: string;
  title: string;
  subhead?: string;
  graphic?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className={graphic ? "hero hero-with-graphic container" : "hero container"}>
      <div className="hero-content">
        {eyebrow && <p className="hero-eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {subhead && <p className="hero-subhead">{subhead}</p>}
        {children}
      </div>
      {graphic && <div className="hero-graphic">{graphic}</div>}
    </section>
  );
}
