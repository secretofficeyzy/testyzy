import { getTranslations, setRequestLocale } from "next-intl/server";
import { BusinessContactList } from "@/components/business/BusinessContactList";
import { ContactForm } from "@/components/forms/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { LocalePageParams } from "@/lib/i18n/page-params";
import { business } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: LocalePageParams;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("contact.title"),
    description: t("contact.description"),
  };
}

export default async function ContactPage({
  params,
}: {
  params: LocalePageParams;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contactPage");

  return (
    <div className="border-t border-yz-border bg-yz-bg py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
          className="mb-12 max-w-2xl text-left md:mb-16"
          titleClassName="text-5xl md:text-6xl"
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-8 lg:translate-y-1">
            <address className="not-italic space-y-6 rounded-2xl border border-yz-border bg-yz-surface/40 p-7 sm:p-8">
              <h2 className="yz-display text-2xl tracking-wide text-white sm:text-3xl">
                {t("company")}
              </h2>
              <BusinessContactList />
              <p className="text-sm text-zinc-500">{business.hours}</p>
            </address>

            <div className="overflow-hidden rounded-2xl border border-yz-border">
              <iframe
                title={t("mapTitle")}
                src={business.mapsEmbedUrl}
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="aspect-video min-h-[260px] w-full bg-zinc-900 sm:min-h-[280px]"
              />
              <p className="border-t border-yz-border px-4 py-3 text-center text-xs text-zinc-500">
                {t("mapNote")}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-yz-border bg-yz-surface/30 p-6 sm:p-9 lg:-translate-y-1">
            <h2 className="yz-display text-2xl tracking-wide text-white sm:text-3xl">
              {t("formTitle")}
            </h2>
            <p className="mt-2 text-sm text-yz-muted">{t("formHint")}</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
