# Website Company Profile — PT Cakra Indo Yuma

Situs company profile resmi PT Cakra Indo Yuma, menampilkan identitas perusahaan, legalitas resmi, katalog 6 bidang layanan pengadaan barang dan jasa, serta portofolio 30 proyek strategis di sektor pendidikan tinggi, BUMN, perbankan, dan instansi pemerintah.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router, Turbopack, Partial Prerendering)
- **Library**: [React 19](https://react.dev)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) (Inline `@theme` design tokens)
- **Icons**: [Lucide React](https://lucide.dev)
- **Form & Validation**: [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev)
- **Interactive UI**: [Yet Another React Lightbox](https://yet-another-react-lightbox.com), Embla Carousel
- **SEO & Structured Data**: Dynamic `sitemap.xml`, `robots.txt`, JSON-LD schemas (`Organization`, `LocalBusiness`, `BreadcrumbList`)
- **Package Manager**: `pnpm` v12.15.0

---

## 🚀 Memulai Pengembangan Lokal

Pastikan Node.js (v18+) dan pnpm sudah terinstal di komputer Anda.

```bash
# Clone repositori
git clone https://github.com/salmynestack/cakra-indo-Yuma-Company-Profile.git
cd cakra-indo-Yuma-Company-Profile

# Instal dependensi
pnpm install

# Jalankan development server
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat website.

---

## 📦 Skrip NPM

| Perintah | Keterangan |
|---|---|
| `pnpm dev` | Menjalankan server pengembangan Next.js lokal |
| `pnpm build` | Membangun bundle produksi statis yang dioptimasi |
| `pnpm start` | Menjalankan server produksi hasil build |
| `pnpm lint` | Menjalankan audit ESLint |

---

## 📂 Struktur Direktori

```text
├── public/                 # Aset statis & foto dokumenter perusahaan
│   └── images/             # Hero, gudang, dan portofolio proyek
├── src/
│   ├── app/                # Next.js App Router (Halaman & layout)
│   │   ├── page.tsx        # Beranda (Home)
│   │   ├── tentang-kami/   # Profil, visi misi, legalitas resmi
│   │   ├── layanan/        # Katalog layanan, alur pengadaan, FAQ
│   │   ├── project/        # Direktori 30 portofolio proyek
│   │   │   └── [slug]/     # Halaman detail proyek & galeri lightbox
│   │   ├── kontak/         # Formulir konsultasi & generator WhatsApp
│   │   ├── kebijakan-privasi/ # Kebijakan privasi
│   │   ├── sitemap.ts      # Generator sitemap otomatis
│   │   └── robots.ts       # Konfigurasi crawler SEO
│   ├── components/         # Komponen UI & Section terstruktur
│   │   ├── layout/         # Navbar, Footer, Floating WhatsApp
│   │   ├── sections/       # Komponen bagian halaman beranda & kontak
│   │   └── ui/             # Primitif UI (Button, Card, Input, Lightbox)
│   ├── data/               # Data perusahaan, layanan, proyek, FAQ
│   ├── lib/                # Helper class merger, Zod schema, WhatsApp
│   └── types/              # Type definitions TypeScript
└── PRD.md                  # Product Requirements Document
```

---

## 📋 Fitur Utama

1. **Brand Identity**: Identitas visual hangat berbasis logo perusahaan (*brand brown* `#7A4E33`, aksen *gold* `#D4A514`, dan latar *warm cream* `#FDFBF7`) dengan motif chevron geometris.
2. **Katalog Layanan & Alur Pengadaan**: Navigasi *scroll-spy* untuk 6 bidang layanan utama serta 5 tahap alur kerja pengadaan transparan.
3. **Direktori Portofolio Interaktif**: Filter kategori multi-sektor, pencarian langsung (*real-time*), dan galeri *lightbox* interaktif resolusi penuh.
4. **Formulir Konsultasi**: Validasi nomor telepon format Indonesia (`08xx` / `+628xx`), pembuatan link WhatsApp instan otomatis, dan opsi *fallback* email langsung.
5. **Aksesibilitas (WCAG 2.1 AA)**: Ukuran target sentuh mobile minimal 44px, *focus ring* keyboard terlihat jelas, serta teks bahasa Indonesia baku tanpa *em dash* (`—`).
