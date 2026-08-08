import { Card } from "../ui/Card";

type GridItem = { title: string; description: string; href: string };

/**
 * Used on hub pages (Services, Who We Help, Resources) to link out to
 * spoke pages. Card copy must stay within approved/qualified language —
 * see PROJECT-BRIEF.md.
 */
export function CardGrid({ items }: { items: GridItem[] }) {
  return (
    <div className="card-grid container">
      {items.map((item) => (
        <Card key={item.href} className="card-grid-item">
          <h3>
            <a href={item.href}>{item.title}</a>
          </h3>
          <p>{item.description}</p>
        </Card>
      ))}
    </div>
  );
}
