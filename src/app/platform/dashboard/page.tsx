import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import DashboardCard from "@/components/ui/DashboardCard";
import KPIBlock from "@/components/ui/KPIBlock";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Visual dashboards summarising groundwater and potable water indicators.",
};

// TODO: Replace with real, live dashboard data via the platform API.
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
        title="Dashboard"
        description="A preview of the indicators available through GIA's monitoring dashboard."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-2 gap-8 rounded-lg bg-gia-light p-8 lg:grid-cols-4">
          {KPIS.map((kpi) => (
            <KPIBlock key={kpi.label} value={kpi.value} label={kpi.label} />
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
