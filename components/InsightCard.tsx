import Link from "next/link";
import { Insight } from "@/lib/types";

export default function InsightCard({ insight }: { insight: Insight }) {
  return (
    <Link href={`/insights/${insight.slug}`} className="group block">
      <div
        className="aspect-[16/9] overflow-hidden relative bg-graphite photo-placeholder bg-cover bg-center"
        style={{ backgroundImage: `url(${insight.imageUrl})` }}
        aria-label="Imagem demonstrativa do artigo"
        role="img"
      >
      </div>
      <div className="text-[11.5px] text-gold-soft tracking-wide mt-4">
        {insight.category.toUpperCase()}
      </div>
      <div className="font-serif text-[19px] mt-3 text-off-white group-hover:text-gold-soft transition-colors">
        {insight.title}
      </div>
      <p className="text-[13px] text-off-white-dim leading-relaxed mt-2 font-light">
        {insight.excerpt}
      </p>
    </Link>
  );
}
