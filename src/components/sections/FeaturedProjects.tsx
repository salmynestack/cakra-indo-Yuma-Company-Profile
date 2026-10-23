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

                    <h3 className="font-display text-lg font-bold text-brand-950 group-hover:text-brand-700 transition-colors">
                      {hasDetail ? (
                        <Link href={`/project/${project.slug}`}>
                          {project.title}
                        </Link>
                      ) : (
                        project.title
                      )}
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
                  {hasDetail ? (
                    <Link
                      href={`/project/${project.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-bold text-brand-700 hover:text-brand-900 focus-visible:outline-brand-600"
                    >
                      <span>Lihat Rincian & Dokumentasi</span>
                      <span className="select-none" aria-hidden="true">&rarr;</span>
                    </Link>
                  ) : (
                    <Link
                      href="/project"
                      className="text-xs text-ink-500 hover:text-brand-700"
                    >
                      Status: Selesai Terverifikasi
                    </Link>
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
