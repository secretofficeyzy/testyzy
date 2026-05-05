import { getTranslations, setRequestLocale } from "next-intl/server";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { Hero } from "@/components/sections/Hero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
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
    title: t("home.title"),
    description: t("home.description"),
  };
}

export default async function HomePage({
  params,
}: {
  params: LocalePageParams;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <ServicesSection />
      <BeforeAfterSection />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
