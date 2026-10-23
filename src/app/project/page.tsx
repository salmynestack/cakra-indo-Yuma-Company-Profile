import { Suspense } from "react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectListClient } from "./ProjectListClient";

export const metadata: Metadata = {
  title: "Portofolio Rekam Jejak Project (49 Pekerjaan Selesai) | PT Cakra Indo Yuma",
  description:
    "Daftar 49 rekam jejak pekerjaan pengadaan barang, mebel, interior, event organizer, dan konstruksi yang telah diselesaikan oleh PT Cakra Indo Yuma (Tahun 2020 sampai 2026).",
};

export default function ProjectPage() {
  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Header Halaman */}
      <div className="border-b border-ink-200/80 bg-white py-8 sm:py-12">
        <div className="container-site space-y-4">
          <SectionHeading
            as="h1"
            kicker="Portofolio Rekam Jejak"
            title="Daftar Pekerjaan & Pengadaan yang Telah Selesai"
            subtitle="Koleksi 49 proyek resmi untuk instansi pemerintah, BUMN, perguruan tinggi, dan korporasi swasta (Tahun 2020 - 2026)."
          />
        </div>
      </div>

      {/* Main Content with Suspense for Search Params */}
      <div className="container-site py-10 lg:py-16">
        <Suspense
          fallback={
            <div className="py-20 text-center text-ink-500">
              <span className="chevron-mark animate-spin mr-2" aria-hidden="true" />
              <span>Memuat data rekam jejak...</span>
            </div>
          }
        >
          <ProjectListClient />
        </Suspense>
      </div>

      {/* CTA Bawah */}
      <section className="bg-brand-950 py-16 text-cream-50 text-center">
        <div className="container-site max-w-3xl space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
            Ingin Berdiskusi Mengenai Proyek Serupa?
          </h2>
          <p className="text-base text-ink-300">
            Tim kami siap membantu menyusun estimasi anggaran, spesifikasi
            material, dan skema kontrak untuk proyek pengadaan Anda.
          </p>
          <div className="pt-2">
            <Button href="/kontak" variant="gold" size="lg">
              Konsultasikan Proyek Anda
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
