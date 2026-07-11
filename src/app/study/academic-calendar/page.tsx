import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Academic Calendar",
  description: "Academic cycle dates, block periods, and assessment windows.",
  path: "/study/academic-calendar",
  image: "/images/gia-hero-banner-c.png",
});

export default function AcademicCalendarPage() {
  return (
    <>
      <PageHero eyebrow="Study" heroType="C" title="Academic Calendar" description="Programme calendar with coordinated block delivery, milestones, and assessment windows." />
      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <Card className="h-full"><p className="text-sm font-semibold text-gia-blue">Semester I: Foundations cycle</p></Card>
          <Card className="h-full"><p className="text-sm font-semibold text-gia-blue">Semester II: Modelling cycle</p></Card>
          <Card className="h-full"><p className="text-sm font-semibold text-gia-blue">Semester III: Intelligent systems cycle</p></Card>
          <Card className="h-full"><p className="text-sm font-semibold text-gia-blue">Semester IV: Dissertation cycle</p></Card>
        </div>
        <Card className="mt-6">
          <p className="text-sm text-gray-700">
            Each semester includes coordinated teaching weeks, assessment weeks,
            studio integration milestones, proposal or research windows, and scheduled breaks.
          </p>
        </Card>
      </section>
    </>
  );
}
