import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "brand" | "gold" | "neutral" | "success" | "outline";
  size?: "sm" | "md";
}

export function Badge({
  className,
  variant = "brand",
  size = "md",
  children,
  ...props
}: BadgeProps) {
  const base =
    "inline-flex items-center gap-1.5 font-ui font-bold rounded-full select-none";

  const variants = {
    brand: "bg-brand-100 text-brand-900 border border-brand-200",
    gold: "bg-gold-100 text-gold-700 border border-gold-300",
    neutral: "bg-ink-100 text-ink-700 border border-ink-200",
    success: "bg-success-50 text-success-600 border border-emerald-200",
    outline: "bg-transparent text-ink-700 border border-ink-300",
  };

  const sizes = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-xs sm:text-sm",
  };

  return (
    <span
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </span>
  );
}
