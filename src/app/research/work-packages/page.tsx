import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import { createMetadata } from "@/lib/metadata";
import { getAllWorkPackages } from "@/lib/content";

export const metadata: Metadata = createMetadata({
  title: "Work Packages",
  description: "WP1-WP6 architecture for the integrated groundwater intelligence research programme.",
  path: "/research/work-packages",
  image: "/images/gia-hero-banner-b.png",
});

export default function WorkPackagesPage() {
  const workPackages = getAllWorkPackages().sort((a, b) => a.code.localeCompare(b.code));

  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Work Packages"
        description="A six-package scientific pathway from climate forcing to potable-water decision support."
      />

      <section className="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-2 text-2xl font-bold text-gia-blue">Connected WP1-WP6 Process</h2>
        <p className="mb-8 max-w-[78ch] text-gray-700">
          The six work packages form one connected process from forcing and subsurface dynamics to potable-water decisions.
        </p>

        <div className="mb-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="mb-3 text-lg font-semibold text-gia-blue">Dependency Diagram</h3>
          <pre className="overflow-x-auto text-sm leading-7 text-slate-700">
WP1 → WP2 → WP3 → WP4 → WP6
              ↑       ↑     ↑
               └── WP5 ─────┘
          </pre>
          <p className="mt-3 text-sm text-slate-600">WP5 also feeds WP3, WP4, and WP6.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {workPackages.map((wp) => (
            <Card key={wp.slug} className="h-full border-slate-200">
              <p className="text-xs font-semibold uppercase tracking-wide text-gia-teal">{wp.code}</p>
              <h2 className="mt-2 text-lg font-semibold text-gia-blue">{wp.title}</h2>

              <div className="mt-4 space-y-2 text-sm text-gray-700">
                <p><span className="font-semibold text-gia-blue">Development Stage:</span> {wp.stage}</p>
                <p><span className="font-semibold text-gia-blue">Objective:</span> {wp.objective}</p>
                <p><span className="font-semibold text-gia-blue">Main Input:</span> {wp.inputs[0]?.title ?? "-"}</p>
                <p><span className="font-semibold text-gia-blue">Principal Output:</span> {wp.outputs[0]?.title ?? "-"}</p>
                <p><span className="font-semibold text-gia-blue">Related Laboratory:</span> {wp.relatedLaboratories[0] ?? "-"}</p>
                <p>
                  <span className="font-semibold text-gia-blue">Related Modules:</span>{" "}
                  {wp.relatedModules
                    .map((moduleCode) => moduleCode.toUpperCase())
                    .join(", ")}
                </p>
                <p><span className="font-semibold text-gia-blue">Status:</span> Structured Content</p>
              </div>

              <Link
                href={`/research/work-packages/${wp.slug}`}
                className="mt-5 inline-block rounded-md bg-gia-teal px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
              >
                Explore WP
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
