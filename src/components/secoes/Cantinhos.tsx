import { escola } from "@/config/escola";
import { cn } from "@/lib/utils";
import { Foto } from "../ui/Foto";
import { Reveal } from "../ui/Reveal";

/** Pares de etiqueta (fundo e tinta) que giram, para a grade não ficar igual. */
const etiquetas = ["bg-acento text-white", "bg-roxo text-white", "bg-teal text-tinta", "bg-folha text-tinta"];

/** Os cantinhos: fotos com a etiqueta presa embaixo, como uma foto com o seu cartão. */
export function Cantinhos() {
  return (
    <section id="cantinhos" aria-labelledby="titulo-cantinhos" className="bg-papel py-20 md:py-32">
      <div className="moldura">
        <Reveal>
          <h2 id="titulo-cantinhos" className="t-titulo">
            Os cantinhos da casa
          </h2>
          <p className="t-corpo mt-5 max-w-[42ch]">Tudo na altura deles: piso macio, móveis baixos e brinquedos ao alcance das mãos.</p>
        </Reveal>

        <ul className="mt-10 grid grid-cols-2 gap-x-2 gap-y-5 md:mt-12 md:grid-cols-3 md:gap-x-3 md:gap-y-7">
          {escola.cantinhos.map((c, i) => (
            <li key={c.nome}>
              <Reveal delay={(i % 3) * 0.06}>
                <figure className="overflow-hidden rounded-[var(--raio)]">
                  <Foto src={c.foto} rotulo={c.nome.toLowerCase()} sizes="(min-width: 768px) 33vw, 50vw" className="aspect-[4/5] !rounded-none" />
                  <figcaption className={cn("grid min-h-[5.5rem] content-between gap-2 p-3 md:p-4", etiquetas[i % etiquetas.length])}>
                    <span className="t-corpo font-semibold leading-tight">{c.nome}</span>
                    <span className="t-nota flex flex-wrap justify-between gap-x-3">
                      <span>{c.nota}</span>
                      <span className="max-md:hidden">{c.para}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
