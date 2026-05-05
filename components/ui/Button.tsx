import { Link } from "@/lib/i18n/navigation";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<
  Variant,
  string
> = {
  primary:
    "bg-yz-accent text-zinc-950 font-semibold shadow-[0_0_30px_-5px_rgba(250,204,21,0.5)] hover:bg-yellow-400 hover:shadow-[0_0_40px_-5px_rgba(250,204,21,0.65)]",
  secondary:
    "border border-yz-accent/40 bg-yz-surface/80 text-yz-text backdrop-blur hover:border-yz-accent hover:bg-yz-surface",
  ghost:
    "text-yz-muted hover:text-yz-accent border border-transparent hover:border-yz-border",
};

type ButtonProps = ComponentProps<"button"> & {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm transition-all duration-300 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-all duration-300 active:scale-[0.98] ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
