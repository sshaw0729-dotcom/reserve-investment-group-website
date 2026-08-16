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
          <path className="home-process-icon-gold-fill" d="M24 13.8 27.2 24 24 21.6 20.8 24 24 13.8Z" />
          <path className="home-process-icon-navy-fill" d="M24 34.2 20.8 24 24 26.4 27.2 24 24 34.2Z" />
          <circle className="home-process-icon-navy-fill" cx="24" cy="24" r="1.5" />
        </svg>
      )}

      {type === "wealth" && (
        <svg viewBox="0 0 48 48" focusable="false">
          <rect className="home-process-icon-navy" x="11.5" y="11.5" width="25" height="25" rx="3" />
          <path className="home-process-icon-navy" d="M11.5 21.5h25M24 11.5v25" />
          <circle className="home-process-icon-gold-fill" cx="30.2" cy="28.6" r="2.5" />
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
