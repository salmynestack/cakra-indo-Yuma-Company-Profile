"use client";

import { useEffect, useState } from "react";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export function ServiceSubNav() {
  const [activeSlug, setActiveSlug] = useState<string>(services[0]?.slug ?? "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (let i = services.length - 1; i >= 0; i--) {
        const service = services[i];
        const el = document.getElementById(service.slug);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSlug(service.slug);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label="Sub-navigasi Layanan"
      className="sticky top-20 z-30 border-b border-ink-200 bg-white/95 backdrop-blur-md"
    >
      <div className="container-site overflow-x-auto py-3 no-scrollbar">
        <ul className="flex items-center gap-2 min-w-max">
          {services.map((service) => {
            const isActive = activeSlug === service.slug;

            return (
              <li key={service.slug}>
                <a
                  href={`#${service.slug}`}
                  onClick={() => setActiveSlug(service.slug)}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-colors min-h-[40px]",
                    isActive
                      ? "bg-brand-600 text-cream-50 shadow-xs"
                      : "bg-cream-100 text-ink-700 hover:bg-brand-50 hover:text-brand-800",
                  )}
                  aria-current={isActive ? "location" : undefined}
                >
                  <span>{service.shortTitle}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
