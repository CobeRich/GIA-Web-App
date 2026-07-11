import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import { createMetadata } from "@/lib/metadata";
import { studyModules } from "@/lib/studyModules";
import { studyModuleSpecs } from "@/lib/studyModuleSpecs";

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

  const moduleSpec = studyModuleSpecs[moduleItem.slug];
  if (!moduleSpec) notFound();

  const related = studyModules
    .filter((entry) => entry.slug !== moduleItem.slug)
    .filter((entry) => entry.semester === moduleItem.semester || entry.wpMapping.some((wp) => moduleItem.wpMapping.includes(wp)))
    .slice(0, 4);

  return (
    <>
      <PageHero
        heroType="D"
        eyebrow={moduleItem.code}
        title={moduleItem.title}
        description={moduleItem.summary}
      />
      <section className="mx-auto grid max-w-[1240px] gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
        <aside className="h-fit rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 lg:sticky lg:top-24">
          <p className="mb-3 font-semibold text-slate-800">Section Navigation</p>
          <ul className="space-y-2">
            <li>1. Module information</li>
            <li>2. Description</li>
            <li>3. Rationale</li>
            <li>4. Objectives</li>
            <li>5. Learning outcomes</li>
            <li>6. Course units</li>
            <li>7. Teaching schedule</li>
            <li>8. Practical activities</li>
            <li>9. Coding labs</li>
            <li>10. Field activities</li>
            <li>11. Assessment</li>
            <li>12. Module project</li>
            <li>13. Expected deliverables</li>
            <li>14. Textbooks</li>
            <li>15. Software</li>
            <li>16. WP mapping</li>
            <li>17. Related modules</li>
          </ul>
        </aside>
        <div className="grid gap-5 md:grid-cols-2">
          <Card className="md:col-span-2">
            <h2 className="text-lg font-semibold text-gia-blue">1. Module Information</h2>
            <p className="mt-2 text-sm text-gray-700">
              {moduleItem.code} | {moduleItem.semester} | {moduleItem.credits} credits | {moduleItem.duration}
            </p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">2. Description</h2>
            <p className="mt-2 text-sm text-gray-700">{moduleSpec.description}</p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">3. Rationale</h2>
            <p className="mt-2 text-sm text-gray-700">{moduleSpec.rationale}</p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">4. Objectives</h2>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-gray-700">
              {moduleSpec.objectives.map((objective) => (
                <li key={objective}>{objective}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">5. Learning Outcomes</h2>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-gray-700">
              {moduleSpec.learningOutcomes.map((outcome) => (
                <li key={outcome.code}>
                  <span className="font-semibold text-gia-blue">{outcome.code}:</span> {outcome.statement}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="md:col-span-2">
            <h2 className="text-lg font-semibold text-gia-blue">6. Course Units</h2>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-gray-700">
              {moduleSpec.courseUnits.map((unit) => (
                <li key={unit.title}>
                  <span className="font-semibold text-gia-blue">{unit.title}:</span> {unit.focus}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="md:col-span-2">
            <h2 className="text-lg font-semibold text-gia-blue">7. Teaching Schedule</h2>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-gray-700">
              {moduleSpec.weeklySchedule.map((weekBlock) => (
                <li key={`${weekBlock.week}-${weekBlock.topic}`}>
                  <span className="font-semibold text-gia-blue">{weekBlock.week} - {weekBlock.topic}:</span>{" "}
                  {weekBlock.activities.join(", ")}
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">8. Practical Activities</h2>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-gray-700">
              {moduleSpec.practicalActivities.map((activity) => (
                <li key={activity}>{activity}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">9. Coding Labs</h2>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-gray-700">
              {moduleSpec.codingLabs.map((lab) => (
                <li key={lab}>{lab}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">10. Field Activities</h2>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-gray-700">
              {moduleSpec.fieldActivities.map((activity) => (
                <li key={activity}>{activity}</li>
              ))}
            </ul>
          </Card>
          <Card className="md:col-span-2">
            <h2 className="text-lg font-semibold text-gia-blue">11. Assessment</h2>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-gray-700">
              {moduleSpec.assessment.map((item) => (
                <li key={item.title}>
                  <span className="font-semibold text-gia-blue">{item.title} ({item.weight}%):</span> {item.description}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="md:col-span-2">
            <h2 className="text-lg font-semibold text-gia-blue">12. Module Project</h2>
            <p className="mt-2 text-sm text-gray-700">
              <span className="font-semibold text-gia-blue">{moduleSpec.project.title}:</span> {moduleSpec.project.brief}
            </p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-gray-700">
              {moduleSpec.project.outputs.map((output) => (
                <li key={output}>{output}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">13. Expected Deliverables</h2>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-gray-700">
              {moduleSpec.deliverables.map((deliverable) => (
                <li key={deliverable}>{deliverable}</li>
              ))}
            </ul>
          </Card>
          <Card className="md:col-span-2">
            <h2 className="text-lg font-semibold text-gia-blue">14. Textbooks</h2>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-gray-700">
              {moduleSpec.textbooks.map((textbook) => (
                <li key={textbook.citation}>
                  <span className="font-semibold text-gia-blue">{textbook.citation}:</span> {textbook.reason}
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">15. Software</h2>
            <p className="mt-2 text-sm text-gray-700">{moduleSpec.software.join(", ")}</p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">16. WP Mapping</h2>
            <p className="mt-2 text-sm text-gray-700">{moduleSpec.wpMapping.join(", ")}</p>
          </Card>
          <Card className="md:col-span-2">
            <h2 className="text-lg font-semibold text-gia-blue">17. Related Modules</h2>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {related.map((item) => (
                <Link key={item.slug} href={`/study/modules/${item.slug}`} className="text-sm font-medium text-gia-teal hover:underline">
                  {item.code}: {item.title}
                </Link>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
