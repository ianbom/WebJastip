"use client";

import { useState, use } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MessageCircle, ShieldCheck, Truck, Check, ArrowLeft, Minus, Plus } from "lucide-react";
import { motion } from "motion/react";
import { PRODUCTS } from "@/data/products";
import { formatSAR, formatIDR } from "@/lib/utils";
import { SITE_CONFIG } from "@/config/site";
import { createWhatsAppLink } from "@/lib/whatsapp";
import ProductCard from "@/components/ui/ProductCard";
import { LUXURY_EASE } from "@/lib/motion";
import { ScrollReveal } from "@/components/motion/reveal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [selectedVariant, setSelectedVariant] = useState<string>(
    product.variants && product.variants.length > 0
      ? product.variants[0].name
      : ""
  );
  const [quantity, setQuantity] = useState<number>(1);

  // Determine active price based on variant or base price
  const activeVariantObj = product.variants?.find((v) => v.name === selectedVariant);
  const currentPriceSar =
    activeVariantObj && activeVariantObj.priceSar != null
      ? activeVariantObj.priceSar
      : product.priceSar;

  const priceIdr =
    currentPriceSar != null
      ? currentPriceSar * SITE_CONFIG.currency.sarToIdr
      : null;

  const totalSar =
    currentPriceSar != null ? currentPriceSar * quantity : null;

  const totalIdr =
    priceIdr != null ? priceIdr * quantity : null;

  // WhatsApp link
  const waOrderUrl = createWhatsAppLink({
    type: "product",
    productName: product.name,
    variant: selectedVariant || undefined,
    quantity: quantity,
    priceSar: currentPriceSar,
  });

  // Related products
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && p.categoryId === product.categoryId
  ).slice(0, 4);

  const infoItemVariant = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: LUXURY_EASE },
    },
  };

  return (
    <div className="rz-container py-8 md:py-16">
      {/* Breadcrumb */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: LUXURY_EASE }}
      >
        <Link
          href="/katalog"
          className="inline-flex items-center gap-2 text-[0.72rem] tracking-[0.18em] uppercase text-[rgba(28,26,23,0.6)] hover:text-[#115235] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Kembali ke Katalog</span>
        </Link>
      </motion.div>

      {/* Main Detail Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Left: Gallery (6 cols) */}
        <motion.div
          className="lg:col-span-6 space-y-4"
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: LUXURY_EASE }}
        >
          <div className="relative aspect-[4/5] bg-[#EFE9DE] overflow-hidden border border-[rgba(17,82,53,0.08)]">
            <Image
              src={product.images[selectedImage] || product.images[0]}
              alt={product.name}
              fill
              priority
              className="object-cover transition-opacity duration-300"
            />
          </div>

          {product.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-1">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImage(idx)}
                  className={`relative w-20 aspect-[4/5] border transition-all ${
                    selectedImage === idx
                      ? "border-[#115235] opacity-100 ring-1 ring-[#115235]"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Right: Info & Ordering (6 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.05,
                },
              },
            }}
          >
            <motion.div variants={infoItemVariant}>
              <span className="rz-eyebrow text-[#AC9878]">
                {product.categoryName} {product.subLabel ? `— ${product.subLabel}` : ""}
              </span>
              <h1 className="font-serif text-3xl md:text-4xl text-[#115235] font-medium leading-tight">
                {product.name}
              </h1>
            </motion.div>

            {/* Price Box */}
            <motion.div
              variants={infoItemVariant}
              className="p-4 bg-white border border-[rgba(17,82,53,0.1)]"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-3xl font-medium text-[#115235]">
                  {formatSAR(currentPriceSar)}
                </span>
                {product.originalPriceSar && (
                  <s className="text-sm text-[rgba(28,26,23,0.4)]">
                    {formatSAR(product.originalPriceSar)}
                  </s>
                )}
              </div>
              {priceIdr && (
                <span className="block text-xs text-[rgba(28,26,23,0.6)] mt-1">
                  Estimasi Rupiah: ~{formatIDR(priceIdr)} / item
                </span>
              )}
            </motion.div>

            {/* Short Description */}
            <motion.p
              variants={infoItemVariant}
              className="text-sm md:text-base text-[rgba(28,26,23,0.8)] leading-relaxed"
            >
              {product.fullDescription || product.description}
            </motion.p>

            {/* Highlights */}
            {product.highlights && product.highlights.length > 0 && (
              <motion.div variants={infoItemVariant} className="space-y-2 pt-2">
                <span className="text-[0.72rem] tracking-[0.16em] uppercase text-[#AC9878] font-medium block">
                  Keunggulan Produk:
                </span>
                <ul className="space-y-2">
                  {product.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-[rgba(28,26,23,0.75)]">
                      <Check className="w-4 h-4 text-[#115235] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Variants Selector */}
            {product.variants && product.variants.length > 0 && (
              <motion.div
                variants={infoItemVariant}
                className="space-y-3 pt-3 border-t border-[rgba(17,82,53,0.1)]"
              >
                <label className="text-[0.72rem] tracking-[0.16em] uppercase text-[rgba(28,26,23,0.7)] font-medium block">
                  Pilihan Varian:
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {product.variants.map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedVariant(v.name)}
                      className={`px-4 py-2 text-xs tracking-wider border transition-all ${
                        selectedVariant === v.name
                          ? "bg-[#115235] text-white border-[#115235]"
                          : "bg-white text-[rgba(28,26,23,0.8)] border-[rgba(17,82,53,0.15)] hover:border-[#115235]"
                      }`}
                    >
                      {v.name}
                      {v.priceSar != null && v.priceSar !== product.priceSar && (
                        <span className="ml-1 opacity-80">({formatSAR(v.priceSar)})</span>
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Quantity Selector & Summary */}
            <motion.div
              variants={infoItemVariant}
              className="space-y-3 pt-3 border-t border-[rgba(17,82,53,0.1)]"
            >
              <label className="text-[0.72rem] tracking-[0.16em] uppercase text-[rgba(28,26,23,0.7)] font-medium block">
                Jumlah Pesanan:
              </label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-[rgba(17,82,53,0.2)] bg-white">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-2 text-[rgba(28,26,23,0.7)] hover:text-[#115235] disabled:opacity-30"
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-5 py-2 text-sm font-medium min-w-[48px] text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-2 text-[rgba(28,26,23,0.7)] hover:text-[#115235]"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {totalSar != null && (
                  <div className="text-sm">
                    <span className="text-[rgba(28,26,23,0.6)]">Total Estimasi: </span>
                    <strong className="text-[#115235] font-serif text-lg">
                      {formatSAR(totalSar)}
                    </strong>
                    {totalIdr != null && (
                      <span className="text-xs text-[rgba(28,26,23,0.5)] block">
                        ~{formatIDR(totalIdr)}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </motion.div>

            {/* WhatsApp CTA Action */}
            <motion.div variants={infoItemVariant} className="pt-4 space-y-3">
              <a
                href={waOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rz-btn w-full gap-3 py-4 text-[0.78rem]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Pesan Sekarang via WhatsApp</span>
              </a>

              <div className="flex items-center justify-center gap-6 text-[0.72rem] text-[rgba(28,26,23,0.6)] pt-2">
                <span className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-[#115235]" />
                  Antar Langsung ke Hotel
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#115235]" />
                  Amanah & Terpercaya
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="mt-20 pt-12 border-t border-[rgba(17,82,53,0.1)]">
          <ScrollReveal direction="up" distance={16} duration={0.55}>
            <div className="rz-head">
              <div>
                <span className="rz-eyebrow">REKOMENDASI LAINNYA</span>
                <h2 className="rz-h text-2xl md:text-3xl">Pilihan Terkait</h2>
              </div>
              <Link href="/katalog" className="rz-link">
                Lihat Semua
              </Link>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08, margin: "0px 0px -30px 0px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.06,
                },
              },
            }}
          >
            {relatedProducts.map((p) => (
              <motion.div
                key={p.id}
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: LUXURY_EASE },
                  },
                }}
              >
                <ProductCard product={p} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
}
