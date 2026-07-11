export default function PublicationCard({
  title,
  citation,
}: {
  title: string;
  citation: string;
}) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-4">
      <h3 className="text-lg font-semibold text-gia-blue">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{citation}</p>
    </article>
  );
}
