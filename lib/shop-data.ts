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
    image: "/photos/shop/tee-logo-black.jpg",
  },
  {
    id: "tee_logo_white",
    category: "tshirts",
    price: 450,
    sizes: apparelSizes,
    image: "/photos/shop/tee-logo-white.jpg",
  },
  {
    id: "tee_wheel_black",
    category: "tshirts",
    price: 480,
    sizes: apparelSizes,
    image: "/photos/shop/tee-wheel-black.jpg",
  },
  {
    id: "cap_classic_black",
    category: "caps",
    price: 320,
    sizes: capSizes,
    image: "/photos/shop/cap-classic-black.jpg",
  },
  {
    id: "cap_classic_yellow",
    category: "caps",
    price: 320,
    sizes: capSizes,
    image: "/photos/shop/cap-classic-yellow.jpg",
  },
  {
    id: "cap_trucker",
    category: "caps",
    price: 350,
    sizes: capSizes,
    image: "/photos/shop/cap-trucker.jpg",
  },
];
