"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "navbar" | "footer" | "mobile";
  showText?: boolean;
}

export function Logo({
  className,
  variant = "navbar",
  showText = true,
}: LogoProps) {
  const [hasError, setHasError] = useState(false);

  // Logo dapat berupa /images/logo.svg atau /images/logo.png
  // Default menggunakan /images/logo.svg yang sudah disediakan
  const logoSrc = "/images/logo.svg";

  const sizeClass =
    variant === "footer"
      ? "h-10 w-10"
      : variant === "mobile"
        ? "h-10 w-10"
        : "h-11 w-11";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "relative flex shrink-0 items-center justify-center overflow-hidden rounded-lg transition-transform group-hover:scale-105",
          sizeClass,
          variant === "footer" ? "bg-transparent" : "bg-brand-900/10",
        )}
      >
        {!hasError ? (
          <Image
            src={logoSrc}
            alt="Logo PT Cakra Indo Yuma"
            width={48}
            height={48}
            className="h-full w-full object-contain p-0.5"
            onError={() => setHasError(true)}
            priority
          />
        ) : (
          <div
            className={cn(
              "flex h-full w-full items-center justify-center rounded-lg shadow-xs",
              variant === "footer"
                ? "bg-gold-500 text-brand-950"
                : "bg-brand-900 text-cream-50",
            )}
          >
            <span className="chevron-mark scale-125" aria-hidden="true" />
          </div>
        )}
      </div>

      {showText && (
        <div className="flex flex-col">
          <span
            className={cn(
              "font-display font-extrabold tracking-tight leading-tight",
              variant === "footer"
                ? "text-lg text-white"
                : variant === "mobile"
                  ? "text-base text-brand-950"
                  : "text-lg text-brand-950",
            )}
          >
            CAKRA INDO YUMA
          </span>
          <span
            className={cn(
              "text-[10px] font-semibold uppercase tracking-wider",
              variant === "footer" ? "text-gold-400" : "text-brand-600",
            )}
          >
            Supplier & Interior
          </span>
        </div>
      )}
    </div>
  );
}
