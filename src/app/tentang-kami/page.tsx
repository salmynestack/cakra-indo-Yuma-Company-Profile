import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  company,
  fullAddress,
  missions,
  timeline,
  values,
  vision,
} from "@/data/company";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ClientMarquee } from "@/components/sections/ClientMarquee";

export const metadata: Metadata = {
  title: "Tentang Kami | Profil Perusahaan, Visi Misi & Nilai Budaya",
  description:
    "Profil lengkap PT Cakra Indo Yuma, sejarah pendirian sejak 2020 di Cilacap, visi misi, dan nilai budaya kerja profesional.",
};

export default function TentangKamiPage() {
  return (
    <div className="bg-cream-50">
      {/* Header Halaman */}
      <div className="border-b border-ink-200/80 bg-white py-8 sm:py-12">
        <div className="container-site space-y-4">
          <SectionHeading
            as="h1"
            kicker="Profil Korporasi"
            title="Membangun Reputasi Pengadaan yang Tertib, Presisi, dan Amanah"
            subtitle="Mengenal lebih dekat PT Cakra Indo Yuma, perjalanan kami sejak 2020, nilai yang kami anut, dan komitmen mutu dalam setiap kerja sama."
          />
        </div>
      </div>

      {/* Profil Perusahaan & Foto (T-01) */}
      <section className="py-16 lg:py-20 border-b border-ink-200/60 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6 space-y-5 text-base sm:text-lg text-ink-700 leading-relaxed">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-950">
                Supplier Pengadaan Terpercaya Berbasis di Cilacap
              </h2>
              <p>
                {company.name} didirikan pada bulan Maret 2020 dan berkedudukan di
                Kabupaten Cilacap, Jawa Tengah. Sejak awal berdiri, perusahaan
                berfokus menjadi mitra strategis dalam penyediaan sarana dan
                prasarana perkantoran, mebel berkualitas, penataan interior, serta
                kebutuhan operasional instansi pemerintah maupun swasta.
              </p>
              <p>
                Melalui lini brand <strong>Alterior</strong>, kami memadukan
                keahlian perajin kayu lokal dan manajemen rantai pasok modern untuk
                menghasilkan produk furnitur instansi yang kokoh, rapi, dan sesuai
                anggaran proyek.
              </p>
              <div className="pt-2">
                <Button href="/kontak" variant="primary" size="md">
                  Hubungi Kantor Kami
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-card border-2 border-brand-200 shadow-lg aspect-4/3">
                <Image
                  src="/images/bahan-baku-kayu-jati.jpg"
                  alt="Tumpukan gelondongan kayu jati sebagai bahan baku mebel di workshop PT Cakra Indo Yuma"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-2 text-right text-xs text-ink-500 italic">
                Stok bahan baku kayu jati di workshop Kabupaten Cilacap
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visi dan Misi (T-02) */}
      <section className="py-16 lg:py-20 border-b border-ink-200/60 bg-cream-50">
        <div className="container-site space-y-12">
          <SectionHeading
            kicker="Arah & Landasan"
            title="Visi dan Misi Perusahaan"
            subtitle="Pedoman strategis kami dalam memberikan dampak positif bagi mitra kerja, karyawan, dan masyarakat luas."
            align="center"
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch">
            {/* Box Visi */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-card border-2 border-brand-400 bg-brand-950 p-8 sm:p-10 text-cream-50 shadow-md">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 font-ui text-xs font-bold uppercase tracking-wider text-gold-500">
                  <span className="chevron-mark" aria-hidden="true" />
                  <span>Visi Korporasi</span>
                </div>
                <blockquote className="font-serif text-xl sm:text-2xl italic font-medium leading-relaxed text-white">
                  &ldquo;{vision}&rdquo;
                </blockquote>
              </div>
              <p className="mt-8 text-xs text-brand-200 border-t border-brand-800 pt-4">
                Disahkan dalam Rencana Jangka Panjang Perusahaan sejak 2020.
              </p>
            </div>

            {/* Box Misi (5 poin) */}
            <div className="lg:col-span-7 rounded-card border border-ink-200 bg-white p-8 sm:p-10 shadow-xs flex flex-col justify-between">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 font-ui text-xs font-bold uppercase tracking-wider text-brand-700">
                  <span className="chevron-mark" aria-hidden="true" />
                  <span>Misi Perusahaan (5 Poin Komitmen)</span>
                </div>

                <ol className="space-y-4">
                  {missions.map((misi, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-100 font-display text-xs font-bold text-brand-800">
                        {index + 1}
                      </span>
                      <span className="text-base sm:text-lg text-ink-800 font-medium pt-0.5">
                        {misi}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai-Nilai Perusahaan (T-03) */}
      <section className="py-16 lg:py-20 border-b border-ink-200/60 bg-white">
        <div className="container-site space-y-12">
          <SectionHeading
            kicker="Budaya Kerja"
            title="Nilai-Nilai Utama Kami"
            subtitle="Prinsip dasar yang menjadi pedoman tim kami dalam setiap interaksi dan pengerjaan proyek."
            align="center"
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((val, idx) => (
              <Card key={idx} hoverEffect className="border-ink-200 bg-cream-50/40">
                <div className="space-y-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-600 text-cream-50 font-display font-extrabold">
                    0{idx + 1}
                  </div>
                  <h3 className="font-display text-lg font-bold text-brand-950">
                    {val.title}
                  </h3>
                  <p className="text-sm text-ink-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sejarah & Timeline (T-04) */}
      <section className="py-16 lg:py-20 border-b border-ink-200/60 bg-cream-50">
        <div className="container-site space-y-12">
          <SectionHeading
            kicker="Jejak Langkah"
            title="Sejarah dan Perkembangan Perusahaan"
            subtitle="Perjalanan bertumbuh dari awal pendirian hingga menyelesaikan 49 proyek resmi instansi pemerintah, BUMN, dan perguruan tinggi."
            align="center"
          />

          <div className="relative mx-auto max-w-3xl">
            {/* Garis vertikal timeline */}
            <div
              className="absolute left-4 top-4 bottom-4 w-0.5 bg-brand-300 md:left-1/2 md:-ml-0.5"
              aria-hidden="true"
            />

            <div className="space-y-8">
              {timeline.map((item, index) => {
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className="relative flex flex-col md:flex-row items-start md:items-center"
                  >
                    {/* Node bullet */}
                    <div className="absolute left-4 -ml-2.5 flex h-5 w-5 items-center justify-center rounded-full border-4 border-white bg-brand-600 shadow-sm md:left-1/2 md:-ml-2.5" />

                    {/* Konten Card kiri/kanan */}
                    <div
                      className={`ml-12 md:ml-0 md:w-1/2 ${
                        isEven ? "md:pr-10 md:text-right" : "md:pl-10 md:ml-auto"
                      }`}
                    >
                      <Card className="border-ink-200 bg-white p-5 shadow-xs">
                        <span className="inline-block rounded-xs bg-brand-100 px-2.5 py-0.5 text-xs font-bold text-brand-800">
                          {item.date}
                        </span>
                        <h3 className="mt-2 font-display text-base sm:text-lg font-bold text-brand-950">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-sm text-ink-600 leading-relaxed">
                          {item.description}
                        </p>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Klien dan Mitra (T-07) */}
      <ClientMarquee />

      {/* CTA Kontak (T-08) */}
      <section className="bg-brand-950 py-16 text-cream-50 text-center">
        <div className="container-site max-w-3xl space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
            Konsultasikan Kebutuhan Pengadaan Bersama Kami
          </h2>
          <p className="text-base text-ink-300">
            Tim kami siap menyusun penawaran resmi, melayani survei lokasi, dan
            memastikan pengadaan Anda berjalan tertib sesuai regulasi.
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
