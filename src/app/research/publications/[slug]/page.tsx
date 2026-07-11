import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import { createMetadata } from "@/lib/metadata";
import { getAllPublications, getPublicationBySlug } from "@/lib/content";

export function generateStaticParams() {
  return getAllPublications().map((publication) => ({ slug: publication.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const publication = getPublicationBySlug(params.slug);

  if (!publication) {
    return createMetadata({
      title: "Publication",
      description: "Publication detail page.",
      path: `/research/publications/${params.slug}`,
      image: "/images/gia-hero-banner-b.png",
    });
  }

  return createMetadata({
    title: publication.title,
    description: publication.summary,
    path: `/research/publications/${publication.slug}`,
    image: "/images/gia-hero-banner-b.png",
  });
}

export default function PublicationDetailPage({ params }: { params: { slug: string } }) {
  const publication = getPublicationBySlug(params.slug);
  if (!publication) notFound();

  return (
    <>
      <PageHero
        eyebrow="Publication"
        heroType="B"
        title={publication.title}
        description={publication.summary}
      />
      <section className="mx-auto max-w-[980px] px-4 py-16 sm:px-6 lg:px-8 text-gray-700">
        <p className="text-sm font-semibold text-gia-blue">Publication Date</p>
        <p className="mt-1">{publication.date}</p>
      </section>
    </>
  );
}
