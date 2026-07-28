import { Mail, MapPin, Phone } from "lucide-react";
import { business, phoneHref } from "@/lib/site";

type Props = {
  variant?: "default" | "compact";
  align?: "start" | "center";
};

export function BusinessContactList({
  variant = "default",
  align = "start",
}: Props) {
  const compact = variant === "compact";
  const centered = align === "center";
  const icon = compact
    ? "mt-0.5 h-4 w-4 shrink-0 text-yz-accent"
    : "mt-0.5 h-5 w-5 shrink-0 text-yz-accent";
  const gap = compact ? "space-y-3" : "space-y-4";
  const rowGap = compact ? "gap-2" : "gap-3";

  return (
    <ul
      className={`${gap} text-yz-muted ${centered ? "mx-auto w-fit text-center" : ""}`}
    >
      <li className={`flex ${rowGap} ${centered ? "items-center justify-center" : ""}`}>
        <MapPin className={icon} aria-hidden />
        <span>{business.address}</span>
      </li>
      {business.phones.map((phone) => (
        <li
          key={phone}
          className={`flex ${rowGap} ${centered ? "items-center justify-center" : ""}`}
        >
          <Phone className={icon} aria-hidden />
          <a href={phoneHref(phone)} className="hover:text-white">
            {phone}
          </a>
        </li>
      ))}
      <li className={`flex ${rowGap} ${centered ? "items-center justify-center" : ""}`}>
        <Mail className={icon} aria-hidden />
        <a href={`mailto:${business.email}`} className="hover:text-white">
          {business.email}
        </a>
      </li>
    </ul>
  );
}
