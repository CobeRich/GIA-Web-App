import type { Metadata } from "next";
import { notFound } from "next/navigation";
import WorkPackageDetailPage from "@/components/research/WorkPackageDetailPage";
import { getAllWorkPackages, getWorkPackageBySlug } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

interface WorkPackagePageParams {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllWorkPackages().map((wp) => ({ slug: wp.slug }));
}

export async function generateMetadata({ params }: WorkPackagePageParams): Promise<Metadata> {
  const { slug } = params;
  const wp = getWorkPackageBySlug(slug);

  if (!wp) {
    return createMetadata({
      title: "Work Package",
      description: "Work package detail page.",
      path: `/research/work-packages/${slug}`,
      image: "/images/gia-hero-banner-b.png",
    });
  }

  return createMetadata({
    title: `${wp.code} ${wp.title}`,
    description: wp.objective,
    path: `/research/work-packages/${wp.slug}`,
    image: "/images/gia-hero-banner-b.png",
  });
}

export default async function WorkPackageSlugPage({ params }: WorkPackagePageParams) {
  const { slug } = params;
  const wp = getWorkPackageBySlug(slug);

  if (!wp) notFound();

  const specialSections = (wp.specialSections ?? []).map((section) => ({
    title: section.title,
    body: section.body,
    bullets: section.bullets,
  }));

  const sections = [
    { title: "Objective", body: wp.objective },
    {
      title: "Scientific Questions",
      bullets: wp.questions,
    },
    ...specialSections,
    {
      title: "Tasks",
      bullets: wp.tasks.map((task) => `${task.title} (${task.stage}): ${task.summary}`),
    },
    {
      title: "Inputs",
      bullets: wp.inputs.map((input) => input.title),
    },
    {
      title: "Outputs",
      bullets: wp.outputs.map((output) => output.title),
    },
    {
      title: "Deliverables",
      bullets: wp.deliverables.map((deliverable) => `${deliverable.title} — ${deliverable.timeline}`),
    },
    {
      title: "Milestones",
      bullets: wp.milestones.map((milestone) => `${milestone.name} — ${milestone.target}`),
    },
  ];

  return (
    <WorkPackageDetailPage
      code={wp.code}
      title={wp.title}
      description={wp.objective}
      sections={sections}
      relatedContent={{
        workPackages: ["wp1", "wp2", "wp3", "wp4", "wp5", "wp6"],
        laboratories: wp.relatedLaboratories,
        modules: wp.relatedModules,
        projects: wp.relatedProjects,
        datasets: wp.relatedDatasets,
        software: wp.relatedSoftware,
        publications: wp.relatedPublications,
      }}
    />
  );
}
