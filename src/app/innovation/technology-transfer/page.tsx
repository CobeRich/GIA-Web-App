import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import InnovationQuestionGrid from "@/components/innovation/InnovationQuestionGrid";

export const metadata: Metadata = {
  title: "Technology Transfer",
  description: "How GIA moves research innovations into practical, deployable potable water technologies.",
};

export default function TechnologyTransferPage() {
  return (
    <>
      <PageHero eyebrow="Innovation & Impact" title="Technology Transfer" description="How GIA moves research innovations into practical, deployable potable water technologies." />

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <InnovationQuestionGrid
          problem="Validated groundwater innovations frequently stall between research completion and practical deployment."
          solution="GIA provides structured transfer pathways including prototype hardening, technical documentation, and partner onboarding."
          audience="Utilities, ministries, technology integrators, and implementing organizations."
          research="Transfer candidates are sourced from WP-linked research outputs and platform-validated demonstrations."
          readiness="Assets are categorized by transfer readiness from pilot-support to deployment-ready packages."
          engagement="Partners can submit transfer interest, co-develop pilot agreements, or request implementation support."
        />
      </section>
    </>
  );
}
