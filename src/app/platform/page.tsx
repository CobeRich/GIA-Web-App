import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Platform",
  description: "GIA's digital platform: data portal, modelling engine, AI prediction, digital twin, IoT monitoring, and more.",
};

const engines = [
  { href: "/platform/data-portal", title: "Data Portal" },
  { href: "/platform/modelling-engine", title: "Modelling Engine" },
  { href: "/platform/ai-prediction", title: "AI Prediction" },
  { href: "/platform/digital-twin", title: "Digital Twin" },
  { href: "/platform/monitoring-iot", title: "Monitoring and IoT" },
  { href: "/platform/dashboard", title: "Decision Dashboard" },
];

const userGroups = [
  "Researchers",
  "Students",
  "Laboratory teams",
  "Government partners",
  "Industry collaborators",
  "Technical administrators",
];

const accessLevels = [
  "Public data access",
  "Academic project access",
  "Partner collaboration access",
  "Operational administration access",
];

const roadmap = [
  "V1 data and metadata foundation",
  "V2 modelling and prediction integration",
  "V3 digital twin and scenario intelligence",
  "V4 policy and deployment support",
];

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        heroType="E"
        title="Groundwater Intelligence Platform"
        description="Integrated digital infrastructure for data, simulation, prediction, and decision support."
      />

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="mb-2 text-xl font-semibold text-gia-blue">1. Platform Purpose</h2>
            <p className="text-sm text-gray-700">
              Provide a single operational environment for groundwater evidence, model execution,
              prediction workflows, and decision-ready outputs.
            </p>
          </Card>
          <Card>
            <h2 className="mb-2 text-xl font-semibold text-gia-blue">2. Architecture</h2>
            <p className="text-sm text-gray-700">
              Layered architecture combining data services, computational engines, AI services,
              digital twin orchestration, and user-facing dashboards.
            </p>
          </Card>
        </div>
      </section>

      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gia-blue">3. Six Main Engines</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {engines.map((engine) => (
              <Link key={engine.href} href={engine.href}>
                <Card className="h-full">
                  <p className="text-sm font-semibold text-gia-blue">{engine.title}</p>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Card>
              <h3 className="mb-2 text-lg font-semibold text-gia-blue">4. User Groups</h3>
              <ul className="list-disc space-y-1.5 pl-5 text-sm text-gray-700">
                {userGroups.map((group) => (
                  <li key={group}>{group}</li>
                ))}
              </ul>
            </Card>
            <Card>
              <h3 className="mb-2 text-lg font-semibold text-gia-blue">5. Platform Status</h3>
              <p className="text-sm text-gray-700">
                The platform is in active phased development with demonstration services and
                progressively expanding research-integrated functionality.
              </p>
            </Card>
            <Card>
              <h3 className="mb-2 text-lg font-semibold text-gia-blue">6. Demonstration</h3>
              <p className="text-sm text-gray-700">
                Demonstration environments are available for data exploration, model runs,
                and dashboard walk-throughs.
              </p>
              <p className="mt-3 inline-block rounded-full border border-gia-teal/40 bg-gia-light px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gia-blue">
                Demonstration data
              </p>
            </Card>
            <Card>
              <h3 className="mb-2 text-lg font-semibold text-gia-blue">7. Research Integration</h3>
              <p className="text-sm text-gray-700">
                Platform modules are mapped to WP1-WP6 for reproducible research, validation,
                and decision-support implementation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="mb-2 text-xl font-semibold text-gia-blue">8. Access Levels</h2>
            <ul className="list-disc space-y-1.5 pl-5 text-sm text-gray-700">
              {accessLevels.map((level) => (
                <li key={level}>{level}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <h2 className="mb-2 text-xl font-semibold text-gia-blue">9. Development Roadmap</h2>
            <ul className="list-disc space-y-1.5 pl-5 text-sm text-gray-700">
              {roadmap.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/platform/access" className="rounded-md bg-gia-teal px-5 py-3 text-sm font-semibold text-white">
            Request Access
          </Link>
          <Link href="/platform/api-docs" className="rounded-md border border-gia-blue px-5 py-3 text-sm font-semibold text-gia-blue">
            API Documentation
          </Link>
        </div>
      </section>
    </>
  );
}
