import Link from "next/link";
import { Insight } from "@/lib/types";

export default function FeaturedInsight({ insight }: { insight: Insight }) {
  return (
    <Link href={`/insights/${insight.slug}`} className="group block">
      <div
        className="aspect-[16/10] overflow-hidden relative bg-graphite photo-placeholder bg-cover bg-center"
        style={{ backgroundImage: `url(${insight.imageUrl})` }}
        aria-label="Imagem de capa demonstrativa do artigo"
        role="img"
      >
      </div>
      <div className="flex items-center gap-3.5 mt-6 text-[11.5px] text-gold-soft tracking-wide">
        <span>{insight.category.toUpperCase()}</span>
        <span className="w-[3px] h-[3px] bg-off-white-dim rounded-full" />
        <span>{insight.date}</span>
        <span className="w-[3px] h-[3px] bg-off-white-dim rounded-full" />
        <span>{insight.readTime}</span>
      </div>
      <div className="font-serif text-[26px] mt-3.5 text-off-white group-hover:text-gold-soft transition-colors">
        {insight.title}
      </div>
      <p className="text-sm text-off-white-dim leading-relaxed mt-2.5 font-light max-w-[480px]">
        {insight.excerpt}
      </p>
      <div className="inline-flex items-center gap-1.5 text-[13px] text-gold-soft mt-4">
        Leia o artigo
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </div>
    </Link>
  );
}
