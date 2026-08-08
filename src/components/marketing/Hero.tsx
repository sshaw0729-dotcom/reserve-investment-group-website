export function Hero({
  eyebrow,
  title,
  subhead,
  children,
}: {
  eyebrow?: string;
  title: string;
  subhead?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="hero container">
      {eyebrow && <p className="hero-eyebrow">{eyebrow}</p>}
      <h1>{title}</h1>
      {subhead && <p className="hero-subhead">{subhead}</p>}
      {children}
    </section>
  );
}
