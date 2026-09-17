import SectionHeading from "./SectionHeading";
import FeaturedInsight from "./FeaturedInsight";
import InsightCard from "./InsightCard";
import Button from "./Button";
import { insights } from "@/lib/data";

export default function InsightsSection() {
  const [featured, ...rest] = insights;

  return (
    <section id="insights" className="bg-ink-black py-24 md:py-[120px]">
      <div className="max-w-[1240px] mx-auto px-8">
        <SectionHeading eyebrow="INSIGHTS" title="Informação que" emphasis="orienta." />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10">
          <FeaturedInsight insight={featured} />
          <div className="flex flex-col gap-9">
            {rest.map((insight) => (
              <InsightCard key={insight.slug} insight={insight} />
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <Button href="/insights">Ver todos os insights →</Button>
        </div>
      </div>
    </section>
  );
}
