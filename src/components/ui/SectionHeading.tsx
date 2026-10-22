import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "left",
  as: Tag = "h2",
  className,
  ...props
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "max-w-3xl",
        isCenter ? "mx-auto text-center" : "text-left",
        className,
      )}
      {...props}
    >
      {kicker && (
        <div
          className={cn(
            "mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-700",
            isCenter && "justify-center",
          )}
        >
          <span className="chevron-mark" aria-hidden="true" />
          <span>{kicker}</span>
        </div>
      )}

      <Tag
        className={cn(
          "font-display font-extrabold text-brand-950",
          Tag === "h1"
            ? "text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            : Tag === "h2"
              ? "text-2xl sm:text-3xl md:text-4xl"
              : "text-xl sm:text-2xl",
        )}
      >
        {title}
      </Tag>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-ink-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
