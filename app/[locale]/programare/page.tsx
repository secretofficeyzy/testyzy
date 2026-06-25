import { getTranslations, setRequestLocale } from "next-intl/server";
import { CalBooking } from "@/components/sections/CalBooking";
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
    title: t("booking.title"),
    description: t("booking.description"),
  };
}

export default async function ProgramarePage({
  params,
}: {
  params: LocalePageParams;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("bookingPage");

  return (
    <div className="border-t border-yz-border bg-yz-bg py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
          align="center"
          className="mb-10 max-w-2xl md:mb-14"
          titleClassName="text-5xl md:text-6xl"
        />

        <ul className="mx-auto mb-10 flex max-w-3xl flex-wrap justify-center gap-x-3 gap-y-2 md:mb-14">
          {["sudare", "indreptare", "reparatii", "montaj", "balansare"].map(
            (key) => (
              <li
                key={key}
                className="rounded-full border border-yz-accent/30 bg-yz-surface/50 px-4 py-1.5 text-sm text-yz-text"
              >
                {t(`services.${key}`)}
              </li>
            ),
          )}
        </ul>

        <CalBooking />
      </div>
    </div>
  );
}
