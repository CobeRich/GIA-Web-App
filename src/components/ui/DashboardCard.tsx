import type { ReactNode } from "react";
import Link from "next/link";

/** Card used within authenticated portal dashboards. */
export default function DashboardCard({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href?: string;
  icon?: ReactNode;
}) {
  const content = (
    <div className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-colors hover:border-gia-teal">
      {icon && <div className="mb-3 text-gia-teal">{icon}</div>}
      <h3 className="mb-1 font-semibold text-gia-blue">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
