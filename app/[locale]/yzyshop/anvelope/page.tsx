import { getTranslations, setRequestLocale } from "next-intl/server";
import { Disc3 } from "lucide-react";
import { YzyShopComingSoon } from "@/components/shop/YzyShopComingSoon";
import { YzyShopShell } from "@/components/shop/YzyShopShell";
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
    title: t("shopPneu.title"),
    description: t("shopPneu.description"),
  };
}

export default async function YzyShopPneuPage({
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
      eyebrow={t("pneu.eyebrow")}
      title={t("pneu.title")}
      subtitle={t("pneu.subtitle")}
      badge={
        <span className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-yz-accent/30 bg-yz-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-yz-accent sm:tracking-[0.2em]">
          <Disc3 className="h-3.5 w-3.5 shrink-0" aria-hidden />
          {t("pneu.partnerBadge")}
        </span>
      }
    >
      <YzyShopComingSoon />
    </YzyShopShell>
  );
}
