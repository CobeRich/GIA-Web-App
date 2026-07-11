import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import { createMetadata } from "@/lib/metadata";

const projectSlugs = ["aquifer-risk-mapping", "vadose-zone-core-physics", "potable-water-decision-engine"];

export const metadata: Metadata = createMetadata({
  title: "Research Projects",
  description: "Featured projects across WP1-WP6 and platform integration.",
  path: "/research/projects",
  image: "/images/gia-hero-banner-b.png",
});

export default function ResearchProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Research" title="Research Projects" description="Flagship projects linking field evidence, modelling, and decision intelligence." />
      <section className="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectSlugs.map((slug) => (
            <Link key={slug} href={`/research/projects/${slug}`}>
              <Card className="h-full">
                <h2 className="text-lg font-semibold capitalize text-gia-blue">{slug.replace(/-/g, " ")}</h2>
                <p className="mt-2 text-sm text-gray-600">Research challenge, methods, expected impact, and related work packages.</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
