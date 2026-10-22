import type { Faq } from "../../../lib/content/types";

/** Turning-65 FAQs — copy matches the visible FAQ section on /medicare/turning-65/ word-for-word. */
export const MEDICARE_TURNING65_FAQS: Faq[] = [  {
    q: "When exactly is my Initial Enrollment Period?",
    a: "It's a 7-month window: it starts 3 months before the month you turn 65, includes your birthday month, and ends 3 months after. If your birthday is in June, your window runs March 1 through September 30. Signing up before your birthday month generally starts coverage on the first day of that month.",
  },  {
    q: "I'm already receiving Social Security. Do I still need to sign up?",
    a: "Generally, no — if you're already receiving Social Security benefits when you turn 65, you're usually enrolled in Part A and Part B automatically and your Medicare card arrives by mail. If you're not receiving benefits yet, nothing happens automatically; you sign up through Social Security.",
  },  {
    q: "Can I delay Medicare if I'm still working at 65?",
    a: "Often — it depends mainly on your employer's size. With group coverage from an employer with 20 or more employees, you can usually delay Part B without a penalty, and you get an 8-month Special Enrollment Period when that coverage or the job ends. With fewer than 20 employees, Medicare is generally expected to pay first at 65, so delaying Part B can leave coverage gaps and penalties. COBRA and retiree coverage do not count as employer coverage for delaying Part B.",
  },  {
    q: "What happens if I miss my window?",
    a: "The fallback is the General Enrollment Period, January 1 through March 31 each year, with coverage starting the month after you enroll. Waiting can also add late-enrollment penalties that follow you for years — 10% for each full 12-month period for Part B, and about 1% per uncovered month for Part D — generally paid for as long as you have that coverage.",
  },  {
    q: "What if I have a health savings account (HSA)?",
    a: "Enrolling in Medicare ends your eligibility to contribute to an HSA — and if you delay Part A past 65 and sign up later, Part A coverage can backdate up to 6 months, which can make HSA contributions in that backdated window a tax problem. Many people stop HSA contributions at least 6 months before applying for Medicare. This one deserves a conversation with your tax professional before your birthday, not after.",
  },];
