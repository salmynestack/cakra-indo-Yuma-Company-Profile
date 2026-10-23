"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { Project, ServiceSlug } from "@/types";

const ITEMS_PER_PAGE = 9;

type SelectedCategory = ServiceSlug | "all";

export function ProjectListClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Ambil state dari URL query params (PRD P-02)
  const categoryParam = searchParams.get("kategori");
  const currentCategory: SelectedCategory =
    services.some((s) => s.slug === categoryParam)
      ? (categoryParam as ServiceSlug)
      : "all";
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<"default" | "az" | "za" | "terbaru">("default");

  // Handler ubah kategori
  const handleCategoryChange = (category: string) => {
    setCurrentPage(1);
    const params = new URLSearchParams(searchParams.toString());
    if (category === "all") {
      params.delete("kategori");
    } else {
      params.set("kategori", category);
    }
    router.replace(`/project${params.toString() ? `?${params.toString()}` : ""}`, {
      scroll: false,
    });
  };

  // Reset semua filter (PRD P-03)
  const handleResetFilter = () => {
    setSearchTerm("");
    setCurrentPage(1);
    setSortBy("default");
    router.replace("/project", { scroll: false });
  };

  // Filter & Search Logic (PRD P-02 & P-03)
  const filteredProjects = useMemo(() => {
    let result = [...projects];

    // Filter kategori
    if (currentCategory !== "all") {
      result = result.filter((p) => p.categories.includes(currentCategory));
    }

    // Filter pencarian
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.client.toLowerCase().includes(q) ||
          (p.location && p.location.toLowerCase().includes(q)) ||
          (p.activityType && p.activityType.toLowerCase().includes(q)) ||
          p.summary.toLowerCase().includes(q),
      );
    }

    // Sort
    if (sortBy === "az") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "za") {
      result.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortBy === "terbaru") {
      result.sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
    }

    return result;
  }, [currentCategory, searchTerm, sortBy]);

  // Pagination (PRD P-05)
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProjects.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProjects, currentPage]);

  const getCategoryTitle = (catSlug: string) => {
    return services.find((s) => s.slug === catSlug)?.shortTitle ?? catSlug;
  };

  return (
    <div className="space-y-8">
      {/* Bar Filter Kategori & Pencarian (PRD P-02 & P-03 & P-04) */}
      <div className="rounded-card border border-ink-200 bg-white p-5 shadow-xs space-y-4">
        {/* Kategori Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-ink-100 pb-4">
          <button
            type="button"
            onClick={() => handleCategoryChange("all")}
            className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-colors min-h-[40px] ${
              currentCategory === "all"
                ? "bg-brand-600 text-cream-50 shadow-xs"
                : "bg-cream-100 text-ink-700 hover:bg-cream-200"
            }`}
          >
            Semua ({projects.length})
          </button>

          {services.map((cat) => {
            const count = projects.filter((p) =>
              p.categories.includes(cat.slug),
            ).length;
            const isActive = currentCategory === cat.slug;

            return (
              <button
                key={cat.slug}
                type="button"
                onClick={() => handleCategoryChange(cat.slug)}
                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-colors min-h-[40px] ${
                  isActive
                    ? "bg-brand-600 text-cream-50 shadow-xs"
                    : "bg-cream-100 text-ink-700 hover:bg-cream-200"
                }`}
              >
                {cat.shortTitle} ({count})
              </button>
            );
          })}
        </div>

        {/* Input Pencarian & Pengurutan */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Cari judul proyek, klien (mis. Unsoed, Pertamina, RSUD)..."
              aria-label="Cari proyek atau klien"
              className="w-full rounded-control border border-ink-300 bg-white px-3.5 py-2 pl-9 text-sm text-ink-900 placeholder:text-ink-400 focus-visible:outline-brand-600 min-h-[44px]"
            />
            <span
              className="pointer-events-none absolute left-3 top-3 text-ink-400"
              aria-hidden="true"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <label htmlFor="sort-select" className="text-xs font-semibold text-ink-600 whitespace-nowrap">
              Urutkan:
            </label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="rounded-control border border-ink-300 bg-white px-3 py-2 text-xs font-medium text-ink-800 focus-visible:outline-brand-600 min-h-[40px]"
            >
              <option value="default">Default Rekam Jejak</option>
              <option value="terbaru">Tahun Terbaru (2025 - 2020)</option>
              <option value="az">Nama Proyek (A - Z)</option>
              <option value="za">Nama Proyek (Z - A)</option>
            </select>
          </div>
        </div>

        {/* Status Hasil */}
        <div className="flex items-center justify-between text-xs text-ink-500 pt-1">
          <span>
            Menampilkan <strong>{filteredProjects.length}</strong> project
            {currentCategory !== "all" && " pada kategori terpilih"}
          </span>
          {(searchTerm || currentCategory !== "all") && (
            <button
              type="button"
              onClick={handleResetFilter}
              className="font-semibold text-brand-700 hover:underline"
            >
              Reset Filter
            </button>
          )}
        </div>
      </div>

      {/* Grid Proyek (PRD P-01) */}
      {paginatedProjects.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedProjects.map((project) => {
            const hasDetail = project.hasDetail;

            return (
              <Card
                key={project.slug}
                hoverEffect
                className="group flex flex-col justify-between overflow-hidden p-0 border-ink-200 bg-white"
              >
                <div>
                  {/* Visual / Gambar */}
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-cream-100">
                    {project.cover ? (
                      <Image
                        src={project.cover}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="relative flex h-full w-full flex-col justify-between p-4 bg-gradient-to-br from-brand-950 via-brand-900 to-stone-900 text-white overflow-hidden">
                        <div 
                          className="absolute inset-0 opacity-10 pointer-events-none" 
                          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 0)', backgroundSize: '16px 16px' }}
                          aria-hidden="true" 
                        />
                        <div className="h-6" />
                        <div className="relative z-10 space-y-1.5 mt-auto">
                          <div className="flex items-center gap-1.5">
                            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300/90 font-sans">
                              Rekam Jejak Terverifikasi
                            </span>
                          </div>
                          <p className="text-xs font-semibold text-cream-100/90 line-clamp-1">
                            {project.client}
                          </p>
                          <div className="flex items-center justify-between text-[10px] text-cream-200/70 pt-1 border-t border-white/10">
                            <span>Arsip Kontrak Resmi</span>
                            <span className="font-mono text-amber-200/80">PT Cakra Indo Yuma</span>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <Badge variant="brand" size="sm">
                        {project.clientType}
                      </Badge>
                      {project.location && (
                        <Badge variant="neutral" size="sm">
                          {project.location}
                        </Badge>
                      )}
                      {project.year && (
                        <Badge variant="outline" size="sm" className="bg-white/90 font-bold">
                          {project.year}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Konten Card */}
                  <div className="p-5 space-y-2.5">
                    <div className="flex flex-wrap items-center gap-1">
                      {project.activityType && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 bg-amber-100/90 border border-amber-300/60 px-2 py-0.5 rounded-xs">
                          {project.activityType}
                        </span>
                      )}
                      {project.categories.map((cat) => (
                        <span
                          key={cat}
                          className="text-[11px] font-semibold text-brand-800 bg-brand-50 px-2 py-0.5 rounded-xs"
                        >
                          {getCategoryTitle(cat)}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-display text-base sm:text-lg font-bold text-brand-950 group-hover:text-brand-700 transition-colors leading-snug">
                      {hasDetail ? (
                        <Link href={`/project/${project.slug}`}>
                          {project.title}
                        </Link>
                      ) : (
                        project.title
                      )}
                    </h3>

                    <p className="text-xs text-ink-600 font-medium">
                      Instansi/Klien:{" "}
                      <span className="font-semibold text-ink-900">
                        {project.client}
                      </span>
                    </p>

                    <p className="text-xs text-ink-600 line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 mt-auto border-t border-ink-100 flex items-center justify-between">
                  {hasDetail ? (
                    <Link
                      href={`/project/${project.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-brand-700 hover:text-brand-900 focus-visible:outline-brand-600"
                    >
                      <span>Lihat Rincian & Dokumentasi</span>
                      <span className="select-none" aria-hidden="true">&rarr;</span>
                    </Link>
                  ) : (
                    <div className="flex items-center gap-1.5 text-[11px] text-ink-500 font-medium">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span>Selesai & Terverifikasi</span>
                    </div>
                  )}
                  {hasDetail && (
                    <Badge variant="gold" size="sm">
                      Ada Foto
                    </Badge>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      ) : (
        /* Empty State (PRD P-03 & Craftsmanship C-4 & R-27) */
        <div className="rounded-card border border-ink-200 bg-white p-12 text-center space-y-4">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cream-100 text-brand-700">
            <span className="chevron-mark scale-150" aria-hidden="true" />
          </div>
          <h3 className="font-display text-lg font-bold text-brand-950">
            Tidak ada project yang cocok
          </h3>
          <p className="text-sm text-ink-600 max-w-md mx-auto leading-relaxed">
            Tidak ditemukan hasil untuk kata kunci &ldquo;{searchTerm}&rdquo;
            {currentCategory !== "all" ? ` pada kategori ${getCategoryTitle(currentCategory)}` : ""}.
            Silakan coba kata kunci lain atau reset filter Anda.
          </p>
          <div className="pt-2">
            <Button type="button" onClick={handleResetFilter} variant="outline" size="sm">
              Reset Semua Filter
            </Button>
          </div>
        </div>
      )}

      {/* Pagination (PRD P-05) */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-6">
          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            aria-label="Halaman sebelumnya"
          >
            &larr; Sebelumnya
          </Button>

          <div className="flex items-center gap-1 px-3 text-xs font-semibold text-ink-700">
            Halaman {currentPage} dari {totalPages}
          </div>

          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            aria-label="Halaman berikutnya"
          >
            Berikutnya &rarr;
          </Button>
        </div>
      )}
    </div>
  );
}
