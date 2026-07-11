import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import InnovationQuestionGrid from "@/components/innovation/InnovationQuestionGrid";

export const metadata: Metadata = {
  title: "SDG Alignment",
  description: "How GIA's work advances the UN Sustainable Development Goals, particularly SDG 6 on clean water and sanitation.",
};

export default function SdgAlignmentPage() {
  return (
    <>
      <PageHero eyebrow="Innovation & Impact" title="SDG Alignment" description="How GIA's work advances the UN Sustainable Development Goals, particularly SDG 6 on clean water and sanitation." />
      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <InnovationQuestionGrid
          problem="SDG implementation often lacks technically grounded groundwater intelligence pathways."
          solution="GIA maps innovation outputs to SDG targets with measurable technical indicators and policy-use pathways."
          audience="Development agencies, public-sector planners, and implementing partners tracking SDG outcomes."
          research="SDG mapping is evidence-based and linked to WP outputs, platform analytics, and documented impact studies."
          readiness="Alignment tools are operational for programme design, monitoring, and reporting support."
          engagement="Partners can co-develop SDG-aligned programmes and indicator frameworks with GIA teams."
        />
      </section>
    </>
  );
}
