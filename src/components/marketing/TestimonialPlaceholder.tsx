/**
 * Landing Page System — Testimonial block. Renders ONLY a labeled
 * placeholder until a genuine, compliance-approved testimonial exists.
 * Never populate this with invented quotes. See
 * COMPLIANCE-WORKFLOW.md's testimonial rules and the
 * [TESTIMONIAL PLACEHOLDER] annotation convention.
 */
export function TestimonialPlaceholder() {
  return (
    <section className="lp-testimonial container" aria-label="Client testimonial placeholder">
      <div className="lp-testimonial-box">
        <p>
          [TESTIMONIAL PLACEHOLDER] — a genuine, compliance-approved
          client testimonial will appear here once one exists. No
          testimonial is published without written compliance approval,
          confirmation it is genuine, and required disclosures.
        </p>
      </div>
    </section>
  );
}
