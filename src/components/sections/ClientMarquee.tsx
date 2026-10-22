import { clientPartners } from "@/data/clients";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ClientMarquee() {
  return (
    <section className="py-16 lg:py-20 bg-white border-b border-ink-200/60">
      <div className="container-site space-y-10">
        <SectionHeading
          kicker="Klien & Mitra Kerja Sama"
          title="Dipercaya Berbagai Instansi dan Korporasi"
          subtitle="Rekam jejak kemitraan pengadaan barang, mebel, dan interior bersama BUMN, institusi pendidikan, dan dinas pemerintah."
          align="center"
        />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
          {clientPartners.map((client, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-card border border-ink-200 bg-cream-50/50 p-4 transition-all duration-200 hover:border-brand-300 hover:bg-white hover:shadow-xs"
            >
              <div className="space-y-2">
                <Badge
                  variant={
                    client.category === "BUMN"
                      ? "brand"
                      : client.category === "Pemerintah"
                        ? "gold"
                        : "neutral"
                  }
                  size="sm"
                >
                  {client.category}
                </Badge>
                <p className="font-display text-sm font-bold text-brand-950 leading-snug">
                  {client.name}
                </p>
              </div>
              <p className="mt-3 text-[11px] text-ink-500">
                Lokasi: {client.location}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-ink-500">
          Catatan: Nama instansi ditampilkan secara resmi berdasarkan rekam jejak
          pekerjaan yang telah selesai diserahterimakan (2020 sampai 2025).
        </p>
      </div>
    </section>
  );
}
