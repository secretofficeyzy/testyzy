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
  address: "Strada Miorița 11A, Chișinău",
  hours: "Lun–Vin: 08:00–18:00 · Sâm: 08:00–14:00 · Dum: Închis",
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
 * Programare online (Cal.com).
 * Format: „utilizator/eveniment” (ex: „yzywheels/vulcanizare”).
 * Setează `NEXT_PUBLIC_CALCOM_LINK` în `.env.local` cu link-ul tău real.
 */
export const calcomLink =
  process.env.NEXT_PUBLIC_CALCOM_LINK ?? "yzywheels/vulcanizare";

/** Magazin online YZY Shop — setează `NEXT_PUBLIC_YZYSHOP_URL` când e gata. */
export const yzyShopUrl =
  process.env.NEXT_PUBLIC_YZYSHOP_URL ?? "https://yzyshop.md";


export const images = {
  hero: "/photos/heropoza.jpg",
  workshop: "/photos/despre.jpg",
  wheelClose: "/photos/accesorii.jpg",
  repair: "/photos/recond.jpg",
  tireBay: "/photos/vulc.jpg",
  caliper: "https://images.unsplash.com/photo-1710464081714-4ed52a70ca5f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  mount: "https://images.unsplash.com/photo-1645445522156-9ac06bc7a767?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
} as const;

/**
 * Galerie foto (pagina „Despre”). Pune fișierele în `public/photos/`
 * și actualizează lista — poți adăuga/șterge câte poze vrei.
 */
export const galleryImages = [
  "/photos/galerie1.jpg",
  "/photos/galerie2.jpg",
  "/photos/galerie3.jpg",
  "/photos/galerie4.jpg",
  "/photos/galerie5.jpg",
  "/photos/galerie6.jpg",
] as const;

export type ServiceId =
  | "vopsire_jante"
  | "restaurare_jante"
  | "vopsire_etriere"
  | "consultanta_montaj"
  | "vulcanizare_indreptare";
