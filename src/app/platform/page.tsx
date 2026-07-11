import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Platform",
  description: "GIA's digital platform: data portal, modelling engine, AI prediction, digital twin, IoT monitoring, and more.",
};

const SUBSECTIONS = [
  { href: "/platform/data-portal", title: "Data Portal", description: "Access groundwater and potable water datasets." },
  { href: "/platform/modelling-engine", title: "Modelling Engine", description: "Hydrogeological modelling tools." },
  { href: "/platform/ai-prediction", title: "AI Prediction", description: "AI-driven groundwater prediction models." },
  { href: "/platform/digital-twin", title: "Digital Twin", description: "Digital twin simulations of aquifer systems." },
  { href: "/platform/monitoring-iot", title: "Monitoring & IoT", description: "Real-time IoT sensor monitoring network." },
  { href: "/platform/dashboard", title: "Dashboard", description: "Visual dashboards of groundwater indicators." },
  { href: "/platform/maps", title: "Maps", description: "Interactive maps of aquifers and field sites." },
  { href: "/platform/api-docs", title: "API Docs", description: "Developer documentation for the GIA API." },
  { href: "/platform/access", title: "Request Access", description: "Request access to the GIA digital platform." },
];

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="A digital platform for groundwater intelligence"
        description="GIA's platform brings together data, modelling, AI, and monitoring tools to support potable water research and decision-making."
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
