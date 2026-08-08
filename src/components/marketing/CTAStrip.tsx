import { Button } from "../ui/Button";

/**
 * Low-pressure CTA strip. `label` must come from the approved CTA list in
 * PROJECT-BRIEF.md (e.g. "Schedule an introductory conversation",
 * "Request a complimentary financial review") — never urgency/guarantee
 * language.
 */
export function CTAStrip({ label, href }: { label: string; href: string }) {
  return (
    <div className="cta-strip container">
      <a href={href}>
        <Button variant="primary">{label}</Button>
      </a>
    </div>
  );
}
