"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { heroImageByType, heroTypeByPath, type HeroType } from "@/lib/siteConfig";

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

  return (
    <section className="relative min-h-[380px] overflow-hidden text-white sm:min-h-[420px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#03142a]/72 via-[#0b2a4a]/58 to-[#0b2a4a]/38" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(41,164,199,0.16),transparent_48%)]" aria-hidden />

      <div className="relative mx-auto flex min-h-[380px] max-w-[1240px] items-center px-4 py-10 sm:min-h-[420px] sm:px-6 lg:px-8">
        <div className="max-w-[70ch]">
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
        {description && (
          <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-slate-100 sm:text-lg">
            {description}
          </p>
        )}
        {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
