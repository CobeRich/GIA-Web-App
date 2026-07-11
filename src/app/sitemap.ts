import type { MetadataRoute } from "next";
import { getAllNews, getAllEvents, getAllOpportunities } from "@/lib/content";
import { siteUrl } from "@/lib/utils";

const STATIC_ROUTES = [
  "/",
  "/about",
  "/about/team",
  "/about/leadership",
  "/about/governance",
  "/about/history",
  "/research",
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

  return [...staticEntries, ...newsEntries, ...eventEntries, ...opportunityEntries];
}
