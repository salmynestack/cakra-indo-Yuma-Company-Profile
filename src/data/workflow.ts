export type WorkflowStep = {
  step: number;
  title: string;
  summary: string;
  detail: string;
};

export const workflowSteps: WorkflowStep[] = [
  {
    step: 1,
    title: "Konsultasi & Spesifikasi",
    summary: "Memahami kebutuhan ruang, volume barang, dan jadwal kerja instansi.",
    detail:
      "Klien menyampaikan rincian kebutuhan (TOR, denah ruangan, atau daftar volume barang). Tim kami siap melakukan peninjauan lapangan bila diperlukan untuk pengukuran presisi.",
  },
  {
    step: 2,
    title: "Penawaran Harga & Sampel",
    summary: "Penyusunan Surat Penawaran Harga (SPH) resmi beserta contoh material.",
    detail:
      "Kami menyusun rincian anggaran biaya yang transparan dan kompetitif. Untuk mebel atau interior, kami menyediakan sampel material (kayu, kain, atau HPL) untuk disetujui klien.",
  },
  {
    step: 3,
    title: "Kesepakatan Kontrak / SPK",
    summary: "Penandatanganan dokumen kerja sama dengan legalitas hukum yang tertib.",
    detail:
      "Penerbitan Surat Perintah Kerja (SPK), Surat Perjanjian Kerja Sama, atau Purchase Order (PO). Seluruh klausul jadwal, garansi, dan termin pembayaran disepakati secara formal.",
  },
  {
    step: 4,
    title: "Produksi & Kontrol Kualitas",
    summary: "Proses fabrikasi mebel atau pengadaan barang dengan inspeksi ketat.",
    detail:
      "Barang diproduksi di workshop kami atau dihimpun dari jejaring produsen tepercaya. Setiap unit melewati pengecekan kualitas sebelum dikemas untuk memastikan kesesuaian spesifikasi.",
  },
  {
    step: 5,
    title: "Pengiriman, Instalasi & Serah Terima",
    summary: "Pengantaran ke lokasi, perakitan rapi, dan penandatanganan BAST.",
    detail:
      "Tim logistik kami mengantar dan merakit barang langsung di ruangan pemesan. Setelah selesai dicek bersama pihak instansi, proses ditutup dengan Berita Acara Serah Terima (BAST).",
  },
];
