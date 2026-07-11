import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { createMetadata } from "@/lib/metadata";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return createMetadata({
    title: `Laboratory - ${params.slug.replace(/-/g, " ")}`,
    description: "Research laboratory profile and focus areas.",
    path: `/research/laboratories/${params.slug}`,
    image: "/images/gia-hero-banner-b.png",
  });
}

export default function LaboratoryDetailPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <PageHero eyebrow="Laboratory" title={params.slug.replace(/-/g, " ")} description="Laboratory scope, methods, and linked work packages." />
      <section className="mx-auto max-w-[980px] px-4 py-16 sm:px-6 lg:px-8 text-gray-700"><p>Laboratory profile details will be published here.</p></section>
    </>
  );
}
