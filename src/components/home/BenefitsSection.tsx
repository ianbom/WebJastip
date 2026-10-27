"use client";

import { Clock, Layers, MessageSquare, Users } from "lucide-react";
import { motion } from "motion/react";
import { LUXURY_EASE } from "@/lib/motion";
import { ScrollReveal } from "@/components/motion/reveal";

export default function BenefitsSection() {
  const benefits = [
    {
      num: "01",
      icon: Clock,
      title: "Praktis & Tepat Waktu",
      description:
        "Makanan hangat dan pesanan oleh-oleh diantarkan langsung ke lobi hotel Anda di sekitar Masjid Nabawi.",
    },
    {
      num: "02",
      icon: Layers,
      title: "Pilihan Lengkap Terkurasi",
      description:
        "Dari kuliner legendaris Albaik, kurma Ajwa asli kebun Madinah, hingga armada ziarah privat siap sedia.",
    },
    {
      num: "03",
      icon: MessageSquare,
      title: "Pemesanan via WhatsApp",
      description:
        "Tanpa proses checkout rumit. Cukup klik dan konfirmasi pesanan langsung dengan admin kami dalam bahasa Indonesia.",
    },
    {
      num: "04",
      icon: Users,
      title: "Dukungan Jamaah & Rombongan",
      description:
        "Melayani kebutuhan jamaah mandiri, keluarga, maupun pengadaan skala besar untuk biro travel dan muthawif.",
    },
  ];

  return (
    <section className="rz-sec bg-[#F7F7F7]">
      <div className="rz-container">
        <ScrollReveal direction="up" distance={14} duration={0.5}>
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="text-[#C6A263] text-xs">◆</span>
              <span className="rz-eyebrow !mb-0">WHY CHOOSE NURAYA</span>
            </div>
            <h2 className="rz-h text-2xl md:text-3xl lg:text-4xl">
              Dedikasi Terbaik untuk Kenyamanan Ibadah Anda
            </h2>
          </div>
        </ScrollReveal>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "0px 0px -30px 0px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.07,
                delayChildren: 0.04,
              },
            },
          }}
        >
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: LUXURY_EASE,
                    },
                  },
                }}
                className="bg-white border border-[rgba(17,82,53,0.08)] p-6 flex flex-col justify-between group hover:border-[#C6A263] transition-colors relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-[#F7F7F7] flex items-center justify-center text-[#115235] group-hover:bg-[#115235] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5 stroke-[1.4]" />
                    </div>
                    <span className="font-serif text-2xl text-[#C6A263] font-normal">
                      {b.num}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-[#115235] font-medium mb-2">
                    {b.title}
                  </h3>

                  <p className="text-xs md:text-sm text-[rgba(28,26,23,0.7)] leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
