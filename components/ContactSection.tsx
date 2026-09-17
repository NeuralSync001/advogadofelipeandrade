"use client";

import { FormEvent, useState } from "react";
import { contactInfo } from "@/lib/data";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });

      if (!response.ok) throw new Error("Falha ao enviar mensagem");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contato" className="wood-bg py-24 md:py-[120px] text-off-white">
      <div className="relative z-10 max-w-[1240px] mx-auto px-8 grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-12 md:gap-[70px] items-start">
        <div>
          <span className="text-xs tracking-[0.14em] font-medium text-gold-soft">CONTATO</span>
          <h2 className="mt-4 font-serif font-medium leading-[1.08] text-[clamp(28px,4vw,44px)] text-off-white">
            Vamos <em className="italic font-normal text-gold-soft">conversar.</em>
          </h2>
          <p className="mt-5 text-[16px] font-light text-off-white-dim max-w-[440px]">
            Conte-nos brevemente sobre sua necessidade.
          </p>

          <div className="mt-11 space-y-6">
            <InfoItem label="TELEFONE" value={contactInfo.phone} />
            <InfoItem label="E-MAIL" value={contactInfo.email} />
            <InfoItem label="ENDEREÇO" value={contactInfo.address} />
            <InfoItem label="HORÁRIO DE ATENDIMENTO" value={contactInfo.hours} />
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Field label="Nome" id="nome" name="nome" required autoComplete="name" />
            <Field label="E-mail" id="email" name="email" type="email" required autoComplete="email" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <Field label="Telefone" id="telefone" name="telefone" type="tel" autoComplete="tel" />
            <Field label="Assunto" id="assunto" name="assunto" />
          </div>
          <div className="mt-6">
            <label htmlFor="mensagem" className="block text-xs text-off-white-dim mb-2">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={4}
              required
              className="w-full bg-transparent border-0 border-b border-line-dark text-off-white text-[15px] py-2.5 focus:outline-none focus:border-gold-soft transition-colors"
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-7 inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-medium rounded-sm border border-gold bg-gold text-ink-black hover:bg-gold-soft hover:border-gold-soft transition-colors disabled:opacity-70"
          >
            {status === "sending" ? "Enviando..." : "Enviar mensagem"}
          </button>
          <div
            role="status"
            aria-live="polite"
            className={`mt-3.5 text-[13px] min-h-[18px] ${
              status === "error" ? "text-[#d98a6b]" : "text-gold-soft"
            }`}
          >
            {status === "error" && "Não foi possível enviar agora. Confira os dados e tente novamente."}
            {status === "success" && "Mensagem enviada. Em breve entraremos em contato."}
          </div>
        </form>
      </div>
    </section>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[11px] tracking-[0.1em] text-gold-soft mb-1.5">{label}</div>
      <div className="text-[15px] text-off-white-dim">{value}</div>
    </div>
  );
}

function Field({
  label,
  id,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  id: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs text-off-white-dim mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        autoComplete={autoComplete}
        className="w-full bg-transparent border-0 border-b border-line-dark text-off-white text-[15px] py-2.5 focus:outline-none focus:border-gold-soft transition-colors"
      />
    </div>
  );
}
