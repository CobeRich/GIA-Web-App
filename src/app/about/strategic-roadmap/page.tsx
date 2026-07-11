import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Strategic Roadmap",
  description: "Five-year institutional goals, milestones, and progress indicators.",
  path: "/about/strategic-roadmap",
  image: "/images/gia-hero-banner-a.png",
});

export default function StrategicRoadmapPage() {
  const milestones = [
    { year: "Year 1", detail: "Baseline framework consolidation and curriculum implementation." },
    { year: "Year 2", detail: "Laboratory commissioning and platform expansion." },
    { year: "Year 3", detail: "Research scaling across WP clusters and regional partnerships." },
    { year: "Year 4", detail: "Integrated decision-support deployments and innovation outputs." },
    { year: "Year 5", detail: "Institutional maturity review and next-cycle strategy update." },
  ];

  const focusAreas = [
    "Academic growth",
    "Laboratory development",
    "Platform development",
    "Research targets",
    "Partnership targets",
    "Funding strategy",
    "Key indicators",
  ];

  return (
    <>
      <PageHero
        eyebrow="About"
        title="Strategic Roadmap"
        description="Year-by-year milestones for research systems, academic growth, platform engineering, and partnerships."
      />

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gia-blue">Five-Year Roadmap</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {milestones.map((item) => (
            <Card key={item.year} className="h-full">
              <p className="text-sm font-semibold text-gia-blue">{item.year}</p>
              <p className="mt-2 text-sm text-gray-700">{item.detail}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gia-light py-14">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gia-blue">Roadmap Focus Areas</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area) => (
              <Card key={area} className="h-full">
                <p className="text-sm font-semibold text-gia-blue">{area}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
