import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ProfileCard from "@/components/ui/ProfileCard";
import { getAllTeam } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the researchers and staff of the Groundwater Institute of Africa.",
};

export default function TeamPage() {
  const team = getAllTeam();
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Our Team"
        description="A multidisciplinary team of researchers, engineers, and staff advancing potable water science across Africa."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <ProfileCard key={member.slug} member={member} />
          ))}
        </div>
      </section>
    </>
  );
}
