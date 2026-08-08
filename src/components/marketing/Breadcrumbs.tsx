type Crumb = { label: string; href: string };

/**
 * Hub > Category > Page breadcrumb pattern per INTERNAL-LINKING-MODEL.md.
 * Renders BreadcrumbList-compatible markup; JSON-LD structured data is
 * added separately per SEO-STRATEGY.md when the page is production-ready.
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs container">
      <ol>
        {items.map((item, i) => (
          <li key={item.href}>
            {i < items.length - 1 ? (
              <a href={item.href}>{item.label}</a>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
