/**
 * Shared content-domain types.
 *
 * These interfaces describe the shape of content consumed by the site
 * regardless of where it is stored. Today the data lives in local JSON
 * files under /content. In the future, `src/lib/content.ts` can be
 * re-implemented to fetch the same shapes from Payload CMS without any
 * changes required in page/component code. See docs/payload-migration.md.
 */

export interface Image {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface NewsItem {
  slug: string;
  title: string;
  summary: string;
  body: string;
  date: string; // ISO date
  category: string;
  tags: string[];
  image?: Image;
  author?: string;
}

export interface EventItem {
  slug: string;
  title: string;
  summary: string;
  body: string;
  startDate: string; // ISO date
  endDate?: string;
  location: string;
  isVirtual: boolean;
  category: string;
  tags: string[];
  image?: Image;
  registrationOpen: boolean;
}

export type TeamCategory = "leadership" | "researcher" | "staff" | "governance";

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  category: TeamCategory;
  bio: string;
  photo?: Image;
  email?: string;
  order?: number;
}

export type ResearchEntryType = "laboratory" | "theme" | "field-site";

export interface ResearchEntry {
  slug: string;
  type: ResearchEntryType;
  title: string;
  summary: string;
  body: string;
  tags: string[];
  image?: Image;
  location?: string;
  leadResearcher?: string;
}

export interface Opportunity {
  slug: string;
  category: string; // e.g. "jobs", "scholarships", "fellowships", "tenders", "internships"
  title: string;
  summary: string;
  body: string;
  deadline?: string;
  location?: string;
  tags: string[];
  applyUrl?: string;
}

export type KnowledgeResourceType =
  | "report"
  | "policy-brief"
  | "educational-resource"
  | "media"
  | "webinar"
  | "newsletter"
  | "download";

export interface KnowledgeResource {
  slug: string;
  type: KnowledgeResourceType;
  title: string;
  summary: string;
  date: string;
  tags: string[];
  fileUrl?: string;
  externalUrl?: string;
  image?: Image;
}

export interface Partner {
  slug: string;
  name: string;
  category: string;
  logo?: Image;
  website?: string;
  summary?: string;
  location?: string;
  collaborationArea?: string;
  activeProject?: string;
  relatedWp?: string;
  outcomes?: string[];
  news?: string[];
}

export interface RelatedLink {
  slug: string;
  title: string;
}

export interface WorkPackageTask {
  title: string;
  stage: string;
  summary: string;
}

export interface Deliverable {
  title: string;
  timeline: string;
}

export interface Milestone {
  name: string;
  target: string;
}

export interface WorkPackage {
  slug: string;
  code: "WP1" | "WP2" | "WP3" | "WP4" | "WP5" | "WP6";
  title: string;
  shortTitle: string;
  stage: string;
  objective: string;
  questions: string[];
  tasks: WorkPackageTask[];
  inputs: RelatedLink[];
  outputs: RelatedLink[];
  deliverables: Deliverable[];
  milestones: Milestone[];
  relatedModules: string[];
  relatedLaboratories: string[];
  relatedProjects: string[];
  relatedPublications: string[];
  relatedDatasets: string[];
  relatedSoftware: string[];
}

export interface ModuleContent {
  slug: string;
  code: string;
  title: string;
  semester: string;
  credits: number;
  summary: string;
}

export interface ResearchProjectContent {
  slug: string;
  title: string;
  summary: string;
}

export interface LaboratoryContent {
  slug: string;
  title: string;
  summary: string;
}

export interface PublicationContent {
  slug: string;
  title: string;
  summary: string;
  date: string;
}

export interface DatasetContent {
  slug: string;
  title: string;
  summary: string;
}

export interface SoftwareContent {
  slug: string;
  title: string;
  summary: string;
}

export interface FieldSiteContent {
  slug: string;
  title: string;
  summary: string;
}

export interface PersonContent {
  slug: string;
  name: string;
  role: string;
  summary: string;
}
