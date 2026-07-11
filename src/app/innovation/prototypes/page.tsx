import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Prototypes",
  description: "Early-stage potable water technology prototypes developed by GIA researchers and engineers.",
};

export default function PrototypesPage() {
  return (
    <>
      <PageHero eyebrow="Innovation & Impact" title="Prototypes" description="Early-stage potable water technology prototypes developed by GIA researchers and engineers." />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-gray-700">
          {/* TODO: Replace with real content for Prototypes */}
          Our innovation labs develop and test early-stage prototypes, from low-cost filtration devices to IoT-enabled monitoring tools, before they progress to pilot deployment.
        </p>
      </section>
    </>
  );
}
