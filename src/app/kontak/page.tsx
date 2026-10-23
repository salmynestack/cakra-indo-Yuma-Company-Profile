import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { company, fullAddress } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Hubungi Kami | Kantor & Layanan Pengadaan PT Cakra Indo Yuma Cilacap",
  description:
    "Hubungi PT Cakra Indo Yuma di Cilacap, Jawa Tengah. Dapatkan penawaran harga mebel, interior instansi, dan pengadaan barang via WhatsApp, telepon, atau email resmi.",
};

export default function KontakPage() {
  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Header Halaman */}
      <div className="border-b border-ink-200/80 bg-white py-8 sm:py-12">
        <div className="container-site space-y-4">
          <SectionHeading
            as="h1"
            kicker="Pusat Komunikasi Resmi"
            title="Hubungi Tim PT Cakra Indo Yuma"
            subtitle="Konsultasikan kebutuhan mebel, interior, atau pengadaan instansi Anda. Kami siap melayani kunjungan survei dan penyusunan surat penawaran resmi."
          />
        </div>
      </div>

      <div className="container-site py-12 lg:py-16 space-y-16">
        {/* Layout 2 Kolom: Info Kontak & Form (PRD 6.4 & K-01 & K-02) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Kolom Kiri: Informasi Kontak Langsung */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="border-ink-200 bg-white space-y-6 p-6 sm:p-8">
              <div className="border-b border-ink-100 pb-4">
                <h2 className="font-display text-xl font-bold text-brand-950">
                  Informasi Kantor & Komunikasi
                </h2>
                <p className="text-xs text-ink-500 mt-1">
                  Saluran resmi untuk pertanyaan, penawaran harga, dan administrasi.
                </p>
              </div>

              {/* Alamat */}
              <div className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                  Alamat Kantor & Workshop
                </span>
                <p className="text-sm text-ink-800 leading-relaxed font-medium">
                  {company.address.street}
                </p>
                <p className="text-xs text-ink-600">
                  {company.address.district}, {company.address.city},{" "}
                  {company.address.province} {company.address.postalCode}
                </p>
              </div>

              {/* Telepon */}
              <div className="space-y-1.5 border-t border-ink-100 pt-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                  Telepon Kantor
                </span>
                <p className="text-sm">
                  <a
                    href={`tel:${company.phoneHref}`}
                    className="font-bold text-brand-700 hover:underline"
                  >
                    {company.phoneDisplay}
                  </a>
                </p>
                <p className="text-xs text-ink-500">
                  Tersedia pada hari dan jam kerja instansi.
                </p>
              </div>

              {/* Email */}
              <div className="space-y-1.5 border-t border-ink-100 pt-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                  Email Korespondensi
                </span>
                <p className="text-sm">
                  <a
                    href={`mailto:${company.email}`}
                    className="font-bold text-brand-700 hover:underline break-all"
                  >
                    {company.email}
                  </a>
                </p>
                <p className="text-xs text-ink-500">
                  Untuk pengiriman TOR, berkas tender, dan surat resmi.
                </p>
              </div>

              {/* WhatsApp Cepat */}
              <div className="border-t border-ink-100 pt-4">
                <Button
                  href={`https://wa.me/${company.whatsapp || "6282134567890"}`}
                  isExternal
                  variant="outline"
                  size="sm"
                  className="w-full text-xs"
                >
                  Buka Chat Langsung via WhatsApp
                </Button>
              </div>
            </Card>

            {/* Catatan Jam Layanan & Respon */}
            <div className="rounded-control bg-cream-100 p-5 border border-brand-200 text-xs text-ink-700 space-y-2">
              <p className="font-bold text-brand-950">
                Layanan Responsif & Survei Lapangan:
              </p>
              <p className="leading-relaxed">
                Tim perancang dan logistik kami siap menjadwalkan peninjauan
                lapangan ke kantor atau lokasi proyek Anda untuk pengukuran
                presisi ruangan dan diskusi bahan.
              </p>
            </div>
          </div>

          {/* Kolom Kanan: Form Kontak Interaktif (PRD K-02..K-04) */}
          <div className="lg:col-span-7">
            <Suspense
              fallback={
                <div className="rounded-card border border-ink-200 bg-white p-12 text-center text-ink-500">
                  Memuat formulir...
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </div>
        </div>

        {/* Bagian Khusus Vendor dan Mitra (PRD K-06) */}
        <section className="rounded-card border border-ink-200 bg-white p-8 sm:p-10 shadow-xs space-y-6">
          <SectionHeading
            kicker="Peluang Sinergi"
            title="Bagian Khusus Vendor, Produsen & Mitra Bisnis"
            subtitle="Kami membuka peluang kolaborasi jangka panjang bersama produsen material mebel, distributor perlengkapan kantor, dan kontraktor rekanan."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Box Vendor */}
            <div className="rounded-control bg-cream-50 p-6 border border-ink-200 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="font-display text-lg font-bold text-brand-950">
                  Pengajuan sebagai Vendor / Supplier Bahan
                </h3>
                <p className="text-sm text-ink-600 leading-relaxed">
                  Bagi produsen kayu, distributor HPL, aksesori furnitur logam,
                  kertas, atau alat tulis: sertakan profil perusahaan dan daftar
                  harga grosir Anda untuk dipertimbangkan dalam pengadaan berkala
                  kami.
                </p>
              </div>
              <div className="pt-2">
                <Button href="/kontak?kategori=vendor" variant="outline" size="sm">
                  Ajukan sebagai Vendor
                </Button>
              </div>
            </div>

            {/* Box Mitra Bisnis */}
            <div className="rounded-control bg-cream-50 p-6 border border-ink-200 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="font-display text-lg font-bold text-brand-950">
                  Peluang Kemitraan & Proyek Bersama
                </h3>
                <p className="text-sm text-ink-600 leading-relaxed">
                  Terbuka untuk konsultan arsitektur, kontraktor sipil, dan agen
                  pengadaan daerah yang membutuhkan mitra lokal tepercaya di
                  wilayah Jawa Tengah dan sekitarnya.
                </p>
              </div>
              <div className="pt-2">
                <Button
                  href="/kontak?kategori=mitra-bisnis"
                  variant="outline"
                  size="sm"
                >
                  Ajukan Kemitraan Bisnis
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Peta Lokasi Google Maps & Petunjuk Arah (PRD K-05) */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <SectionHeading
              kicker="Lokasi Fisik"
              title="Peta Kantor & Workshop di Cilacap"
              subtitle="Silakan berkunjung langsung untuk melihat contoh sampel mebel dan berdiskusi dengan tim operasional kami."
            />
            <div className="shrink-0">
              <Button
                href={company.mapsDirectionsUrl}
                isExternal
                variant="primary"
                size="md"
              >
                <span>Buka Petunjuk Arah Google Maps</span>
                <span className="ml-1 select-none" aria-hidden="true">&rarr;</span>
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-card border-2 border-brand-200 bg-white shadow-md">
            <div className="relative aspect-16/9 sm:aspect-21/9 w-full bg-cream-100">
              <iframe
                title="Peta Lokasi Kantor PT Cakra Indo Yuma Cilacap"
                src={company.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
