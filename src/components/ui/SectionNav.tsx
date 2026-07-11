import Link from "next/link";

export interface SectionNavItem {
  label: string;
  href: string;
}

export default function SectionNav({ items }: { items: SectionNavItem[] }) {
  return (
    <nav className="mx-auto max-w-[1240px] px-4 py-4 sm:px-6 lg:px-8" aria-label="Section navigation">
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="rounded-full border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:border-gia-blue hover:text-gia-blue">
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
