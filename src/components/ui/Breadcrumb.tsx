import Link from "next/link";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-xs sm:text-sm", className)}>
      <ol className="flex flex-wrap items-center gap-1.5 text-ink-500">
        <li>
          <Link
            href="/"
            className="hover:text-brand-700 transition-colors focus-visible:outline-brand-600 rounded-xs"
          >
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-1.5">
              <span className="text-ink-400 select-none" aria-hidden="true">
                /
              </span>
              {isLast || !item.href ? (
                <span
                  aria-current="page"
                  className="font-medium text-brand-900 truncate max-w-[220px] sm:max-w-none"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-brand-700 transition-colors focus-visible:outline-brand-600 rounded-xs"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
