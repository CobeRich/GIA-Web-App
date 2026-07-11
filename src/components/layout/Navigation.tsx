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
            className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gia-light hover:text-gia-blue"
          >
            {item.label}
            {item.children && <span aria-hidden>▾</span>}
          </Link>
          {item.children && openIndex === index && (
            <div className="absolute left-0 top-full z-20 min-w-[220px] rounded-md border border-gray-200 bg-white py-2 shadow-lg">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gia-light hover:text-gia-blue"
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
