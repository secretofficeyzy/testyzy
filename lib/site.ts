export const siteName = "YZY WHEELS";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.yzywheels.md";

export const business = {
  name: siteName,
  email: "office@yzywheels.md",
  phones: ["060 666 517", "079 449 558"] as const,
  address: "Strada Miorița 11A, Chișinău",
  hours: "Lun–Vin: 08:00–18:00 · Sâm: 08:00–14:00 · Dum: Închis",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1431.698469146203!2d28.81759560051747!3d46.991442449389325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6342fc60dc383041%3A0x62875026cb74389d!2sYzywheels!5e0!3m2!1sen!2sus!4v1778220545055!5m2!1sen!2sus%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22no-referrer-when-downgrade",
} as const;

export function phoneHref(phone: string) {
  const digits = phone.replace(/\s/g, "");
  return digits.startsWith("0") ? `tel:+373${digits.slice(1)}` : `tel:${digits}`;
}

export function phoneIntlDigits(phone: string) {
  const digits = phone.replace(/\s/g, "");
  return digits.startsWith("0") ? `373${digits.slice(1)}` : digits.replace(/^\+/, "");
}

export const messengerPhone = business.phones[0];

export const whatsAppHref = `https://wa.me/${phoneIntlDigits(messengerPhone)}`;

export const socialLinks = [
  { href: "https://www.instagram.com/yzywheels/", label: "Instagram" },
  { href: "https://www.tiktok.com/@yzywheels", label: "TikTok" },
] as const;

/**
 * Crește când înlocuiești poze locale (hero, despre, servicii, galerie) —
 * altfel Next.js poate afișa versiunea veche din cache.
 */
export const sitePhotoVersion = 2;

function sitePhoto(path: string) {
  return `${path}?v=${sitePhotoVersion}`;
}

export const images = {
  hero: sitePhoto("/photos/heropoza.jpg"),
  workshop: sitePhoto("/photos/despre.jpg"),
  wheelClose: sitePhoto("/photos/accesorii.jpg"),
  repair: sitePhoto("/photos/recond.jpg"),
  tireBay: sitePhoto("/photos/vulcanizare-poza.jpg"),
} as const;

export const galleryImages = [
  sitePhoto("/photos/recond.jpg"),
  sitePhoto("/photos/galerie2.jpg"),
  sitePhoto("/photos/galerie3.jpg"),
  sitePhoto("/photos/galerie4.jpg"),
  sitePhoto("/photos/galerie5.jpg"),
  sitePhoto("/photos/galerie6.jpg"),
  sitePhoto("/photos/galerie7.jpg"),
  sitePhoto("/photos/galerie8.jpg"),
  sitePhoto("/photos/galerie9.jpg"),
  sitePhoto("/photos/galerie10.jpg"),
  sitePhoto("/photos/galerie11.jpg"),
  sitePhoto("/photos/galerie12.jpg"),
] as const;
