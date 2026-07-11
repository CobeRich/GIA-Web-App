import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Impact Stories",
  description: "Real stories of communities and partners benefiting from GIA's groundwater and potable water research.",
};

export default function ImpactStoriesPage() {
  return (
    <>
      <PageHero eyebrow="Innovation & Impact" title="Impact Stories" description="Real stories of communities and partners benefiting from GIA's groundwater and potable water research." />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-gray-700">
          {/* TODO: Replace with real content for Impact Stories */}
          From rural boreholes to national water policy, explore stories of how GIA&apos;s research has translated into measurable potable water impact.
        </p>
      </section>
    </>
  );
}
