import Button from "./Button";
import AttorneyFlipCard from "./AttorneyFlipCard";
import { attorney } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-[150px] pb-24"
      style={{
        background:
          "radial-gradient(ellipse at 78% 20%, rgba(198,161,91,0.06), transparent 55%), linear-gradient(150deg, #14120f 0%, #0a0908 60%, #1a120c 130%)",
      }}
    >
      <div className="max-w-[1240px] mx-auto px-8 grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-14 md:gap-16 items-center">
        <div>
          <span className="block text-xs tracking-[0.14em] font-medium text-gold-soft mb-5">
            ADVOCACIA
          </span>
          <h1 className="font-serif font-medium leading-[1.08] text-[clamp(38px,5.4vw,64px)] text-off-white tracking-tight">
            {attorney.fullName}
            <br />
            <em className="italic font-normal text-gold-soft">advocacia estratégica.</em>
          </h1>
          <p className="mt-6 mb-9 max-w-[440px] text-[16px] leading-relaxed font-light text-off-white-dim">
            Atuação jurídica estratégica, personalizada e orientada à proteção
            dos seus interesses — com clareza em cada etapa do processo.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button href="#contato" variant="solid">Fale conosco</Button>
            <Button href="#areas">Conheça nossa atuação</Button>
          </div>
        </div>

        <AttorneyFlipCard />
      </div>
    </section>
  );
}
