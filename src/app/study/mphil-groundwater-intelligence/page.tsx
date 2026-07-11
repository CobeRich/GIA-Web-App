import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "MPhil Groundwater Intelligence Track",
  description: "MPhil Scientific Computing and Industrial Modeling - Groundwater Intelligence & Computational Environmental Systems Track.",
  path: "/study/mphil-groundwater-intelligence",
  image: "/images/gia-hero-banner-c.png",
});

export default function MphilTrackPage() {
  return (
    <>
      <PageHero
        eyebrow="Study"
        heroType="C"
        title="MPhil Groundwater Intelligence Track"
        description="A two-year research-intensive track integrating science, modelling, AI, and decision support for potable-water systems."
      />

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="mb-2 text-xl font-semibold text-gia-blue">1. Official Degree</h2>
            <p className="text-sm text-gray-700">MPhil Scientific Computing and Industrial Modeling (SCIM).</p>
          </Card>
          <Card>
            <h2 className="mb-2 text-xl font-semibold text-gia-blue">2. Track Name</h2>
            <p className="text-sm text-gray-700">Groundwater Intelligence and Computational Environmental Systems Track.</p>
          </Card>
          <Card>
            <h2 className="mb-2 text-xl font-semibold text-gia-blue">3. Host Department</h2>
            <p className="text-sm text-gray-700">Department of Mathematics with interdisciplinary academic collaboration.</p>
          </Card>
          <Card>
            <h2 className="mb-2 text-xl font-semibold text-gia-blue">4. Duration</h2>
            <p className="text-sm text-gray-700">24 months (four semesters with integrated research progression).</p>
          </Card>
        </div>
      </section>

      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {[
              "5. Programme rationale",
              "6. Objectives",
              "7. Graduate profile",
              "8. Structure",
              "9. Teaching model",
              "10. Research alignment",
              "11. Assessment",
              "12. Careers",
              "13. Admissions",
              "14. Apply",
            ].map((item) => (
              <Card key={item} className="h-full">
                <p className="text-sm font-semibold text-gia-blue">{item}</p>
              </Card>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Card>
              <h3 className="mb-2 text-lg font-semibold text-gia-blue">Programme Rationale and Objectives</h3>
              <p className="text-sm text-gray-700">
                The track addresses groundwater complexity through integrated science, advanced modelling,
                scientific software, and decision intelligence. Graduates are trained for research,
                implementation, and policy-facing technical roles.
              </p>
            </Card>
            <Card>
              <h3 className="mb-2 text-lg font-semibold text-gia-blue">Teaching, Assessment and Careers</h3>
              <p className="text-sm text-gray-700">
                Delivery combines coordinated module blocks, coding labs, studio projects, and dissertation.
                Assessment includes coursework, practical outputs, and research defence leading to careers
                in research institutes, utilities, consulting, and doctoral study.
              </p>
            </Card>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/study/admissions" className="rounded-md bg-gia-teal px-5 py-3 text-sm font-semibold text-white">
              Admissions
            </Link>
            <Link href="/forms/admissions" className="rounded-md border border-gia-blue px-5 py-3 text-sm font-semibold text-gia-blue">
              Apply
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
