import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import InnovationQuestionGrid from "@/components/innovation/InnovationQuestionGrid";

export const metadata: Metadata = {
  title: "Startups",
  description: "Startup ventures incubated through GIA's innovation and entrepreneurship programmes.",
};

export default function StartupsPage() {
  return (
    <>
      <PageHero eyebrow="Innovation & Impact" title="Startups" description="Startup ventures incubated through GIA's innovation and entrepreneurship programmes." />

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <InnovationQuestionGrid
          problem="Many high-potential groundwater innovations lack structured pathways to become sustainable ventures."
          solution="GIA offers incubation support, technical mentoring, validation access, and pathway guidance for market-ready solutions."
          audience="Founders, student innovators, early-stage teams, and translational researchers."
          research="Startup opportunities are anchored in WP-derived needs and validated technical components from platform and labs."
          readiness="Ventures range from concept validation to pilot implementation stage depending on team maturity."
          engagement="Prospective founders can join cohorts, submit venture concepts, and access partner mentorship tracks."
        />
      </section>
    </>
  );
}
