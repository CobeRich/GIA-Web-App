import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import InnovationQuestionGrid from "@/components/innovation/InnovationQuestionGrid";
import { prototypes } from "@/lib/prototypes";

export const metadata: Metadata = {
  title: "Prototypes",
  description: "Early-stage potable water technology prototypes developed by GIA researchers and engineers.",
};

export default function PrototypesPage() {
  return (
    <>
      <PageHero eyebrow="Innovation & Impact" title="Prototypes" description="Early-stage potable water technology prototypes developed by GIA researchers and engineers." />

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <InnovationQuestionGrid
          problem="Prototype development is often disconnected from rigorous groundwater research and real deployment constraints."
          solution="GIA prototypes are built with research-grounded architecture, validation pathways, and partner-oriented deployment planning."
          audience="Utilities, technical partners, government agencies, and implementation-focused innovation collaborators."
          research="Each prototype is mapped to WP outputs and platform services for traceable scientific grounding."
          readiness="Prototypes are classified by technology readiness level and updated through pilot and demonstration cycles."
          engagement="Partners can test prototypes, co-develop improvements, and join implementation pilots."
        />
      </section>

      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold text-gia-blue">Prototype Catalogue</h2>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {prototypes.map((prototype) => (
              <Link key={prototype.slug} href={`/innovation/prototypes/${prototype.slug}`}>
                <Card className="h-full">
                  <h3 className="text-lg font-semibold text-gia-blue">{prototype.name}</h3>
                  <p className="mt-2 text-sm text-gray-700">{prototype.challenge}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-gia-teal">
                    {prototype.technologyReadinessLevel}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
