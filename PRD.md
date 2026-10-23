# PRD — Website Company Profile PT Cakra Indo Yuma

Versi 1.0 (Draft untuk review) · 22 Oktober 2026 · Disusun oleh Front-End Developer

## 1. Ringkasan Produk

Website company profile PT Cakra Indo Yuma adalah situs informasi yang menampilkan profil, layanan, dan portofolio perusahaan, sekaligus menyediakan jalur komunikasi yang jelas bagi calon klien, konsumen, vendor, mitra bisnis, dan publik umum. Situs dibangun dengan Next.js sebagai aplikasi front-end statis **tanpa backend**: konten disimpan sebagai file data di dalam kode, dan seluruh fitur interaktif berjalan di sisi browser.

| Item | Keterangan |
|---|---|
| Nama produk | Website Company Profile PT Cakra Indo Yuma |
| Jenis | Website statis (SSG), responsif |
| Halaman utama | Home, Tentang Kami, Layanan, Project, Kontak |
| Bahasa | Bahasa Indonesia (multi-bahasa di luar scope v1) |
| Stack | Next.js (App Router), TypeScript, Tailwind CSS |
| Backend / database | Tidak ada |
| Hosting | Vercel (rekomendasi) atau Netlify |

### Masalah yang Diselesaikan

- Pengunjung menilai kredibilitas perusahaan dari kehadiran online yang profesional.
- Informasi layanan, rekam jejak, dan legalitas perlu tersaji terpusat dan mudah dicari.
- Segmen berbeda (klien, vendor, mitra) butuh jalur kontak yang jelas sesuai kepentingannya.

## 2. Goals

### 2.1 Tujuan Bisnis

1. Membangun citra profesional dan kredibel PT Cakra Indo Yuma di dunia digital.
2. Meningkatkan jumlah inquiry dari calon klien, vendor, dan mitra bisnis.
3. Menjadi satu sumber informasi resmi tentang layanan dan portofolio perusahaan.
4. Menyediakan fondasi yang mudah diperbarui dan dikembangkan (misalnya ke CMS atau backend di fase berikutnya).

### 2.2 Tujuan Pengguna

- Memahami siapa perusahaan ini dan apa yang ditawarkan dalam waktu kurang dari 1 menit.
- Menemukan layanan atau project yang relevan dengan cepat.
- Menghubungi perusahaan dengan langkah sesedikit mungkin.

### 2.3 Success Metrics

| Metrik | Target awal | Cara ukur |
|---|---|---|
| Lighthouse Performance (mobile) | ≥ 90 | Lighthouse CI |
| Lighthouse Accessibility / SEO / Best Practices | ≥ 95 | Lighthouse CI |
| LCP / INP / CLS | ≤ 2,5 dtk / ≤ 200 ms / ≤ 0,1 | Vercel Analytics atau CrUX |
| Rasio klik CTA Kontak (WhatsApp, email, form) | ≥ 3% dari sesi | GA4 event |
| Bounce rate Home | ≤ 55% | GA4 |
| Ketersediaan fitur (semua acceptance criteria lulus) | 100% | Test checklist & e2e |

Catatan: angka target adalah usulan awal dan dapat disesuaikan setelah ada baseline data.

## 3. Target Pengguna

| Segmen | Kebutuhan utama | Halaman kunci | Aksi yang diharapkan |
|---|---|---|---|
| Calon klien | Menilai kapabilitas, melihat bukti kerja, meminta penawaran | Layanan, Project, Kontak | Kirim permintaan penawaran |
| Konsumen | Memahami produk/layanan dan cara menghubungi | Home, Layanan, Kontak | Tanya via WhatsApp atau form |
| Vendor | Mengetahui profil dan prosedur pengajuan kerja sama | Tentang Kami, Kontak (bagian Vendor) | Kirim pengajuan sebagai vendor |
| Mitra bisnis | Memastikan legalitas, reputasi, dan peluang kemitraan | Tentang Kami, Project, Kontak | Ajukan kemitraan |
| Publik umum | Informasi umum, lokasi, dan kontak resmi | Home, Tentang Kami, Kontak | Membaca, membagikan, menghubungi |

## 4. Fitur & Requirement Fungsional

Prioritas: **P0** wajib rilis · **P1** penting · **P2** opsional jika waktu memungkinkan.

### 4.1 Komponen Global

| ID | Fitur | Kriteria penerimaan | P |
|---|---|---|---|
| G-01 | Navbar sticky: logo, menu Home, Tentang Kami, Layanan, Project, Kontak, tombol CTA Hubungi Kami | Menu aktif ter-highlight sesuai route; navbar tetap terlihat saat scroll; klik logo menuju Home | P0 |
| G-02 | Menu mobile (hamburger drawer) | Muncul di bawah 1024px; menutup saat link diklik, tombol Esc, atau klik di luar; focus trap aktif; scroll body terkunci saat terbuka | P0 |
| G-03 | Footer: logo, deskripsi singkat, tautan menu, kontak ringkas, sosial media, copyright, Kebijakan Privasi | Semua tautan valid; tahun copyright dinamis | P0 |
| G-04 | Tombol WhatsApp melayang | Tampil di semua halaman; membuka wa.me dengan pesan template di tab baru | P1 |
| G-05 | Tombol kembali ke atas | Muncul setelah scroll lebih dari 400px; scroll halus | P2 |
| G-06 | Halaman 404 | Rute tidak dikenal menampilkan 404 bertema dengan tombol kembali ke Home | P0 |
| G-07 | SEO per halaman | Title, meta description, dan Open Graph unik; sitemap.xml dan robots.txt tersedia | P0 |
| G-08 | Halaman Kebijakan Privasi (statis) | Dapat diakses dari footer dan form kontak | P1 |

### 4.2 HOME

| ID | Fitur | Kriteria penerimaan | P |
|---|---|---|---|
| H-01 | Hero: headline, subheadline, visual, 2 CTA | CTA Konsultasi menuju /kontak; CTA Lihat Project menuju /project; tanpa layout shift | P0 |
| H-02 | Ringkasan Tentang Kami | Tautan Selengkapnya menuju /tentang-kami | P0 |
| H-03 | Layanan unggulan (3–6 kartu) | Tiap kartu menuju /layanan#slug; data diambil dari file layanan | P0 |
| H-04 | Angka pencapaian (counter animasi) | Animasi berjalan sekali saat masuk viewport; menampilkan nilai akhir bila reduced-motion aktif | P1 |
| H-05 | Project unggulan (3 kartu) | Klik kartu menuju /project/slug; tombol Lihat Semua menuju /project | P0 |
| H-06 | Keunggulan perusahaan | Minimal 3 poin dengan ikon dan deskripsi singkat | P1 |
| H-07 | Logo klien dan mitra | Grid atau marquee; semua logo punya alt text; memakai nama klien (teks) bila izin logo belum ada | P1 |
| H-08 | Testimoni (carousel) | Panah, dot, dan swipe berfungsi; autoplay bisa dijeda | P2 |
| H-09 | CTA penutup | Tombol menuju /kontak | P0 |

### 4.3 TENTANG KAMI

| ID | Fitur | Kriteria penerimaan | P |
|---|---|---|---|
| T-01 | Profil perusahaan (narasi dan foto) | Teks terbaca nyaman; gambar responsif | P0 |
| T-02 | Visi dan misi | Tampil jelas dan terstruktur | P0 |
| T-03 | Nilai perusahaan (kartu ikon) | Minimal 3 nilai | P1 |
| T-04 | Sejarah / timeline | Vertikal di mobile, zigzag di desktop | P1 |
| T-05 | Tim manajemen | Foto, nama, jabatan; tampil hanya bila disetujui perusahaan; placeholder bila foto belum ada | P1 |
| T-06 | Legalitas dan sertifikasi (NIB, akta, sertifikat) | Tampil sebagai ringkasan legalitas (badge dan nomor); scan dokumen tidak dipublikasikan mentah (lihat 10.4) | P1 |
| T-07 | Klien dan mitra | Memakai ulang komponen H-07 | P2 |
| T-08 | CTA menuju Kontak | Tombol berfungsi | P0 |

### 4.4 LAYANAN

| ID | Fitur | Kriteria penerimaan | P |
|---|---|---|---|
| L-01 | Sub-navigasi anchor sticky antar layanan | Klik scroll halus ke bagian terkait; item aktif ter-highlight saat scroll | P0 |
| L-02 | Bagian per layanan: judul, ikon/gambar, deskripsi, cakupan pekerjaan, manfaat | Struktur konsisten antar layanan; dirender dari data | P0 |
| L-03 | CTA Ajukan Penawaran per layanan | Menuju /kontak?layanan=slug dan form otomatis memilih layanan tersebut | P0 |
| L-04 | Alur kerja (5 langkah) | Tampil berurutan dan responsif | P1 |
| L-05 | FAQ accordion | Bisa dibuka/tutup dengan mouse dan keyboard; atribut aria-expanded benar | P1 |
| L-06 | Tautan ke project terkait | Menuju /project?kategori=slug dan filter langsung aktif | P1 |

### 4.5 PROJECT

| ID | Fitur | Kriteria penerimaan | P |
|---|---|---|---|
| P-01 | Grid kartu project: gambar, judul, kategori, tahun, lokasi | 1 kolom (mobile), 2 (tablet), 3 (desktop) | P0 |
| P-02 | Filter kategori | Memfilter instan tanpa reload; state tersimpan di URL (?kategori=); jumlah hasil tampil | P0 |
| P-03 | Pencarian judul/klien | Debounce 300 ms; hasil kosong menampilkan pesan dan tombol Reset | P1 |
| P-04 | Pengurutan (terbaru/terlama) | Urutan berubah sesuai pilihan | P2 |
| P-05 | Pagination atau Load more (9 item per halaman) | Jumlah item benar; tidak ada duplikasi | P1 |
| P-06 | Halaman detail /project/slug: ringkasan, klien, lokasi, tahun, layanan, tantangan, solusi, hasil, galeri | Slug tidak valid menampilkan 404; metadata dinamis per project; detail hanya untuk project yang punya foto/deskripsi (lihat 10.3) | P0 |
| P-07 | Galeri dengan lightbox | Panah, Esc, dan swipe berfungsi; focus trap aktif | P1 |
| P-08 | Project terkait dan navigasi sebelumnya/berikutnya | Menampilkan 2–3 project relevan | P2 |
| P-09 | CTA Diskusikan project serupa | Menuju /kontak | P0 |

### 4.6 KONTAK

| ID | Fitur | Kriteria penerimaan | P |
|---|---|---|---|
| K-01 | Informasi kontak: alamat, telepon, email, jam operasional | Telepon memakai tel:, email memakai mailto:; bisa diklik di mobile | P0 |
| K-02 | Form kontak dengan field: Nama*, Email*, No. HP/WhatsApp*, Perusahaan, Kategori pengirim* (Calon Klien, Konsumen, Vendor, Mitra Bisnis, Lainnya), Layanan diminati, Pesan*, Persetujuan privasi* | Semua field tampil dan bisa diisi; field wajib ditandai | P0 |
| K-03 | Validasi form (React Hook Form dan Zod) | Pesan error inline berbahasa Indonesia; email dan nomor HP Indonesia (08xx atau +62) tervalidasi; pesan minimal 20 karakter; submit diblokir bila tidak valid | P0 |
| K-04 | Pengiriman tanpa backend: submit membuka WhatsApp (wa.me) dengan pesan terformat dari isi form; tombol alternatif Kirim via Email (mailto:) | Isi pesan memuat seluruh field; karakter di-encode benar; tampil state sukses dan opsi reset form | P0 |
| K-05 | Peta lokasi (Google Maps embed, lazy load) dan tombol Petunjuk Arah | Peta tidak memblokir render awal; tombol membuka Google Maps | P1 |
| K-06 | Bagian khusus Vendor dan Mitra: ringkasan prosedur dan dokumen yang diperlukan | Tombol Ajukan memilih kategori otomatis di form | P1 |
| K-07 | Tautan sosial media | Semua tautan valid dan terbuka di tab baru | P2 |
| K-08 | Prefill form via query string (?layanan=, ?kategori=) | Nilai valid terpilih otomatis; nilai tidak valid diabaikan | P0 |

### 4.7 Keputusan Mekanisme Pengiriman Form (tanpa backend)

Karena tidak ada backend, form tidak dapat menyimpan data. Opsi yang tersedia:

| Opsi | Kelebihan | Kekurangan | Status |
|---|---|---|---|
| A. Redirect ke WhatsApp + mailto | Tanpa biaya, tanpa server, cepat dibuat | Pesan bergantung pada perangkat pengguna; tidak ada rekaman terpusat | **Rekomendasi v1** |
| B. Layanan pihak ketiga (EmailJS, Formspree, Web3Forms) | Email masuk otomatis ke inbox perusahaan | Tergantung layanan eksternal dan kuota gratis; butuh akun | Opsional, perlu persetujuan |
| C. Backend sendiri | Kontrol penuh dan penyimpanan data | Di luar scope proyek ini | Fase berikutnya |

## 5. User Flow

### 5.1 Sitemap

- / (Home)
- /tentang-kami
- /layanan (anchor per layanan: /layanan#slug)
- /project
  - /project/[slug]
- /kontak
- /kebijakan-privasi
- 404

### 5.2 Flow per Segmen

**Calon klien**

1. Masuk dari Google atau tautan langsung ke Home.
2. Membaca hero dan layanan unggulan.
3. Membuka halaman Layanan, memilih layanan yang relevan.
4. Klik Ajukan Penawaran, lalu form Kontak terbuka dengan layanan terpilih.
5. Mengisi form, submit, lalu WhatsApp terbuka dengan pesan siap kirim.

**Konsumen**

1. Dari Home menuju Layanan.
2. Membaca detail dan FAQ.
3. Klik tombol WhatsApp melayang, lalu bertanya langsung.

**Vendor**

1. Dari Home menuju Tentang Kami untuk memeriksa profil dan legalitas.
2. Menuju Kontak, bagian Vendor dan Mitra.
3. Klik Ajukan, form terbuka dengan kategori Vendor terpilih.
4. Mengisi dan mengirim.

**Mitra bisnis**

1. Membuka Tentang Kami (profil, legalitas, sertifikasi).
2. Melihat Project untuk menilai rekam jejak.
3. Menuju Kontak, memilih kategori Mitra Bisnis, lalu mengirim pengajuan.

**Publik umum**

1. Membaca Home dan Tentang Kami.
2. Mencari alamat atau kontak di halaman Kontak, lalu membuka peta atau menelepon.

### 5.3 Flow Form Kontak

1. Pengguna membuka /kontak (dengan atau tanpa query prefill).
2. Mengisi field; validasi berjalan saat blur dan saat submit.
3. Jika ada error, pesan inline muncul dan fokus pindah ke field error pertama.
4. Jika valid, pesan terformat dibuat dan WhatsApp terbuka di tab baru.
5. Halaman menampilkan state sukses dengan opsi Kirim via Email atau Kirim pesan lagi.

### 5.4 Flow Filter Project

1. Pengguna membuka /project; seluruh project tampil.
2. Memilih kategori; grid ter-update dan URL berubah menjadi ?kategori=slug.
3. Mengetik di pencarian; hasil terfilter setelah jeda 300 ms.
4. Jika tidak ada hasil, muncul empty state dengan tombol Reset filter.
5. Klik kartu, halaman detail terbuka; tombol Kembali mempertahankan filter sebelumnya.

## 6. UI/UX

### 6.1 Prinsip Desain

- **Profesional dan tepercaya:** bersih, rapi, banyak ruang kosong, bukti kerja ditonjolkan.
- **Jelas dan cepat:** satu tujuan per section, CTA konsisten dan mudah ditemukan.
- **Mobile-first:** mayoritas pengunjung diasumsikan memakai ponsel.
- **Aksesibel:** dapat dipakai dengan keyboard dan pembaca layar.

### 6.2 Identitas Visual

Logo PT Cakra Indo Yuma berupa chevron cokelat dan emas dengan wordmark abu gelap; Company Profile 2025 memakai aksen oranye-merah dan pola segitiga. Token berikut diturunkan dari kedua sumber itu dan mudah diganti (detail di 10.6):

| Token | Fungsi | Aturan |
|---|---|---|
| primary | Tombol utama, tautan, aksen | Diambil dari warna utama logo |
| secondary | Aksen pendukung | Pelengkap primary |
| neutral 50–900 | Latar, teks, border | Teks utama minimal rasio kontras 4,5:1 |
| success / error / warning | Status form dan notifikasi | Tidak mengandalkan warna saja (sertakan ikon/teks) |

Tipografi (via next/font, tanpa request eksternal): Plus Jakarta Sans untuk heading dan Inter untuk body. Skala: H1 40–56 px, H2 32–40 px, H3 24 px, body 16–18 px, caption 14 px; line-height body 1,6.

### 6.3 Layout dan Responsif

| Breakpoint | Lebar | Kolom grid |
|---|---|---|
| Mobile | 360–639 px | 4 |
| Tablet | 640–1023 px | 8 |
| Desktop | 1024 px ke atas | 12 (container maks. 1280 px) |

Spacing memakai kelipatan 8 px. Tidak boleh ada scroll horizontal pada lebar 320 px ke atas.

### 6.4 Struktur Section per Halaman

- **Home:** Hero → Tentang singkat → Layanan unggulan → Angka pencapaian → Project unggulan → Keunggulan → Klien dan mitra → Testimoni → CTA penutup.
- **Tentang Kami:** Page header → Profil → Visi dan misi → Nilai → Sejarah → Tim → Legalitas → CTA.
- **Layanan:** Page header → Sub-navigasi anchor → Bagian per layanan → Alur kerja → FAQ → CTA.
- **Project:** Page header → Bar filter dan pencarian → Grid project → Pagination → CTA.
- **Detail Project:** Breadcrumb → Judul dan metadata → Ringkasan → Tantangan, solusi, hasil → Galeri → Project terkait → CTA.
- **Kontak:** Page header → Info kontak dan form (2 kolom di desktop) → Bagian Vendor dan Mitra → Peta → Sosial media.

### 6.5 Komponen UI

Button (primary, secondary, ghost; ukuran S/M/L), Card (layanan, project, tim, testimoni), Badge/Chip, Input, Select, Textarea, Checkbox, Accordion, Lightbox, Drawer, Breadcrumb, Section heading, Toast, Skeleton. Semua dibuat reusable dengan variant yang konsisten.

### 6.6 Interaksi dan Motion

- Transisi 150–300 ms; animasi masuk (fade/slide) hanya sekali per elemen.
- Hover dan focus state jelas pada semua elemen interaktif; focus ring terlihat.
- Hormati prefers-reduced-motion: animasi dimatikan atau disederhanakan.

### 6.7 State UI

Loading (skeleton), empty (hasil filter kosong), error (validasi form, 404), success (form terkirim). Setiap state punya teks Bahasa Indonesia yang jelas dan tindakan lanjutan.

### 6.8 Aksesibilitas (WCAG 2.1 AA)

- HTML semantik (header, nav, main, section, footer) dan hierarki heading berurutan.
- Skip link ke konten utama; seluruh fitur dapat dioperasikan dengan keyboard.
- Alt text untuk gambar bermakna; label terhubung ke setiap input; aria-live untuk pesan status form.
- Target sentuh minimal 44 x 44 px.

### 6.9 Gaya Konten

Bahasa Indonesia formal yang ramah, kalimat ringkas, fokus pada manfaat bagi pembaca. Setiap section diakhiri CTA yang relevan.

## 7. Technical Requirements

### 7.1 Tech Stack

| Kebutuhan | Pilihan |
|---|---|
| Framework | Next.js versi stabil terbaru (App Router) |
| Bahasa | TypeScript (strict mode) |
| Styling | Tailwind CSS, opsional shadcn/ui |
| Ikon | lucide-react |
| Animasi | Framer Motion (Motion), seperlunya |
| Form dan validasi | React Hook Form dan Zod |
| Carousel / lightbox | Embla Carousel / yet-another-react-lightbox |
| Font | next/font |
| Analitik | Vercel Analytics atau GA4 (script client-side) |
| Kualitas kode | ESLint, Prettier, Husky, lint-staged |
| Testing | Playwright (e2e), Vitest dan Testing Library (unit, P1) |
| Runtime | Node.js LTS, package manager pnpm atau npm |

### 7.2 Arsitektur dan Rendering

- Seluruh halaman dirender statis (SSG); tidak ada API route, database, maupun server action.
- Server Components menjadi default; Client Components hanya untuk bagian interaktif: navbar mobile, filter dan pencarian project, form kontak, carousel, lightbox, accordion, counter.
- Konten dikelola lewat file data bertipe di folder data/, bukan hard-code di komponen.

### 7.3 Routing

| Route | Halaman | Rendering |
|---|---|---|
| / | Home | Static |
| /tentang-kami | Tentang Kami | Static |
| /layanan | Layanan | Static |
| /project | Daftar Project | Static (filter di client) |
| /project/[slug] | Detail Project | Static via generateStaticParams |
| /kontak | Kontak | Static (form di client) |
| /kebijakan-privasi | Kebijakan Privasi | Static |
| not-found | 404 | Static |

### 7.4 Struktur Folder

```
src/
├─ app/
│  ├─ layout.tsx, page.tsx, not-found.tsx
│  ├─ tentang-kami/page.tsx
│  ├─ layanan/page.tsx
│  ├─ project/page.tsx, project/[slug]/page.tsx
│  ├─ kontak/page.tsx
│  ├─ kebijakan-privasi/page.tsx
│  └─ sitemap.ts, robots.ts
├─ components/
│  ├─ ui/        (button, card, input, accordion, ...)
│  ├─ layout/    (navbar, footer, floating-wa)
│  └─ sections/  (hero, services, projects, contact-form, ...)
├─ data/         (company.ts, services.ts, projects.ts, team.ts, faq.ts)
├─ lib/          (utils.ts, whatsapp.ts, validators.ts, seo.ts)
├─ types/        (index.ts)
└─ public/       (images, logos, og-image)
```

### 7.5 Model Data (contoh)

```ts
export type Project = {
  slug: string;
  title: string;
  categories: string[];  // satu project bisa >1 kategori
  hasDetail: boolean;    // true bila punya foto/deskripsi
  client: string;
  location: string;
  year?: number;        // belum ada di data client
  summary: string;
  challenge: string;
  solution: string;
  result: string;
  cover: string;         // path gambar
  gallery: string[];
  featured?: boolean;
};

export type Service = {
  slug: string;
  title: string;
  icon: string;
  description: string;
  scope: string[];
  benefits: string[];
};
```

### 7.6 Environment Variables

| Variabel | Fungsi |
|---|---|
| NEXT_PUBLIC_SITE_URL | Domain produksi untuk canonical, sitemap, Open Graph |
| NEXT_PUBLIC_WA_NUMBER | Nomor WhatsApp tujuan (format 62xxxxxxxxxx) |
| NEXT_PUBLIC_CONTACT_EMAIL | Email tujuan untuk mailto |
| NEXT_PUBLIC_MAPS_EMBED_URL | URL embed Google Maps |
| NEXT_PUBLIC_GA_ID | ID analitik (opsional) |

Tidak ada secret yang boleh disimpan di sisi client; semua nilai di atas bersifat publik.

### 7.7 Performa

- Lighthouse mobile Performance ≥ 90; LCP ≤ 2,5 dtk, INP ≤ 200 ms, CLS ≤ 0,1.
- Gambar memakai next/image (WebP/AVIF), atribut sizes benar, gambar hero memakai priority, sisanya lazy load; wajib ada width dan height untuk mencegah CLS.
- Library berat (lightbox, carousel, peta) dimuat dengan dynamic import dan hanya saat dibutuhkan.
- Target JavaScript awal per halaman di bawah 200 KB (gzip).

### 7.8 SEO

- Metadata API per halaman (title, description, canonical, Open Graph, Twitter card).
- sitemap.ts dan robots.ts; URL slug berbahasa Indonesia dan bersih.
- JSON-LD schema Organization dan LocalBusiness (Home/Kontak), BreadcrumbList (detail project).
- Satu H1 per halaman dengan hierarki heading berurutan; gambar OG per halaman utama.

### 7.9 Keamanan dan Privasi

- Tautan eksternal memakai rel noopener noreferrer.
- Security headers (CSP, X-Frame-Options, Referrer-Policy, X-Content-Type-Options) dikonfigurasi di next.config; efektif bila hosting mendukung (Vercel mendukung, static export tidak).
- Data form tidak disimpan oleh situs; Kebijakan Privasi menjelaskan hal ini.
- Banner persetujuan cookie ditambahkan bila analitik yang memasang cookie digunakan (P2).

### 7.10 Dukungan Browser dan Perangkat

Chrome, Edge, Firefox, dan Safari (2 versi mayor terakhir); Safari iOS dan Chrome Android. Diuji pada lebar 320, 375, 768, 1024, 1280, dan 1536 px.

### 7.11 Testing dan QA

- Pipeline CI (GitHub Actions): lint, type-check, dan build harus lulus sebelum merge.
- E2E Playwright untuk alur kritis: navigasi semua menu, menu mobile, filter dan pencarian project, buka detail project, validasi dan submit form kontak, prefill dari Layanan.
- Lighthouse CI untuk memantau skor performa, aksesibilitas, dan SEO.
- Uji manual lintas browser dan perangkat sebelum rilis.

### 7.12 Deployment

- Hosting di Vercel (preview deployment untuk setiap pull request) atau Netlify; domain khusus dengan SSL otomatis dan redirect www ke non-www (atau sebaliknya).
- Alternatif static export: set output export dan images unoptimized; security headers harus diatur di sisi hosting.
- Alur Git: branch main (produksi), develop, dan feature/*; commit mengikuti Conventional Commits.

## 8. Scope Project

### 8.1 In Scope

- 5 halaman utama (Home, Tentang Kami, Layanan, Project, Kontak) plus detail project, Kebijakan Privasi, dan 404.
- Seluruh fitur P0 dan P1 pada bagian 4; P2 dikerjakan bila waktu memungkinkan.
- Desain UI responsif (mobile, tablet, desktop) dan design system sederhana.
- Form kontak dengan validasi dan pengiriman via WhatsApp/email (opsi A).
- SEO teknis dasar, analitik, dan optimasi performa.
- Deployment, konfigurasi domain, dan dokumentasi cara memperbarui konten.

### 8.2 Out of Scope

- Backend, database, autentikasi, dan panel admin/CMS.
- Penyimpanan data form secara terpusat dan auto-reply email.
- Multi-bahasa (i18n), blog/berita, e-commerce, dan pembayaran online.
- Produksi konten (copywriting, foto, video, logo) dan pembuatan brand identity.
- Pemeliharaan jangka panjang dan kampanye SEO/Ads setelah rilis.

### 8.3 Asumsi dan Dependensi

- PT Cakra Indo Yuma menyediakan konten final (teks, foto, logo, data project, legalitas) paling lambat akhir minggu ke-2.
- Nomor WhatsApp, email, alamat, dan domain disediakan oleh perusahaan.
- Selama konten belum lengkap, pengembangan memakai placeholder yang mudah diganti lewat file data.
- Penambahan konten setelah rilis dilakukan dengan mengedit file data dan deploy ulang.

### 8.4 Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Konten terlambat atau tidak lengkap | Jadwal mundur | Placeholder terstruktur, tenggat konten disepakati sejak awal |
| Tanpa backend, pesan form tidak tersimpan | Inquiry bisa terlewat | Opsi A dengan WhatsApp/email; opsi B sebagai peningkatan |
| Gambar berukuran besar | Performa turun | Kompres aset, next/image, batas ukuran upload |
| Perubahan kebutuhan di tengah proyek | Scope creep | PRD disetujui, perubahan lewat change request |
| Brand guideline belum ada | Desain berubah di akhir | Memakai design token yang mudah diganti |

### 8.5 Deliverables

1. Source code di repository Git beserta README (setup, struktur, cara update konten).
2. Website live di domain produksi.
3. File desain (Figma) bila diperlukan.
4. Laporan hasil QA dan skor Lighthouse.
5. Dokumentasi serah terima.

### 8.6 Estimasi Timeline

| Fase | Aktivitas | Estimasi |
|---|---|---|
| 1. Discovery | Finalisasi PRD, pengumpulan konten dan aset | Minggu 1 |
| 2. Desain | Wireframe, UI desktop dan mobile, design token | Minggu 1–2 |
| 3. Development | Setup proyek, komponen, halaman, data, form | Minggu 2–4 |
| 4. QA dan UAT | Pengujian fungsi, responsif, aksesibilitas, performa; revisi | Minggu 5 |
| 5. Launch | Deploy produksi, domain, analitik, serah terima | Minggu 6 |

Estimasi bersifat perkiraan awal untuk satu front-end developer dan dapat berubah sesuai kesiapan konten.

### 8.7 Definition of Done

- Semua kriteria penerimaan P0 dan P1 lulus uji; tidak ada bug kritis atau mayor yang terbuka.
- Seluruh tautan, tombol CTA, filter, dan form berfungsi di browser dan perangkat target.
- Skor Lighthouse memenuhi target pada bagian 2.3.
- Tidak ada error di console pada halaman utama; build produksi sukses.
- Konten final sudah terpasang dan disetujui perusahaan.

## 9. Status Input dari PT Cakra Indo Yuma

Company Profile 2025 (Compro_CIY.pdf) menjawab sebagian besar input. Rincian datanya ada di bagian 10.

| # | Input | Status | Catatan |
|---|---|---|---|
| 1 | Bidang usaha dan layanan | Sebagian | Supplier restoran dan instansi, brand Artalana. Daftar layanan usulan (10.2) perlu disetujui; deskripsi, cakupan, dan manfaat per layanan belum ada |
| 2 | Logo dan brand guideline | Sebagian | Logo ada di PDF; butuh file asli (SVG/PNG) serta warna dan font resmi |
| 3 | Profil, visi, misi | Ada | Visi, misi, dan profil singkat lengkap |
| 4 | Sejarah, nilai perusahaan, tim, foto | Belum | Hanya tahun berdiri (2020) yang tersedia |
| 5 | Data project | Sebagian | 30 klien dengan lokasi dan jenis pekerjaan; tahun, deskripsi, dan hasil belum ada; foto hanya Unsoed dan PT KPI |
| 6 | Legalitas | Ada | Lengkap, tetapi hanya ringkasan yang tampil (10.4) |
| 7 | Kontak | Sebagian | Alamat, telepon, email ada dengan beberapa data tidak konsisten (10.5); WhatsApp, jam operasional, sosial media, dan lokasi peta belum ada |
| 8 | Mekanisme form dan prosedur vendor/mitra | Belum | Perlu keputusan perusahaan (bagian 4.7) |
| 9 | Domain dan analitik | Belum | Domain khusus dan kebutuhan analitik perlu ditentukan |

## 10. Data Perusahaan dari Company Profile 2025

Sumber: Compro_CIY.pdf. Bagian ini menjadi acuan konten awal website dan menggantikan placeholder di bagian sebelumnya.

### 10.1 Profil Singkat

- **Bidang usaha:** supplier restoran serta instansi pemerintah dan swasta. Brand Artalana bergerak di sektor supplier instansi (alat tulis, furniture, interior, eksterior).
- **Berdiri:** Maret 2020, berkedudukan di Kabupaten Cilacap, Jawa Tengah.
- **Visi:** menjadi korporasi global terkemuka melalui diversifikasi dan integrasi usaha untuk memberi peran pada masa depan masyarakat Indonesia yang lebih baik.
- **Misi (5 poin):** kerja sama bisnis yang baik dan profesional; produk dan layanan berkualitas tinggi secara berkesinambungan; kinerja efisien dan efektif; pengembangan karyawan yang kompeten; manfaat optimum bagi pemegang saham, karyawan, dan masyarakat.
- **Ejaan yang dirapikan sebelum tayang:** suplier restaurant menjadi supplier restoran; masa dean menjadi masa depan.

### 10.2 Usulan Katalog Layanan

Diturunkan dari rekam jejak project dan bidang usaha di profil; perlu disetujui perusahaan. Deskripsi, cakupan, dan manfaat tiap layanan masih harus dilengkapi perusahaan.

| Slug | Layanan | Dasar | Contoh klien |
|---|---|---|---|
| mebel-furniture | Mebel dan Furniture | Brand Artalana; 17 project | PT Kilang Pertamina Internasional, RSUD Cilacap, SMA N 1 Cilacap |
| interior-eksterior | Interior dan Eksterior | Artalana; KBLI dekorasi interior dan eksterior | Universitas Jenderal Soedirman, Politeknik Negeri Cilacap, CV Jembar Artha |
| atk-kertas-elektronik | ATK, Kertas, dan Elektronik | Artalana (alat tulis); KBLI perdagangan | PT PLN UP3 Indramayu, PT KPI RU IV |
| event-organizer | Event Organizer dan Rapat | KBLI 82302 (special event) dan 82301 (MICE) | PT Pertamina Patra Niaga MOR IV, PT Pertamina (Persero) |
| supplier-restoran | Supplier Restoran dan F&B | Bidang usaha utama | SLCOM Purwokerto, PT Rocket Chicken Indonesia |
| pengadaan-umum | Pengadaan Barang Instansi dan Industri | KBLI perdagangan besar berbagai barang | PT Pelindo, PT Pertamina (Surabaya), PT Putra Sabar Mandiri |

### 10.3 Data Project (30 klien, 2020–2025)

Semua project berstatus selesai. Lokasi: Cilacap, Purwokerto, Sokaraja, Pemalang, Indramayu, Surabaya, Jakarta, Semarang, serta Rokan Hilir/Bandung (baris 18 perlu dikonfirmasi). Jumlah per kategori utama:

| Kategori | Jumlah | Contoh klien |
|---|---|---|
| Mebel dan Furniture | 17 | SMA N 1 Cilacap, SLB Cilacap, Dinas Kesehatan Cilacap, BPKAD, Sekda, RSUD Cilacap, PT BRI Kanca Jalembar |
| Interior dan Eksterior | 4 | Unsoed, Politeknik Negeri Cilacap, PT Brian Artha Laksana, CV Jembar Artha |
| ATK, Kertas, dan Elektronik | 2 | PT PLN UP3 Indramayu, PT KPI RU IV |
| Event Organizer | 2 | PT Pertamina Patra Niaga MOR IV, PT Pertamina (Persero) |
| Supplier Restoran dan F&B | 2 | SLCOM Purwokerto, PT Rocket Chicken Indonesia |
| Pengadaan Umum | 3 | PT Pelindo, PT Pertamina (Surabaya), PT Putra Sabar Mandiri |

Keterbatasan data dan keputusan desain:

- Tahun, deskripsi, tantangan, solusi, dan hasil belum ada, jadi field year dibuat opsional.
- Foto hanya tersedia untuk Unsoed dan PT Kilang Pertamina Internasional. Halaman detail dibuat untuk keduanya; 28 project lain tampil sebagai kartu daftar (klien, lokasi, kategori) dengan hasDetail bernilai false.
- Unsoed (mebel dan interior) dan PT KPI (mebel dan alat elektrikal) punya lebih dari satu kategori, sehingga filter memakai categories berupa array.
- Nama klien instansi dan BUMN tampil sebagai teks; logo hanya dipakai bila ada izin.
- Angka untuk H-04: 30 project selesai, berdiri sejak 2020, klien dari instansi pemerintah, BUMN, dan swasta.

### 10.4 Legalitas: yang Tampil dan yang Tidak

Dokumen legalitas di profil memuat data pribadi (NIK, alamat rumah, tanggal lahir pendiri, pengurus, dan saksi), komposisi saham, serta bukti pajak. Data pribadi dilindungi UU Pelindungan Data Pribadi (UU No. 27 Tahun 2022), jadi scan dokumen tidak dipasang mentah di website.

| Kelompok | Isi | Keputusan |
|---|---|---|
| Tampil sebagai ringkasan | Nama badan hukum dan kedudukan; Akta Pendirian No. 1 (3 Maret 2020) dan SK Kemenkumham AHU-0013404.AH.01.01 Tahun 2020; Akta Perubahan No. 97 (27 Juli 2024) dan SK AHU-0047269.AH.01.02 Tahun 2024; NIB 0220208341324; izin usaha (SIUP) terbit 17 Juni 2020 | Ya, sebagai badge dan daftar nomor |
| Opsional | NPWP dan status PKP | Tanya perusahaan |
| Tidak dipublikasikan | NIK, alamat rumah, dan tanggal lahir pengurus serta saksi; komposisi saham dan modal; bukti lapor SPT; scan akta, SK, NPWP, SKT, dan SPPKP | Tidak; diberikan lewat permintaan resmi melalui Kontak |

Fitur tambahan **T-09 (P1):** tombol Unduh Company Profile berupa PDF versi publik, dibuat dari profil yang sama tanpa halaman legalitas mentah dan data pribadi, dengan ukuran di bawah 5 MB. File Compro_CIY.pdf asli tidak diunggah ke website.

### 10.5 Kontak dan Data yang Perlu Dikonfirmasi

| Data | Di dokumen | Yang perlu dipastikan |
|---|---|---|
| Alamat | Jl. Perintis Kemerdekaan No. 51, Kel. Kebonmanis, Kec. Cilacap Utara, Kab. Cilacap, Jawa Tengah | Kode pos 53235 (NIB, NPWP) atau 53223 (lampiran NIB) |
| Telepon | (0202) 547927 di sampul; 0282547927 di NIB | Kode area Cilacap umumnya 0282, sampul kemungkinan salah ketik |
| Email | pt.cakraindoyuma@gmail.com di sampul; cakraindoyuma@gmail.com di NIB | Alamat mana yang aktif dan dipakai untuk mailto |
| WhatsApp, jam operasional, sosial media, titik peta | Belum ada | Dibutuhkan untuk G-04, K-01, K-05, K-07 |

### 10.6 Identitas Visual dari Dokumen

- **Logo:** chevron cokelat dan emas dengan wordmark PT. CAKRA INDO YUMA berwarna abu gelap. Sampul belakang profil menampilkan ikon oranye yang berbeda; konfirmasi apakah itu logo Artalana atau versi lain.
- **Palet (perkiraan visual dari PDF; ambil nilai resmi dari file logo):** cokelat sekitar #7A4E33, emas sekitar #D4A514, oranye-merah sekitar #F05A3B, abu arang sekitar #5E5F63, krem sekitar #F8E8CC.
- **Motif:** pola segitiga dan chevron pada profil dipakai sebagai motif hero dan pembatas section agar selaras dengan materi cetak.
- **Usulan peran warna:** cokelat sebagai primary (heading dan tombol), emas dan oranye-merah sebagai aksen. Emas dan oranye-merah tidak memenuhi kontras 4,5:1 untuk teks kecil di atas putih, jadi dipakai untuk ikon, garis, dan latar dengan teks gelap. Pilihan primary (cokelat logo atau oranye-merah profil) perlu keputusan perusahaan.

### 10.7 Penyesuaian Requirement

- **Layanan:** enam layanan pada 10.2 menggantikan placeholder; L-01 sampai L-06 berlaku untuk keenamnya.
- **Project:** filter memakai enam kategori pada 10.3; P-06 berlaku untuk project yang punya foto.
- **H-07:** nama klien tanpa logo sampai izin tersedia.
- **T-06 dan T-09:** ringkasan legalitas saja, ditambah unduhan profil versi publik.
- **Brand Artalana:** tampil sebagai sub-brand pada layanan Mebel, Interior, dan ATK; perlu konfirmasi apakah punya logo atau situs sendiri.
- **Konten asli:** ejaan dirapikan dan disetujui perusahaan sebelum tayang.