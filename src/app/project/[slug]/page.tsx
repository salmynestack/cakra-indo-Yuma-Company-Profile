import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDetailedProjects, getProjectBySlug, projects } from "@/data/projects";
import { services } from "@/data/services";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ProjectLightbox } from "@/components/ui/ProjectLightbox";
import { SectionHeading } from "@/components/ui/SectionHeading";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const detailed = getDetailedProjects();
  return detailed.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !project.hasDetail) {
    return {
      title: "Project Tidak Ditemukan",
    };
  }

  return {
    title: `${project.title} | Portofolio PT Cakra Indo Yuma`,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: project.cover ? [{ url: project.cover }] : undefined,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !project.hasDetail) {
    notFound();
  }

  // Cari project terkait (PRD P-08)
  const relatedProjects = projects
    .filter(
      (p) =>
        p.slug !== project.slug &&
        p.categories.some((cat) => project.categories.includes(cat)),
    )
    .slice(0, 3);

  const getCategoryTitle = (catSlug: string) => {
    return services.find((s) => s.slug === catSlug)?.shortTitle ?? catSlug;
  };

  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Header Halaman & Breadcrumb */}
      <div className="border-b border-ink-200/80 bg-white py-8 sm:py-12">
        <div className="container-site space-y-4">
          <Breadcrumb
            items={[
              { label: "Project", href: "/project" },
              { label: project.client },
            ]}
          />

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <Badge variant="brand" size="md">
              Klien: {project.clientType}
            </Badge>
            {project.location && (
              <Badge variant="neutral" size="md">
                Lokasi: {project.location}
              </Badge>
            )}
            {project.year && (
              <Badge variant="outline" size="md">
                Tahun: {project.year}
              </Badge>
            )}
            <Badge variant="success" size="md">
              Status: Selesai Diserahterimakan
            </Badge>
          </div>

          <h1 className="font-hero font-normal tracking-wide leading-[0.95] text-4xl sm:text-5xl lg:text-6xl text-brand-950 max-w-4xl">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-ink-600 max-w-3xl leading-relaxed">
            {project.summary}
          </p>
        </div>
      </div>

      <div className="container-site py-12 lg:py-16 space-y-16">
        {/* Konten Utama & Metadata Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Kolom Kiri: Tantangan, Solusi, Hasil */}
          <div className="lg:col-span-8 space-y-10">
            {/* Ringkasan Tantangan & Solusi */}
            <div className="space-y-6">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-950">
                Latar Belakang & Ruang Lingkup Proyek
              </h2>

              {project.challenge && (
                <div className="rounded-card border border-ink-200 bg-white p-6 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-700">
                    <span className="chevron-mark" aria-hidden="true" />
                    <span>Tantangan Proyek</span>
                  </div>
                  <p className="text-base text-ink-700 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              )}

              {project.solution && (
                <div className="rounded-card border border-ink-200 bg-white p-6 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-700">
                    <span className="chevron-mark" aria-hidden="true" />
                    <span>Solusi Pelaksanaan</span>
                  </div>
                  <p className="text-base text-ink-700 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}

              {project.result && (
                <div className="rounded-card border-2 border-brand-300 bg-cream-50 p-6 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-700">
                    <span className="chevron-mark" aria-hidden="true" />
                    <span>Hasil Akhir & Serah Terima</span>
                  </div>
                  <p className="text-base text-ink-800 font-medium leading-relaxed">
                    {project.result}
                  </p>
                </div>
              )}
            </div>

            {/* Galeri Lightbox (PRD P-07) */}
            {project.gallery.length > 0 && (
              <div className="space-y-4">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-950">
                  Dokumentasi Foto Pekerjaan
                </h2>
                <ProjectLightbox images={project.gallery} />
              </div>
            )}
          </div>

          {/* Kolom Kanan: Rincian Metadata & CTA */}
          <div className="lg:col-span-4 space-y-6 sticky top-28">
            <Card className="border-ink-200 bg-white space-y-5">
              <h3 className="font-display text-base font-bold text-brand-950 border-b border-ink-100 pb-3">
                Informasi Pengadaan
              </h3>

              <div className="space-y-3.5 text-sm">
                <div>
                  <span className="text-xs text-ink-500 block">Klien / Instansi</span>
                  <span className="font-semibold text-brand-950">
                    {project.client}
                  </span>
                </div>

                <div>
                  <span className="text-xs text-ink-500 block">Lokasi Proyek</span>
                  <span className="font-semibold text-ink-900">
                    {project.location ?? "Jawa Tengah"}
                  </span>
                </div>

                <div>
                  <span className="text-xs text-ink-500 block">Kategori Layanan</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {project.categories.map((c) => (
                      <Badge key={c} variant="brand" size="sm">
                        {getCategoryTitle(c)}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-xs text-ink-500 block">Pelaksana Teknis</span>
                  <span className="font-semibold text-brand-950">
                    PT Cakra Indo Yuma (Brand Alterior)
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-ink-100">
                <Button href="/kontak" variant="primary" size="md" className="w-full">
                  Diskusikan Project Serupa
                </Button>
              </div>
            </Card>

            <div className="rounded-control bg-cream-100 p-4 border border-brand-200 text-xs text-ink-600 space-y-1">
              <p className="font-semibold text-brand-900">Jaminan Kualitas:</p>
              <p>
                Setiap hasil instalasi dan produk furnitur dijamin kesesuaiannya
                dengan Berita Acara Serah Terima (BAST) resmi instansi.
              </p>
            </div>
          </div>
        </div>

        {/* Project Terkait (PRD P-08) */}
        {relatedProjects.length > 0 && (
          <div className="border-t border-ink-200 pt-12 space-y-8">
            <SectionHeading
              kicker="Rekomendasi Terkait"
              title="Project Sejenis Lainnya"
              subtitle="Lihat pekerjaan serupa yang telah kami laksanakan untuk instansi dan korporasi lainnya."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((rel) => (
                <Card
                  key={rel.slug}
                  hoverEffect
                  className="flex flex-col justify-between p-5 border-ink-200 bg-white"
                >
                  <div className="space-y-2">
                    <Badge variant="neutral" size="sm">
                      {rel.clientType} - {rel.location}
                    </Badge>
                    <h3 className="font-display text-base font-bold text-brand-950">
                      {rel.hasDetail ? (
                        <Link
                          href={`/project/${rel.slug}`}
                          className="hover:text-brand-700"
                        >
                          {rel.title}
                        </Link>
                      ) : (
                        rel.title
                      )}
                    </h3>
                    <p className="text-xs text-ink-600 line-clamp-2">
                      {rel.summary}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-ink-100 mt-4 flex items-center justify-between text-xs">
                    {rel.hasDetail ? (
                      <Link
                        href={`/project/${rel.slug}`}
                        className="font-bold text-brand-700 hover:underline"
                      >
                        Buka Detail &rarr;
                      </Link>
                    ) : (
                      <span className="text-ink-500">Pekerjaan Selesai</span>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CTA Footer Project */}
      <section className="bg-brand-950 py-16 text-cream-50 text-center">
        <div className="container-site max-w-3xl space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
            Ingin Melakukan Pemesanan atau Survei Ruangan?
          </h2>
          <p className="text-base text-ink-300">
            Hubungi kami sekarang untuk berkonsultasi mengenai kebutuhan mebel,
            interior, atau pengadaan instansi Anda.
          </p>
          <div className="pt-2">
            <Button href="/kontak" variant="gold" size="lg">
              Hubungi Tim PT Cakra Indo Yuma
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
