import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import PartnershipForm from "@/components/forms/PartnershipForm";

export const metadata: Metadata = {
  title: "Partnership Application",
  description: "Apply to become an institutional partner of GIA.",
};

export default function PartnershipPage() {
  return (
    <>
      <PageHero eyebrow="Forms" title="Partnership Application" description="Apply to become an institutional partner of GIA." />
      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <PartnershipForm />
      </section>
    </>
  );
}
