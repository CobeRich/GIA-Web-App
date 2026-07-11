import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Study",
  description: "Academic overview of the MPhil Groundwater Intelligence track, modules, studio, and admissions.",
  path: "/study",
  image: "/images/gia-hero-banner-c.png",
});

const sections = [
  { href: "/study/mphil-groundwater-intelligence", title: "MPhil Groundwater Intelligence Track", description: "Programme rationale, outcomes, and progression." },
  { href: "/study/programme-structure", title: "Programme Structure", description: "Four-semester progression and milestones." },
  { href: "/study/modules", title: "Modules", description: "Sixteen specialist modules mapped to WP1-WP6." },
  { href: "/study/groundwater-intelligence-studio", title: "Groundwater Intelligence Studio", description: "Versioned, project-based studio pathway." },
  { href: "/study/admissions", title: "Admissions", description: "Eligibility, requirements, and application process." },
  { href: "/study/fees-funding", title: "Fees & Funding", description: "Tuition framework and funding options." },
];

export default function StudyPage() {
  return (
    <>
      <PageHero
        eyebrow="Study"
        title="Academic Overview"
        description="Research-intensive education integrating environmental science, mathematics, scientific computing, AI, and groundwater decision support."
      />
      <section className="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((item) => (
            <Link key={item.href} href={item.href}>
              <Card className="h-full">
                <h2 className="mb-2 text-lg font-semibold text-gia-blue">{item.title}</h2>
                <p className="text-sm text-gray-600">{item.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
