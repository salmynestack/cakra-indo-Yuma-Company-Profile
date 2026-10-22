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
              <span>Lihat Semua Project (30)</span>
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
                      <div className="flex h-full w-full items-center justify-center bg-brand-50 text-brand-700">
                        <span className="chevron-mark scale-150" aria-hidden="true" />
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
