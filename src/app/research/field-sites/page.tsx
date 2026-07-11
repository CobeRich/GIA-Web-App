import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import MapPlaceholder from "@/components/ui/MapPlaceholder";
import TaxonomyTag from "@/components/ui/TaxonomyTag";
import { getResearchEntriesByType } from "@/lib/content";

export const metadata: Metadata = {
  title: "Field Sites",
  description: "Active field monitoring sites used in GIA's groundwater research across Africa.",
};

export default function FieldSitesPage() {
  const sites = getResearchEntriesByType("field-site");
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Field Sites"
        description="A growing network of field sites where we monitor groundwater levels, recharge, and potable water quality."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <MapPlaceholder label="Map of active GIA field sites" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {sites.map((site) => (
            <Card key={site.slug}>
              <h3 className="mb-1 text-lg font-semibold text-gia-blue">{site.title}</h3>
              {site.location && (
                <p className="mb-2 text-sm font-medium text-gia-teal">{site.location}</p>
              )}
              <p className="mb-3 text-sm text-gray-600">{site.body}</p>
              <div className="flex flex-wrap gap-2">
                {site.tags.map((tag) => (
                  <TaxonomyTag key={tag}>{tag}</TaxonomyTag>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
