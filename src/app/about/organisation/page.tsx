import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Organisational Structure",
  description: "Institutional divisions, governance lines, and scientific units.",
  path: "/about/organisation",
  image: "/images/gia-hero-banner-a.png",
});

export default function OrganisationPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Organisational Structure"
        description="How the Academy coordinates research, study, platform, and impact pathways."
      />
      <section className="mx-auto max-w-[900px] px-4 py-16 sm:px-6 lg:px-8 text-gray-700">
        <p>Organisation details will include unit responsibilities, decision pathways, and links to leadership and teams.</p>
      </section>
    </>
  );
}
