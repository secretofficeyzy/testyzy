import type { LucideIcon } from "lucide-react";
import { Disc3, Gem, Paintbrush, Palette, Wrench } from "lucide-react";
import { images, type ServiceId } from "@/lib/site";

export type ServiceItem = {
  id: ServiceId;
  icon: LucideIcon;
  image: string;
};

export const services: ServiceItem[] = [
  {
    id: "vopsire_jante",
    icon: Paintbrush,
    image: images.wheelClose,
  },
  {
    id: "restaurare_jante",
    icon: Gem,
    image: images.repair,
  },
  {
    id: "vopsire_etriere",
    icon: Palette,
    image: images.caliper,
  },
  {
    id: "consultanta_montaj",
    icon: Wrench,
    image: images.mount,
  },
  {
    id: "vulcanizare_indreptare",
    icon: Disc3,
    image: images.tireBay,
  },
];
