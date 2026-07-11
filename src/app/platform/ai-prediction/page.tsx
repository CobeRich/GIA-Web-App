import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "AI Prediction",
  description: "AI and machine learning models for predicting groundwater availability and quality.",
};

export default function AiPredictionPage() {
  return (
    <>
      <PageHero eyebrow="Platform" heroType="E" title="AI Prediction" description="Prediction services integrating machine learning, model explainability, and uncertainty quantification." />
      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <p className="mb-6 inline-block rounded-full border border-gia-teal/40 bg-gia-light px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gia-blue">
          Demonstration data
        </p>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[
            "available predictions",
            "model cards",
            "inputs",
            "outputs",
            "performance",
            "explainability",
            "uncertainty",
            "API",
          ].map((item) => (
            <Card key={item} className="h-full">
              <p className="text-sm font-semibold capitalize text-gia-blue">{item}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/platform/api-docs" className="rounded-md border border-gia-blue px-5 py-3 text-sm font-semibold text-gia-blue">API</Link>
          <Link href="/platform/access" className="rounded-md bg-gia-teal px-5 py-3 text-sm font-semibold text-white">Request access</Link>
        </div>
      </section>
    </>
  );
}
