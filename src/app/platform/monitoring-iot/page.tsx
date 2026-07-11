import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Monitoring & IoT",
  description: "Real-time IoT sensor networks monitoring groundwater levels and potable water quality.",
};

export default function MonitoringIotPage() {
  return (
    <>
      <PageHero eyebrow="Platform" title="Monitoring & IoT" description="Real-time IoT sensor networks monitoring groundwater levels and potable water quality." />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="mb-8 text-gray-700">
          {/* TODO: Replace with real content for Monitoring & IoT */}
          GIA deploys IoT sensor networks across field sites to provide real-time monitoring of groundwater levels, recharge, and potable water quality indicators.
        </p>
        <Button href="/platform/access" variant="outline">
          Request Platform Access
        </Button>
      </section>
    </>
  );
}
