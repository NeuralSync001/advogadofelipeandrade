import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import InsightCard from "@/components/InsightCard";
import { insights, firmName } from "@/lib/data";

export const metadata: Metadata = {
  title: `Insights — ${firmName}`,
  description: "Conteúdo jurídico e informação que orienta.",
};

export default function InsightsPage() {
  return (
    <>
      <Header />
      <main className="bg-ink-black min-h-screen pt-[150px] pb-24">
        <div className="max-w-[1240px] mx-auto px-8">
          <span className="text-xs tracking-[0.14em] font-medium text-gold-soft">
            INSIGHTS
          </span>
          <h1 className="mt-4 font-serif font-medium leading-[1.08] text-[clamp(28px,4vw,44px)] text-off-white max-w-xl">
            Informação que <em className="italic font-normal text-gold-soft">orienta.</em>
          </h1>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {insights.map((insight) => (
              <InsightCard key={insight.slug} insight={insight} />
            ))}
          </div>

          <div className="mt-16">
            <Link href="/" className="text-[13px] text-gold-soft">
              ← Voltar para a página inicial
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
