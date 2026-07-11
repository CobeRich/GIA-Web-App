import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import InnovationQuestionGrid from "@/components/innovation/InnovationQuestionGrid";

export const metadata: Metadata = {
  title: "Impact Stories",
  description: "Real stories of communities and partners benefiting from GIA's groundwater and potable water research.",
};

export default function ImpactStoriesPage() {
  return (
    <>
      <PageHero eyebrow="Innovation & Impact" title="Impact Stories" description="Real stories of communities and partners benefiting from GIA's groundwater and potable water research." />
      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <InnovationQuestionGrid
          problem="Impact outcomes are often communicated without linking technical causality to intervention decisions."
          solution="GIA documents case-based impact stories connecting research outputs, implementation actions, and measurable outcomes."
          audience="Communities, partners, funders, and technical stakeholders evaluating programme value."
          research="Stories are supported by monitoring evidence, modelling outputs, and WP-linked technical validation."
          readiness="Case documentation is active and updated as projects progress from pilot to sustained deployment."
          engagement="Organizations can contribute case studies, co-publish outcomes, or request impact-evaluation support."
        />
      </section>
    </>
  );
}
