import type { Faq } from "../../../lib/content/types";

/** Processing-cost FAQs — copy matches the visible FAQ section on /cleveland-credit-card-processing-costs/ word-for-word. */
export const PROCESSING_FAQS: Faq[] = [
  {
    q: "How much should a small business pay for credit card processing?",
    a: "Most small businesses pay roughly 2% to 3.5% of card volume all in, depending on card mix, average ticket, and pricing structure. The only honest number is your own: total fees for the month divided by total card volume. That's your cost of acceptance, and it's the number every quote should be judged against.",
  },
  {
    q: "How do I know if I'm overpaying for processing?",
    a: "Compute your cost of acceptance and sort your fees into pass-through (unchangeable), markup (where processors differ), and junk (fees that buy nothing — PCI non-compliance penalties are the most common). If your statement won't sort, or your effective rate crept up without explanation, you're likely paying more than you should.",
  },
  {
    q: "My processor raised my rates. How can I lower my processing fees?",
    a: "First, identify what actually rose — markup, junk, or pass-through changes you can't control. Then ask your processor the specific questions in writing, and judge any alternative by pricing the same month's transactions with every fee and switching cost included. A written statement review does exactly this; that's what our Processing Cost Review is.",
  },
  {
    q: "What is a Processing Cost Review?",
    a: "It's a free review by Reserve Investment Group: you send last month's processing statement, a real person on our team reads it, and you receive a written Cost of Acceptance Report — your true rate in plain English, every fee translated into the three buckets, and the questions worth asking your current processor. The report is yours to keep whether you switch processors or not.",
  },
  {
    q: "What does the Processing Cost Review cost?",
    a: "Nothing. The Review is free, with no obligation — and the report is yours to keep either way. We do it because educated business owners become long-term relationships; some become processing clients, and most send us their friends either way.",
  },
  {
    q: "I was offered a free terminal. Should I take it?",
    a: "Ask what it's attached to. Free terminals are never unattached — there's a lease, a term, or a rate holding them up, and the total usually exceeds what the terminal costs outright. If you want the attachment priced, send the statement or the lease paperwork with your review request and your report will price it.",
  },
];
