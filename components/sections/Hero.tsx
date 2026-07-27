"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, ChevronRight, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { useIntroComplete } from "@/hooks/useIntroComplete";
import { hasSeenIntro } from "@/lib/intro";
import { usePathname } from "@/lib/i18n/navigation";
import { easeOut } from "@/lib/motion";
import { images } from "@/lib/site";

const ZOOM_FROM = 1.66;
const ZOOM_DURATION = 1.85;

export function Hero() {
  const t = useTranslations("hero");
  const reduce = useReducedMotion();
  const pathname = usePathname();
  const { complete: introComplete, mounted } = useIntroComplete();
  const isHome = pathname === "/";
  const [scale, setScale] = useState(ZOOM_FROM);
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    if (!mounted || !isHome || reduce) {
      setScale(reduce ? 1 : ZOOM_FROM);
      setContentReady(reduce || !isHome);
      return;
    }

    const introPending = !hasSeenIntro() && !introComplete;
    if (introPending) {
      setScale(ZOOM_FROM);
      setContentReady(false);
      return;
    }

    setScale(ZOOM_FROM);
    setContentReady(false);
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => setScale(1));
    });
    const contentTimer = window.setTimeout(
      () => setContentReady(true),
      280,
    );

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(contentTimer);
    };
  }, [mounted, isHome, introComplete, reduce]);

  return (
    <section className="relative h-[100svh] min-h-[640px] overflow-hidden">
      <motion.div
        className="absolute inset-0"
        animate={{ scale }}
        transition={{ duration: ZOOM_DURATION, ease: easeOut }}
      >
        <Image
          src={images.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden
        />
      </motion.div>

      <div
        className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/70 to-yz-bg"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(250,204,21,0.14),transparent_60%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-yellow-500/5"
        aria-hidden
      />
      <div className="yz-grid-bg pointer-events-none absolute inset-0 opacity-25" />

      <div
        className="pointer-events-none absolute left-0 top-1/3 h-px w-24 bg-gradient-to-r from-yz-accent/60 to-transparent sm:w-32"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-2/3 h-px w-24 bg-gradient-to-l from-yz-accent/40 to-transparent sm:w-32"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex h-full min-h-0 max-w-7xl flex-col items-center justify-center px-4 pb-[max(3.5rem,env(safe-area-inset-bottom,0px)+2rem)] pt-[max(6rem,env(safe-area-inset-top,0px)+4.5rem)] text-center sm:pb-28 sm:pt-36 lg:px-8">
        <div className="mx-auto w-full max-w-4xl shrink-0">
          <motion.div
            initial={false}
            animate={
              contentReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }
            }
            transition={{ duration: 0.45, ease: easeOut }}
            className="mb-6 flex justify-center sm:mb-7"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-yz-accent/35 bg-yz-accent/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-yz-accent backdrop-blur-sm sm:text-xs">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              {t("eyebrow")}
            </span>
          </motion.div>

          <motion.h1
            initial={false}
            animate={
              contentReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }
            }
            transition={{ duration: 0.55, delay: contentReady ? 0.08 : 0, ease: easeOut }}
            className="yz-display text-[clamp(2.75rem,9vw,6rem)] leading-[0.9] tracking-wide text-white"
          >
            <span className="yz-glow-text block">{t("line1")}</span>
            <span className="mx-auto mt-2 block max-w-2xl text-[clamp(1.25rem,4.2vw,2.1rem)] font-[family-name:var(--font-manrope)] font-semibold normal-case leading-snug tracking-tight text-yz-accent">
              {t("line2")}
            </span>
          </motion.h1>

          <motion.div
            initial={false}
            animate={{ scaleX: contentReady ? 1 : 0 }}
            transition={{ duration: 0.6, delay: contentReady ? 0.2 : 0, ease: easeOut }}
            className="mx-auto mt-6 h-px w-20 bg-gradient-to-r from-transparent via-yz-accent to-transparent sm:mt-8 sm:w-28"
            aria-hidden
          />

          <motion.p
            initial={false}
            animate={
              contentReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }
            }
            transition={{ duration: 0.45, delay: contentReady ? 0.18 : 0, ease: easeOut }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:mt-8 sm:text-lg md:text-xl/[1.55]"
          >
            {t("lead")}
          </motion.p>

          <motion.div
            initial={false}
            animate={
              contentReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }
            }
            transition={{ duration: 0.4, delay: contentReady ? 0.28 : 0, ease: easeOut }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <a
              href="#servicii"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-yz-accent/40 bg-yz-surface/80 px-6 py-3.5 text-sm font-medium text-yz-text backdrop-blur transition-all duration-300 hover:border-yz-accent hover:bg-yz-surface active:scale-[0.98] sm:w-auto"
            >
              {t("ctaSecondary")}
            </a>
            <ButtonLink
              href="/contact"
              variant="primary"
              className="w-full px-8 py-3.5 sm:w-auto"
            >
              {t("ctaPrimary")}
              <ChevronRight className="h-4 w-4" aria-hidden />
            </ButtonLink>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#servicii"
        initial={false}
        animate={{ opacity: contentReady ? 1 : 0 }}
        transition={{ delay: contentReady ? 0.9 : 0, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1.5 text-yz-muted transition-colors hover:text-yz-accent sm:bottom-8"
        aria-label={t("ctaSecondary")}
      >
        <ChevronDown className="h-5 w-5 animate-bounce" aria-hidden />
      </motion.a>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-yz-bg to-transparent"
        aria-hidden
      />
    </section>
  );
}
