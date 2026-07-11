import Link from "next/link";
import { assetPaths, institution } from "@/lib/siteConfig";

const pathwaySteps = [
  { label: "Observe", href: "/platform/monitoring-iot" },
  { label: "Model", href: "/research/integrated-framework" },
  { label: "Compute", href: "/research" },
  { label: "Predict", href: "/platform/ai-prediction" },
  { label: "Decide", href: "/platform/dashboard" },
  { label: "Innovate", href: "/innovation" },
];

const ecosystemCards = [
  {
    title: "Research",
    summary: institution.researchProgramme,
    href: "/research",
    accent: "from-[#0f4f8a] to-[#0c2b4d]",
  },
  {
    title: "Education",
    summary: institution.degreeTrack,
    href: "/about",
    accent: "from-[#145a4b] to-[#0a2f27]",
  },
  {
    title: "Technology",
    summary: "Groundwater Intelligence Platform and Digital Twin",
    href: "/platform",
    accent: "from-[#6b3f0f] to-[#2f1e0a]",
  },
];

const wpFlow = [
  {
    id: "WP1",
    title: "Climate",
    summary: "Atmospheric forcing, rainfall variability, and infiltration drivers.",
  },
  {
    id: "WP2",
    title: "Vadose Zone",
    summary: "Multi-continuum flow, exchange processes, and recharge generation.",
  },
  {
    id: "WP3",
    title: "Contaminants",
    summary: "Source pathways, transport mechanisms, and quality outcomes.",
  },
  {
    id: "WP4",
    title: "Aquifer",
    summary: "Regional groundwater flow, storage, and vulnerability mapping.",
  },
  {
    id: "WP5",
    title: "Human Systems",
    summary: "Demand, abstraction, infrastructure feedback, and governance stressors.",
  },
  {
    id: "WP6",
    title: "Potable-Water Decisions",
    summary: "Risk indexing, treatment logic, and policy-ready decision support.",
  },
];

export function StrategicPathwayStrip() {
  return (
    <section className="border-y border-slate-200 bg-white py-5">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-center gap-3 px-4 sm:px-6 lg:px-8">
        {pathwaySteps.map((step, index) => (
          <div key={step.label} className="flex items-center gap-3">
            <Link
              href={step.href}
              className="rounded-full border border-slate-300 px-4 py-1.5 text-sm font-semibold tracking-wide text-slate-700 transition hover:border-[#0f4f8a] hover:text-[#0f4f8a]"
            >
              {step.label}
            </Link>
            {index < pathwaySteps.length - 1 && <span className="text-slate-400">→</span>}
          </div>
        ))}
      </div>
    </section>
  );
}

export function EcosystemPathways() {
  return (
    <section className="bg-[#f6f9fc] py-16">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#0c2b4d]">One Ecosystem, Three Pathways</h2>
        <p className="mt-3 max-w-[70ch] text-slate-600">
          Research, education, and platform engineering operate as one connected system to convert
          environmental observation into potable-water decisions.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {ecosystemCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className={`rounded-2xl bg-gradient-to-br ${card.accent} p-6 text-white shadow-xl transition hover:-translate-y-1`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/80">{card.title}</p>
              <h3 className="mt-3 text-xl font-semibold">{card.summary}</h3>
              <p className="mt-6 text-sm font-semibold text-cyan-200">Explore Pathway</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WorkPackageFlow() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-[#0c2b4d]">Featured Research Framework</h2>
            <p className="mt-2 max-w-[72ch] text-slate-600">
              A connected WP1 to WP6 flow from climate forcing to potable-water decision support.
            </p>
          </div>
          <Link href="/research" className="text-sm font-semibold text-[#0f4f8a] hover:underline">
            Explore all work packages
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {wpFlow.map((item) => (
            <Link
              key={item.id}
              href="/research"
              className="group rounded-xl border border-slate-200 p-4 transition hover:border-[#0f4f8a] hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-[#0f4f8a]">{item.id}</p>
              <h3 className="mt-2 text-base font-semibold text-[#0c2b4d]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.summary}</p>
              <p className="mt-4 text-xs font-semibold text-slate-500 group-hover:text-[#0f4f8a]">Explore WP</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AcademicSpotlight() {
  return (
    <section className="bg-[#eef5fb] py-16">
      <div className="mx-auto grid max-w-[1240px] gap-8 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <h2 className="text-3xl font-bold text-[#0c2b4d]">Academic Track Spotlight</h2>
          <p className="mt-3 max-w-[68ch] text-slate-700">
            24-month, research-intensive progression across scientific foundations, mathematical
            modeling, intelligent environmental systems, and dissertation work integrated with WP1-WP6.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Duration</p>
              <p className="mt-1 text-lg font-semibold text-[#0c2b4d]">24 Months</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Delivery</p>
              <p className="mt-1 text-lg font-semibold text-[#0c2b4d]">Block Modular</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/forms/admissions"
              className="rounded-md bg-[#117a65] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0f6a58]"
            >
              Apply to Study
            </Link>
            <Link
              href={assetPaths.docTemplate}
              className="rounded-md border border-[#0f4f8a] bg-white px-5 py-3 text-sm font-semibold text-[#0f4f8a]"
            >
              Download Programme Guide
            </Link>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Programme Progression</p>
          <ol className="mt-4 space-y-3 text-sm text-slate-700">
            <li>Semester I: Scientific Foundations</li>
            <li>Semester II: Mathematical Modelling</li>
            <li>Semester III: Intelligent Environmental Systems</li>
            <li>Semester IV: Dissertation and Studio Integration</li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export function PlatformDemonstration() {
  return (
    <section className="bg-[#0b2a4a] py-16 text-white">
      <div className="mx-auto grid max-w-[1240px] items-center gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200">Platform Demonstration</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight">Groundwater Intelligence Platform and Digital Twin</h2>
          <p className="mt-4 text-slate-200">
            View map layers, recharge forecasts, quality scores, sensor status, and scenario comparisons
            in one decision-ready environment.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/platform" className="rounded-md bg-[#117a65] px-5 py-3 text-sm font-semibold text-white">
              Explore Platform
            </Link>
            <Link href={assetPaths.videoTemplate} className="rounded-md border border-white/40 px-5 py-3 text-sm font-semibold text-white">
              View Digital Twin Video
            </Link>
          </div>
        </div>
        <div className="rounded-2xl border border-white/15 bg-[#0d365f] p-6 shadow-xl">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-lg bg-[#07203a] p-4">
              <p className="text-slate-300">Water Level</p>
              <p className="mt-1 text-2xl font-bold">12.45 m</p>
            </div>
            <div className="rounded-lg bg-[#07203a] p-4">
              <p className="text-slate-300">Recharge Trend</p>
              <p className="mt-1 text-2xl font-bold">+78%</p>
            </div>
            <div className="rounded-lg bg-[#07203a] p-4">
              <p className="text-slate-300">Active Sensors</p>
              <p className="mt-1 text-2xl font-bold">124</p>
            </div>
            <div className="rounded-lg bg-[#07203a] p-4">
              <p className="text-slate-300">Risk Level</p>
              <p className="mt-1 text-2xl font-bold text-amber-300">Moderate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FieldToDecisionWorkflow() {
  const steps = [
    "Field sensors collect data",
    "Models simulate subsurface processes",
    "AI generates forecasts",
    "Digital twin evaluates scenarios",
    "Decision support informs management",
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#0c2b4d]">Field-to-Decision Workflow</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step} className="rounded-xl border border-slate-200 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Step {index + 1}</p>
              <p className="mt-2 text-sm font-medium text-slate-700">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function InnovationImpactTiles() {
  const tiles = [
    { title: "Policy Support", href: "/innovation/government-policy" },
    { title: "Industry Solutions", href: "/innovation/industry" },
    { title: "Open-Source Software", href: assetPaths.docTemplate },
    { title: "Student Innovation", href: "/innovation/startups" },
  ];

  return (
    <section className="bg-[#f6f9fc] py-16">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#0c2b4d]">Innovation and Impact</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((tile) => (
            <Link
              key={tile.title}
              href={tile.href}
              className="rounded-xl border border-slate-200 bg-white p-5 text-sm font-semibold text-slate-700 transition hover:border-[#0f4f8a] hover:text-[#0f4f8a]"
            >
              {tile.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCallToAction() {
  return (
    <section className="bg-[#081e34] py-20 text-white">
      <div className="mx-auto max-w-[1240px] px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold sm:text-4xl">Build the future of groundwater intelligence with us</h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/forms/partnership" className="rounded-md bg-[#117a65] px-5 py-3 text-sm font-semibold text-white">
            Become a Partner
          </Link>
          <Link href="/forms/admissions" className="rounded-md border border-white/40 px-5 py-3 text-sm font-semibold text-white">
            Apply to Study
          </Link>
          <Link href="/forms/collaboration" className="rounded-md border border-white/40 px-5 py-3 text-sm font-semibold text-white">
            Collaborate on Research
          </Link>
        </div>
      </div>
    </section>
  );
}
