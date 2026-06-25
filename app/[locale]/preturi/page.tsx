import { getTranslations, setRequestLocale } from "next-intl/server";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { LocalePageParams } from "@/lib/i18n/page-params";
import {
  restorationExtras,
  restorationRows,
  swapExtras,
  swapNotes,
  swapRows,
} from "@/lib/pricing-data";

export async function generateMetadata({
  params,
}: {
  params: LocalePageParams;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("prices.title"),
    description: t("prices.description"),
  };
}

export default async function PreturiPage({
  params,
}: {
  params: LocalePageParams;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pricing");
  const mdl = t("unitMdl");
  const lei = t("unitLei");
  const fmt = (n: number) => n.toLocaleString("ro-RO");

  return (
    <div className="border-t border-yz-border bg-yz-bg">
      <section className="relative overflow-hidden py-14 md:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_0%,rgba(250,204,21,0.1),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("subtitle")}
            align="center"
            className="mb-0 max-w-2xl"
            titleClassName="text-5xl md:text-6xl lg:text-7xl"
          />
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-16 px-4 pb-24 sm:px-6 lg:space-y-20 lg:px-8">
        {/* === Restaurare jante === */}
        <section>
          <h2 className="yz-display text-3xl tracking-wide text-white md:text-4xl">
            {t("restoration.title")}
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-yz-muted sm:text-base">
            {t("restoration.subtitle")}
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-yz-border bg-yz-surface/40">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-yz-border text-xs uppercase tracking-wider text-yz-accent">
                  <th className="px-5 py-4 font-semibold">
                    {t("restoration.cols.size")}
                  </th>
                  <th className="px-5 py-4 font-semibold">
                    {t("restoration.cols.paint")}
                  </th>
                  <th className="px-5 py-4 font-semibold">
                    {t("restoration.cols.paintDiamond")}
                  </th>
                  <th className="px-5 py-4 font-semibold">
                    {t("restoration.cols.diamondOnly")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {restorationRows.map((row) => (
                  <tr
                    key={row.size}
                    className="border-b border-yz-border/60 transition-colors last:border-0 hover:bg-yz-surface/60"
                  >
                    <td className="px-5 py-3.5 font-semibold text-white">
                      {row.size}
                    </td>
                    <td className="px-5 py-3.5 text-yz-text">
                      {fmt(row.paint)} {mdl}
                    </td>
                    <td className="px-5 py-3.5 text-yz-text">
                      {fmt(row.paintDiamond)} {mdl}
                    </td>
                    <td className="px-5 py-3.5 text-yz-text">
                      {fmt(row.diamondOnly)} {mdl}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
            {restorationExtras.map((key) => (
              <li
                key={key}
                className="rounded-lg border border-yz-border bg-yz-surface/40 px-4 py-2.5 text-sm text-yz-text"
              >
                {t(`restoration.extras.${key}`)}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm font-medium text-yz-accent">
            {t("restoration.note")}
          </p>
        </section>

        {/* === Schimbare jante (sezonier) === */}
        <section>
          <h2 className="yz-display text-3xl tracking-wide text-white md:text-4xl">
            {t("swap.title")}
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-yz-muted sm:text-base">
            {t("swap.subtitle")}
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-yz-border bg-yz-surface/40">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-yz-border text-xs uppercase tracking-wider text-yz-accent">
                  <th className="px-5 py-4 font-semibold">
                    {t("swap.cols.size")}
                  </th>
                  <th className="px-5 py-4 text-right font-semibold">
                    {t("swap.cols.price")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {swapRows.map((row) => (
                  <tr
                    key={row.size}
                    className="border-b border-yz-border/60 transition-colors last:border-0 hover:bg-yz-surface/60"
                  >
                    <td className="px-5 py-3.5 font-semibold text-white">
                      {row.size}
                    </td>
                    <td className="px-5 py-3.5 text-right text-yz-text">
                      {fmt(row.price)} {lei}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {swapExtras.map((key) => (
              <li
                key={key}
                className="rounded-lg border border-yz-border bg-yz-surface/40 px-4 py-2.5 text-sm text-yz-text"
              >
                {t(`swap.extras.${key}`)}
              </li>
            ))}
          </ul>

          <div className="mt-6 space-y-2 rounded-2xl border border-yz-accent/25 bg-yz-surface/30 p-5 sm:p-6">
            {swapNotes.map((key) => (
              <p key={key} className="text-sm leading-relaxed text-yz-muted">
                {t(`swap.notes.${key}`)}
              </p>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
