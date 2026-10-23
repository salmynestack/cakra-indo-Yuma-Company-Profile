import Image from "next/image";
import Link from "next/link";
import { company, vision } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSummary() {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-ink-200/60">
      <div className="container-site">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Visual Gudang / Operasional */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-card border border-ink-200 shadow-md aspect-4/3">
              <Image
                src="/images/projects/serah-terima-barang-pertamina.jpg"
                alt="Petugas PT Cakra Indo Yuma mencocokkan dokumen serah terima dengan kardus barang pesanan instansi"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-right text-xs text-ink-500 italic">
              Pengecekan dokumen serah terima barang di lokasi klien
            </p>
          </div>

          {/* Konten Teks (PRD H-02) */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <SectionHeading
              kicker="Tentang PT Cakra Indo Yuma"
              title="Perusahaan Supplier Berpengalaman dari Kabupaten Cilacap"
              subtitle="Berdiri pada Maret 2020 dengan komitmen menjadi mitra terpercaya untuk instansi pemerintah, BUMN, dan sektor swasta."
            />

            <div className="space-y-4 text-base text-ink-700 leading-relaxed">
              <p>
                {company.description} Melalui brand <strong className="text-brand-900">Artalana</strong>,
                kami mengkhususkan diri dalam pengadaan perlengkapan kantor, perancangan mebel custom,
                dan renovasi ruang kerja yang fungsional dan tahan lama.
              </p>
              <div className="rounded-control bg-cream-100 p-4 border-l-4 border-gold-500">
                <p className="font-ui text-xs font-bold uppercase tracking-wider text-brand-900">
                  Visi Perusahaan:
                </p>
                <p className="mt-1 font-serif text-base italic text-ink-800">
                  &ldquo;{vision}&rdquo;
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button href="/tentang-kami" variant="secondary" size="md">
                <span>Selengkapnya Tentang Kami</span>
                <span className="ml-1 select-none" aria-hidden="true">&rarr;</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
