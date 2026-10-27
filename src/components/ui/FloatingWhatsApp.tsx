"use client";

import { MessageCircle } from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  const waUrl = createWhatsAppLink({ type: "general" });

  return (
    <aside
      aria-label="Kontak WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 group"
    >
      <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#115235] text-white text-[0.72rem] tracking-wider uppercase font-medium py-1.5 px-3 border border-[rgba(255,255,255,0.2)] shadow-lg pointer-events-none">
        Chat Admin Madinah
      </div>
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi Admin Nuraya Madinah via WhatsApp"
        className="w-13 h-13 bg-[#115235] hover:bg-[#0C3D28] text-white flex items-center justify-center border border-[rgba(255,255,255,0.25)] shadow-xl transition-all duration-300 hover:scale-105"
      >
        <MessageCircle className="w-6 h-6 stroke-[1.8]" />
      </a>
    </aside>
  );
}
