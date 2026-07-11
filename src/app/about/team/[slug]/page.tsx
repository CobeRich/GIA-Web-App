import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import ProfileCard from "@/components/ui/ProfileCard";
import Card from "@/components/ui/Card";
import { createMetadata } from "@/lib/metadata";
import { getAllTeam, getTeamMemberBySlug } from "@/lib/content";

interface TeamProfilePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllTeam().map((member) => ({ slug: member.slug }));
}

export function generateMetadata({ params }: TeamProfilePageProps): Metadata {
  const member = getTeamMemberBySlug(params.slug);

  if (!member) {
    return createMetadata({
      title: "Team Profile",
      description: "Individual team member profile.",
      path: `/about/team/${params.slug}`,
      image: "/images/gia-hero-banner-a.png",
    });
  }

  return createMetadata({
    title: `${member.name} | Team`,
    description: member.bio,
    path: `/about/team/${member.slug}`,
    image: "/images/gia-hero-banner-a.png",
  });
}

export default function TeamProfilePage({ params }: TeamProfilePageProps) {
  const member = getTeamMemberBySlug(params.slug);

  if (!member) notFound();

  return (
    <>
      <PageHero
        eyebrow="About"
        title={member.name}
        description={member.role}
      />
      <section className="mx-auto max-w-[1000px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
          <ProfileCard member={member} />
          <Card>
            <h2 className="mb-3 text-2xl font-bold text-gia-blue">Profile Overview</h2>
            <p className="text-gray-700">{member.bio}</p>
            {member.email ? (
              <p className="mt-4 text-sm text-gray-700">
                <span className="font-semibold text-gia-blue">Contact:</span> {member.email}
              </p>
            ) : null}
            <p className="mt-4 text-sm text-gray-600">
              Category: <span className="capitalize">{member.category}</span>
            </p>
          </Card>
        </div>
      </section>
    </>
  );
}
