import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import InnovationQuestionGrid from "@/components/innovation/InnovationQuestionGrid";

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

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <InnovationQuestionGrid
          problem="Groundwater research outputs often fail to reach implementable products, policies, and services at scale."
          solution="GIA runs an innovation pipeline that translates research into prototypes, transfer pathways, policy products, and partner deployments."
          audience="Public agencies, utilities, private-sector actors, startups, and communities needing decision-ready water solutions."
          research="Innovation outputs are grounded in WP1-WP6 findings, laboratory validation, and field evidence from platform-enabled workflows."
          readiness="The innovation portfolio spans prototype stage to deployment-ready collaborations depending on domain and partner context."
          engagement="Engage through collaboration enquiries, pilot partnerships, startup pathways, and consultancy scoping with the innovation team."
        />
      </section>

      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>
    </>
  );
}
