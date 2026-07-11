import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Modelling Engine",
  description: "GIA's hydrogeological modelling engine for simulating groundwater flow and recharge.",
};

export default function ModellingEnginePage() {
  return (
    <>
      <PageHero eyebrow="Platform" heroType="E" title="Modelling Engine" description="Model execution environment for flow, transport, and scenario simulations." />
      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <p className="mb-6 inline-block rounded-full border border-gia-teal/40 bg-gia-light px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gia-blue">
          Demonstration data
        </p>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[
            "model catalogue",
            "domain configuration",
            "inputs",
            "boundary conditions",
            "simulation submission",
            "status",
            "results",
            "export",
            "benchmark cases",
          ].map((item) => (
            <Card key={item} className="h-full">
              <p className="text-sm font-semibold text-gia-blue capitalize">{item}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/platform/access" className="rounded-md bg-gia-teal px-5 py-3 text-sm font-semibold text-white">Request access</Link>
          <Link href="/platform/api-docs" className="rounded-md border border-gia-blue px-5 py-3 text-sm font-semibold text-gia-blue">API</Link>
        </div>
      </section>
    </>
  );
}
