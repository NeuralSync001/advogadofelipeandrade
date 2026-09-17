"use client";

import { useState } from "react";
import Link from "next/link";
import { attorney } from "@/lib/data";

/**
 * Interactive front/back card presenting the attorney.
 * Desktop: click to flip. Mobile: tap to flip (no hover dependency).
 * Fully keyboard accessible (Enter / Space toggles the flip).
 */
export default function AttorneyFlipCard() {
  const [flipped, setFlipped] = useState(false);

  const toggle = () => setFlipped((v) => !v);

  return (
    <div className="perspective-1800 w-full max-w-[400px] mx-auto">
      <div
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label="Cartão do advogado. Pressione Enter para conhecer o perfil."
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
        className={`relative w-full aspect-[3/4] preserve-3d transition-transform duration-700 ease-editorial cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-soft focus-visible:outline-offset-[6px] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* FRONT */}
        <div
          className="card-face absolute inset-0 backface-hidden border border-goldline overflow-hidden flex flex-col bg-cover bg-center"
          style={{ backgroundImage: `url(${attorney.photoUrl})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-black/90" />
          <div className="relative z-10 mt-auto px-6 pb-5 pt-6">
            <div className="font-serif text-[22px] text-off-white">{attorney.fullName}</div>
            <div className="text-[12.5px] text-gold-soft mt-1.5 tracking-wide">
              Advogado &middot; {attorney.oab}
            </div>
            <div className="flex items-center gap-2 mt-4 text-[11.5px] text-off-white-dim">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-[13px] h-[13px]">
                <path d="M3 12a9 9 0 1 0 3-6.7M3 4v5h5" />
              </svg>
              Toque para conhecer
            </div>
          </div>
        </div>

        {/* BACK */}
        <div className="card-face absolute inset-0 backface-hidden [transform:rotateY(180deg)] border border-goldline overflow-y-auto px-7 py-8 bg-gradient-to-br from-wood-2 to-ink-black">
          <div className="font-serif text-xl text-off-white">{attorney.fullName}</div>
          <div className="text-xs text-gold-soft mt-1.5 mb-5">Advogado — {attorney.oab}</div>

          <FieldGroup label="FORMAÇÃO" value={`${attorney.education}\n${attorney.university}`} />
          <FieldGroup label="ESPECIALIZAÇÕES" value={attorney.specializations.join("\n")} />
          <FieldGroup label="ATUAÇÃO" value={attorney.practiceAreas} />
          <FieldGroup label="EXPERIÊNCIA" value={attorney.experience} />

          <Link
            href="#advogado"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-[12.5px] text-gold-soft mt-3"
          >
            Ver perfil completo →
          </Link>
        </div>
      </div>
    </div>
  );
}

function FieldGroup({ label, value }: { label: string; value: string }) {
  return (
    <div className="mb-4">
      <div className="text-[10.5px] tracking-[0.1em] text-off-white/45 mb-1">{label}</div>
      <div className="text-[13.5px] text-off-white-dim leading-relaxed whitespace-pre-line">
        {value}
      </div>
    </div>
  );
}
