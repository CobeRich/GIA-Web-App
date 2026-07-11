export interface FactItem {
  label: string;
  value: string;
}

export default function FactGrid({ items }: { items: FactItem[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{item.label}</p>
          <p className="mt-1 text-xl font-bold text-gia-blue">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
