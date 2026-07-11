"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { heroImageByType, heroTypeByPath, type HeroType } from "@/lib/siteConfig";
import InstitutionalHero from "@/components/hero/InstitutionalHero";
import ResearchHero from "@/components/hero/ResearchHero";
import AcademicHero from "@/components/hero/AcademicHero";
import ModuleHero from "@/components/hero/ModuleHero";
import PlatformHero from "@/components/hero/PlatformHero";

/** Standard hero banner placed at the top of every page. */
export default function PageHero({
  title,
  description,
  eyebrow,
  children,
  heroType,
}: {
  title: string;
  description?: string;
  eyebrow?: string;
  children?: ReactNode;
  heroType?: HeroType;
}) {
  const pathname = usePathname() ?? "/";
  const resolvedType = heroType ?? heroTypeByPath(pathname);
  const backgroundImage = heroImageByType(resolvedType);

  const heroProps = {
    title,
    description,
    eyebrow,
    imageSrc: backgroundImage,
    heroType: resolvedType,
    children,
  };

  if (resolvedType === "B") return <ResearchHero {...heroProps} />;
  if (resolvedType === "C") return <AcademicHero {...heroProps} />;
  if (resolvedType === "D") return <ModuleHero {...heroProps} />;
  if (resolvedType === "E") return <PlatformHero {...heroProps} />;
  if (resolvedType === "A") return <InstitutionalHero {...heroProps} />;

  return <InstitutionalHero {...heroProps} />;
}
