"use client";

import { useState } from "react";
import { escola } from "@/config/escola";
import { cn, whatsappLink } from "@/lib/utils";
import { Foto } from "../ui/Foto";

const campo =
  "h-14 w-full rounded-2xl bg-folha px-4 text-[1.0625rem] text-tinta transition-colors outline-none placeholder:text-suave hover:bg-chao focus-visible:ring-3 focus-visible:ring-acento";

/** Visita: a foto da fachada de ponta a ponta e, por cima, o cartão de visita com o formulário. */
export function Visita() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [erro, setErro] = useState("");
  const [enviado, setEnviado] = useState(false);

  const enviar = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (nome.trim().length < 2) {
      setErro("Escreva seu nome para a gente saber com quem fala.");
      document.getElementById("visita-nome")?.focus();
      return;
    }
    setErro("");
    const mensagem = [
      `Olá, ${escola.nome}! Gostaria de agendar uma visita.`,
      "",
      `*Nome:* ${nome.trim()}`,
      ...(idade ? [`*Idade da criança:* ${idade}`] : []),
    ].join("\n");
    window.open(whatsappLink(mensagem), "_blank", "noopener,noreferrer");
    setEnviado(true);
  };

  const e = escola.endereco;
  return (
    <section id="visita" aria-labelledby="titulo-visita" className="relative bg-chao pb-20 md:min-h-[100svh] md:pb-0">
      <Foto src={escola.fotoFachada} rotulo="sala de atividades com mesinhas e estantes coloridas" rotuloEmbaixo className="h-[70svh] !rounded-none md:!absolute md:inset-0 md:h-auto" />

      <div className="relative z-10 mx-[var(--margem)] -mt-20 rounded-[var(--raio)] bg-papel p-6 md:absolute md:top-[60px] md:right-[max(var(--margem),calc((100vw-1280px)/2+var(--margem)))] md:mx-0 md:mt-0 md:w-[24rem] md:p-8">
        <h2 id="titulo-visita" className="t-titulo text-acento">
          Venha conhecer
        </h2>
        <address className="t-corpo mt-5 not-italic">
          {e.rua}
          <br />
          {e.bairro}, {e.cidade}
        </address>
        <dl className="t-corpo mt-4 grid gap-1">
          <div className="flex justify-between gap-4">
            <dt>Segunda a sexta</dt>
            <dd className="tabular-nums">7h às 19h</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt>Sábado e domingo</dt>
            <dd>fechado</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt>WhatsApp</dt>
            <dd className="tabular-nums">{escola.contato.whatsappExibicao}</dd>
          </div>
        </dl>
        <a href={e.mapsUrl} target="_blank" rel="noopener noreferrer" className="link t-corpo mt-3 inline-block">
          Como chegar
        </a>

        <form noValidate onSubmit={enviar} aria-label="Agendar visita pelo WhatsApp" className="mt-6 grid gap-2">
          <label htmlFor="visita-nome" className="sr-only">
            Seu nome
          </label>
          <input
            id="visita-nome"
            name="nome"
            autoComplete="name"
            placeholder="Seu nome…"
            value={nome}
            onChange={(ev) => {
              setNome(ev.target.value);
              if (erro) setErro("");
            }}
            aria-invalid={!!erro}
            aria-describedby="visita-dica"
            className={cn(campo, erro && "ring-3 ring-rosa")}
          />
          <label htmlFor="visita-idade" className="sr-only">
            Idade da criança
          </label>
          <select
            id="visita-idade"
            name="idade"
            value={idade}
            onChange={(ev) => setIdade(ev.target.value)}
            className={cn(campo, "cursor-pointer", !idade && "text-suave")}
          >
            <option value="">Idade da criança…</option>
            {escola.visita.idades.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
          <button type="submit" className="botao mt-2 w-full">
            Agendar pelo WhatsApp
          </button>
          <p id="visita-dica" aria-live="polite" className={cn("t-nota text-suave", erro && "font-semibold text-tinta")}>
            {erro || (enviado ? "Abrimos o WhatsApp com a sua mensagem. É só enviar." : "Abrimos o seu WhatsApp com a mensagem pronta.")}
          </p>
        </form>
      </div>
    </section>
  );
}
