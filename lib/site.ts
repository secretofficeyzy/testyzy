/** Site-wide constants — YZY WHEELS */

export const siteName = "YZY WHEELS";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://yzywheels.md";

export const business = {
  name: siteName,
  /** Înlocuiește cu emailul real al atelierului când îl ai. */
  email: "contact@yzywheels.md",
  /** Afișate în footer și pagina Contact; pentru tel: folosim doar cifre. */
  phones: ["060 666 517", "079 449 558"] as const,
  address: "Strada Miorița 11/A, Chișinău",
  hours: "Lun–Vin: 09:00–18:00 · Sâm: 10:00–14:00",
  /** Hartă centrată pe adresă; înlocuiește cu „Încorporare hartă” din Google Maps dacă vrei pin exact. */
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Strada+Miori%C8%9Ba+11%2FA+Chi%C8%99in%C4%83u&output=embed",
} as const;

/** tel: fără spații — suportă numere locale MD */
export function phoneHref(phone: string) {
  const digits = phone.replace(/\s/g, "");
  return digits.startsWith("0") ? `tel:+373${digits.slice(1)}` : `tel:${digits}`;
}

export const socialLinks = [
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://facebook.com", label: "Facebook" },
] as const;

/**
 * Imagini site: înlocuiește URL-urile Unsplash cu fișiere tale.
 * - Pune fișierele în `public/` (ex: `public/photos/hero.jpg`).
 * - Apoi schimbă valorile de mai jos în `/photos/hero.jpg` etc.
 * Altele: logo `public/logo.svg`, imagine social preview `public/og.svg`,
 * comparație înainte/după în `components/sections/BeforeAfterSection.tsx` (constante BEFORE/AFTER).
 */
export const images = {
  hero: "https://images.unsplash.com/photo-1716919702381-6113650602c2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  workshop: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&q=80",
  wheelClose: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  repair: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
  tireBay: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=900&q=80",
  caliper: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900&q=80",
  mount: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=900&q=80",
} as const;

export type ServiceId =
  | "vopsire_jante"
  | "restaurare_jante"
  | "vopsire_etriere"
  | "consultanta_montaj"
  | "vulcanizare_indreptare";
