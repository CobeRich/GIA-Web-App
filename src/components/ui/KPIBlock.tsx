/** Single statistic block used in StatsSection / dashboards. */
export default function KPIBlock({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-gia-blue sm:text-4xl">{value}</div>
      <div className="mt-1 text-sm text-gray-600">{label}</div>
    </div>
  );
}
