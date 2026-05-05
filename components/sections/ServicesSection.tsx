import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/lib/i18n/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/services-data";

/** Preview acasă: 4 servicii, grid simplu — ca layout-ul inițial. */
const HOME_PREVIEW = 4;

export async function ServicesSection() {
  const t = await getTranslations("servicesPreview");
  const tSvc = await getTranslations("servicesList");
  const tCommon = await getTranslations("common");
  const preview = services.slice(0, HOME_PREVIEW);

  return (
    <section className="border-t border-yz-border bg-yz-bg py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
          align="center"
          className="mb-10 md:mb-14"
          titleClassName="text-[clamp(2rem,4.5vw,3.5rem)] md:text-5xl lg:text-6xl"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {preview.map((s, i) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.id}
                href="/servicii"
                className="group yz-card-glow relative block overflow-hidden rounded-2xl border border-yz-border bg-yz-surface/60 transition duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={tSvc(`${s.id}.imageAlt`)}
                    fill
                    sizes="(max-width:768px) 100vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-yz-accent/20 text-yz-accent backdrop-blur">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="yz-display text-2xl tracking-wide text-white">
                    {tSvc(`${s.id}.title`)}
                  </h3>
                  <p className="mt-2 text-sm text-yz-muted">{tSvc(`${s.id}.short`)}</p>
                  <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-wider text-yz-accent opacity-0 transition-opacity group-hover:opacity-100">
                    {tCommon("details")} →
                  </span>
                </div>
                <span className="sr-only">
                  {i + 1} / {preview.length}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 text-center md:mt-14">
          <Link
            href="/servicii"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-yz-accent transition hover:text-yellow-300"
          >
            {tCommon("allServices")}
          </Link>
        </div>
      </div>
    </section>
  );
}
