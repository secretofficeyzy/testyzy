"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Clock } from "lucide-react";
import { useTranslations } from "next-intl";

export function YzyShopComingSoon() {
  const t = useTranslations("shopPage.pneu");
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="yz-card-glow relative overflow-hidden rounded-3xl border border-yz-border bg-yz-surface/40 px-6 py-16 text-center sm:px-10 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(250,204,21,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute -left-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-yz-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-yz-accent/8 blur-3xl" />

      <div className="relative mx-auto max-w-md">
        <motion.span
          animate={reduce ? undefined : { scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-yz-accent/30 bg-yz-accent/10 text-yz-accent"
        >
          <Clock className="h-8 w-8" aria-hidden />
        </motion.span>
        <p className="yz-display mt-8 text-4xl tracking-wide text-yz-accent sm:text-5xl">
          {t("comingSoon")}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-yz-muted sm:text-base">
          {t("comingSoonHint")}
        </p>
      </div>
    </motion.div>
  );
}
