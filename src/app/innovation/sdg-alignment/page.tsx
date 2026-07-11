import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "SDG Alignment",
  description: "How GIA's work advances the UN Sustainable Development Goals, particularly SDG 6 on clean water and sanitation.",
};

export default function SdgAlignmentPage() {
  return (
    <>
      <PageHero eyebrow="Innovation & Impact" title="SDG Alignment" description="How GIA's work advances the UN Sustainable Development Goals, particularly SDG 6 on clean water and sanitation." />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-gray-700">
          {/* TODO: Replace with real content for SDG Alignment */}
          GIA&apos;s programmes directly advance SDG 6 (Clean Water and Sanitation) and contribute to SDG 3, 9, 13, and 17 through research, innovation, and partnership.
        </p>
      </section>
    </>
  );
}
