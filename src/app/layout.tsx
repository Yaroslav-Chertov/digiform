import type { Metadata } from "next";
import "./globals.scss";

const siteUrl = "https://digiform.ru";
const siteName = "Digiform";
const title = "Digiform — диджитал креативное агентство полного цикла";
const description =
  "Digiform — диджитал креативное агентство с 15-летним опытом и технологическим подходом к маркетингу.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Digiform",
  },
  description,
  keywords: [
    "digital-агентство",
    "маркетинг на данных",
    "performance-маркетинг",
    "digital-маркетинг",
    "Digiform",
  ],
  authors: [{ name: "Digiform" }],
  creator: "Digiform",
  publisher: "Digiform",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName,
    title,
    description,
    images: [
      {
        url: "/images/og-cover.png",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-cover.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link
          rel="preload"
          href="/fonts/Onest-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Onest-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
