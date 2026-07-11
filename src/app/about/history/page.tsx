import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Timeline from "@/components/ui/Timeline";

export const metadata: Metadata = {
  title: "History",
  description: "The history and milestones of the Groundwater Institute of Africa.",
};

// TODO: Replace with real institutional history and milestones.
const HISTORY_EVENTS = [
  {
    year: "2015",
    title: "GIA Founded",
    description: "The Groundwater Institute of Africa was established to advance groundwater science and potable water access.",
  },
  {
    year: "2018",
    title: "First Regional Field Sites Launched",
    description: "GIA established its first network of field monitoring sites across three countries.",
  },
  {
    year: "2021",
    title: "Data Portal Launched",
    description: "GIA launched its public data portal to share groundwater and potable water datasets.",
  },
  {
    year: "2024",
    title: "Continental Partnership Network Expanded",
    description: "GIA expanded its partnership network to include governments, universities, and industry across Africa.",
  },
];

export default function HistoryPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Our History"
        description="From our founding to today, GIA has grown into a continental leader in groundwater research and potable water innovation."
      />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Timeline events={HISTORY_EVENTS} />
      </section>
    </>
  );
}
