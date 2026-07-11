import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import { institution } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about the Groundwater Intelligence Academy (GIA), our mission, team, leadership, governance and history.",
};

const ecosystem = [
  "Education",
  "Research",
  "Technology",
  "Innovation",
  "Policy",
];

const pillars = [
  "Environmental Science",
  "Mathematical Science",
  "Computational Science",
];

const priorities = [
  "Deliver the six-work-package potable-water research framework.",
  "Train specialists through the MPhil SCIM groundwater intelligence track.",
  "Build and sustain the Groundwater Intelligence Platform and digital twin.",
  "Advance translational innovation for policy, industry, and communities.",
];

const linkedUnits = [
  { title: "Department of Mathematics", href: "/about/organisation" },
  { title: "MPhil SCIM", href: "/study/mphil-groundwater-intelligence" },
  { title: "Research Framework", href: "/research/integrated-framework" },
  { title: "Groundwater Intelligence Platform", href: "/platform" },
];

const institutionalLinks = [
  { href: "/about/vision-mission", title: "Vision, Mission & Values" },
  { href: "/about/governance", title: "Governance" },
  { href: "/about/leadership", title: "Leadership" },
  { href: "/about/strategic-roadmap", title: "Strategic Roadmap" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Groundwater Intelligence Academy"
        description="An institutional ecosystem integrating education, research, platform engineering, innovation, and policy translation for potable-water security."
      />

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <h2 className="mb-3 text-2xl font-bold text-gia-blue">What is GIA?</h2>
            <p className="text-gray-700">
              {institution.fullName} is an academic and research institute developing
              groundwater intelligence systems that support safe and sustainable water systems.
            </p>
          </Card>
          <Card>
            <h2 className="mb-3 text-2xl font-bold text-gia-blue">Why Groundwater Intelligence?</h2>
            <p className="text-gray-700">
              Potable-water security requires integrated observation, scientific modelling,
              computation, and decision intelligence. GIA coordinates these capabilities in
              one institutional framework.
            </p>
          </Card>
        </div>
      </section>

      <section className="bg-gia-light py-14">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gia-blue">Academy Ecosystem</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {ecosystem.map((item) => (
              <Card key={item} className="h-full text-center">
                <p className="text-sm font-semibold uppercase tracking-wide text-gia-blue">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gia-blue">Three Scientific Pillars</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <Card key={pillar} className="h-full">
              <p className="text-base font-semibold text-gia-blue">{pillar}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gia-blue">Institutional Relationships</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {linkedUnits.map((unit) => (
              <Link key={unit.title} href={unit.href}>
                <Card className="h-full">
                  <p className="text-sm font-semibold text-gia-blue">{unit.title}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gia-light py-14">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gia-blue">Institutional Priorities</h2>
          <ul className="mt-5 list-disc space-y-2 pl-6 text-gray-700">
            {priorities.map((priority) => (
              <li key={priority}>{priority}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gia-blue">Explore More About GIA</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {institutionalLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              <Card className="h-full">
                <h3 className="mb-2 text-lg font-semibold text-gia-blue">{item.title}</h3>
                <p className="text-sm text-gray-600">Open this section</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
