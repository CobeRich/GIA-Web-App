import type { ReactNode } from "react";

export default function TaxonomyTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded border border-gia-teal/30 bg-gia-teal/5 px-2 py-0.5 text-xs text-gia-teal">
      #{children}
    </span>
  );
}
