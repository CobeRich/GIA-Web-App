import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import { createMetadata } from "@/lib/metadata";

const softwareSlugs = [
  "vadose-solver",
  "aquifer-regional-model",
  "potable-risk-dashboard",
  "gia-multicontinuum-solver",
];

export function generateStaticParams() {
  return softwareSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return createMetadata({
    title: `Software - ${params.slug.replace(/-/g, " ")}`,
    description: "Scientific software profile, status, and related outputs.",
    path: `/research/scientific-software/${params.slug}`,
    image: "/images/gia-hero-banner-b.png",
  });
}

export default function ScientificSoftwareDetailPage({ params }: { params: { slug: string } }) {
  if (!softwareSlugs.includes(params.slug)) notFound();

  return (
    <>
      <PageHero eyebrow="Scientific Software" title={params.slug.replace(/-/g, " ")} description="Architecture, dependencies, and release status." />
      <section className="mx-auto max-w-[980px] px-4 py-16 sm:px-6 lg:px-8 text-gray-700">
        <p>Detailed software metadata and documentation links will be maintained on this page.</p>
      </section>
    </>
  );
}
