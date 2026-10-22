import type { LegalItem, Stat, TeamMember, TimelineItem } from "@/types";

/**
 * Data perusahaan. Sumber: Company Profile 2025 (Compro_CIY.pdf), PRD bagian 10.
 * Nilai bertanda KONFIRMASI masih perlu dipastikan oleh PT Cakra Indo Yuma (PRD 10.5).
 */

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://cakraindoyuma.co.id").replace(
  /\/$/,
  "",
);

export const company = {
  name: "PT Cakra Indo Yuma",
  shortName: "Cakra Indo Yuma",
  legalName: "PT. Cakra Indo Yuma",
  foundedYear: 2020,
  foundedLabel: "Maret 2020",
  city: "Cilacap",
  tagline: "Supplier mebel, interior, ATK, dan kebutuhan instansi dari Cilacap",
  description:
    "PT Cakra Indo Yuma adalah perusahaan supplier yang berdiri di Cilacap, Jawa Tengah, sejak Maret 2020. Kami memasok kebutuhan restoran serta instansi pemerintah dan swasta, mulai dari mebel, interior, alat tulis kantor, hingga penyelenggaraan acara.",
  artalana:
    "Artalana adalah brand kami untuk sektor supplier instansi: alat tulis, furniture, interior, dan eksterior.",

  address: {
    street: "Jl. Perintis Kemerdekaan No. 51",
    district: "Kel. Kebonmanis, Kec. Cilacap Utara",
    city: "Kabupaten Cilacap",
    province: "Jawa Tengah",
    // KONFIRMASI: 53235 (NIB & NPWP) atau 53223 (lampiran NIB).
    postalCode: "53235",
    country: "ID",
  },

  // KONFIRMASI: sampul tertulis (0202) 547927, NIB tertulis 0282547927. Kode area Cilacap 0282.
  phoneDisplay: "(0282) 547927",
  phoneHref: "+62282547927",

  // KONFIRMASI: sampul memakai pt.cakraindoyuma@gmail.com, NIB memakai cakraindoyuma@gmail.com.
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "pt.cakraindoyuma@gmail.com",

  // KONFIRMASI: nomor WhatsApp belum ada di dokumen. Isi lewat NEXT_PUBLIC_WA_NUMBER (format 62xxxxxxxxxx).
  whatsapp: process.env.NEXT_PUBLIC_WA_NUMBER ?? "",

  // KONFIRMASI: jam operasional belum ada di dokumen. Biarkan kosong agar tidak tampil.
  hours: [] as { days: string; time: string }[],

  // KONFIRMASI: akun sosial media belum ada di dokumen. Tambahkan { label, href } bila sudah ada.
  socials: [] as { label: string; href: string }[],

  mapsEmbedUrl:
    process.env.NEXT_PUBLIC_MAPS_EMBED_URL ??
    "https://www.google.com/maps?q=Jl.+Perintis+Kemerdekaan+No.+51,+Kebonmanis,+Cilacap+Utara,+Cilacap&output=embed",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Jl.+Perintis+Kemerdekaan+No.+51,+Kebonmanis,+Cilacap+Utara,+Cilacap",

  /**
   * T-09: path PDF Company Profile versi publik (tanpa halaman legalitas mentah dan data pribadi).
   * Biarkan null sampai file tersedia; tombol unduh otomatis disembunyikan.
   */
  profilePdf: null as string | null,
};

export const fullAddress = `${company.address.street}, ${company.address.district}, ${company.address.city}, ${company.address.province} ${company.address.postalCode}`;

export const vision =
  "Menjadi korporasi global terkemuka melalui diversifikasi dan integrasi usaha untuk memberi peran pada masa depan masyarakat Indonesia yang lebih baik.";

export const missions = [
  "Menjalin kerja sama bisnis yang baik dan profesional.",
  "Menyediakan produk dan layanan berkualitas tinggi secara berkesinambungan.",
  "Menjalankan kinerja yang efisien dan efektif.",
  "Mengembangkan karyawan yang kompeten.",
  "Memberi manfaat optimum bagi pemegang saham, karyawan, dan masyarakat.",
];

/**
 * Nilai perusahaan (T-03). Belum ada di Company Profile, jadi diturunkan dari misi.
 * KONFIRMASI ke perusahaan sebelum tayang.
 */
export const values = [
  {
    icon: "handshake" as const,
    title: "Profesional",
    description: "Kesepakatan, jadwal, dan spesifikasi dijalankan sesuai yang tertulis di dokumen kerja sama.",
  },
  {
    icon: "badge-check" as const,
    title: "Berkualitas",
    description: "Barang diperiksa sebelum dikirim agar sesuai spesifikasi yang diminta instansi atau klien.",
  },
  {
    icon: "target" as const,
    title: "Efisien",
    description: "Satu pemasok untuk banyak kebutuhan, sehingga proses pengadaan lebih ringkas.",
  },
  {
    icon: "users" as const,
    title: "Bertumbuh bersama",
    description: "Mengembangkan tim yang kompeten dan memberi manfaat bagi mitra serta masyarakat sekitar.",
  },
];

/** Linimasa dari tanggal dokumen legalitas dan rekam jejak project (T-04). */
export const timeline: TimelineItem[] = [
  {
    date: "3 Maret 2020",
    title: "Perusahaan berdiri",
    description:
      "Akta Pendirian No. 1 ditandatangani dan PT Cakra Indo Yuma resmi berkedudukan di Kabupaten Cilacap.",
  },
  {
    date: "17 Juni 2020",
    title: "Izin usaha terbit",
    description: "Izin usaha (SIUP) terbit, perusahaan mulai melayani pengadaan untuk instansi dan restoran.",
  },
  {
    date: "2020 sampai 2024",
    title: "Rekam jejak bertambah",
    description:
      "Melayani sekolah, rumah sakit, dinas, BUMN, dan perusahaan swasta di Cilacap, Purwokerto, hingga Surabaya.",
  },
  {
    date: "27 Juli 2024",
    title: "Perubahan anggaran dasar",
    description: "Akta Perubahan No. 97 disahkan untuk memperluas bidang usaha perusahaan.",
  },
  {
    date: "2025",
    title: "30 project selesai",
    description:
      "Tercatat 30 project selesai untuk instansi pemerintah, BUMN, dan swasta, termasuk melalui brand Artalana.",
  },
];

/** Ringkasan legalitas (T-06). Scan dokumen tidak dipublikasikan (PRD 10.4). */
export const legalItems: LegalItem[] = [
  { label: "Badan hukum", value: "Perseroan Terbatas, berkedudukan di Kabupaten Cilacap" },
  { label: "Akta Pendirian", value: "No. 1, 3 Maret 2020" },
  { label: "SK Kemenkumham (pendirian)", value: "AHU-0013404.AH.01.01 Tahun 2020" },
  { label: "Akta Perubahan", value: "No. 97, 27 Juli 2024" },
  { label: "SK Kemenkumham (perubahan)", value: "AHU-0047269.AH.01.02 Tahun 2024" },
  { label: "Nomor Induk Berusaha (NIB)", value: "0220208341324" },
  { label: "Izin usaha (SIUP)", value: "Terbit 17 Juni 2020" },
];

/** Angka pencapaian (H-04). Semua angka bersumber dari Company Profile 2025. */
export const stats: Stat[] = [
  { value: 30, label: "project selesai sejak 2020" },
  { value: 2020, label: "tahun berdiri di Cilacap", raw: true },
  { value: 6, label: "lini layanan pengadaan" },
  { value: 8, label: "kota lokasi project" },
];

/** Kota lokasi project dari Company Profile (PRD 10.3). */
export const projectCities = [
  "Cilacap",
  "Purwokerto",
  "Sokaraja",
  "Pemalang",
  "Indramayu",
  "Surabaya",
  "Jakarta",
  "Semarang",
];

/**
 * Tim manajemen (T-05). Tampil hanya bila disetujui perusahaan.
 * Array kosong = section tidak dirender.
 */
export const team: TeamMember[] = [];
