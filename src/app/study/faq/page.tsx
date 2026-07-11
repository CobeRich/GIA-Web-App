import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Study FAQ",
  description: "Frequently asked questions for applicants and enrolled students.",
  path: "/study/faq",
  image: "/images/gia-hero-banner-c.png",
});

export default function StudyFaqPage() {
  const faqs = [
    {
      q: "Is this a standalone degree?",
      a: "No. It is a dedicated track within the MPhil Scientific Computing and Industrial Modeling degree.",
    },
    {
      q: "How long is the programme?",
      a: "24 months across four semesters, with coordinated module blocks and dissertation progression.",
    },
    {
      q: "Are modules strictly sequential 8-week blocks?",
      a: "No. Delivery is coordinated and integrated across semester plans rather than a strict 136-week sequence.",
    },
    {
      q: "How are modules linked to research?",
      a: "Modules map to WP1-WP6 and are integrated through studio outputs and dissertation alignment.",
    },
    {
      q: "Where do I apply?",
      a: "Use the programme admissions page for guidance and the admissions form for submission.",
    },
  ];

  return (
    <>
      <PageHero eyebrow="Study" heroType="C" title="FAQ" description="Common programme questions for applicants and enrolled students." />
      <section className="mx-auto max-w-[1000px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4">
          {faqs.map((item) => (
            <Card key={item.q}>
              <h2 className="text-base font-semibold text-gia-blue">{item.q}</h2>
              <p className="mt-2 text-sm text-gray-700">{item.a}</p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
