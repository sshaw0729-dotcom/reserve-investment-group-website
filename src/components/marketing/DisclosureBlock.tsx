type DisclosureBlockProps = {
  children: React.ReactNode;
};

/**
 * Renders approved disclosure text only. Never render an unresolved
 * annotation (e.g. "[COMPLIANCE REVIEW REQUIRED]") through this
 * component — the check:draft-annotations build check fails if one
 * reaches rendered HTML.
 */
export function DisclosureBlock({ children }: DisclosureBlockProps) {
  return (
    <aside role="note" aria-label="Disclosure" className="disclosure-block">
      <p>{children}</p>
    </aside>
  );
}
