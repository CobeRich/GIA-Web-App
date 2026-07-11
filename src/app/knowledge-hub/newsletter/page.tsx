import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ResourceCard from "@/components/ui/ResourceCard";
import NewsletterForm from "@/components/forms/NewsletterForm";
import { getKnowledgeResourcesByType } from "@/lib/content";

export const metadata: Metadata = {
  title: "Newsletter",
  description: "Subscribe to the GIA newsletter and browse past issues.",
};

export default function NewsletterPage() {
  const issues = getKnowledgeResourcesByType("newsletter");
  return (
    <>
      <PageHero
        eyebrow="Knowledge Hub"
        title="Newsletter"
        description="Stay up to date with GIA research, events, and potable water impact stories."
      />
      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 rounded-lg bg-gia-light p-6">
          <h2 className="mb-3 text-lg font-semibold text-gia-blue">Subscribe</h2>
          <NewsletterForm />
        </div>
        <h2 className="mb-4 text-lg font-semibold text-gia-blue">Past Issues</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {issues.map((issue) => (
            <ResourceCard key={issue.slug} resource={issue} />
          ))}
        </div>
      </section>
    </>
  );
}
