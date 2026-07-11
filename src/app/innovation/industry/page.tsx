import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import InnovationQuestionGrid from "@/components/innovation/InnovationQuestionGrid";

export const metadata: Metadata = {
  title: "Industry Partnerships",
  description: "How GIA partners with industry to scale potable water innovations.",
};

export default function IndustryPage() {
  return (
    <>
      <PageHero eyebrow="Innovation & Impact" title="Industry Partnerships" description="How GIA partners with industry to scale potable water innovations." />
      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <InnovationQuestionGrid
          problem="Industrial and utility stakeholders need validated groundwater solutions that are deployment-ready and operationally practical."
          solution="GIA provides co-development, pilot implementation, and technical translation of research outputs for industry settings."
          audience="Utilities, engineering firms, technology providers, and infrastructure operators."
          research="Partnership projects are anchored in WP outputs, platform evidence, and laboratory validation protocols."
          readiness="Projects are staged from demonstration to partner deployment with clear validation checkpoints."
          engagement="Organizations can engage through pilot proposals, joint technical programmes, and deployment partnerships."
        />
      </section>
    </>
  );
}
