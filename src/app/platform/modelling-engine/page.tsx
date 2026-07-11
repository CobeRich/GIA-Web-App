import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Modelling Engine",
  description: "GIA's hydrogeological modelling engine for simulating groundwater flow and recharge.",
};

export default function ModellingEnginePage() {
  return (
    <>
      <PageHero eyebrow="Platform" title="Modelling Engine" description="GIA's hydrogeological modelling engine for simulating groundwater flow and recharge." />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="mb-8 text-gray-700">
          {/* TODO: Replace with real content for Modelling Engine */}
          Our modelling engine enables researchers to simulate groundwater flow, recharge rates, and contamination risk to support evidence-based potable water planning.
        </p>
        <Button href="/platform/access" variant="outline">
          Request Platform Access
        </Button>
      </section>
    </>
  );
}
