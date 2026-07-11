import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import { getAllEvents, getAllKnowledgeResources, getAllNews } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Knowledge Hub",
  description: "Reports, policy briefs, educational resources, media, webinars and newsletters from GIA.",
};

const sections = [
  { href: "/knowledge-hub/publications", title: "3. Publications", description: "Published research outputs and scholarly resources." },
  { href: "/knowledge-hub/reports", title: "4. Technical Reports", description: "Technical and institutional reporting outputs." },
  { href: "/knowledge-hub/policy-briefs", title: "5. Policy Briefs", description: "Evidence-backed policy and governance briefs." },
  { href: "/research/datasets", title: "6. Datasets", description: "Research datasets and data-access pathways." },
  { href: "/research/scientific-software", title: "7. Software Releases", description: "Scientific software tools and release notes." },
  { href: "/knowledge-hub/educational-resources", title: "8. Educational Resources", description: "Learning resources and teaching materials." },
  { href: "/knowledge-hub/webinars", title: "9. Webinars", description: "Recorded and upcoming webinar sessions." },
  { href: "/events", title: "10. Events", description: "Upcoming events and event archives." },
  { href: "/knowledge-hub/newsletter", title: "11. Newsletter", description: "Newsletter issues and subscription page." },
];

export default function KnowledgeHubPage() {
  const [featuredPublication] = getAllKnowledgeResources();
  const [latestResearchStory] = getAllNews();
  const [latestEvent] = getAllEvents();

  return (
    <>
      <PageHero
        eyebrow="Knowledge Hub"
        title="Knowledge Hub"
        description="Explore GIA's research outputs, policy guidance, and educational resources on groundwater and potable water."
      />

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="mb-2 text-xl font-semibold text-gia-blue">1. Featured Publication</h2>
            {featuredPublication ? (
              <>
                <p className="text-sm font-semibold text-gia-blue">{featuredPublication.title}</p>
                <p className="mt-2 text-sm text-gray-700">{featuredPublication.summary}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-500">{formatDate(featuredPublication.date)}</p>
                <Link href="/knowledge-hub/publications" className="mt-3 inline-block text-sm font-semibold text-gia-teal hover:underline">
                  Browse publications
                </Link>
              </>
            ) : (
              <p className="text-sm text-gray-700">Publication highlights will appear here as resources are published.</p>
            )}
          </Card>

          <Card>
            <h2 className="mb-2 text-xl font-semibold text-gia-blue">2. Latest Research Story</h2>
            {latestResearchStory ? (
              <>
                <p className="text-sm font-semibold text-gia-blue">{latestResearchStory.title}</p>
                <p className="mt-2 text-sm text-gray-700">{latestResearchStory.summary}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-500">{formatDate(latestResearchStory.date)}</p>
                <Link href={`/news/${latestResearchStory.slug}`} className="mt-3 inline-block text-sm font-semibold text-gia-teal hover:underline">
                  Read story
                </Link>
              </>
            ) : (
              <p className="text-sm text-gray-700">Research stories will appear here when news items are published.</p>
            )}
          </Card>
        </div>
      </section>

      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((item) => (
            <Link key={item.href} href={item.href}>
              <Card className="h-full">
                <h3 className="mb-2 text-lg font-semibold text-gia-blue">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </Card>
            </Link>
          ))}
          </div>

          <div className="mt-6">
            <Card>
              <h3 className="text-lg font-semibold text-gia-blue">Event Highlight</h3>
              {latestEvent ? (
                <>
                  <p className="mt-2 text-sm font-semibold text-gia-blue">{latestEvent.title}</p>
                  <p className="mt-1 text-sm text-gray-700">{latestEvent.summary}</p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                    {formatDate(latestEvent.startDate)}
                  </p>
                  <Link href={`/events/${latestEvent.slug}`} className="mt-3 inline-block text-sm font-semibold text-gia-teal hover:underline">
                    View event
                  </Link>
                </>
              ) : (
                <p className="mt-2 text-sm text-gray-700">Upcoming events will be highlighted here.</p>
              )}
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
