"use client";

import Link from "next/link";
import { MessageCircle, Clock } from "lucide-react";
import { motion } from "motion/react";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { LUXURY_EASE } from "@/lib/motion";

export default function BandCtaSection() {
  const waLink = createWhatsAppLink({ type: "general" });

  return (
    <section className="rz-sec rz-band">
      <motion.div
        className="rz-container max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12, margin: "0px 0px -40px 0px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.5, ease: LUXURY_EASE },
            },
          }}
          className="rz-orn"
        >
          ◆
        </motion.div>

        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 18 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: LUXURY_EASE },
            },
          }}
          className="rz-h text-white text-3xl sm:text-4xl md:text-5xl font-normal"
        >
          Madinah, Lebih Mudah Bersama Nuraya.
        </motion.h2>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 14 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.55, ease: LUXURY_EASE },
            },
          }}
          className="rz-p text-white/90 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mt-4"
        >
          Jelajahi produk pilihan dan layanan praktis yang siap menemani setiap momen ibadah Anda selama berada di Kota Suci Madinah.
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 14 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.45, ease: LUXURY_EASE },
            },
          }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
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
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { duration: 0.5, ease: LUXURY_EASE },
            },
          }}
          className="mt-8 flex items-center justify-center gap-2 text-xs text-white/70"
        >
          <Clock className="w-3.5 h-3.5 text-[#C6A263]" />
          <span>Admin Aktif Setiap Hari di Madinah (08.00 - 23.00 AST)</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
