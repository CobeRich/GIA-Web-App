/**
 * Content service layer (adapter boundary).
 *
 * Pages and components should import from here rather than from
 * `content/index.ts` directly. This indirection means that swapping the
 * underlying data source (local JSON -> Payload CMS) only requires
 * updating this file. See docs/payload-migration.md.
 */
import {
  readEvents,
  readKnowledgeResources,
  readNews,
  readOpportunities,
  readPartners,
  readResearchEntries,
  readTeam,
} from "../../content";
import type {
  EventItem,
  KnowledgeResource,
  KnowledgeResourceType,
  NewsItem,
  Opportunity,
  Partner,
  ResearchEntry,
  ResearchEntryType,
  TeamCategory,
  TeamMember,
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
