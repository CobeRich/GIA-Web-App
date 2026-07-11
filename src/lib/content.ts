/**
 * Content service layer (adapter boundary).
 *
 * Pages and components should import from here rather than from
 * `content/index.ts` directly. This indirection means that swapping the
 * underlying data source (local JSON -> Payload CMS) only requires
 * updating this file. See docs/payload-migration.md.
 */
import {
  readDatasets,
  readEvents,
  readFieldSites,
  readKnowledgeResources,
  readLaboratories,
  readModulesCollection,
  readPeople,
  readPublications,
  readResearchProjects,
  readSoftware,
  readWorkPackages,
  readNews,
  readOpportunities,
  readPartners,
  readResearchEntries,
  readTeam,
} from "../../content";
import type {
  DatasetContent,
  EventItem,
  FieldSiteContent,
  KnowledgeResource,
  KnowledgeResourceType,
  LaboratoryContent,
  ModuleContent,
  NewsItem,
  Opportunity,
  Partner,
  PersonContent,
  PublicationContent,
  ResearchProjectContent,
  ResearchEntry,
  ResearchEntryType,
  SoftwareContent,
  TeamCategory,
  TeamMember,
  WorkPackage,
} from "@/types/content";

function byDateDesc<T extends { date: string }>(a: T, b: T): number {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

// ---- News ----
export function getAllNews(): NewsItem[] {
  return [...readNews()].sort(byDateDesc);
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return readNews().find((item) => item.slug === slug);
}

// ---- Events ----
export function getAllEvents(): EventItem[] {
  return [...readEvents()].sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  );
}

export function getUpcomingEvents(): EventItem[] {
  const now = Date.now();
  return getAllEvents().filter((e) => new Date(e.startDate).getTime() >= now);
}

export function getEventBySlug(slug: string): EventItem | undefined {
  return readEvents().find((item) => item.slug === slug);
}

// ---- Team ----
export function getAllTeam(): TeamMember[] {
  return [...readTeam()].sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function getTeamByCategory(category: TeamCategory): TeamMember[] {
  return getAllTeam().filter((m) => m.category === category);
}

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return readTeam().find((m) => m.slug === slug);
}

// ---- Research ----
export function getAllResearchEntries(): ResearchEntry[] {
  return readResearchEntries();
}

export function getResearchEntriesByType(type: ResearchEntryType): ResearchEntry[] {
  return readResearchEntries().filter((r) => r.type === type);
}

export function getResearchEntryBySlug(slug: string): ResearchEntry | undefined {
  return readResearchEntries().find((r) => r.slug === slug);
}

// ---- Opportunities ----
export function getAllOpportunities(): Opportunity[] {
  return readOpportunities();
}

export function getOpportunitiesByCategory(category: string): Opportunity[] {
  return readOpportunities().filter((o) => o.category === category);
}

export function getOpportunityCategories(): string[] {
  return Array.from(new Set(readOpportunities().map((o) => o.category)));
}

export function getOpportunityBySlug(
  category: string,
  slug: string
): Opportunity | undefined {
  return readOpportunities().find(
    (o) => o.category === category && o.slug === slug
  );
}

// ---- Knowledge Hub ----
export function getKnowledgeResourcesByType(
  type: KnowledgeResourceType
): KnowledgeResource[] {
  return readKnowledgeResources()
    .filter((r) => r.type === type)
    .sort(byDateDesc);
}

export function getAllKnowledgeResources(): KnowledgeResource[] {
  return [...readKnowledgeResources()].sort(byDateDesc);
}

// ---- Partners ----
export function getAllPartners(): Partner[] {
  return readPartners();
}

export function getPartnerBySlug(slug: string): Partner | undefined {
  return readPartners().find((partner) => partner.slug === slug);
}

// ---- Work Packages ----
export function getAllWorkPackages(): WorkPackage[] {
  return readWorkPackages();
}

export function getWorkPackageBySlug(slug: string): WorkPackage | undefined {
  return readWorkPackages().find((wp) => wp.slug === slug);
}

// ---- Modules ----
export function getAllModules(): ModuleContent[] {
  return readModulesCollection();
}

export function getModuleBySlug(slug: string): ModuleContent | undefined {
  return readModulesCollection().find((moduleItem) => moduleItem.slug === slug);
}

// ---- Research Projects ----
export function getAllResearchProjects(): ResearchProjectContent[] {
  return readResearchProjects();
}

export function getResearchProjectBySlug(
  slug: string
): ResearchProjectContent | undefined {
  return readResearchProjects().find((project) => project.slug === slug);
}

// ---- Laboratories ----
export function getAllLaboratories(): LaboratoryContent[] {
  return readLaboratories();
}

export function getLaboratoryBySlug(slug: string): LaboratoryContent | undefined {
  return readLaboratories().find((laboratory) => laboratory.slug === slug);
}

// ---- Publications ----
export function getAllPublications(): PublicationContent[] {
  return [...readPublications()].sort(byDateDesc);
}

export function getPublicationBySlug(
  slug: string
): PublicationContent | undefined {
  return readPublications().find((publication) => publication.slug === slug);
}

// ---- Datasets ----
export function getAllDatasets(): DatasetContent[] {
  return readDatasets();
}

export function getDatasetBySlug(slug: string): DatasetContent | undefined {
  return readDatasets().find((dataset) => dataset.slug === slug);
}

// ---- Software ----
export function getAllSoftware(): SoftwareContent[] {
  return readSoftware();
}

export function getSoftwareBySlug(slug: string): SoftwareContent | undefined {
  return readSoftware().find((software) => software.slug === slug);
}

// ---- Field Sites ----
export function getAllFieldSites(): FieldSiteContent[] {
  return readFieldSites();
}

export function getFieldSiteBySlug(slug: string): FieldSiteContent | undefined {
  return readFieldSites().find((fieldSite) => fieldSite.slug === slug);
}

// ---- People ----
export function getAllPeople(): PersonContent[] {
  return readPeople();
}

export function getPersonBySlug(slug: string): PersonContent | undefined {
  return readPeople().find((person) => person.slug === slug);
}
