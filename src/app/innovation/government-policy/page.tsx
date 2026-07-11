import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Government & Policy",
  description: "GIA's engagement with governments and policymakers on groundwater governance and potable water security.",
};

export default function GovernmentPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Innovation & Impact" title="Government & Policy" description="GIA's engagement with governments and policymakers on groundwater governance and potable water security." />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-gray-700">
          {/* TODO: Replace with real content for Government & Policy */}
          GIA provides technical advisory support to governments developing groundwater regulation, water security strategy, and potable water infrastructure policy.
        </p>
      </section>
    </>
  );
}
