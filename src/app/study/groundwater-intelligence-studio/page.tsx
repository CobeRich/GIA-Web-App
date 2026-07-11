import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Groundwater Intelligence Studio",
  description: "Continuous project studio from Version 1 to Version 4.",
  path: "/study/groundwater-intelligence-studio",
  image: "/images/gia-hero-banner-c.png",
});

export default function GroundwaterStudioPage() {
  return (
    <>
      <PageHero eyebrow="Study" title="Groundwater Intelligence Studio" description="Versioned studio pathway integrating modules, research, and software delivery." />
      <section className="mx-auto max-w-[900px] px-4 py-16 sm:px-6 lg:px-8 text-gray-700">
        <p>The studio supports continuous project development, annual showcases, and dissertation-ready outputs.</p>
      </section>
    </>
  );
}
