import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { getAllOpportunities, getOpportunityCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Opportunities",
  description: "Jobs, scholarships, fellowships, and other opportunities at the Groundwater Intelligence Academy.",
};

export default function OpportunitiesPage() {
  const categories = getOpportunityCategories();
  const all = getAllOpportunities();

  return (
    <>
      <PageHero
        eyebrow="Opportunities"
        title="Opportunities at GIA"
        description="Explore jobs, scholarships, fellowships, and other opportunities to work with the Groundwater Intelligence Academy."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((category) => (
            <Link key={category} href={`/opportunities/${category}`}>
              <Badge tone="blue" className="px-3 py-1.5 text-sm capitalize">
                {category}
              </Badge>
            </Link>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {all.map((opportunity) => (
            <Link key={opportunity.slug} href={`/opportunities/${opportunity.category}/${opportunity.slug}`}>
              <Card className="h-full">
                <Badge tone="teal" className="mb-2 w-fit capitalize">
                  {opportunity.category}
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
