import type { ReactNode } from "react";

/** Standard hero banner placed at the top of every page. */
export default function PageHero({
  title,
  description,
  eyebrow,
  children,
}: {
  title: string;
  description?: string;
  eyebrow?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-gia-blue py-16 text-white sm:py-20">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        {eyebrow && (
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-gia-sand">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">{title}</h1>
        {description && (
          <p className="mx-auto mt-4 max-w-3xl text-base text-gia-light sm:text-lg">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
