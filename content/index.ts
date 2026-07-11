/**
 * Content adapter — file-based data source.
 *
 * This module is the single boundary between "where content lives" and
 * "how the app consumes it". It currently reads JSON files from disk using
 * Node's `fs` module (safe in Server Components / route handlers only).
 *
 * When migrating to Payload CMS, only the bodies of the functions below
 * need to change (e.g. to call the Payload REST/GraphQL API). Callers in
 * `src/lib/content.ts` and page components should not need to change.
 * See docs/payload-migration.md for the migration plan.
 */
import fs from "node:fs";
import path from "node:path";
import type {
  EventItem,
  KnowledgeResource,
  NewsItem,
  Opportunity,
  Partner,
  ResearchEntry,
  TeamMember,
} from "@/types/content";

const CONTENT_ROOT = path.join(process.cwd(), "content");

function readJsonDir<T>(dirName: string): T[] {
  const dirPath = path.join(CONTENT_ROOT, dirName);
  if (!fs.existsSync(dirPath)) return [];
  const files = fs.readdirSync(dirPath).filter((f) => f.endsWith(".json"));
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dirPath, file), "utf-8");
    return JSON.parse(raw) as T;
  });
}

export function readNews(): NewsItem[] {
  return readJsonDir<NewsItem>("news");
}

export function readEvents(): EventItem[] {
  return readJsonDir<EventItem>("events");
}

export function readTeam(): TeamMember[] {
  return readJsonDir<TeamMember>("team");
}

export function readResearchEntries(): ResearchEntry[] {
  return readJsonDir<ResearchEntry>("research");
}

export function readOpportunities(): Opportunity[] {
  return readJsonDir<Opportunity>("opportunities");
}

export function readKnowledgeResources(): KnowledgeResource[] {
  return readJsonDir<KnowledgeResource>("knowledge-hub");
}

export function readPartners(): Partner[] {
  return readJsonDir<Partner>("partners");
}

export type {
  EventItem,
  KnowledgeResource,
  NewsItem,
  Opportunity,
  Partner,
  ResearchEntry,
  TeamMember,
};
