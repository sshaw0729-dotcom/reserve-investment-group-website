import type { Faq } from "../../../lib/content/types";

/** Merchant services FAQs — copy matches the visible FAQ section on /merchant-services/ word-for-word. */
export const MERCHANT_FAQS: Faq[] = [  {
    q: "What if I'm locked into a contract with my current processor?",
    a: "Contract terms vary. We can help identify questions to ask your current or prospective provider, but legal interpretation should be handled by qualified counsel.",
  },  {
    q: "What is PCI compliance — and who is responsible for it?",
    a: "PCI requirements depend on the provider, equipment, transaction environment, and merchant responsibilities. Confirm applicable requirements with the processing provider.",
  },  {
    q: "Is my statement data safe?",
    a: "Information is handled according to RIG's Privacy Policy and applicable retention practices. Secure document transfer, if needed, will be arranged after initial contact.",
  },  {
    q: "Do I need to lease new equipment?",
    a: "Not necessarily — many merchants keep existing hardware or reprogram it. We can review whether alternative equipment or processing arrangements may be appropriate.",
  },  {
    q: "How much should a small business pay for credit card processing?",
    a: "Most small businesses pay roughly 2% to 3.5% of card volume all in, depending on card mix, average ticket, and pricing structure. The only honest number is your own: total fees for the month divided by total card volume — your cost of acceptance. A complimentary statement review computes it from your actual statement.",
  },  {
    q: "My processor raised my rates. How can I lower my processing fees?",
    a: "Start by identifying what actually rose. Processor markup and monthly fees can be negotiated or shopped; interchange and card-brand assessments are set by the card networks and the issuing banks and can't be changed by any processor. A statement review sorts your charges into those buckets, so you can see what is actually negotiable before you talk to anyone.",
  },];
