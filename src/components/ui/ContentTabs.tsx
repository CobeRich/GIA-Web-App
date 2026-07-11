"use client";

import { useState } from "react";
import type { ReactNode } from "react";

export interface TabItem {
  label: string;
  content: ReactNode;
}

export default function ContentTabs({ items }: { items: TabItem[] }) {
  const [active, setActive] = useState(0);
  if (items.length === 0) return null;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <button
            key={item.label}
            type="button"
            onClick={() => setActive(index)}
            className={`rounded-md px-3 py-1.5 text-sm ${index === active ? "bg-gia-blue text-white" : "bg-slate-100 text-slate-700"}`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="mt-4">{items[active].content}</div>
    </div>
  );
}
