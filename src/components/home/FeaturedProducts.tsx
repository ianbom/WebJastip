import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";

export default function FeaturedProducts() {
  const featured = PRODUCTS.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="rz-sec bg-white border-y border-[rgba(17,82,53,0.08)]">
      <div className="rz-container">
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

        <div className="rz-rail">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link href="/katalog" className="rz-link">
            Lihat Semua Produk
          </Link>
        </div>
      </div>
    </section>
  );
}
