import Link from "next/link";

/** Simple card linking to a downloadable file (PDF placeholder etc). */
export default function DownloadCard({
  title,
  description,
  href,
}: {
  title: string;
  description?: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-colors hover:border-gia-teal"
    >
      <span
        aria-hidden
        className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded bg-gia-blue/10 text-gia-blue"
      >
        ⬇
      </span>
      <span>
        <span className="block font-medium text-gia-blue">{title}</span>
        {description && (
          <span className="block text-sm text-gray-600">{description}</span>
        )}
      </span>
    </Link>
  );
}
