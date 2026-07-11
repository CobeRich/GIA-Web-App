import Link from "next/link";
import Card from "@/components/ui/Card";
import { formatDate } from "@/lib/utils";
import type { NewsItem } from "@/types/content";

export default function NewsGrid({ items }: { items: NewsItem[] }) {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl font-bold text-gia-blue sm:text-3xl">Latest News</h2>
          <Link href="/news" className="text-sm font-medium text-gia-teal">
            View all news →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link key={item.slug} href={`/news/${item.slug}`}>
              <Card className="h-full">
                <p className="mb-2 text-xs font-medium uppercase tracking-wide text-gia-teal">
                  {item.category} · {formatDate(item.date)}
                </p>
                <h3 className="mb-2 text-lg font-semibold text-gia-blue">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.summary}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
