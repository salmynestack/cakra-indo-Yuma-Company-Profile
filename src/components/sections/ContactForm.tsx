"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { services } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import {
  contactFormSchema,
  type ContactFormData,
} from "@/lib/validators";
import {
  buildMailtoUrl,
  buildWhatsAppUrl,
  formatContactMessage,
} from "@/lib/whatsapp";

const categoryOptions = [
  { value: "calon-klien", label: "Calon Klien (Permintaan Penawaran / SPH)" },
  { value: "konsumen", label: "Konsumen (Pertanyaan Produk / Layanan)" },
  { value: "vendor", label: "Vendor / Pemasok (Pengajuan Kerja Sama)" },
  { value: "mitra-bisnis", label: "Mitra Bisnis (Peluang Kemitraan)" },
  { value: "lainnya", label: "Lainnya (Pertanyaan Umum)" },
];

export function ContactForm() {
  const searchParams = useSearchParams();
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(
    null,
  );

  const queryLayanan = searchParams.get("layanan") || "";
  const queryKategori = searchParams.get("kategori") || "";

  // Cocokkan nilai query param dengan opsi yang valid
  const initialLayanan = services.some((s) => s.slug === queryLayanan)
    ? queryLayanan
    : "";

  const isSenderCategory = (
    val: string | null,
  ): val is ContactFormData["kategori"] => {
    return (
      val === "calon-klien" ||
      val === "konsumen" ||
      val === "vendor" ||
      val === "mitra-bisnis" ||
      val === "lainnya"
    );
  };

  const initialKategori: ContactFormData["kategori"] = isSenderCategory(queryKategori)
    ? queryKategori
    : "calon-klien";

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      nama: "",
      email: "",
      phone: "",
      perusahaan: "",
      kategori: initialKategori,
      layanan: initialLayanan,
      pesan: "",
      persetujuan: true,
    },
  });

  // Sinkronisasi query param bila berubah (PRD K-08)
  useEffect(() => {
    if (queryLayanan && services.some((s) => s.slug === queryLayanan)) {
      setValue("layanan", queryLayanan);
    }
    if (isSenderCategory(queryKategori)) {
      setValue("kategori", queryKategori);
    }
  }, [queryLayanan, queryKategori, setValue]);

  const serviceOptions = services.map((s) => ({
    value: s.title,
    label: s.title,
  }));

  const onSubmit = (data: ContactFormData) => {
    setSubmittedData(data);
    setIsSuccess(true);

    // Buka WhatsApp di tab baru dengan pesan terformat (PRD K-04)
    const formatted = formatContactMessage(data);
    const waUrl = buildWhatsAppUrl(formatted);
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  const handleReset = () => {
    reset();
    setIsSuccess(false);
    setSubmittedData(null);
  };

  if (isSuccess && submittedData) {
    const mailtoUrl = buildMailtoUrl(submittedData);

    return (
      <div className="rounded-card border-2 border-success-600/30 bg-success-50 p-8 text-center space-y-6">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success-600 text-white">
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <div className="space-y-2">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-ink-900">
            Pesan Anda Telah Siap Dikirim!
          </h3>
          <p className="text-sm text-ink-700 max-w-md mx-auto leading-relaxed">
            Halaman WhatsApp telah dibuka di tab baru. Silakan tekan tombol kirim di
            aplikasi WhatsApp untuk menyampaikan rincian kepada tim kami.
          </p>
        </div>

        <div className="rounded-control bg-white p-4 border border-ink-200 text-left text-xs text-ink-600 space-y-1.5 max-w-md mx-auto">
          <p className="font-bold text-ink-900">Ringkasan Data:</p>
          <p>Pengirim: {submittedData.nama}</p>
          <p>Email: {submittedData.email}</p>
          <p>WhatsApp: {submittedData.phone}</p>
          {submittedData.perusahaan && <p>Instansi: {submittedData.perusahaan}</p>}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button href={mailtoUrl} isExternal variant="outline" size="sm">
            Kirim Salinan via Email (mailto)
          </Button>
          <Button type="button" onClick={handleReset} variant="secondary" size="sm">
            Kirim Pesan Lainnya
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-card border border-ink-200 bg-white p-6 sm:p-8 shadow-xs space-y-6"
    >
      <div className="border-b border-ink-100 pb-4">
        <h3 className="font-display text-xl font-bold text-brand-950">
          Formulir Permintaan Penawaran & Pertanyaan
        </h3>
        <p className="text-xs text-ink-500 mt-1">
          Tanda bintang (<span className="text-error-600">*</span>) wajib diisi.
          Pesan akan diteruskan langsung ke WhatsApp resmi kami.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Nama Lengkap */}
        <Input
          label="Nama Lengkap"
          placeholder="Contoh: Budi Santoso"
          required
          error={errors.nama?.message}
          {...register("nama")}
        />

        {/* Alamat Email */}
        <Input
          type="email"
          label="Alamat Email"
          placeholder="nama@instansi.go.id"
          required
          error={errors.email?.message}
          {...register("email")}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Nomor WhatsApp / HP */}
        <Input
          type="tel"
          label="Nomor WhatsApp / HP"
          placeholder="08123456789 atau +628123456789"
          required
          hint="Format nomor Indonesia diawali 08 atau +62"
          error={errors.phone?.message}
          {...register("phone")}
        />

        {/* Instansi / Perusahaan */}
        <Input
          label="Instansi / Perusahaan (Opsional)"
          placeholder="Dinas, BUMN, Sekolah, atau Perusahaan"
          error={errors.perusahaan?.message}
          {...register("perusahaan")}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Kategori Pengirim */}
        <Select
          label="Kategori Pengirim"
          required
          options={categoryOptions}
          error={errors.kategori?.message}
          {...register("kategori")}
        />

        {/* Layanan Diminati */}
        <Select
          label="Layanan Diminati (Opsional)"
          placeholder="-- Pilih Layanan yang Sesuai --"
          options={serviceOptions}
          error={errors.layanan?.message}
          {...register("layanan")}
        />
      </div>

      {/* Isi Pesan */}
      <Textarea
        label="Rincian Kebutuhan / Pesan"
        placeholder="Tuliskan spesifikasi barang yang dibutuhkan, perkiraan jumlah/volume, lokasi proyek, serta batas waktu penyelesaian..."
        rows={5}
        required
        hint="Minimal 20 karakter agar tim kami dapat memahami kebutuhan secara jelas."
        error={errors.pesan?.message}
        {...register("pesan")}
      />

      {/* Persetujuan Privasi (PRD K-02) */}
      <div className="space-y-1.5 pt-2">
        <label className="flex items-start gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded-xs border-ink-300 text-brand-600 focus:ring-brand-600"
            {...register("persetujuan")}
          />
          <span className="text-xs text-ink-700 leading-relaxed">
            Saya menyetujui bahwa data yang saya kirimkan digunakan semata-mata
            oleh PT Cakra Indo Yuma untuk membalas komunikasi dan penawaran
            pengadaan sesuai{" "}
            <a
              href="/kebijakan-privasi"
              target="_blank"
              className="text-brand-700 font-semibold underline"
            >
              Kebijakan Privasi
            </a>
            .<span className="text-error-600 ml-0.5">*</span>
          </span>
        </label>
        {errors.persetujuan && (
          <p className="text-xs font-medium text-error-600">
            {errors.persetujuan.message}
          </p>
        )}
      </div>

      {/* Tombol Submit */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? "Menyiapkan Pesan..." : "Kirim via WhatsApp Resmi"}
        </Button>
        <p className="text-center text-[11px] text-ink-500 mt-2">
          Pesan akan diformat secara rapi dan otomatis terbuka di aplikasi WhatsApp Anda.
        </p>
      </div>
    </form>
  );
}
