"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { practiceAreas } from "@/lib/data";

export default function PracticeAreas() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="areas" className="bg-ink-black py-24 md:py-[120px]">
      <div className="max-w-[1240px] mx-auto px-8">
        <SectionHeading eyebrow="ÁREAS DE ATUAÇÃO" title="Onde podemos" emphasis="ajudar." />

        <div className="mt-14 border-t border-line-dark">
          {practiceAreas.map((area, i) => {
            const open = openIndex === i;
            return (
              <div
                key={area.number}
                role="button"
                tabIndex={0}
                onClick={() => setOpenIndex(open ? null : i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setOpenIndex(open ? null : i);
                  }
                }}
                className="grid grid-cols-[70px_1fr_40px] items-center gap-6 py-7 border-b border-line-dark cursor-pointer group"
              >
                <div className="font-serif italic text-gold-soft text-base">{area.number}</div>
                <div>
                  <div className="font-serif text-[clamp(20px,2.6vw,28px)] text-off-white group-hover:text-gold-soft transition-colors">
                    {area.name}
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-editorial text-[14.5px] font-light text-off-white-dim leading-relaxed max-w-[560px] ${
                      open ? "max-h-32 opacity-100 mt-3" : "max-h-0 opacity-0"
                    }`}
                  >
                    {area.description}
                  </div>
                </div>
                <div
                  className={`justify-self-end text-gold-soft text-lg transition-transform duration-500 ease-editorial ${
                    open ? "rotate-45" : ""
                  }`}
                >
                  +
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
