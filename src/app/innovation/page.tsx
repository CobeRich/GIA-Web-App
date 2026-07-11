import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Innovation & Impact",
  description:
    "GIA's innovation and impact activities: technology transfer, prototypes, startups, industry partnerships and more.",
};

const SUBSECTIONS = [
  { href: "/innovation/technology-transfer", title: "Technology Transfer", description: "Moving research into real-world application." },
  { href: "/innovation/prototypes", title: "Prototypes", description: "Early-stage innovations under development." },
  { href: "/innovation/startups", title: "Startups", description: "Ventures incubated through GIA's innovation programmes." },
  { href: "/innovation/industry", title: "Industry", description: "Partnering with industry to scale potable water solutions." },
  { href: "/innovation/government-policy", title: "Government & Policy", description: "Informing policy for groundwater governance." },
  { href: "/innovation/consultancy", title: "Consultancy", description: "Expert consultancy services for water projects." },
  { href: "/innovation/sdg-alignment", title: "SDG Alignment", description: "How our work advances the Sustainable Development Goals." },
  { href: "/innovation/impact-stories", title: "Impact Stories", description: "Stories of real-world potable water impact." },
];

export default function InnovationPage() {
  return (
    <>
      <PageHero
        eyebrow="Innovation & Impact"
        title="Turning groundwater research into real-world impact"
        description="From prototypes to policy, GIA translates research into innovations that expand potable water access across Africa."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SUBSECTIONS.map((item) => (
            <Link key={item.href} href={item.href}>
              <Card className="h-full">
                <h3 className="mb-2 text-lg font-semibold text-gia-blue">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
