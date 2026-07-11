import Link from "next/link";

export default function ProjectCard({ title, summary, href }: { title: string; summary: string; href: string }) {
  return (
    <Link href={href} className="block rounded-xl border border-slate-200 bg-white p-4 hover:border-gia-blue">
      <h3 className="text-lg font-semibold capitalize text-gia-blue">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{summary}</p>
    </Link>
  );
}
