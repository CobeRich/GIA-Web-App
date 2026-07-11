import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ProfileCard from "@/components/ui/ProfileCard";
import { getAllTeam } from "@/lib/content";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the researchers and staff of the Groundwater Intelligence Academy.",
};

const FILTERS = [
  "all",
  "faculty",
  "researchers",
  "technical-team",
  "students",
  "administrators",
  "visiting-fellows",
] as const;

type TeamFilter = (typeof FILTERS)[number];

function matchesFilter(filter: TeamFilter, role: string, category: string) {
  const roleText = role.toLowerCase();
  const categoryText = category.toLowerCase();

  if (filter === "all") return true;
  if (filter === "faculty") return roleText.includes("prof") || roleText.includes("lecturer");
  if (filter === "researchers") return categoryText === "researcher" || roleText.includes("research");
  if (filter === "technical-team") return roleText.includes("engineer") || roleText.includes("technical") || roleText.includes("platform");
  if (filter === "students") return roleText.includes("student") || roleText.includes("phd") || roleText.includes("msc");
  if (filter === "administrators") return roleText.includes("admin") || roleText.includes("coordinator") || categoryText === "staff";
  if (filter === "visiting-fellows") return roleText.includes("visiting") || roleText.includes("fellow");

  return true;
}

export default function TeamPage({
  searchParams,
}: {
  searchParams?: { filter?: string };
}) {
  const team = getAllTeam();
  const selectedFilter: TeamFilter = FILTERS.includes((searchParams?.filter as TeamFilter) ?? "all")
    ? ((searchParams?.filter as TeamFilter) ?? "all")
    : "all";

  const filteredTeam = team.filter((member) =>
    matchesFilter(selectedFilter, member.role, member.category)
  );

  return (
    <>
      <PageHero
        eyebrow="About"
        title="Our Team"
        description="A multidisciplinary team of researchers, engineers, and staff advancing potable water science across Africa."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-2xl font-bold text-gia-blue">Team Directory</h2>
        <div className="mb-10 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {FILTERS.filter((f) => f !== "all").map((filter) => (
            <Link key={filter} href={`/about/team?filter=${filter}`}>
              <Card
                className={`h-full text-center ${selectedFilter === filter ? "border-gia-teal" : ""}`}
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-gia-blue">
                  {filter.replace(/-/g, " ")}
                </p>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Showing: <span className="font-semibold capitalize text-gia-blue">{selectedFilter.replace(/-/g, " ")}</span>
          </p>
          {selectedFilter !== "all" ? (
            <Link href="/about/team" className="text-sm font-semibold text-gia-teal hover:underline">
              Clear filter
            </Link>
          ) : null}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTeam.map((member) => (
            <Link key={member.slug} href={`/about/team/${member.slug}`}>
              <ProfileCard member={member} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
