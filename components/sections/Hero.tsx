"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { ButtonLink } from "@/components/ui/Button";
import { images } from "@/lib/site";

export function Hero() {
  const t = useTranslations("hero");
  return (
    <section className="relative min-h-[78vh] overflow-hidden sm:min-h-[85vh]">
      <div className="absolute inset-0">
        <Image
          src={images.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/55"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_35%,rgba(250,204,21,0.1),transparent_55%)]"
          aria-hidden
        />
      </div>

      <div className="yz-grid-bg pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl flex-col items-center justify-end px-4 pb-16 pt-28 text-center sm:min-h-[85vh] sm:justify-center sm:pb-24 sm:pt-32 lg:px-8">
        <div className="mx-auto w-full max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-5 text-[11px] font-semibold uppercase tracking-[0.38em] text-yz-accent sm:text-xs"
          >
            {t("eyebrow")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="yz-display text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.92] tracking-wide text-white"
          >
            <span className="yz-glow-text block">{t("line1")}</span>
            <span className="mx-auto mt-1 block max-w-2xl text-[clamp(1.35rem,4.5vw,2.25rem)] font-[family-name:var(--font-manrope)] font-semibold normal-case tracking-tight text-yz-accent">
              {t("line2")}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.14 }}
            className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg md:text-xl/[1.55]"
          >
            {t("lead")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.22 }}
            className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <ButtonLink href="/servicii" variant="secondary">
              {t("ctaSecondary")}
            </ButtonLink>
            <ButtonLink href="/contact" variant="primary">
              {t("ctaPrimary")}
              <ChevronRight className="h-4 w-4" aria-hidden />
            </ButtonLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
