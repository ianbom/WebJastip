import Link from "next/link";
import { SERVICES } from "@/data/services";
import ServiceCard from "@/components/ui/ServiceCard";

export default function ServicesGrid() {
  return (
    <section className="rz-sec bg-white border-y border-[rgba(17,82,53,0.08)]" id="layanan">
      <div className="rz-container">
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

        <div className="rz-rail">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link href="/katalog?kategori=layanan" className="rz-link">
            Lihat Semua Layanan
          </Link>
        </div>
      </div>
    </section>
  );
}
