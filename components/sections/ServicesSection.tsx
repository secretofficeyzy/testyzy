"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { Link } from "@/lib/i18n/navigation";
import {
  atelierCategories,
  type AtelierCategoryId,
} from "@/lib/services-data";

const MotionLink = motion.create(Link);

export function ServicesSection() {
  const t = useTranslations("atelier");
  const [active, setActive] = useState<AtelierCategoryId | null>(null);

  return (
    <section
      id="servicii"
      className="scroll-mt-24 border-t border-yz-border bg-yz-bg py-16 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal y={20} blur>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("subtitle")}
            align="center"
            className="mb-10 md:mb-14"
            titleClassName="text-[clamp(2rem,4.5vw,3.5rem)] md:text-5xl lg:text-6xl"
          />
        </Reveal>

        <RevealStagger className="grid gap-6 md:grid-cols-3 md:items-stretch">
          {atelierCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = active === cat.id;
            return (
              <RevealItem key={cat.id}>
                <button
                  type="button"
                  onClick={() => setActive(isActive ? null : cat.id)}
                  aria-expanded={isActive}
                  className={`group yz-card-glow flex h-full w-full flex-col overflow-hidden rounded-2xl border bg-yz-surface/60 text-left transition duration-300 hover:-translate-y-1 ${
                    isActive
                      ? "border-yz-accent/60 -translate-y-1"
                      : "border-yz-border"
                  }`}
                >
                  <div className="relative h-48 shrink-0 overflow-hidden sm:h-52">
                    <Image
                      src={cat.image}
                      alt={t(`categories.${cat.id}.title`)}
                      fill
                      sizes="(max-width:768px) 100vw, 33vw"
                      className="object-cover object-center transition duration-500 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                    <span className="absolute bottom-4 left-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-yz-accent/20 text-yz-accent backdrop-blur">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="yz-display line-clamp-2 min-h-[3.25rem] text-2xl tracking-wide text-white">
                      {t(`categories.${cat.id}.title`)}
                    </h3>
                    <p className="mt-2 line-clamp-4 min-h-[5.5rem] text-sm leading-relaxed text-yz-muted">
                      {t(`categories.${cat.id}.short`)}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-xs font-semibold uppercase tracking-wider text-yz-accent">
                      {isActive ? t("collapse") : t("expand")}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          isActive ? "rotate-180" : ""
                        }`}
                        aria-hidden
                      />
                    </span>
                  </div>
                </button>
              </RevealItem>
            );
          })}
        </RevealStagger>

        <AnimatePresence initial={false} mode="wait">
          {active ? (
            <motion.div
              key={active}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <CategoryDetail id={active} />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function CategoryDetail({ id }: { id: AtelierCategoryId }) {
  const t = useTranslations("atelier");
  const category = atelierCategories.find((c) => c.id === id);
  if (!category) return null;

  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="mt-6 grid overflow-hidden rounded-3xl border border-yz-accent/25 bg-gradient-to-br from-yz-surface/70 via-yz-surface/40 to-yz-bg shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] lg:grid-cols-12"
    >
      <div className="relative min-h-[240px] overflow-hidden lg:col-span-5 lg:min-h-full">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={category.image}
            alt={t(`categories.${id}.title`)}
            fill
            sizes="(max-width:1024px) 100vw, 42vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/20 lg:bg-gradient-to-r lg:from-black/30 lg:via-black/60 lg:to-yz-bg" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:inset-0 lg:flex lg:flex-col lg:justify-end lg:p-10">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-yz-accent/15 text-yz-accent ring-1 ring-yz-accent/30 backdrop-blur">
            <Icon className="h-6 w-6" aria-hidden />
          </span>
          <h4 className="yz-display mt-4 text-3xl tracking-wide text-white sm:text-4xl">
            {t(`categories.${id}.title`)}
          </h4>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-zinc-300">
            {t(`categories.${id}.short`)}
          </p>
        </div>
      </div>

      <div className="p-6 sm:p-8 lg:col-span-7 lg:p-10">
        <motion.ul
          variants={listVariants}
          initial="hidden"
          animate="show"
          className="divide-y divide-yz-border/70"
        >
          {category.services.map((key, i) => (
            <motion.li
              key={key}
              variants={itemVariants}
              className="group flex gap-4 py-4 first:pt-0 last:pb-0 sm:gap-5"
            >
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-yz-accent/25 bg-yz-accent/10 text-sm font-bold text-yz-accent transition-colors duration-300 group-hover:bg-yz-accent group-hover:text-zinc-950">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h5 className="text-base font-semibold text-white transition-colors group-hover:text-yz-accent sm:text-lg">
                  {t(`categories.${id}.services.${key}.title`)}
                </h5>
                <p className="mt-1 text-sm leading-relaxed text-yz-muted">
                  {t(`categories.${id}.services.${key}.description`)}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        {category.shop ? (
          <MotionLink
            variants={itemVariants}
            initial="hidden"
            animate="show"
            href="/yzyshop"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-yz-accent px-6 py-3 text-sm font-semibold text-zinc-950 shadow-[0_0_30px_-5px_rgba(250,204,21,0.5)] transition-all duration-300 hover:bg-yellow-400 hover:shadow-[0_0_40px_-5px_rgba(250,204,21,0.65)] active:scale-[0.98]"
          >
            {t("categories.shop.cta")}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </MotionLink>
        ) : null}
      </div>
    </motion.div>
  );
}
