"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { LUXURY_EASE } from "@/lib/motion";

export default function HeroSection() {
  const waConsultLink = createWhatsAppLink({
    type: "general",
    message: "Assalamu'alaikum Admin Nuraya Madinah, saya ingin berkonsultasi mengenai kebutuhan makanan & layanan selama berada di Madinah.",
  });

  return (
    <section className="rz-hero" aria-labelledby="hero-title">
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0.85, scale: 1.025 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: LUXURY_EASE }}
      >
        <Image
          src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=2400&q=85"
          alt="Pelataran Masjid Nabawi di Madinah"
          fill
          priority
          sizes="100vw"
          className="rz-hero__image"
        />
      </motion.div>

      <div className="rz-container relative z-10">
        <div className="rz-hero__c">
          <motion.p
            className="rz-eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: LUXURY_EASE }}
          >
            Nuraya Madinah · Sahabat perjalanan ibadah
          </motion.p>

          <motion.h1
            id="hero-title"
            className="rz-h"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: LUXURY_EASE }}
          >
            Lebih tenang beribadah.<br /><em>Kebutuhan Anda,</em><br />kami bantu di Madinah.
          </motion.h1>

          <motion.p
            className="rz-p"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: LUXURY_EASE }}
          >
            Dari kuliner Albaik, kurma dan oleh-oleh, hingga layanan ziarah. Pesan dengan mudah, kami antar ke lobi hotel Anda.
          </motion.p>

          <motion.div
            className="rz-hero__actions"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.24, ease: LUXURY_EASE }}
          >
            <Link href="/katalog" className="rz-btn">
              Jelajahi Katalog <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            <a
              href={waConsultLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rz-btn rz-btn--ghost"
            >
              <MessageCircle size={16} aria-hidden="true" /> Konsultasi WhatsApp
            </a>
          </motion.div>

          <motion.p
            className="rz-hero__note"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.34, ease: LUXURY_EASE }}
          >
            Makanan & jastip <span aria-hidden="true">/</span> Oleh-oleh Madinah <span aria-hidden="true">/</span> Layanan jamaah
          </motion.p>
        </div>
      </div>
    </section>
  );
}
