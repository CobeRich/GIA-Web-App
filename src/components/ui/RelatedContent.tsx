import Link from "next/link";

export interface RelatedLink {
  label: string;
  href: string;
}

export default function RelatedContent({ title = "Related Content", items }: { title?: string; items: RelatedLink[] }) {
  if (items.length === 0) return null;
  return (
    <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
      <h3 className="text-lg font-semibold text-gia-blue">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-gia-blue hover:underline">{item.label}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
