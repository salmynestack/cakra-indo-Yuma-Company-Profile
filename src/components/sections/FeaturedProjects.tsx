import Link from "next/link";
import { ArrowRight, Building2, Calendar, MapPin } from "lucide-react";
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

        {/* 3 Kartu Project Unggulan (PRD H-05 - Format Rekam Jejak Non-Image) */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => {
            const hasDetail = project.hasDetail;

            return (
              <Card
                key={project.slug}
                hoverEffect
                className="group relative flex flex-col justify-between overflow-hidden p-0 border border-ink-200/90 bg-white shadow-xs transition-all duration-200 hover:border-brand-400 hover:shadow-lg"
              >
                {/* Aksen garis atas brand */}
                <div className="h-2 w-full bg-gradient-to-r from-brand-700 via-gold-500 to-brand-900" />

                {/* Konten Utama Kartu */}
                <div className="p-7 space-y-4 flex-1 flex flex-col">
                  {/* Bar Atas: Tipe Klien, Aktivitas, dan Tahun */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <Badge variant="brand" size="sm" className="font-semibold text-[11px]">
                        {project.clientType}
                      </Badge>
                      {project.activityType && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 bg-amber-50 border border-amber-200/80 px-2 py-0.5 rounded-full">
                          {project.activityType}
                        </span>
                      )}
                    </div>
                    {project.year && (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-ink-600 bg-ink-50 px-2.5 py-0.5 rounded-full border border-ink-200/60 shrink-0">
                        <Calendar className="h-3 w-3 text-ink-400" aria-hidden="true" />
                        <span>{project.year}</span>
                      </span>
                    )}
                  </div>

                  {/* Judul Proyek & Kategori */}
                  <div className="space-y-2">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-brand-950 leading-snug group-hover:text-brand-800 transition-colors">
                      {hasDetail ? (
                        <Link
                          href={`/project/${project.slug}`}
                          className="hover:underline focus:outline-hidden"
                        >
                          {project.title}
                        </Link>
                      ) : (
                        project.title
                      )}
                    </h3>

                    <div className="flex flex-wrap gap-1">
                      {project.categories.map((cat) => (
                        <span
                          key={cat}
                          className="text-xs font-medium text-brand-800 bg-brand-50/90 px-2 py-0.5 rounded-xs"
                        >
                          {getCategoryTitle(cat)}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metadata Instansi Klien & Lokasi */}
                  <div className="pt-3 border-t border-ink-100/90 space-y-2 text-xs text-ink-600">
                    <div className="flex items-start gap-2 min-w-0">
                      <Building2 className="h-4 w-4 text-brand-600 shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="font-medium text-ink-900 leading-tight">
                        {project.client}
                      </span>
                    </div>
                    {project.location && (
                      <div className="flex items-center gap-2 text-ink-600">
                        <MapPin className="h-4 w-4 text-gold-600 shrink-0" aria-hidden="true" />
                        <span>{project.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Ringkasan Proyek */}
                  <p className="text-sm text-ink-600 line-clamp-3 leading-relaxed flex-1 pt-1">
                    {project.summary}
                  </p>
                </div>

                {/* Footer Status & Aksi */}
                <div className="p-4 px-7 bg-cream-50/60 border-t border-ink-100 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-1.5 text-xs text-ink-600 font-medium">
                    <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
                    <span>Status Selesai</span>
                  </div>

                  {hasDetail ? (
                    <Link
                      href={`/project/${project.slug}`}
                      className="inline-flex items-center gap-1.5 font-bold text-brand-700 hover:text-brand-900 group-hover:translate-x-0.5 transition-all text-xs"
                    >
                      <span>Lihat Detail</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  ) : (
                    <span className="text-xs text-ink-400 font-medium select-none">
                      Arsip Resmi
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
