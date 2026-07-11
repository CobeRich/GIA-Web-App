export default function ProcessFlow({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center gap-2">
          <span className="rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-700">{step}</span>
          {index < steps.length - 1 ? <span className="text-slate-400">→</span> : null}
        </div>
      ))}
    </div>
  );
}
