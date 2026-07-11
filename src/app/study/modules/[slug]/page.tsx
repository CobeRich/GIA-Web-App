import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import { createMetadata } from "@/lib/metadata";
import { studyModules } from "@/lib/studyModules";

export function generateStaticParams() {
  return studyModules.map((moduleItem) => ({ slug: moduleItem.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const moduleItem = studyModules.find((entry) => entry.slug === params.slug);
  if (!moduleItem) {
    return createMetadata({
      title: "Module",
      description: "Module details",
      path: `/study/modules/${params.slug}`,
      image: "/images/gia-hero-banner-d.png",
    });
  }

  return createMetadata({
    title: `${moduleItem.code} - ${moduleItem.title}`,
    description: moduleItem.summary,
    path: `/study/modules/${moduleItem.slug}`,
    image: "/images/gia-hero-banner-d.png",
  });
}

export default function ModuleDetailPage({ params }: { params: { slug: string } }) {
  const moduleItem = studyModules.find((entry) => entry.slug === params.slug);
  if (!moduleItem) notFound();

  return (
    <>
      <PageHero
        heroType="D"
        eyebrow={moduleItem.code}
        title={moduleItem.title}
        description={moduleItem.summary}
      />
      <section className="mx-auto grid max-w-[1240px] gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[240px_1fr] lg:px-8">
        <aside className="h-fit rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 lg:sticky lg:top-24">
          <p className="mb-3 font-semibold text-slate-800">Section Navigation</p>
          <ul className="space-y-2">
            <li>Overview</li>
            <li>Objective</li>
            <li>Methods</li>
            <li>Assessment</li>
            <li>Related Modules</li>
          </ul>
        </aside>
        <div className="space-y-5 text-gray-700">
          <p><strong>Semester:</strong> {moduleItem.semester}</p>
          <p><strong>Credits:</strong> {moduleItem.credits}</p>
          <p><strong>Duration:</strong> {moduleItem.duration}</p>
          <p><strong>Work Package Mapping:</strong> {moduleItem.wpMapping.join(", ")}</p>
          <p>
            Detailed handbook sections for objectives, weekly schedule, practicals,
            coding laboratories, assessments, and deliverables are to be managed via
            structured content updates.
          </p>
        </div>
      </section>
    </>
  );
}
