"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/lib/i18n/navigation";
import { routing } from "@/lib/i18n/routing";

export function LocaleSwitcher({ className = "" }: { className?: string }) {
  const t = useTranslations("localeSwitcher");
  const pathname = usePathname();
  const router = useRouter();
  const active = useLocale();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-yz-border/90 bg-black/40 p-0.5 shadow-inner backdrop-blur-md ${className}`}
      role="group"
      aria-label={t("label")}
    >
      {routing.locales.map((loc) => {
        const isOn = loc === active;
        return (
          <button
            key={loc}
            type="button"
            onClick={() => router.replace(pathname, { locale: loc })}
            className={`min-w-9 rounded-full px-2.5 py-1.5 text-[11px] font-bold tracking-wider transition-all duration-300 md:min-w-10 md:px-3 ${
              isOn
                ? "bg-yz-accent text-zinc-950 shadow-[0_0_16px_-4px_rgba(250,204,21,0.6)]"
                : "text-yz-muted hover:bg-white/5 hover:text-white"
            }`}
          >
            {loc === "ro" ? t("ro") : t("ru")}
          </button>
        );
      })}
    </div>
  );
}
