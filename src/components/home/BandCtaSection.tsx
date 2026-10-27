import Link from "next/link";
import { MessageCircle, Clock } from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";

export default function BandCtaSection() {
  const waLink = createWhatsAppLink({ type: "general" });

  return (
    <section className="rz-sec rz-band">
      <div className="rz-container max-w-4xl mx-auto">
        <div className="rz-orn">◆</div>

        <h2 className="rz-h text-white text-3xl sm:text-4xl md:text-5xl font-normal">
          Madinah, Lebih Mudah Bersama Nuraya.
        </h2>

        <p className="rz-p text-white/90 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mt-4">
          Jelajahi produk pilihan dan layanan praktis yang siap menemani setiap momen ibadah Anda selama berada di Kota Suci Madinah.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link href="/katalog" className="rz-btn rz-btn--ghost w-full sm:w-auto">
            Lihat Semua Produk
          </Link>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rz-btn bg-white text-[#115235] hover:bg-[#F7F7F7] border-white gap-2 w-full sm:w-auto"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Hubungi via WhatsApp</span>
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-white/70">
          <Clock className="w-3.5 h-3.5 text-[#C6A263]" />
          <span>Admin Aktif Setiap Hari di Madinah (08.00 - 23.00 AST)</span>
        </div>
      </div>
    </section>
  );
}
