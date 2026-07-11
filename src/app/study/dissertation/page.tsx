import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Dissertation",
  description: "Dissertation expectations, milestones, and submission guidance.",
  path: "/study/dissertation",
  image: "/images/gia-hero-banner-c.png",
});

export default function DissertationPage() {
  return (
    <>
      <PageHero eyebrow="Study" heroType="C" title="Dissertation" description="Structured dissertation pathway aligned to WP priorities and platform implementation." />

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[
            "1. WP alignment",
            "2. Topic selection",
            "3. Supervisor allocation",
            "4. Proposal defence",
            "5. Methodology",
            "6. Ethics",
            "7. Implementation",
            "8. Validation",
            "9. Manuscript",
            "10. Thesis submission",
            "11. Viva",
            "12. Repository",
            "13. Expected six-month timeline",
          ].map((item) => (
            <Card key={item} className="h-full">
              <p className="text-sm font-semibold text-gia-blue">{item}</p>
            </Card>
          ))}
        </div>

        <Card className="mt-6">
          <h2 className="mb-2 text-lg font-semibold text-gia-blue">Expected Six-Month Timeline</h2>
          <p className="text-sm text-gray-700">
            Month 1: alignment and topic finalization. Month 2: proposal and ethics.
            Months 3-4: implementation and validation. Month 5: manuscript and thesis assembly.
            Month 6: submission, viva preparation, and repository deposit.
          </p>
        </Card>
      </section>
    </>
  );
}
