import type { LucideIcon } from "lucide-react";
import { Disc3, Gem, ShoppingBag } from "lucide-react";
import { images } from "@/lib/site";

export type AtelierCategoryId = "recondicionare" | "vulcanizare" | "shop";

export type AtelierCategory = {
  id: AtelierCategoryId;
  icon: LucideIcon;
  image: string;
  services: string[];
  shop?: boolean;
};

export const atelierCategories: AtelierCategory[] = [
  {
    id: "recondicionare",
    icon: Gem,
    image: images.repair,
    services: ["vopsire", "restaurare", "diamond_cut", "sudare", "indreptare", "etriere"],
  },
  {
    id: "vulcanizare",
    icon: Disc3,
    image: images.tireBay,
    services: ["reparatii", "montaj", "balansare"],
  },
  {
    id: "shop",
    icon: ShoppingBag,
    image: images.wheelClose,
    services: ["anvelope", "jante", "accesorii"],
    shop: true,
  },
];
