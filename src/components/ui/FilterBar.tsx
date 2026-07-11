"use client";

import { cn } from "@/lib/utils";

/** Simple client-side category filter bar used on listing pages. */
export default function FilterBar({
  options,
  active,
  onChange,
}: {
  options: string[];
  active: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          role="tab"
          aria-selected={active === option}
          onClick={() => onChange(option)}
          className={cn(
            "rounded-full border px-4 py-1.5 text-sm font-medium capitalize transition-colors",
            active === option
              ? "border-gia-blue bg-gia-blue text-white"
              : "border-gray-300 text-gray-600 hover:border-gia-blue hover:text-gia-blue"
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
