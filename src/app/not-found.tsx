import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-cream-50 px-4 py-16 text-center">
      <div className="mx-auto max-w-md space-y-6">
        {/* Chevron mark brand element */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-900 text-cream-50 shadow-md">
          <span className="chevron-mark scale-150" aria-hidden="true" />
        </div>

        <div className="space-y-2">
          <p className="font-display text-xs font-bold uppercase tracking-wider text-brand-700">
            Error 404
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-950">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-sm text-ink-600 leading-relaxed">
            Mohon maaf, halaman yang Anda tuju tidak tersedia atau telah dipindahkan.
            Silakan kembali ke beranda untuk menelusuri layanan dan rekam jejak kami.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button href="/" variant="primary" size="md">
            Kembali ke Beranda
          </Button>
          <Button href="/kontak" variant="outline" size="md">
            Hubungi Dukungan
          </Button>
        </div>
      </div>
    </div>
  );
}
