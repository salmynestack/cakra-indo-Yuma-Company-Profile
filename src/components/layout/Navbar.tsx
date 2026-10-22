"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { company } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/layanan", label: "Layanan" },
  { href: "/project", label: "Project" },
  { href: "/kontak", label: "Kontak" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  // Kunci scroll body saat menu mobile terbuka (PRD G-02)
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  // Tutup drawer saat rute berpindah
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle tombol Escape & focus trap untuk drawer mobile (PRD G-02)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        toggleBtnRef.current?.focus();
        return;
      }

      if (e.key === "Tab" && drawerRef.current) {
        const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
        );
        const firstEl = focusableElements[0];
        const lastEl = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstEl) {
            e.preventDefault();
            lastEl?.focus();
          }
        } else {
          if (document.activeElement === lastEl) {
            e.preventDefault();
            firstEl?.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-ink-200/80 bg-white/95 backdrop-blur-md transition-shadow">
      <div className="container-site flex h-20 items-center justify-between gap-4">
        {/* Logo (PRD G-01) */}
        <Link
          href="/"
          className="group flex items-center gap-3 focus-visible:outline-brand-600 rounded-sm"
          aria-label={`${company.name} - Beranda`}
        >
          {/* Chevron mark logo */}
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-900 text-cream-50 shadow-xs transition-transform group-hover:scale-105">
            <span className="chevron-mark scale-125" aria-hidden="true" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-extrabold tracking-tight text-brand-950 leading-tight">
              CAKRA INDO YUMA
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-600">
              Supplier & Interior
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Navigasi Utama"
          className="hidden lg:flex lg:items-center lg:gap-1"
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-semibold transition-colors rounded-control",
                  isActive
                    ? "text-brand-700 bg-brand-50"
                    : "text-ink-700 hover:text-brand-700 hover:bg-cream-100/60",
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute bottom-1 left-4 right-4 h-0.5 bg-brand-600 rounded-full"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Button
            href="/kontak"
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Hubungi Kami
          </Button>

          {/* Hamburger Button (PRD G-02) */}
          <button
            ref={toggleBtnRef}
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            className="flex h-11 w-11 items-center justify-center rounded-control border border-ink-300 text-ink-800 transition-colors hover:bg-cream-100 lg:hidden focus-visible:outline-brand-600"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer (PRD G-02) */}
      {isOpen && (
        <div
          className="fixed inset-0 top-20 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu Navigasi Mobile"
          id="mobile-navigation-drawer"
        >
          {/* Backdrop (light-dismiss on click outside) */}
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 top-20 bg-ink-900/60 backdrop-blur-xs transition-opacity"
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <div
            ref={drawerRef}
            className="relative ml-auto flex h-[calc(100vh-5rem)] w-full max-w-sm flex-col justify-between overflow-y-auto bg-white p-6 shadow-xl border-l border-ink-200"
          >
            <div className="space-y-6">
              <div className="border-b border-ink-200 pb-4">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-700">
                  Navigasi Situs
                </p>
                <p className="text-sm text-ink-500">{company.tagline}</p>
              </div>

              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 text-base font-semibold rounded-control transition-colors min-h-[44px]",
                        isActive
                          ? "bg-brand-50 text-brand-700 border-l-4 border-brand-600"
                          : "text-ink-800 hover:bg-cream-100 hover:text-brand-700",
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <span>{link.label}</span>
                      {isActive && (
                        <span className="chevron-mark" aria-hidden="true" />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="space-y-4 pt-6 border-t border-ink-200">
              <Button
                href="/kontak"
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                Hubungi Kami
              </Button>
              <div className="text-xs text-ink-500 text-center">
                <p>{company.phoneDisplay}</p>
                <p>{company.email}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
