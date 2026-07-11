import type { ReactNode } from "react";
import type { HeroType } from "@/lib/siteConfig";

export interface HeroCta {
  label: string;
  href: string;
}

export interface HeroBaseProps {
  title: string;
  description?: string;
  eyebrow?: string;
  imageSrc: string;
  heroType: HeroType;
  minHeightClass?: string;
  children?: ReactNode;
  ctas?: HeroCta[];
  breadcrumb?: ReactNode;
  factCards?: ReactNode;
  align?: "left" | "center";
}
