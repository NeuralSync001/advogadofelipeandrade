import Button from "./Button";
import { attorney } from "@/lib/data";

export default function AttorneyProfile() {
  return (
    <section id="advogado" className="bg-off-white text-text-dark py-24 md:py-[120px]">
      <div className="max-w-[1240px] mx-auto px-8 grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-10 md:gap-[70px] items-start">
        <div
          className="aspect-[3/4] photo-placeholder-light bg-[#e2d9c4] bg-cover bg-center border border-line-light"
          style={{ backgroundImage: `url(${attorney.photoUrl})` }}
          aria-label="Retrato demonstrativo de Felipe Andrade"
          role="img"
        >
        </div>
        <div>
          <span className="text-xs tracking-[0.14em] font-medium text-gold-deep">O ADVOGADO</span>
          <h2 className="mt-4 font-serif text-[clamp(26px,3.4vw,36px)] text-text-dark">
            {attorney.fullName}
          </h2>
          <div className="text-[13px] text-gold-deep mt-2">Advogado — {attorney.oab}</div>

          <div className="mt-6 space-y-4 max-w-[560px]">
            {attorney.bio.map((paragraph, i) => (
              <p key={i} className="text-[15.5px] leading-relaxed font-light text-text-dark-dim">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-7 gap-x-8">
            <Fact label="FORMAÇÃO" value={`${attorney.education}\n${attorney.university}`} />
            <Fact label="ESPECIALIZAÇÕES" value={attorney.specializations.join("\n")} />
            <Fact label="ÁREAS DE ATUAÇÃO" value={attorney.practiceAreas} />
            <Fact label="TRAJETÓRIA" value={attorney.experience} />
          </div>

          <Button href="#insights" light className="mt-9">
            Conheça minha trajetória
          </Button>
        </div>
      </div>
    </section>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10.5px] tracking-[0.1em] text-gold-deep mb-1.5">{label}</div>
      <div className="text-sm text-text-dark leading-relaxed whitespace-pre-line">{value}</div>
    </div>
  );
}
