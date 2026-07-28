import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./lib/i18n/request.ts");

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/programare",
        destination: "/",
        permanent: true,
      },
      {
        source: "/ru/programare",
        destination: "/ru",
        permanent: true,
      },
    ];
  },
  images: {
    localPatterns: [
      {
        pathname: "/photos/**",
      },
      {
        pathname: "/logo.svg",
      },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
