import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Fees & Funding",
  description: "Funding pathways and fee guidance for prospective students.",
  path: "/study/fees-funding",
  image: "/images/gia-hero-banner-c.png",
});

export default function FeesFundingPage() {
  return (
    <>
      <PageHero eyebrow="Study" heroType="C" title="Fees & Funding" description="Programme-specific fee planning and funding routes for the MPhil track." />
      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="mb-2 text-xl font-semibold text-gia-blue">Fee Components</h2>
            <p className="text-sm text-gray-700">Academic tuition, studio resources, and research/dissertation support components are published per intake cycle.</p>
          </Card>
          <Card>
            <h2 className="mb-2 text-xl font-semibold text-gia-blue">Funding Pathways</h2>
            <p className="text-sm text-gray-700">Scholarships, institutional sponsorship, and research-assistant opportunities may be available to qualified candidates.</p>
          </Card>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/study/admissions" className="rounded-md bg-gia-teal px-5 py-3 text-sm font-semibold text-white">Admissions</Link>
          <Link href="/study/faq" className="rounded-md border border-gia-blue px-5 py-3 text-sm font-semibold text-gia-blue">Funding FAQ</Link>
        </div>
      </section>
    </>
  );
}
