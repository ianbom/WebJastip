export const SITE_CONFIG = {
  name: "NURAYA MADINAH",
  tagline: "Your Trusted Madinah Companion",
  subTagline: "Layanan Kebutuhan, Makanan & Jastip Jamaah di Tanah Suci",
  description:
    "Solusi praktis dan amanah bagi jamaah Umrah & Haji Indonesia di Madinah. Layanan makanan siap santap, oleh-oleh khas Madinah, kurma premium, perlengkapan ibadah, hingga layanan city tour dan handling perjalanan.",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281234567890",
  whatsappDisplay: "+62 812-3456-7890",
  address: "Central Area (Markaziyah), Madinah Al-Munawwarah, Kingdom of Saudi Arabia",
  currency: {
    sarToIdr: 4400,
  },
  links: {
    instagram: "https://instagram.com",
    catalog: "/katalog",
    services: "/katalog?kategori=layanan",
    about: "/#tentang-kami",
    partnership: "/#kemitraan",
  },
};
