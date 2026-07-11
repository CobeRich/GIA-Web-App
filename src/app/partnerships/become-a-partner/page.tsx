import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import PartnershipForm from "@/components/forms/PartnershipForm";

export const metadata: Metadata = {
  title: "Become a Partner",
  description: "Learn how your organisation can become a partner of the Groundwater Intelligence Academy.",
};

export default function BecomeAPartnerPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnerships"
        title="Become a Partner"
        description="Join our network of governments, universities, industry, and civil society organisations advancing potable water access."
      />
      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <PartnershipForm />
      </section>
    </>
  );
}
