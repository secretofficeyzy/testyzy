import { getTranslations, setRequestLocale } from "next-intl/server";
import { PricingSection } from "@/components/sections/PricingSection";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
    title: t("prices.title"),
    description: t("prices.description"),
  };
}

export default async function PreturiPage({
  params,
}: {
  params: LocalePageParams;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pricing");

  return (
    <div className="border-t border-yz-border bg-yz-bg">
      <section className="relative overflow-hidden py-14 md:py-20 lg:py-24">
        <div className="yz-grid-bg pointer-events-none absolute inset-0 opacity-25" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_0%,rgba(250,204,21,0.12),transparent_55%)]" />
        <div className="pointer-events-none absolute -right-24 top-1/3 h-56 w-56 rounded-full bg-yz-accent/8 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal y={20} blur>
            <SectionHeading
              eyebrow={t("eyebrow")}
              title={t("title")}
              subtitle={t("subtitle")}
              align="center"
              className="mx-auto mb-0 max-w-2xl"
              titleClassName="text-[clamp(2.5rem,6vw,4.5rem)]"
            />
          </Reveal>
        </div>
      </section>

      <PricingSection />
    </div>
  );
}
