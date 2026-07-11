import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { getOpportunitiesByCategory, getOpportunityCategories } from "@/lib/content";

export function generateStaticParams() {
  return getOpportunityCategories().map((category) => ({ category }));
}

export function generateMetadata({
  params,
}: {
  params: { category: string };
}): Metadata {
  return {
    title: `${capitalize(params.category)} Opportunities`,
    description: `Browse ${params.category} opportunities at the Groundwater Institute of Africa.`,
  };
}

function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export default function OpportunityCategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const opportunities = getOpportunitiesByCategory(params.category);
  if (opportunities.length === 0) notFound();

  return (
    <>
      <PageHero
        eyebrow="Opportunities"
        title={`${capitalize(params.category)} Opportunities`}
        description={`Current ${params.category} opportunities at GIA.`}
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((opportunity) => (
            <Link key={opportunity.slug} href={`/opportunities/${params.category}/${opportunity.slug}`}>
              <Card className="h-full">
                <Badge tone="teal" className="mb-2 w-fit">
                  {opportunity.deadline ? `Deadline: ${opportunity.deadline}` : "Open"}
                </Badge>
                <h3 className="mb-2 text-lg font-semibold text-gia-blue">{opportunity.title}</h3>
                <p className="text-sm text-gray-600">{opportunity.summary}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
