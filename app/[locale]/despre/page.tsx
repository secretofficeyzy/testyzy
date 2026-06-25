import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import {
  BadgeCheck,
  Clock,
  Layers,
  MapPin,
  Sparkles,
  SprayCan,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { LocalePageParams } from "@/lib/i18n/page-params";
import { business, galleryImages, images } from "@/lib/site";

const highlightKeys = ["equipment", "zones", "verified"] as const;
const highlightIcons = [SprayCan, Layers, BadgeCheck];

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
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden py-16 md:py-20 lg:py-28">
        <div className="yz-grid-bg pointer-events-none absolute inset-0 opacity-30" />
        <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_10%,rgba(250,204,21,0.08),transparent_55%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-yz-accent/30 bg-yz-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-yz-accent">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                {t("eyebrow")}
              </span>
              <h1 className="yz-display mt-6 text-5xl tracking-wide text-white lg:text-7xl">
                {t("title")}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-yz-muted sm:text-xl">
                {t("intro")}
              </p>
            </Reveal>

            <Reveal delay={0.12} className="lg:col-span-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-yz-border bg-black yz-card-glow lg:rotate-[0.5deg]">
                <Image
                  src={images.workshop}
                  alt={t("heroImageAlt")}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                {/* Floating location / hours chip */}
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-yz-border/80 bg-black/65 p-4 backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-xs">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-yz-accent">
                    {t("findUs")}
                  </p>
                  <p className="mt-2 flex items-start gap-2 text-sm text-white">
                    <MapPin
                      className="mt-0.5 h-4 w-4 shrink-0 text-yz-accent"
                      aria-hidden
                    />
                    {business.address}
                  </p>
                  <p className="mt-2 flex items-start gap-2 text-xs leading-relaxed text-yz-muted">
                    <Clock
                      className="mt-0.5 h-4 w-4 shrink-0 text-yz-accent"
                      aria-hidden
                    />
                    {business.hours}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Story + highlights ===== */}
      <section className="border-t border-yz-border bg-yz-elevated py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="grid gap-x-12 gap-y-6 lg:grid-cols-12 lg:gap-x-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-yz-accent">
                  {t("storyEyebrow")}
                </span>
                <span className="mt-4 block h-px w-16 bg-gradient-to-r from-yz-accent to-transparent" />
              </div>
            </div>
            <div className="space-y-6 lg:col-span-8">
              <p className="text-xl leading-relaxed text-zinc-200 sm:text-2xl sm:leading-relaxed">
                {t("body1")}
              </p>
              <p className="text-base leading-relaxed text-yz-muted sm:text-lg">
                {t("body2")}
              </p>
            </div>
          </Reveal>

          <p className="mt-16 text-xs font-semibold uppercase tracking-[0.25em] text-yz-accent lg:mt-20">
            {t("highlightsEyebrow")}
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {highlightKeys.map((key, i) => {
              const Icon = highlightIcons[i] ?? Sparkles;
              return (
                <Reveal key={key} delay={i * 0.1}>
                  <div className="group h-full rounded-2xl border border-yz-border bg-yz-surface/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-yz-accent/40 hover:bg-yz-surface/70">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-yz-accent/12 text-yz-accent ring-1 ring-yz-accent/25 transition group-hover:bg-yz-accent group-hover:text-zinc-950">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-white">
                      {t(`highlights.${key}.title`)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-yz-muted">
                      {t(`highlights.${key}.text`)}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Gallery ===== */}
      <section className="border-t border-yz-border bg-yz-bg py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow={t("galleryEyebrow")}
              title={t("galleryTitle")}
              subtitle={t("gallerySubtitle")}
              align="center"
              className="max-w-2xl"
              titleClassName="text-4xl md:text-5xl"
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:mt-16">
            {galleryImages.map((src, i) => (
              <Reveal key={src} delay={(i % 3) * 0.08}>
                <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-yz-border bg-black yz-card-glow">
                  <Image
                    src={src}
                    alt={`${t("galleryTitle")} ${i + 1}`}
                    fill
                    sizes="(max-width:640px) 50vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-yz-accent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Space ===== */}
      <section className="border-t border-yz-border bg-yz-elevated py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <Reveal delay={0.1} className="lg:order-2">
              <div className="relative aspect-video overflow-hidden rounded-3xl border border-yz-border bg-black yz-card-glow lg:rotate-[-0.5deg]">
                <Image
                  src={images.hero}
                  alt={t("detailImageAlt")}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
            </Reveal>
            <Reveal className="flex flex-col justify-center lg:order-1 lg:pr-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-yz-border bg-yz-surface/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-yz-accent">
                <Layers className="h-3.5 w-3.5" aria-hidden />
                {t("valuesEyebrow")}
              </span>
              <h3 className="yz-display mt-5 text-3xl tracking-wide text-white md:text-4xl">
                {t("spaceTitle")}
              </h3>
              <p className="mt-5 text-yz-muted sm:text-lg">{t("spaceText")}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative overflow-hidden border-t border-yz-border py-16 md:py-20">
        <div className="pointer-events-none absolute -right-20 top-6 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 via-transparent to-transparent" />
        <div className="yz-grid-bg absolute inset-0 opacity-25" />
        <Reveal className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8">
          <h2 className="yz-display text-[clamp(1.75rem,4vw,2.75rem)] tracking-wide text-white md:text-5xl">
            {t("ctaTitle")}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-yz-muted sm:text-lg">
            {t("ctaText")}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <ButtonLink
              href="/programare"
              variant="primary"
              className="w-full sm:w-auto"
            >
              {t("ctaSecondary")}
            </ButtonLink>
            <ButtonLink
              href="/contact"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              {t("ctaPrimary")}
            </ButtonLink>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
