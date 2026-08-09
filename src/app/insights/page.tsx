// Insights hub — CORE-006. Lists content clusters built per
// MARKETING-ECOSYSTEM-BRIEF.md Section 3: each cluster groups one pillar
// (broad overview) page with its supporting cluster articles. Driven by
// src/lib/content/insights.ts — no per-cluster hardcoding here.
import type { Metadata } from "next";
import { Breadcrumbs } from "../../components/marketing/Breadcrumbs";
import { INSIGHTS } from "../../lib/content/insights";

export const metadata: Metadata = {
  title: "Insights",
  description: "Educational articles from Reserve Investment Group, Inc on financial planning topics.",
  alternates: { canonical: "/insights/" },
};

export default function InsightsPage() {
  const clusterIds = Array.from(new Set(INSIGHTS.map((i) => i.clusterId)));

  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Insights", href: "/insights/" }]} />
      <section className="container">
        <h1>Insights</h1>
        <p>
          Educational articles organized by topic. This is general
          information, not individualized advice — see each article&apos;s
          disclosure for details.
        </p>
      </section>

      {clusterIds.map((clusterId) => {
        const clusterItems = INSIGHTS.filter((i) => i.clusterId === clusterId);
        const pillar = clusterItems.find((i) => i.contentType === "pillar");
        const clusterArticles = clusterItems.filter((i) => i.contentType === "cluster");
        if (!pillar) return null;

        return (
          <section className="container insight-cluster" id={clusterId} key={clusterId}>
            <h2>{pillar.clusterTitle}</h2>
            <ul>
              <li>
                <a href={`/insights/${pillar.slug}/`}>{pillar.title}</a>
                <span className="insight-pillar-tag"> — overview</span>
              </li>
              {clusterArticles.map((a) => (
                <li key={a.slug}>
                  <a href={`/insights/${a.slug}/`}>{a.title}</a>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </main>
  );
}
