import Image from "next/image";
import { company } from "@/data/company";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-50 pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-ink-200/60">
      {/* Chevron decorative background band (PRD 10.6) */}
      <div
        className="chevron-band absolute inset-0 opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-site relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Kolom Teks (PRD H-01) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-800 backdrop-blur-xs">
              <span className="chevron-mark" aria-hidden="true" />
              <span>Mitra Pengadaan Terpercaya Sejak 2020</span>
            </div>

            <h1 className="font-display text-3xl font-extrabold tracking-tight text-brand-950 sm:text-4xl md:text-5xl lg:text-5xl/tight">
              Supplier Kebutuhan Instansi, Mebel Kayu, dan Interior Ruang Kerja
            </h1>

            <p className="text-base sm:text-lg text-ink-600 leading-relaxed max-w-2xl">
              PT Cakra Indo Yuma melayani pengadaan mebel perkantoran, renovasi
              interior, alat tulis kantor, hingga kebutuhan restoran. Berkedudukan
              di Cilacap, melayani instansi pemerintah, BUMN, dan swasta lintas kota
              dengan spesifikasi presisi dan administrasi tertib.
            </p>

            {/* 2 CTA Buttons (PRD H-01) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="/kontak" variant="primary" size="lg">
                Konsultasi Pengadaan
              </Button>
              <Button href="/project" variant="outline" size="lg">
                Lihat Rekam Jejak
              </Button>
            </div>

            {/* Micro proof badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-ink-200/80 text-xs text-ink-600 sm:text-sm">
              <div>
                <p className="font-display font-bold text-brand-950 text-base sm:text-lg">
                  30+ Project
                </p>
                <p className="text-ink-500 text-xs">Selesai tepat waktu</p>
              </div>
              <div>
                <p className="font-display font-bold text-brand-950 text-base sm:text-lg">
                  Legalitas NIB
                </p>
                <p className="text-ink-500 text-xs">0220208341324</p>
              </div>
              <div>
                <p className="font-display font-bold text-brand-950 text-base sm:text-lg">
                  Brand Artalana
                </p>
                <p className="text-ink-500 text-xs">Mebel & interior dinas</p>
              </div>
            </div>
          </div>

          {/* Kolom Visual (PRD H-01) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative overflow-hidden rounded-card border-2 border-brand-200 bg-white shadow-xl aspect-4/3 sm:aspect-4/3">
                <Image
                  src="/images/hero-ruang-rapat.jpg"
                  alt="Ruang rapat instansi dengan meja kayu jati dan lemari terpasang rapi"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>

              {/* Decorative note box */}
              <div className="mt-3 text-right">
                <span className="text-[11px] text-ink-500 italic">
                  Ilustrasi standar penataan furnitur ruang rapat PT Cakra Indo Yuma
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
