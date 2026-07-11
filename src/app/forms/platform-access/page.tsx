import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import PlatformAccessForm from "@/components/forms/PlatformAccessForm";

export const metadata: Metadata = {
  title: "Platform Access Request",
  description: "Request access to the GIA digital platform.",
};

export default function Platform AccessPage() {
  return (
    <>
      <PageHero eyebrow="Forms" title="Platform Access Request" description="Request access to the GIA digital platform." />
      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <PlatformAccessForm />
      </section>
    </>
  );
}
