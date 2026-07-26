"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";

type CatalogProduct = {
  id: string;
  category: string;
  price: number;
  sizes: readonly string[];
  image?: string;
};

type YzyProductCatalogProps = {
  products: CatalogProduct[];
  categories: readonly string[];
  productsKey: "products";
  categoriesKey: "categories";
};

type FilterId = "all" | string;

export function YzyProductCatalog({
  products,
  categories,
  productsKey,
  categoriesKey,
}: YzyProductCatalogProps) {
  const t = useTranslations("shopPage");
  const [filter, setFilter] = useState<FilterId>("all");

  const filters: { id: FilterId; label: string }[] = [
    { id: "all", label: t("filters.all") },
    ...categories.map((id) => ({
      id,
      label: t(`${categoriesKey}.${id}`),
    })),
  ];

  const visible = useMemo(
    () =>
      filter === "all"
        ? products
        : products.filter((p) => p.category === filter),
    [filter, products],
  );

  return (
    <div>
      <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
        {filters.map((item) => {
          const active = filter === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition duration-300 ${
                active
                  ? "border-yz-accent bg-yz-accent text-zinc-950"
                  : "border-yz-border bg-yz-surface/50 text-yz-muted hover:border-yz-accent/40 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <motion.div
        layout
        className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
      >
        {visible.map((product, index) => (
          <motion.article
            key={product.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group yz-card-glow flex flex-col overflow-hidden rounded-2xl border border-yz-border bg-yz-surface/50 transition duration-300 hover:-translate-y-1 hover:border-yz-accent/30"
          >
            <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-yz-surface via-black to-yz-bg">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={t(`${productsKey}.${product.id}.name`)}
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              ) : null}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_100%,rgba(250,204,21,0.15),transparent_60%)]" />
              <span className="absolute left-3 top-3 rounded-full border border-yz-accent/30 bg-black/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-yz-accent backdrop-blur">
                {t(`${categoriesKey}.${product.category}`)}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-semibold text-white">
                {t(`${productsKey}.${product.id}.name`)}
              </h3>
              <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-yz-muted">
                {t(`${productsKey}.${product.id}.description`)}
              </p>
              <p className="mt-4 text-xl font-semibold text-yz-accent">
                {product.price} {t("currency")}
              </p>

              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-yz-muted">
                {t("sizeLabel")}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <span
                    key={size}
                    className="rounded-lg border border-yz-border bg-yz-elevated px-3 py-1.5 text-sm font-medium text-yz-text"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}
