import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Strategic Roadmap",
  description: "Five-year institutional goals, milestones, and progress indicators.",
  path: "/about/strategic-roadmap",
  image: "/images/gia-hero-banner-a.png",
});

export default function StrategicRoadmapPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Strategic Roadmap"
        description="Year-by-year milestones for research systems, academic growth, platform engineering, and partnerships."
      />
      <section className="mx-auto max-w-[900px] px-4 py-16 sm:px-6 lg:px-8 text-gray-700">
        <p>The roadmap will track milestones, delivery indicators, and annual reporting checkpoints.</p>
      </section>
    </>
  );
}
