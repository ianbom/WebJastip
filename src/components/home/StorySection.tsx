import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";

export default function StorySection() {
  const highlights = [
    "Pengantaran langsung ke lobi hotel di kawasan Markaziyah Madinah",
    "Jaminan kurma Ajwa asli kebun bersertifikat & kuliner halal higienis",
    "Komunikasi mudah via WhatsApp dengan tim berdedikasi di Madinah",
  ];

  return (
    <section className="rz-sec" id="tentang-kami">
      <div className="rz-container">
        <div className="rz-story">
          {/* Left Media (4:5 Aspect Ratio) */}
          <div className="rz-story__m border border-[rgba(17,82,53,0.1)] relative">
            <Image
              src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1200&q=80"
              alt="Suasana tenang dan damai di Kota Suci Madinah"
              fill
              sizes="(max-width: 990px) 100vw, 50vw"
              className="object-cover"
            />
            {/* Subtle floating quote banner */}
            <div className="absolute bottom-4 left-4 right-4 bg-[#0F3A26]/90 backdrop-blur-xs p-4 text-white text-[0.82rem] border-l-2 border-[#C6A263]">
              <span className="font-serif italic text-[0.95rem] block leading-snug">
                &ldquo;Sahabat setia jamaah di Madinah Al-Munawwarah.&rdquo;
              </span>
              <span className="text-[0.62rem] uppercase tracking-[0.2em] text-[#C6A263] block mt-1 font-medium">
                Komitmen Pelayanan Penuh Berkah
              </span>
            </div>
          </div>

          {/* Right Editorial Copy */}
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="text-[#C6A263] text-xs">◆</span>
              <span className="rz-eyebrow !mb-0">MADE FOR YOUR JOURNEY</span>
            </div>

            <h2 className="rz-h text-balance">
              Lebih Dekat dengan Kenyamanan di Tanah Suci.
            </h2>

            <div className="rz-p space-y-4">
              <p>
                Setiap perjalanan ibadah memiliki kebutuhan yang berbeda. Kami hadir untuk memastikan hari-hari Anda di Madinah Al-Munawwarah dipenuhi ketenangan, kemudahan, dan keberkahan.
              </p>
              <p>
                Dari antaran ayam Albaik hangat ke lobi hotel, kurma Ajwa asli kebun Madinah yang terjamin mutunya, hingga armada ziarah privat bersama muthawif berpengalaman — Nuraya Madinah siap melayani Anda layaknya sahabat terpercaya di Tanah Suci.
              </p>
            </div>

            {/* Feature Checklist */}
            <div className="mt-6 space-y-2.5 pt-4 border-t border-[rgba(17,82,53,0.1)]">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-[rgba(28,26,23,0.85)]">
                  <Check className="w-4 h-4 text-[#115235] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link href="/katalog?kategori=layanan" className="rz-btn">
                Kenali Layanan Kami
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
