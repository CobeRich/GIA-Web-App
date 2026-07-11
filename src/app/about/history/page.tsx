import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Timeline from "@/components/ui/Timeline";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "History",
  description: "The history and milestones of the Groundwater Intelligence Academy.",
};

const HISTORY_EVENTS = [
  {
    year: "2018",
    title: "Potable-Water Framework Origin",
    description: "Conceptual integration of hydrogeology, mathematics, and computation for potable-water estimation and management.",
  },
  {
    year: "2019",
    title: "Six Work Packages Defined",
    description: "WP1-WP6 established to connect forcing, flow, transport, aquifer dynamics, human systems, and decision support.",
  },
  {
    year: "2021",
    title: "Academic Track Development",
    description: "MPhil SCIM groundwater intelligence track structured into four phases and sixteen specialist modules.",
  },
  {
    year: "2022",
    title: "Groundwater Intelligence Studio Established",
    description: "Studio model introduced to connect coursework, laboratories, and live research workflows.",
  },
  {
    year: "2024",
    title: "Digital Platform Development",
    description: "Groundwater Intelligence Platform and digital twin advanced for scenario analysis and decision support.",
  },
];

export default function HistoryPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="History & Institutional Development"
        description="Origin and evolution of the framework, work packages, academic track, studio model, and digital platform."
      />

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h2 className="mb-2 text-xl font-semibold text-gia-blue">Origin of the Potable-Water Framework</h2>
            <p className="text-gray-700">
              The initial framework emerged from the need to unify field evidence, modelling,
              and decision intelligence for potable-water management.
            </p>
          </Card>
          <Card>
            <h2 className="mb-2 text-xl font-semibold text-gia-blue">Development of the Six WPs</h2>
            <p className="text-gray-700">
              The six-work-package architecture formalized a full scientific chain from forcing
              and subsurface dynamics to potable-water assessment.
            </p>
          </Card>
          <Card>
            <h2 className="mb-2 text-xl font-semibold text-gia-blue">Academic Track Development</h2>
            <p className="text-gray-700">
              The MPhil groundwater intelligence track was built to produce specialists capable
              of translating advanced science into implementation.
            </p>
          </Card>
          <Card>
            <h2 className="mb-2 text-xl font-semibold text-gia-blue">Creation of the Studio</h2>
            <p className="text-gray-700">
              The Groundwater Intelligence Studio integrates coursework, project delivery,
              and cross-work-package collaboration.
            </p>
          </Card>
          <Card className="md:col-span-2">
            <h2 className="mb-2 text-xl font-semibold text-gia-blue">Digital Platform Development</h2>
            <p className="text-gray-700">
              Platform capabilities evolved from data access toward forecasting, scenario testing,
              and policy-facing analytics within a digital-twin environment.
            </p>
          </Card>
        </div>
      </section>

      <section className="bg-gia-light py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold text-gia-blue">Interactive Timeline</h2>
        <Timeline events={HISTORY_EVENTS} />
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold text-gia-blue">Founding Documents</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Link href="/knowledge-hub/downloads" className="rounded-lg border border-slate-200 bg-white p-5 text-sm font-semibold text-gia-blue hover:border-gia-teal">
            Founding Concept Note
          </Link>
          <Link href="/knowledge-hub/downloads" className="rounded-lg border border-slate-200 bg-white p-5 text-sm font-semibold text-gia-blue hover:border-gia-teal">
            Framework Design Memorandum
          </Link>
          <Link href="/knowledge-hub/downloads" className="rounded-lg border border-slate-200 bg-white p-5 text-sm font-semibold text-gia-blue hover:border-gia-teal">
            Institutional Charter
          </Link>
        </div>
      </section>
    </>
  );
}
