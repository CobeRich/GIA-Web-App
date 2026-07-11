import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import PlatformAccessForm from "@/components/forms/PlatformAccessForm";

export const metadata: Metadata = {
  title: "Request Platform Access",
  description: "Request access to the GIA digital platform, including the data portal and dashboards.",
};

export default function PlatformAccessPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="Request Platform Access"
        description="Access to the GIA platform is granted to verified researchers, staff, students, and partners."
      />
      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <PlatformAccessForm />
      </section>
    </>
  );
}
