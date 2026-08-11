"use client";

import { useState } from "react";

type Tab = {
  id: string;
  label: string;
  heading: string;
  description: string;
};

const TABS: Tab[] = [
  {
    id: "understand",
    label: "Understand",
    heading: "Understand where you stand",
    description:
      "We start with a clear picture of your full financial life — income, expenses, assets, debts, and the goals that matter most to you — before discussing any recommendations.",
  },
  {
    id: "organize",
    label: "Organize",
    heading: "Organize a plan around your goals",
    description:
      "We translate that picture into a coordinated plan: retirement income, investment strategy, tax considerations, insurance, and estate planning, considered together rather than in isolation.",
  },
  {
    id: "act",
    label: "Act & adapt",
    heading: "Act, then adapt as life changes",
    description:
      "We help you put the plan into motion, then check in regularly to revisit it as your income, family, health, and goals evolve over time.",
  },
];

const DEFAULT_TAB: Tab = TABS[0]!;

/**
 * Homepage "Our Approach" tabs (Understand / Organize / Act & adapt),
 * matching the approved Canva "Conversion Website v2" concept. Content
 * mirrors the qualified, non-promissory language used across
 * src/lib/content/services.ts — no claims about returns or outcomes.
 */
export function ApproachTabs() {
  const [activeId, setActiveId] = useState(DEFAULT_TAB.id);
  const active = TABS.find((tab) => tab.id === activeId) ?? DEFAULT_TAB;

  return (
    <div className="approach-tabs">
      <div className="approach-tabs-list" role="tablist" aria-label="Our approach">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`approach-tab-${tab.id}`}
            aria-selected={tab.id === activeId}
            aria-controls={`approach-panel-${tab.id}`}
            className={
              tab.id === activeId
                ? "approach-tab approach-tab-active"
                : "approach-tab"
            }
            onClick={() => setActiveId(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        className="approach-tab-panel"
        role="tabpanel"
        id={`approach-panel-${active.id}`}
        aria-labelledby={`approach-tab-${active.id}`}
      >
        <h3>{active.heading}</h3>
        <p>{active.description}</p>
      </div>
    </div>
  );
}
