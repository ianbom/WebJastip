import { SITE_CONFIG } from "@/config/site";

export type OrderIntent =
  | {
      type: "product";
      productName: string;
      variant?: string;
      quantity: number;
      priceSar?: number | null;
    }
  | {
      type: "service";
      serviceName: string;
      notes?: string;
    }
  | {
      type: "partnership";
      partnerType?: string;
    }
  | {
      type: "general";
      message?: string;
    };

export function createWhatsAppLink(intent: OrderIntent): string {
  const rawPhone = SITE_CONFIG.whatsappNumber || "";
  const phone = rawPhone.replace(/[^0-9]/g, "");

  let message = "";

  switch (intent.type) {
    case "product": {
      const priceText =
        intent.priceSar != null
          ? `${intent.priceSar} SAR (~Rp ${(intent.priceSar * SITE_CONFIG.currency.sarToIdr).toLocaleString("id-ID")})`
          : "Tanya Harga";
      const totalText =
        intent.priceSar != null
          ? `${intent.priceSar * intent.quantity} SAR (~Rp ${(intent.priceSar * intent.quantity * SITE_CONFIG.currency.sarToIdr).toLocaleString("id-ID")})`
          : "-";

      message = `Assalamu'alaikum Nuraya Madinah, saya ingin memesan produk:

• *Nama Produk:* ${intent.productName}
${intent.variant ? `• *Varian:* ${intent.variant}\n` : ""}• *Jumlah:* ${intent.quantity}
• *Estimasi Harga Satuan:* ${priceText}
• *Total Estimasi:* ${totalText}

Mohon informasi ketersediaan stok dan jadwal pengantaran ke hotel di Madinah. Terima kasih.`;
      break;
    }

    case "service": {
      message = `Assalamu'alaikum Nuraya Madinah, saya ingin menanyakan layanan berikut:

• *Layanan:* ${intent.serviceName}
${intent.notes ? `• *Catatan / Rencana Tanggal:* ${intent.notes}\n` : ""}
Mohon informasi ketersediaan jadwal, rincian fasilitas, dan estimasi biaya. Terima kasih.`;
      break;
    }

    case "partnership": {
      message = `Assalamu'alaikum Tim Nuraya Madinah, saya tertarik menjalin kerja sama kemitraan:

• *Minat Kemitraan:* Muthawif / Tour Leader / Travel Umrah & Haji
${intent.partnerType ? `• *Kategori:* ${intent.partnerType}\n` : ""}
Mohon informasi peluang sinergi dan skema kerja sama untuk jamaah di Madinah. Terima kasih.`;
      break;
    }

    case "general":
    default: {
      message =
        intent.message ||
        `Assalamu'alaikum Admin Nuraya Madinah, saya ingin berkonsultasi mengenai kebutuhan jamaah & layanan jastip selama di Madinah. Terima kasih.`;
      break;
    }
  }

  if (!phone) {
    return "#whatsapp-config-required";
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
