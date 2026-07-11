import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Digital Twin",
  description: "Digital twin simulations of aquifer systems supporting potable water resource planning.",
};

export default function DigitalTwinPage() {
  return (
    <>
      <PageHero eyebrow="Platform" title="Digital Twin" description="Digital twin simulations of aquifer systems supporting potable water resource planning." />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="mb-8 text-gray-700">
          {/* TODO: Replace with real content for Digital Twin */}
          Our digital twin technology creates virtual replicas of aquifer systems, enabling scenario testing for sustainable potable water resource management.
        </p>
        <Button href="/platform/access" variant="outline">
          Request Platform Access
        </Button>
      </section>
    </>
  );
}
