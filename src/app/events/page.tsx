import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { getAllEvents } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming and past events from the Groundwater Institute of Africa.",
};

export default function EventsPage() {
  const events = getAllEvents();
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Events"
        description="Conferences, webinars, and workshops on groundwater research and potable water innovation."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((item) => (
            <Link key={item.slug} href={`/events/${item.slug}`}>
              <Card className="h-full">
                <Badge tone={item.registrationOpen ? "teal" : "neutral"} className="mb-2 w-fit">
                  {item.registrationOpen ? "Registration Open" : "Registration Closed"}
                </Badge>
                <p className="mb-1 text-xs font-medium uppercase tracking-wide text-gia-teal">
                  {formatDate(item.startDate)} · {item.location}
                </p>
                <h3 className="mb-2 text-lg font-semibold text-gia-blue">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.summary}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
