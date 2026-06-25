import type { LucideIcon } from "lucide-react";
import { Disc3, Gem, ShoppingBag } from "lucide-react";
import { images } from "@/lib/site";

/** Categorii afișate în secțiunea „În atelier” — fiecare se extinde fluid. */
export type AtelierCategoryId = "recondicionare" | "vulcanizare" | "shop";

export type AtelierCategory = {
  id: AtelierCategoryId;
  icon: LucideIcon;
  image: string;
  /** Cheile sub-serviciilor (i18n: atelier.categories.<id>.services.<key>) */
  services: string[];
  /** Marchează blocul ca magazin (afișează buton extern). */
  shop?: boolean;
};

export const atelierCategories: AtelierCategory[] = [
  {
    id: "recondicionare",
    icon: Gem,
    image: images.repair,
    services: ["vopsire", "restaurare", "diamond_cut", "etriere"],
  },
  {
    id: "vulcanizare",
    icon: Disc3,
    image: images.tireBay,
    services: ["sudare", "indreptare", "reparatii", "montaj", "balansare"],
  },
  {
    id: "shop",
    icon: ShoppingBag,
    image: images.wheelClose,
    services: ["anvelope", "jante", "accesorii"],
    shop: true,
  },
];
