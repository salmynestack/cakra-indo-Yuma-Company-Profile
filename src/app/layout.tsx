import type { Metadata } from "next";
import { Bebas_Neue, Lora, Montserrat, Oxygen, Source_Sans_3 } from "next/font/google";
import { company, siteUrl } from "@/data/company";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { getOrganizationSchema } from "@/lib/seo";
import "./globals.css";

// Source Sans 3 adalah nama baru Source Sans Pro di Google Fonts.
const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const oxygen = Oxygen({
  variable: "--font-oxygen",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
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
        url: "/images/workshop-mebel-kayu.jpg",
        width: 1024,
        height: 682,
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
      className={`${sourceSans.variable} ${montserrat.variable} ${bebasNeue.variable} ${lora.variable} ${oxygen.variable} h-full antialiased`}
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
