import Link from "next/link";
import { ArrowUpRight, MapPin, MessageCircle } from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { SITE_CONFIG } from "@/config/site";

export default function Footer() {
  const waLink = createWhatsAppLink({ type: "general" });
  const waPartnershipLink = createWhatsAppLink({ type: "partnership" });

  return (
    <footer className="rz-foot">
      <div className="rz-container">
        <div className="rz-foot__g">
          <div className="site-footer__brand">
            <Link className="site-brand" href="/" aria-label="Nuraya Madinah — Beranda"><span>NURAYA</span><small>MADINAH</small></Link>
            <p className="site-footer__tagline">Sahabat Anda di Madinah.</p>
            <p>Makanan, oleh-oleh, dan layanan jamaah. Menemani kebutuhan perjalanan ibadah Anda dengan lebih mudah.</p>
            <p className="site-footer__address"><MapPin size={16} aria-hidden="true" />{SITE_CONFIG.address}</p>
          </div>

          <nav aria-label="Katalog di footer">
            <h2>Jelajahi Produk</h2>
            <ul>
              <li><Link href="/katalog">Semua Produk</Link></li>
              <li><Link href="/katalog?kategori=makanan">Makanan & Albaik</Link></li>
              <li><Link href="/katalog?kategori=oleh-oleh">Oleh-oleh & Sajadah</Link></li>
              <li><Link href="/katalog?kategori=kurma">Kurma & Cokelat</Link></li>
              <li><Link href="/katalog?kategori=parfum">Parfum & Bukhur</Link></li>
            </ul>
          </nav>

          <nav aria-label="Layanan di footer">
            <h2>Layanan Jamaah</h2>
            <ul>
              <li><Link href="/layanan/city-tour-ziarah-madinah">City Tour & Ziarah</Link></li>
              <li><Link href="/layanan/nasi-box-jamaah-nusantara">Katering & Nasi Box</Link></li>
              <li><Link href="/layanan/catering-rombongan-umrah-haji">Konsumsi Rombongan</Link></li>
              <li><Link href="/layanan/jastip-titip-kirim-kargo-indonesia">Jastip & Kargo Indonesia</Link></li>
              <li><Link href="/#kemitraan">Kemitraan Travel</Link></li>
            </ul>
          </nav>

          <div className="site-footer__contact">
            <h2>Mari Terhubung</h2>
            <p>Tanyakan produk, jadwal layanan, atau kebutuhan rombongan Anda. Admin melayani dalam bahasa Indonesia.</p>
            <a className="site-footer__phone" href={waLink} target="_blank" rel="noopener noreferrer">{SITE_CONFIG.whatsappDisplay}<ArrowUpRight size={17} aria-hidden="true" /></a>
            <a className="rz-btn" href={waLink} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} aria-hidden="true" /> Pesan via WhatsApp</a>
            <a className="site-footer__partnership" href={waPartnershipLink} target="_blank" rel="noopener noreferrer">Info kerja sama travel<ArrowUpRight size={14} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="site-footer__bottom">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. Seluruh hak cipta dilindungi.</p>
          <Link href="/#tentang-kami">Tentang Nuraya<ArrowUpRight size={13} aria-hidden="true" /></Link>
        </div>
      </div>
    </footer>
  );
}
