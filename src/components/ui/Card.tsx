import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export function Card({
  className,
  hoverEffect = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-card border border-ink-200 bg-white p-6 shadow-xs",
        hoverEffect &&
          "transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
