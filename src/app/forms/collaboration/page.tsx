import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CollaborationForm from "@/components/forms/CollaborationForm";

export const metadata: Metadata = {
  title: "Research Collaboration Request",
  description: "Submit a request to collaborate with GIA on groundwater and potable water research.",
};

export default function CollaborationPage() {
  return (
    <>
      <PageHero eyebrow="Forms" title="Research Collaboration Request" description="Submit a request to collaborate with GIA on groundwater and potable water research." />
      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <CollaborationForm />
      </section>
    </>
  );
}
