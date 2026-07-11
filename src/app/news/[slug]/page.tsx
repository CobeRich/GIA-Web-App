import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import Badge from "@/components/ui/Badge";
import TaxonomyTag from "@/components/ui/TaxonomyTag";
import { formatDate } from "@/lib/utils";
import { getAllNews, getNewsBySlug } from "@/lib/content";

export function generateStaticParams() {
  return getAllNews().map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = getNewsBySlug(params.slug);
  return {
    title: item?.title ?? "News Article",
    description: item?.summary,
  };
}

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const item = getNewsBySlug(params.slug);
  if (!item) notFound();

  return (
    <>
      <PageHero eyebrow={item.category} title={item.title} description={item.summary} />
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-gray-500">
          <span>{formatDate(item.date)}</span>
          {item.author && <span>· By {item.author}</span>}
        </div>
        <p className="mb-8 whitespace-pre-line text-gray-700">{item.body}</p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <TaxonomyTag key={tag}>{tag}</TaxonomyTag>
          ))}
        </div>
        <div className="mt-8">
          <Badge tone="teal">{item.category}</Badge>
        </div>
      </article>
    </>
  );
}
