"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { SERVICES } from "@/data/services";
import ServiceCard from "@/components/ui/ServiceCard";
import { LUXURY_EASE } from "@/lib/motion";
import { ScrollReveal } from "@/components/motion/reveal";

// Alternating directional reveals for service cards
const serviceCardVariants: Variants[] = [
  {
    hidden: { opacity: 0, y: 18, x: -14 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.68, ease: LUXURY_EASE },
    },
  },
  {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.68, ease: LUXURY_EASE },
    },
  },
  {
    hidden: { opacity: 0, y: 18, x: 14 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.68, ease: LUXURY_EASE },
    },
  },
  {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.68, ease: LUXURY_EASE },
    },
  },
];

export default function ServicesGrid() {
  return (
    <section className="rz-sec bg-white border-y border-[rgba(17,82,53,0.08)] overflow-hidden" id="layanan">
      <div className="rz-container">
        <ScrollReveal direction="up" distance={18} duration={0.6}>
          <div className="rz-head">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="text-[#C6A263] text-xs">◆</span>
                <span className="rz-eyebrow !mb-0">PILGRIM SERVICES</span>
              </div>
              <h2 className="rz-h">Layanan untuk Perjalanan yang Lebih Nyaman</h2>
            </div>
            <Link href="/katalog?kategori=layanan" className="rz-link hidden sm:inline-block">
              Lihat Semua Layanan
            </Link>
          </div>
        </ScrollReveal>

        <motion.div
          className="rz-rail"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08, margin: "0px 0px -40px 0px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.04,
              },
            },
          }}
        >
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              variants={serviceCardVariants[idx % serviceCardVariants.length]}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 text-center sm:hidden">
          <Link href="/katalog?kategori=layanan" className="rz-link">
            Lihat Semua Layanan
          </Link>
        </div>
      </div>
    </section>
  );
}
