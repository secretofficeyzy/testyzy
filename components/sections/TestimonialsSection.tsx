"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const keys = ["a", "b", "c"] as const;

export function TestimonialsSection() {
  const t = useTranslations("testimonials");
  const tCommon = useTranslations("common");
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % keys.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + keys.length) % keys.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 8500);
    return () => clearInterval(timer);
  }, [next]);

  const k = keys[index];

  return (
    <section className="border-t border-yz-border bg-yz-bg py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("subtitle")}
            className="mx-auto max-w-2xl text-center"
            titleClassName="text-[clamp(1.85rem,4vw,3rem)] tracking-[0.14em] md:text-5xl"
          />
        </Reveal>

        <Reveal delay={0.1} y={32} className="relative mx-auto max-w-3xl lg:max-w-[40rem]">
          <Quote
            className="absolute -left-1 -top-5 h-14 w-14 text-yz-accent/15 sm:-left-4 md:h-16 md:w-16"
            aria-hidden
          />
          <div className="overflow-hidden rounded-2xl border border-yz-border/90 bg-gradient-to-br from-yz-surface/60 to-yz-bg/80 p-7 shadow-inner sm:p-10 md:p-12">
            <AnimatePresence mode="wait" initial={false}>
              <motion.blockquote
                key={k}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="text-[1.05rem] leading-relaxed text-zinc-200 sm:text-lg md:text-xl"
              >
                “{t(`items.${k}.quote`)}”
              </motion.blockquote>
            </AnimatePresence>
            <footer className="mt-8 flex flex-col gap-1 border-t border-yz-border/80 pt-8 sm:mt-10">
              <cite className="not-italic font-semibold text-white">
                {t(`items.${k}.author`)}
              </cite>
              <span className="text-sm text-yz-muted">{t(`items.${k}.role`)}</span>
            </footer>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="rounded-lg border border-yz-border p-2.5 text-yz-muted transition-colors hover:border-yz-accent hover:text-yz-accent"
              aria-label={tCommon("carouselPrev")}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div
              className="flex gap-2"
              role="tablist"
              aria-label="Testimonials"
            >
              {keys.map((key, slideIdx) => (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={slideIdx === index}
                  className={`h-2 rounded-full transition-all ${
                    slideIdx === index ? "w-8 bg-yz-accent" : "w-2 bg-zinc-700"
                  }`}
                  onClick={() => setIndex(slideIdx)}
                  aria-label={tCommon("slide", { n: slideIdx + 1 })}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="rounded-lg border border-yz-border p-2.5 text-yz-muted transition-colors hover:border-yz-accent hover:text-yz-accent"
              aria-label={tCommon("carouselNext")}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
