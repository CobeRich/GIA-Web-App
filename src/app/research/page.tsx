import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import ProcessFlow from "@/components/ui/ProcessFlow";
import WorkPackageCard from "@/components/ui/WorkPackageCard";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Explore the integrated research programme, work packages, laboratories, field sites, datasets, and collaboration pathways.",
};

const programmeStages = [
  {
    title: "Foundations",
    summary: "Baseline hydroclimatic forcing, field evidence structures, and conceptual model setup.",
  },
  {
    title: "Core Physics",
    summary: "Vadose-zone flow and multi-continuum transport physics for realistic subsurface behaviour.",
  },
  {
    title: "Real Systems",
    summary: "Aquifer-scale and human-water system interactions, including demand and engineered perturbations.",
  },
  {
    title: "Decision Framework",
    summary: "Potable-water risk, treatment implications, and policy-ready decision support outputs.",
  },
];

const crossCuttingThemes = [
  "Uncertainty quantification and validation",
  "Data assimilation and hybrid AI-physics modelling",
  "Scale-bridging from laboratory to basin systems",
  "Policy translation and implementation readiness",
];

const wpCards = [
  { code: "WP1", title: "Climate & Surface Forcing", summary: "Forcing dynamics, rainfall fields, and infiltration drivers.", href: "/research/work-packages/wp1-climate-surface-forcing" },
  { code: "WP2", title: "Vadose-Zone Flow", summary: "Matrix, macropore, fracture flow, and recharge exchange.", href: "/research/work-packages/wp2-vadose-zone-flow" },
  { code: "WP3", title: "Contaminant Transport", summary: "Multi-pathway transport and quality risk outcomes.", href: "/research/work-packages/wp3-contaminant-transport" },
  { code: "WP4", title: "Aquifer Systems", summary: "Regional scaling, storage, and vulnerability mapping.", href: "/research/work-packages/wp4-aquifer-systems" },
  { code: "WP5", title: "Human-Water Systems", summary: "Demand, abstraction, governance, and feedback effects.", href: "/research/work-packages/wp5-human-water-systems" },
  { code: "WP6", title: "Potable-Water Assessment", summary: "Risk indexing and decision-support translation.", href: "/research/work-packages/wp6-potable-water-assessment" },
];

const lowerSections = [
  { href: "/research/laboratories", title: "Research Laboratories", description: "Specialised laboratory systems for hydrogeology, quality analysis, and model support." },
  { href: "/research/themes", title: "Cross-Cutting Research Themes", description: "Theme clusters spanning science, systems engineering, and policy translation." },
  { href: "/research/field-sites", title: "Field Sites", description: "Regional field observatories for monitoring, validation, and deployment testing." },
  { href: "/research/datasets", title: "Datasets", description: "Curated research datasets supporting transparency, reproducibility, and reuse." },
  { href: "/research/scientific-software", title: "Scientific Software", description: "Models, computation workflows, and digital tools developed through the programme." },
  { href: "/research/collaboration", title: "Collaboration", description: "Collaboration pathways for academia, governments, industry, and development partners." },
];

const frameworkLayers = [
  { label: "Climate & Surface Forcing", href: "/research/work-packages/wp1-climate-surface-forcing" },
  { label: "Vadose-Zone Flow", href: "/research/work-packages/wp2-vadose-zone-flow" },
  { label: "Contaminant Dynamics", href: "/research/work-packages/wp3-contaminant-transport" },
  { label: "Aquifer Systems", href: "/research/work-packages/wp4-aquifer-systems" },
  { label: "Human-Water Systems", href: "/research/work-packages/wp5-human-water-systems" },
  { label: "Potable-Water Decisions", href: "/research/work-packages/wp6-potable-water-assessment" },
];

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        heroType="B"
        title="Integrated Groundwater Research for Potable-Water Security"
        description="Programme-wide research architecture spanning foundational science, core physics, real-system integration, and decision intelligence."
      />

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="mb-3 text-2xl font-bold text-gia-blue">Research Challenge</h2>
            <p className="text-gray-700">
              Potable-water systems face compound pressure from climate variability,
              heterogeneous subsurface flow, contamination risk, and human abstraction dynamics.
            </p>
          </Card>
          <Card>
            <h2 className="mb-3 text-2xl font-bold text-gia-blue">Overall Scientific Objective</h2>
            <p className="text-gray-700">
              Develop validated groundwater intelligence capable of estimating and managing potable-water
              quantity and quality under real-world uncertainty.
            </p>
          </Card>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gia-blue">Integrated Framework</h2>
                <p className="mt-2 max-w-[80ch] text-gray-700">
                  The integrated framework links WP1 to WP6 as one end-to-end scientific pipeline,
                  combining forcing, subsurface physics, contaminant behaviour, aquifer systems,
                  human-water interactions, and potable-water decision support.
                </p>
              </div>
              <Link href="/research/integrated-framework" className="text-sm font-semibold text-gia-teal hover:underline">
                Open integrated framework
              </Link>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {frameworkLayers.map((layer) => (
                <Link key={layer.label} href={layer.href} className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-gia-blue hover:border-gia-teal">
                  {layer.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-bold text-gia-blue">Integrated Programme Overview</h2>
          <p className="mb-6 max-w-[78ch] text-gray-700">
            The research programme is designed as one connected architecture: from forcing and core subsurface
            physics to full-system modelling and decision-ready potable-water intelligence.
          </p>
          <ProcessFlow
            steps={[
              "Foundations",
              "Core Physics",
              "Real Systems",
              "Decision Framework",
            ]}
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {programmeStages.map((stage) => (
              <Card key={stage.title} className="h-full">
                <h3 className="text-base font-semibold text-gia-blue">{stage.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{stage.summary}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
            <h2 className="text-2xl font-bold text-gia-blue">WP1-WP6 Flow</h2>
            <Link href="/research/work-packages" className="text-sm font-semibold text-gia-teal hover:underline">
              Explore all work packages
            </Link>
          </div>
          <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
            <p className="font-semibold text-gia-blue">Process dependency</p>
            <p className="mt-2">WP1 → WP2 → WP3 → WP4 → WP6, with WP5 informing WP3, WP4, and WP6.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {wpCards.map((wp) => (
              <WorkPackageCard
                key={wp.href}
                code={wp.code}
                title={wp.title}
                summary={wp.summary}
                href={wp.href}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gia-blue">Cross-Cutting Themes</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {crossCuttingThemes.map((theme) => (
              <Card key={theme} className="h-full">
                <p className="text-sm font-semibold text-gia-blue">{theme}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-2xl font-bold text-gia-blue">Featured Projects</h2>
          <Link href="/research/projects" className="text-sm font-semibold text-gia-teal hover:underline">
            View all projects
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="h-full">
            <h3 className="text-base font-semibold text-gia-blue">Regional Aquifer Risk Mapping</h3>
            <p className="mt-2 text-sm text-gray-600">Integrated assessment of quantity and quality vulnerability under variable abstraction regimes.</p>
            <Link href="/research/projects/aquifer-risk-mapping" className="mt-3 inline-block text-sm font-semibold text-gia-teal hover:underline">
              Explore project
            </Link>
          </Card>
          <Card className="h-full">
            <h3 className="text-base font-semibold text-gia-blue">Vadose-Zone Core Physics Demonstrator</h3>
            <p className="mt-2 text-sm text-gray-600">Multi-continuum flow demonstrator for realistic recharge and transport coupling.</p>
            <Link href="/research/projects/vadose-zone-core-physics" className="mt-3 inline-block text-sm font-semibold text-gia-teal hover:underline">
              Explore project
            </Link>
          </Card>
          <Card className="h-full">
            <h3 className="text-base font-semibold text-gia-blue">Potable-Water Decision Engine</h3>
            <p className="mt-2 text-sm text-gray-600">Decision-support prototype connecting model outputs to risk and treatment guidance.</p>
            <Link href="/research/projects/potable-water-decision-engine" className="mt-3 inline-block text-sm font-semibold text-gia-teal hover:underline">
              Explore project
            </Link>
          </Card>
        </div>
      </section>

      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-gia-blue">Research Infrastructure & Outputs</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/research/laboratories">
              <Card className="h-full">
                <h3 className="mb-2 text-lg font-semibold text-gia-blue">Laboratories</h3>
                <p className="text-sm text-gray-600">Specialised laboratory systems for hydrogeology, quality analysis, and model support.</p>
              </Card>
            </Link>
            <Link href="/research/publications">
              <Card className="h-full">
                <h3 className="mb-2 text-lg font-semibold text-gia-blue">Publications</h3>
                <p className="text-sm text-gray-600">Peer-reviewed papers, reports, briefs, and framework outputs.</p>
              </Card>
            </Link>
            <Link href="/research/datasets">
              <Card className="h-full">
                <h3 className="mb-2 text-lg font-semibold text-gia-blue">Datasets</h3>
                <p className="text-sm text-gray-600">Curated datasets supporting reproducibility, benchmarking, and system validation.</p>
              </Card>
            </Link>
            <Link href="/research/scientific-software">
              <Card className="h-full">
                <h3 className="mb-2 text-lg font-semibold text-gia-blue">Scientific Software</h3>
                <p className="text-sm text-gray-600">Solvers, toolkits, and decision-support software developed through the programme.</p>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-2xl font-bold text-gia-blue">Collaboration Opportunities</h2>
          <p className="mt-3 max-w-[72ch] text-gray-700">
            Partner with GIA on laboratories, datasets, scientific software, field campaigns,
            and WP-linked research implementation.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/research/collaboration" className="rounded-md bg-gia-teal px-5 py-3 text-sm font-semibold text-white">
              Collaborate with GIA Research
            </Link>
            <Link href="/forms/collaboration" className="rounded-md border border-gia-blue px-5 py-3 text-sm font-semibold text-gia-blue">
              Submit Collaboration Enquiry
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-gia-blue">Additional Research Sections</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {lowerSections.map((item) => (
              <Link key={item.href} href={item.href}>
                <Card className="h-full">
                  <h3 className="mb-2 text-lg font-semibold text-gia-blue">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
