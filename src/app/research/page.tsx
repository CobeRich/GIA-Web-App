import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Explore GIA's research laboratories, themes, field sites, collaboration opportunities and datasets.",
};

const SUBSECTIONS = [
  { href: "/research/laboratories", title: "Laboratories", description: "Our specialised research laboratories." },
  { href: "/research/themes", title: "Research Themes", description: "Core themes guiding our research agenda." },
  { href: "/research/field-sites", title: "Field Sites", description: "Active field monitoring locations across Africa." },
  { href: "/research/collaboration", title: "Collaboration", description: "How to collaborate with GIA researchers." },
  { href: "/research/datasets", title: "Datasets", description: "Open datasets produced by GIA research." },
];

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Research that safeguards potable water for Africa"
        description="Our research spans hydrogeology, water quality, modelling, and sustainable resource management to secure potable water for future generations."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SUBSECTIONS.map((item) => (
            <Link key={item.href} href={item.href}>
              <Card className="h-full">
                <h3 className="mb-2 text-lg font-semibold text-gia-blue">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
