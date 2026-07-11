import Link from "next/link";

export default function WorkPackageCard({
  code,
  title,
  summary,
  href,
}: {
  code: string;
  title: string;
  summary: string;
  href: string;
}) {
  return (
    <Link href={href} className="block rounded-xl border border-slate-200 bg-white p-4 hover:border-gia-blue">
      <p className="text-xs font-semibold uppercase tracking-wide text-gia-teal">{code}</p>
      <h3 className="mt-2 text-lg font-semibold text-gia-blue">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{summary}</p>
    </Link>
  );
}
