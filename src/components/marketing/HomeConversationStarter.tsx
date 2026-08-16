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

const STARTING_POINTS: StartingPoint[] = [
  {
    id: "preparing-to-retire",
    label: "Preparing for retirement",
    heading: "Retirement readiness",
    description:
      "Start by clarifying timing, desired lifestyle, income sources, cash reserves, and how your investment portfolio may need to support the transition.",
    areaOfInterest: "retirement-planning",
  },
  {
    id: "investment-strategy",
    label: "Organizing investments",
    heading: "Investment strategy",
    description:
      "Discuss your goals, time horizon, risk considerations, liquidity, and how investments may fit within your broader financial picture.",
    areaOfInterest: "wealth-management",
  },
  {
    id: "idle-cash",
    label: "Cash & liquidity",
    heading: "Cash and liquidity",
    description:
      "Consider liquidity needs, upcoming plans, time horizon, and the role excess cash or maturing CDs may play within your broader financial picture.",
    areaOfInterest: "wealth-management",
  },
  {
    id: "life-or-work-changing",
    label: "Business or life transition",
    heading: "Changing priorities",
    description:
      "A change in work, business, income, or family circumstances can be a natural time to revisit how your financial decisions fit together.",
    areaOfInterest: "financial-planning",
  },
];

export function HomeConversationStarter() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = STARTING_POINTS.find((point) => point.id === selectedId) ?? null;

  return (
    <div className="conversation-starter">
      <div
        className="conversation-starter-options"
        role="group"
        aria-label="Choose the financial topic closest to what is on your mind"
      >
        {STARTING_POINTS.map((point, index) => (
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
            <span className="conversation-starter-option-number" aria-hidden="true">0{index + 1}</span>
            <span>{point.label}</span>
          </button>
        ))}
      </div>

      {selected && (
        <div key={selected.id} className="conversation-starter-form">
          <div className="conversation-starter-form-copy">
            <p className="conversation-starter-kicker">A useful place to start</p>
            <p className="conversation-starter-heading">{selected.heading}</p>
            <p className="conversation-starter-description">{selected.description}</p>
            <p className="conversation-starter-description">Share your name and email and a member of our team can follow up about an introductory conversation.</p>
          </div>
          <LeadForm
            formId="home-conversation-request"
            pageSlug="/"
            areaOfInterestDefault={selected.areaOfInterest}
            variant="compact"
            submitLabel="Request an introductory conversation"
          />
        </div>
      )}
    </div>
  );
}
