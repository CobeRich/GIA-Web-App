import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { createMetadata } from "@/lib/metadata";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return createMetadata({
    title: `Dataset - ${params.slug.replace(/-/g, " ")}`,
    description: "Dataset profile with metadata, licensing, and citation guidance.",
    path: `/research/datasets/${params.slug}`,
    image: "/images/gia-hero-banner-b.png",
  });
}

export default function DatasetDetailPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <PageHero eyebrow="Dataset" title={params.slug.replace(/-/g, " ")} description="Dataset metadata, quality notes, and linked outputs." />
      <section className="mx-auto max-w-[980px] px-4 py-16 sm:px-6 lg:px-8 text-gray-700"><p>Dataset details and access guidance will be published here.</p></section>
    </>
  );
}
