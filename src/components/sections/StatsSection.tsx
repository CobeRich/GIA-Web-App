import KPIBlock from "@/components/ui/KPIBlock";

const STATS = [
  { value: "6", label: "Research Work Packages", icon: "◉" },
  { value: "16", label: "Specialist Academic Modules", icon: "◉" },
  { value: "10", label: "Planned Research Laboratories", icon: "◉" },
  { value: "1", label: "Integrated Groundwater Platform", icon: "◉" },
];

export default function StatsSection() {
  return (
    <section className="bg-[#eef5fb] py-14">
      <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {STATS.map((stat) => (
          <KPIBlock key={stat.label} value={stat.value} label={stat.label} icon={stat.icon} />
        ))}
      </div>
    </section>
  );
}
