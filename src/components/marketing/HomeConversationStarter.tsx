"use client";

import { useState } from "react";
import { LeadForm } from "../forms/LeadForm";

type StartingPoint = {
  id: string;
  label: string;
  description: string;
  areaOfInterest: string;
};

const STARTING_POINTS: StartingPoint[] = [
  {
    id: "just-starting",
    label: "I'm just getting started",
    description:
      "We'll walk through your current financial picture and help you organize a plan around your goals.",
    areaOfInterest: "financial-planning",
  },
  {
    id: "approaching-retirement",
    label: "I'm approaching retirement",
    description:
      "We'll talk through income sources, timing, and spending considerations as retirement gets closer.",
    areaOfInterest: "retirement-planning",
  },
  {
    id: "own-a-business",
    label: "I own a business",
    description:
      "We'll discuss how your business and personal finances relate to one another.",
    areaOfInterest: "business-owner-planning",
  },
  {
    id: "managing-wealth",
    label: "I'm managing significant wealth",
    description:
      "We'll talk through ongoing coordination across investments, planning, and periodic check-ins.",
    areaOfInterest: "wealth-management",
  },
];

/**
 * Homepage "what's on your mind" branching selector, matching the
 * approved Canva "Conversion Website v2" concept. Selecting a starting
 * point reveals a short qualifier and the standard LeadForm with
 * areaOfInterest pre-set — reuses the existing LeadForm/submit-lead
 * pipeline (FORM-DATA-FLOW.md); no new backend logic.
 */
export function HomeConversationStarter() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = STARTING_POINTS.find((point) => point.id === selectedId) ?? null;

  return (
    <div className="conversation-starter">
      <div className="conversation-starter-options" role="group" aria-label="What's on your mind?">
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
