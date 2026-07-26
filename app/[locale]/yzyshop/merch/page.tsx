import { getTranslations, setRequestLocale } from "next-intl/server";
import { ShoppingBag } from "lucide-react";
import { YzyProductCatalog } from "@/components/shop/YzyProductCatalog";
import { YzyShopShell } from "@/components/shop/YzyShopShell";
import type { LocalePageParams } from "@/lib/i18n/page-params";
import { shopCategories, shopProducts } from "@/lib/shop-data";

export async function generateMetadata({
  params,
}: {
  params: LocalePageParams;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("shopMerch.title"),
    description: t("shopMerch.description"),
  };
}

export default async function YzyShopMerchPage({
  params,
}: {
  params: LocalePageParams;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("shopPage");

  return (
    <YzyShopShell
      backLabel={t("backToHub")}
      eyebrow={t("merch.eyebrow")}
      title={t("merch.title")}
      subtitle={t("merch.subtitle")}
      footerNote={t("contactNote")}
      badge={
        <span className="inline-flex items-center gap-2 rounded-full border border-yz-accent/30 bg-yz-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-yz-accent">
          <ShoppingBag className="h-3.5 w-3.5" aria-hidden />
          {t("badge")}
        </span>
      }
    >
      <YzyProductCatalog
        products={shopProducts}
        categories={shopCategories}
        productsKey="products"
        categoriesKey="categories"
      />
    </YzyShopShell>
  );
}
