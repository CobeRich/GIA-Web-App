import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import MapPlaceholder from "@/components/ui/MapPlaceholder";

export const metadata: Metadata = {
  title: "Maps",
  description: "Interactive maps of aquifers, field sites, and potable water infrastructure.",
};

export default function MapsPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="Maps"
        description="Explore the geographic distribution of aquifers, field sites, and monitored potable water infrastructure."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <MapPlaceholder label="Interactive GIA aquifer and field site map" height="h-96" />
      </section>
    </>
  );
}
