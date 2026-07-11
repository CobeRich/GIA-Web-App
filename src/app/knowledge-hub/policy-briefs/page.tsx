import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ResourceCard from "@/components/ui/ResourceCard";
import { getKnowledgeResourcesByType } from "@/lib/content";

export const metadata: Metadata = {
  title: "Policy Briefs",
  description: "Evidence-based policy briefs on groundwater governance and potable water security.",
};

export default function PolicyBriefsPage() {
  const resources = getKnowledgeResourcesByType("policy-brief");
  return (
    <>
      <PageHero eyebrow="Knowledge Hub" title="Policy Briefs" description="Evidence-based policy briefs on groundwater governance and potable water security." />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {resources.length === 0 ? (
          <p className="text-gray-600">No resources published yet. Check back soon.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <ResourceCard key={resource.slug} resource={resource} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
