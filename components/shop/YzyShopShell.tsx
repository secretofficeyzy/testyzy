import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Link } from "@/lib/i18n/navigation";

type YzyShopShellProps = {
  backLabel: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  badge?: ReactNode;
  children: ReactNode;
  footerNote?: string;
};

export function YzyShopShell({
  backLabel,
  eyebrow,
  title,
  subtitle,
  badge,
  children,
  footerNote,
}: YzyShopShellProps) {
  return (
    <div className="border-t border-yz-border bg-yz-bg">
      <section className="relative overflow-hidden py-10 md:py-14 lg:py-16 yz-page-hero">
        <div className="yz-grid-bg pointer-events-none absolute inset-0 opacity-25" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(250,204,21,0.1),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Link
              href="/yzyshop"
              className="inline-flex items-center gap-2 text-sm font-medium text-yz-muted transition hover:text-yz-accent"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              {backLabel}
            </Link>
          </Reveal>
          <Reveal delay={0.05} className="mt-10 sm:mt-12">
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              subtitle={subtitle}
              align="center"
              className="mx-auto max-w-2xl"
              titleClassName="text-4xl md:text-5xl lg:text-6xl"
            />
          </Reveal>
          {badge ? (
            <Reveal delay={0.1} className="mx-auto mt-6 flex max-w-xl justify-center">
              {badge}
            </Reveal>
          ) : null}
        </div>
      </section>

      <section className="border-t border-yz-border pb-20 pt-8 md:pb-28 md:pt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal delay={0.08}>{children}</Reveal>
          {footerNote ? (
            <Reveal delay={0.12} className="mt-12 rounded-2xl border border-yz-border bg-yz-surface/40 p-5 text-center sm:p-6">
              <p className="text-sm text-yz-muted sm:text-base">{footerNote}</p>
            </Reveal>
          ) : null}
        </div>
      </section>
    </div>
  );
}
