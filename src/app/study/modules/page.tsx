import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import { createMetadata } from "@/lib/metadata";
import { studyModules } from "@/lib/studyModules";

export const metadata: Metadata = createMetadata({
  title: "Modules",
  description: "Catalogue of specialist modules in the Groundwater Intelligence track.",
  path: "/study/modules",
  image: "/images/gia-hero-banner-c.png",
});

export default function StudyModulesPage() {
  return (
    <>
      <PageHero
        eyebrow="Study"
        title="Module Catalogue"
        description="Sixteen modules covering environmental science, mathematics, modelling, AI, and decision support."
      />
      <section className="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {studyModules.map((moduleItem) => (
            <Link key={moduleItem.slug} href={`/study/modules/${moduleItem.slug}`}>
              <Card className="h-full">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gia-teal">
                  {moduleItem.code} · {moduleItem.semester}
                </p>
                <h2 className="mb-2 text-lg font-semibold text-gia-blue">{moduleItem.title}</h2>
                <p className="text-sm text-gray-600">{moduleItem.summary}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
