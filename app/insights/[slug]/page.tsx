import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import InsightCard from "@/components/InsightCard";
import { insights, firmName } from "@/lib/data";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const insight = insights.find((i) => i.slug === params.slug);
  if (!insight) return { title: `Insights — ${firmName}` };
  return {
    title: `${insight.title} — ${firmName}`,
    description: insight.excerpt,
    openGraph: {
      title: insight.title,
      description: insight.excerpt,
      type: "article",
    },
  };
}

export default function InsightArticlePage({ params }: PageProps) {
  const insight = insights.find((i) => i.slug === params.slug);
  if (!insight) notFound();

  const related = insights.filter((i) => i.slug !== insight.slug).slice(0, 2);

  return (
    <>
      <Header />
      <main className="bg-ink-black min-h-screen pt-[150px] pb-24">
        <article className="max-w-[760px] mx-auto px-8">
          <div className="text-[11.5px] text-gold-soft tracking-wide">
            {insight.category.toUpperCase()}
          </div>
          <h1 className="mt-4 font-serif text-[clamp(30px,4.6vw,46px)] leading-[1.1] text-off-white">
            {insight.title}
          </h1>
          <p className="mt-4 text-[17px] font-light text-off-white-dim">{insight.subtitle}</p>

          <div className="flex items-center gap-3.5 mt-7 text-[12.5px] text-off-white-dim">
            <span>{insight.author}</span>
            <span className="w-[3px] h-[3px] bg-off-white-dim rounded-full" />
            <span>{insight.date}</span>
            <span className="w-[3px] h-[3px] bg-off-white-dim rounded-full" />
            <span>{insight.readTime}</span>
          </div>

          <div
            className="aspect-[16/9] mt-10 bg-graphite photo-placeholder relative bg-cover bg-center"
            style={{ backgroundImage: `url(${insight.imageUrl})` }}
            aria-label="Imagem principal demonstrativa do artigo"
            role="img"
          >
          </div>

          <div className="mt-10 space-y-6">
            {insight.content.map((paragraph, i) => (
              <p key={i} className="text-[16px] leading-relaxed font-light text-off-white-dim">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-14 pt-8 border-t border-line-dark">
            <Link
              href="#contato-final"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-medium rounded-sm border border-gold bg-gold text-ink-black hover:bg-gold-soft hover:border-gold-soft transition-colors"
            >
              Fale com um advogado sobre este tema
            </Link>
          </div>
        </article>

        {related.length > 0 && (
          <div className="max-w-[1240px] mx-auto px-8 mt-24">
            <div className="text-xs tracking-[0.14em] font-medium text-gold-soft mb-8">
              LEIA TAMBÉM
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {related.map((r) => (
                <InsightCard key={r.slug} insight={r} />
              ))}
            </div>
          </div>
        )}

        <div className="max-w-[1240px] mx-auto px-8 mt-16">
          <Link href="/insights" className="text-[13px] text-gold-soft">
            ← Ver todos os insights
          </Link>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
