import Link from "next/link";
import { contactInfo, firmName } from "@/lib/data";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#areas", label: "Áreas de atuação" },
  { href: "#advogado", label: "O advogado" },
  { href: "#insights", label: "Insights" },
  { href: "#contato", label: "Contato" },
];

export default function Footer() {
  return (
    <footer className="bg-ink-black pt-24 border-t border-line-dark">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-9 sm:gap-12 pb-16">
          <div>
            <div className="font-serif text-xl text-off-white">
              {firmName} <span className="italic text-gold-soft">Advocacia</span>
            </div>
            <p className="text-[13.5px] text-off-white-dim mt-4 max-w-[280px] leading-relaxed font-light">
              Atuação jurídica estratégica, personalizada e orientada à
              proteção dos seus interesses.
            </p>
          </div>

          <div>
            <div className="text-[11px] tracking-[0.1em] text-gold-soft mb-4">NAVEGAÇÃO</div>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-[13.5px] text-off-white-dim mb-3 hover:text-off-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div>
            <div className="text-[11px] tracking-[0.1em] text-gold-soft mb-4">CONTATO</div>
            <div className="text-[13.5px] text-off-white-dim mb-3">{contactInfo.phone}</div>
            <div className="text-[13.5px] text-off-white-dim mb-3">{contactInfo.email}</div>
            <div className="text-[13.5px] text-off-white-dim mb-3">{contactInfo.whatsapp}</div>
            <div className="text-[13.5px] text-off-white-dim mb-3">{contactInfo.address}</div>
          </div>
        </div>

        <div className="border-t border-line-dark py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-off-white/40">
          <span>© 2026 {firmName}. OAB/SP 000000. Todos os direitos reservados.</span>
          <div className="flex gap-5">
            <Link href="/privacidade" className="hover:text-off-white-dim transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="hover:text-off-white-dim transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
