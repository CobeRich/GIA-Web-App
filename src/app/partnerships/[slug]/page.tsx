import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import { createMetadata } from "@/lib/metadata";
import { getAllPartners, getPartnerBySlug } from "@/lib/content";

export function generateStaticParams() {
  return getAllPartners().map((partner) => ({ slug: partner.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const partner = getPartnerBySlug(params.slug);

  if (!partner) {
    return createMetadata({
      title: "Partner Profile",
      description: "Partner profile details.",
      path: `/partnerships/${params.slug}`,
      image: "/images/gia-hero-banner-a.png",
    });
  }

  return createMetadata({
    title: partner.name,
    description: partner.summary ?? "Partner profile details.",
    path: `/partnerships/${partner.slug}`,
    image: "/images/gia-hero-banner-a.png",
  });
}

export default function PartnerProfilePage({ params }: { params: { slug: string } }) {
  const partner = getPartnerBySlug(params.slug);
  if (!partner) notFound();

  return (
    <>
      <PageHero
        eyebrow="Partnerships"
        title={partner.name}
        description={partner.summary ?? "Partnership profile"}
      />

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">Organisation</h2>
            <p className="mt-2 text-sm text-gray-700">{partner.name}</p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">Category</h2>
            <p className="mt-2 text-sm text-gray-700">{partner.category}</p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">Location</h2>
            <p className="mt-2 text-sm text-gray-700">{partner.location ?? "Location pending"}</p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">Collaboration Area</h2>
            <p className="mt-2 text-sm text-gray-700">{partner.collaborationArea ?? "Collaboration scope pending"}</p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">Active Project</h2>
            <p className="mt-2 text-sm text-gray-700">{partner.activeProject ?? "Active project details pending"}</p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">Related WP</h2>
            <p className="mt-2 text-sm text-gray-700">{partner.relatedWp ?? "WP alignment pending"}</p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">Outcomes</h2>
            {partner.outcomes && partner.outcomes.length > 0 ? (
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-gray-700">
                {partner.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-sm text-gray-700">Outcome tracking in progress.</p>
            )}
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">News</h2>
            {partner.news && partner.news.length > 0 ? (
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-gray-700">
                {partner.news.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-sm text-gray-700">News updates coming soon.</p>
            )}
          </Card>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/partnerships" className="rounded-md border border-gia-blue px-5 py-3 text-sm font-semibold text-gia-blue">
            Back to partnerships
          </Link>
          {partner.website ? (
            <Link href={partner.website} target="_blank" rel="noreferrer" className="rounded-md bg-gia-teal px-5 py-3 text-sm font-semibold text-white">
              External link
            </Link>
          ) : null}
        </div>
      </section>
    </>
  );
}
