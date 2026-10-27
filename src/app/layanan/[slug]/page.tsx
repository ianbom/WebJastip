"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MessageCircle, Check, ArrowLeft, Clock, ShieldCheck, MapPin } from "lucide-react";
import { SERVICES } from "@/data/services";
import { createWhatsAppLink } from "@/lib/whatsapp";
import ServiceCard from "@/components/ui/ServiceCard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ServiceDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const waInquiryUrl = createWhatsAppLink({
    type: "service",
    serviceName: service.title,
    notes: `Mohon info jadwal & ketersediaan untuk layanan ${service.title}`,
  });

  const otherServices = SERVICES.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div className="rz-container py-8 md:py-16">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link
          href="/katalog?kategori=layanan"
          className="inline-flex items-center gap-2 text-[0.72rem] tracking-[0.18em] uppercase text-[rgba(28,26,23,0.6)] hover:text-[#115235] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Kembali ke Semua Layanan</span>
        </Link>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Left Media (6 cols) */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative aspect-[4/5] bg-[#EFE9DE] overflow-hidden border border-[rgba(17,82,53,0.08)]">
            <Image
              src={service.image}
              alt={service.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Info (6 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <span className="rz-eyebrow text-[#AC9878]">
                LAYANAN JAMAAH MADINAH — {service.subLabel}
              </span>
              <h1 className="font-serif text-3xl md:text-4xl text-[#115235] font-medium leading-tight">
                {service.title}
              </h1>
            </div>

            {/* Pricing Callout */}
            <div className="p-4 bg-white border border-[rgba(17,82,53,0.1)]">
              <span className="text-[0.7rem] uppercase tracking-[0.18em] text-[rgba(28,26,23,0.55)] block">
                Estimasi Biaya Layanan:
              </span>
              <span className="font-serif text-2xl font-medium text-[#115235] mt-1 block">
                {service.priceNote}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base text-[rgba(28,26,23,0.8)] leading-relaxed">
              {service.fullDesc || service.shortDesc}
            </p>

            {/* Features List */}
            <div className="space-y-3 pt-2">
              <span className="text-[0.72rem] tracking-[0.16em] uppercase text-[#AC9878] font-medium block">
                Fasilitas & Keunggulan Layanan:
              </span>
              <ul className="space-y-2.5">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-[rgba(28,26,23,0.8)]">
                    <Check className="w-4 h-4 text-[#115235] shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Itinerary if present */}
            {service.itinerary && (
              <div className="space-y-3 pt-3 border-t border-[rgba(17,82,53,0.1)]">
                <span className="text-[0.72rem] tracking-[0.16em] uppercase text-[#AC9878] font-medium block">
                  Rencana Itinerary Perjalanan:
                </span>
                <div className="space-y-2">
                  {service.itinerary.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-xs md:text-sm p-2.5 bg-white border border-[rgba(17,82,53,0.06)]"
                    >
                      <Clock className="w-4 h-4 text-[#C6A263] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#115235] mr-2">{item.time}</strong>
                        <span className="text-[rgba(28,26,23,0.8)]">{item.activity}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* WhatsApp Booking CTA */}
            <div className="pt-4 space-y-3">
              <a
                href={waInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rz-btn w-full gap-3 py-4 text-[0.78rem]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Konsultasi & Reservasi via WhatsApp</span>
              </a>

              <div className="flex items-center justify-center gap-6 text-[0.72rem] text-[rgba(28,26,23,0.6)] pt-2">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#115235]" />
                  Jemput Lobi Hotel Markaziyah
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#115235]" />
                  Amanah & Bergaransi
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Services */}
      {otherServices.length > 0 && (
        <div className="mt-20 pt-12 border-t border-[rgba(17,82,53,0.1)]">
          <div className="rz-head">
            <div>
              <span className="rz-eyebrow">LAYANAN LAINNYA</span>
              <h2 className="rz-h text-2xl md:text-3xl">Pilihan Layanan Pendamping</h2>
            </div>
            <Link href="/katalog?kategori=layanan" className="rz-link">
              Lihat Semua
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherServices.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
