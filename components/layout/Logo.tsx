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
      className={`group flex items-center gap-2 ${className}`}
      aria-label={t("home")}
    >
      <span className="relative h-9 w-9 shrink-0">
        <Image
          src="/logo.svg"
          alt=""
          width={36}
          height={36}
          className="transition-opacity group-hover:opacity-90"
          priority
        />
      </span>
      <span className="yz-display text-2xl tracking-[0.12em] text-white">
        YZY{" "}
        <span className="text-yz-accent drop-shadow-[0_0_12px_rgba(250,204,21,0.35)]">
          WHEELS
        </span>
      </span>
    </Link>
  );
}
