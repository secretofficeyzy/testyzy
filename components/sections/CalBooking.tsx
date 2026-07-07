"use client";

import { useEffect } from "react";
import { calcomLink } from "@/lib/site";

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    Cal?: any;
  }
}

export function CalBooking() {
  useEffect(() => {
    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function (...args: any[]) {
          const cal = C.Cal;
          const ar = args;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: any = function (...a: any[]) {
              p(api, a);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else {
              p(cal, ar);
            }
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    const Cal = window.Cal;
    if (!Cal) return;

    Cal("init", { origin: "https://cal.com" });
    Cal("inline", {
      elementOrSelector: "#yzy-cal-inline",
      calLink: calcomLink,
      layout: "month_view",
      config: { theme: "dark" },
    });
    Cal("ui", {
      theme: "dark",
      cssVarsPerTheme: {
        dark: { "cal-brand": "#facc15" },
      },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return (
    <div
      id="yzy-cal-inline"
      className="min-h-[640px] w-full overflow-hidden rounded-2xl border border-yz-border bg-yz-surface/40"
    />
  );
}
