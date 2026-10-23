export type ClientPartner = {
  name: string;
  category: "BUMN" | "Pemerintah" | "Pendidikan" | "Swasta";
  location: string;
};

/**
 * Daftar klien & mitra kerja sama PT Cakra Indo Yuma dari Company Profile 2026.
 * Nama klien ditampilkan sebagai teks/badge berwibawa sampai izin penggunaan logo resmi tersedia.
 */
export const clientPartners: ClientPartner[] = [
  { name: "PT Pertamina (Persero)", category: "BUMN", location: "Jakarta" },
  { name: "PT Pertamina Patra Niaga MOR IV", category: "BUMN", location: "Semarang" },
  { name: "PT Pertamina Patra Niaga RU IV", category: "BUMN", location: "Cilacap" },
  { name: "PT Kilang Pertamina Internasional (KPI)", category: "BUMN", location: "Cilacap" },
  { name: "Universitas Jenderal Soedirman (Unsoed)", category: "Pendidikan", location: "Purwokerto" },
  { name: "Politeknik Negeri Cilacap", category: "Pendidikan", location: "Cilacap" },
  { name: "Dinas Pekerjaan Umum dan Penataan Ruang Kab. Cilacap", category: "Pemerintah", location: "Cilacap" },
  { name: "Kejaksaan Negeri Cilacap", category: "Pemerintah", location: "Cilacap" },
  { name: "Dinas Kesehatan Kab. Bandung", category: "Pemerintah", location: "Bandung" },
  { name: "PT Pelindo Tanjung Intan", category: "BUMN", location: "Cilacap" },
  { name: "PT PLN (Persero) UP3 Indramayu", category: "BUMN", location: "Indramayu" },
  { name: "RSUD Cilacap", category: "Pemerintah", location: "Cilacap" },
  { name: "Dinas Kesehatan Kabupaten Cilacap", category: "Pemerintah", location: "Cilacap" },
  { name: "Badan Pengelolaan Keuangan dan Aset Daerah (BPKAD)", category: "Pemerintah", location: "Cilacap" },
  { name: "Sekretariat Daerah (Sekda) Cilacap", category: "Pemerintah", location: "Cilacap" },
  { name: "PT BRI Kanca Jalembar", category: "BUMN", location: "Jakarta" },
  { name: "Bappeda Kabupaten Cilacap", category: "Pemerintah", location: "Cilacap" },
  { name: "Pengadilan Negeri Cilacap", category: "Pemerintah", location: "Cilacap" },
  { name: "SMA Negeri 1 Cilacap", category: "Pendidikan", location: "Cilacap" },
  { name: "PT Rocket Chicken Indonesia", category: "Swasta", location: "Pemalang" },
  { name: "SLCOM Purwokerto", category: "Swasta", location: "Purwokerto" },
];
