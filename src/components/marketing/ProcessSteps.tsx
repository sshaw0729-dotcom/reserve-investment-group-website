type Step = { title: string; description: string };

export function ProcessSteps({ heading, steps }: { heading: string; steps: Step[] }) {
  return (
    <section className="lp-process container">
      <h2>{heading}</h2>
      <ol className="lp-process-list">
        {steps.map((step, i) => (
          <li key={step.title}>
            <span className="lp-process-number" aria-hidden="true">{i + 1}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
