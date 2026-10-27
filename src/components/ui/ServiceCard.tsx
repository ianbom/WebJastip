import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ServiceItem } from "@/data/services";

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={`/layanan/${service.slug}`}
      className="rz-card group bg-white border border-[rgba(17,82,53,0.08)] p-3 md:p-3.5 transition-shadow hover:shadow-md"
    >
      <div className="rz-card__m">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 750px) 85vw, (max-width: 990px) 46vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>

      <span className="rz-card__l text-[0.62rem] text-[#AC9878]">
        {service.subLabel}
      </span>

      <h3 className="rz-card__t text-[1.18rem] md:text-[1.3rem] group-hover:text-[#0C3D28] transition-colors line-clamp-1 mt-1 font-serif">
        {service.title}
      </h3>

      <p className="text-[0.8rem] text-[rgba(28,26,23,0.7)] line-clamp-2 my-1 leading-relaxed">
        {service.shortDesc}
      </p>

      <div className="mt-auto pt-2 border-t border-[rgba(17,82,53,0.06)] flex items-center justify-between text-xs">
        <span className="font-medium text-[#115235]">
          {service.priceNote}
        </span>
        <span className="inline-flex items-center gap-1 text-[0.68rem] tracking-wider uppercase text-[#115235] font-medium group-hover:text-[#0C3D28] transition-colors">
          <span>Detail</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
