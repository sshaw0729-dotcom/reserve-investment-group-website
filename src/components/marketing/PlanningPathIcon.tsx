import "./PlanningPathIcon.css";

type PlanningPathIconProps = {
  type: "plan" | "wealth" | "change";
};

export function PlanningPathIcon({ type }: PlanningPathIconProps) {
  return (
    <div className={`home-process-icon home-process-icon-${type}`} aria-hidden="true">
      {type === "plan" && (
        <svg viewBox="0 0 48 48" focusable="false">
          <circle className="home-process-icon-navy" cx="24" cy="24" r="14.5" />
          <path className="home-process-icon-gold-fill" d="M29.8 18.2 26.4 26.4 18.2 29.8 21.6 21.6 29.8 18.2Z" />
          <circle className="home-process-icon-navy-fill" cx="24" cy="24" r="1.8" />
        </svg>
      )}

      {type === "wealth" && (
        <svg viewBox="0 0 48 48" focusable="false">
          <path className="home-process-icon-navy" d="M11 32.5h26" />
          <path className="home-process-icon-navy" d="M14 29 21 22l5 4 9-11" />
          <path className="home-process-icon-gold" d="M28.5 15H35v6.5" />
          <path className="home-process-icon-gold" d="M14 36h20" />
        </svg>
      )}

      {type === "change" && (
        <svg viewBox="0 0 48 48" focusable="false">
          <path className="home-process-icon-navy" d="M24 9.5 34.5 14v8.5c0 7-4.2 12.2-10.5 15.5-6.3-3.3-10.5-8.5-10.5-15.5V14L24 9.5Z" />
          <path className="home-process-icon-gold" d="m18.5 24 3.8 3.8 7.4-8" />
        </svg>
      )}
    </div>
  );
}
