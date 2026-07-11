import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import TaxonomyTag from "@/components/ui/TaxonomyTag";
import { getResearchEntriesByType } from "@/lib/content";

export const metadata: Metadata = {
  title: "Research Themes",
  description: "Core research themes guiding GIA's groundwater and potable water research agenda.",
};

export default function ThemesPage() {
  const themes = getResearchEntriesByType("theme");
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Research Themes"
        description="Our research is organised around thematic priorities that address Africa's most pressing groundwater and potable water challenges."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {themes.map((theme) => (
            <Card key={theme.slug}>
              <h3 className="mb-2 text-lg font-semibold text-gia-blue">{theme.title}</h3>
              <p className="mb-3 text-sm text-gray-600">{theme.body}</p>
              <div className="flex flex-wrap gap-2">
                {theme.tags.map((tag) => (
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
