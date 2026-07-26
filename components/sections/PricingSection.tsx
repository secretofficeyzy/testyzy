"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import {
  restorationExtras,
  restorationRows,
  swapExtras,
  swapNotes,
  swapRows,
} from "@/lib/pricing-data";

function fmtPrice(n: number, locale: string) {
  return n.toLocaleString(locale === "ru" ? "ru-RU" : "ro-RO");
}

export function PricingSection() {
  const t = useTranslations("pricing");
  const locale = useLocale();
  const reduce = useReducedMotion();
  const mdl = t("unitMdl");
  const lei = t("unitLei");

  return (
    <div className="mx-auto max-w-7xl space-y-16 px-4 pb-24 sm:px-6 lg:space-y-20 lg:px-8">
      <Reveal delay={0.06}>
        <section className="yz-card-glow overflow-hidden rounded-3xl border border-yz-border bg-yz-surface/30 p-5 sm:p-8 lg:p-10">
          <div>
            <h2 className="yz-display text-3xl tracking-wide text-white md:text-4xl">
              {t("restoration.title")}
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-yz-muted sm:text-base">
              {t("restoration.subtitle")}
            </p>
          </div>

          <div className="mt-8 hidden overflow-x-auto rounded-2xl border border-yz-border bg-yz-bg/50 md:block">
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
                {restorationRows.map((row, index) => (
                  <motion.tr
                    key={row.size}
                    initial={reduce ? false : { opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.35, delay: index * 0.04 }}
                    className="border-b border-yz-border/60 transition-colors last:border-0 hover:bg-yz-surface/60"
                  >
                    <td className="px-5 py-3.5 font-semibold text-white">
                      {row.size}
                    </td>
                    <td className="px-5 py-3.5 text-yz-text">
                      {fmtPrice(row.paint, locale)} {mdl}
                    </td>
                    <td className="px-5 py-3.5 text-yz-text">
                      {fmtPrice(row.paintDiamond, locale)} {mdl}
                    </td>
                    <td className="px-5 py-3.5 text-yz-text">
                      {fmtPrice(row.diamondOnly, locale)} {mdl}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 space-y-3 md:hidden">
            {restorationRows.map((row, index) => (
              <motion.div
                key={row.size}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="rounded-2xl border border-yz-border bg-yz-bg/50 p-4"
              >
                <p className="text-lg font-semibold text-white">{row.size}</p>
                <dl className="mt-3 space-y-2 text-sm">
                  <div className="flex justify-between gap-3 border-b border-yz-border/50 pb-2">
                    <dt className="text-yz-muted">{t("restoration.cols.paint")}</dt>
                    <dd className="font-medium text-yz-text">
                      {fmtPrice(row.paint, locale)} {mdl}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-3 border-b border-yz-border/50 pb-2">
                    <dt className="text-yz-muted">
                      {t("restoration.cols.paintDiamond")}
                    </dt>
                    <dd className="font-medium text-yz-text">
                      {fmtPrice(row.paintDiamond, locale)} {mdl}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-yz-muted">
                      {t("restoration.cols.diamondOnly")}
                    </dt>
                    <dd className="font-medium text-yz-text">
                      {fmtPrice(row.diamondOnly, locale)} {mdl}
                    </dd>
                  </div>
                </dl>
              </motion.div>
            ))}
          </div>

          <RevealStagger className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
            {restorationExtras.map((key) => (
              <RevealItem key={key}>
                <span className="inline-block rounded-lg border border-yz-border bg-yz-surface/60 px-4 py-2.5 text-sm text-yz-text transition duration-300 hover:border-yz-accent/30">
                  {t(`restoration.extras.${key}`)}
                </span>
              </RevealItem>
            ))}
          </RevealStagger>
          <p className="mt-5 text-sm font-medium text-yz-accent">
            {t("restoration.note")}
          </p>
        </section>
      </Reveal>

      <Reveal delay={0.1}>
        <section className="yz-card-glow overflow-hidden rounded-3xl border border-yz-border bg-yz-surface/30 p-5 sm:p-8 lg:p-10">
          <div>
            <h2 className="yz-display text-3xl tracking-wide text-white md:text-4xl">
              {t("swap.title")}
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-yz-muted sm:text-base">
              {t("swap.subtitle")}
            </p>
          </div>

          <div className="mt-8 hidden overflow-hidden rounded-2xl border border-yz-border bg-yz-bg/50 md:block">
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
                {swapRows.map((row, index) => (
                  <motion.tr
                    key={row.size}
                    initial={reduce ? false : { opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.35, delay: index * 0.04 }}
                    className="border-b border-yz-border/60 transition-colors last:border-0 hover:bg-yz-surface/60"
                  >
                    <td className="px-5 py-3.5 font-semibold text-white">
                      {row.size}
                    </td>
                    <td className="px-5 py-3.5 text-right text-yz-text">
                      {fmtPrice(row.price, locale)} {lei}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 space-y-3 md:hidden">
            {swapRows.map((row, index) => (
              <motion.div
                key={row.size}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="flex items-center justify-between rounded-2xl border border-yz-border bg-yz-bg/50 px-4 py-3.5"
              >
                <span className="font-semibold text-white">{row.size}</span>
                <span className="text-yz-text">
                  {fmtPrice(row.price, locale)} {lei}
                </span>
              </motion.div>
            ))}
          </div>

          <RevealStagger className="mt-6 grid gap-2 sm:grid-cols-2">
            {swapExtras.map((key) => (
              <RevealItem key={key}>
                <span className="block rounded-lg border border-yz-border bg-yz-surface/60 px-4 py-2.5 text-sm text-yz-text transition duration-300 hover:border-yz-accent/30">
                  {t(`swap.extras.${key}`)}
                </span>
              </RevealItem>
            ))}
          </RevealStagger>

          <div className="relative mt-6 overflow-hidden rounded-2xl border border-yz-accent/25 bg-yz-surface/30 p-5 sm:p-6">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_0%,rgba(250,204,21,0.08),transparent_55%)]" />
            <div className="relative space-y-2">
              {swapNotes.map((key) => (
                <p key={key} className="text-sm leading-relaxed text-yz-muted">
                  {t(`swap.notes.${key}`)}
                </p>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
