import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/data/company";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Kebijakan Privasi | PT Cakra Indo Yuma",
  description:
    "Kebijakan privasi resmi PT Cakra Indo Yuma terkait penggunaan informasi kontak dan pemrosesan data komunikasi.",
};

export default function KebijakanPrivasiPage() {
  return (
    <div className="bg-cream-50 min-h-screen py-10 lg:py-16">
      <div className="container-site max-w-4xl space-y-8">
        <Breadcrumb items={[{ label: "Kebijakan Privasi" }]} />

        <div className="rounded-card border border-ink-200 bg-white p-8 sm:p-12 shadow-xs space-y-8">
          <SectionHeading
            as="h1"
            kicker="Kebijakan Privasi"
            title="Kebijakan Privasi & Pelindungan Data"
            subtitle={`Terakhir diperbarui: Oktober 2026. Berlaku untuk seluruh pengunjung situs resmi ${company.name}.`}
          />

          <div className="space-y-6 text-sm sm:text-base text-ink-700 leading-relaxed border-t border-ink-100 pt-6">
            <section className="space-y-3">
              <h2 className="font-display text-lg sm:text-xl font-bold text-brand-950">
                1. Prinsip Umum & Pengelolaan Situs Statis
              </h2>
              <p>
                Website {company.name} dibangun sebagai aplikasi profil perusahaan
                statis. Situs ini tidak menyimpan data pribadi pengunjung ke dalam
                basis data (database) internal dan tidak melakukan pelacakan data
                sensitif yang tidak relevan dengan kebutuhan pengadaan barang.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-lg sm:text-xl font-bold text-brand-950">
                2. Data yang Dikirimkan Melalui Formulir Kontak
              </h2>
              <p>
                Ketika Anda mengisi formulir kontak atau permintaan penawaran di
                situs ini, informasi yang Anda masukkan (seperti nama, email, nomor
                WhatsApp/telepon, nama instansi, serta rincian kebutuhan)
                diteruskan secara langsung ke saluran komunikasi resmi kami
                (WhatsApp dan/atau email resmi) melalui tautan peramban Anda.
              </p>
              <p>
                Informasi tersebut semata-mata kami gunakan untuk:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-ink-600">
                <li>Menanggapi pertanyaan dan permohonan penawaran harga Anda;</li>
                <li>Menyusun draf Surat Penawaran Harga (SPH) resmi;</li>
                <li>Menindaklanjuti proses survei lokasi atau konfirmasi spesifikasi barang;</li>
                <li>Menghubungi Anda kembali sehubungan dengan tindak lanjut pengadaan.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-lg sm:text-xl font-bold text-brand-950">
                3. Pelindungan Data Berdasarkan Undang-Undang
              </h2>
              <p>
                Kami menjunjung tinggi kepatuhan terhadap Undang-Undang Pelindungan
                Data Pribadi (UU No. 27 Tahun 2022). Kami tidak menjual,
                meminjamkan, atau menyebarluaskan data kontak Anda kepada pihak
                ketiga tanpa persetujuan Anda, kecuali diwajibkan oleh ketentuan
                hukum yang berlaku di Republik Indonesia.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-lg sm:text-xl font-bold text-brand-950">
                4. Tautan ke Layanan Pihak Ketiga
              </h2>
              <p>
                Situs ini memuat tautan menuju aplikasi pihak ketiga, antara lain
                WhatsApp (wa.me) dan Google Maps. Penggunaan layanan tersebut
                tunduk pada kebijakan privasi masing-masing penyedia layanan.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-lg sm:text-xl font-bold text-brand-950">
                5. Pertanyaan & Hubungi Kami
              </h2>
              <p>
                Jika Anda memiliki pertanyaan mengenai kebijakan privasi ini atau
                ingin meminta pembaruan data kontak Anda, silakan hubungi kami
                melalui email resmi di{" "}
                <a
                  href={`mailto:${company.email}`}
                  className="font-bold text-brand-700 underline"
                >
                  {company.email}
                </a>{" "}
                atau telepon kantor di{" "}
                <a
                  href={`tel:${company.phoneHref}`}
                  className="font-bold text-brand-700 underline"
                >
                  {company.phoneDisplay}
                </a>
                .
              </p>
            </section>
          </div>

          <div className="border-t border-ink-100 pt-6">
            <Link
              href="/"
              className="text-sm font-bold text-brand-700 hover:underline"
            >
              &larr; Kembali ke Halaman Utama
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
