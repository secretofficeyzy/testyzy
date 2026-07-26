import { getTranslations, setRequestLocale } from "next-intl/server";
import { YzyShopHub } from "@/components/shop/YzyShopHub";
import type { LocalePageParams } from "@/lib/i18n/page-params";

export async function generateMetadata({
  params,
}: {
  params: LocalePageParams;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("shop.title"),
    description: t("shop.description"),
  };
}

export default async function YzyShopPage({
  params,
}: {
  params: LocalePageParams;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <YzyShopHub />;
}
