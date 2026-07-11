import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Study FAQ",
  description: "Frequently asked questions for applicants and enrolled students.",
  path: "/study/faq",
  image: "/images/gia-hero-banner-c.png",
});

export default function StudyFaqPage() {
  return (
    <>
      <PageHero eyebrow="Study" title="FAQ" description="Common questions about admissions, modules, studio work, and dissertation timelines." />
      <section className="mx-auto max-w-[900px] px-4 py-16 sm:px-6 lg:px-8 text-gray-700">
        <p>Frequently asked questions will be published and updated each admissions cycle.</p>
      </section>
    </>
  );
}
