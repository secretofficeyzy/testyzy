"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck, Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";
import { Logo } from "@/components/layout/Logo";
import { Link, usePathname } from "@/lib/i18n/navigation";
import { bookingNav, mainNav } from "@/lib/nav";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const tNav = useTranslations("nav");
  const tCommon = useTranslations("common");

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-yz-border/80 bg-yz-bg/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <Logo />

        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label={tCommon("mainNav")}
        >
          {mainNav.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href ||
                  pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-yz-accent"
                    : "text-yz-muted hover:text-white"
                }`}
              >
                {tNav(link.key)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex lg:gap-3">
          <LocaleSwitcher />
          <Link
            href={bookingNav.href}
            className="group inline-flex items-center gap-2 rounded-lg bg-yz-accent px-4 py-2 text-sm font-semibold text-zinc-950 shadow-[0_0_30px_-5px_rgba(250,204,21,0.5)] transition-all duration-300 hover:bg-yellow-400 hover:shadow-[0_0_40px_-5px_rgba(250,204,21,0.65)] active:scale-[0.98]"
          >
            <CalendarCheck className="h-4 w-4" aria-hidden />
            {tNav(bookingNav.key)}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LocaleSwitcher />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-yz-text"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? tCommon("closeMenu") : tCommon("openMenu")}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-yz-border bg-yz-bg lg:hidden"
          >
            <nav
              className="flex flex-col gap-1 px-4 py-4"
              aria-label={tCommon("mobileNav")}
            >
              {mainNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-3 text-base font-medium text-yz-muted hover:bg-yz-surface hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {tNav(link.key)}
                </Link>
              ))}
              <Link
                href={bookingNav.href}
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-yz-accent px-4 py-3 text-base font-semibold text-zinc-950 transition hover:bg-yellow-400"
              >
                <CalendarCheck className="h-5 w-5" aria-hidden />
                {tNav(bookingNav.key)}
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
