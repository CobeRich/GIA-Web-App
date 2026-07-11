import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ProfileCard from "@/components/ui/ProfileCard";
import { getTeamByCategory } from "@/lib/content";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Leadership",
  description: "Meet the leadership team of the Groundwater Intelligence Academy.",
};

export default function LeadershipPage() {
  const leaders = getTeamByCategory("leadership");
  const roles = [
    "Director",
    "Deputy directors",
    "Academic coordinator",
    "Research director",
    "Platform director",
    "Work-package leaders",
    "Laboratory heads",
  ];

  return (
    <>
      <PageHero
        eyebrow="About"
        title="Leadership"
        description="Leadership roles responsible for academic quality, research direction, and platform delivery."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role) => (
            <Card key={role} className="h-full">
              <p className="text-sm font-semibold text-gia-blue">{role}</p>
            </Card>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((member) => (
            <ProfileCard key={member.slug} member={member} />
          ))}
        </div>
      </section>
    </>
  );
}
