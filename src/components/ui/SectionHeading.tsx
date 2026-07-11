import type { ReactNode } from "react";

export default function SectionHeading({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        <h2 className="text-2xl font-bold text-gia-blue sm:text-3xl">{title}</h2>
        {description ? <p className="mt-2 max-w-[70ch] text-slate-600">{description}</p> : null}
      </div>
      {action}
    </div>
  );
}
