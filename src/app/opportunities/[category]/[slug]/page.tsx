import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import Badge from "@/components/ui/Badge";
import TaxonomyTag from "@/components/ui/TaxonomyTag";
import Button from "@/components/ui/Button";
import { getAllOpportunities, getOpportunityBySlug } from "@/lib/content";

export function generateStaticParams() {
  return getAllOpportunities().map((opportunity) => ({
    category: opportunity.category,
    slug: opportunity.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { category: string; slug: string };
}): Metadata {
  const opportunity = getOpportunityBySlug(params.category, params.slug);
  return {
    title: opportunity?.title ?? "Opportunity",
    description: opportunity?.summary,
  };
}

export default function OpportunityDetailPage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const opportunity = getOpportunityBySlug(params.category, params.slug);
  if (!opportunity) notFound();

  return (
    <>
      <PageHero eyebrow="Opportunities" title={opportunity.title} description={opportunity.summary} />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <Badge tone="blue" className="capitalize">
            {opportunity.category}
          </Badge>
          {opportunity.deadline && <Badge tone="earth">Deadline: {opportunity.deadline}</Badge>}
          {opportunity.location && <Badge tone="neutral">{opportunity.location}</Badge>}
        </div>
        <p className="mb-6 whitespace-pre-line text-gray-700">{opportunity.body}</p>
        <div className="mb-8 flex flex-wrap gap-2">
          {opportunity.tags.map((tag) => (
            <TaxonomyTag key={tag}>{tag}</TaxonomyTag>
          ))}
        </div>
        <Button href={opportunity.applyUrl ?? "/forms/admissions"} size="lg">
          Apply Now
        </Button>
      </section>
    </>
  );
}
