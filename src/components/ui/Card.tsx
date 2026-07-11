import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
  ...rest
}: { children: ReactNode } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
