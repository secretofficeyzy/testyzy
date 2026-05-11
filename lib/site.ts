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
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1431.698469146203!2d28.81759560051747!3d46.991442449389325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6342fc60dc383041%3A0x62875026cb74389d!2sYzywheels!5e0!3m2!1sen!2sus!4v1778220545055!5m2!1sen!2sus%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22no-referrer-when-downgrade",
} as const;

/** tel: fără spații — suportă numere locale MD */
export function phoneHref(phone: string) {
  const digits = phone.replace(/\s/g, "");
  return digits.startsWith("0") ? `tel:+373${digits.slice(1)}` : `tel:${digits}`;
}

export const socialLinks = [
  { href: "https://www.instagram.com/yzywheels/", label: "Instagram" },
  { href: "https://www.tiktok.com/@yzywheels", label: "TikTok" },
] as const;

/**
 * Imagini site: înlocuiește URL-urile Unsplash cu fișiere tale.
 * - Pune fișierele în `public/` (ex: `public/photos/hero.jpg`).
 * - Apoi schimbă valorile de mai jos în `/photos/hero.jpg` etc.
 * Altele: logo `public/logo.svg`, imagine social preview `public/og.svg`,
 * comparație înainte/după în `components/sections/BeforeAfterSection.tsx` (constante BEFORE/AFTER).
 */
export const images = {
  hero: "https://images.unsplash.com/photo-1748569747574-7f15827f6c0d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  workshop: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&q=80",
  wheelClose: "https://images.unsplash.com/photo-1708869327956-7416dfc27712?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  repair: "https://images.unsplash.com/photo-1672619438903-694a7dc3c8a6?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
