"use client";

import { useId, useState } from "react";
import { escola } from "@/config/escola";
import { cn } from "@/lib/utils";
import { Espiral } from "../ui/Espiral";
import { Foto } from "../ui/Foto";
import { Reveal } from "../ui/Reveal";

const IDADES = [
  { valor: 0, rotulo: "Menos de 1 ano" },
  { valor: 1, rotulo: "1 ano" },
  ...Array.from({ length: 11 }, (_, i) => ({ valor: i + 2, rotulo: `${i + 2} anos` })),
];
const ROTINAS = [
  { valor: "nao", rotulo: "Ainda não vai à escola" },
  { valor: "manha", rotulo: "Estuda de manhã" },
  { valor: "tarde", rotulo: "Estuda à tarde" },
] as const;
type Rotina = (typeof ROTINAS)[number]["valor"];

/** Serviços que servem para a idade e a rotina escolar da criança. */
function indicar(idade: number, rotina: Rotina) {
  return escola.servicos.filter((s) => {
    if (idade < s.idades[0] || idade > s.idades[1]) return false;
    if (s.escola === "todos") return true;
    return rotina === "nao" ? s.escola === "nao" : s.escola === "sim";
  });
}

const periodo = { nao: "em período integral ou meio período", manha: "à tarde", tarde: "de manhã" };

const campo =
  "h-14 w-full cursor-pointer rounded-2xl bg-papel px-4 text-[1.0625rem] text-tinta transition-colors hover:bg-chao";

export function Servicos() {
  const id = useId();
  const [idade, setIdade] = useState("");
  const [rotina, setRotina] = useState<Rotina | "">("");
  const indicados = idade !== "" && rotina !== "" ? indicar(Number(idade), rotina) : null;
  const acesos = new Set(indicados?.map((s) => s.id));

  return (
    <section id="servicos" aria-labelledby="titulo-servicos" className="bg-chao py-20 md:py-32">
      <div className="moldura grid gap-10 md:grid-cols-12 md:gap-x-8">
        <Reveal className="md:col-span-6">
          <h2 id="titulo-servicos" className="t-titulo">
            Um cuidado para cada idade
          </h2>
          <p className="t-corpo mt-5 max-w-[40ch]">
            Do bebê de 4 meses à criança do fundamental: cinco serviços, cada um numa folha da nossa agenda.
          </p>
        </Reveal>

        {/* A coisa viva: o que serve para o seu filho */}
        <Reveal delay={0.08} className="md:col-span-5 md:col-start-8 md:self-end">
          <form onSubmit={(e) => e.preventDefault()} aria-describedby={`${id}-resultado`} className="rounded-[var(--raio)] bg-roxo p-5 text-white md:p-6">
            <fieldset>
              <legend className="t-lead">O que serve para o seu filho?</legend>
              <div className="mt-4 grid gap-3">
                <label className="grid gap-1.5">
                  <span className="t-nota font-semibold">Idade</span>
                  <select name="idade-crianca" value={idade} onChange={(e) => setIdade(e.target.value)} className={campo}>
                    <option value="">Escolha…</option>
                    {IDADES.map((i) => (
                      <option key={i.valor} value={i.valor}>
                        {i.rotulo}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-1.5">
                  <span className="t-nota font-semibold">Escola</span>
                  <select
                    name="rotina-escolar"
                    value={rotina}
                    onChange={(e) => setRotina(e.target.value as Rotina)}
                    className={campo}
                  >
                    <option value="">Escolha…</option>
                    {ROTINAS.map((r) => (
                      <option key={r.valor} value={r.valor}>
                        {r.rotulo}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </fieldset>
            <div id={`${id}-resultado`} aria-live="polite" className="t-corpo mt-4 min-h-[3em]">
              {!indicados && <p>As folhas indicadas ganham a marca “Indicado para o seu filho”.</p>}
              {indicados && indicados.length > 0 && (
                <p>
                  <strong className="font-semibold">Indicado {periodo[rotina as Rotina]}: </strong>
                  {indicados.map((s, i) => (
                    <span key={s.id}>
                      {i > 0 && ", "}
                      <a href={`#servico-${s.id}`} className="link text-white">
                        {s.nome}
                      </a>
                    </span>
                  ))}
                  .
                </p>
              )}
              {indicados && indicados.length === 0 && (
                <p>Fale com a gente pelo WhatsApp: montamos uma rotina para a idade dele.</p>
              )}
            </div>
          </form>
        </Reveal>
      </div>

      {/* As folhas da agenda: uma por serviço */}
      <ol aria-label="Serviços" className="moldura mt-12 grid gap-3 md:mt-16">
        {escola.servicos.map((s, i) => (
          <li key={s.id} id={`servico-${s.id}`} className="scroll-mt-6">
            <Reveal delay={0.04}>
              <article className={cn("grid gap-0 overflow-hidden rounded-[var(--raio)] md:grid-cols-12", i % 2 ? "bg-folha" : "bg-papel")}>
                <Foto
                  src={s.foto}
                  rotulo={s.nome.toLowerCase()}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="aspect-[4/3] !rounded-none md:order-2 md:col-span-6 md:aspect-auto md:min-h-[26rem]"
                />
                <div className="flex flex-col md:col-span-6">
                  <Espiral />
                  <div className="flex flex-1 flex-col gap-5 p-5 pt-5 md:p-8 md:pt-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className={cn("t-titulo", i % 2 ? "text-roxo" : "text-acento")}>{s.nome}</h3>
                      {acesos.has(s.id) && <p className="t-nota rounded-full bg-teal px-3 py-1 font-bold text-tinta">Indicado para o seu filho</p>}
                    </div>
                    <p className="t-corpo max-w-[40ch]">{s.texto}</p>
                    <ul className="t-corpo mt-auto grid gap-1 pt-2 font-semibold">
                      {s.fatos.map((f) => (
                        <li key={f} className="flex items-center gap-2.5">
                          <span className={cn("coracao", i % 2 ? "!bg-teal" : "")} aria-hidden />
                          {f.charAt(0).toUpperCase() + f.slice(1)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
