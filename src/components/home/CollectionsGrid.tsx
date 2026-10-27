"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { CATEGORIES } from "@/data/categories";
import { LUXURY_EASE } from "@/lib/motion";
import { ScrollReveal } from "@/components/motion/reveal";

export default function CollectionsGrid() {
  const displayCategories = CATEGORIES.slice(0, 4);

  return (
    <section className="rz-sec" id="koleksi">
      <div className="rz-container">
        <ScrollReveal direction="up" distance={18} duration={0.6}>
          <div className="rz-head">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="text-[#C6A263] text-xs">◆</span>
                <span className="rz-eyebrow !mb-0">EXPLORE OUR COLLECTIONS</span>
              </div>
              <h2 className="rz-h">Pilihan untuk Setiap Kebutuhan</h2>
            </div>
            <Link href="/katalog" className="rz-link hidden sm:inline-block">
              Lihat Semua Kategori
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
          {displayCategories.map((cat) => (
            <motion.div
              key={cat.id}
              variants={{
                hidden: { opacity: 0, y: 18, scale: 0.985 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.65,
                    ease: LUXURY_EASE,
                  },
                },
              }}
            >
              <Link
                href={`/katalog?kategori=${cat.slug}`}
                className="rz-tile group border border-[rgba(17,82,53,0.1)] relative overflow-hidden"
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 750px) 85vw, (max-width: 990px) 46vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="rz-tile__t">
                  <span className="rz-tile__ar">{cat.arabicName}</span>
                  <div className="flex items-center justify-between">
                    <span className="rz-tile__n">{cat.name}</span>
                    <div className="w-8 h-8 rounded-none bg-white/10 backdrop-blur-xs flex items-center justify-center text-white opacity-80 group-hover:opacity-100 group-hover:bg-[#C6A263] group-hover:text-[#115235] transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <span className="rz-tile__m line-clamp-2">{cat.description}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 text-center sm:hidden">
          <Link href="/katalog" className="rz-link">
            Lihat Semua Kategori
          </Link>
        </div>
      </div>
    </section>
  );
}
