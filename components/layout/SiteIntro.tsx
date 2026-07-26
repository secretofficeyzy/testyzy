"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import {
  dispatchIntroComplete,
  hasSeenIntro,
  markIntroSeen,
} from "@/lib/intro";
import { siteName } from "@/lib/site";

const HOLD_MS = 2000;
const EXIT_MS = 900;

export function SiteIntro() {
  const t = useTranslations("common");
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
    if (reduce) {
      markIntroSeen();
      dispatchIntroComplete();
      return;
    }
    if (!hasSeenIntro()) {
      setVisible(true);
    } else {
      dispatchIntroComplete();
    }
  }, [reduce]);

  useEffect(() => {
    if (!visible) return;
    const timer = window.setTimeout(() => {
      dispatchIntroComplete();
      setVisible(false);
    }, HOLD_MS);
    return () => clearTimeout(timer);
  }, [visible]);

  const onExit = () => {
    markIntroSeen();
  };

  if (!ready || reduce) return null;

  return (
    <AnimatePresence onExitComplete={onExit}>
      {visible ? (
        <motion.div
          key="site-intro"
          className="fixed inset-0 z-[300] flex items-center justify-center overflow-hidden bg-yz-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: EXIT_MS / 1000, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="yz-grid-bg pointer-events-none absolute inset-0 opacity-50" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(250,204,21,0.22),transparent_65%)]" />

          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0, 0.6, 0.35], scale: [0.6, 1.15, 1] }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute h-64 w-64 rounded-full bg-yz-accent/15 blur-3xl sm:h-80 sm:w-80"
          />

          <motion.div
            exit={{ opacity: 0, scale: 1.08, filter: "blur(10px)" }}
            transition={{ duration: EXIT_MS / 1000, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center px-6 text-center"
          >
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -inset-6 rounded-full border border-yz-accent/20 sm:-inset-8"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: [0, 0.5, 0.25], scale: [0.5, 1.08, 1] }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -inset-10 rounded-full bg-yz-accent/10 blur-xl sm:-inset-12"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.72, filter: "blur(16px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <Image
                  src="/logo.svg"
                  alt=""
                  width={140}
                  height={140}
                  className="h-28 w-auto drop-shadow-[0_0_40px_rgba(250,204,21,0.45)] sm:h-36"
                  priority
                />
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="yz-display yz-glow-text mt-10 text-5xl tracking-[0.14em] text-white sm:text-6xl"
            >
              {siteName}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 max-w-sm text-sm leading-relaxed text-yz-muted sm:text-base"
            >
              {t("siteTagline")}
            </motion.p>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 h-px w-40 origin-center rounded-full bg-gradient-to-r from-transparent via-yz-accent to-transparent sm:w-52"
            />
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-yz-accent via-yz-accent/40 to-transparent"
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
