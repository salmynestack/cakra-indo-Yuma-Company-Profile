import type { Project } from "@/types";

/**
 * Data Rekam Jejak Project PT Cakra Indo Yuma.
 * Sumber Resmi: Company Profile 2026 (Halaman 12 - 14: "Beberapa Daftar Project Tahun 2020 - 2026").
 * Dilengkapi dengan dokumentasi foto asli terverifikasi per kategori pekerjaan:
 * - Interior & Eksterior (Renovasi ruang dekanat FMIPA Unsoed, renovasi lobi, kanopi eksterior)
 * - Mebel & Furnitur (Kursi kuliah Brother FIB, kursi kuliah FISIP 2025, meja kerja jati solid, workstation L-shape, loker berkas, springbed RDP)
 * - Event Organizer & MICE (Serah terima sertifikat tanah DKI Jakarta, rakor ballroom Pertamina, FGD, konsinyering)
 * - Pengadaan Umum & Sarpras (Tempat sampah pilah besi, tempat sampah taman asbak kayu, dustbin roda, rak logistik, armada pengiriman)
 */
export const projects: Project[] = [
  // ==========================================
  // HALAMAN 14: PROJECT TAHUN 2025 / 2026
  // ==========================================
  {
    slug: "universitas-jenderal-soedirman",
    title: "Pembelian Mebelair Gedung IHSB pada Fakultas Ilmu – Ilmu Kesehatan Unsoed",
    categories: ["mebel-furniture", "interior-eksterior"],
    activityType: "PENGADAAN BARANG",
    client: "Universitas Jenderal Soedirman",
    clientType: "Pendidikan",
    location: "Purwokerto",
    year: 2025,
    contractValue: "Rp 1.018.441.441",
    contractValueNumber: 1018441441,
    hasDetail: true,
    featured: true,
    summary:
      "Pengadaan mebelair berskala besar dan renovasi interior ruang publik gedung Integrated Health Science Building (IHSB) FIKES Unsoed.",
    challenge:
      "Kebutuhan perabotan terintegrasi untuk gedung baru IHSB dengan volume sangat besar dan standar ketahanan tinggi bagi civitas akademika bidang kesehatan.",
    solution:
      "Memproduksi dan menyuplai rangkaian meja laboratorium, bangku kuliah, partisi lobi, bangku melingkar ruang tunggu, dan lemari loker berkas presisi.",
    result:
      "Gedung IHSB FIKES Unsoed siap difungsikan tepat waktu untuk kegiatan perkuliahan dan riset kesehatan dengan fasilitas interior mebelair yang modern dan representatif.",
    cover: "/images/projects/lobi-unsoed-after.jpg",
    gallery: [
      {
        src: "/images/projects/lobi-unsoed-after.jpg",
        alt: "Hasil renovasi interior lobi dan instalasi bangku melingkar ruang publik kampus Unsoed",
      },
      {
        src: "/images/projects/lobi-unsoed-before.jpg",
        alt: "Kondisi area lobi gedung sebelum dilakukan penataan interior dan furnishing",
      },
      {
        src: "/images/projects/renovasi-lobi-unsoed-before-after.jpg",
        alt: "Dokumentasi perbandingan Before & After penataan interior lobi kampus",
      },
      {
        src: "/images/projects/lemari-loker-besi.jpg",
        alt: "Instalasi deretan lemari loker berkas dan fasilitas mahasiswa di gedung IHSB",
      },
      {
        src: "/images/projects/meja-rapat-oval-executive.jpg",
        alt: "Pengadaan meja rapat oval dan kursi perkuliahan/rapat gedung kampus",
      },
      {
        src: "/images/bahan-baku-kayu-jati.jpg",
        alt: "Penyortiran bahan baku kayu solid berkualitas untuk mebelair institusi pendidikan",
      },
    ],
  },
  {
    slug: "renovasi-ruang-dekan-fmipa-unsoed",
    title: "Renovasi Ruang Dekan dan Wakil Dekan FMIPA Unsoed",
    categories: ["interior-eksterior", "mebel-furniture"],
    activityType: "INTERIOR",
    client: "Universitas Jenderal Soedirman",
    clientType: "Pendidikan",
    location: "Purwokerto",
    year: 2025,
    contractValue: "Rp 199.800.000",
    contractValueNumber: 199800000,
    hasDetail: true,
    featured: true,
    summary:
      "Pekerjaan interior eksklusif ruang kerja Dekan dan Wakil Dekan Fakultas MIPA Unsoed dengan backdrop kayu berlampu ambient LED, logo universitas emas, dan meja manajerial modern.",
    challenge:
      "Mentransformasi ruang pimpinan lama menjadi area kerja modern berwibawa yang elegan untuk penerimaan tamu kehormatan dan koordinasi dekanat.",
    solution:
      "Membangun wall panel backdrop kayu dengan pencahayaan warm ambient LED, memasang logo timbul Unsoed emas, meja kerja marmer putih modular, serta kursi direksi kulit.",
    result:
      "Ruang Dekanat FMIPA selesai tepat waktu dengan tampilan interior berkelas tinggi, modern, dan fungsional.",
    cover: "/images/projects/ruang-dekan-fmipa-after.jpg",
    gallery: [
      {
        src: "/images/projects/ruang-dekan-fmipa-after.jpg",
        alt: "Hasil akhir renovasi ruang dekan dengan backdrop kayu berlampu LED dan logo Unsoed",
      },
      {
        src: "/images/projects/ruang-dekan-fmipa-before.jpg",
        alt: "Kondisi ruang kerja dekanat sebelum dilakukan renovasi interior",
      },
      {
        src: "/images/projects/renovasi-ruang-dekan-before-after.jpg",
        alt: "Dokumentasi perbandingan Before & After renovasi ruang Dekan dan Wakil Dekan FMIPA",
      },
      {
        src: "/images/projects/meja-kerja-l-shape.jpg",
        alt: "Meja kerja manajerial modern bentuk L dengan modesty panel terpasang rapi",
      },
      {
        src: "/images/projects/kursi-direksi-kulit.jpg",
        alt: "Kursi direksi kulit hitam dengan sandaran empuk untuk ruang pimpinan",
      },
    ],
  },
  {
    slug: "kursi-kuliah-brother-fib-unsoed-696m",
    title: "Pengadaan Kursi Kuliah Brother di Fakultas Ilmu Budaya Unsoed",
    categories: ["mebel-furniture"],
    activityType: "PENGADAAN BARANG",
    client: "Universitas Jenderal Soedirman",
    clientType: "Pendidikan",
    location: "Purwokerto",
    year: 2025,
    contractValue: "Rp 696.605.000",
    contractValueNumber: 696605000,
    hasDetail: true,
    featured: false,
    summary:
      "Pengadaan ratusan unit kursi kuliah Brother berkualitas untuk ruang-ruang kuliah Fakultas Ilmu Budaya (FIB) Universitas Jenderal Soedirman.",
    challenge:
      "Penyediaan kursi kuliah berdaya tahan tinggi dalam jumlah masif yang harus selesai sebelum semester perkuliahan baru dibuka.",
    solution:
      "Memasok kursi kuliah lipat Brother berkerangka kokoh dengan papan tulis presisi yang dirancang khusus untuk kenyamanan belajar intensif mahasiswa.",
    result:
      "Seluruh unit kursi kuliah terpasang rapi di ruang-ruang kuliah FIB Unsoed dan siap digunakan untuk proses belajar mengajar.",
    cover: "/images/projects/kursi-kuliah-brother-fib.jpg",
    gallery: [
      {
        src: "/images/projects/kursi-kuliah-brother-fib.jpg",
        alt: "Ratusan unit kursi kuliah Brother terpasang berjajar di ruang kuliah FIB Unsoed",
      },
      {
        src: "/images/projects/kursi-mesh-ergonomis.jpg",
        alt: "Pemeriksaan unit kursi ergonomis berkerangka kokoh",
      },
      {
        src: "/images/projects/kursi-putar-kerja-kantor.jpg",
        alt: "Pemeriksaan kualitas rangka dan mekanisme kursi sebelum serah terima",
      },
    ],
  },
  {
    slug: "meubelair-kursi-kuliah-fisip-unsoed-2025",
    title: "Pengadaan Meubelair berupa Kursi Kuliah pada FISIP Unsoed TH. 2025",
    categories: ["mebel-furniture"],
    activityType: "PENGADAAN BARANG",
    client: "Universitas Jenderal Soedirman",
    clientType: "Pendidikan",
    location: "Purwokerto",
    year: 2025,
    contractValue: "Rp 303.551.700",
    contractValueNumber: 303551700,
    hasDetail: true,
    featured: false,
    summary:
      "Penyediaan set meubelair kursi kuliah mahasiswa busa berdensitas tinggi untuk ruang perkuliahan FISIP Unsoed tahun anggaran 2025.",
    challenge:
      "Pengadaan kursi kuliah bertingkat kenyamanan ekstra dengan busa tebal dan meja tulis kokoh untuk ratusan mahasiswa.",
    solution:
      "Fabrikasi kursi kuliah rangka pipa baja dengan dudukan dan sandaran busa warna cokelat oranye dilapisi kulit sintetis tahan sobek.",
    result:
      "Ruang kuliah FISIP Unsoed kini tampil lebih segar dan nyaman, mendukung proses perkuliahan harian mahasiswa.",
    cover: "/images/projects/kursi-kuliah-fisip-unsoed.jpg",
    gallery: [
      {
        src: "/images/projects/kursi-kuliah-fisip-unsoed.jpg",
        alt: "Deretan kursi kuliah busa terpasang rapi di ruang kuliah FISIP Unsoed",
      },
      {
        src: "/images/projects/kursi-kuliah-unsoed-koleksi.jpg",
        alt: "Koleksi peremajaan kursi kuliah modern Fakultas Ilmu Sosial dan Ilmu Politik",
      },
      {
        src: "/images/projects/produksi-mebel-sekolah.jpg",
        alt: "Proses perakitan dan inspeksi kekuatan struktur rangka kursi",
      },
    ],
  },
  {
    slug: "rakor-serah-terima-sertifikat-tanah-dki",
    title: "Rapat Koordinasi dan Serah Terima Sertifikat Tanah Pertamina di Wilayah DKI Jakarta",
    categories: ["event-organizer"],
    activityType: "EVENT ORGANIZER",
    client: "PT Pertamina (Persero)",
    clientType: "BUMN",
    location: "DKI Jakarta",
    year: 2025,
    contractValue: "Rp 354.919.312",
    contractValueNumber: 354919312,
    hasDetail: true,
    featured: true,
    summary:
      "Penyelenggaraan acara rapat koordinasi tingkat tinggi dan seremonial serah terima sertifikat tanah aset Pertamina di wilayah DKI Jakarta.",
    challenge:
      "Pengelolaan acara formal kenegaraan/BUMN dengan standar protokoler tinggi, keterlibatan pejabat lintas instansi, dan kebutuhan dokumentasi resmi.",
    solution:
      "Menyediakan tata ruang meeting room hotel berbintang, sound system kejernihan tinggi, backdrop panggung bertema, serta tim LO protokoler yang sigap.",
    result:
      "Serah terima sertifikat tanah berlangsung sukses, tertib, dan menghasilkan dokumentasi kenegaraan yang komprehensif bagi PT Pertamina (Persero).",
    cover: "/images/projects/serah-terima-sertifikat-dki.jpg",
    gallery: [
      {
        src: "/images/projects/serah-terima-sertifikat-dki.jpg",
        alt: "Seremonial penyerahan dokumen sertifikat tanah Pertamina di hadapan pejabat",
      },
      {
        src: "/images/projects/rakor-pertamina-ballroom.jpg",
        alt: "Suasana rapat koordinasi di meeting room eksekutif",
      },
      {
        src: "/images/projects/event-organizer-pertamina-dki.jpg",
        alt: "Dokumentasi lengkap acara rapat dan serah terima sertifikat",
      },
    ],
  },
  {
    slug: "belanja-modal-mebel-dinkes-bandung",
    title: "Pekerjaan Belanja Modal Mebel (APBD) (Ekatalog)",
    categories: ["mebel-furniture"],
    activityType: "PENGADAAN BARANG",
    client: "Dinas Kesehatan Kab. Bandung",
    clientType: "Pemerintah",
    location: "Kab. Bandung",
    year: 2025,
    contractValue: "Rp 655.310.000",
    contractValueNumber: 655310000,
    hasDetail: true,
    featured: false,
    summary:
      "Pengadaan mebel modal APBD melalui e-Katalog LKPP untuk fasilitas kantor dan sarana pelayanan Dinas Kesehatan Kabupaten Bandung.",
    challenge:
      "Kebutuhan pemenuhan spesifikasi standar teknis e-Katalog LKPP dengan pengiriman tepat waktu ke fasilitas dinas kesehatan di Kabupaten Bandung.",
    solution:
      "Penyediaan mebel kantor ergonomis, meja layanan kayu jati solid berkaca, dan lemari arsip dengan proses administrasi e-Katalog yang akuntabel.",
    result:
      "Seluruh paket belanja modal mebel terverifikasi dan diserahterimakan dengan Berita Acara Serah Terima (BAST) tanpa catatan.",
    cover: "/images/projects/meja-kerja-kayu-jati.jpg",
    gallery: [
      {
        src: "/images/projects/meja-kerja-kayu-jati.jpg",
        alt: "Meja kerja kayu jati solid dengan kaca atas dan laci kuncian untuk instansi dinas",
      },
      {
        src: "/images/projects/kursi-putar-kerja-kantor.jpg",
        alt: "Deretan kursi kerja putar dan kursi rapat staf dinas kesehatan",
      },
      {
        src: "/images/projects/produksi-mebel-sekolah.jpg",
        alt: "Proses perakitan dan inspeksi kualitas mebel dinas di workshop",
      },
    ],
  },
  {
    slug: "kanopi-parkiran-kejaksaan-cilacap",
    title: "Pembangunan Kanopi Parkiran Kantor Kejaksaan Negeri Cilacap",
    categories: ["interior-eksterior"],
    activityType: "KONSTRUKSI",
    client: "Dinas Pekerjaan Umum dan Perumahan Rakyat Kab. Cilacap",
    clientType: "Pemerintah",
    location: "Cilacap",
    year: 2025,
    contractValue: "Rp 350.000.000",
    contractValueNumber: 350000000,
    hasDetail: false,
    featured: false,
    summary:
      "Pekerjaan konstruksi kanopi area parkir kendaraan dinas dan tamu di lingkungan Kantor Kejaksaan Negeri Cilacap.",
    challenge:
      "Pengerjaan konstruksi di area kantor aktif yang membutuhkan ketelitian tinggi, keselamatan kerja ketat, dan tanpa mengganggu aktivitas kedinasan.",
    solution:
      "Penerapan struktur baja berkekuatan tinggi dengan atap kedap panas dan finishing cat pelindung korosi luar ruangan yang tahan cuaca pesisir Cilacap.",
    result:
      "Area parkir Kejaksaan Negeri Cilacap kini terlindung optimal dengan estetika arsitektur yang selaras dengan gedung kantor utama.",
    gallery: [
      {
        src: "/images/workshop-mebel-kayu.jpg",
        alt: "Persiapan material dan fabrikasi pendukung konstruksi eksterior",
      },
      {
        src: "/images/bahan-baku-kayu-jati.jpg",
        alt: "Pemeriksaan material struktur dan kelengkapan konstruksi",
      },
    ],
  },
  {
    slug: "kursi-kuliah-brother-fib-unsoed-209m",
    title: "Pengadaan Kursi Kuliah Brother di Fakultas FIB Unsoed",
    categories: ["mebel-furniture"],
    activityType: "PENGADAAN BARANG",
    client: "Universitas Jenderal Soedirman",
    clientType: "Pendidikan",
    location: "Purwokerto",
    year: 2025,
    contractValue: "Rp 209.399.946",
    contractValueNumber: 209399946,
    hasDetail: false,
    summary:
      "Pengadaan kursi kuliah Brother bertingkat kenyamanan tinggi untuk kebutuhan ruang kuliah mahasiswa Fakultas Ilmu Budaya Unsoed.",
    gallery: [],
  },
  {
    slug: "meubelair-custom-fib-unsoed",
    title: "Pengadaan Meubelair Custom di Fakultas Ilmu Budaya Unsoed",
    categories: ["mebel-furniture"],
    activityType: "PENGADAAN BARANG",
    client: "Universitas Jenderal Soedirman",
    clientType: "Pendidikan",
    location: "Purwokerto",
    year: 2025,
    contractValue: "Rp 169.000.000",
    contractValueNumber: 169000000,
    hasDetail: false,
    summary:
      "Fabrikasi dan pemasangan mebel custom khusus yang disesuaikan dengan dimensi ruangan dan estetika Fakultas Ilmu Budaya Unsoed.",
    cover: "/images/projects/meja-kerja-l-shape.jpg",
    gallery: [],
  },
  {
    slug: "mebelair-gedung-teknik-listrik-pnc",
    title: "Pengadaan Mebelair Gedung Teknik Listrik dan Energi Terbarukan IV",
    categories: ["mebel-furniture"],
    activityType: "PENGADAAN BARANG",
    client: "Politeknik Negeri Cilacap",
    clientType: "Pendidikan",
    location: "Cilacap",
    year: 2025,
    contractValue: "Rp 151.920.000",
    contractValueNumber: 151920000,
    hasDetail: false,
    summary:
      "Penyediaan mebelair dan bangku laboratorium untuk Gedung Teknik Listrik dan Energi Terbarukan IV di kampus Politeknik Negeri Cilacap.",
    cover: "/images/projects/lemari-loker-besi.jpg",
    gallery: [],
  },
  {
    slug: "rakor-pengadaan-tanah-buffer-zone-cilacap",
    title: "Rapat Koordinasi Pengadaan Tanah Lahan Buffer Zone Pertamina Group di Kabupaten Cilacap",
    categories: ["event-organizer"],
    activityType: "EVENT ORGANIZER",
    client: "PT Pertamina Patra Niaga MOR IV",
    clientType: "BUMN",
    location: "Cilacap",
    year: 2025,
    contractValue: "Rp 294.917.500",
    contractValueNumber: 294917500,
    hasDetail: false,
    summary:
      "Manajemen acara kedinasan dan koordinasi multi-pihak pengadaan lahan Buffer Zone Pertamina Group di wilayah Kabupaten Cilacap.",
    cover: "/images/projects/rakor-pertamina-ballroom.jpg",
    gallery: [],
  },
  {
    slug: "rakor-program-kerja-pertanahan-ru-iv",
    title: "Rapat Koordinasi Program Kerja Pertanahan dan Penyerahan Sertifikat Baru di Wilayah Kerja RU IV Cilacap",
    categories: ["event-organizer"],
    activityType: "EVENT ORGANIZER",
    client: "PT Pertamina Patra Niaga RU IV",
    clientType: "BUMN",
    location: "Cilacap",
    year: 2025,
    contractValue: "Rp 155.250.000",
    contractValueNumber: 155250000,
    hasDetail: false,
    summary:
      "Penyelenggaraan rakor program kerja pertanahan serta seremonial penyerahan sertifikat baru aset di wilayah kerja RU IV Cilacap.",
    gallery: [],
  },
  {
    slug: "sertifikasi-rakor-pendaftaran-hak-shgb",
    title: "Kegiatan Sertifikasi Rakor Pendaftaran Hak 2 SHGB (RDP & FT Tegal), Rakor Penerbitan SKPH dan Pendaftaran Hak 1 SHGB (Tanah Kosong Juwana Pati), serta Kegiatan Lapangan Pengukuran Kadasteral dan Rakor Penerbitan Peta Situasi 1 SHGB (Tanah BTS / Repeater Gunung Sibata)",
    categories: ["event-organizer"],
    activityType: "EVENT ORGANIZER",
    client: "PT Pertamina Patra Niaga MOR IV",
    clientType: "BUMN",
    location: "Tegal, Pati & Cilacap",
    year: 2025,
    contractValue: "Rp 304.002.500",
    contractValueNumber: 304002500,
    hasDetail: false,
    summary:
      "Penyelenggaraan rangkaian kegiatan legalitas pertanahan, rakor SHGB Tegal dan Juwana Pati, serta survei pengukuran kadasteral Repeater Gunung Sibata.",
    gallery: [],
  },
  {
    slug: "survei-pemetaan-pipa-bantul-yogya-sleman",
    title: "Kegiatan Survei Pengukuran dan Pemetaan Tanah Jalur Pipa Kab. Bantul, Kota Yogyakarta dan Kab. Sleman",
    categories: ["event-organizer"],
    activityType: "EVENT ORGANIZER",
    client: "PT Pertamina Patra Niaga MOR IV",
    clientType: "BUMN",
    location: "D.I. Yogyakarta",
    year: 2025,
    contractValue: "Rp 370.127.500",
    contractValueNumber: 370127500,
    hasDetail: false,
    summary:
      "Pengorganisasian tim teknis, akomodasi, dan sarana prasarana survei pemetaan jalur pipa strategis di Kabupaten Bantul, Kota Yogyakarta, dan Kabupaten Sleman.",
    gallery: [],
  },
  {
    slug: "serah-terima-sertifikat-fgd-pertamina-jateng",
    title: "Serah Terima Sertifikat dan FGD Tanah Pertamina di Wilayah Jawa Tengah",
    categories: ["event-organizer"],
    activityType: "EVENT ORGANIZER",
    client: "PT Pertamina Patra Niaga MOR IV",
    clientType: "BUMN",
    location: "Semarang",
    year: 2025,
    contractValue: "Rp 304.469.713",
    contractValueNumber: 304469713,
    hasDetail: false,
    summary:
      "Penyelenggaraan Forum Group Discussion (FGD) dan seremoni serah terima sertifikat tanah aset Pertamina di seluruh wilayah regional Jawa Tengah.",
    gallery: [],
  },
  {
    slug: "konsinyering-tanah-tuban-aceh-tamiang",
    title: "Konsinyering Penerbitan / Pembaruan Hak Bidang Tanah PT Pertamina (Persero) di Tuban dan Aceh Tamiang",
    categories: ["event-organizer"],
    activityType: "EVENT ORGANIZER",
    client: "PT Pertamina (Persero)",
    clientType: "BUMN",
    location: "Tuban & Aceh Tamiang",
    year: 2025,
    contractValue: "Rp 359.816.091",
    contractValueNumber: 359816091,
    hasDetail: false,
    summary:
      "Manajemen acara konsinyering lintas daerah terkait penerbitan dan pembaruan hak atas tanah aset PT Pertamina di Tuban (Jawa Timur) dan Aceh Tamiang.",
    gallery: [],
  },

  // ==========================================
  // HALAMAN 13: PROJECT TAHUN 2022 - 2025
  // ==========================================
  {
    slug: "pt-pertamina-patra-niaga-mor-iv",
    title: "Penyediaan Sarana Prasarana Support Kegiatan Operasional Rutin dan Kondisional di Wilayah Regional Jawa Bagian Tengah",
    categories: ["event-organizer", "pengadaan-umum"],
    activityType: "EVENT ORGANIZER",
    client: "PT Pertamina Patra Niaga MOR IV",
    clientType: "BUMN",
    location: "Semarang",
    year: 2024,
    contractValue: "Rp 581.900.000",
    contractValueNumber: 581900000,
    hasDetail: true,
    featured: true,
    summary:
      "Penyediaan sarana dan prasarana terpadu untuk mendukung kelancaran operasional rutin dan kegiatan kondisional PT Pertamina Patra Niaga di regional Jawa Bagian Tengah.",
    challenge:
      "Cakupan wilayah operasional yang luas mencakup Jawa Tengah dan D.I. Yogyakarta dengan dinamika kebutuhan operasional cepat dan tanggap.",
    solution:
      "Menyediakan manajemen rantai pasok sarana prasarana yang tangguh, tim dukungan siaga, serta akomodasi kegiatan operasional yang terkoordinasi rapi.",
    result:
      "Kelancaran operasional terjamin sepanjang periode kerja sama, memberikan efisiensi tinggi bagi divisi operasional Pertamina Patra Niaga MOR IV.",
    cover: "/images/projects/serah-terima-barang-pertamina.jpg",
    gallery: [
      {
        src: "/images/projects/serah-terima-barang-pertamina.jpg",
        alt: "Dokumentasi serah terima logistik dan perlengkapan sarpras operasional BUMN",
      },
      {
        src: "/images/projects/rakor-pertamina-ballroom.jpg",
        alt: "Fasilitas rapat koordinasi operasional wilayah Jawa Bagian Tengah",
      },
      {
        src: "/images/projects/pengiriman-sarpras-pikap.jpg",
        alt: "Distribusi armada logistik sarana operasional di lapangan",
      },
    ],
  },
  {
    slug: "rakor-tanah-ft-manokwari-atr-bpn",
    title: "Rapat Koordinasi Lanjutan Penanganan Permasalahan Tanah Fuel Terminal Manokwari Bersama Direktur Penanganan Sengketa Pertanahan Kementerian ATR / BPN dan PT Pertamina Patra Niaga",
    categories: ["event-organizer"],
    activityType: "EVENT ORGANIZER",
    client: "PT Pertamina Patra Niaga MOR IV",
    clientType: "BUMN",
    location: "Yogyakarta",
    year: 2024,
    contractValue: "Rp 542.470.815",
    contractValueNumber: 542470815,
    hasDetail: true,
    featured: false,
    summary:
      "Penyelenggaraan rakor koordinasi strategis penanganan perkara pertanahan Fuel Terminal Manokwari bersama Direktur Penanganan Sengketa Pertanahan Kementerian ATR/BPN RI dan manajemen PT Pertamina Patra Niaga di Yogyakarta.",
    challenge:
      "Koordinasi intensif penyelesaian sengketa pertanahan strategis Fuel Terminal Manokwari yang melibatkan jajaran direksi Kementerian ATR/BPN, pimpinan PT Pertamina Patra Niaga, dan lintas pemangku kepentingan.",
    solution:
      "Penyelenggaraan event kedinasan (MICE) bertaraf tinggi di Yogyakarta (13-15 Desember 2024), mencakup tata ruang meeting room eksekutif, backdrop panggung tematik resmi, sound system kejernihan tinggi, multimedia presentasi, hingga akomodasi dan protokoler VIP.",
    result:
      "Rapat koordinasi terlaksana lancar, tertib, dan menghasilkan rumusan kesepakatan penanganan perkara tanah yang konstruktif bagi operasional energi Pertamina.",
    cover: "/images/projects/rakor-manokwari-foto-bersama.jpg",
    gallery: [
      {
        src: "/images/projects/rakor-manokwari-foto-bersama.jpg",
        alt: "Foto bersama Direktur Penanganan Sengketa Pertanahan Kementerian ATR/BPN, Direksi Pertamina, dan peserta rakor di depan backdrop resmi",
      },
      {
        src: "/images/projects/rakor-manokwari-sesi-rapat.jpg",
        alt: "Suasana sesi rapat koordinasi penanganan perkara tanah Fuel Terminal Manokwari di Yogyakarta",
      },
      {
        src: "/images/projects/rakor-pertamina-manokwari-yogyakarta.jpg",
        alt: "Dokumentasi lengkap penyelenggaraan Rakor Penanganan Perkara Tanah FT Manokwari di Yogyakarta",
      },
    ],
  },
  {
    slug: "eo-sosialisasi-pre-trip-inspection-mor-iv",
    title: "EO Penyediaan sarpras Kegiatan Acara Sosialisasi Pre-Trip Inspection And Safety Driving Awareness Campaign (MOR IV - SMRG)",
    categories: ["event-organizer"],
    activityType: "EVENT ORGANIZER",
    client: "PT Pertamina Patra Niaga MOR IV",
    clientType: "BUMN",
    location: "Semarang",
    year: 2023,
    contractValue: "Rp 465.520.000",
    contractValueNumber: 465520000,
    hasDetail: false,
    summary:
      "Pengelolaan menyeluruh sarana prasarana kampanye keselamatan berkendara (Safety Driving Awareness) dan Pre-Trip Inspection bagi armada distribusi energi MOR IV.",
    gallery: [],
  },
  {
    slug: "fgd-percepatan-pengadaan-asset-operation-jbt",
    title: "EO Penyediaan Sarpras Kegiatan Acara Forum Group Discussion Percepatan Pengadaan Barang dan Jasa - Fungsi Asset Operation JBT",
    categories: ["event-organizer"],
    activityType: "EVENT ORGANIZER",
    client: "PT Pertamina Patra Niaga MOR IV",
    clientType: "BUMN",
    location: "Semarang",
    year: 2024,
    contractValue: "Rp 397.583.750",
    contractValueNumber: 397583750,
    hasDetail: false,
    summary:
      "Penyelenggaraan FGD intensif fungsi Asset Operation Jawa Bagian Tengah dalam akselerasi tata kelola pengadaan barang dan jasa BUMN.",
    gallery: [],
  },
  {
    slug: "spk-sarpras-focus-discussion-asset-jbt",
    title: "SPK Penyediaan Sarpras kegiatan acara Fokus Discussion Perkara Asset Operation JBT",
    categories: ["event-organizer"],
    activityType: "EVENT ORGANIZER",
    client: "PT Pertamina Patra Niaga MOR IV",
    clientType: "BUMN",
    location: "Semarang",
    year: 2024,
    contractValue: "Rp 264.201.000",
    contractValueNumber: 264201000,
    hasDetail: false,
    summary:
      "Fasilitasi ruang sidang, peralatan audio visual, dan sarana prasarana diskusi terfokus penanganan perkara aset pada fungsi Asset Operation JBT.",
    gallery: [],
  },
  {
    slug: "ekspose-jalur-pipa-bopon-hak-paten",
    title: "EO Ekspose Hasil Pengukuran Jalur Pipa Bopon & Hak Paten",
    categories: ["event-organizer"],
    activityType: "EVENT ORGANIZER",
    client: "PT Pertamina (Persero)",
    clientType: "BUMN",
    location: "Jakarta",
    year: 2024,
    contractValue: "Rp 221.196.405",
    contractValueNumber: 221196405,
    hasDetail: false,
    summary:
      "Penyelenggaraan forum ekspose teknis hasil pengukuran jalur pipa Bopon dan verifikasi dokumen legalitas paten.",
    gallery: [],
  },
  {
    slug: "kunjungan-lokasi-aset-grobogan-pati",
    title: "Kunjungan Lokasi Aset Grobogan & Pati Jawa Tengah",
    categories: ["event-organizer"],
    activityType: "EVENT ORGANIZER",
    client: "PT Pertamina (Persero)",
    clientType: "BUMN",
    location: "Grobogan & Pati",
    year: 2024,
    contractValue: "Rp 214.028.720",
    contractValueNumber: 214028720,
    hasDetail: false,
    summary:
      "Dukungan logistik, akomodasi, dan pengawalan lapangan kunjungan kerja pimpinan dalam rangka inventarisasi aset di Grobogan dan Pati.",
    gallery: [],
  },
  {
    slug: "renovasi-transit-rumah-dinas-tegal",
    title: "Renovasi Ruang transit & Rumah dinas sales area Tegal",
    categories: ["interior-eksterior"],
    activityType: "KONSTRUKSI",
    client: "PT Pertamina Patra Niaga MOR IV",
    clientType: "BUMN",
    location: "Tegal",
    year: 2023,
    contractValue: "Rp 198.254.000",
    contractValueNumber: 198254000,
    hasDetail: false,
    summary:
      "Pekerjaan konstruksi dan pembaruan interior ruang transit kedinasan serta fasilitas rumah dinas Pertamina Sales Area Tegal.",
    cover: "/images/projects/sofa-meja-kaca-lomanis.jpg",
    gallery: [],
  },
  {
    slug: "renovasi-meja-corsec-emergency-graha-pertamina",
    title: "Renovasi & pengadaan meja fungsi corsec, feedstock & emergency Response di Graha Pertamina",
    categories: ["interior-eksterior", "mebel-furniture"],
    activityType: "KONSTRUKSI",
    client: "PT Pertamina Patra Niaga MOR IV",
    clientType: "BUMN",
    location: "Semarang",
    year: 2023,
    contractValue: "Rp 198.200.000",
    contractValueNumber: 198200000,
    hasDetail: false,
    summary:
      "Renovasi ruang kerja dan meja komando kustom fungsi Corporate Secretary, Feedstock, dan Emergency Response di Graha Pertamina.",
    cover: "/images/projects/meja-rapat-oval-executive.jpg",
    gallery: [],
  },
  {
    slug: "konsinyering-peninjauan-gmp",
    title: "Konsinyering dan peninjauan GMP",
    categories: ["event-organizer"],
    activityType: "EVENT ORGANIZER",
    client: "PT Pertamina Patra Niaga RU IV",
    clientType: "BUMN",
    location: "Cilacap",
    year: 2023,
    contractValue: "Rp 177.732.500",
    contractValueNumber: 177732500,
    hasDetail: false,
    summary:
      "Penyelenggaraan konsinyering teknis serta akomodasi agenda peninjauan lapangan Good Manufacturing Practice (GMP) di lingkungan RU IV.",
    gallery: [],
  },
  {
    slug: "layanan-tamu-vip-asset-operation-jbt",
    title: "Layanan Tamu VIP dan Stake Holders Asset Operation JBT Februari 2025",
    categories: ["event-organizer"],
    activityType: "EVENT ORGANIZER",
    client: "PT Pertamina Patra Niaga MOR IV",
    clientType: "BUMN",
    location: "Semarang",
    year: 2025,
    contractValue: "Rp 172.672.500",
    contractValueNumber: 172672500,
    hasDetail: false,
    summary:
      "Pengelolaan jamuan protokoler, transportasi, dan pendampingan tamu VIP serta para pemangku kepentingan (stakeholders) fungsi Asset Operation JBT.",
    gallery: [],
  },
  {
    slug: "sosialisasi-upp-join-cost-2025",
    title: "Sosialisasi Usulan Pelepasan & Penghapusan (UPP) dan Join Cost Tahun 2025",
    categories: ["event-organizer"],
    activityType: "EVENT ORGANIZER",
    client: "PT Pertamina Patra Niaga MOR IV",
    clientType: "BUMN",
    location: "Semarang",
    year: 2025,
    contractValue: "Rp 166.144.005",
    contractValueNumber: 166144005,
    hasDetail: false,
    summary:
      "Penyelenggaraan acara sosialisasi pedoman Usulan Pelepasan & Penghapusan aset serta tata kelola Join Cost tahun anggaran 2025.",
    gallery: [],
  },
  {
    slug: "pengukuran-aset-tanah-rdmp-ru-iv",
    title: "Pengukuran Aset Tanah Objek Tukar Menukar BMD dan BBWS untuk RDMP RU IV dan Pelaksanaan Pemeriksaan Tanah (Konstatasi) Aset Tanah RU IV Cilacap",
    categories: ["event-organizer"],
    activityType: "EVENT ORGANIZER",
    client: "PT Pertamina Patra Niaga RU IV",
    clientType: "BUMN",
    location: "Cilacap",
    year: 2024,
    contractValue: "Rp 155.300.000",
    contractValueNumber: 155300000,
    hasDetail: false,
    summary:
      "Dukungan operasional dan sarpras kegiatan pengukuran serta pemeriksaan fisik tanah (konstatasi) untuk proyek strategis RDMP RU IV Cilacap.",
    gallery: [],
  },
  {
    slug: "bapor-tenis-meja-futsal-beladiri",
    title: "Pengadaan bapor tenis meja, futsal, beladiri, menembak di PT. Kilang Pertamina Internasional",
    categories: ["pengadaan-umum"],
    activityType: "PENGADAAN BARANG",
    client: "PT Pertamina Patra Niaga RU IV",
    clientType: "BUMN",
    location: "Cilacap",
    year: 2022,
    contractValue: "Rp 162.168.891",
    contractValueNumber: 162168891,
    hasDetail: false,
    summary:
      "Pengadaan peralatan olahraga tenis meja, futsal, perlengkapan beladiri, dan cabang menembak untuk Badan Pembina Olahraga (BAPOR) KPI.",
    cover: "/images/projects/bapor-tenis-meja-futsal.jpg",
    gallery: [],
  },
  {
    slug: "bapor-alat-musik-kpi",
    title: "Pengadaan bapor alat musik di PT. Kilang Pertamina Internasional",
    categories: ["pengadaan-umum", "atk-kertas-elektronik"],
    activityType: "PENGADAAN BARANG",
    client: "PT Pertamina Patra Niaga RU IV",
    clientType: "BUMN",
    location: "Cilacap",
    year: 2022,
    contractValue: "Rp 162.000.000",
    contractValueNumber: 162000000,
    hasDetail: false,
    summary:
      "Pengadaan instrumen musik dan sound equipment pendukung kegiatan kesenian dan pembinaan karyawan di lingkungan RU IV Cilacap.",
    cover: "/images/projects/bapor-alat-musik-studio.jpg",
    gallery: [],
  },
  {
    slug: "bapor-pancing-sepakbola-voli-kpi",
    title: "Pengadaan bapor pancing, sepakbola, voli di PT. Kilang Pertamina Internasional",
    categories: ["pengadaan-umum"],
    activityType: "PENGADAAN BARANG",
    client: "PT Pertamina Patra Niaga RU IV",
    clientType: "BUMN",
    location: "Cilacap",
    year: 2022,
    contractValue: "Rp 161.714.232",
    contractValueNumber: 161714232,
    hasDetail: false,
    summary:
      "Pasokan sarana olahraga dan rekreasi meliputi set pancingan, bola sepak standar kompetisi, dan perlengkapan bola voli BAPOR KPI.",
    cover: "/images/projects/bapor-voli-sepakbola.jpg",
    gallery: [],
  },
  {
    slug: "bapor-lari-basket-golf-kpi",
    title: "Pengadaan bapor lari, laras patra, basket, golf di PT. Kilang Pertamina Internasional",
    categories: ["pengadaan-umum"],
    activityType: "PENGADAAN BARANG",
    client: "PT Pertamina Patra Niaga RU IV",
    clientType: "BUMN",
    location: "Cilacap",
    year: 2022,
    contractValue: "Rp 161.116.500",
    contractValueNumber: 161116500,
    hasDetail: false,
    summary:
      "Penyediaan perlengkapan olahraga cabang atletik/lari, basket, dan set perlengkapan golf bagi pembinaan kesehatan pekerja kilang.",
    cover: "/images/projects/bapor-basket-golf-lari.jpg",
    gallery: [],
  },
  {
    slug: "bapor-gaple-repli-kpi",
    title: "Pengadaan bapor gaple dan repli di PT. Kilang Pertamina Internasional",
    categories: ["pengadaan-umum"],
    activityType: "PENGADAAN BARANG",
    client: "PT Pertamina Patra Niaga RU IV",
    clientType: "BUMN",
    location: "Cilacap",
    year: 2022,
    contractValue: "Rp 153.397.247",
    contractValueNumber: 153397247,
    hasDetail: false,
    summary:
      "Penyediaan sarana perlengkapan rekreasi dan kejuaraan antarbagian Badan Pembina Olahraga di PT Kilang Pertamina Internasional.",
    cover: "/images/projects/bapor-gaple-catur-rekreasi.jpg",
    gallery: [],
  },

  // ==========================================
  // HALAMAN 12: PROJECT TAHUN 2020 - 2021
  // ==========================================
  {
    slug: "pt-kilang-pertamina-internasional",
    title: "Pengadaan Furniture RDP Periode Desember di PT Kilang Pertamina Internasional",
    categories: ["mebel-furniture", "atk-kertas-elektronik"],
    activityType: "PENGADAAN BARANG",
    client: "PT Pertamina Patra Niaga RU IV",
    clientType: "BUMN",
    location: "Cilacap",
    year: 2021,
    contractValue: "Rp 181.937.500",
    contractValueNumber: 181937500,
    hasDetail: true,
    featured: true,
    summary:
      "Pengadaan furniture kantor, meja rapat oval, dan perabotan perumahan dinas (RDP) PT Kilang Pertamina Internasional RU IV Cilacap.",
    challenge:
      "Standarisasi ketat perabot perumahan dinas industri BUMN dengan kebutuhan durabilitas tinggi dan kerapihan instalasi.",
    solution:
      "Menyediakan deretan mebel berkualitas prima, meja workstation modular, lemari arsip kokoh, dan pengecekan BAST komprehensif.",
    result:
      "Seluruh furnitur dan perlengkapan RDP diserahterimakan tepat waktu dalam kondisi sempurna dan siap pakai.",
    cover: "/images/projects/kursi-direksi-kulit.jpg",
    gallery: [
      {
        src: "/images/projects/meja-rapat-oval-executive.jpg",
        alt: "Meja rapat oval eksekutif dengan soket kabel data terintegrasi",
      },
      {
        src: "/images/projects/pengiriman-pertamina-cilacap.jpg",
        alt: "Truk pengiriman logistik furnitur tiba di area kantor Pertamina Cilacap",
      },
      {
        src: "/images/projects/serah-terima-barang-pertamina.jpg",
        alt: "Pemeriksaan dokumen Berita Acara Serah Terima bersama staf Pertamina",
      },
      {
        src: "/images/projects/sofa-single-eksekutif.jpg",
        alt: "Sofa single eksekutif dengan bantalan nyaman untuk RDP",
      },
    ],
  },
  {
    slug: "elektronik-rdp-nov-2021-kpi",
    title: "Pengadaan elektronik RDP Periode november 2021 di PT Kilang Pertamina Internasional",
    categories: ["atk-kertas-elektronik"],
    activityType: "PENGADAAN BARANG",
    client: "PT Pertamina Patra Niaga RU IV",
    clientType: "BUMN",
    location: "Cilacap",
    year: 2021,
    contractValue: "Rp 181.239.000",
    contractValueNumber: 181239000,
    hasDetail: false,
    summary:
      "Pasokan perangkat elektronik rumah dinas pimpinan dan staf berupa pendingin ruangan, kulkas, dan perangkat rumah tangga berkualitas.",
    gallery: [],
  },
  {
    slug: "furniture-rdp-oktober-2021-kpi",
    title: "Pengadaan furniture RDP Periode oktober 2021 di PT Kilang Pertamina Internasional",
    categories: ["mebel-furniture"],
    activityType: "PENGADAAN BARANG",
    client: "PT Pertamina Patra Niaga RU IV",
    clientType: "BUMN",
    location: "Cilacap",
    year: 2021,
    contractValue: "Rp 181.000.000",
    contractValueNumber: 181000000,
    hasDetail: false,
    summary:
      "Pengadaan set almari kaca aluminium, meja kerja, dan sofa tamu untuk fasilitas perumahan dinas RU IV Cilacap periode Oktober 2021.",
    cover: "/images/projects/lemari-kaca-aluminium-kpi.jpg",
    gallery: [
      {
        src: "/images/projects/lemari-kaca-aluminium-kpi.jpg",
        alt: "Lemari kaca aluminium serbaguna untuk hunian dinas kilang Pertamina",
      },
    ],
  },
  {
    slug: "elektronik-rdp-oktober-2021-kpi",
    title: "Pengadaan Elektronik RDP Periode oktober 2021 di PT Kilang Pertamina Internasional",
    categories: ["atk-kertas-elektronik"],
    activityType: "PENGADAAN BARANG",
    client: "PT Pertamina Patra Niaga RU IV",
    clientType: "BUMN",
    location: "Cilacap",
    year: 2021,
    contractValue: "Rp 181.000.000",
    contractValueNumber: 181000000,
    hasDetail: false,
    summary:
      "Pengadaan aneka perangkat elektronik penunjang kenyamanan hunian dinas kilang Pertamina Cilacap periode Oktober 2021.",
    gallery: [],
  },
  {
    slug: "springbed-agustus-2021-kpi",
    title: "Pengadaan Springbed periode agustus 2021 di PT Kilang Pertamina Internasional",
    categories: ["mebel-furniture"],
    activityType: "PENGADAAN BARANG",
    client: "PT Pertamina Patra Niaga RU IV",
    clientType: "BUMN",
    location: "Cilacap",
    year: 2021,
    contractValue: "Rp 180.850.000",
    contractValueNumber: 180850000,
    hasDetail: true,
    featured: false,
    summary:
      "Pengadaan kasur springbed tipe premium dengan busa kepadatan tinggi dan ketahanan pegas teruji untuk hunian staf Pertamina.",
    challenge:
      "Penyediaan puluhan unit kasur springbed berspesifikasi kenyamanan hotel berbintang dengan jadwal distribusi serentak ke berbagai unit RDP.",
    solution:
      "Memasok springbed berkontur ergonomis dengan perlindungan higienis plastik ganda dan inspeksi menyeluruh saat pembongkaran muatan.",
    result:
      "Seluruh springbed diterima dalam kondisi steril, bersih, dan sesuai standar kenyamanan akomodasi PT Kilang Pertamina Internasional.",
    cover: "/images/projects/springbed-kpi-cilacap.jpg",
    gallery: [
      {
        src: "/images/projects/springbed-kpi-cilacap.jpg",
        alt: "Tumpukan kasur springbed premium bersegel siap serah terima",
      },
      {
        src: "/images/projects/pengadaan-springbed-perabot-rdp.jpg",
        alt: "Dokumentasi paket pengadaan kasur dan perabot hunian dinas",
      },
    ],
  },
  {
    slug: "perabot-apartemen-lomanis-residence",
    title: "Penyediaan peralatan dan perabotan Apartement lomanis residence di PT. Pertamina (Persero)",
    categories: ["mebel-furniture", "pengadaan-umum"],
    activityType: "PENGADAAN BARANG",
    client: "PT Pertamina (Persero)",
    clientType: "BUMN",
    location: "Cilacap",
    year: 2020,
    contractValue: "Rp 180.000.000",
    contractValueNumber: 180000000,
    hasDetail: true,
    featured: false,
    summary:
      "Penyediaan paket lengkap peralatan dan perabotan interior unit Apartemen Lomanis Residence Pertamina di Cilacap.",
    challenge:
      "Furnishing unit apartemen siap huni yang menuntut keselarasan estetika modern, kemudahan perawatan, dan durabilitas tinggi.",
    solution:
      "Menyediakan set sofa ruang santai, meja tamu kaca elegan, rak penyimpanan, dan perlengkapan unit apartemen berdaya tahan komersial.",
    result:
      "Unit apartemen Lomanis Residence Pertamina siap dihuni oleh ekspatriat dan staf pimpinan dengan suasana interior yang nyaman.",
    cover: "/images/projects/set-meja-bangku-tunggu.jpg",
    gallery: [
      {
        src: "/images/projects/sofa-meja-kaca-lomanis.jpg",
        alt: "Set sofa tamu dan meja kaca modern untuk unit apartemen Lomanis Residence",
      },
      {
        src: "/images/projects/set-meja-bangku-tunggu.jpg",
        alt: "Set bangku dan meja tunggu pelengkap area komunal apartemen",
      },
    ],
  },
  {
    slug: "kertas-hvs-paperone-kpi",
    title: "Penyediaan kertas HVS A4 PaperOne di PT Kilang Pertamina Internasional (KPI)",
    categories: ["atk-kertas-elektronik"],
    activityType: "PENGADAAN BARANG",
    client: "PT Pertamina Patra Niaga RU IV",
    clientType: "BUMN",
    location: "Cilacap",
    year: 2021,
    contractValue: "Rp 180.000.000",
    contractValueNumber: 180000000,
    hasDetail: true,
    featured: false,
    summary:
      "Pasokan berkelanjutan puluhan ribu rim kertas HVS A4 merek PaperOne asli untuk kebutuhan administrasi kantor dan operasional kilang KPI RU IV Cilacap.",
    challenge:
      "Kebutuhan pasokan rutin kertas dokumen perkantoran dalam volume masif dengan jaminan keaslian merek PaperOne 80 gsm dan kesiapan gudang penyimpanan bebas lembap.",
    solution:
      "Menyediakan sistem suplai kertas terpadu langsung dari distributor resmi, pengiriman terjadwal dengan armada boks, serta penataan di atas palet gudang logistik.",
    result:
      "Kebutuhan cetak dokumen operasional dan kearsipan kilang minyak Pertamina Cilacap tercukupi lancar tanpa hambatan kehabisan stok.",
    cover: "/images/projects/gudang-kertas-paperone-kpi.jpg",
    gallery: [
      {
        src: "/images/projects/gudang-kertas-paperone-kpi.jpg",
        alt: "Tumpukan ribuan rim kertas HVS A4 PaperOne di atas palet gudang logistik PT KPI",
      },
      {
        src: "/images/projects/pengiriman-pertamina-cilacap.jpg",
        alt: "Armada pengiriman logistik pengadaan tiba di area perkantoran Pertamina Cilacap",
      },
      {
        src: "/images/projects/serah-terima-barang-pertamina.jpg",
        alt: "Pengecekan dokumen serah terima Berita Acara bersama staf Pertamina",
      },
    ],
  },
  {
    slug: "material-sipil-elektrikal-nov-pertamina",
    title: "Pengadaan material sipil dan elektrikal periode November di PT Pertamina (Persero)",
    categories: ["pengadaan-umum", "interior-eksterior"],
    activityType: "PENGADAAN BARANG",
    client: "PT Pertamina (Persero)",
    clientType: "BUMN",
    location: "Cilacap",
    year: 2020,
    contractValue: "Rp 180.000.000",
    contractValueNumber: 180000000,
    hasDetail: false,
    summary:
      "Pasokan material konstruksi sipil, kabel kelistrikan industri, dan instalasi pencahayaan periode November bagi operasional Pertamina.",
    gallery: [],
  },
  {
    slug: "material-sipil-elektrikal-okt-pertamina",
    title: "Pengadaan material sipil dan elektrikal periode Oktober di PT Pertamina (Persero)",
    categories: ["pengadaan-umum", "interior-eksterior"],
    activityType: "PENGADAAN BARANG",
    client: "PT Pertamina (Persero)",
    clientType: "BUMN",
    location: "Cilacap",
    year: 2020,
    contractValue: "Rp 180.000.000",
    contractValueNumber: 180000000,
    hasDetail: false,
    summary:
      "Pasokan rutin material sipil dan suku cadang elektrikal pabrikasi untuk perawatan fasilitas Pertamina periode Oktober.",
    gallery: [],
  },
  {
    slug: "springbed-november-2021-kpi",
    title: "Pengadaan Springbed periode november 2021 di PT Kilang Pertamina Internasional",
    categories: ["mebel-furniture"],
    activityType: "PENGADAAN BARANG",
    client: "PT Pertamina Patra Niaga RU IV",
    clientType: "BUMN",
    location: "Cilacap",
    year: 2021,
    contractValue: "Rp 179.450.000",
    contractValueNumber: 179450000,
    hasDetail: false,
    summary:
      "Pengadaan tambahan unit springbed orthopedic dan perlengkapan tidur kamar dinas kilang RU IV periode November 2021.",
    gallery: [],
  },
  {
    slug: "furniture-rdp-desember-2021-kpi-178m",
    title: "Pengadaan furniture RDP Periode desember 2021 di PT Kilang Pertamina Internasional",
    categories: ["mebel-furniture"],
    activityType: "PENGADAAN BARANG",
    client: "PT Pertamina Patra Niaga RU IV",
    clientType: "BUMN",
    location: "Cilacap",
    year: 2021,
    contractValue: "Rp 178.000.000",
    contractValueNumber: 178000000,
    hasDetail: true,
    featured: false,
    summary:
      "Pengadaan set meja makan kayu solid, kursi makan, lemari kaca aluminium, dan rak serbaguna untuk hunian perumahan dinas (RDP) pekerja PT Kilang Pertamina Internasional RU IV Cilacap.",
    challenge:
      "Standarisasi ketat furnitur hunian dinas kilang minyak Pertamina yang menuntut material kayu solid berdaya tahan lama, finishing rapi, dan kemudahan perawatan.",
    solution:
      "Memproduksi set meja makan kayu solid warna cokelat berpadu kaki putih, kursi makan senada, lemari kaca aluminium geser, serta rak utilitas besi-kayu.",
    result:
      "Seluruh set perabot RDP diserahterimakan tepat waktu dalam kondisi sempurna, meningkatkan kenyamanan keluarga pekerja kilang Pertamina.",
    cover: "/images/projects/set-meja-kursi-makan-kpi.jpg",
    gallery: [
      {
        src: "/images/projects/set-meja-kursi-makan-kpi.jpg",
        alt: "Set meja dan kursi makan kayu warna cokelat putih untuk hunian RDP Kilang Pertamina Internasional",
      },
      {
        src: "/images/projects/lemari-kaca-aluminium-kpi.jpg",
        alt: "Lemari kaca aluminium serbaguna untuk fasilitas hunian dinas pekerja kilang",
      },
      {
        src: "/images/projects/rak-sepatu-kayu-besi-kpi.jpg",
        alt: "Rak susun kayu rangka besi putih untuk penataan hunian dinas",
      },
      {
        src: "/images/projects/perabot-rdp-dan-kertas-kpi.jpg",
        alt: "Dokumentasi paket pengadaan perabotan RDP dan logistik PT Kilang Pertamina Internasional",
      },
    ],
  },
  {
    slug: "equipment-ho-pertamina-persero",
    title: "Penyediaan fasilitas pendukung equipment HO di PT. Pertamina (Persero)",
    categories: ["pengadaan-umum"],
    activityType: "PENGADAAN BARANG",
    client: "PT Pertamina (Persero)",
    clientType: "BUMN",
    location: "Jakarta",
    year: 2020,
    contractValue: "Rp 175.000.000",
    contractValueNumber: 175000000,
    hasDetail: false,
    summary:
      "Penyediaan aneka perlengkapan pendukung operasional Head Office (HO) PT Pertamina (Persero) di Jakarta.",
    cover: "/images/projects/tempat-sampah-pilah-besi.jpg",
    gallery: [],
  },
  {
    slug: "perabot-staff-rdp-desember-kpi",
    title: "Pengadaan perabot staff RDP Periode Desember di PT. Kilang Pertamina Internasional",
    categories: ["mebel-furniture"],
    activityType: "PENGADAAN BARANG",
    client: "PT Pertamina Patra Niaga RU IV",
    clientType: "BUMN",
    location: "Cilacap",
    year: 2021,
    contractValue: "Rp 173.145.000",
    contractValueNumber: 173145000,
    hasDetail: false,
    summary:
      "Pengadaan perabotan rak susun kayu rangka besi, meja belajar, dan perabot penunjang perumahan staf kilang Cilacap.",
    cover: "/images/projects/rak-sepatu-kayu-besi-kpi.jpg",
    gallery: [
      {
        src: "/images/projects/rak-sepatu-kayu-besi-kpi.jpg",
        alt: "Rak susun kayu rangka besi putih untuk penataan hunian staf RDP",
      },
    ],
  },
  {
    slug: "perabot-elektrikal-rdp-kpi",
    title: "Pengadaan perabot dan elektrikal RDP di PT. Kilang Pertamina Internasional",
    categories: ["mebel-furniture", "atk-kertas-elektronik"],
    activityType: "PENGADAAN BARANG",
    client: "PT Pertamina Patra Niaga RU IV",
    clientType: "BUMN",
    location: "Cilacap",
    year: 2021,
    contractValue: "Rp 157.500.000",
    contractValueNumber: 157500000,
    hasDetail: false,
    summary:
      "Pengadaan paket perpaduan furnitur kayu dan peralatan elektrikal penerangan hemat energi untuk perumahan dinas Pertamina.",
    gallery: [],
  },
  {
    slug: "kertas-hvs-desember-2021-kpi",
    title: "Pengadaan Kertas HVS A4 periode Desember 2021 di PT Kilang Pertamina Internasional",
    categories: ["atk-kertas-elektronik"],
    activityType: "PENGADAAN BARANG",
    client: "PT Pertamina Patra Niaga RU IV",
    clientType: "BUMN",
    location: "Cilacap",
    year: 2021,
    contractValue: "Rp 150.000.000",
    contractValueNumber: 150000000,
    hasDetail: false,
    summary:
      "Penyediaan puluhan ribu rim kertas dokumen dinas HVS A4 PaperOne 80 gram untuk kebutuhan cetak laporan tutup tahun 2021.",
    gallery: [
      {
        src: "/images/projects/gudang-kertas-paperone-kpi.jpg",
        alt: "Tumpukan stok kertas HVS A4 PaperOne di gudang logistik PT Kilang Pertamina Internasional",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  const directMatch = projects.find((project) => project.slug === slug);
  if (directMatch) return directMatch;

  // Backward compatibility alias jika ada URL lama yang diakses pengguna
  if (slug === "pt-kilang-pertamina-internasional") {
    return projects.find((p) => p.slug === "pt-kilang-pertamina-internasional");
  }
  if (slug === "universitas-jenderal-soedirman") {
    return projects.find((p) => p.slug === "universitas-jenderal-soedirman");
  }
  if (slug === "sma-n-1-cilacap") {
    return projects.find((p) => p.slug === "belanja-modal-mebel-dinkes-bandung");
  }

  return undefined;
}

export function getDetailedProjects(): Project[] {
  return projects.filter((p) => p.hasDetail);
}
