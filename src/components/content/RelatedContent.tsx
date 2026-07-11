import Link from "next/link";
import Card from "@/components/ui/Card";

interface RelatedContentProps {
  workPackages?: string[];
  laboratories?: string[];
  modules?: string[];
  projects?: string[];
  datasets?: string[];
  software?: string[];
  publications?: string[];
}

function toTitleCaseFromSlug(value: string) {
  return value
    .split("-")
    .map((part) => (part.length > 0 ? part[0].toUpperCase() + part.slice(1) : part))
    .join(" ");
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

const wpPathMap: Record<string, string> = {
  wp1: "/research/work-packages/wp1-climate-surface-forcing",
  wp2: "/research/work-packages/wp2-vadose-zone-flow",
  wp3: "/research/work-packages/wp3-contaminant-transport",
  wp4: "/research/work-packages/wp4-aquifer-systems",
  wp5: "/research/work-packages/wp5-human-water-systems",
  wp6: "/research/work-packages/wp6-potable-water-assessment",
  "wp1-climate-surface-forcing": "/research/work-packages/wp1-climate-surface-forcing",
  "wp2-vadose-zone-flow": "/research/work-packages/wp2-vadose-zone-flow",
  "wp3-contaminant-transport": "/research/work-packages/wp3-contaminant-transport",
  "wp4-aquifer-systems": "/research/work-packages/wp4-aquifer-systems",
  "wp5-human-water-systems": "/research/work-packages/wp5-human-water-systems",
  "wp6-potable-water-assessment": "/research/work-packages/wp6-potable-water-assessment",
};

const softwareLabelMap: Record<string, string> = {
  "gia-multicontinuum-solver": "GIA Multi-Continuum Solver",
};

function renderLinks(items: { href: string; label: string }[]) {
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {items.map((item) => (
        <Link
          key={`${item.href}-${item.label}`}
          href={item.href}
          className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-gia-blue hover:border-gia-teal hover:text-gia-teal"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default function RelatedContent({
  workPackages,
  laboratories,
  modules,
  projects,
  datasets,
  software,
  publications,
}: RelatedContentProps) {
  const groups = [
    {
      title: "Related work packages",
      items: (workPackages ?? []).map((value) => {
        const key = value.toLowerCase();
        return {
          href: wpPathMap[key] ?? "/research/work-packages",
          label: key.toUpperCase(),
        };
      }),
    },
    {
      title: "Related modules",
      items: (modules ?? []).map((value) => ({
        href: `/study/modules/${value.toLowerCase()}`,
        label: value.toUpperCase().replace("-", " "),
      })),
    },
    {
      title: "Related laboratory",
      items: (laboratories ?? []).map((value) => ({
        href: `/research/laboratories/${slugify(value)}`,
        label: value,
      })),
    },
    {
      title: "Related projects",
      items: (projects ?? []).map((value) => ({
        href: `/research/projects/${value}`,
        label: toTitleCaseFromSlug(value),
      })),
    },
    {
      title: "Related datasets",
      items: (datasets ?? []).map((value) => ({
        href: `/research/datasets/${value}`,
        label: toTitleCaseFromSlug(value),
      })),
    },
    {
      title: "Related software",
      items: (software ?? []).map((value) => ({
        href: `/research/scientific-software/${value}`,
        label: softwareLabelMap[value] ?? toTitleCaseFromSlug(value),
      })),
    },
    {
      title: "Related publications",
      items: (publications ?? []).map((value) => ({
        href: "/research/publications",
        label: value,
      })),
    },
  ].filter((group) => group.items.length > 0);

  if (groups.length === 0) return null;

  return (
    <Card className="mt-8 border-slate-200 bg-slate-50">
      <h2 className="text-xl font-semibold text-gia-blue">Related Content</h2>
      <div className="mt-4 space-y-4">
        {groups.map((group) => (
          <div key={group.title}>
            <p className="text-sm font-semibold text-gia-blue">{group.title}</p>
            {renderLinks(group.items)}
          </div>
        ))}
      </div>
    </Card>
  );
}
