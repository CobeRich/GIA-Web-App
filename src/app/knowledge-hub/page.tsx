import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Knowledge Hub",
  description: "Reports, policy briefs, educational resources, media, webinars and newsletters from GIA.",
};

const SUBSECTIONS = [
  { href: "/knowledge-hub/reports", title: "Reports", description: "Research and annual reports." },
  { href: "/knowledge-hub/policy-briefs", title: "Policy Briefs", description: "Evidence-based policy recommendations." },
  { href: "/knowledge-hub/educational-resources", title: "Educational Resources", description: "Learning materials on groundwater science." },
  { href: "/knowledge-hub/media-gallery", title: "Media Gallery", description: "Photos and videos from our work." },
  { href: "/knowledge-hub/webinars", title: "Webinars", description: "Recorded and upcoming webinars." },
  { href: "/knowledge-hub/newsletter", title: "Newsletter", description: "Subscribe to our quarterly newsletter." },
  { href: "/knowledge-hub/downloads", title: "Downloads", description: "All downloadable resources in one place." },
];

export default function KnowledgeHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge Hub"
        title="Knowledge Hub"
        description="Explore GIA's research outputs, policy guidance, and educational resources on groundwater and potable water."
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
