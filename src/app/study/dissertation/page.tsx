import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Dissertation",
  description: "Dissertation expectations, milestones, and submission guidance.",
  path: "/study/dissertation",
  image: "/images/gia-hero-banner-c.png",
});

export default function DissertationPage() {
  return (
    <>
      <PageHero eyebrow="Study" title="Dissertation" description="Research design, execution, and dissemination framework for final-year work." />
      <section className="mx-auto max-w-[900px] px-4 py-16 sm:px-6 lg:px-8 text-gray-700">
        <p>Students complete supervisor-guided dissertation research aligned to work-package and platform priorities.</p>
      </section>
    </>
  );
}
