"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { firmName } from "@/lib/data";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#areas", label: "Áreas de atuação" },
  { href: "#advogado", label: "O advogado" },
  { href: "#insights", label: "Insights" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-400 border-b ${
          scrolled
            ? "py-4 bg-ink-black/80 backdrop-blur-md border-line-dark"
            : "py-6 border-transparent"
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-8 flex items-center justify-between">
          <Link href="#hero" className="font-serif text-[19px] text-off-white">
            {firmName} <span className="italic text-gold-soft">Advocacia</span>
          </Link>

          <nav
            aria-label="Navegação principal"
            className="hidden md:flex items-center gap-9"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13.5px] text-off-white-dim relative py-1 hover:text-off-white transition-colors group"
              >
                {link.label}
                <span className="absolute left-0 right-0 bottom-0 h-px bg-gold-soft scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <a
              href="#contato"
              className="hidden md:inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-medium rounded-sm border border-goldline text-off-white hover:border-off-white transition-colors"
            >
              Fale conosco
            </a>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="md:hidden relative w-[30px] h-[22px]"
            >
              <span
                className={`absolute left-0 right-0 h-px bg-off-white transition-transform duration-300 ${
                  menuOpen ? "top-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 right-0 top-1/2 h-px bg-off-white transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 right-0 h-px bg-off-white transition-transform duration-300 ${
                  menuOpen ? "top-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[99] bg-ink-black flex flex-col justify-center px-8 transition-transform duration-500 md:hidden ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="font-serif text-3xl py-3.5 border-b border-line-dark text-off-white"
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
