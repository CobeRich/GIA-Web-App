import type { MetadataRoute } from "next";
import {
  getAllDatasets,
  getAllEvents,
  getAllFieldSites,
  getAllLaboratories,
  getAllModules,
  getAllNews,
  getAllOpportunities,
  getAllPeople,
  getAllPublications,
  getAllResearchProjects,
  getAllSoftware,
  getAllTeam,
  getAllWorkPackages,
} from "@/lib/content";
import { siteUrl } from "@/lib/utils";

const STATIC_ROUTES = [
  "/",
  "/about",
  "/about/team",
  "/about/leadership",
  "/about/governance",
  "/about/history",
  "/about/vision-mission",
  "/about/organisation",
  "/about/strategic-roadmap",
  "/study",
  "/study/mphil-groundwater-intelligence",
  "/study/programme-structure",
  "/study/block-modular-model",
  "/study/modules",
  "/study/groundwater-intelligence-studio",
  "/study/dissertation",
  "/study/admissions",
  "/study/fees-funding",
  "/study/academic-calendar",
  "/study/faq",
  "/research",
  "/research/integrated-framework",
  "/research/work-packages",
  "/research/projects",
  "/research/publications",
  "/research/scientific-software",
  "/research/laboratories",
  "/research/themes",
  "/research/field-sites",
  "/research/collaboration",
  "/research/datasets",
  "/innovation",
  "/innovation/technology-transfer",
  "/innovation/prototypes",
  "/innovation/startups",
  "/innovation/industry",
  "/innovation/government-policy",
  "/innovation/consultancy",
  "/innovation/sdg-alignment",
  "/innovation/impact-stories",
  "/partnerships",
  "/partnerships/categories",
  "/partnerships/become-a-partner",
  "/partnerships/enquiry",
  "/knowledge-hub",
  "/knowledge-hub/reports",
  "/knowledge-hub/policy-briefs",
  "/knowledge-hub/educational-resources",
  "/knowledge-hub/media-gallery",
  "/knowledge-hub/webinars",
  "/knowledge-hub/newsletter",
  "/knowledge-hub/downloads",
  "/opportunities",
  "/platform",
  "/platform/data-portal",
  "/platform/modelling-engine",
  "/platform/ai-prediction",
  "/platform/digital-twin",
  "/platform/monitoring-iot",
  "/platform/dashboard",
  "/platform/maps",
  "/platform/api-docs",
  "/platform/access",
  "/contact",
  "/news",
  "/events",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: siteUrl(route),
    lastModified: new Date(),
  }));

  const newsEntries: MetadataRoute.Sitemap = getAllNews().map((item) => ({
    url: siteUrl(`/news/${item.slug}`),
    lastModified: item.date,
  }));

  const eventEntries: MetadataRoute.Sitemap = getAllEvents().map((item) => ({
    url: siteUrl(`/events/${item.slug}`),
    lastModified: item.startDate,
  }));

  const opportunityEntries: MetadataRoute.Sitemap = getAllOpportunities().map(
    (item) => ({
      url: siteUrl(`/opportunities/${item.category}/${item.slug}`),
      lastModified: new Date(),
    })
  );

  const moduleEntries: MetadataRoute.Sitemap = getAllModules().map((moduleItem) => ({
    url: siteUrl(`/study/modules/${moduleItem.slug}`),
    lastModified: new Date(),
  }));

  const wpEntries: MetadataRoute.Sitemap = getAllWorkPackages().map((wp) => ({
    url: siteUrl(`/research/work-packages/${wp.slug}`),
    lastModified: new Date(),
  }));

  const projectEntries: MetadataRoute.Sitemap = getAllResearchProjects().map((project) => ({
    url: siteUrl(`/research/projects/${project.slug}`),
    lastModified: new Date(),
  }));

  const publicationEntries: MetadataRoute.Sitemap = getAllPublications().map((publication) => ({
    url: siteUrl(`/research/publications/${publication.slug}`),
    lastModified: publication.date,
  }));

  const datasetEntries: MetadataRoute.Sitemap = getAllDatasets().map((dataset) => ({
    url: siteUrl(`/research/datasets/${dataset.slug}`),
    lastModified: new Date(),
  }));

  const softwareEntries: MetadataRoute.Sitemap = getAllSoftware().map((software) => ({
    url: siteUrl(`/research/scientific-software/${software.slug}`),
    lastModified: new Date(),
  }));

  const fieldSiteEntries: MetadataRoute.Sitemap = getAllFieldSites().map((fieldSite) => ({
    url: siteUrl(`/research/field-sites/${fieldSite.slug}`),
    lastModified: new Date(),
  }));

  const laboratoryEntries: MetadataRoute.Sitemap = getAllLaboratories().map((laboratory) => ({
    url: siteUrl(`/research/laboratories/${laboratory.slug}`),
    lastModified: new Date(),
  }));

  const teamSlugSet = new Set(getAllTeam().map((member) => member.slug));

  const peopleEntries: MetadataRoute.Sitemap = getAllPeople()
    .filter((person) => teamSlugSet.has(person.slug))
    .map((person) => ({
    url: siteUrl(`/about/team/${person.slug}`),
    lastModified: new Date(),
    }));

  const teamEntries: MetadataRoute.Sitemap = getAllTeam().map((member) => ({
    url: siteUrl(`/about/team/${member.slug}`),
    lastModified: new Date(),
  }));

  const combinedEntries: MetadataRoute.Sitemap = [
    ...staticEntries,
    ...newsEntries,
    ...eventEntries,
    ...opportunityEntries,
    ...moduleEntries,
    ...wpEntries,
    ...projectEntries,
    ...publicationEntries,
    ...datasetEntries,
    ...softwareEntries,
    ...fieldSiteEntries,
    ...laboratoryEntries,
    ...peopleEntries,
    ...teamEntries,
  ];

  const uniqueByUrl = new Map<string, MetadataRoute.Sitemap[number]>();
  combinedEntries.forEach((entry) => {
    uniqueByUrl.set(entry.url, entry);
  });

  return Array.from(uniqueByUrl.values());
}
