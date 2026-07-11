import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about the Groundwater Intelligence Academy (GIA), our mission, team, leadership, governance and history.",
};

const SUBSECTIONS = [
  { href: "/about/team", title: "Our Team", description: "Meet our researchers and staff." },
  {
    href: "/about/leadership",
    title: "Leadership",
    description: "Institutional leadership driving our mission forward.",
  },
  {
    href: "/about/governance",
    title: "Governance",
    description: "Our board, committees, and governance structures.",
  },
  {
    href: "/about/history",
    title: "History",
    description: "The story of GIA's founding and growth.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Advancing groundwater science for a water-secure Africa"
        description="The Groundwater Intelligence Academy (GIA) is a research and innovation institute dedicated to groundwater science, potable water access, and capacity building across the continent."
      />
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-2xl font-bold text-gia-blue">Our Mission</h2>
        <p className="text-gray-700">
          {/* TODO: Replace with real mission statement copy */}
          GIA exists to generate world-class groundwater research, translate that
          research into innovation and policy impact, and build the human capacity
          needed to secure reliable potable water access for communities across Africa.
        </p>
      </section>
      <section className="bg-gia-light py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
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
