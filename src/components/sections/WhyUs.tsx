import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

const strengths = [
  {
    title: "Legalitas Lengkap & Tertib Pajak",
    description:
      "Memiliki Akta Pendirian resmi, SK Kemenkumham, NIB (0220208341324), dan izin usaha (SIUP). Siap untuk verifikasi tender, lelang, maupun Surat Perintah Kerja (SPK) instansi pemerintah dan BUMN.",
  },
  {
    title: "Produksi Mebel Custom (Brand Alterior)",
    description:
      "Didukung tenaga perajin kayu terampil yang mampu memproduksi meja rapat, workstation, dan interior dinding sesuai ukuran presisi ruangan dan spesifikasi material pemesan.",
  },
  {
    title: "Satu Pintu Pengadaan Terpadu",
    description:
      "Menghemat waktu dan rantai koordinasi instansi Anda dengan menyediakan mebel, dekorasi interior, ATK berkala, elektronik rapat, hingga seragam dinas dalam satu kontrak kerja.",
  },
  {
    title: "Jangkauan Antar-Kota & Garansi Hasil",
    description:
      "Berbasis di Cilacap dengan rekam jejak pengiriman hingga Purwokerto, Indramayu, Semarang, Jakarta, dan Surabaya. Didukung tim instalasi lapangan dan jaminan garansi purnajual.",
  },
];

export function WhyUs() {
  return (
    <section className="py-16 lg:py-24 bg-cream-50 border-b border-ink-200/60">
      <div className="container-site space-y-12">
        <SectionHeading
          kicker="Nilai Keunggulan"
          title="Mengapa Memilih PT Cakra Indo Yuma?"
          subtitle="Komitmen kami dalam menghadirkan kepastian mutu barang, ketepatan waktu pengiriman, dan kemudahan administrasi bagi setiap mitra kerja."
          align="center"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((item, index) => (
            <Card
              key={index}
              hoverEffect
              className="border-ink-200 bg-white flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-600 text-cream-50 font-display font-extrabold text-lg">
                  0{index + 1}
                </div>
                <h3 className="font-display text-lg font-bold text-brand-950">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
