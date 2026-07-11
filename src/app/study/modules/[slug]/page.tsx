import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
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
            <p className="mt-2 text-sm text-gray-700">{moduleItem.summary}</p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">3. Rationale</h2>
            <p className="mt-2 text-sm text-gray-700">This module builds technical capacity needed for integrated groundwater intelligence delivery.</p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">4. Objectives</h2>
            <p className="mt-2 text-sm text-gray-700">Develop domain understanding, quantitative skills, and implementation readiness.</p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">5. Learning Outcomes</h2>
            <p className="mt-2 text-sm text-gray-700">Students demonstrate modelling competence, interpretation skill, and scientific communication.</p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">6. Course Units</h2>
            <p className="mt-2 text-sm text-gray-700">Concepts, methods, implementation, and synthesis units are sequenced within coordinated block delivery.</p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">7. Teaching Schedule</h2>
            <p className="mt-2 text-sm text-gray-700">Teaching weeks, practice weeks, and assessment windows are coordinated at semester level.</p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">8. Practical Activities</h2>
            <p className="mt-2 text-sm text-gray-700">Data analysis practicals, modelling exercises, and problem-based sessions.</p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">9. Coding Labs</h2>
            <p className="mt-2 text-sm text-gray-700">Hands-on labs with {moduleItem.software.join(", ")} for reproducible scientific workflows.</p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">10. Field Activities</h2>
            <p className="mt-2 text-sm text-gray-700">Selected modules integrate field observation and measurement interpretation.</p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">11. Assessment</h2>
            <p className="mt-2 text-sm text-gray-700">Assessment combines coursework, technical outputs, and applied evaluation tasks.</p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">12. Module Project</h2>
            <p className="mt-2 text-sm text-gray-700">Each module includes a project component aligned to studio or work-package context.</p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">13. Expected Deliverables</h2>
            <p className="mt-2 text-sm text-gray-700">Model notebooks, technical reports, code artifacts, and presentation outputs.</p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">14. Textbooks</h2>
            <p className="mt-2 text-sm text-gray-700">Core reading list is published in semester handbooks and module briefs.</p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">15. Software</h2>
            <p className="mt-2 text-sm text-gray-700">{moduleItem.software.join(", ")}</p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">16. WP Mapping</h2>
            <p className="mt-2 text-sm text-gray-700">{moduleItem.wpMapping.join(", ")}</p>
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
