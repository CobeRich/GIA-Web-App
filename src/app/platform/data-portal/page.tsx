import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Data Portal",
  description: "Browse and download groundwater and potable water datasets curated by GIA.",
};

export default function DataPortalPage() {
  return (
    <>
      <PageHero eyebrow="Platform" title="Data Portal" description="Browse and download groundwater and potable water datasets curated by GIA." />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="mb-8 text-gray-700">
          {/* TODO: Replace with real content for Data Portal */}
          The GIA Data Portal provides open and restricted-access datasets covering groundwater levels, aquifer characteristics, and potable water quality across our field sites.
        </p>
        <Button href="/platform/access" variant="outline">
          Request Platform Access
        </Button>
      </section>
    </>
  );
}
