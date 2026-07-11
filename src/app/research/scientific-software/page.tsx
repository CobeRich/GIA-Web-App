import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import { createMetadata } from "@/lib/metadata";

const softwareSlugs = ["vadose-solver", "aquifer-regional-model", "potable-risk-dashboard"];

export const metadata: Metadata = createMetadata({
  title: "Scientific Software",
  description: "Research software assets, model implementations, and tooling outputs.",
  path: "/research/scientific-software",
  image: "/images/gia-hero-banner-b.png",
});

export default function ScientificSoftwarePage() {
  return (
    <>
      <PageHero eyebrow="Research" title="Scientific Software" description="Model codes, analysis tools, and reusable computational components." />
      <section className="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {softwareSlugs.map((slug) => (
            <Link key={slug} href={`/research/scientific-software/${slug}`}>
              <Card className="h-full">
                <h2 className="text-lg font-semibold capitalize text-gia-blue">{slug.replace(/-/g, " ")}</h2>
                <p className="mt-2 text-sm text-slate-600">Software profile, architecture, maturity state, and linked datasets.</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
