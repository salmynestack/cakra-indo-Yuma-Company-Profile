import Link from "next/link";
import { services } from "@/data/services";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturedServices() {
  return (
    <section className="py-16 lg:py-24 bg-cream-50 border-b border-ink-200/60">
      <div className="container-site space-y-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            kicker="Katalog Pengadaan"
            title="Lini Layanan Unggulan"
            subtitle="Menyediakan solusi terintegrasi untuk pengadaan sarana kantor, penataan interior, dan pemenuhan kebutuhan operasional instansi."
          />
          <div className="shrink-0">
            <Button href="/layanan" variant="outline" size="md">
              <span>Semua Layanan (6 Lini)</span>
              <span className="ml-1 select-none" aria-hidden="true">&rarr;</span>
            </Button>
          </div>
        </div>

        {/* Grid 6 Layanan (PRD H-03) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.slug}
              hoverEffect
              className="flex flex-col justify-between border-ink-200 bg-white"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                    <span className="chevron-mark" aria-hidden="true" />
                  </div>
                  {service.artalana && (
                    <Badge variant="gold" size="sm">
                      Brand Artalana
                    </Badge>
                  )}
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold text-brand-950">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-ink-600 leading-relaxed">
                    {service.summary}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-ink-100 mt-6 flex items-center justify-between">
                <Link
                  href={`/layanan#${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:text-brand-900 focus-visible:outline-brand-600 rounded-xs"
                >
                  <span>Pelajari Cakupan</span>
                  <span className="select-none" aria-hidden="true">&rarr;</span>
                </Link>
                <Link
                  href={`/kontak?layanan=${service.slug}`}
                  className="text-xs text-ink-500 hover:text-brand-700 underline"
                >
                  Minta Penawaran
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
