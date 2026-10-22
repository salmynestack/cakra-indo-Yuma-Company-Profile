import { company } from "@/data/company";
import { Button } from "@/components/ui/Button";

export function ClosingCTA() {
  return (
    <section className="bg-brand-950 py-16 lg:py-20 text-cream-50 relative overflow-hidden">
      {/* Chevron band background */}
      <div
        className="chevron-band absolute inset-0 opacity-20 pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-site relative">
        <div className="mx-auto max-w-3xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-400">
            <span className="chevron-mark" aria-hidden="true" />
            <span>Mulai Kerja Sama Pengadaan</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Siap Mewujudkan Ruang Kerja dan Pengadaan Instansi Anda?
          </h2>

          <p className="text-base sm:text-lg text-ink-300 leading-relaxed max-w-2xl mx-auto">
            Hubungi kami sekarang untuk konsultasi kebutuhan mebel, interior kantor,
            maupun pengadaan barang umum. Tim kami siap memberikan penawaran harga
            resmi dan survei lokasi.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button href="/kontak" variant="gold" size="lg">
              Hubungi Tim Pemasaran
            </Button>
            <Button
              href={`tel:${company.phoneHref}`}
              variant="outline"
              size="lg"
              className="border-white/40 text-white hover:bg-white/10"
            >
              Telepon: {company.phoneDisplay}
            </Button>
          </div>

          <p className="text-xs text-ink-400 pt-2">
            Alamat Kantor: {company.address.street}, {company.address.district},{" "}
            {company.address.city}
          </p>
        </div>
      </div>
    </section>
  );
}
