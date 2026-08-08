"use client";
import { useId, useState } from "react";
import { track } from "../../lib/analytics/track";

type AccordionItemProps = {
  question: string;
  children: React.ReactNode;
  pageSlug?: string;
};

/**
 * Single accessible accordion item (used for FAQ blocks and disclosure
 * expanders). Keyboard operable, aria-expanded/aria-controls wired,
 * fires an allowlisted faq_expanded / disclosure_opened event on open
 * only (never on close, never with the question text as a property).
 */
export function AccordionItem({ question, children, pageSlug }: AccordionItemProps) {
  const id = useId();
  const [open, setOpen] = useState(false);

  function toggle() {
    const next = !open;
    setOpen(next);
    if (next) {
      track("faq_expanded", { page_slug: pageSlug });
    }
  }

  return (
    <div className="accordion-item">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-trigger`}
          className="accordion-trigger"
          onClick={toggle}
        >
          {question}
        </button>
      </h3>
      <div id={`${id}-panel`} role="region" aria-labelledby={`${id}-trigger`} hidden={!open}>
        {children}
      </div>
    </div>
  );
}
