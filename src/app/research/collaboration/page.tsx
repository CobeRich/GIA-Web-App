import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Research Collaboration",
  description: "Opportunities to collaborate with GIA on groundwater and potable water research.",
};

export default function CollaborationPage() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Collaborate with GIA"
        description="We welcome collaboration with universities, research institutes, and government agencies on groundwater and potable water science."
      />
      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="mb-8 text-gray-700">
          {/* TODO: Replace with real collaboration process copy */}
          Whether you are interested in joint research, data sharing, or co-supervised
          postgraduate research, our team can help scope a collaboration that fits your
          institution&apos;s goals.
        </p>
        <Button href="/forms/collaboration" size="lg">
          Submit a Collaboration Request
        </Button>
      </section>
    </>
  );
}
