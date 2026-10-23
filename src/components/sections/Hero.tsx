import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-50 min-h-[calc(100vh-5rem)] min-h-[calc(100dvh-5rem)] flex flex-col justify-center py-12 lg:py-16 border-b border-ink-200/60">
      {/* Chevron decorative background band (PRD 10.6) */}
      <div
        className="chevron-band absolute inset-0 opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-site relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Kolom Teks (PRD H-01) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-3.5 py-1 font-ui text-xs font-bold uppercase tracking-wider text-brand-800 backdrop-blur-xs">
              <span className="chevron-mark" aria-hidden="true" />
              <span>Mitra Pengadaan Terpercaya Sejak 2020</span>
            </div>

            <h1 className="font-hero text-[2.75rem] leading-[0.95] font-normal tracking-wide text-brand-950 sm:text-6xl md:text-7xl">
              Supplier Kebutuhan Instansi, Mebel Kayu, dan Interior Ruang Kerja
            </h1>

            <p className="text-base sm:text-lg text-ink-600 leading-relaxed max-w-2xl">
              PT Cakra Indo Yuma melayani pengadaan mebel perkantoran, renovasi
              interior, alat tulis kantor, hingga kebutuhan restoran. Berkedudukan
              di Cilacap, melayani instansi pemerintah, BUMN, dan swasta lintas kota
              dengan spesifikasi presisi dan administrasi tertib.
            </p>

            {/* 2 CTA Buttons (PRD H-01) */}
            <div className="flex flex-col items-stretch gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Button href="/kontak" variant="primary" size="lg">
                Konsultasi Pengadaan
              </Button>
              <Button href="/project" variant="outline" size="lg">
                Lihat Rekam Jejak
              </Button>
            </div>
          </div>

          {/* Kolom Visual (PRD H-01) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-xl lg:max-w-none">
              {/* Aksen blok oranye di belakang foto */}
              <div
                className="absolute -right-3 -bottom-3 hidden h-2/3 w-2/3 rounded-card bg-gold-500 sm:block"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-card border-2 border-brand-950 bg-white shadow-xl aspect-4/3">
                <Image
                  src="/images/workshop-mebel-kayu.jpg"
                  alt="Tim PT Cakra Indo Yuma memeriksa dokumen pesanan di antara kursi dan meja kayu jati hasil produksi workshop"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
