import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import { formatDate } from "@/lib/utils";
import { getAllNews } from "@/lib/content";

export const metadata: Metadata = {
  title: "News",
  description: "The latest news from the Groundwater Institute of Africa.",
};

export default function NewsPage() {
  const news = getAllNews();
  return (
    <>
      <PageHero
        eyebrow="News"
        title="News"
        description="Updates on GIA's research, innovation, and potable water impact across Africa."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
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
      </section>
    </>
  );
}
