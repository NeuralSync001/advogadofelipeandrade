import { methodSteps } from "@/lib/data";

export default function Methodology() {
  return (
    <section className="wood-bg py-24 md:py-[130px]">
      <div className="relative z-10 max-w-[1240px] mx-auto px-8">
        <span className="block text-xs tracking-[0.14em] font-medium text-gold-soft mb-4">
          METODOLOGIA
        </span>
        <h2 className="font-serif font-medium leading-[1.08] text-[clamp(28px,4vw,44px)] max-w-xl text-off-white">
          Como funciona o <em className="italic font-normal text-gold-soft">atendimento.</em>
        </h2>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-9 md:gap-0">
          {methodSteps.map((step, i) => (
            <div
              key={step.number}
              className={`md:pr-6 ${
                i !== methodSteps.length - 1 ? "md:border-r md:border-line-dark" : ""
              }`}
            >
              <div className="font-serif italic text-2xl text-gold-soft">{step.number}</div>
              <div className="font-serif text-[17px] mt-3.5 text-off-white">{step.title}</div>
              <div className="text-[13px] text-off-white-dim mt-2 leading-relaxed font-light">
                {step.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
