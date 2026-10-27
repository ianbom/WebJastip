"use client";

import { useState, useMemo, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { CATEGORIES } from "@/data/categories";
import { SERVICES } from "@/data/services";
import ProductCard from "@/components/ui/ProductCard";
import ServiceCard from "@/components/ui/ServiceCard";

function CatalogContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedCategory = searchParams.get("kategori") || "all";
  const [searchQuery, setSearchQuery] = useState<string>("");

  function setSelectedCategory(category: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (category === "all") params.delete("kategori");
    else params.set("kategori", category);
    router.replace(`/katalog${params.size ? `?${params}` : ""}`, { scroll: false });
  }

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" ||
        selectedCategory === "layanan"
          ? selectedCategory !== "layanan"
          : product.categoryId === selectedCategory;

      const matchesSearch =
        searchQuery.trim() === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const showServices =
    selectedCategory === "all" || selectedCategory === "layanan";

  const filteredServices = useMemo(() => {
    if (!showServices) return [];
    return SERVICES.filter((service) => {
      if (searchQuery.trim() === "") return true;
      return (
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  }, [showServices, searchQuery]);

  return (
    <div className="rz-container py-12 md:py-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="rz-eyebrow">KATALOG LENGKAP</span>
        <h1 className="rz-h text-3xl md:text-5xl">Koleksi & Layanan Madinah</h1>
        <p className="rz-p mx-auto mt-3 text-sm md:text-base">
          Temukan pilihan kuliner favorit, oleh-oleh istimewa, kurma asli Madinah, hingga layanan ziarah dan katering untuk menemani ibadah Anda.
        </p>
      </div>

      {/* Search & Category Filter Bar */}
      <div className="space-y-6 mb-12">
        {/* Search Input */}
        <div className="max-w-md mx-auto relative">
          <input
            type="text"
            aria-label="Cari produk dan layanan"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari produk (Albaik, Kurma, Sajadah, Tour...)"
            className="w-full pl-11 pr-10 py-3 bg-white border border-[rgba(17,82,53,0.18)] focus:border-[#115235] focus:outline-none text-sm placeholder-[rgba(28,26,23,0.4)]"
          />
          <Search className="w-4 h-4 text-[rgba(28,26,23,0.5)] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          {searchQuery && (
            <button
              type="button"
              aria-label="Hapus pencarian"
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[rgba(28,26,23,0.4)] hover:text-[#115235]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-start xl:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            aria-pressed={selectedCategory === "all"}
            className={`min-h-11 px-4 py-2 text-[0.7rem] uppercase tracking-[0.16em] font-medium transition-colors border whitespace-nowrap ${
              selectedCategory === "all"
                ? "bg-[#115235] text-white border-[#115235]"
                : "bg-white text-[rgba(28,26,23,0.7)] border-[rgba(17,82,53,0.15)] hover:border-[#115235]"
            }`}
          >
            Semua
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.slug)}
              aria-pressed={selectedCategory === cat.slug}
              className={`min-h-11 px-4 py-2 text-[0.7rem] uppercase tracking-[0.16em] font-medium transition-colors border whitespace-nowrap ${
                selectedCategory === cat.slug
                  ? "bg-[#115235] text-white border-[#115235]"
                  : "bg-white text-[rgba(28,26,23,0.7)] border-[rgba(17,82,53,0.15)] hover:border-[#115235]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-[rgba(17,82,53,0.08)] text-[0.75rem] text-[rgba(28,26,23,0.6)]">
        <span>
          Menampilkan {filteredProducts.length + filteredServices.length} pilihan
        </span>
        {selectedCategory !== "all" && (
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="text-[#115235] hover:underline"
          >
            Reset filter
          </button>
        )}
      </div>

      {/* Grid of Products */}
      {filteredProducts.length > 0 && (
        <div className="mb-14">
          {selectedCategory === "all" && (
            <h2 className="font-serif text-2xl text-[#115235] mb-6">
              Produk Pilihan
            </h2>
          )}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}

      {/* Grid of Services (if applicable) */}
      {filteredServices.length > 0 && (
        <div className="mb-14">
          <h2 className="font-serif text-2xl text-[#115235] mb-6">
            Layanan Jamaah & City Tour
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {filteredProducts.length === 0 && filteredServices.length === 0 && (
        <div className="text-center py-20 bg-white border border-[rgba(17,82,53,0.1)] p-8">
          <SlidersHorizontal className="w-8 h-8 text-[#AC9878] mx-auto mb-3 stroke-[1.2]" />
          <h3 className="font-serif text-xl text-[#115235]">
            Tidak ada produk yang cocok
          </h3>
          <p className="text-sm text-[rgba(28,26,23,0.6)] mt-2 max-w-sm mx-auto">
            Coba gunakan kata kunci pencarian lain atau pilih kategori yang berbeda.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="rz-btn mt-6"
          >
            Lihat Semua Produk
          </button>
        </div>
      )}
    </div>
  );
}

export default function CatalogPage() {
  return (
    <Suspense
      fallback={
        <div className="text-center py-24 text-[0.85rem] text-[rgba(28,26,23,0.6)]">
          Memuat katalog Nuraya Madinah...
        </div>
      }
    >
      <CatalogContent />
    </Suspense>
  );
}
