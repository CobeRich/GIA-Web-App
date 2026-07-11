import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import DataAccessForm from "@/components/forms/DataAccessForm";

export const metadata: Metadata = {
  title: "Dataset Access Request",
  description: "Request access to a restricted GIA groundwater or potable water dataset.",
};

export default function Data AccessPage() {
  return (
    <>
      <PageHero eyebrow="Forms" title="Dataset Access Request" description="Request access to a restricted GIA groundwater or potable water dataset." />
      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <DataAccessForm />
      </section>
    </>
  );
}
