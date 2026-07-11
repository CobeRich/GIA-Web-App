import Link from "next/link";
import Card from "@/components/ui/Card";
import { formatDate } from "@/lib/utils";
import type { EventItem, NewsItem } from "@/types/content";

export default function NewsGrid({
  items,
  events,
}: {
  items: NewsItem[];
  events: EventItem[];
}) {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl font-bold text-gia-blue sm:text-3xl">News and Events</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gia-blue">Latest News</h3>
              <Link href="/news" className="text-sm font-medium text-gia-teal">
                View all news →
              </Link>
            </div>
            <div className="grid gap-4">
              {items.map((item) => (
                <Link key={item.slug} href={`/news/${item.slug}`}>
                  <Card className="h-full">
                    <p className="mb-2 text-xs font-medium uppercase tracking-wide text-gia-teal">
                      {item.category} · {formatDate(item.date)}
                    </p>
                    <h4 className="mb-2 text-lg font-semibold text-gia-blue">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.summary}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gia-blue">Upcoming Events</h3>
              <Link href="/events" className="text-sm font-medium text-gia-teal">
                View all events →
              </Link>
            </div>
            <div className="grid gap-4">
              {events.map((event) => (
                <Link key={event.slug} href={`/events/${event.slug}`}>
                  <Card className="h-full">
                    <p className="mb-2 text-xs font-medium uppercase tracking-wide text-gia-teal">
                      {event.category} · {formatDate(event.startDate)}
                    </p>
                    <h4 className="mb-2 text-lg font-semibold text-gia-blue">{event.title}</h4>
                    <p className="text-sm text-gray-600">{event.summary}</p>
                    <p className="mt-3 text-xs font-medium text-slate-500">{event.isVirtual ? "Virtual" : event.location}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
