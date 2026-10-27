import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Product } from "@/data/products";
import { formatSAR, formatIDR } from "@/lib/utils";
import { SITE_CONFIG } from "@/config/site";
import { createWhatsAppLink } from "@/lib/whatsapp";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const priceIdr =
    product.priceSar != null
      ? product.priceSar * SITE_CONFIG.currency.sarToIdr
      : null;

  const quickWaOrderUrl = createWhatsAppLink({
    type: "product",
    productName: product.name,
    quantity: 1,
    priceSar: product.priceSar,
  });

  return (
    <div className="rz-card group bg-white border border-[rgba(17,82,53,0.08)] p-3 md:p-3.5 transition-shadow hover:shadow-md">
      {/* Media 4:5 */}
      <Link href={`/produk/${product.slug}`} className="rz-card__m block relative">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 750px) 85vw, (max-width: 990px) 46vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Badges */}
        {product.isFavorite && (
          <span className="absolute top-2 left-2 bg-[#115235] text-white text-[0.58rem] tracking-[0.2em] uppercase px-2 py-0.5 font-medium z-10">
            Favorit
          </span>
        )}
      </Link>

      {/* Info */}
      <div className="flex flex-col flex-1 pt-1">
        <span className="rz-card__l text-[0.62rem] text-[#AC9878]">
          {product.subLabel || product.categoryName}
        </span>

        <Link href={`/produk/${product.slug}`}>
          <h3 className="rz-card__t text-[1.18rem] md:text-[1.3rem] group-hover:text-[#0C3D28] transition-colors line-clamp-1 mt-1 font-serif">
            {product.name}
          </h3>
        </Link>

        {/* Pricing */}
        <div className="rz-card__p mt-auto pt-2 border-t border-[rgba(17,82,53,0.06)]">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="font-serif text-lg font-medium text-[#115235]">
                {formatSAR(product.priceSar)}
              </span>
              {product.originalPriceSar && (
                <s className="text-[0.78rem] text-[rgba(28,26,23,0.4)] ml-1.5">
                  {formatSAR(product.originalPriceSar)}
                </s>
              )}
            </div>

            {/* Quick WA Icon Action */}
            <a
              href={quickWaOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Pesan ${product.name} via WhatsApp`}
              title="Pesan Langsung via WhatsApp"
              className="min-w-11 min-h-11 inline-flex items-center justify-center text-[#115235] hover:bg-[#115235] hover:text-white transition-colors border border-[rgba(17,82,53,0.15)]"
            >
              <MessageCircle className="w-3.5 h-3.5" />
            </a>
          </div>

          {priceIdr && (
            <span className="block text-[0.7rem] text-[rgba(28,26,23,0.55)] mt-0.5">
              ~{formatIDR(priceIdr)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
