import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Groundwater Intelligence Studio",
  description: "Continuous project studio from Version 1 to Version 4.",
  path: "/study/groundwater-intelligence-studio",
  image: "/images/gia-hero-banner-c.png",
});

export default function GroundwaterStudioPage() {
  return (
    <>
      <PageHero eyebrow="Study" heroType="C" title="Groundwater Intelligence Studio" description="Project studio from Version 1 to Version 4 integrating modules, platform architecture, and dissertation outputs." />

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {[
            "1. Studio philosophy",
            "2. Version 1-4 progression",
            "3. Student team model",
            "4. Software architecture",
            "5. Semester outputs",
            "6. Project gallery",
            "7. Annual showcase",
            "8. Repositories",
            "9. Assessment",
            "10. Dissertation integration",
          ].map((item) => (
            <Card key={item} className="h-full">
              <p className="text-sm font-semibold text-gia-blue">{item}</p>
            </Card>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="mb-2 text-lg font-semibold text-gia-blue">Version Progression</h2>
            <p className="text-sm text-gray-700">
              Version 1 establishes baseline toolkit implementation, Version 2 extends modelling fidelity,
              Version 3 integrates platform and decision tools, and Version 4 aligns with dissertation-ready outputs.
            </p>
          </Card>
          <Card>
            <h2 className="mb-2 text-lg font-semibold text-gia-blue">Repositories and Showcase</h2>
            <p className="text-sm text-gray-700">
              Student teams maintain versioned repositories and present annual showcase outputs linked to WP themes.
            </p>
            <Link href="/knowledge-hub/downloads" className="mt-4 inline-block text-sm font-semibold text-gia-teal hover:underline">
              View related resources
            </Link>
          </Card>
        </div>
      </section>
    </>
  );
}
