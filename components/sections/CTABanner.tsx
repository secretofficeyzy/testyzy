"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { ButtonLink } from "@/components/ui/Button";

export function CTABanner() {
  const t = useTranslations("ctaBanner");

  return (
    <section className="relative overflow-hidden border-t border-yz-border py-16 md:py-20">
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 via-transparent to-transparent" />
      <div className="yz-grid-bg absolute inset-0 opacity-25" />
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55 }}
        className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8"
      >
        <h2 className="yz-display text-[clamp(1.75rem,4vw,2.75rem)] tracking-wide text-white md:text-5xl">
          {t("title")}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-yz-muted sm:text-lg">
          {t("description")}
        </p>
        <div className="mt-11 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <ButtonLink href="/contact" variant="primary" className="w-full sm:w-auto">
            {t("primary")}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary" className="w-full sm:w-auto">
            {t("secondary")}
          </ButtonLink>
        </div>
      </motion.div>
    </section>
  );
}
