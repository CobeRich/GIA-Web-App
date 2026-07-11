import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Vision, Mission & Values",
  description: "Institutional vision, mission, and values of the Groundwater Intelligence Academy.",
  path: "/about/vision-mission",
  image: "/images/gia-hero-banner-a.png",
});

export default function VisionMissionPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Vision, Mission & Values"
        description="Guiding principles behind research, education, platform development, and impact partnerships."
      />
      <section className="mx-auto max-w-[900px] px-4 py-16 sm:px-6 lg:px-8 text-gray-700">
        <p>The Academy advances potable-water security through science, intelligence systems, and responsible collaboration.</p>
      </section>
    </>
  );
}
