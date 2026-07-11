import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import DownloadCard from "@/components/ui/DownloadCard";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Datasets",
  description: "Open datasets produced by GIA groundwater and potable water research.",
};

// TODO: Replace with real dataset catalogue, ideally pulled from the data portal API.
const DATASETS = [
  {
    title: "Regional Aquifer Levels 2020–2024",
    description: "Time-series groundwater level readings from monitored aquifers.",
    href: "/downloads/dataset-aquifer-levels-placeholder.csv",
  },
  {
    title: "Potable Water Quality Index by District",
    description: "Aggregated potable water quality indicators by administrative district.",
    href: "/downloads/dataset-water-quality-placeholder.csv",
  },
  {
    title: "Field Site Metadata",
    description: "Metadata describing GIA's field monitoring site network.",
    href: "/downloads/dataset-field-sites-placeholder.csv",
  },
];

export default function DatasetsPage() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Datasets"
        description="Explore open datasets produced through GIA's groundwater research programmes."
      />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-4">
          {DATASETS.map((dataset) => (
            <DownloadCard
              key={dataset.title}
              title={dataset.title}
              description={dataset.description}
              href={dataset.href}
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="mb-4 text-gray-600">
            Need programmatic access to more datasets?
          </p>
          <Button href="/platform/data-portal" variant="outline">
            Visit the Data Portal
          </Button>
        </div>
      </section>
    </>
  );
}
