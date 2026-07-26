"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Disc3, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import { images } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const MotionLink = motion.create(Link);

const hubCards = [
  {
    id: "merch" as const,
    href: "/yzyshop/merch",
    icon: ShoppingBag,
    image: images.wheelClose,
    glow: "rgba(250,204,21,0.35)",
  },
  {
    id: "pneu" as const,
    href: "/yzyshop/anvelope",
    icon: Disc3,
    image: images.tireBay,
    glow: "rgba(250,204,21,0.28)",
  },
];

export function YzyShopHub() {
  const t = useTranslations("shopPage");
  const reduce = useReducedMotion();

  return (
    <div className="border-t border-yz-border bg-yz-bg">
      <section className="relative min-h-[calc(100dvh-4.5rem)] overflow-hidden py-14 md:py-20 lg:py-24">
        <div className="yz-grid-bg pointer-events-none absolute inset-0 opacity-30" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(250,204,21,0.14),transparent_60%)]" />
        <div className="pointer-events-none absolute -left-32 top-1/3 h-64 w-64 rounded-full bg-yz-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-yz-accent/8 blur-3xl" />

        <div className="relative mx-auto flex min-h-[calc(100dvh-4.5rem-7rem)] max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
          <Reveal y={20} blur>
            <SectionHeading
              eyebrow={t("eyebrow")}
              title={t("title")}
              subtitle={t("hubSubtitle")}
              align="center"
              className="mx-auto max-w-2xl"
              titleClassName="text-[clamp(2.5rem,6vw,4.5rem)]"
            />
          </Reveal>

          <div className="mt-10 flex flex-1 flex-col justify-center gap-5 md:mt-14 md:gap-7 lg:grid lg:grid-cols-2 lg:gap-8">
            {hubCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.id} delay={0.08 + index * 0.1} y={24}>
                  <MotionLink
                    href={card.href}
                    className="group yz-card-glow relative flex min-h-[280px] flex-col overflow-hidden rounded-3xl border border-yz-border bg-yz-surface/40 sm:min-h-[320px] lg:min-h-[380px]"
                    whileHover={reduce ? undefined : { y: -6 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="absolute inset-0 overflow-hidden">
                      <Image
                        src={card.image}
                        alt={t(`hub.${card.id}.title`)}
                        fill
                        sizes="(max-width:1024px) 100vw, 50vw"
                        className="object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-110"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
                      <div
                        className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                        style={{
                          background: `radial-gradient(circle at 50% 100%, ${card.glow}, transparent 65%)`,
                        }}
                      />
                    </div>

                    <div className="relative flex flex-1 flex-col justify-end p-6 sm:p-8">
                      <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-yz-accent/30 bg-yz-accent/15 text-yz-accent backdrop-blur transition duration-300 group-hover:scale-105 group-hover:bg-yz-accent/25">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-yz-accent/90">
                        {t(`hub.${card.id}.eyebrow`)}
                      </p>
                      <h2 className="yz-display mt-2 text-3xl tracking-wide text-white sm:text-4xl">
                        {t(`hub.${card.id}.title`)}
                      </h2>
                      <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-300 sm:text-base">
                        {t(`hub.${card.id}.description`)}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-yz-accent transition duration-300 group-hover:gap-3">
                        {t("hub.explore")}
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </span>
                    </div>
                  </MotionLink>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
