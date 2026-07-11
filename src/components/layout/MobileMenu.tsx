"use client";

import { useState } from "react";
import Link from "next/link";
import { primaryNav, utilityNav } from "@/lib/navigation";

/** Mobile off-canvas navigation menu with collapsible sub-sections. */
export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="rounded-md border border-slate-300/70 bg-[#1b3f67]/70 p-2 text-slate-100 transition hover:bg-[#2a527f]"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {isOpen && (
        <div className="absolute inset-x-0 top-full z-30 max-h-[82vh] overflow-y-auto border-t border-slate-400/60 bg-[linear-gradient(165deg,#0f345a_0%,#133f68_60%,#0c2f52_100%)] shadow-2xl">
          <nav className="flex flex-col px-4 pb-5 pt-4" aria-label="Mobile primary">
            <div className="mb-4 grid grid-cols-3 gap-2">
              {utilityNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md border border-slate-300/60 bg-white/5 px-2 py-2 text-center text-xs font-semibold text-slate-100 transition hover:bg-white/12"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            {primaryNav.map((item) => (
              <div key={item.href} className="border-b border-slate-300/25 py-2">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="py-2 text-[15px] font-medium text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      type="button"
                      aria-label={`Toggle ${item.label} submenu`}
                      onClick={() =>
                        setOpenSection((prev) => (prev === item.label ? null : item.label))
                      }
                      className="rounded-md px-2 py-1.5 text-slate-100 transition hover:bg-white/10"
                    >
                      {openSection === item.label ? "−" : "+"}
                    </button>
                  )}
                </div>
                {item.children && openSection === item.label && (
                  <div className="ml-2 mt-1 flex flex-col rounded-md border border-slate-300/20 bg-white/5 px-2 py-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="rounded px-2 py-1.5 text-sm text-slate-100 transition hover:bg-white/10"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
