import { forwardRef } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "text";
};

/**
 * Base button. Minimum 44x44 CSS px touch target enforced via padding.
 * Approved-style CTA copy only — see PROJECT-BRIEF.md for the approved
 * and prohibited CTA wording lists. This component does not validate
 * copy; content review does.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={["btn", `btn-${variant}`, className].filter(Boolean).join(" ")}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
