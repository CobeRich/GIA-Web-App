import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import PartnershipForm from "@/components/forms/PartnershipForm";

export const metadata: Metadata = {
  title: "Partnership Enquiry",
  description: "Send GIA a partnership enquiry.",
};

export default function PartnershipEnquiryPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnerships"
        title="Partnership Enquiry"
        description="Have a specific partnership idea? Send us the details and our partnerships team will follow up."
      />
      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <PartnershipForm />
      </section>
    </>
  );
}
