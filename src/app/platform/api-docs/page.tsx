import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "API Documentation",
  description: "Developer documentation for integrating with the GIA platform API.",
};

export default function ApiDocsPage() {
  return (
    <>
      <PageHero eyebrow="Platform" title="API Documentation" description="Developer documentation for integrating with the GIA platform API." />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="mb-8 text-gray-700">
          {/* TODO: Replace with real content for API Documentation */}
          The GIA API provides programmatic access to datasets, monitoring data, and modelling outputs. TODO: Publish full API reference documentation.
        </p>
        <Button href="/platform/access" variant="outline">
          Request Platform Access
        </Button>
      </section>
    </>
  );
}
