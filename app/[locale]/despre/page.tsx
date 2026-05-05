import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Gauge, Shield, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { LocalePageParams } from "@/lib/i18n/page-params";
import { images } from "@/lib/site";

const valueKeys = ["precision", "safety", "honesty"] as const;

const icons = [Sparkles, Shield, Gauge];

export async function generateMetadata({
  params,
}: {
  params: LocalePageParams;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("about.title"),
    description: t("about.description"),
  };
}

export default async function DesprePage({
  params,
}: {
  params: LocalePageParams;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("aboutPage");

  return (
    <div className="border-t border-yz-border bg-yz-bg">
      <section className="relative py-16 md:py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("intro")}
            align="left"
            className="max-w-3xl lg:max-w-2xl"
            titleClassName="text-5xl lg:text-6xl"
          />
          <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-10">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-yz-border lg:col-span-6 lg:translate-y-6 lg:rotate-[0.4deg]">
              <Image
                src={images.workshop}
                alt={t("heroImageAlt")}
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="space-y-7 text-base leading-relaxed text-yz-muted sm:text-lg lg:col-span-5 lg:col-start-8 lg:translate-x-2">
              <p>{t("body1")}</p>
              <p>{t("body2")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-yz-border bg-yz-elevated py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={t("valuesEyebrow")}
            title={t("valuesTitle")}
            subtitle={t("valuesSubtitle")}
            className="md:max-w-2xl md:text-left"
            titleClassName="text-4xl md:text-5xl"
          />
          <div className="mt-14 grid gap-7 md:grid-cols-3 md:gap-6 lg:mt-16">
            {valueKeys.map((key, i) => {
              const Icon = icons[i] ?? Sparkles;
              return (
                <div
                  key={key}
                  className={`rounded-2xl border border-yz-border bg-yz-surface/45 p-7 transition-colors hover:border-yz-accent/35 md:p-8 ${
                    i === 1 ? "md:translate-y-4" : i === 2 ? "md:-translate-y-2" : ""
                  }`}
                >
                  <Icon className="h-9 w-9 text-yz-accent" aria-hidden />
                  <h3 className="yz-display mt-5 text-2xl tracking-wide text-white md:text-3xl">
                    {t(`values.${key}.title`)}
                  </h3>
                  <p className="mt-3 text-yz-muted">{t(`values.${key}.text`)}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-20 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-yz-border lg:order-2 lg:translate-x-3 lg:rotate-[-0.5deg]">
              <Image
                src={images.hero}
                alt={t("detailImageAlt")}
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center lg:order-1 lg:pr-6">
              <h3 className="yz-display text-3xl tracking-wide text-white md:text-4xl">
                {t("spaceTitle")}
              </h3>
              <p className="mt-5 text-yz-muted sm:text-lg">{t("spaceText")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
