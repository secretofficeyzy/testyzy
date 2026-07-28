export const shopImageVersion = 2;

function shopImage(path: string) {
  return `${path}?v=${shopImageVersion}`;
}

export const shopImages = {
  hub: {
    merch: shopImage("/photos/yzyshop/hub-merch.jpg"),
    anvelope: shopImage("/photos/yzyshop/hub-anvelope.jpg"),
  },
  products: {
    teeLogoBlack: shopImage("/photos/yzyshop/products/comingsoon.jpg"),
    teeLogoWhite: shopImage("/photos/yzyshop/products/comingsoon.jpg"),
    capClassicBlack: shopImage("/photos/yzyshop/products/comingsoon.jpg"),
  },
} as const;

export type ShopCategoryId = "tshirts" | "caps";

export type ShopProduct = {
  id: string;
  category: ShopCategoryId;
  price: number;
  sizes: readonly string[];
  image?: string;
};

export const shopCategories: ShopCategoryId[] = ["tshirts", "caps"];

export const apparelSizes = ["S", "M", "L", "XL", "XXL"] as const;
export const capSizes = ["S/M", "L/XL"] as const;

export const shopProducts: ShopProduct[] = [
  {
    id: "tee_logo_black",
    category: "tshirts",
    price: 450,
    sizes: apparelSizes,
    image: shopImages.products.teeLogoBlack,
  },
  {
    id: "tee_logo_white",
    category: "tshirts",
    price: 450,
    sizes: apparelSizes,
    image: shopImages.products.teeLogoWhite,
  },
  {
    id: "cap_classic_black",
    category: "caps",
    price: 300,
    sizes: capSizes,
    image: shopImages.products.capClassicBlack,
  },
];

export const shopHubCards = [
  {
    id: "merch" as const,
    href: "/yzyshop/merch" as const,
    image: shopImages.hub.merch,
    glow: "rgba(250,204,21,0.35)",
  },
  {
    id: "pneu" as const,
    href: "/yzyshop/anvelope" as const,
    image: shopImages.hub.anvelope,
    glow: "rgba(250,204,21,0.28)",
  },
] as const;
