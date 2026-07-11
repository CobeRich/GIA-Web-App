import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Study",
  description: "Academic overview of the MPhil Groundwater Intelligence track, modules, studio, and admissions.",
  path: "/study",
  image: "/images/gia-hero-banner-c.png",
});

const pillars = [
  "Environmental Science",
  "Mathematical Science",
  "Computational Science",
];

const progression = [
  "Semester I - Scientific Foundations",
  "Semester II - Mathematical Modelling",
  "Semester III - Intelligent Environmental Systems",
  "Semester IV - Dissertation and Integration",
];

const pathways = [
  "Hydrogeology and water-systems modelling",
  "Scientific software and digital twin engineering",
  "Decision-support and policy translation",
  "Research, innovation, and doctoral progression",
];

const quickLinks = [
  { href: "/study/mphil-groundwater-intelligence", title: "MPhil Track" },
  { href: "/study/programme-structure", title: "Programme Structure" },
  { href: "/study/block-modular-model", title: "Block-Modular Delivery" },
  { href: "/study/groundwater-intelligence-studio", title: "Groundwater Intelligence Studio" },
  { href: "/study/modules", title: "Module Catalogue" },
  { href: "/study/dissertation", title: "Dissertation" },
  { href: "/study/admissions", title: "Admissions" },
  { href: "/study/fees-funding", title: "Fees & Funding" },
  { href: "/study/academic-calendar", title: "Academic Calendar" },
  { href: "/study/faq", title: "FAQ" },
];

export default function StudyPage() {
  return (
    <>
      <PageHero
        eyebrow="Study"
        heroType="C"
        title="Study"
        description="Academic programme integrating groundwater science, modelling, software, and decision intelligence."
      />

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="mb-2 text-xl font-semibold text-gia-blue">Academic Vision</h2>
            <p className="text-sm text-gray-700">
              Develop specialist capacity for potable-water security through integrated scientific,
              computational, and policy-aware training.
            </p>
          </Card>
          <Card>
            <h2 className="mb-2 text-xl font-semibold text-gia-blue">Relationship to MPhil SCIM</h2>
            <p className="text-sm text-gray-700">
              This track is delivered within the MPhil Scientific Computing and Industrial Modeling
              degree, with groundwater intelligence as a dedicated specialization pathway.
            </p>
          </Card>
        </div>
      </section>

      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gia-blue">Three Disciplinary Pillars</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {pillars.map((pillar) => (
              <Card key={pillar} className="h-full">
                <p className="text-sm font-semibold text-gia-blue">{pillar}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gia-blue">Programme Overview</h2>
        <p className="mt-3 max-w-[74ch] text-sm text-gray-700">
          A 24-month programme combining coordinated module blocks, studio development,
          and dissertation research aligned with WP1-WP6.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-gia-blue">Four-Semester Progression</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {progression.map((item) => (
            <Card key={item} className="h-full">
              <p className="text-sm font-semibold text-gia-blue">{item}</p>
            </Card>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Card>
            <h3 className="mb-2 text-lg font-semibold text-gia-blue">Block-Modular Delivery</h3>
            <p className="text-sm text-gray-700">
              Modules are delivered in integrated and coordinated blocks with teaching,
              assessment, breaks, proposal preparation, and structured research periods.
            </p>
            <Link href="/study/block-modular-model" className="mt-4 inline-block text-sm font-semibold text-gia-teal hover:underline">
              Explore delivery model
            </Link>
          </Card>
          <Card>
            <h3 className="mb-2 text-lg font-semibold text-gia-blue">Groundwater Intelligence Studio</h3>
            <p className="text-sm text-gray-700">
              Studio Versions 1-4 connect module learning to software architecture, team projects,
              and dissertation-ready outputs.
            </p>
            <Link href="/study/groundwater-intelligence-studio" className="mt-4 inline-block text-sm font-semibold text-gia-teal hover:underline">
              Visit studio page
            </Link>
          </Card>
        </div>
      </section>

      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <h3 className="mb-2 text-lg font-semibold text-gia-blue">Module Catalogue</h3>
              <p className="text-sm text-gray-700">Sixteen specialist modules mapped to semesters, work packages, and software workflows.</p>
              <Link href="/study/modules" className="mt-4 inline-block text-sm font-semibold text-gia-teal hover:underline">
                Browse all modules
              </Link>
            </Card>
            <Card>
              <h3 className="mb-2 text-lg font-semibold text-gia-blue">Dissertation</h3>
              <p className="text-sm text-gray-700">Structured six-month dissertation phase aligned to WP research and platform implementation.</p>
              <Link href="/study/dissertation" className="mt-4 inline-block text-sm font-semibold text-gia-teal hover:underline">
                View dissertation pathway
              </Link>
            </Card>
            <Card className="lg:col-span-2">
              <h3 className="mb-2 text-lg font-semibold text-gia-blue">Career Pathways</h3>
              <ul className="list-disc space-y-1.5 pl-5 text-sm text-gray-700">
                {pathways.map((pathway) => (
                  <li key={pathway}>{pathway}</li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gia-blue">Admissions and Funding</h2>
        <p className="mt-3 max-w-[74ch] text-sm text-gray-700">
          Admissions, fee guidance, calendar planning, and applicant support are available through dedicated programme pages.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {quickLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              <Card className="h-full">
                <p className="text-sm font-semibold text-gia-blue">{item.title}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
