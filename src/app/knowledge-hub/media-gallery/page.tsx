import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ResourceCard from "@/components/ui/ResourceCard";
import { getKnowledgeResourcesByType } from "@/lib/content";

export const metadata: Metadata = {
  title: "Media Gallery",
  description: "Photos and videos from GIA's field research and potable water impact projects.",
};

export default function MediaGalleryPage() {
  const resources = getKnowledgeResourcesByType("media");
  return (
    <>
      <PageHero eyebrow="Knowledge Hub" title="Media Gallery" description="Photos and videos from GIA's field research and potable water impact projects." />
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
