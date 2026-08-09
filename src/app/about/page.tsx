// About — CORE-002. Draft, pending compliance review. See
// COMPLIANCE-PACKAGE-TEMPLATE.md and MISSING-INFORMATION-REGISTER.md.
import type { Metadata } from "next";
import { Breadcrumbs } from "../../components/marketing/Breadcrumbs";
import { CTAStrip } from "../../components/marketing/CTAStrip";
import { DisclosureBlock } from "../../components/marketing/DisclosureBlock";

export const metadata: Metadata = {
    title: "About",
    description:
          "About Reserve Investment Group, Inc — how we work with individuals, families, and business owners on financial planning.",
    alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About", href: "/about/" }]} />
      <section className="container">
        <h1>About Reserve Investment Group, Inc</h1>
        <p>
          Reserve Investment Group, Inc works with individuals, families, and
          business owners to identify financial inefficiencies, address
          unmanaged risks, and coordinate financial decisions around the
          goals that matter to them.
        </p>
        <h2>Built to Make Financial Decisions Feel More Understandable</h2>
        <p>At Reserve Investment Group, Inc., we believe good financial guidance begins with clarity.</p>
        <p>People make financial decisions at important moments in their lives — when preparing for retirement, protecting a family, growing a business, managing change, or deciding what comes next.</p>
        <p>Those moments deserve more than generic advice.</p>
        <p>They deserve thoughtful questions, clear explanations, and a process that helps people understand the choices in front of them.</p>
        <p>That is the idea behind Reserve Investment Group.</p>
        <p>We believe financial planning should help people feel more informed, more organized, and better prepared to make decisions that fit their lives.</p>
        <h2>A More Practical Approach to Financial Planning</h2>
        <p>The financial world has no shortage of information.</p>
        <p>The challenge is knowing what matters.</p>
        <p>People are surrounded by headlines, opinions, investment ideas, insurance options, retirement strategies, financial products, and conflicting advice.</p>
        <p>More information does not always make decisions easier.</p>
        <p>Sometimes it makes them harder.</p>
        <p>Reserve Investment Group was built around a different approach: simplify what can be simplified, explain what needs to be understood, and focus on the decisions that are actually relevant to the person or business in front of us.</p>
        <p>We do not believe financial planning should feel like a sales presentation.</p>
        <p>It should feel like a process of understanding, evaluating, and deciding.</p>
        <h2>Start With the Bigger Picture</h2>
        <p>A financial plan is not just a collection of accounts.</p>
        <p>It is the connection between your resources and the things you want those resources to accomplish.</p>
        <p>For one person, that may mean retiring comfortably.</p>
        <p>For another, it may mean protecting a spouse or children.</p>
        <p>For a business owner, it may mean preparing for succession, protecting the company, or creating greater financial flexibility outside the business.</p>
        <p>For someone else, it may simply mean getting organized and understanding whether the decisions they have already made are working together.</p>
        <p>There is no single definition of financial success.</p>
        <p>That is why we believe planning should begin with the bigger picture.</p>
        <p>Where are you today?</p>
        <p>What are you trying to accomplish?</p>
        <p>What could get in the way?</p>
        <p>What decisions need to be made now?</p>
        <p>What can wait?</p>
        <p>Those questions create a stronger starting point than beginning with a product or investment.</p>
        <h2>Clarity Before Complexity</h2>
        <p>Financial planning can become complicated very quickly.</p>
        <p>That does not mean every conversation needs to be complicated.</p>
        <p>At Reserve Investment Group, we place a high value on helping people understand the reasoning behind financial decisions.</p>
        <p>If a strategy is worth considering, it should be explainable.</p>
        <p>If there are risks, they should be discussed.</p>
        <p>If there are tradeoffs, they should be understood.</p>
        <p>And if something does not make sense, there should always be room to ask another question.</p>
        <p>Our goal is not to overwhelm people with financial terminology.</p>
        <p>It is to help make complicated decisions easier to evaluate.</p>
        <h2>Retirement Is a Transition, Not a Finish Line</h2>
        <p>Retirement planning is about more than reaching a certain account balance.</p>
        <p>It is a transition from accumulating money to determining how those resources will support the years ahead.</p>
        <p>That can involve questions about income, investments, taxes, Social Security, healthcare, inflation, longevity, and market risk.</p>
        <p>But it also involves questions that cannot be answered on a spreadsheet.</p>
        <p>What do you want your days to look like?</p>
        <p>What responsibilities will continue into retirement?</p>
        <p>What experiences matter to you?</p>
        <p>Who might you want to help?</p>
        <p>What would make retirement feel successful?</p>
        <p>We believe the financial plan should support those answers — not define them.</p>
        <h2>Supporting Business Owners</h2>
        <p>Business owners often face financial decisions that are closely connected to both their company and their personal lives.</p>
        <p>Their business may provide income, employment for others, family security, and a significant portion of their net worth.</p>
        <p>That creates a different kind of financial picture.</p>
        <p>Planning may involve protecting the business, preparing for unexpected events, addressing retirement needs, considering employee benefits, thinking about succession, or deciding how personal wealth should be built outside the company.</p>
        <p>These decisions are rarely isolated.</p>
        <p>They often affect one another.</p>
        <p>Our approach is to help business owners step back, look at the larger picture, and think through the financial issues that deserve attention.</p>
        <h2>We Believe Good Questions Matter</h2>
        <p>Financial planning is often associated with having answers.</p>
        <p>We believe asking the right questions can be just as important.</p>
        <p>What happens if retirement comes earlier than expected?</p>
        <p>What if income changes?</p>
        <p>What if markets decline at an inconvenient time?</p>
        <p>What happens to the business if a key person is no longer there?</p>
        <p>How much flexibility does the current plan provide?</p>
        <p>Are there financial risks that have not been addressed?</p>
        <p>Are there opportunities being overlooked?</p>
        <p>Good planning does not assume that everything will go exactly as expected.</p>
        <p>It considers what could change and prepares accordingly.</p>
        <h2>No Hype. No Predictions. No False Certainty.</h2>
        <p>Financial markets are unpredictable.</p>
        <p>Economic conditions change.</p>
        <p>Tax laws change.</p>
        <p>Businesses evolve.</p>
        <p>Families change.</p>
        <p>Goals change.</p>
        <p>Any financial plan that ignores uncertainty is incomplete.</p>
        <p>Reserve Investment Group does not believe in pretending to know exactly what markets will do next or suggesting that any strategy can eliminate financial risk.</p>
        <p>Instead, we believe in preparation.</p>
        <p>That means understanding the risks involved, considering different possibilities, and making decisions based on the information available today.</p>
        <p>There is a meaningful difference between predicting the future and preparing for it.</p>
        <p>We focus on preparation.</p>
        <h2>Relationships Should Be Earned</h2>
        <p>Trust is important in any financial relationship.</p>
        <p>We also believe trust should never be assumed.</p>
        <p>It is earned through consistency.</p>
        <p>Through clear communication.</p>
        <p>Through doing what you say you will do.</p>
        <p>Through explaining both the advantages and limitations of a financial strategy.</p>
        <p>Through being willing to say, "That may not be the right approach."</p>
        <p>And through recognizing that financial decisions have real consequences for the people making them.</p>
        <p>We take that responsibility seriously.</p>
        <h2>What Reserve Stands For</h2>
        <p>The name Reserve reflects something we believe is important in financial life: preparedness.</p>
        <p>A reserve creates options.</p>
        <p>It can provide flexibility when circumstances change.</p>
        <p>It can help someone respond to the unexpected.</p>
        <p>And it can create room to make thoughtful decisions rather than rushed ones.</p>
        <p>That same idea influences the way we think about financial planning.</p>
        <p>A strong financial life is not simply about pursuing growth.</p>
        <p>It is also about creating resilience, maintaining flexibility, understanding risk, and preparing for possibilities that cannot always be predicted.</p>
        <h2>Our Guiding Principles</h2>
        <p>Our work is grounded in a few straightforward principles.</p>
        <p><strong>Understand the situation before discussing solutions.</strong> Financial recommendations should be connected to a real need or objective.</p>
        <p><strong>Explain the "why."</strong> People should understand why a strategy is being considered, not simply be told what to do.</p>
        <p><strong>Respect uncertainty.</strong> Financial planning should acknowledge risk rather than pretend it does not exist.</p>
        <p><strong>Keep things understandable.</strong> Complex financial concepts should be explained as clearly as possible.</p>
        <p><strong>Consider the whole picture.</strong> Investments are important, but they are only one part of a financial life.</p>
        <p><strong>Make decisions thoughtfully.</strong> Financial decisions should be made with enough information and understanding to feel comfortable moving forward.</p>
        <h2>Financial Planning Should Create Direction</h2>
        <p>Money can create opportunity.</p>
        <p>It can also create uncertainty.</p>
        <p>People often know what they want their money to accomplish but are less certain about how to get there.</p>
        <p>That is where thoughtful planning can help.</p>
        <p>The objective is not to create the longest financial plan or the most complicated investment strategy.</p>
        <p>The objective is to create direction.</p>
        <p>To understand what matters now.</p>
        <p>To identify what may matter later.</p>
        <p>To prepare for risks.</p>
        <p>And to make financial decisions with greater purpose.</p>
        <h2>The Reserve Investment Group Difference</h2>
        <p>We do not believe people need more financial noise.</p>
        <p>They need perspective.</p>
        <p>They need someone willing to look beyond a single account or product and consider how the different parts of their financial lives fit together.</p>
        <p>They need straightforward conversations.</p>
        <p>They need the freedom to ask questions.</p>
        <p>And they deserve enough information to make decisions they understand.</p>
        <p>That is the standard Reserve Investment Group strives to bring to every financial conversation.</p>
        <h2>Begin With a Conversation</h2>
        <p>You do not need to have a perfect financial plan before asking for help.</p>
        <p>You do not need to know every financial term.</p>
        <p>And you do not need to have every goal completely figured out.</p>
        <p>Sometimes the first step is simply understanding where you are.</p>
        <p>From there, the right questions become clearer.</p>
        <p>The priorities begin to take shape.</p>
        <p>And the financial decisions ahead become easier to evaluate.</p>
        <p>That is where Reserve Investment Group begins.</p>
        <p>
          <strong>Reserve Investment Group, Inc.</strong>
          <br />
          Clarity for the decisions that matter.
                </p>
      </section>
      <DisclosureBlock>
                Reserve Investment Group, Inc. is not a registered investment adviser or broker-dealer. Insurance products, where offered, are provided under state insurance license number 1293258. Reserve Investment Group, Inc. does not receive compensation for introducing clients to unaffiliated third-party professionals. See our{" "}
        <a href="/disclosures/">Form CRS &amp; Disclosures</a> page for additional information.
      </DisclosureBlock>
      <CTAStrip label="Schedule an introductory conversation" href="/schedule/" />
    </main>
  );
}
