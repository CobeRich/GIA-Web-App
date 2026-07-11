import Link from "next/link";
import Card from "@/components/ui/Card";
import type { ResearchEntry } from "@/types/content";

const featuredProjects = [
  {
    slug: "aquifer-risk-mapping",
    title: "Regional Aquifer Risk Mapping",
    challenge: "Balancing quantity and quality under increasing abstraction pressure.",
    methods: "Integrated recharge modelling, vulnerability indexing, and geospatial analytics.",
    wp: "WP4, WP6",
    status: "Research Development",
    leadResearcher: "Dr. Jane Doe",
    expectedOutput: "Decision-ready aquifer vulnerability and potable-water risk maps.",
  },
  {
    slug: "vadose-zone-core-physics",
    title: "Vadose-Zone Core Physics Demonstrator",
    challenge: "Representing matrix, macropore, and fracture exchange realistically.",
    methods: "Multi-continuum numerical modelling and controlled benchmark scenarios.",
    wp: "WP2",
    status: "Prototype",
    leadResearcher: "Dr. Amina Yusuf",
    expectedOutput: "Validated core-physics module for integrated framework coupling.",
  },
  {
    slug: "potable-water-decision-engine",
    title: "Potable-Water Decision Engine",
    challenge: "Turning model outputs into policy-ready potable-water assessments.",
    methods: "Risk modelling, treatment-need analysis, and scenario comparison workflows.",
    wp: "WP6",
    status: "Demonstration",
    leadResearcher: "Prof. John Smith",
    expectedOutput: "Operational decision-support prototype for planning and governance use.",
  },
];

export default function FeaturedResearch({ entries }: { entries: ResearchEntry[] }) {
  void entries;

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gia-blue sm:text-3xl">Research Spotlight</h2>
            <p className="mt-2 max-w-2xl text-gray-600">
              Featured projects with challenge, methods, work-package alignment, and expected outputs.
            </p>
          </div>
          <Link href="/research/projects" className="text-sm font-medium text-gia-teal">
            View all projects →
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <Card>
            <h3 className="mb-2 text-2xl font-semibold text-gia-blue">{featuredProjects[0].title}</h3>
            <div className="space-y-2 text-sm text-slate-700">
              <p><strong>Challenge:</strong> {featuredProjects[0].challenge}</p>
              <p><strong>Methods:</strong> {featuredProjects[0].methods}</p>
              <p><strong>WP:</strong> {featuredProjects[0].wp}</p>
              <p><strong>Project Status:</strong> {featuredProjects[0].status}</p>
              <p><strong>Lead Researcher:</strong> {featuredProjects[0].leadResearcher}</p>
              <p><strong>Expected Output:</strong> {featuredProjects[0].expectedOutput}</p>
            </div>
            <div className="mt-5 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Related WP</p>
                <p className="mt-1">{featuredProjects[0].wp}</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Status</p>
                <p className="mt-1">{featuredProjects[0].status}</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={`/research/projects/${featuredProjects[0].slug}`} className="text-sm font-semibold text-gia-teal hover:underline">
                Explore Project
              </Link>
            </div>
          </Card>

          <div className="grid gap-6">
            {featuredProjects.slice(1).map((project) => (
              <Card key={project.slug}>
                <h3 className="mb-2 text-lg font-semibold text-gia-blue">{project.title}</h3>
                <p className="text-sm text-gray-600"><strong>Challenge:</strong> {project.challenge}</p>
                <p className="mt-2 text-sm text-gray-600"><strong>Methods:</strong> {project.methods}</p>
                <p className="mt-2 text-sm text-gray-600"><strong>WP:</strong> {project.wp}</p>
                <p className="mt-2 text-sm text-gray-600"><strong>Status:</strong> {project.status}</p>
                <p className="mt-2 text-sm text-gray-600"><strong>Lead:</strong> {project.leadResearcher}</p>
                <p className="mt-2 text-sm text-gray-600"><strong>Expected Output:</strong> {project.expectedOutput}</p>
                <Link href={`/research/projects/${project.slug}`} className="mt-3 inline-block text-sm font-semibold text-gia-teal hover:underline">
                  Explore Project
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
