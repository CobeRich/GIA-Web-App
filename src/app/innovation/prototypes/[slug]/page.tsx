import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import { createMetadata } from "@/lib/metadata";
import { prototypes } from "@/lib/prototypes";

export function generateStaticParams() {
  return prototypes.map((prototype) => ({ slug: prototype.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const prototype = prototypes.find((item) => item.slug === params.slug);

  if (!prototype) {
    return createMetadata({
      title: "Prototype",
      description: "Prototype detail page.",
      path: `/innovation/prototypes/${params.slug}`,
      image: "/images/gia-hero-banner-e.png",
    });
  }

  return createMetadata({
    title: prototype.name,
    description: prototype.challenge,
    path: `/innovation/prototypes/${prototype.slug}`,
    image: prototype.screenshots[0]?.src ?? "/images/gia-hero-banner-e.png",
  });
}

export default function PrototypeDetailPage({ params }: { params: { slug: string } }) {
  const prototype = prototypes.find((item) => item.slug === params.slug);
  if (!prototype) notFound();

  return (
    <>
      <PageHero
        eyebrow="Innovation & Impact"
        title={prototype.name}
        description={prototype.solution}
      />

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          <Card className="md:col-span-2">
            <h2 className="text-lg font-semibold text-gia-blue">Prototype Name</h2>
            <p className="mt-2 text-sm text-gray-700">{prototype.name}</p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">Challenge</h2>
            <p className="mt-2 text-sm text-gray-700">{prototype.challenge}</p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">Solution</h2>
            <p className="mt-2 text-sm text-gray-700">{prototype.solution}</p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">Technology-Readiness Level</h2>
            <p className="mt-2 text-sm text-gray-700">{prototype.technologyReadinessLevel}</p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">Architecture</h2>
            <p className="mt-2 text-sm text-gray-700">{prototype.architecture}</p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">WP</h2>
            <p className="mt-2 text-sm text-gray-700">{prototype.wp}</p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">Team</h2>
            <p className="mt-2 text-sm text-gray-700">{prototype.team}</p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">Current Status</h2>
            <p className="mt-2 text-sm text-gray-700">{prototype.currentStatus}</p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gia-blue">Collaboration Needs</h2>
            <p className="mt-2 text-sm text-gray-700">{prototype.collaborationNeeds}</p>
          </Card>
          <Card className="md:col-span-2">
            <h2 className="text-lg font-semibold text-gia-blue">Use Cases</h2>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-gray-700">
              {prototype.useCases.map((useCase) => (
                <li key={useCase}>{useCase}</li>
              ))}
            </ul>
          </Card>
          <Card className="md:col-span-2">
            <h2 className="text-lg font-semibold text-gia-blue">Screenshots</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {prototype.screenshots.map((shot) => (
                <div key={shot.src} className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
                  <div className="relative h-44 w-full">
                    <Image src={shot.src} alt={shot.alt} fill className="object-cover" />
                  </div>
                  <p className="p-3 text-xs text-slate-600">{shot.alt}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/innovation/prototypes" className="rounded-md border border-gia-blue px-5 py-3 text-sm font-semibold text-gia-blue">
            Back to prototypes
          </Link>
          <Link href="/forms/collaboration" className="rounded-md bg-gia-teal px-5 py-3 text-sm font-semibold text-white">
            Engage for collaboration
          </Link>
        </div>
      </section>
    </>
  );
}
