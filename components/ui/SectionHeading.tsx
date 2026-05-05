import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  children?: ReactNode;
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  children,
  className = "",
  titleClassName = "",
}: Props) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignClass} mb-12 md:mb-16 ${className}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-yz-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`yz-display text-4xl tracking-wide text-white md:text-5xl lg:text-6xl ${titleClassName}`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-lg text-yz-muted md:text-xl">{subtitle}</p>
      ) : null}
      {children}
    </div>
  );
}
