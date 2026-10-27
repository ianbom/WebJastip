"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import { LUXURY_EASE } from "@/lib/motion";
import { ScrollReveal } from "@/components/motion/reveal";

export default function FeaturedProducts() {
  const featured = PRODUCTS.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="rz-sec bg-white border-y border-[rgba(17,82,53,0.08)]">
      <div className="rz-container">
        <ScrollReveal direction="up" distance={18} duration={0.6}>
          <div className="rz-head">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="text-[#C6A263] text-xs">◆</span>
                <span className="rz-eyebrow !mb-0">CURATED FAVORITES</span>
              </div>
              <h2 className="rz-h">Favorit Jamaah di Madinah</h2>
            </div>
            <Link href="/katalog" className="rz-link hidden sm:inline-block">
              Lihat Semua Produk
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
                staggerChildren: 0.07,
                delayChildren: 0.04,
              },
            },
          }}
        >
          {featured.map((product) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 22 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: LUXURY_EASE,
                  },
                },
              }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 text-center sm:hidden">
          <Link href="/katalog" className="rz-link">
            Lihat Semua Produk
          </Link>
        </div>
      </div>
    </section>
  );
}
