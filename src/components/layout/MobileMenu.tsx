"use client";

import { useState } from "react";
import Link from "next/link";
import { primaryNav } from "@/lib/navigation";

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
        className="rounded-md p-2 text-gia-blue hover:bg-gia-light"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {isOpen && (
        <div className="absolute inset-x-0 top-full z-30 max-h-[80vh] overflow-y-auto border-t border-gray-200 bg-white shadow-lg">
          <nav className="flex flex-col p-4" aria-label="Mobile primary">
            {primaryNav.map((item) => (
              <div key={item.href} className="border-b border-gray-100 py-2">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="py-2 text-base font-medium text-gray-800"
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
                      className="px-2 py-2 text-gray-500"
                    >
                      {openSection === item.label ? "−" : "+"}
                    </button>
                  )}
                </div>
                {item.children && openSection === item.label && (
                  <div className="ml-3 flex flex-col">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="py-1.5 text-sm text-gray-600"
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
