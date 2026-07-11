import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ConsultancyForm from "@/components/forms/ConsultancyForm";

export const metadata: Metadata = {
  title: "Consultancy Request",
  description: "Request consultancy services from GIA's groundwater and potable water experts.",
};

export default function ConsultancyPage() {
  return (
    <>
      <PageHero eyebrow="Forms" title="Consultancy Request" description="Request consultancy services from GIA's groundwater and potable water experts." />
      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <ConsultancyForm />
      </section>
    </>
  );
}
