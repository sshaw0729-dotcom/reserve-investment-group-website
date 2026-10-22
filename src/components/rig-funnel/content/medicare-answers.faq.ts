import type { Faq } from "../../../lib/content/types";

/** Medicare answers FAQs — copy matches the visible FAQ section on /medicare-answers-cleveland/ word-for-word. */
export const MEDICARE_ANSWERS_FAQS: Faq[] = [
  {
    q: "I just turned 65 and live in Cleveland, Ohio. When do I sign up for Medicare, and what does it cover?",
    a: "Enroll during your Initial Enrollment Period — the 7 months from 3 months before your 65th-birthday month through 3 months after (earlier enrollment means coverage starting on time). Medicare covers hospital care (Part A), medical care (Part B), an alternative bundled delivery through private plans (Part C / Medicare Advantage), and prescription drugs (Part D). If you have qualifying employer coverage, special rules may let you delay Part B without penalty until that coverage ends.",
  },
  {
    q: "What is the difference between Medicare Advantage and a Medicare supplement plan, and how do I choose in Ohio?",
    a: "A supplement (Medigap) works with Original Medicare: Medicare pays first, the supplement pays much of the rest, you can use any Medicare provider nationwide, and you pay an added monthly premium plus a separate drug plan. An Advantage plan delivers your Medicare through a private plan: often a lower premium and an annual out-of-pocket maximum, but network rules, possible prior authorizations, and yearly plan changes. Ohioans choose by checking their doctors, their prescriptions in the Medicare Plan Finder, total yearly cost, travel patterns, and tolerance for administrative rules — OSHIIP (1-800-686-1578) provides free unbiased help with exactly this comparison.",
  },
  {
    q: "I'm still working at 65. Do I have to enroll in Medicare?",
    a: "Not always. If you (or your spouse) have group coverage from an employer with 20 or more employees, you can usually delay Part B — and take Part A, which is premium-free for most people — without penalty, using a Special Enrollment Period when the job or coverage ends. With smaller-employer or retiree coverage, the rules differ and penalties can apply, so confirm your specific situation before your Initial Enrollment Period closes.",
  },
  {
    q: "When is Medicare open enrollment?",
    a: "The Annual Enrollment Period is October 15 through December 7 each year, when people in Medicare Advantage and Part D plans can switch plans or return to Original Medicare for the next year. Your first enrollment at 65 runs on your own Initial Enrollment Period dates, which are different.",
  },
  {
    q: "Does Medicare cover dental, vision, and long-term care?",
    a: "Original Medicare generally does not cover routine dental, routine vision, or long-term custodial care. Some Advantage plans include limited dental/vision allowances. These gaps are one of the most common surprises at 65 — knowing them early lets you plan for them instead of discovering them mid-treatment.",
  },
  {
    q: "Where can I get free, unbiased Medicare help in Ohio?",
    a: "OSHIIP (Ohio Senior Health Insurance Information Program, 1-800-686-1578) offers free counseling through the Ohio Department of Insurance, and Medicare.gov's Plan Finder runs official plan comparisons on your prescriptions. Locally, Reserve Investment Group in South Euclid holds educational Medicare conversations for Cleveland-area residents turning 65, and our Turning 65 Club community covers one topic at a time, all education, no sales pitch.",
  },
];
