import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Margem Advocacia — Direito com perspectiva",
  description:
    "Orientação jurídica criteriosa, com atenção ao que está em jogo e às pessoas por trás de cada decisão.",
  openGraph: {
    title: "Margem Advocacia — Direito com perspectiva",
    description:
      "Advocacia para empresas e pessoas, com análise individual e atendimento personalizado.",
    type: "website",
    locale: "pt_BR",
  },
  icons: { icon: "/margem-mark.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
