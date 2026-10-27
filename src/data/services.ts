export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subLabel: string;
  shortDesc: string;
  fullDesc: string;
  priceNote: string;
  priceSar: number | null;
  image: string;
  features: string[];
  itinerary?: { time: string; activity: string }[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "city-tour-madinah",
    slug: "city-tour-ziarah-madinah",
    title: "City Tour & Ziarah Bersejarah Madinah",
    subLabel: "NAPAK TILAS SIRAH",
    shortDesc: "Kunjungan eksklusif Jabal Uhud, Masjid Quba, Masjid Qiblatain, dan Percetakan Al-Qur'an.",
    fullDesc:
      "Perjalanan ziarah privat bersama muthawif berwawasan sejarah Islam yang luas dan fasih berbahasa Indonesia. Menggunakan armada modern ber-AC (GMC, HiAce, atau Bus Pariwisata) yang menjemput langsung dari hotel Anda di kawasan Markaziyah.",
    priceNote: "Mulai 150 SAR / Mobil",
    priceSar: 150,
    image: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Armada nyaman ber-AC (HiAce / GMC / Bus)",
      "Muthawif berilmu dan ramah",
      "Jadwal fleksibel menyesuaikan waktu shalat",
      "Air mineral dingin gratis selama perjalanan",
    ],
    itinerary: [
      { time: "07:30", activity: "Penjemputan di lobi hotel Markaziyah" },
      { time: "08:00", activity: "Ziarah & shalat sunnah 2 rakaat di Masjid Quba" },
      { time: "09:30", activity: "Kunjungan Jabal Uhud & Makam Syuhada Uhud" },
      { time: "11:00", activity: "Singgah di Kebun Kurma Madinah & Percetakan Mushaf" },
      { time: "12:00", activity: "Kembali ke hotel sebelum waktu shalat Dzuhur" },
    ],
  },
  {
    id: "nasi-box-nusantara",
    slug: "nasi-box-jamaah-nusantara",
    title: "Katering & Nasi Box Masakan Nusantara",
    subLabel: "SELERA INDONESIA",
    shortDesc: "Pilihan menu masakan Indonesia hangat diantar tepat waktu ke kamar hotel jamaah.",
    fullDesc:
      "Solusi bagi jamaah mandiri maupun rombongan keluarga yang rindu masakan kampung halaman di sela-sela ibadah. Dimasak oleh koki Indonesia berpengalaman dengan bahan baku halal bersertifikat di Madinah.",
    priceNote: "Mulai 25 SAR / Porsi",
    priceSar: 25,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Pilihan menu: Ayam Goreng Lengkuas, Rendang Daging, Soto Ayam",
      "Termasuk nasi putih pulen, sayur, sambal khas & kerupuk",
      "Kemasan bento food-grade bersih & higienis",
      "Free ongkir area Markaziyah (Min. 3 box)",
    ],
  },
  {
    id: "catering-rombongan",
    slug: "catering-rombongan-umrah-haji",
    title: "Catering Prasmanan Rombongan Travel",
    subLabel: "KHUSUS GRUP & TRAVEL",
    shortDesc: "Layanan penyediaan konsumsi skala besar untuk biro travel umrah, haji plus, dan ziarah.",
    fullDesc:
      "Menyediakan layanan makan prasmanan harian (Pagi, Siang, Malam) dengan standar higienitas perhotelan. Menu bervariasi setiap hari, didukung manajemen logistik tepat waktu di Madinah.",
    priceNote: "Tanya Harga / Kontak Admin",
    priceSar: null,
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Kapasitas melayani 30 s/d 500 pax per hari",
      "Rotasi menu harian nusantara agar jamaah tidak bosan",
      "Penyediaan warming tray & tenaga saji di ruang makan hotel",
      "Sertifikasi kebersihan otoritas kotamadya Madinah",
    ],
  },
  {
    id: "jastip-kebutuhan-harian",
    slug: "jastip-titip-kirim-kargo-indonesia",
    title: "Jastip Belanja & Ekspedisi Kargo ke Indonesia",
    subLabel: "BEBAS REPOT BAGASI",
    shortDesc: "Beli oleh-oleh dan kurma tanpa khawatir kelebihan muatan bagasi pesawat saat kepulangan.",
    fullDesc:
      "Kami membantu Anda membelikan barang belanjaan khas Madinah (Albaik, kurma curah, sajadah, bukhur, perabot ziarah) serta memfasilitasi pengiriman kargo berizin resmi dengan tarif bersahabat langsung sampai ke depan pintu rumah Anda di Indonesia.",
    priceNote: "Mulai 35 SAR / Kg",
    priceSar: 35,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Packing peti kayu & plastik wrap tebal standar maskapai",
      "Nomor resi tracking online hingga ke rumah",
      "Garansi penggantian bila barang rusak atau hilang",
      "Bisa titip belanja langsung dari pasar lokal Madinah",
    ],
  },
];
