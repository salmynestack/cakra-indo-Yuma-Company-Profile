"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { company, fullAddress } from "@/data/company";
import { services } from "@/data/services";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-ink-200 bg-brand-950 text-cream-50">
      <div className="container-site py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Kolom 1: Profil ringkas & Logo */}
          <div className="space-y-4">
            <Logo variant="footer" />
            <p className="text-sm leading-relaxed text-ink-300">
              {company.description}
            </p>
            <p className="text-xs text-gold-400 font-medium">
              NIB: 0220208341324 (Berdiri sejak {company.foundedLabel})
            </p>
          </div>

          {/* Kolom 2: Menu Utama */}
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-wider text-gold-400">
              Navigasi
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-ink-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/tentang-kami"
                  className="text-ink-300 hover:text-white transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan"
                  className="text-ink-300 hover:text-white transition-colors"
                >
                  Katalog Layanan
                </Link>
              </li>
              <li>
                <Link
                  href="/project"
                  className="text-ink-300 hover:text-white transition-colors"
                >
                  Portofolio Project
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="text-ink-300 hover:text-white transition-colors"
                >
                  Hubungi Kontak
                </Link>
              </li>
              <li>
                <Link
                  href="/kebijakan-privasi"
                  className="text-ink-300 hover:text-white transition-colors"
                >
                  Kebijakan Privasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Layanan Unggulan */}
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-wider text-gold-400">
              Lini Layanan
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/layanan#${service.slug}`}
                    className="text-ink-300 hover:text-white transition-colors"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 4: Kontak Resmi */}
          <div className="space-y-3">
            <p className="font-display text-sm font-bold uppercase tracking-wider text-gold-400">
              Kantor & Kontak
            </p>
            <address className="not-italic text-sm text-ink-300 space-y-2.5 leading-relaxed">
              <p>{fullAddress}</p>
              <p>
                <span className="font-semibold text-white">Telepon: </span>
                <a
                  href={`tel:${company.phoneHref}`}
                  className="text-gold-300 hover:underline"
                >
                  {company.phoneDisplay}
                </a>
              </p>
              <p>
                <span className="font-semibold text-white">Email: </span>
                <a
                  href={`mailto:${company.email}`}
                  className="text-gold-300 hover:underline break-all"
                >
                  {company.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-brand-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-400">
          <p>
            &copy; {currentYear} {company.name}. Seluruh hak cipta dilindungi.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/kebijakan-privasi"
              className="hover:text-white transition-colors"
            >
              Kebijakan Privasi
            </Link>
            <Link href="/kontak" className="hover:text-white transition-colors">
              Pusat Bantuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
