import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Academic Calendar",
  description: "Academic cycle dates, block periods, and assessment windows.",
  path: "/study/calendar",
  image: "/images/gia-hero-banner-c.png",
});

export default function StudyCalendarPage() {
  return (
    <>
      <PageHero eyebrow="Study" title="Academic Calendar" description="Term windows, module blocks, studio milestones, and submission periods." />
      <section className="mx-auto max-w-[900px] px-4 py-16 sm:px-6 lg:px-8 text-gray-700">
        <p>Calendar details will be published annually, with block schedules coordinated to integrated project milestones.</p>
      </section>
    </>
  );
}
