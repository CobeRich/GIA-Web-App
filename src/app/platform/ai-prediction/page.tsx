import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "AI Prediction",
  description: "AI and machine learning models for predicting groundwater availability and quality.",
};

export default function AiPredictionPage() {
  return (
    <>
      <PageHero eyebrow="Platform" title="AI Prediction" description="AI and machine learning models for predicting groundwater availability and quality." />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="mb-8 text-gray-700">
          {/* TODO: Replace with real content for AI Prediction */}
          GIA develops AI prediction models that forecast groundwater availability, drought risk, and potable water quality trends using historical and sensor data.
        </p>
        <Button href="/platform/access" variant="outline">
          Request Platform Access
        </Button>
      </section>
    </>
  );
}
