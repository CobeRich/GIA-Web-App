import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "blue" | "teal" | "earth" | "sand" | "neutral";

const toneClasses: Record<Tone, string> = {
  blue: "bg-gia-blue/10 text-gia-blue",
  teal: "bg-gia-teal/10 text-gia-teal",
  earth: "bg-gia-earth/10 text-gia-earth",
  sand: "bg-gia-sand/40 text-gia-earth",
  neutral: "bg-gray-100 text-gray-700",
};

export default function Badge({
  children,
  tone = "blue",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        toneClasses[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
