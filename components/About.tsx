import SectionHeading from "./SectionHeading";
import { officeImageUrl } from "@/lib/data";

export default function About() {
  return (
    <section id="sobre" className="bg-off-white text-text-dark py-24 md:py-[120px]">
      <div className="max-w-[1240px] mx-auto px-8 grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-[70px] items-start">
        <div
          className="aspect-[4/5] photo-placeholder-light bg-[#e2d9c4] bg-cover bg-center border border-line-light"
          style={{ backgroundImage: `url(${officeImageUrl})` }}
          aria-label="Ambiente demonstrativo de escritório"
          role="img"
        >
        </div>
        <div>
          <SectionHeading
            eyebrow="SOBRE"
            title="Uma atuação construída sobre"
            emphasis="confiança."
            light
          />
          <div className="mt-7 space-y-5 max-w-[560px]">
            <p className="text-[16px] leading-relaxed font-light text-text-dark-dim">
              O escritório Fernando Andrade foi pensado para oferecer orientação
              jurídica próxima, clara e estratégica, com atenção aos detalhes
              que fazem diferença em cada decisão.
            </p>
            <p className="text-[16px] leading-relaxed font-light text-text-dark-dim">
              O atendimento combina escuta cuidadosa, análise técnica e
              comunicação transparente para que cada cliente compreenda suas
              opções e participe dos próximos passos com segurança.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
