import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { firmName } from "@/lib/data";

export const metadata: Metadata = {
  title: `Política de Privacidade — ${firmName}`,
};

export default function PrivacidadePage() {
  return (
    <>
      <Header />
      <main className="bg-off-white text-text-dark min-h-screen pt-[150px] pb-24">
        <div className="max-w-[760px] mx-auto px-8">
          <h1 className="font-serif text-[clamp(28px,4vw,40px)] text-text-dark">
            Política de Privacidade
          </h1>
          <p className="mt-6 text-[15.5px] leading-relaxed font-light text-text-dark-dim">
            Esta política apresenta, de forma resumida, como o escritório Fernando
            Andrade trata os dados enviados por este site. As informações são
            usadas apenas para responder solicitações, agendar atendimentos e
            prestar os esclarecimentos pedidos pelo visitante.
            <br /><br />
            O escritório adota medidas razoáveis de segurança e não comercializa
            dados pessoais. O titular pode solicitar informações, correções ou
            exclusão dos dados pelo e-mail contato@fernandoandrade.adv.br. Este
            texto é uma versão demonstrativa e deve ser revisado antes da publicação.
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
