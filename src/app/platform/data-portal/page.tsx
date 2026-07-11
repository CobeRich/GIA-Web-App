import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Data Portal",
  description: "Browse and download groundwater and potable water datasets curated by GIA.",
};

export default function DataPortalPage() {
  return (
    <>
      <PageHero eyebrow="Platform" heroType="E" title="Data Portal" description="Searchable groundwater and potable-water data catalogue with metadata and access controls." />
      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <p className="mb-6 inline-block rounded-full border border-gia-teal/40 bg-gia-light px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gia-blue">
          Demonstration data
        </p>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[
            "searchable catalogue",
            "metadata",
            "map",
            "categories",
            "preview",
            "licences",
            "download",
            "access request",
            "citations",
          ].map((item) => (
            <Card key={item} className="h-full">
              <p className="text-sm font-semibold text-gia-blue capitalize">{item}</p>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/platform/access" className="rounded-md bg-gia-teal px-5 py-3 text-sm font-semibold text-white">Access request</Link>
          <Link href="/platform/maps" className="rounded-md border border-gia-blue px-5 py-3 text-sm font-semibold text-gia-blue">Open map view</Link>
        </div>
      </section>
    </>
  );
}
