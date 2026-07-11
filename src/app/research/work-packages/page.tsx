import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import { createMetadata } from "@/lib/metadata";
import { workPackages } from "@/lib/workPackages";

export const metadata: Metadata = createMetadata({
  title: "Work Packages",
  description: "WP1-WP6 architecture for the integrated groundwater intelligence research programme.",
  path: "/research/work-packages",
  image: "/images/gia-hero-banner-b.png",
});

export default function WorkPackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Work Packages"
        description="A six-package scientific pathway from climate forcing to potable-water decision support."
      />
      <section className="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {workPackages.map((wp) => (
            <Link key={wp.slug} href={`/research/work-packages/${wp.slug}`}>
              <Card className="h-full">
                <p className="text-xs font-semibold uppercase tracking-wide text-gia-teal">{wp.code}</p>
                <h2 className="mt-2 text-lg font-semibold text-gia-blue">{wp.title}</h2>
                <p className="mt-2 text-sm text-gray-600">{wp.objective}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
