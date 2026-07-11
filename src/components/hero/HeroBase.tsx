import Link from "next/link";
import type { HeroBaseProps } from "./hero.types";

export default function HeroBase({
  title,
  description,
  eyebrow,
  imageSrc,
  minHeightClass = "min-h-[380px] sm:min-h-[420px]",
  children,
  ctas,
  breadcrumb,
  factCards,
  align = "left",
}: HeroBaseProps) {
  return (
    <section className={`relative overflow-hidden text-white ${minHeightClass}`}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#03142a]/72 via-[#0b2a4a]/58 to-[#0b2a4a]/38" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(41,164,199,0.16),transparent_48%)]" aria-hidden />

      <div className={`relative mx-auto flex max-w-[1240px] items-center px-4 py-10 sm:px-6 lg:px-8 ${minHeightClass}`}>
        <div className={align === "center" ? "mx-auto max-w-[70ch] text-center" : "max-w-[70ch]"}>
          {breadcrumb}
          {eyebrow ? (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">{eyebrow}</p>
          ) : null}
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
          {description ? (
            <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-slate-100 sm:text-lg">{description}</p>
          ) : null}
          {ctas && ctas.length > 0 ? (
            <div className="mt-7 flex flex-wrap gap-3">
              {ctas.map((cta) => (
                <Link
                  key={cta.href + cta.label}
                  href={cta.href}
                  className="rounded-md border border-white/35 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          ) : null}
          {factCards}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
