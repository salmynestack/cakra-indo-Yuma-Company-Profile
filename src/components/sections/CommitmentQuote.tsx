import { Button } from "@/components/ui/Button";

export function CommitmentQuote() {
  return (
    <section className="py-16 bg-cream-100 border-b border-ink-200/60 relative overflow-hidden">
      <div className="container-site">
        <div className="relative mx-auto max-w-4xl rounded-card border-2 border-brand-300 bg-white p-8 sm:p-12 shadow-sm">
          <div className="space-y-6 text-center">
            <div className="inline-flex items-center gap-2 font-ui text-xs font-bold uppercase tracking-wider text-brand-700">
              <span className="chevron-mark" aria-hidden="true" />
              <span>Komitmen Mutu &amp; Layanan</span>
            </div>

            <blockquote className="font-serif text-xl sm:text-2xl italic font-medium text-brand-950 leading-relaxed">
              &ldquo;Setiap pekerjaan yang kami terima kami pandang sebagai amanah
              kemitraan jangka panjang. Kami memastikan material kayu, struktur
              furnitur, dan pasokan barang tiba di lokasi instansi dalam kondisi
              sempurna sesuai spesifikasi yang disepakati.&rdquo;
            </blockquote>

            <div className="pt-2 text-sm text-ink-600">
              <p className="font-bold text-brand-900">
                Manajemen Operasional PT Cakra Indo Yuma
              </p>
              <p className="text-xs text-ink-500">
                Workshop & Pergudangan Kabupaten Cilacap, Jawa Tengah
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Button href="/kontak" variant="primary" size="md">
                Diskusikan Kebutuhan Anda
              </Button>
              <Button href="/tentang-kami" variant="outline" size="md">
                Pelajari Profil Kami
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
