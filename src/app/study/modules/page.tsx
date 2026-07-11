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

function normalize(value: string) {
  return value.toLowerCase().trim();
}

export default function StudyModulesPage({
  searchParams,
}: {
  searchParams?: {
    q?: string;
    semester?: string;
    credits?: string;
    wp?: string;
    discipline?: string;
    software?: string;
    mode?: string;
  };
}) {
  const query = normalize(searchParams?.q ?? "");
  const semesterFilter = searchParams?.semester ?? "all";
  const creditsFilter = searchParams?.credits ?? "all";
  const wpFilter = searchParams?.wp ?? "all";
  const disciplineFilter = searchParams?.discipline ?? "all";
  const softwareFilter = searchParams?.software ?? "all";
  const modeFilter = searchParams?.mode ?? "all";

  const modules = studyModules.filter((moduleItem) => {
    const matchesQuery =
      !query ||
      normalize(moduleItem.code).includes(query) ||
      normalize(moduleItem.title).includes(query) ||
      normalize(moduleItem.summary).includes(query);
    const matchesSemester = semesterFilter === "all" || moduleItem.semester === semesterFilter;
    const matchesCredits = creditsFilter === "all" || String(moduleItem.credits) === creditsFilter;
    const matchesWp = wpFilter === "all" || moduleItem.wpMapping.includes(wpFilter);
    const matchesDiscipline = disciplineFilter === "all" || moduleItem.discipline === disciplineFilter;
    const matchesSoftware =
      softwareFilter === "all" ||
      moduleItem.software.some((tool) => normalize(tool) === normalize(softwareFilter));
    const matchesMode = modeFilter === "all" || moduleItem.learningMode === modeFilter;

    return (
      matchesQuery &&
      matchesSemester &&
      matchesCredits &&
      matchesWp &&
      matchesDiscipline &&
      matchesSoftware &&
      matchesMode
    );
  });

  const softwareOptions = Array.from(new Set(studyModules.flatMap((m) => m.software)));
  const modeOptions = Array.from(new Set(studyModules.map((m) => m.learningMode)));

  return (
    <>
      <PageHero
        eyebrow="Study"
        heroType="C"
        title="Module Catalogue"
        description="Sixteen modules covering environmental science, mathematics, modelling, AI, and decision support."
      />
      <section className="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 lg:px-8">
        <form className="mb-8 grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 md:grid-cols-2 xl:grid-cols-4">
          <input
            type="search"
            name="q"
            defaultValue={searchParams?.q ?? ""}
            placeholder="Search module title or code"
            className="rounded-md border border-slate-300 px-3 py-2 text-sm"
          />
          <select name="semester" defaultValue={semesterFilter} className="rounded-md border border-slate-300 px-3 py-2 text-sm">
            <option value="all">All semesters</option>
            <option value="Semester I">Semester I</option>
            <option value="Semester II">Semester II</option>
            <option value="Semester III">Semester III</option>
            <option value="Semester IV">Semester IV</option>
          </select>
          <select name="credits" defaultValue={creditsFilter} className="rounded-md border border-slate-300 px-3 py-2 text-sm">
            <option value="all">All credits</option>
            <option value="4">4 credits</option>
          </select>
          <select name="wp" defaultValue={wpFilter} className="rounded-md border border-slate-300 px-3 py-2 text-sm">
            <option value="all">All work packages</option>
            <option value="WP1">WP1</option>
            <option value="WP2">WP2</option>
            <option value="WP3">WP3</option>
            <option value="WP4">WP4</option>
            <option value="WP5">WP5</option>
            <option value="WP6">WP6</option>
          </select>
          <select name="discipline" defaultValue={disciplineFilter} className="rounded-md border border-slate-300 px-3 py-2 text-sm">
            <option value="all">All disciplines</option>
            <option value="Environmental Science">Environmental Science</option>
            <option value="Mathematical Science">Mathematical Science</option>
            <option value="Computational Science">Computational Science</option>
          </select>
          <select name="software" defaultValue={softwareFilter} className="rounded-md border border-slate-300 px-3 py-2 text-sm">
            <option value="all">All software</option>
            {softwareOptions.map((tool) => (
              <option key={tool} value={tool}>{tool}</option>
            ))}
          </select>
          <select name="mode" defaultValue={modeFilter} className="rounded-md border border-slate-300 px-3 py-2 text-sm">
            <option value="all">All learning modes</option>
            {modeOptions.map((mode) => (
              <option key={mode} value={mode}>{mode}</option>
            ))}
          </select>
          <button type="submit" className="rounded-md bg-gia-teal px-4 py-2 text-sm font-semibold text-white">Apply filters</button>
        </form>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((moduleItem) => (
            <Link key={moduleItem.slug} href={`/study/modules/${moduleItem.slug}`}>
              <Card className="h-full">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gia-teal">
                  {moduleItem.code} · {moduleItem.semester}
                </p>
                <h2 className="mb-2 text-lg font-semibold text-gia-blue">{moduleItem.title}</h2>
                <p className="text-sm text-gray-600">{moduleItem.summary}</p>
                <p className="mt-3 text-xs font-medium text-slate-500">
                  {moduleItem.discipline} · {moduleItem.learningMode} · {moduleItem.software.join(", ")}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
