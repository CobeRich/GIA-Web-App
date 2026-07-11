import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import InnovationQuestionGrid from "@/components/innovation/InnovationQuestionGrid";

export const metadata: Metadata = {
  title: "Consultancy Services",
  description: "Expert consultancy services offered by GIA for groundwater and potable water projects.",
};

export default function ConsultancyPage() {
  return (
    <>
      <PageHero eyebrow="Innovation & Impact" title="Consultancy Services" description="Expert consultancy services offered by GIA for groundwater and potable water projects." />
      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <InnovationQuestionGrid
          problem="Water projects need integrated technical expertise spanning hydrogeology, modelling, monitoring, and policy translation."
          solution="GIA provides specialist consultancy packages for assessment, design, validation, and implementation planning."
          audience="Government agencies, utilities, development partners, and private-sector project teams."
          research="Consultancy methods are based on validated programme outputs from WP1-WP6 and platform workflows."
          readiness="Services range from rapid diagnostic support to full technical programme delivery."
          engagement="Clients can request scoping consultations and define terms of reference with GIA technical teams."
        />
      </section>
    </>
  );
}
