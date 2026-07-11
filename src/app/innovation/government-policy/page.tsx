import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import InnovationQuestionGrid from "@/components/innovation/InnovationQuestionGrid";

export const metadata: Metadata = {
  title: "Government & Policy",
  description: "GIA's engagement with governments and policymakers on groundwater governance and potable water security.",
};

export default function GovernmentPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Innovation & Impact" title="Government & Policy" description="GIA's engagement with governments and policymakers on groundwater governance and potable water security." />
      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <InnovationQuestionGrid
          problem="Policy and planning decisions often lack integrated groundwater intelligence and uncertainty-aware evidence."
          solution="GIA delivers decision-support frameworks, technical briefs, and scenario tools for governance and regulation."
          audience="National agencies, regional authorities, regulators, and policy advisory institutions."
          research="Policy products are built from WP-linked modelling outputs, risk analytics, and cross-site evidence synthesis."
          readiness="Advisory products are available from concept notes to implementation-ready technical packages."
          engagement="Agencies can commission advisory support, participate in policy labs, and co-design demonstration programmes."
        />
      </section>
    </>
  );
}
