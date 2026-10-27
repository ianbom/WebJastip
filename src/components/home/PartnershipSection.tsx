"use client";

import { Handshake, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { LUXURY_EASE } from "@/lib/motion";
import { ScrollReveal } from "@/components/motion/reveal";

export default function PartnershipSection() {
  const waPartnerLink = createWhatsAppLink({
    type: "partnership",
    partnerType: "Biro Travel Umrah / Muthawif / Tour Leader",
  });

  const partnerTracks = [
    {
      title: "Biro Travel Umrah & Haji",
      subtitle: "Katering & Nasi Box Jamaah",
      desc: "Penyediaan konsumsi harian masakan nusantara, nasi box kedatangan/kepulangan hotel, dan bingkisan oleh-oleh kolektif.",
      points: ["Kapasitas 30 - 500 pax/hari", "Menu variatif tidak membosankan", "Invoice resmi & terms kemitraan"],
    },
    {
      title: "Muthawif & Tour Leader",
      subtitle: "Ziarah Privat & Jastip Belanja",
      desc: "Fasilitas armada GMC/HiAce ber-AC untuk rombongan privat, titip belanja kurma curah pasar, serta komisi kemitraan transparan.",
      points: ["Armada prima & sopir berizin", "Komisi menarik per rujukan", "Dukungan operasional 24 jam di Madinah"],
    },
    {
      title: "Rombongan Mandiri & Komunitas",
      subtitle: "Layanan Khusus Keluarga",
      desc: "Kemudahan jastip Albaik dalam jumlah banyak, sewa kursi roda ziarah, hingga ekspedisi pengiriman kargo langsung ke tanah air.",
      points: ["Bebas repot antre panjang", "Diantar utuh hangat ke kamar", "Handling ramah & komunikatif"],
    },
  ];

  return (
    <section className="rz-sec bg-[#EFE9DE]/60 border-y border-[rgba(17,82,53,0.08)]" id="kemitraan">
      <div className="rz-container">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
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
                transition: { duration: 0.45, ease: LUXURY_EASE },
              },
            }}
            className="inline-flex items-center justify-center p-3 text-[#115235] bg-white border border-[rgba(17,82,53,0.1)] mb-3"
          >
            <Handshake className="w-6 h-6 stroke-[1.5]" />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: LUXURY_EASE },
              },
            }}
            className="flex items-center justify-center gap-2 mb-2"
          >
            <span className="text-[#C6A263] text-xs">◆</span>
            <span className="rz-eyebrow !mb-0 text-[#AC9878]">PARTNERSHIP & COLLABORATION</span>
          </motion.div>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.65, ease: LUXURY_EASE },
              },
            }}
            className="rz-h text-[#115235] text-3xl md:text-4xl"
          >
            Tumbuh Bersama, Melayani Lebih Banyak Jamaah.
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
            className="rz-p mx-auto text-[rgba(28,26,23,0.8)] text-balance mt-3"
          >
            Kami membuka pintu kolaborasi strategis dengan biro travel umrah, pembimbing ibadah (muthawif), dan pimpinan rombongan jamaah Indonesia di Madinah.
          </motion.p>
        </motion.div>

        {/* 3 Partner Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "0px 0px -30px 0px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.05,
              },
            },
          }}
        >
          {partnerTracks.map((track, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 16, scale: 0.99 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    ease: LUXURY_EASE,
                  },
                },
              }}
              className="bg-white border border-[rgba(17,82,53,0.1)] p-6 flex flex-col justify-between"
            >
              <div>
                <span className="text-[0.65rem] tracking-[0.2em] uppercase text-[#AC9878] font-medium block">
                  {track.subtitle}
                </span>
                <h3 className="font-serif text-xl text-[#115235] font-medium mt-1 mb-3">
                  {track.title}
                </h3>
                <p className="text-xs text-[rgba(28,26,23,0.7)] leading-relaxed mb-4">
                  {track.desc}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-[rgba(17,82,53,0.08)]">
                {track.points.map((pt, j) => (
                  <div key={j} className="flex items-center gap-2 text-xs text-[rgba(28,26,23,0.8)]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A263] shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <ScrollReveal direction="up" distance={14} duration={0.45} delay={0.1}>
          <div className="text-center">
            <a
              href={waPartnerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rz-btn !px-8 text-[0.74rem] shadow-sm"
            >
              Diskusikan Peluang Kemitraan via WhatsApp
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
