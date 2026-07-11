import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Programme Structure",
  description: "Semester-by-semester structure for the MPhil Groundwater Intelligence track.",
  path: "/study/programme-structure",
  image: "/images/gia-hero-banner-c.png",
});

export default function ProgrammeStructurePage() {
  return (
    <>
      <PageHero eyebrow="Study" title="Programme Structure" description="Four-semester progression from foundations to dissertation." />
      <section className="mx-auto max-w-[900px] px-4 py-16 sm:px-6 lg:px-8 text-gray-700">
        <ol className="list-decimal space-y-2 pl-5">
          <li>Semester I: Scientific Foundations</li>
          <li>Semester II: Mathematical Modelling</li>
          <li>Semester III: Intelligent Environmental Systems</li>
          <li>Semester IV: Dissertation and Studio Integration</li>
        </ol>
      </section>
    </>
  );
}
