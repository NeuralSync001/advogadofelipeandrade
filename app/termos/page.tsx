import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { firmName } from "@/lib/data";

export const metadata: Metadata = {
  title: `Termos de Uso — ${firmName}`,
};

export default function TermosPage() {
  return (
    <>
      <Header />
      <main className="bg-off-white text-text-dark min-h-screen pt-[150px] pb-24">
        <div className="max-w-[760px] mx-auto px-8">
          <h1 className="font-serif text-[clamp(28px,4vw,40px)] text-text-dark">
            Termos de Uso
          </h1>
          <p className="mt-6 text-[15.5px] leading-relaxed font-light text-text-dark-dim">
            O conteúdo deste site tem finalidade informativa e não substitui uma
            análise jurídica individualizada. O envio de uma mensagem pelo
            formulário não cria, por si só, uma relação profissional entre o
            visitante e o escritório.
            <br /><br />
            Textos, marcas e materiais deste site não devem ser reproduzidos sem
            autorização. As informações podem ser atualizadas para refletir
            mudanças na atuação do escritório. Estes termos são demonstrativos e
            devem ser revisados antes da publicação.
          </p>
          <Link href="/" className="inline-block mt-10 text-[13px] text-gold-deep">
            ← Voltar para a página inicial
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
