"use client";

import Image from "next/image";
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
      <span className="relative h-12 w-12 shrink-0 sm:h-[52px] sm:w-[52px]">
        <Image
          src="/logo.svg"
          alt=""
          width={52}
          height={52}
          className="h-full w-full object-contain transition-opacity group-hover:opacity-90"
          priority
        />
      </span>
    </Link>
  );
}
