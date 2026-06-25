import { setRequestLocale } from "next-intl/server";
import type { LocalePageParams } from "@/lib/i18n/page-params";

export const metadata = {
  title: "YZY Shop",
};

export default async function YzyShopPage({
  params,
}: {
  params: LocalePageParams;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="border-t border-yz-border bg-yz-bg">
      <section className="relative flex min-h-[70svh] items-center justify-center overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="yz-grid-bg pointer-events-none absolute inset-0 opacity-30" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center_40%,rgba(250,204,21,0.1),transparent_55%)]" />
        <h1 className="yz-display yz-glow-text relative text-center text-[clamp(2.75rem,10vw,7rem)] leading-[0.95] tracking-wide text-white">
          Coming soon!
        </h1>
      </section>
    </div>
  );
}
