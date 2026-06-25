"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import type { KeyboardEvent } from "react";
import { useCallback, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";

const BEFORE =
  "/photos/before.jpg";
const AFTER =
  "/photos/after.jpg";

export function BeforeAfterSection() {
  const t = useTranslations("beforeAfter");
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const position = useMotionValue(50);
  const smooth = useSpring(position, { stiffness: 320, damping: 38 });

  const clipPath = useTransform(smooth, (v) => `inset(0 ${100 - v}% 0 0)`);
  const handleLeft = useTransform(smooth, (v) => `${v}%`);

  const setFromClientX = useCallback(
    (clientX: number) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const pct = ((clientX - rect.left) / rect.width) * 100;
      position.set(Math.min(100, Math.max(0, pct)));
    },
    [position],
  );

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      setFromClientX(e.clientX);
    };
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [setFromClientX]);

  const onSliderKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        position.set(Math.max(0, position.get() - 4));
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        position.set(Math.min(100, position.get() + 4));
      }
    },
    [position],
  );

  return (
    <section className="relative border-y border-yz-border bg-[#030306] py-16 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yz-accent/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
          align="center"
          className="mb-0 max-w-3xl"
          titleClassName="text-5xl sm:text-6xl md:text-7xl"
        />
        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-yz-muted">
          {t("hint")}
        </p>
      </div>

      <div className="relative w-full px-0">
        <div className="relative mx-auto max-w-[100vw]">
          <div
            ref={containerRef}
            tabIndex={0}
            onKeyDown={onSliderKeyDown}
            className="relative mx-auto aspect-[16/10] w-full max-h-[min(72vh,780px)] cursor-ew-resize overflow-hidden border-y border-yz-border bg-black shadow-[0_0_80px_-20px_rgba(250,204,21,0.35)] select-none outline-none focus-visible:ring-2 focus-visible:ring-yz-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:aspect-[2/1] lg:max-w-6xl lg:rounded-sm lg:border lg:border-yz-border"
            onPointerDown={(e) => {
              dragging.current = true;
              setFromClientX(e.clientX);
            }}
            onPointerMove={(e) => {
              if (e.buttons === 1) setFromClientX(e.clientX);
            }}
            role="group"
            aria-label={`${t("before")} / ${t("after")}`}
          >
            <span className="pointer-events-none absolute left-4 top-4 z-30 rounded-md bg-black/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-yz-accent backdrop-blur-md">
              {t("after")}
            </span>
            <span className="pointer-events-none absolute right-4 top-4 z-30 rounded-md bg-black/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-300 backdrop-blur-md">
              {t("before")}
            </span>

            <Image
              src={AFTER}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority={false}
              aria-hidden
            />

            <motion.div className="absolute inset-0" style={{ clipPath }}>
              <Image
                src={BEFORE}
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
                aria-hidden
              />
            </motion.div>

            <motion.div
              className="pointer-events-none absolute bottom-0 top-0 z-10 w-px bg-yz-accent shadow-[0_0_32px_rgba(250,204,21,0.55)]"
              style={{ left: handleLeft, x: "-50%" }}
            />
            <motion.div
              className="pointer-events-none absolute top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-yz-accent bg-black/90 text-sm font-bold text-yz-accent shadow-xl backdrop-blur"
              style={{ left: handleLeft, x: "-50%" }}
              aria-hidden
            >
              ↔
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
