"use client";

import { useState } from "react";

export interface AccordionItem {
  title: string;
  content: string;
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={item.title} className="rounded-md border border-slate-200 bg-white">
          <button
            type="button"
            onClick={() => setOpen(open === index ? null : index)}
            className="flex w-full items-center justify-between px-4 py-3 text-left"
          >
            <span className="font-semibold text-gia-blue">{item.title}</span>
            <span>{open === index ? "−" : "+"}</span>
          </button>
          {open === index ? <div className="px-4 pb-4 text-sm text-slate-600">{item.content}</div> : null}
        </div>
      ))}
    </div>
  );
}
