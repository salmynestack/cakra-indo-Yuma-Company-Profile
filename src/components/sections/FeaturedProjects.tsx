import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  const getCategoryTitle = (catSlug: string) => {
    return services.find((s) => s.slug === catSlug)?.shortTitle ?? catSlug;
  };

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-ink-200/60">
      <div className="container-site space-y-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            kicker="Portofolio Rekam Jejak"
            title="Project dan Pekerjaan Unggulan"
            subtitle="Bukti nyata kepercayaan dari instansi pemerintah, BUMN, dan lembaga pendidikan tinggi di Jawa Tengah dan sekitarnya."
          />
          <div className="shrink-0">
            <Button href="/project" variant="primary" size="md">
              <span>Lihat Semua Project ({projects.length})</span>
              <span className="ml-1 select-none" aria-hidden="true">&rarr;</span>
            </Button>
          </div>
        </div>

        {/* 3 Kartu Project Unggulan (PRD H-05) */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => {
            const hasDetail = project.hasDetail;

            return (
              <Card
                key={project.slug}
                hoverEffect
                className="group flex flex-col justify-between overflow-hidden p-0 border-ink-200 bg-white"
              >
                <div>
                  {/* Gambar Cover */}
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-cream-100">
                    {project.cover ? (
                      <Image
                        src={project.cover}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center p-5 pt-12 bg-white text-center border-b border-ink-100/70 select-none">
                        <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-cream-100 text-brand-800">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                          </svg>
                        </div>
                        <span className="text-xs font-bold text-brand-950 uppercase tracking-wide">
                          Dokumentasi Arsip
                        </span>
                        <p className="mt-1 text-[11px] text-ink-500 max-w-[210px] leading-relaxed">
                          Foto pekerjaan tersimpan dalam arsip fisik kontrak resmi perusahaan.
                        </p>
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
                    </div>
                  </div>

                  {/* Konten Kartu */}
                  <div className="p-6 space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.categories.map((cat) => (
                        <span
                          key={cat}
                          className="text-xs font-semibold text-brand-700 bg-brand-50 px-2 py-0.5 rounded-xs"
                        >
                          {getCategoryTitle(cat)}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-display text-lg font-bold text-brand-950 leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs font-medium text-ink-500">
                      Klien: <span className="text-ink-800">{project.client}</span>
                    </p>

                    <p className="text-sm text-ink-600 line-clamp-3 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-auto border-t border-ink-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-ink-500 font-medium">
                    <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
                    <span>Status: Selesai & Terverifikasi</span>
                  </div>
                  {project.year && (
                    <span className="text-xs font-semibold text-ink-400">
                      Tahun {project.year}
                    </span>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
