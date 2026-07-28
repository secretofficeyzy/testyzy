import { getTranslations, setRequestLocale } from "next-intl/server";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { Hero } from "@/components/sections/Hero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import type { LocalePageParams } from "@/lib/i18n/page-params";
import { routing } from "@/lib/i18n/routing";
import { siteName, siteUrl } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: LocalePageParams;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "meta" });
  const title = t("home.title");
  const description = t("home.description");
  const path = locale === routing.defaultLocale ? "" : `/${locale}`;
  const pageUrl = `${siteUrl}${path || "/"}`;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: pageUrl,
      languages: {
        ro: siteUrl,
        ru: `${siteUrl}/ru`,
      },
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName,
      locale: locale === "ru" ? "ru_RU" : "ro_RO",
      type: "website",
      images: [{ url: "/og.svg", width: 1200, height: 630, alt: siteName }],
    },
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
