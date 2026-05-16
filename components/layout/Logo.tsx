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
      className={`group inline-flex items-center ${className}`}
      aria-label={t("home")}
    >
      {/* img nativ: next/image + SVG e instabil pe iOS Safari */}
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
