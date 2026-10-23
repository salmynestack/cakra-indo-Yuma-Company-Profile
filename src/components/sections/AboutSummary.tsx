import Image from "next/image";
import { company, vision } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSummary() {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-ink-200/60 overflow-hidden">
      <div className="container-site">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Visual Gudang / Operasional */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Decorative background accent */}
              <div
                className="absolute -bottom-3 -left-3 h-full w-full rounded-card bg-cream-200/80 border border-brand-200/50 hidden sm:block"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-card border-2 border-brand-950 bg-white shadow-xl aspect-4/3">
                <Image
                  src="/images/projects/serah-terima-barang-pertamina.jpg"
                  alt="Petugas PT Cakra Indo Yuma mencocokkan dokumen serah terima pesanan instansi"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Konten Teks */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <SectionHeading
              kicker="Tentang PT Cakra Indo Yuma"
              title="Perusahaan Supplier Berpengalaman dari Kabupaten Cilacap"
              subtitle="Mitra strategis instansi pemerintah, BUMN, dan korporasi swasta dalam penyediaan sarana kerja yang berkualitas dan tertib administrasi."
            />

            <p className="text-base text-ink-700 leading-relaxed">
              Berdiri sejak Maret 2020 di Cilacap, Jawa Tengah, PT Cakra Indo Yuma melayani pengadaan terpadu mulai dari mebelair perkantoran, renovasi interior, ATK &amp; kertas, hingga sarana prasarana operasional instansi dengan standar spesifikasi yang presisi.
            </p>

            {/* Dua Nilai Keunggulan Utama */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="rounded-card border border-ink-200/90 bg-cream-50/70 p-4 space-y-1.5 transition-shadow hover:shadow-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-700" aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-950 font-ui">
                    Pengadaan Terpadu
                  </span>
                </div>
                <p className="text-xs text-ink-600 leading-relaxed">
                  Solusi satu pintu pengadaan mebel, ATK dinas, dan sarana umum berskala tender maupun pengadaan langsung.
                </p>
              </div>

              <div className="rounded-card border border-ink-200/90 bg-cream-50/70 p-4 space-y-1.5 transition-shadow hover:shadow-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-600" aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-950 font-ui">
                    Brand Alterior
                  </span>
                </div>
                <p className="text-xs text-ink-600 leading-relaxed">
                  Lini khusus perancangan mebel kustom dan interior ruang kerja dinas dengan ketahanan jangka panjang.
                </p>
              </div>
            </div>

            {/* Visi Perusahaan Card */}
            <div className="rounded-card border border-amber-300/70 bg-gradient-to-r from-amber-50/60 via-cream-50/80 to-white p-4 space-y-1.5 shadow-xs">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-900 bg-amber-100/90 border border-amber-300/70 px-2 py-0.5 rounded-xs font-ui">
                  Visi Perusahaan
                </span>
              </div>
              <p className="font-serif text-sm sm:text-base italic text-ink-900 leading-relaxed">
                &ldquo;{vision}&rdquo;
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-1">
              <Button href="/tentang-kami" variant="secondary" size="md">
                <span>Pelajari Selengkapnya Tentang Kami</span>
                <span className="ml-1.5 select-none" aria-hidden="true">&rarr;</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
