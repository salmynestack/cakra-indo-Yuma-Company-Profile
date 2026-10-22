import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { company, siteUrl } from "@/data/company";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { getOrganizationSchema } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} | Supplier Mebel, Interior, & Kebutuhan Instansi Cilacap`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  keywords: [
    "PT Cakra Indo Yuma",
    "Supplier Mebel Cilacap",
    "Artalana Furniture",
    "Interior Kantor Cilacap",
    "Pengadaan Barang Instansi",
    "Supplier Restoran",
    "Pengadaan Kursi Kantor",
    "Event Organizer Cilacap",
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    title: `${company.name} | Supplier Mebel & Interior Instansi`,
    description: company.description,
    siteName: company.name,
    images: [
      {
        url: "/images/hero-ruang-rapat.jpg",
        width: 1200,
        height: 800,
        alt: `${company.name} - Mebel dan Interior Instansi`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = getOrganizationSchema();

  return (
    <html
      lang="id"
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream-50 font-sans text-ink-800">
        {/* Skip to main content link for keyboard users (WCAG 2.1 AA / PRD 6.8 & R-32) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-control focus:bg-brand-900 focus:px-4 focus:py-2 focus:text-white focus:shadow-lg focus:outline-none"
        >
          Lewati ke konten utama
        </a>

        <Navbar />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />
        <FloatingWhatsApp />
        <ScrollToTop />
      </body>
    </html>
  );
}
