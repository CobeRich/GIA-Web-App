import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Vision, Mission & Values",
  description: "Institutional vision, mission, and values of the Groundwater Intelligence Academy.",
  path: "/about/vision-mission",
  image: "/images/gia-hero-banner-a.png",
});

export default function VisionMissionPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Vision, Mission & Values"
        description="Guiding principles behind research, education, platform development, and impact partnerships."
      />

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="mb-2 text-2xl font-bold text-gia-blue">Vision</h2>
            <p className="text-gray-700">
              A water-secure society where groundwater intelligence supports safe and sustainable systems.
            </p>
          </Card>
          <Card>
            <h2 className="mb-2 text-2xl font-bold text-gia-blue">Mission</h2>
            <p className="text-gray-700">
              To integrate environmental science, mathematical science, and computational science
              into actionable groundwater intelligence for education, research, and policy.
            </p>
          </Card>
        </div>
      </section>

      <section className="bg-gia-light py-14">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gia-blue">Core Values</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Scientific excellence",
              "Transparency and accountability",
              "Societal relevance",
              "Collaborative leadership",
            ].map((value) => (
              <Card key={value} className="h-full">
                <p className="text-sm font-semibold text-gia-blue">{value}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h3 className="mb-2 text-xl font-semibold text-gia-blue">Open Science Commitment</h3>
            <p className="text-gray-700">
              GIA supports reproducible workflows, transparent methods, and responsible data-sharing
              practices for research and public benefit.
            </p>
          </Card>
          <Card>
            <h3 className="mb-2 text-xl font-semibold text-gia-blue">Sustainability Commitment</h3>
            <p className="text-gray-700">
              The Academy prioritizes long-term groundwater stewardship and equitable potable-water outcomes.
            </p>
          </Card>
          <Card>
            <h3 className="mb-2 text-xl font-semibold text-gia-blue">Research-Integrity Statement</h3>
            <p className="text-gray-700">
              Research is conducted with methodological rigor, ethical oversight, and quality assurance
              across all work packages and projects.
            </p>
          </Card>
          <Card>
            <h3 className="mb-2 text-xl font-semibold text-gia-blue">Inclusion & International Collaboration</h3>
            <p className="text-gray-700">
              GIA fosters inclusive participation and cross-border partnerships with academia,
              governments, and industry.
            </p>
          </Card>
        </div>
      </section>
    </>
  );
}
