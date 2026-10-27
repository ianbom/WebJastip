import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";

export default function HeroSection() {
  const waConsultLink = createWhatsAppLink({
    type: "general",
    message: "Assalamu'alaikum Admin Nuraya Madinah, saya ingin berkonsultasi mengenai kebutuhan makanan & layanan selama berada di Madinah.",
  });

  return (
    <section className="rz-hero" aria-labelledby="hero-title">
      <Image
        src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=2400&q=85"
        alt="Pelataran Masjid Nabawi di Madinah"
        fill
        preload
        sizes="100vw"
        className="rz-hero__image"
      />
      <div className="rz-container">
        <div className="rz-hero__c">
          <p className="rz-eyebrow">Nuraya Madinah · Sahabat perjalanan ibadah</p>
          <h1 id="hero-title" className="rz-h">Lebih tenang beribadah.<br /><em>Kebutuhan Anda,</em><br />kami bantu di Madinah.</h1>
          <p className="rz-p">Dari kuliner Albaik, kurma dan oleh-oleh, hingga layanan ziarah. Pesan dengan mudah, kami antar ke lobi hotel Anda.</p>
          <div className="rz-hero__actions">
            <Link href="/katalog" className="rz-btn">Jelajahi Katalog <ArrowUpRight size={16} aria-hidden="true" /></Link>
            <a href={waConsultLink} target="_blank" rel="noopener noreferrer" className="rz-btn rz-btn--ghost">
              <MessageCircle size={16} aria-hidden="true" /> Konsultasi WhatsApp
            </a>
          </div>
          <p className="rz-hero__note">Makanan & jastip <span aria-hidden="true">/</span> Oleh-oleh Madinah <span aria-hidden="true">/</span> Layanan jamaah</p>
        </div>
      </div>
    </section>
  );
}
