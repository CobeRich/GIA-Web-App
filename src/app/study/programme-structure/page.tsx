import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import { createMetadata } from "@/lib/metadata";
import { studyModules } from "@/lib/studyModules";

export const metadata: Metadata = createMetadata({
  title: "Programme Structure",
  description: "Semester-by-semester structure for the MPhil Groundwater Intelligence track.",
  path: "/study/programme-structure",
  image: "/images/gia-hero-banner-c.png",
});

export default function ProgrammeStructurePage() {
  const phaseCards = [
    { semester: "I", phase: "Scientific Foundations", output: "Toolkit V1", label: "Semester I" },
    { semester: "II", phase: "Mathematical Modelling", output: "Toolkit V2", label: "Semester II" },
    { semester: "III", phase: "Intelligent Environmental Systems", output: "Platform V3", label: "Semester III" },
    { semester: "IV", phase: "Dissertation", output: "Research Platform V4", label: "Semester IV" },
  ];

  const groupedModules = phaseCards.map((phase) => ({
    ...phase,
    modules: studyModules.filter((item) => item.semester === phase.label),
  }));

  return (
    <>
      <PageHero eyebrow="Study" heroType="C" title="Programme Structure" description="Four-phase architecture with semester outputs and full module mapping." />

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {groupedModules.map((phase) => (
            <Card key={phase.semester} className="h-full">
              <p className="text-xs font-semibold uppercase tracking-wide text-gia-teal">Semester {phase.semester}</p>
              <h2 className="mt-2 text-xl font-semibold text-gia-blue">{phase.phase}</h2>
              <p className="mt-1 text-sm font-medium text-slate-600">Main Output: {phase.output}</p>

              <h3 className="mt-4 text-sm font-semibold text-gia-blue">Modules</h3>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-gray-700">
                {phase.modules.map((moduleItem) => (
                  <li key={moduleItem.slug}>
                    <Link href={`/study/modules/${moduleItem.slug}`} className="hover:underline">
                      {moduleItem.code}: {moduleItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
