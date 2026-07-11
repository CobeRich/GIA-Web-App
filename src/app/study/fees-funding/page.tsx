import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
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
      <PageHero eyebrow="Study" title="Fees & Funding" description="Financial planning and funding opportunities for enrolled students." />
      <section className="mx-auto max-w-[900px] px-4 py-16 sm:px-6 lg:px-8 text-gray-700">
        <p>Funding options include scholarships, institutional sponsorship, and research assistant pathways.</p>
      </section>
    </>
  );
}
