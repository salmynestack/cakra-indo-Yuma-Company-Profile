import { z } from "zod";

const indonesianPhoneRegex = /^(?:\+62|62|0)8[1-9][0-9]{7,11}$/;

export const contactFormSchema = z.object({
  nama: z
    .string()
    .trim()
    .min(2, { message: "Nama lengkap wajib diisi minimal 2 karakter." })
    .max(100, { message: "Nama maksimal 100 karakter." }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Alamat email wajib diisi." })
    .email({ message: "Format email tidak valid (contoh: nama@instansi.go.id)." }),
  phone: z
    .string()
    .trim()
    .min(1, { message: "Nomor WhatsApp / HP wajib diisi." })
    .regex(indonesianPhoneRegex, {
      message: "Nomor HP harus nomor Indonesia yang valid (contoh: 08123456789 atau +628123456789).",
    }),
  perusahaan: z.string().trim().max(120, { message: "Nama instansi maksimal 120 karakter." }).optional(),
  kategori: z.enum(["calon-klien", "konsumen", "vendor", "mitra-bisnis", "lainnya"], {
    message: "Silakan pilih kategori pengirim.",
  }),
  layanan: z.string().trim().optional(),
  pesan: z
    .string()
    .trim()
    .min(20, { message: "Pesan minimal 20 karakter agar rincian kebutuhan Anda jelas." })
    .max(2000, { message: "Pesan maksimal 2000 karakter." }),
  persetujuan: z.literal(true, {
    message: "Anda perlu menyetujui pemrosesan data untuk keperluan komunikasi.",
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const categoryLabels: Record<string, string> = {
  "calon-klien": "Calon Klien (Permintaan Penawaran)",
  konsumen: "Konsumen (Pertanyaan Produk / Layanan)",
  vendor: "Vendor / Pemasok (Pengajuan Kerja Sama)",
  "mitra-bisnis": "Mitra Bisnis (Peluang Kemitraan)",
  lainnya: "Lainnya (Pertanyaan Umum)",
};
