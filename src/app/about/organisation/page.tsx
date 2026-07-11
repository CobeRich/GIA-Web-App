import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Organisational Structure",
  description: "Institutional divisions, governance lines, and scientific units.",
  path: "/about/organisation",
  image: "/images/gia-hero-banner-a.png",
});

export default function OrganisationPage() {
  const divisions = [
    "Academic Division",
    "Research Division",
    "Digital Infrastructure Division",
    "Innovation Division",
    "Professional-Training Division",
    "Partnership and Consultancy Division",
  ];

  return (
    <>
      <PageHero
        eyebrow="About"
        title="Organisational Structure"
        description="How the Academy coordinates research, study, platform, and impact pathways."
      />

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h2 className="mb-2 text-xl font-semibold text-gia-blue">Institutional Position</h2>
            <p className="text-gray-700">
              GIA operates as a specialist academy coordinating groundwater intelligence across
              education, research, and translational systems.
            </p>
          </Card>
          <Card>
            <h2 className="mb-2 text-xl font-semibold text-gia-blue">Department & Faculty Relationship</h2>
            <p className="text-gray-700">
              The Academy is academically anchored through the Department of Mathematics and
              aligned with faculty-level quality and academic governance.
            </p>
          </Card>
        </div>
      </section>

      <section className="bg-gia-light py-14">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gia-blue">Divisions</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {divisions.map((division) => (
              <Card key={division} className="h-full">
                <p className="text-sm font-semibold text-gia-blue">{division}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="mb-5 text-2xl font-bold text-gia-blue">Interactive Organisation Chart</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-6 text-gray-700">
          Organisation chart view will map reporting lines from Academy leadership to divisions,
          units, and programme clusters.
        </div>
      </section>
    </>
  );
}
