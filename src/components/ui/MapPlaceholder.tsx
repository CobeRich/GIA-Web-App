/**
 * Placeholder for an interactive map (e.g. Leaflet/Mapbox) used on
 * /research/field-sites and /platform/maps. TODO: Replace with a real
 * map integration once an API key / tile provider is configured.
 */
export default function MapPlaceholder({
  label = "Interactive map placeholder",
  height = "h-80",
}: {
  label?: string;
  height?: string;
}) {
  return (
    <div
      className={`flex ${height} w-full items-center justify-center rounded-lg border-2 border-dashed border-gia-teal/40 bg-gia-light text-center`}
    >
      <div className="px-6">
        <p className="font-medium text-gia-blue">{label}</p>
        <p className="mt-1 text-sm text-gray-500">
          TODO: Integrate map provider (e.g. Mapbox/Leaflet) here.
        </p>
      </div>
    </div>
  );
}
