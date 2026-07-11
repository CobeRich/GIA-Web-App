import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Scientific Software",
  description: "Research software assets, model implementations, and tooling outputs.",
  path: "/research/software",
  image: "/images/gia-hero-banner-b.png",
});

export default function ResearchSoftwarePage() {
  return (
    <>
      <PageHero eyebrow="Research" title="Scientific Software" description="Model codes, analysis tools, and reusable computational components." />
      <section className="mx-auto max-w-[980px] px-4 py-16 sm:px-6 lg:px-8 text-gray-700"><p>Software cards, repositories, and release statuses will be surfaced here.</p></section>
    </>
  );
}
