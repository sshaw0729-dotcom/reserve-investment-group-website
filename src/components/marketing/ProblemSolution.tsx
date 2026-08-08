/**
 * Landing Page System — Problem/Solution block. "Solution" copy stays in
 * qualified language ("designed to help," "may address") — never framed
 * as a guaranteed fix. See PROJECT-BRIEF.md.
 */
export function ProblemSolution({
  problemHeading,
  problemBody,
  solutionHeading,
  solutionBody,
}: {
  problemHeading: string;
  problemBody: string;
  solutionHeading: string;
  solutionBody: string;
}) {
  return (
    <section className="lp-problem-solution container">
      <div className="lp-problem">
        <h2>{problemHeading}</h2>
        <p>{problemBody}</p>
      </div>
      <div className="lp-solution">
        <h2>{solutionHeading}</h2>
        <p>{solutionBody}</p>
      </div>
    </section>
  );
}
