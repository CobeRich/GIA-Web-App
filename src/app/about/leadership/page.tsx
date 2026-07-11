import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ProfileCard from "@/components/ui/ProfileCard";
import { getTeamByCategory } from "@/lib/content";

export const metadata: Metadata = {
  title: "Leadership",
  description: "Meet the leadership team of the Groundwater Institute of Africa.",
};

export default function LeadershipPage() {
  const leaders = getTeamByCategory("leadership");
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Leadership"
        description="The senior leadership guiding GIA's strategic direction and institutional mission."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((member) => (
            <ProfileCard key={member.slug} member={member} />
          ))}
        </div>
      </section>
    </>
  );
}
