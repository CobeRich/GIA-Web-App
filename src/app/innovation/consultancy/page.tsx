import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Consultancy Services",
  description: "Expert consultancy services offered by GIA for groundwater and potable water projects.",
};

export default function ConsultancyPage() {
  return (
    <>
      <PageHero eyebrow="Innovation & Impact" title="Consultancy Services" description="Expert consultancy services offered by GIA for groundwater and potable water projects." />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-gray-700">
          {/* TODO: Replace with real content for Consultancy Services */}
          Our consultancy practice offers hydrogeological surveys, borehole siting, water quality assessment, and monitoring network design for public and private sector clients.
        </p>
      </section>
    </>
  );
}
