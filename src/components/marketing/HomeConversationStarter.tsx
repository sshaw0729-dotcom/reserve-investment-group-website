"use client";

import { useState } from "react";
import { LeadForm } from "../forms/LeadForm";

type StartingPoint = {
  id: string;
  label: string;
  heading: string;
  description: string;
  areaOfInterest: string;
};

// Matches the four starting points shown in the approved Canva
// "Conversion Website v2" prototype. The prototype only exposed the
// "I'm preparing to retire" option's revealed copy ("Retirement
// readiness") in its default state; the other three follow the same
// qualified, non-promissory language already used across the site.
const STARTING_POINTS: StartingPoint[] = [
  {
    id: "preparing-to-retire",
    label: "I'm preparing to retire",
    heading: "Retirement readiness",
    description:
      "Start by clarifying timing, desired lifestyle, income sources, cash reserves, and how the investment portfolio needs to support the transition.",
    areaOfInterest: "retirement-planning",
  },
  {
    id: "investment-strategy",
    label: "I need an investment strategy",
    heading: "Investment strategy",
    description:
      "We'll discuss your goals, time horizon, and risk considerations, and how your investments might fit within your broader financial picture.",
    areaOfInterest: "wealth-management",
  },
  {
    id: "idle-cash",
    label: "I have too much cash sitting idle",
    heading: "Idle cash",
    description:
      "We'll talk through your liquidity needs, upcoming plans, and options for putting extra cash to work toward your goals.",
    areaOfInterest: "wealth-management",
  },
  {
    id: "life-or-work-changing",
    label: "Life or work is changing",
    heading: "Life and work transitions",
    description:
      "We'll discuss how a change in income, career, or family circumstances might affect your financial plan and priorities.",
    areaOfInterest: "financial-planning",
  },
];

/**
 * Homepage "what's on your mind" branching selector, matching the
 * approved Canva "Conversion Website v2" concept. Selecting a starting
 * point reveals a short heading, qualifier, and the standard LeadForm with
 * areaOfInterest pre-set — reuses the existing LeadForm/submit-lead
 * pipeline (FORM-DATA-FLOW.md); no new backend logic.
 */
export function HomeConversationStarter() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = STARTING_POINTS.find((point) => point.id === selectedId) ?? null;

  return (
    <div className="conversation-starter">
      <div
        className="conversation-starter-options"
        role="group"
        aria-label="What financial decision is taking up the most space in your mind?"
      >
        {STARTING_POINTS.map((point) => (
          <button
            key={point.id}
            type="button"
            className={
              point.id === selectedId
                ? "conversation-starter-option conversation-starter-option-active"
                : "conversation-starter-option"
            }
            aria-pressed={point.id === selectedId}
            onClick={() => setSelectedId(point.id)}
          >
            {point.label}
          </button>
        ))}
      </div>

      {selected && (
        <div className="conversation-starter-form">
          <p className="conversation-starter-heading">{selected.heading}</p>
          <p className="conversation-starter-description">{selected.description}</p>
          <LeadForm
            formId="home-conversation-request"
            pageSlug="/"
            areaOfInterestDefault={selected.areaOfInterest}
          />
        </div>
      )}
    </div>
  );
}
