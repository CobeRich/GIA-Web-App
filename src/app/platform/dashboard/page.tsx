import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import DashboardCard from "@/components/ui/DashboardCard";
import KPIBlock from "@/components/ui/KPIBlock";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Visual dashboards summarising groundwater and potable water indicators.",
};

// Demonstration-only values for preview layout.
const KPIS = [
  { value: "42", label: "Monitored Aquifers" },
  { value: "318", label: "Active Sensors" },
  { value: "96%", label: "Potable Water Compliance Rate" },
  { value: "12", label: "Countries Covered" },
];

export default function DashboardOverviewPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        heroType="E"
        title="Dashboard"
        description="A preview of the indicators available through GIA's monitoring dashboard."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="mb-5 inline-block rounded-full border border-gia-teal/40 bg-gia-light px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gia-blue">
          Demonstration data
        </p>
        <div className="mb-12 grid grid-cols-2 gap-8 rounded-lg bg-gia-light p-8 lg:grid-cols-4">
          {KPIS.map((kpi) => (
            <KPIBlock key={kpi.label} value={kpi.value} label={kpi.label} />
          ))}
        </div>
        <div className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {[
            "quantity",
            "quality",
            "potability",
            "recharge",
            "risk",
            "demand",
            "climate pressure",
            "treatment needs",
            "scenarios",
            "recommendations",
          ].map((item) => (
            <Card key={item} className="h-full">
              <p className="text-sm font-semibold capitalize text-gia-blue">{item}</p>
              <p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-500">Demonstration data</p>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <DashboardCard
            title="Groundwater Levels"
            description="Track aquifer levels across monitored field sites."
            href="/platform/monitoring-iot"
          />
          <DashboardCard
            title="Water Quality"
            description="Review potable water quality indicators by region."
            href="/platform/data-portal"
          />
          <DashboardCard
            title="Prediction Models"
            description="Explore AI-driven groundwater predictions."
            href="/platform/ai-prediction"
          />
        </div>
      </section>
    </>
  );
}
