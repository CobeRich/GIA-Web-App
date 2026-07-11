import Link from "next/link";
import Badge from "./Badge";
import { formatDate } from "@/lib/utils";
import type { KnowledgeResource } from "@/types/content";

/** Card for a knowledge hub resource (report, brief, webinar, etc). */
export default function ResourceCard({ resource }: { resource: KnowledgeResource }) {
  const href = resource.fileUrl ?? resource.externalUrl ?? "#";
  return (
    <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
      <Badge tone="teal" className="mb-2 w-fit capitalize">
        {resource.type.replace("-", " ")}
      </Badge>
      <h3 className="mb-1 text-base font-semibold text-gia-blue">{resource.title}</h3>
      <p className="mb-3 flex-1 text-sm text-gray-600">{resource.summary}</p>
      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>{formatDate(resource.date)}</span>
        <Link
          href={href}
          target={resource.externalUrl ? "_blank" : undefined}
          rel={resource.externalUrl ? "noopener noreferrer" : undefined}
          className="font-medium text-gia-teal underline underline-offset-2"
        >
          {resource.externalUrl ? "View" : "Download"}
        </Link>
      </div>
    </div>
  );
}
