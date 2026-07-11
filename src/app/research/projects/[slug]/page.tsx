import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import { createMetadata } from "@/lib/metadata";

const projectSlugs = [
  "aquifer-risk-mapping",
  "vadose-zone-core-physics",
  "potable-water-decision-engine",
  "multi-continuum-recharge",
  "preferential-flow-activation-study",
];

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return createMetadata({
    title: `Project - ${params.slug.replace(/-/g, " ")}`,
    description: "Research project details and related outputs.",
    path: `/research/projects/${params.slug}`,
    image: "/images/gia-hero-banner-b.png",
  });
}

export default function ResearchProjectDetailPage({ params }: { params: { slug: string } }) {
  if (!projectSlugs.includes(params.slug)) notFound();

  return (
    <>
      <PageHero
        eyebrow="Research Project"
        title={params.slug.replace(/-/g, " ")}
        description="Project challenge, methods, milestones, and expected impact."
      />
      <section className="mx-auto max-w-[980px] px-4 py-16 sm:px-6 lg:px-8 text-gray-700">
        <p>Detailed project records will include challenge, method, lead researcher, linked work packages, and outputs.</p>
      </section>
    </>
  );
}
