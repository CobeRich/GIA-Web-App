import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Publications",
  description: "Peer-reviewed publications and technical outputs linked to research activities.",
  path: "/research/publications",
  image: "/images/gia-hero-banner-b.png",
});

export default function ResearchPublicationsPage() {
  return (
    <>
      <PageHero eyebrow="Research" title="Publications" description="Journal papers, conference outputs, and technical documents." />
      <section className="mx-auto max-w-[980px] px-4 py-16 sm:px-6 lg:px-8 text-gray-700"><p>Publication listings and citations will be published here.</p></section>
    </>
  );
}
