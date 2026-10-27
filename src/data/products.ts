export interface ProductVariant {
  id: string;
  name: string;
  priceSar: number | null;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  categoryId: string;
  categoryName: string;
  subLabel: string;
  description: string;
  fullDescription: string;
  images: string[];
  priceSar: number | null;
  originalPriceSar?: number | null;
  featured: boolean;
  isFavorite: boolean;
  unit?: string;
  variants?: ProductVariant[];
  highlights?: string[];
}

export const PRODUCTS: Product[] = [
  // 1. Featured Section 1 (Favorit Jamaah di Madinah)
  {
    id: "albaik-ayam-combo",
    slug: "jastip-albaik-paket-ayam",
    name: "Jastip Albaik — Paket Ayam 4 Pcs",
    categoryId: "makanan",
    categoryName: "Makanan & Kuliner",
    subLabel: "JASTIP FAVORIT",
    description: "Ayam goreng legendaris Albaik khas Saudi, renyah dengan bumbu rahasia 18 rempah.",
    fullDescription:
      "Layanan jastip ayam Albaik original langsung diantarkan hangat ke lobi hotel Anda di sekitar Markaziyah Madinah. Dilengkapi roti bun lembut, kentang goreng keemasan, dan saus garlic legendaris yang gurih nikmat.",
    images: [
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=1200&q=80",
    ],
    priceSar: 26,
    originalPriceSar: 30,
    featured: true,
    isFavorite: true,
    variants: [
      { id: "reg", name: "Original (Tidak Pedas)", priceSar: 26 },
      { id: "spicy", name: "Spicy (Pedas Gurih)", priceSar: 26 },
      { id: "nugget", name: "Albaik Chicken Nuggets 10 Pcs", priceSar: 24 },
    ],
    highlights: ["Diantar fresh & hangat ke lobi hotel", "Termasuk garlic sauce & kentang", "Antrean ditangani tim kami"],
  },
  {
    id: "kunafa-keju-premium",
    slug: "kunafa-keju-madinah-premium",
    name: "Kunafa Keju Madinah Pistachio",
    categoryId: "makanan",
    categoryName: "Makanan & Kuliner",
    subLabel: "DESSERT AUTENTIK",
    description: "Dessert khas Timur Tengah dengan keju melimpah, siraman sirup gula wangi, dan taburan pistachio.",
    fullDescription:
      "Kunafa keju panggang segar khas Madinah. Tekstur luar garing keemasan dengan lumeran keju akkawi gurih di bagian dalam. Diberi taburan kacang pistachio tumbuk dan sirup gula beraroma air mawar yang lembut.",
    images: [
      "https://images.unsplash.com/photo-1579954115563-e72bf1381629?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1200&q=80",
    ],
    priceSar: 35,
    originalPriceSar: 42,
    featured: true,
    isFavorite: true,
    variants: [
      { id: "small", name: "Porsi Personal (Diameter 18cm)", priceSar: 35 },
      { id: "medium", name: "Porsi Rombongan (Diameter 26cm)", priceSar: 65 },
    ],
    highlights: ["Panggang hangat fresh", "Taburan pistachio melimpah", "Kemasan rapi aman bawa ke kamar"],
  },
  {
    id: "kurma-ajwa-madinah-vip",
    slug: "kurma-ajwa-madinah-vip",
    name: "Kurma Ajwa Aliya Madinah VIP (1 Kg)",
    categoryId: "kurma",
    categoryName: "Kurma & Cokelat",
    subLabel: "KUALITAS TERBAIK",
    description: "Kurma Ajwa asli kebun Aliya Madinah bergaransi, berserat lembut dan manis pas.",
    fullDescription:
      "Kurma Ajwa kualitas VIP dipetik langsung dari kebun dataran tinggi Aliya Madinah Al-Munawwarah. Tekstur daging tebal, kelembapan terjaga, bebas kutu, dan dikemas vakum higienis berstandar ekspor.",
    images: [
      "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587393855524-087f83d95bc9?auto=format&fit=crop&w=1200&q=80",
    ],
    priceSar: 70,
    originalPriceSar: 85,
    featured: true,
    isFavorite: true,
    variants: [
      { id: "1kg", name: "Kotak Eksklusif 1 Kg", priceSar: 70 },
      { id: "500g", name: "Kotak Praktis 500 Gram", priceSar: 38 },
      { id: "5kg", name: "Karton Dus 5 Kg (Hemat)", priceSar: 320 },
    ],
    highlights: ["Asli kebun Aliya Madinah", "Kemasan kedap udara higienis", "Sangat cocok untuk buah tangan keluarga"],
  },
  {
    id: "sajadah-raudhah-lux",
    slug: "sajadah-motif-raudhah-lux",
    name: "Sajadah Motif Raudhah Tebal 8mm",
    categoryId: "oleh-oleh",
    categoryName: "Oleh-oleh Madinah",
    subLabel: "EKSKLUSIF NABAWI",
    description: "Sajadah tenun premium berbulu lembut dengan motif karpet Raudhah Masjid Nabawi yang syahdu.",
    fullDescription:
      "Membawa kenangan shalat di Raudhah Syarifah ke rumah Anda. Ditenun dari benang beludru lembut berkualitas tinggi dengan kerapatan jahitan maksimal dan ketebalan 8mm yang nyaman menopang lutut saat sujud.",
    images: [
      "https://images.unsplash.com/photo-1584286595398-a59f21d313f5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1200&q=80",
    ],
    priceSar: 80,
    originalPriceSar: 95,
    featured: true,
    isFavorite: true,
    variants: [
      { id: "hijau", name: "Hijau Raudhah (Ukuran 110x70cm)", priceSar: 80 },
      { id: "merah", name: "Merah Karpet Nabawi (110x70cm)", priceSar: 80 },
      { id: "busa", name: "Extra Foam Memory 15mm", priceSar: 135 },
    ],
    highlights: ["Benang beludru halus tidak rontok", "Alas anti-slip di lantai marmer", "Tas jinjing eksklusif gratis"],
  },

  // 2. Additional Catalog Products
  {
    id: "kurma-sukari-al-qassim",
    slug: "kurma-sukari-al-qassim-super",
    name: "Kurma Sukari Basah Al-Qassim (1 Kg)",
    categoryId: "kurma",
    categoryName: "Kurma & Cokelat",
    subLabel: "MANIS LUMER",
    description: "Kurma raja dengan daging kuning keemasan, lembut lumer di lidah rasa legit alami.",
    fullDescription:
      "Kurma Sukari Al-Qassim grade super, disimpan dingin untuk menjaga kesegaran daging buahnya yang lembut karamel. Pilihan favorit jamaah Indonesia untuk berbuka puasa sunnah dan hidangan sehat sehari-hari.",
    images: [
      "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=1200&q=80",
    ],
    priceSar: 35,
    originalPriceSar: 45,
    featured: false,
    isFavorite: false,
    variants: [
      { id: "1kg", name: "Kemasan 1 Kg", priceSar: 35 },
      { id: "3kg", name: "Ember Dingin 3 Kg", priceSar: 95 },
    ],
  },
  {
    id: "nasi-mandhi-kambing",
    slug: "nasi-mandhi-kambing-madinah",
    name: "Nasi Mandhi Laham (Daging Kambing)",
    categoryId: "makanan",
    categoryName: "Makanan & Kuliner",
    subLabel: "KULINER KHAS",
    description: "Nasi basmati berbumbu khas Hadramaut dengan potongan daging kambing oven empuk juicy.",
    fullDescription:
      "Sajian nasi mandhi autentik dengan beras basmati premium panjang beraroma rempah kapulaga, cengkeh, dan saffron. Disajikan bersama daging kambing muda oven empuk tanpa bau prengus, sambal tomat segar, dan acar timun.",
    images: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    ],
    priceSar: 55,
    originalPriceSar: 65,
    featured: false,
    isFavorite: false,
    variants: [
      { id: "1porsi", name: "Porsi 1 Orang (Laham)", priceSar: 55 },
      { id: "ayam", name: "Porsi 1 Orang (Ayam Panggang)", priceSar: 35 },
      { id: "nampan", name: "Nampan Keluarga (4-5 Orang)", priceSar: 190 },
    ],
  },
  {
    id: "parfum-kasturi-nabawi",
    slug: "parfum-kasturi-nabawi-non-alkohol",
    name: "Parfum Kasturi Nabawi 12ml Roll-On",
    categoryId: "parfum",
    categoryName: "Parfum & Bukhur",
    subLabel: "WEWANGIAN SUNNAH",
    description: "Minyak wangi murni non-alkohol dengan keharuman kasturi putih yang segar dan tahan 24 jam.",
    fullDescription:
      "Minyak wangi sunnah konsentrat tinggi tanpa campuran alkohol. Harum lembut, segar menenangkan, serta tidak meninggalkan noda pada pakaian shalat atau kain ihram.",
    images: [
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80",
    ],
    priceSar: 45,
    originalPriceSar: 55,
    featured: false,
    isFavorite: false,
    variants: [
      { id: "12ml", name: "Roll-On 12 ml", priceSar: 45 },
      { id: "50ml", name: "Botol Spray Eksklusif 50 ml", priceSar: 120 },
    ],
  },
  {
    id: "bukhur-oud-al-haramain",
    slug: "bukhur-oud-al-haramain-arang",
    name: "Bukhur Oud Al-Haramain & Mabkhara Set",
    categoryId: "parfum",
    categoryName: "Parfum & Bukhur",
    subLabel: "PENGHARUM RUANGAN",
    description: "Dupa kayu gaharu wangi semerbak Masjid Nabawi lengkap dengan tungku bakar elektrik praktis.",
    fullDescription:
      "Paket pengharum ruangan khas tanah Arab berisi serbuk kayu gaharu berbalut minyak esensial amber, mawar Taif, dan kasturi. Menghadirkan ketenangan nuansa Masjid Nabawi di rumah Anda.",
    images: [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=80",
    ],
    priceSar: 90,
    originalPriceSar: 110,
    featured: false,
    isFavorite: false,
  },
  {
    id: "tasbih-kokka-asli",
    slug: "tasbih-kayu-kokka-33-butir",
    name: "Tasbih Kayu Kokka Asli 33 Butir",
    categoryId: "oleh-oleh",
    categoryName: "Oleh-oleh Madinah",
    subLabel: "KAYU BERSEJARAH",
    description: "Tasbih biji kayu kokka/kuka asli bertekstur licin alami, makin lama dipakai makin mengkilap.",
    fullDescription:
      "Tasbih kokka original dengan butiran padat yang tenggelam di dalam air. Sangat nyaman di genggaman untuk menemani dzikir pagi petang dan iktikaf di Masjid Nabawi.",
    images: [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
    ],
    priceSar: 25,
    originalPriceSar: 35,
    featured: false,
    isFavorite: false,
    variants: [
      { id: "33", name: "33 Butir (Ukuran Saku)", priceSar: 25 },
      { id: "99", name: "99 Butir (Ukuran Standar)", priceSar: 45 },
    ],
  },
  {
    id: "cokelat-kerikil-batu",
    slug: "cokelat-batu-kerikil-arab-1kg",
    name: "Cokelat Batu Kerikil Arab (1 Kg)",
    categoryId: "kurma",
    categoryName: "Kurma & Cokelat",
    subLabel: "FAVORIT KELUARGA",
    description: "Cokelat susu manis lezat dengan tampilan unik menyerupai bebatuan warna-warni tanah suci.",
    fullDescription:
      "Oleh-oleh unik yang sangat disukai anak-anak dan keluarga. Tekstur renyah di luar dengan lelehan cokelat manis di dalam, dikemas rapi dalam toples kedap udara.",
    images: [
      "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=1200&q=80",
    ],
    priceSar: 30,
    originalPriceSar: 40,
    featured: false,
    isFavorite: false,
  },
  {
    id: "siwak-al-falah-isi-10",
    slug: "siwak-al-falah-asli-kotak-10",
    name: "Kayu Siwak Al-Falah Fresh (Isi 10 Pcs)",
    categoryId: "oleh-oleh",
    categoryName: "Oleh-oleh Madinah",
    subLabel: "SUNNAH RASUL",
    description: "Kayu arak alami untuk menjaga kebersihan gigi dan mulut sesuai tuntunan Rasulullah SAW.",
    fullDescription:
      "Kayu siwak pilihan berkualitas segar yang dikemas vakum higienis satu per satu. Serat lembut, kaya mineral alami yang menjaga kesehatan gusi dan kesegaran nafas.",
    images: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80",
    ],
    priceSar: 20,
    originalPriceSar: 25,
    featured: false,
    isFavorite: false,
  },
  {
    id: "bantal-leher-ziarah",
    slug: "bantal-leher-travel-memory-foam",
    name: "Bantal Leher Ergonomis Ziarah & Bus",
    categoryId: "ibadah",
    categoryName: "Perlengkapan Ibadah",
    subLabel: "KENYAMANAN PERJALANAN",
    description: "Bantal busa memory foam lembut untuk menopang leher saat perjalanan bus Madinah-Makkah.",
    fullDescription:
      "Mengurangi pegal di leher saat menempuh perjalanan darat 6-7 jam antar kota suci. Dilengkapi sarung kain katun sejuk yang bisa dicuci dan kancing pengait praktis.",
    images: [
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=80",
    ],
    priceSar: 30,
    originalPriceSar: 40,
    featured: false,
    isFavorite: false,
  },
  {
    id: "kain-ihram-katun-handuk",
    slug: "kain-ihram-katun-handuk-pria",
    name: "Kain Ihram Pria Katun Lembut 1400gr",
    categoryId: "ibadah",
    categoryName: "Perlengkapan Ibadah",
    subLabel: "BAHAN NYAMAN",
    description: "Kain ihram 2 lembar tenun katun tebal, menyerap keringat dan tidak menerawang.",
    fullDescription:
      "Dua lembar kain ihram berstandar haji & umrah dengan ketebalan pas 1400 gram. Lembut di kulit, nyaman saat sujud maupun thawaf keliling Ka'bah.",
    images: [
      "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=1200&q=80",
    ],
    priceSar: 65,
    originalPriceSar: 80,
    featured: false,
    isFavorite: false,
  },
  {
    id: "sandal-tawaf-anti-selip",
    slug: "sandal-haji-umrah-anti-selip",
    name: "Sandal Haji & Umrah Anti-Selip",
    categoryId: "ibadah",
    categoryName: "Perlengkapan Ibadah",
    subLabel: "RINGAN & AMAN",
    description: "Sandal jepit fleksibel berbahan empuk dengan grip karet anti-licin di marmer basah.",
    fullDescription:
      "Dirancang khusus untuk aktivitas harian jamaah di pelataran masjid suci. Tali tidak membuat kaki lecet, cepat kering bila terkena air wudhu, dan mudah disimpan dalam kantong sandal.",
    images: [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1200&q=80",
    ],
    priceSar: 25,
    originalPriceSar: 30,
    featured: false,
    isFavorite: false,
  },
  {
    id: "teh-karak-rempah",
    slug: "teh-karak-arab-rempah-kapulaga",
    name: "Teh Karak Madinah Instan (Isi 10 Sachet)",
    categoryId: "makanan",
    categoryName: "Makanan & Kuliner",
    subLabel: "MINUMAN HANGAT",
    description: "Teh susu khas Arab dengan aroma kapulaga, kayu manis, dan jahe yang menghangatkan tenggorokan.",
    fullDescription:
      "Minuman favorit selepas shalat Subuh di Masjid Nabawi. Cukup seduh dengan air panas untuk menikmati kehangatan rempah Timur Tengah yang melegakan tubuh saat cuaca dingin.",
    images: [
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80",
    ],
    priceSar: 20,
    originalPriceSar: 25,
    featured: false,
    isFavorite: false,
  },
  {
    id: "paket-souvenir-mini",
    slug: "paket-oleh-oleh-madinah-hemat",
    name: "Paket Oleh-oleh Madinah Komplit (Per Pax)",
    categoryId: "oleh-oleh",
    categoryName: "Oleh-oleh Madinah",
    subLabel: "PAKET PRAKTIS",
    description: "Isi: Sajadah saku, kurma ajwa 50gr, tasbih kayu, siwak, dan air zamzam 60ml dalam tas organza.",
    fullDescription:
      "Solusi super praktis bagi jamaah yang ingin membagikan buah tangan ke tetangga dan kerabat tanpa repot membungkus sendiri di tanah air. Siap dibagikan langsung.",
    images: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80",
    ],
    priceSar: 28,
    originalPriceSar: 35,
    featured: false,
    isFavorite: false,
  },
];
