import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import DownloadCard from "@/components/ui/DownloadCard";
import { getAllKnowledgeResources } from "@/lib/content";

export const metadata: Metadata = {
  title: "Downloads",
  description: "All downloadable resources published by the Groundwater Institute of Africa.",
};

export default function DownloadsPage() {
  const downloadable = getAllKnowledgeResources().filter((resource) => resource.fileUrl);
  return (
    <>
      <PageHero
        eyebrow="Knowledge Hub"
        title="Downloads"
        description="All downloadable reports, briefs, and resources in one place."
      />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-4">
          {downloadable.map((resource) => (
            <DownloadCard
              key={resource.slug}
              title={resource.title}
              description={resource.summary}
              href={resource.fileUrl as string}
            />
          ))}
        </div>
      </section>
    </>
  );
}
