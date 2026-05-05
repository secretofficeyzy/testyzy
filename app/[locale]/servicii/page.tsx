import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { LocalePageParams } from "@/lib/i18n/page-params";
import { services } from "@/lib/services-data";

export async function generateMetadata({
  params,
}: {
  params: LocalePageParams;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("services.title"),
    description: t("services.description"),
  };
}

export default async function ServiciiPage({
  params,
}: {
  params: LocalePageParams;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("servicesPage");
  const tSvc = await getTranslations("servicesList");

  return (
    <div className="border-t border-yz-border bg-yz-bg">
      <section className="relative overflow-hidden py-14 md:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_0%,rgba(250,204,21,0.1),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("subtitle")}
            align="left"
            className="mb-0 max-w-2xl lg:translate-x-1"
            titleClassName="text-5xl md:text-6xl lg:text-7xl"
          />
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-16 px-4 pb-24 sm:px-6 sm:space-y-20 lg:space-y-24 lg:px-8">
        {services.map((s, idx) => {
          const Icon = s.icon;
          const reverse = idx % 2 === 1;
          const imageFrame =
            idx % 3 === 0
              ? "rotate-[-0.5deg] lg:-translate-x-2"
              : idx % 3 === 1
                ? "translate-y-2 rotate-[0.6deg] lg:translate-x-3"
                : "-translate-y-1 rotate-[-0.3deg] lg:-translate-y-2";
          return (
            <article
              key={s.id}
              className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12"
            >
              <div
                className={`lg:col-span-5 ${reverse ? "lg:order-2 lg:pl-4" : "lg:pr-2"}`}
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-yz-accent/12 text-yz-accent ring-1 ring-yz-accent/25">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h2 className="yz-display mt-5 text-4xl tracking-wide text-white md:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
                  {tSvc(`${s.id}.title`)}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-yz-muted sm:text-lg">
                  {tSvc(`${s.id}.description`)}
                </p>
                <ButtonLink
                  href="/contact"
                  variant="primary"
                  className="mt-9"
                >
                  {t("ctaPerService")}
                </ButtonLink>
              </div>
              <div
                className={`relative lg:col-span-7 ${reverse ? "lg:order-1" : ""}`}
              >
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-2xl border border-yz-border bg-black yz-card-glow ${imageFrame}`}
                >
                  <Image
                    src={s.image}
                    alt={tSvc(`${s.id}.imageAlt`)}
                    fill
                    sizes="(max-width:1024px) 100vw, 58vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
