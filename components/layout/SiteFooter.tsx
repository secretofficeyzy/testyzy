import { getTranslations } from "next-intl/server";
import { BusinessContactList } from "@/components/business/BusinessContactList";
import { Logo } from "@/components/layout/Logo";
import { Link } from "@/lib/i18n/navigation";
import { mainNav } from "@/lib/nav";
import { business, siteName, socialLinks } from "@/lib/site";

export async function SiteFooter() {
  const year = new Date().getFullYear();
  const t = await getTranslations("footer");
  const tNav = await getTranslations("nav");

  return (
    <footer className="border-t border-yz-border bg-yz-elevated">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="lg:col-span-1 lg:pr-4">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-yz-muted md:text-[15px]">
              {t("tagline")}
            </p>
          </div>
          <div className="md:pl-2 lg:pl-0">
            <h3 className="yz-display text-xl tracking-wide text-white">
              {t("links")}
            </h3>
            <ul className="mt-5 space-y-2.5">
              {mainNav.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-yz-muted transition-colors hover:text-yz-accent"
                  >
                    {tNav(l.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="yz-display text-xl tracking-wide text-white">
              {t("contact")}
            </h3>
            <div className="mt-5 text-sm text-yz-muted">
              <BusinessContactList variant="compact" />
            </div>
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="yz-display text-xl tracking-wide text-white">
              {t("social")}
            </h3>
            <ul className="mt-5 space-y-2">
              {socialLinks.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-yz-muted hover:text-yz-accent"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs leading-relaxed text-zinc-600">
              {business.hours}
            </p>
          </div>
        </div>
        <div className="mt-14 border-t border-yz-border pt-10 text-center">
          <p className="text-xs text-zinc-600">
            © {year} {siteName}. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
