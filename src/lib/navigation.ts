export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

/** Primary site navigation structure, shared by Header and MobileMenu. */
export const primaryNav: NavItem[] = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Overview", href: "/about" },
      { label: "Vision, Mission & Values", href: "/about/vision-mission" },
      { label: "History & Rationale", href: "/about/history" },
      { label: "Organisational Structure", href: "/about/organisation" },
      { label: "Governance", href: "/about/governance" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "People", href: "/about/team" },
      { label: "Strategic Roadmap", href: "/about/strategic-roadmap" },
    ],
  },
  {
    label: "Research",
    href: "/research",
    children: [
      { label: "Research Overview", href: "/research" },
      { label: "Integrated Framework", href: "/research/integrated-framework" },
      { label: "Work Packages", href: "/research/work-packages" },
      { label: "Research Projects", href: "/research/projects" },
      { label: "Laboratories", href: "/research/laboratories" },
      { label: "Themes", href: "/research/themes" },
      { label: "Field Sites", href: "/research/field-sites" },
      { label: "Datasets", href: "/research/datasets" },
      { label: "Scientific Software", href: "/research/scientific-software" },
      { label: "Collaboration", href: "/research/collaboration" },
    ],
  },
  {
    label: "Study",
    href: "/study",
    children: [
      { label: "Academic Overview", href: "/study" },
      {
        label: "MPhil Groundwater Intelligence Track",
        href: "/study/mphil-groundwater-intelligence",
      },
      {
        label: "Programme Structure",
        href: "/study/programme-structure",
      },
      {
        label: "Modules",
        href: "/study/modules",
      },
      {
        label: "Groundwater Intelligence Studio",
        href: "/study/groundwater-intelligence-studio",
      },
      { label: "Admissions", href: "/study/admissions" },
      { label: "Fees & Funding", href: "/study/fees-funding" },
      { label: "Academic Calendar", href: "/study/academic-calendar" },
    ],
  },
  {
    label: "Platform",
    href: "/platform",
    children: [
      { label: "Data Portal", href: "/platform/data-portal" },
      { label: "Modelling Engine", href: "/platform/modelling-engine" },
      { label: "AI Prediction", href: "/platform/ai-prediction" },
      { label: "Digital Twin", href: "/platform/digital-twin" },
      { label: "Monitoring & IoT", href: "/platform/monitoring-iot" },
      { label: "Dashboard", href: "/platform/dashboard" },
      { label: "API Docs", href: "/platform/api-docs" },
    ],
  },
  {
    label: "Innovation",
    href: "/innovation",
    children: [
      { label: "Technology Transfer", href: "/innovation/technology-transfer" },
      { label: "Prototypes", href: "/innovation/prototypes" },
      { label: "Startups", href: "/innovation/startups" },
      { label: "Industry", href: "/innovation/industry" },
      { label: "Government & Policy", href: "/innovation/government-policy" },
      { label: "Consultancy", href: "/innovation/consultancy" },
      { label: "SDG Alignment", href: "/innovation/sdg-alignment" },
      { label: "Impact Stories", href: "/innovation/impact-stories" },
    ],
  },
  {
    label: "Partnerships",
    href: "/partnerships",
    children: [
      { label: "Categories", href: "/partnerships/categories" },
      { label: "Become a Partner", href: "/partnerships/become-a-partner" },
      { label: "Enquiry", href: "/partnerships/enquiry" },
    ],
  },
  {
    label: "Knowledge Hub",
    href: "/knowledge-hub",
    children: [
      { label: "News", href: "/news" },
      { label: "Events", href: "/events" },
      { label: "Publications", href: "/knowledge-hub/publications" },
      { label: "Technical Reports", href: "/knowledge-hub/reports" },
      { label: "Policy Briefs", href: "/knowledge-hub/policy-briefs" },
      { label: "Educational Resources", href: "/knowledge-hub/educational-resources" },
      { label: "Media Gallery", href: "/knowledge-hub/media-gallery" },
      { label: "Webinars", href: "/knowledge-hub/webinars" },
      { label: "Newsletter", href: "/knowledge-hub/newsletter" },
      { label: "Downloads", href: "/knowledge-hub/downloads" },
    ],
  },
  {
    label: "Opportunities",
    href: "/opportunities",
  },
];

export const utilityNav: NavItem[] = [
  { label: "Search", href: "/knowledge-hub" },
  { label: "Contact", href: "/contact" },
  { label: "Portal Sign In", href: "/auth/signin" },
];

export const footerLinks: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Study", href: "/study" },
  { label: "Platform", href: "/platform" },
  { label: "Innovation", href: "/innovation" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Knowledge Hub", href: "/knowledge-hub" },
  { label: "Opportunities", href: "/opportunities" },
  { label: "Contact", href: "/contact" },
];
