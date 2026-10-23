import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { faqs } from "@/data/faq";
import { services } from "@/data/services";
import { workflowSteps } from "@/data/workflow";
import { Accordion } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceSubNav } from "./ServiceSubNav";
import type { ServiceSlug } from "@/types";

export const metadata: Metadata = {
  title: "Katalog Layanan Pengadaan & Interior | PT Cakra Indo Yuma",
  description:
    "Katalog 6 lini layanan pengadaan PT Cakra Indo Yuma: Mebel dan Furniture Artalana, Interior & Eksterior, ATK & Elektronik, Event Organizer, Supplier Restoran, dan Pengadaan Barang Umum.",
};

// Foto dokumentasi asli per jenis layanan. Layanan tanpa entri tampil tanpa foto.
const serviceImages: Partial<Record<ServiceSlug, { src: string; alt: string }>> = {
  "mebel-furniture": {
    src: "/images/workshop-mebel-kayu.jpg",
    alt: "Pemeriksaan mutu kursi dan meja kayu jati di workshop Artalana",
  },
  "interior-eksterior": {
    src: "/images/bahan-baku-kayu-jati.jpg",
    alt: "Bahan baku kayu jati untuk panel dan elemen interior",
  },
  "atk-kertas-elektronik": {
    src: "/images/projects/serah-terima-barang-pertamina.jpg",
    alt: "Pengecekan dokumen serah terima kardus ATK dan elektronik di lokasi klien",
  },
  "pengadaan-umum": {
    src: "/images/projects/pengiriman-pertamina-cilacap.jpg",
    alt: "Truk pengiriman barang pengadaan di area kantor Pertamina Cilacap",
  },
};

export default function LayananPage() {
  const accordionItems = faqs.map((faq, index) => ({
    id: `faq-${index}`,
    question: faq.question,
    answer: faq.answer,
  }));

  return (
    <div className="bg-cream-50">
      {/* Header Halaman */}
      <div className="border-b border-ink-200/80 bg-white py-8 sm:py-12">
        <div className="container-site space-y-4">
          <Breadcrumb items={[{ label: "Layanan" }]} />
          <SectionHeading
            as="h1"
            kicker="Katalog Pengadaan Resmi"
            title="Solusi Terpadu Pengadaan Sarana & Prasarana Instansi"
            subtitle="Kami mengelola 6 lini layanan dengan kapasitas produksi mebel mandiri, jejaring rantai pasok terpercaya, dan tata kelola administrasi yang tertib."
          />
        </div>
      </div>

      {/* Sticky Sub-navigasi Anchor (PRD L-01) */}
      <ServiceSubNav />

      {/* Bagian per Layanan (PRD L-02, L-03, L-06) */}
      <div className="py-12 lg:py-16 space-y-16">
        <div className="container-site space-y-16">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <section
                key={service.slug}
                id={service.slug}
                className="scroll-mt-36 rounded-card border border-ink-200 bg-white p-6 sm:p-10 shadow-xs"
              >
                <div className="space-y-8">
                  {/* Header Layanan */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-ink-100 pb-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-800">
                        <span className="chevron-mark scale-125" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-ui text-xs font-bold text-brand-700 uppercase tracking-wider">
                            Layanan 0{index + 1}
                          </span>
                          {service.artalana && (
                            <Badge variant="gold" size="sm">
                              Brand Artalana
                            </Badge>
                          )}
                        </div>
                        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-950">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    {/* CTA Layanan (PRD L-03 & L-06) */}
                    <div className="flex flex-wrap items-center gap-3">
                      <Button
                        href={`/kontak?layanan=${service.slug}`}
                        variant="primary"
                        size="sm"
                      >
                        Ajukan Penawaran
                      </Button>
                      <Button
                        href={`/project?kategori=${service.slug}`}
                        variant="outline"
                        size="sm"
                      >
                        Project Terkait
                      </Button>
                    </div>
                  </div>

                  {/* Deskripsi + foto dokumentasi */}
                  {(() => {
                    const image = serviceImages[service.slug];
                    if (!image) {
                      return (
                        <p className="text-base sm:text-lg text-ink-700 leading-relaxed">
                          {service.description}
                        </p>
                      );
                    }
                    return (
                      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-5 md:gap-8">
                        <p className="text-base sm:text-lg text-ink-700 leading-relaxed md:col-span-3">
                          {service.description}
                        </p>
                        <div className="relative aspect-16/10 overflow-hidden rounded-card border border-ink-200 shadow-sm md:col-span-2">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 40vw"
                            className="object-cover"
                          />
                          <span
                            className="absolute inset-x-0 bottom-0 h-1 bg-gold-500"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    );
                  })()}

                  {/* 2 Kolom: Cakupan & Manfaat (PRD L-02) */}
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {/* Cakupan Pekerjaan */}
                    <div className="rounded-control bg-cream-50 p-6 border border-ink-200/80 space-y-4">
                      <h3 className="font-display text-base font-bold text-brand-950 flex items-center gap-2">
                        <span className="chevron-mark" aria-hidden="true" />
                        <span>Cakupan Pengadaan & Pekerjaan</span>
                      </h3>
                      <ul className="space-y-2.5 text-sm text-ink-700">
                        {service.scope.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span
                              className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Manfaat & Nilai Tambah */}
                    <div className="rounded-control bg-cream-50 p-6 border border-ink-200/80 space-y-4">
                      <h3 className="font-display text-base font-bold text-brand-950 flex items-center gap-2">
                        <span className="chevron-mark" aria-hidden="true" />
                        <span>Manfaat & Keunggulan Layanan</span>
                      </h3>
                      <ul className="space-y-2.5 text-sm text-ink-700">
                        {service.benefits.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span
                              className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-600"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      {/* Alur Kerja 5 Langkah (PRD L-04) */}
      <section className="py-16 lg:py-20 bg-white border-t border-b border-ink-200/60">
        <div className="container-site space-y-12">
          <SectionHeading
            kicker="Sistematika Pelaksanaan"
            title="Alur Kerja Pengadaan Profesional"
            subtitle="Lima tahapan terstruktur yang memastikan setiap pengadaan barang berjalan tertib, tepat jadwal, dan sesuai klausul kontrak."
            align="center"
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {workflowSteps.map((step) => (
              <div
                key={step.step}
                className="relative flex flex-col justify-between rounded-card border border-ink-200 bg-cream-50/50 p-5"
              >
                <div className="space-y-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-cream-50 font-display font-extrabold text-sm">
                    {step.step}
                  </div>
                  <h3 className="font-display text-base font-bold text-brand-950">
                    {step.title}
                  </h3>
                  <p className="text-xs text-ink-600 leading-relaxed">
                    {step.summary}
                  </p>
                </div>
                <p className="mt-4 border-t border-ink-200/60 pt-3 text-[11px] text-ink-500 leading-relaxed">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion (PRD L-05) */}
      <section className="py-16 lg:py-20 bg-cream-50 border-b border-ink-200/60">
        <div className="container-site max-w-4xl space-y-10">
          <SectionHeading
            kicker="Tanya Jawab"
            title="Pertanyaan yang Sering Diajukan"
            subtitle="Informasi penting seputar legalitas pengadaan, kustomisasi ukuran mebel, serta mekanisme kerja sama dengan PT Cakra Indo Yuma."
            align="center"
          />

          <Accordion items={accordionItems} />

          <div className="text-center pt-4">
            <p className="text-sm text-ink-600">
              Ada pertanyaan khusus yang belum tercantum?{" "}
              <Link
                href="/kontak"
                className="font-bold text-brand-700 hover:underline focus-visible:outline-brand-600"
              >
                Tanyakan langsung kepada tim kami &rarr;
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Layanan */}
      <section className="bg-brand-950 py-16 text-cream-50 text-center">
        <div className="container-site max-w-3xl space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
            Butuh Dokumen Spesifikasi atau Sampel Material?
          </h2>
          <p className="text-base text-ink-300">
            Sampaikan kebutuhan pengadaan instansi Anda sekarang. Tim kami siap
            menyusun draf Surat Penawaran Harga (SPH) resmi dan sampel contoh
            bahan.
          </p>
          <div className="pt-2">
            <Button href="/kontak" variant="gold" size="lg">
              Ajukan Permintaan Penawaran
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
