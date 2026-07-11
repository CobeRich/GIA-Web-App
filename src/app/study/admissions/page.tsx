import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import AdmissionsForm from "@/components/forms/AdmissionsForm";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Admissions",
  description: "Admission requirements, prerequisites, and application workflow for the study track.",
  path: "/study/admissions",
  image: "/images/gia-hero-banner-c.png",
});

export default function StudyAdmissionsPage() {
  return (
    <>
      <PageHero eyebrow="Study" title="Admissions" description="Apply to the MPhil Groundwater Intelligence track." />
      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <AdmissionsForm />
      </section>
    </>
  );
}
