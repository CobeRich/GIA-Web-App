import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Admissions",
  description: "Admission requirements, prerequisites, and application workflow for the study track.",
  path: "/study/admissions",
  image: "/images/gia-hero-banner-c.png",
});

export default function StudyAdmissionsPage() {
  return (
    <>
      <PageHero eyebrow="Study" heroType="C" title="Admissions" description="Programme-specific admissions guidance for the MPhil Groundwater Intelligence track." />
      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="mb-2 text-xl font-semibold text-gia-blue">Eligibility and Entry Requirements</h2>
            <p className="text-sm text-gray-700">
              Applicants should have a relevant quantitative, environmental, engineering,
              or computational background and readiness for intensive research training.
            </p>
          </Card>
          <Card>
            <h2 className="mb-2 text-xl font-semibold text-gia-blue">Application Process</h2>
            <p className="text-sm text-gray-700">
              Submission includes academic records, statement of purpose, references,
              and track-fit evidence aligned to groundwater intelligence goals.
            </p>
          </Card>
        </div>

        <Card className="mt-6">
          <h3 className="mb-2 text-lg font-semibold text-gia-blue">Admissions Timeline and Review</h3>
          <p className="text-sm text-gray-700">
            Applications are reviewed in cycles with panel assessment of academic readiness,
            research potential, and programme alignment.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/forms/admissions" className="rounded-md bg-gia-teal px-5 py-3 text-sm font-semibold text-white">
              Start Application
            </Link>
            <Link href="/study/faq" className="rounded-md border border-gia-blue px-5 py-3 text-sm font-semibold text-gia-blue">
              Admissions FAQ
            </Link>
          </div>
        </Card>
      </section>
    </>
  );
}
