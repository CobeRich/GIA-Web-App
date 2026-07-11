import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "MPhil Groundwater Intelligence Track",
  description: "MPhil Scientific Computing and Industrial Modeling - Groundwater Intelligence & Computational Environmental Systems Track.",
  path: "/study/mphil-groundwater-intelligence",
  image: "/images/gia-hero-banner-c.png",
});

export default function MphilTrackPage() {
  return (
    <>
      <PageHero
        eyebrow="Study"
        title="MPhil Groundwater Intelligence Track"
        description="A two-year research-intensive track integrating science, modelling, AI, and decision support for potable-water systems."
      />
      <section className="mx-auto max-w-[900px] px-4 py-16 sm:px-6 lg:px-8 text-gray-700">
        <p>The track combines block-modular learning, studio development, and dissertation research aligned to WP1-WP6.</p>
      </section>
    </>
  );
}
