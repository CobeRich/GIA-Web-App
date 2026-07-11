import Link from "next/link";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import type { ResearchEntry } from "@/types/content";
import { assetPaths } from "@/lib/siteConfig";

export default function FeaturedResearch({ entries }: { entries: ResearchEntry[] }) {
  const [spotlight, ...secondary] = entries;

  if (!spotlight) return null;

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gia-blue sm:text-3xl">Research Spotlight</h2>
            <p className="mt-2 max-w-2xl text-gray-600">
              One flagship project with methodology, expected impact, and links to framework outputs.
            </p>
          </div>
          <Link href="/research" className="text-sm font-medium text-gia-teal">
            View all research →
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <Card>
            <Badge tone="teal" className="mb-3 capitalize">
              {spotlight.type.replace("-", " ")} Spotlight
            </Badge>
            <h3 className="mb-2 text-2xl font-semibold text-gia-blue">{spotlight.title}</h3>
            <p className="text-sm text-gray-600">{spotlight.summary}</p>
            <div className="mt-5 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Method</p>
                <p className="mt-1">Integrated field observation and model calibration</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Related WP</p>
                <p className="mt-1">WP2 to WP6 linkages</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/research" className="text-sm font-semibold text-gia-teal hover:underline">
                Explore Project
              </Link>
              <Link href={assetPaths.docTemplate} className="text-sm font-semibold text-gia-blue hover:underline">
                Download Brief
              </Link>
              <Link href={assetPaths.videoTemplate} className="text-sm font-semibold text-gia-blue hover:underline">
                View Video Summary
              </Link>
            </div>
          </Card>

          <div className="grid gap-6">
            {secondary.slice(0, 2).map((entry) => (
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
      </div>
    </section>
  );
}
