export function formatSAR(amount: number | null): string {
  if (amount === null || amount === undefined) return "Tanya Harga";
  return `${amount.toFixed(2)} SAR`;
}

export function formatIDR(amount: number | null): string {
  if (amount === null || amount === undefined) return "";
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
