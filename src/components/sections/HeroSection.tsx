import Image from "next/image";
import Button from "@/components/ui/Button";
import { assetPaths, heroImageByType, institution, type HeroType } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";

interface HeroAction {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
}

interface HeroSectionProps {
  type?: HeroType;
  eyebrow?: string;
  title?: string;
  summary?: string;
  primaryCta?: HeroAction;
  secondaryCta?: HeroAction;
  className?: string;
}

const heroPresets: Record<
  HeroType,
  {
    eyebrow: string;
    title: string;
    summary: string;
    primaryCta: HeroAction;
    secondaryCta: HeroAction;
    metricLabel: string;
    metricValue: string;
  }
> = {
  A: {
    eyebrow: institution.fullName,
    title: "Advancing groundwater\nintelligence for safe and\nsustainable water systems",
    summary:
      "We combine environmental science, applied mathematics, scientific computing, artificial intelligence, and field observation to strengthen potable-water security across Africa.",
    primaryCta: { label: "Explore the Research Framework", href: "/research", variant: "secondary" },
    secondaryCta: { label: "Study with GIA", href: "/about", variant: "outline" },
    metricLabel: "Research Work Packages",
    metricValue: "6",
  },
  B: {
    eyebrow: "WORK PACKAGE 2 - CORE PHYSICS",
    title: "Multi-continuum vadose-zone flow",
    summary:
      "Developing a scalable mathematical framework representing matrix flow, macropores, fractures, preferential pathways, cross-continuum exchange, and non-Darcian dynamics.",
    primaryCta: { label: "Explore Methods", href: "/research", variant: "secondary" },
    secondaryCta: { label: "View Outputs", href: assetPaths.docTemplate, variant: "outline" },
    metricLabel: "Stage",
    metricValue: "Core Physics",
  },
  C: {
    eyebrow: "MPHIL SCIENTIFIC COMPUTING & INDUSTRIAL MODELING",
    title: "Groundwater Intelligence & Computational Environmental Systems",
    summary:
      "A two-year research-intensive track integrating environmental science, applied mathematics, scientific computing, artificial intelligence, monitoring, and decision support.",
    primaryCta: { label: "Apply to the Programme", href: "/forms/admissions", variant: "secondary" },
    secondaryCta: { label: "Download Handbook", href: assetPaths.docTemplate, variant: "outline" },
    metricLabel: "Duration",
    metricValue: "24 Months",
  },
  D: {
    eyebrow: "GIA 608",
    title: "Non-Darcian Flow, Volume Averaging & Multi-Continuum Theory",
    summary:
      "Develop advanced mathematical and computational techniques to represent complex flow in heterogeneous porous media.",
    primaryCta: { label: "Module Overview", href: "/about/history", variant: "secondary" },
    secondaryCta: { label: "Module Guide", href: assetPaths.docTemplate, variant: "outline" },
    metricLabel: "Module Duration",
    metricValue: "8 Weeks",
  },
  E: {
    eyebrow: "GROUNDWATER INTELLIGENCE PLATFORM",
    title: "Explore. Model. Predict. Decide.",
    summary:
      "Access trusted data, run simulations, inspect forecasts, compare scenarios, and translate groundwater evidence into management decisions.",
    primaryCta: { label: "Launch Demonstration", href: "/platform", variant: "secondary" },
    secondaryCta: { label: "View Technical Architecture", href: assetPaths.docTemplate, variant: "outline" },
    metricLabel: "Live Data Streams",
    metricValue: "186",
  },
};

export default function HeroSection({
  type = "A",
  eyebrow,
  title,
  summary,
  primaryCta,
  secondaryCta,
  className,
}: HeroSectionProps) {
  const preset = heroPresets[type];
  const backgroundImage = heroImageByType(type);
  const isDefaultTypeAHeading = type === "A" && !title;

  const copy = {
    eyebrow: eyebrow ?? preset.eyebrow,
    title: title ?? preset.title,
    summary: summary ?? preset.summary,
    primaryCta: primaryCta ?? preset.primaryCta,
    secondaryCta: secondaryCta ?? preset.secondaryCta,
  };

  return (
    <section className={cn("relative overflow-hidden text-white", className)}>
      <Image
        src={backgroundImage}
        alt={`${institution.academyName} hero banner type ${type}`}
        fill
        className="object-cover"
        priority={type === "A"}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#03142a]/74 via-[#0b2a4a]/52 to-[#0b2a4a]/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(37,150,190,0.2),transparent_46%)]" />

      <div className="relative mx-auto max-w-[1240px] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="max-w-[58ch]">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-200">
            {copy.eyebrow}
          </p>
          {isDefaultTypeAHeading ? (
            <h1 className="max-w-[32ch] text-4xl font-bold leading-[0.98] sm:text-5xl lg:text-6xl">
              <span className="block lg:whitespace-nowrap">Advancing groundwater</span>
              <span className="block lg:whitespace-nowrap">intelligence for safe and</span>
              <span className="block lg:whitespace-nowrap">sustainable water systems</span>
            </h1>
          ) : (
            <h1 className="max-w-[32ch] whitespace-pre-line text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {copy.title}
            </h1>
          )}
          <p className="mt-4 max-w-[54ch] text-[1rem] leading-relaxed text-slate-100">
            {copy.summary}
          </p>
          <div className="mt-6 flex items-center gap-3 sm:flex-nowrap">
            <Button href={copy.primaryCta.href} variant={copy.primaryCta.variant ?? "secondary"} size="md">
              {copy.primaryCta.label}
            </Button>
            <Button
              href={copy.secondaryCta.href}
              variant={copy.secondaryCta.variant ?? "outline"}
              size="md"
              className="border-slate-200/70 bg-white/10 text-white hover:bg-white/20"
            >
              {copy.secondaryCta.label}
            </Button>
          </div>
          <div className="mt-5 inline-block rounded-xl border border-white/20 bg-[#06203a]/80 px-4 py-2.5 backdrop-blur">
            <p className="text-[0.65rem] uppercase tracking-[0.15em] text-cyan-200">
              {preset.metricLabel}
            </p>
            <p className="mt-1 text-2xl font-bold text-white">{preset.metricValue}</p>
          </div>
          <p className="mt-4 max-w-[32ch] text-xs text-slate-200">
            Field observation to model-driven decision support
          </p>
        </div>
      </div>
    </section>
  );
}
