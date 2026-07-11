import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import AdmissionsForm from "@/components/forms/AdmissionsForm";

export const metadata: Metadata = {
  title: "Admissions Application",
  description: "Apply to GIA's postgraduate and training programmes in groundwater and potable water science.",
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHero eyebrow="Forms" title="Admissions Application" description="Apply to GIA's postgraduate and training programmes in groundwater and potable water science." />
      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <AdmissionsForm />
      </section>
    </>
  );
}
