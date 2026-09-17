import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { firmName } from "@/lib/data";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: `${firmName} — Advocacia`,
  description:
    "Atuação jurídica estratégica, personalizada e orientada à proteção dos seus interesses.",
  openGraph: {
    title: `${firmName} — Advocacia`,
    description:
      "Atuação jurídica estratégica, personalizada e orientada à proteção dos seus interesses.",
    type: "website",
    locale: "pt_BR",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
