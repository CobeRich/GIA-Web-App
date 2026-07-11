import Link from "next/link";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import type { ResearchEntry } from "@/types/content";

export default function FeaturedResearch({ entries }: { entries: ResearchEntry[] }) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gia-blue sm:text-3xl">
              Featured Research
            </h2>
            <p className="mt-2 max-w-2xl text-gray-600">
              Discover our laboratories, research themes, and field sites advancing
              potable water science.
            </p>
          </div>
          <Link href="/research" className="hidden text-sm font-medium text-gia-teal sm:block">
            View all research →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map((entry) => (
            <Card key={entry.slug}>
              <Badge tone="teal" className="mb-3 capitalize">
                {entry.type.replace("-", " ")}
              </Badge>
              <h3 className="mb-2 text-lg font-semibold text-gia-blue">{entry.title}</h3>
              <p className="text-sm text-gray-600">{entry.summary}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
