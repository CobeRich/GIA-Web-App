import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Block Modular Model",
  description: "Block-modular teaching rhythm for the academic programme.",
  path: "/study/block-modular-model",
  image: "/images/gia-hero-banner-c.png",
});

export default function BlockModularModelPage() {
  return (
    <>
      <PageHero eyebrow="Study" heroType="C" title="Block-Modular Model" description="Integrated delivery model coordinated across teaching, assessment, studio, and research windows." />

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="mb-2 text-xl font-semibold text-gia-blue">Real Delivery Model</h2>
            <p className="text-sm text-gray-700">
              The programme does not run as sixteen strictly sequential eight-week modules.
              Instead, modules are delivered through integrated and coordinated blocks across the 24-month window.
            </p>
          </Card>
          <Card>
            <h2 className="mb-2 text-xl font-semibold text-gia-blue">How Coordination Works</h2>
            <ul className="list-disc space-y-1.5 pl-5 text-sm text-gray-700">
              <li>paired or coordinated modules in each semester</li>
              <li>teaching weeks and guided practical weeks</li>
              <li>assessment weeks built into semester flow</li>
              <li>scheduled breaks and recovery periods</li>
              <li>proposal preparation windows</li>
              <li>dedicated research period for dissertation implementation</li>
            </ul>
          </Card>
        </div>

        <Card className="mt-6">
          <h3 className="mb-2 text-lg font-semibold text-gia-blue">Programme Rhythm</h3>
          <p className="text-sm text-gray-700">
            Semester planning aligns teaching, coding labs, field activities, studio outputs,
            and dissertation milestones without publishing an unrealistic week-by-week 136-week sequence.
          </p>
        </Card>
      </section>
    </>
  );
}
