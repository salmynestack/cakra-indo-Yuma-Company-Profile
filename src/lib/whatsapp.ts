import { company } from "@/data/company";
import { categoryLabels, type ContactFormData } from "./validators";

export function formatContactMessage(data: ContactFormData): string {
  const lines = [
    `Halo Admin ${company.name},`,
    "",
    "Saya ingin mengajukan pesan melalui formulir website resmi dengan rincian berikut:",
    "",
    `*Nama:* ${data.nama}`,
    `*Email:* ${data.email}`,
    `*No. WhatsApp / HP:* ${data.phone}`,
    data.perusahaan ? `*Instansi / Perusahaan:* ${data.perusahaan}` : null,
    `*Kategori Pengirim:* ${categoryLabels[data.kategori] ?? data.kategori}`,
    data.layanan ? `*Layanan Diminati:* ${data.layanan}` : null,
    "",
    "*Isi Pesan / Kebutuhan:*",
    data.pesan,
    "",
    "Mohon informasi dan tindak lanjutnya. Terima kasih.",
  ];

  return lines.filter((l): l is string => l !== null).join("\n");
}

export function buildWhatsAppUrl(message: string): string {
  const rawNumber = company.whatsapp || "6281227127472";
  const cleanNumber = rawNumber.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

export function buildMailtoUrl(data: ContactFormData): string {
  const subject = `[Inquiry Web] ${categoryLabels[data.kategori] ?? data.kategori} - ${data.nama}${data.perusahaan ? ` (${data.perusahaan})` : ""
    }`;
  const body = formatContactMessage(data).replace(/\*/g, ""); // Hilangkan format bintang WhatsApp untuk email
  return `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    body,
  )}`;
}

export function buildFloatingWhatsAppUrl(): string {
  const defaultText = `Halo Admin ${company.name}, saya ingin berkonsultasi mengenai kebutuhan pengadaan / layanan perusahaan Anda.`;
  return buildWhatsAppUrl(defaultText);
}
