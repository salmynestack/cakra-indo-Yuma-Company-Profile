export type ServiceSlug =
  | "mebel-furniture"
  | "interior-eksterior"
  | "atk-kertas-elektronik"
  | "event-organizer"
  | "supplier-restoran"
  | "pengadaan-umum";

export type IconName =
  | "armchair"
  | "paint-roller"
  | "printer"
  | "calendar-days"
  | "utensils"
  | "package"
  | "file-check"
  | "building"
  | "layers"
  | "map-pin"
  | "handshake"
  | "badge-check"
  | "target"
  | "users"
  | "scale"
  | "leaf";

export type Service = {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  icon: IconName;
  /** Ringkasan satu kalimat untuk kartu di Home. */
  summary: string;
  description: string;
  scope: string[];
  benefits: string[];
  /** Brand Artalana tampil sebagai sub-brand pada layanan tertentu (PRD 10.7). */
  artalana?: boolean;
  featured?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  categories: ServiceSlug[];
  /** true bila project punya foto/deskripsi sehingga halaman detail dibuat (PRD 10.3). */
  hasDetail: boolean;
  client: string;
  clientType: "Pemerintah" | "BUMN" | "Swasta" | "Pendidikan";
  location?: string;
  year?: number;
  summary: string;
  challenge?: string;
  solution?: string;
  result?: string;
  cover?: string;
  gallery: { src: string; alt: string }[];
  /** true bila foto masih ilustrasi dan belum dokumentasi asli. */
  illustrativeImages?: boolean;
  featured?: boolean;
};

export type SenderCategory = "calon-klien" | "konsumen" | "vendor" | "mitra-bisnis" | "lainnya";

export type FaqItem = {
  question: string;
  answer: string;
};

export type TimelineItem = {
  date: string;
  title: string;
  description: string;
};

export type LegalItem = {
  label: string;
  value: string;
  note?: string;
};

export type TeamMember = {
  name: string;
  role: string;
  photo?: string;
};

export type Stat = {
  value: number;
  suffix?: string;
  label: string;
  /** Jangan format sebagai angka ribuan (mis. tahun 2020). */
  raw?: boolean;
};
