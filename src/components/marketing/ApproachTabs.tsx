"use client";

import { useState } from "react";

type Tab = {
  id: string;
  conversationLabel: string;
  label: string;
  step: string;
  heading: string;
  description: string;
  bullets: string[];
};

// "Understand" (tab 1) copy and layout — a "STEP N" label, heading,
// description, and a 2x2 grid of short bullet cards — is taken directly
// from the approved Canva "Conversion Website v2" prototype. The
// prototype only exposed this tab's content in its default state (Canva's
// click-through prototype interactions aren't visible outside Presentation
// mode, which did not render in this session), so "Organize" and
// "Act & adapt" reuse the same qualified, non-promissory language already
// approved for this component, restructured into the same format.
const TABS: Tab[] = [
  {
    id: "understand",
    conversationLabel: "Conversation 01",
    label: "Understand",
    step: "Step 1",
    heading: "Start with what matters",
    description:
      "We begin with the decision, concern, transition, or opportunity that brought you here—then understand the goals and context around it.",
    bullets: [
      "Goals and priorities",
      "Current accounts and resources",
      "Timing and upcoming decisions",
      "Questions you want answered",
    ],
  },
  {
    id: "organize",
    conversationLabel: "Conversation 02",
    label: "Organize",
    step: "Step 2",
    heading: "Organize what connects",
    description:
      "We translate that picture into a coordinated plan: retirement income, investment strategy, tax considerations, insurance, and estate planning, considered together rather than in isolation.",
    bullets: [
      "Retirement income strategy",
      "Investment approach",
      "Tax considerations",
      "Insurance and estate planning",
    ],
  },
  {
    id: "act",
    conversationLabel: "Conversation 03",
    label: "Act & adapt",
    step: "Step 3",
    heading: "Decide what comes next",
    description:
      "We help you put the plan into motion, then check in regularly to revisit it as your income, family, health, and goals evolve over time.",
    bullets: [
      "Implementation steps",
      "Ongoing check-ins",
      "Life and goal changes",
      "Course corrections",
    ],
  },
];

const DEFAULT_TAB: Tab = TABS[0]!;

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
            className={tab.id === activeId ? "approach-tab approach-tab-active" : "approach-tab"}
            onClick={() => setActiveId(tab.id)}
          >
            <span className="approach-tab-label">{tab.conversationLabel}</span>
            <span className="approach-tab-title">{tab.label}</span>
          </button>
        ))}
      </div>
      <div
        className="approach-tab-panel"
        role="tabpanel"
        id={`approach-panel-${active.id}`}
        aria-labelledby={`approach-tab-${active.id}`}
      >
        <p className="approach-tab-step">{active.step}</p>
        <h3>{active.heading}</h3>
        <p>{active.description}</p>
        <div className="approach-tab-bullets">
          {active.bullets.map((bullet) => (
            <span className="approach-tab-bullet" key={bullet}>
              {bullet}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
