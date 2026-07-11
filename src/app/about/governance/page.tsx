import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ProfileCard from "@/components/ui/ProfileCard";
import { getTeamByCategory } from "@/lib/content";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Governance",
  description: "Governance structure, board and committees of the Groundwater Intelligence Academy.",
};

export default function GovernancePage() {
  const governance = getTeamByCategory("governance");
  const governanceAreas = [
    "Governance principles",
    "Academy management board",
    "Scientific advisory board",
    "Government and industry advisory panel",
    "Quality-assurance system",
    "Student representation",
    "Terms of reference",
    "Reporting and accountability",
  ];

  return (
    <>
      <PageHero
        eyebrow="About"
        title="Governance"
        description="Governance architecture, advisory structures, quality assurance, and accountability systems."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {governanceAreas.map((area) => (
            <Card key={area} className="h-full">
              <p className="text-sm font-semibold text-gia-blue">{area}</p>
            </Card>
          ))}
        </div>

        <h2 className="mb-4 text-2xl font-bold text-gia-blue">Academy Governance Team</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {governance.map((member) => (
            <ProfileCard key={member.slug} member={member} />
          ))}
        </div>
      </section>
    </>
  );
}
