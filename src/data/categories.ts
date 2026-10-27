export interface Category {
  id: string;
  slug: string;
  name: string;
  arabicName: string;
  description: string;
  image: string;
  featured: boolean;
}

export const CATEGORIES: Category[] = [
  {
    id: "makanan",
    slug: "makanan",
    name: "Makanan & Kuliner",
    arabicName: "المأكولات والمطاعم",
    description: "Albaik fresh, nasi box nusantara, kunafa keju, dan cemilan khas Tanah Suci.",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: "oleh-oleh",
    slug: "oleh-oleh",
    name: "Oleh-oleh Madinah",
    arabicName: "هدايا المدينة",
    description: "Sajadah motif Raudhah, tasbih kokka, siwak asli, dan cinderamata penuh berkah.",
    image: "https://images.unsplash.com/photo-1584286595398-a59f21d313f5?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: "kurma",
    slug: "kurma",
    name: "Kurma & Cokelat",
    arabicName: "التمور والحلويات",
    description: "Kurma Ajwa Aliya Madinah, Sukari Al-Qassim, dan cokelat kerikil khas Arab.",
    image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: "parfum",
    slug: "parfum",
    name: "Parfum & Bukhur",
    arabicName: "العطور والبخور",
    description: "Aroma kasturi Nabawi, bukhur oud gaharu, dan wewangian non-alkohol tahan lama.",
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: "ibadah",
    slug: "ibadah",
    name: "Perlengkapan Ibadah",
    arabicName: "مستلزمات العبادة",
    description: "Kain ihram lembut, sandal anti-selip, bantal leher ziarah, dan hygiene kit haji/umrah.",
    image: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=1200&q=80",
    featured: false,
  },
  {
    id: "layanan",
    slug: "layanan",
    name: "Layanan Jamaah",
    arabicName: "خدمات الحجاج والمعتمرين",
    description: "City tour ziarah, handling katering rombongan, jastip kargo ke Indonesia, dan pendorong kursi roda.",
    image: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1200&q=80",
    featured: false,
  },
];
