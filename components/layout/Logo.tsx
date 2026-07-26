"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/navigation";

type Props = {
  className?: string;
};

export function Logo({ className = "" }: Props) {
  const t = useTranslations("logo");
  return (
    <Link
      href="/"
      className={`group inline-flex items-center transition duration-300 hover:drop-shadow-[0_0_12px_rgba(250,204,21,0.35)] ${className}`}
      aria-label={t("home")}
    >
      <img
        src="/logo.svg"
        alt=""
        width={52}
        height={52}
        className="h-12 w-auto shrink-0 object-contain transition-opacity group-hover:opacity-90 sm:h-[52px]"
        decoding="async"
        fetchPriority="high"
      />
    </Link>
  );
}
