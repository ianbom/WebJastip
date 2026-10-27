import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES } from "@/data/categories";

export default function CollectionsGrid() {
  const displayCategories = CATEGORIES.slice(0, 4);

  return (
    <section className="rz-sec" id="koleksi">
      <div className="rz-container">
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

        <div className="rz-rail">
          {displayCategories.map((cat) => (
            <Link
              key={cat.id}
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
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link href="/katalog" className="rz-link">
            Lihat Semua Kategori
          </Link>
        </div>
      </div>
    </section>
  );
}
