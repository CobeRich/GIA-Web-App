import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { createMetadata } from "@/lib/metadata";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return createMetadata({
    title: `Field Site - ${params.slug.replace(/-/g, " ")}`,
    description: "Field-site profile with monitoring context and related research links.",
    path: `/research/field-sites/${params.slug}`,
    image: "/images/gia-hero-banner-b.png",
  });
}

export default function FieldSiteDetailPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <PageHero eyebrow="Field Site" title={params.slug.replace(/-/g, " ")} description="Monitoring context, datasets, and associated projects." />
      <section className="mx-auto max-w-[980px] px-4 py-16 sm:px-6 lg:px-8 text-gray-700"><p>Field-site detail content will be added here.</p></section>
    </>
  );
}
