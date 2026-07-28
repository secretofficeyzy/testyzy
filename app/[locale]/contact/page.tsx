import { getTranslations, setRequestLocale } from "next-intl/server";
import { ContactMessengerLinks } from "@/components/contact/ContactMessengerLinks";
import { BusinessContactList } from "@/components/business/BusinessContactList";
import { ContactForm } from "@/components/forms/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
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
    <div className="yz-page-hero border-t border-yz-border bg-yz-bg pb-16 md:pb-24 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("subtitle")}
            align="center"
            className="mb-12 max-w-2xl md:mb-16"
            titleClassName="text-5xl md:text-6xl"
          />
        </Reveal>

        <Reveal delay={0.06}>
          <address className="not-italic mx-auto mb-10 max-w-2xl space-y-6 rounded-2xl border border-yz-border bg-yz-surface/40 p-7 text-center sm:mb-12 sm:p-8">
            <h2 className="yz-display text-2xl tracking-wide text-white sm:text-3xl">
              {t("company")}
            </h2>
            <BusinessContactList align="center" />
            <p className="text-sm text-zinc-500">{business.hours}</p>
          </address>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-10">
          <Reveal delay={0.08} className="flex min-h-0">
            <div className="flex w-full flex-col overflow-hidden rounded-2xl border border-yz-border bg-yz-surface/30">
              <div className="border-b border-yz-border px-6 py-5 sm:px-8">
                <h2 className="yz-display text-2xl tracking-wide text-white sm:text-3xl">
                  {t("mapTitle")}
                </h2>
              </div>
              <div className="relative min-h-[280px] flex-1 sm:min-h-[320px] lg:min-h-[420px]">
                <iframe
                  title={t("mapTitle")}
                  src={business.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full bg-zinc-900"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="flex min-h-0">
            <div className="flex w-full flex-col rounded-2xl border border-yz-border bg-yz-surface/30 p-6 sm:p-9">
              <h2 className="yz-display text-2xl tracking-wide text-white sm:text-3xl">
                {t("formTitle")}
              </h2>
              <ContactMessengerLinks />
              <div className="mt-8 flex-1">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
