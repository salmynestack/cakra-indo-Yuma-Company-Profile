"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/company";
import { formatNumber } from "@/lib/utils";

function StatItem({
  value,
  label,
  suffix = "+",
  raw = false,
}: {
  value: number;
  label: string;
  suffix?: string;
  raw?: boolean;
}) {
  const [current, setCurrent] = useState(raw ? value : 0);
  const elementRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    // Cek preferensi reduced motion (PRD H-04)
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches || raw) {
      setCurrent(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          const duration = 1200; // ms
          const start = performance.now();

          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            // Easing out cubic
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const val = Math.floor(easedProgress * value);
            setCurrent(val);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCurrent(value);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, raw]);

  return (
    <div
      ref={elementRef}
      className="flex flex-col items-center justify-center p-6 text-center border-b sm:border-b-0 sm:border-r last:border-b-0 last:border-r-0 border-brand-800/60"
    >
      <div className="font-display text-4xl sm:text-5xl font-extrabold text-gold-400 tracking-tight">
        {raw ? current : `${formatNumber(current)}${suffix}`}
      </div>
      <p className="mt-2 text-sm sm:text-base font-medium text-cream-100 max-w-[200px]">
        {label}
      </p>
    </div>
  );
}

export function AchievementStats() {
  return (
    <section
      aria-label="Angka Pencapaian Perusahaan"
      className="bg-brand-950 py-12 lg:py-16 text-white border-b border-ink-200/60 relative overflow-hidden"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-card border border-brand-800 bg-brand-900/60 backdrop-blur-xs">
          {stats.map((stat, idx) => (
            <StatItem
              key={idx}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              raw={stat.raw}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
