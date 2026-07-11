import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Block Modular Model",
  description: "Block-modular teaching rhythm for the academic programme.",
  path: "/study/block-modular-model",
  image: "/images/gia-hero-banner-c.png",
});

export default function BlockModularModelPage() {
  return (
    <>
      <PageHero eyebrow="Study" title="Block Modular Model" description="An 8-week modular rhythm integrated with studio and research milestones." />
      <section className="mx-auto max-w-[900px] px-4 py-16 sm:px-6 lg:px-8 text-gray-700">
        <p>This model combines intensive blocks, practical sessions, coding laboratories, and integrated deliverables.</p>
      </section>
    </>
  );
}
