import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import Badge from "@/components/ui/Badge";
import TaxonomyTag from "@/components/ui/TaxonomyTag";
import Button from "@/components/ui/Button";
import { formatDate } from "@/lib/utils";
import { getAllEvents, getEventBySlug } from "@/lib/content";

export function generateStaticParams() {
  return getAllEvents().map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = getEventBySlug(params.slug);
  return {
    title: item?.title ?? "Event",
    description: item?.summary,
  };
}

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const item = getEventBySlug(params.slug);
  if (!item) notFound();

  return (
    <>
      <PageHero eyebrow={item.category} title={item.title} description={item.summary} />
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <Badge tone="blue">{formatDate(item.startDate)}</Badge>
          <Badge tone="neutral">{item.isVirtual ? "Virtual" : item.location}</Badge>
          <Badge tone={item.registrationOpen ? "teal" : "neutral"}>
            {item.registrationOpen ? "Registration Open" : "Registration Closed"}
          </Badge>
        </div>
        <p className="mb-8 whitespace-pre-line text-gray-700">{item.body}</p>
        <div className="mb-8 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <TaxonomyTag key={tag}>{tag}</TaxonomyTag>
          ))}
        </div>
        {item.registrationOpen && (
          <Button href={`/forms/event-registration/${item.slug}`} size="lg">
            Register Now
          </Button>
        )}
      </article>
    </>
  );
}
