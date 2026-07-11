import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import EventRegistrationForm from "@/components/forms/EventRegistrationForm";
import { getAllEvents, getEventBySlug } from "@/lib/content";

export function generateStaticParams() {
  return getAllEvents().map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const event = getEventBySlug(params.slug);
  return {
    title: event ? `Register: ${event.title}` : "Event Registration",
    description: event?.summary,
  };
}

export default function EventRegistrationPage({ params }: { params: { slug: string } }) {
  const event = getEventBySlug(params.slug);
  if (!event) notFound();

  return (
    <>
      <PageHero
        eyebrow="Forms"
        title={`Register: ${event.title}`}
        description={`Complete this form to register for ${event.title}.`}
      />
      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <EventRegistrationForm eventSlug={event.slug} />
      </section>
    </>
  );
}
