import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Technology Transfer",
  description: "How GIA moves research innovations into practical, deployable potable water technologies.",
};

export default function TechnologyTransferPage() {
  return (
    <>
      <PageHero eyebrow="Innovation & Impact" title="Technology Transfer" description="How GIA moves research innovations into practical, deployable potable water technologies." />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-gray-700">
          {/* TODO: Replace with real content for Technology Transfer */}
          GIA works with industry and government partners to transfer laboratory and field research into deployable potable water technologies, ensuring scientific breakthroughs reach the communities that need them most.
        </p>
      </section>
    </>
  );
}
