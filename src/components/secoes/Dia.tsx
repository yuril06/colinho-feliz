"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { escola } from "@/config/escola";
import { Foto } from "../ui/Foto";
import { Reveal } from "../ui/Reveal";

/** Espaço vazio antes de cada foto: varia, para as fotos subirem e descerem ao longo da fileira. */
const respiros = ["h-8 md:h-20", "h-14 md:h-32", "h-6 md:h-12", "h-12 md:h-28", "h-4 md:h-16", "h-10 md:h-24"];

/** Um dia na Colinho: fileira de momentos para deslizar, com barra de progresso. */
export function Dia() {
  const trilho = useRef<HTMLOListElement>(null);
  const [progresso, setProgresso] = useState(0);

  useEffect(() => {
    const t = trilho.current;
    if (!t) return;
    const medir = () => {
      const max = t.scrollWidth - t.clientWidth;
      setProgresso(max > 0 ? t.scrollLeft / max : 1);
    };
    medir();
    t.addEventListener("scroll", medir, { passive: true });
    window.addEventListener("resize", medir);
    return () => {
      t.removeEventListener("scroll", medir);
      window.removeEventListener("resize", medir);
    };
  }, []);

  const andar = (direcao: number) => {
    const t = trilho.current;
    if (t) t.scrollBy({ left: direcao * Math.min(t.clientWidth * 0.8, 624), behavior: "smooth" });
  };

  return (
    <section id="dia" aria-labelledby="titulo-dia" className="overflow-hidden bg-roxo py-20 text-white md:py-32">
      <div className="moldura">
        <Reveal className="flex items-end justify-between gap-6">
          <div>
            <h2 id="titulo-dia" className="t-titulo">
              Um dia na Colinho
            </h2>
            <p className="t-corpo mt-5 max-w-[40ch]">
              Das 7h às 19h, na mesma ordem todos os dias. Deslize para ver o dia inteiro.
            </p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <button
              type="button"
              onClick={() => andar(-1)}
              aria-label="Momento anterior"
              className="grid size-12 cursor-pointer place-items-center rounded-full bg-white text-roxo transition-[background-color,transform] hover:bg-chao active:scale-95"
            >
              <ArrowLeft className="size-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => andar(1)}
              aria-label="Próximo momento"
              className="grid size-12 cursor-pointer place-items-center rounded-full bg-white text-roxo transition-[background-color,transform] hover:bg-chao active:scale-95"
            >
              <ArrowRight className="size-5" aria-hidden />
            </button>
          </div>
        </Reveal>

        <div aria-hidden className="mt-8 h-2 overflow-hidden rounded-full bg-white/25">
          <div className="h-full origin-left rounded-full bg-rosa transition-transform duration-150" style={{ transform: `scaleX(${Math.max(progresso, 0.08)})` }} />
        </div>
      </div>

      <ol
        ref={trilho}
        aria-label="Momentos do dia"
        className="sem-barra mt-8 flex snap-x snap-mandatory scroll-px-[var(--margem)] gap-4 overflow-x-auto px-[var(--margem)] md:gap-8 md:scroll-px-[max(var(--margem),calc((100vw-1280px)/2+var(--margem)))] md:px-[max(var(--margem),calc((100vw-1280px)/2+var(--margem)))]"
        tabIndex={0}
      >
        {escola.dia.map((m, i) => (
          <li key={m.nome} className="flex w-[72vw] max-w-[18rem] shrink-0 snap-start flex-col md:w-[280px]">
            <h3 className="t-corpo font-semibold">
              <span className="tabular-nums">{m.hora}</span> · {m.nome}
            </h3>
            <p className="t-corpo mt-1">{m.texto}</p>
            <span aria-hidden className={respiros[i % respiros.length]} />
            <Foto src={m.foto} rotulo={m.nome.toLowerCase()} sizes="280px" className="mt-auto aspect-[4/5]" />
          </li>
        ))}
      </ol>
    </section>
  );
}
