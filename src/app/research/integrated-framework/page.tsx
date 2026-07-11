import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Integrated Framework",
  description: "Integrated Framework for Potable Water Estimation and Management.",
  path: "/research/integrated-framework",
  image: "/images/gia-hero-banner-b.png",
});

export default function IntegratedFrameworkPage() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Integrated Framework"
        description="Climate-to-potable-water process chain linking field observation, modelling, AI, and decision support."
      />
      <section className="mx-auto max-w-[980px] px-4 py-16 sm:px-6 lg:px-8 text-gray-700">
        <p>This page provides framework architecture, mathematical foundations, computational design, and outputs.</p>
      </section>
    </>
  );
}
