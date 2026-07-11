import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Startups",
  description: "Startup ventures incubated through GIA's innovation and entrepreneurship programmes.",
};

export default function StartupsPage() {
  return (
    <>
      <PageHero eyebrow="Innovation & Impact" title="Startups" description="Startup ventures incubated through GIA's innovation and entrepreneurship programmes." />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-gray-700">
          {/* TODO: Replace with real content for Startups */}
          GIA supports early-stage startups tackling potable water challenges through mentorship, seed funding connections, and access to research infrastructure.
        </p>
      </section>
    </>
  );
}
