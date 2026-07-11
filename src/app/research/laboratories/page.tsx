import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import TaxonomyTag from "@/components/ui/TaxonomyTag";
import { getResearchEntriesByType } from "@/lib/content";

export const metadata: Metadata = {
  title: "Laboratories",
  description: "GIA's specialised research laboratories supporting potable water science.",
};

export default function LaboratoriesPage() {
  const labs = getResearchEntriesByType("laboratory");
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Laboratories"
        description="State-of-the-art laboratories supporting hydrogeological analysis and potable water quality testing."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {labs.map((lab) => (
            <Card key={lab.slug}>
              <h3 className="mb-2 text-lg font-semibold text-gia-blue">{lab.title}</h3>
              <p className="mb-3 text-sm text-gray-600">{lab.body}</p>
              <div className="flex flex-wrap gap-2">
                {lab.tags.map((tag) => (
                  <TaxonomyTag key={tag}>{tag}</TaxonomyTag>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
