import type { ReactNode } from "react";

export default function CalloutPanel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="rounded-xl border border-gia-blue/20 bg-gia-light p-5">
      <h3 className="text-lg font-semibold text-gia-blue">{title}</h3>
      <div className="mt-2 text-sm text-slate-700">{children}</div>
    </aside>
  );
}
