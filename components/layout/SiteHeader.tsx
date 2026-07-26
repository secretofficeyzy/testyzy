"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CalendarCheck, Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";
import { Logo } from "@/components/layout/Logo";
import { Link, usePathname } from "@/lib/i18n/navigation";
import { bookingNav, mainNav } from "@/lib/nav";

function NavLink({
  href,
  label,
  active,
  onClick,
}: {
  href: string;
  label: string;
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
        active ? "text-yz-accent" : "text-yz-muted hover:text-white"
      }`}
    >
      {active ? (
        <motion.span
          layoutId="nav-pill"
          className="absolute inset-0 rounded-full border border-yz-accent/25 bg-yz-accent/10 shadow-[inset_0_1px_0_rgba(250,204,21,0.15)]"
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
        />
      ) : null}
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-white/[0.05] opacity-0 transition-all duration-300 group-hover:opacity-100"
      />
      <span className="relative z-10">{label}</span>
    </Link>
  );
}

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const tNav = useTranslations("nav");
  const tCommon = useTranslations("common");
  const reduce = useReducedMotion();

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 lg:px-6">
      <div
        className={`pointer-events-auto mx-auto max-w-6xl overflow-hidden rounded-2xl border transition-all duration-500 ease-out ${
          scrolled
            ? "border-yz-border/90 bg-yz-bg/92 shadow-[0_16px_48px_-12px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-2xl"
            : "border-white/[0.09] bg-yz-bg/55 shadow-[0_12px_40px_-14px_rgba(0,0,0,0.75),0_0_0_1px_rgba(250,204,21,0.06)] backdrop-blur-xl"
        }`}
      >
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-yz-accent/30 to-transparent" />

        <div className="relative flex h-14 items-center justify-between gap-3 px-3 sm:h-[3.75rem] sm:px-4 lg:px-5">
          <Logo />

          <nav
            className="hidden items-center gap-0.5 lg:flex"
            aria-label={tCommon("mainNav")}
          >
            {mainNav.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={tNav(link.key)}
                active={isActive(pathname, link.href)}
              />
            ))}
          </nav>

          <div className="hidden items-center gap-2.5 lg:flex">
            <LocaleSwitcher />
            <Link
              href={bookingNav.href}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-yz-accent px-4 py-2 text-sm font-semibold text-zinc-950 shadow-[0_0_24px_-4px_rgba(250,204,21,0.65)] transition-all duration-300 hover:scale-[1.02] hover:bg-yellow-400 hover:shadow-[0_0_32px_-2px_rgba(250,204,21,0.75)] active:scale-[0.98]"
            >
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              <CalendarCheck className="relative h-4 w-4" aria-hidden />
              <span className="relative">{tNav(bookingNav.key)}</span>
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LocaleSwitcher />
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-yz-border/70 bg-yz-surface/60 p-2.5 text-yz-text transition duration-300 hover:border-yz-accent/35 hover:bg-yz-surface"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? tCommon("closeMenu") : tCommon("openMenu")}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              id="mobile-menu"
              initial={reduce ? false : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-yz-border/60 lg:hidden"
            >
              <nav
                className="flex flex-col gap-1 px-3 py-3"
                aria-label={tCommon("mobileNav")}
              >
                {mainNav.map((link, index) => {
                  const active = isActive(pathname, link.href);
                  return (
                    <motion.div
                      key={link.href}
                      initial={reduce ? false : { opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04, duration: 0.22 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`block rounded-xl px-4 py-3 text-base font-medium transition duration-300 ${
                          active
                            ? "border border-yz-accent/25 bg-yz-accent/10 text-yz-accent"
                            : "text-yz-muted hover:bg-white/[0.04] hover:text-white"
                        }`}
                      >
                        {tNav(link.key)}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: mainNav.length * 0.04 + 0.04, duration: 0.22 }}
                  className="mt-1 px-1 pb-1"
                >
                  <Link
                    href={bookingNav.href}
                    onClick={() => setOpen(false)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-yz-accent px-4 py-3 text-base font-semibold text-zinc-950 transition duration-300 hover:bg-yellow-400 active:scale-[0.98]"
                  >
                    <CalendarCheck className="h-5 w-5" aria-hidden />
                    {tNav(bookingNav.key)}
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
