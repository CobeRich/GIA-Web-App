import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ProfileCard from "@/components/ui/ProfileCard";
import { getTeamByCategory } from "@/lib/content";

export const metadata: Metadata = {
  title: "Governance",
  description: "Governance structure, board and committees of the Groundwater Institute of Africa.",
};

export default function GovernancePage() {
  const governance = getTeamByCategory("governance");
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Governance"
        description="GIA is governed by a Board of Directors and supporting committees that ensure sound institutional stewardship."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="mb-3 text-2xl font-bold text-gia-blue">Board of Directors</h2>
          <p className="text-gray-700">
            {/* TODO: Replace with real governance structure copy */}
            Our Board of Directors provides strategic oversight, financial stewardship, and
            institutional accountability across all GIA programmes.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {governance.map((member) => (
            <ProfileCard key={member.slug} member={member} />
          ))}
        </div>
      </section>
    </>
  );
}
