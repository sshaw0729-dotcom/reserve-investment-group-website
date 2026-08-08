type AlertBlockProps = {
  tone?: "info" | "warning" | "success" | "error";
  children: React.ReactNode;
};

export function AlertBlock({ tone = "info", children }: AlertBlockProps) {
  return (
    <div role={tone === "error" ? "alert" : "status"} className={`alert alert-${tone}`}>
      {children}
    </div>
  );
}
