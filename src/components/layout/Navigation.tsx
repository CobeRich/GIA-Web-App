"use client";

import { useState } from "react";
import Link from "next/link";
import { primaryNav } from "@/lib/navigation";

/** Desktop navigation with hover/click dropdowns for sections with children. */
export default function Navigation() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <nav className="hidden lg:flex lg:items-center lg:gap-1" aria-label="Primary">
      {primaryNav.map((item, index) => (
        <div
          key={item.href}
          className="relative"
          onMouseEnter={() => setOpenIndex(index)}
          onMouseLeave={() => setOpenIndex(null)}
        >
          <Link
            href={item.href}
            className="flex items-center gap-1 rounded-md px-2 py-1.5 text-[14px] font-medium text-slate-100 transition hover:bg-white/10"
          >
            {item.label}
            {item.children && <span aria-hidden className="text-[10px] text-slate-300">▼</span>}
          </Link>
          {item.children && openIndex === index && (
            <div className="absolute left-0 top-full z-20 min-w-[240px] rounded-lg border border-slate-500/60 bg-[#123b63]/95 py-2 shadow-xl backdrop-blur">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block px-4 py-2 text-sm text-slate-100 transition hover:bg-white/12"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
