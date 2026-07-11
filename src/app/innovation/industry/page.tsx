import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Industry Partnerships",
  description: "How GIA partners with industry to scale potable water innovations.",
};

export default function IndustryPage() {
  return (
    <>
      <PageHero eyebrow="Innovation & Impact" title="Industry Partnerships" description="How GIA partners with industry to scale potable water innovations." />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-gray-700">
          {/* TODO: Replace with real content for Industry Partnerships */}
          We collaborate with engineering firms, utilities, and manufacturers to scale validated potable water innovations from pilot to commercial deployment.
        </p>
      </section>
    </>
  );
}
