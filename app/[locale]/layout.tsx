import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import type { LocalePageParams } from "@/lib/i18n/page-params";
import { routing } from "@/lib/i18n/routing";
import { siteName, siteUrl } from "@/lib/site";
import ScrollToTop from "@/components/ScrollToTop";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: LocalePageParams;
}): Promise<Metadata> {
  const { locale } = await params;
  const base = locale === "ru" ? "ru_RU" : "ro_RO";
  const title =
    locale === "ru"
      ? `${siteName} — диски, покраска, восстановление`
      : `${siteName} — jante, vopsire, restaurare`;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: `%s | ${siteName}`,
    },
    description:
      locale === "ru"
        ? "YZY WHEELS: покраска дисков, суппортов, восстановление, шиномонтаж."
        : "YZY WHEELS: vopsire jante, etriere, restaurare, vulcanizare.",
    authors: [{ name: siteName }],
    openGraph: {
      type: "website",
      locale: base,
      url: siteUrl,
      siteName,
      title,
      images: [{ url: "/og.svg", width: 1200, height: 630, alt: siteName }],
    },
    robots: { index: true, follow: true },
    icons: {
      icon: "/logo.svg",
      apple: "/logo.svg",
    },
  };
}

type Props = {
  children: ReactNode;
  params: LocalePageParams;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations("common");

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ScrollToTop />
      <a
        href="#main-content"
        className="absolute left-[-9999px] top-4 z-[200] rounded-lg bg-yz-accent px-4 py-2 text-sm font-semibold text-zinc-950 focus:left-4 focus:outline-none focus:ring-2 focus:ring-white"
      >
        {t("skipToContent")}
      </a>
      <SiteHeader />
      <main id="main-content" className="grow shrink-0">
        {children}
      </main>
      <SiteFooter />
    </NextIntlClientProvider>
  );
}
