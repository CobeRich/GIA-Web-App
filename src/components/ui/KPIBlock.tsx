/** Single statistic block used in StatsSection / dashboards. */
export default function KPIBlock({
  value,
  label,
  icon,
}: {
  value: string;
  label: string;
  icon?: string;
}) {
  return (
    <div className="text-center">
      {icon ? <div className="text-sm text-gia-teal">{icon}</div> : null}
      <div className="text-3xl font-bold text-gia-blue sm:text-4xl">{value}</div>
      <div className="mt-1 text-sm text-gray-600">{label}</div>
    </div>
  );
}
