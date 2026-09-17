import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const { nome, email, telefone, assunto, mensagem } = await request.json();

    if (!nome || !email || !mensagem) {
      return NextResponse.json({ error: "Campos obrigatórios ausentes." }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
      return NextResponse.json({ error: "Serviço de e-mail não configurado." }, { status: 503 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const recipient = process.env.CONTACT_EMAIL;
    const sender = process.env.CONTACT_FROM_EMAIL || "Site Felipe Andrade <onboarding@resend.dev>";

    const { error } = await resend.emails.send({
      from: sender,
      to: recipient,
      replyTo: email,
      subject: assunto ? `Novo contato: ${assunto}` : `Novo contato de ${nome}`,
      text: [
        `Nome: ${nome}`,
        `E-mail: ${email}`,
        `Telefone: ${telefone || "Não informado"}`,
        `Assunto: ${assunto || "Não informado"}`,
        "",
        "Mensagem:",
        mensagem,
      ].join("\n"),
    });

    if (error) {
      console.error("Erro do Resend:", error);
      return NextResponse.json({ error: "Não foi possível enviar a mensagem." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Erro ao processar contato:", error);
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }
}