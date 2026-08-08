export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={["card", className].filter(Boolean).join(" ")}>{children}</div>;
}
