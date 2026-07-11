import KPIBlock from "@/components/ui/KPIBlock";

// TODO: Replace with real, verified institutional statistics.
const STATS = [
  { value: "12+", label: "Research Laboratories" },
  { value: "40+", label: "Active Field Sites" },
  { value: "25", label: "Partner Organisations" },
  { value: "1.2M+", label: "People Reached with Potable Water Research" },
];

export default function StatsSection() {
  return (
    <section className="bg-gia-light py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {STATS.map((stat) => (
          <KPIBlock key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
}
