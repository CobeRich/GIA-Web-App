import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ResourceCard from "@/components/ui/ResourceCard";
import { createMetadata } from "@/lib/metadata";
import { getAllKnowledgeResources } from "@/lib/content";

export const metadata: Metadata = createMetadata({
  title: "Publications",
  description: "Publication catalogue for reports, policy briefs, webinars, and other published knowledge outputs.",
  path: "/knowledge-hub/publications",
  image: "/images/gia-hero-banner-a.png",
});

export default function PublicationsPage() {
  const publications = getAllKnowledgeResources();

  return (
    <>
      <PageHero
        eyebrow="Knowledge Hub"
        title="Publications"
        description="Publication catalogue of knowledge products across research, policy, and education."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {publications.length === 0 ? (
          <p className="text-gray-600">No publications available yet. Check back soon.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {publications.map((resource) => (
              <ResourceCard key={resource.slug} resource={resource} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
