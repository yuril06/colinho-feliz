import { escola } from "@/config/escola";
import { whatsappLink } from "@/lib/utils";
import { Espiral } from "../ui/Espiral";
import { Reveal } from "../ui/Reveal";

const avulsos = [
  { nome: "Reforço escolar", valor: "dias combinados", texto: "Pode ser contratado à parte do contraturno." },
  { nome: "Curso de férias", valor: "janeiro e julho", texto: "Aberto também para crianças de fora." },
];

/** Os períodos como uma folha de cardápio: nome à esquerda, horário à direita, sem linhas. */
export function Periodos() {
  const p = escola.periodos;
  return (
    <section id="periodos" aria-labelledby="titulo-periodos" className="bg-agua py-20 md:py-32">
      <div className="moldura grid gap-10 md:grid-cols-12 md:gap-x-8">
        <Reveal className="md:col-span-4">
          <h2 id="titulo-periodos" className="t-titulo">
            Períodos e horários
          </h2>
          <p className="t-corpo mt-5 max-w-[34ch]">{p.texto}</p>
          <a
            href={whatsappLink(`Olá, ${escola.nome}! Gostaria de saber os valores dos períodos.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="botao mt-8 w-full md:w-auto"
          >
            Pedir os valores
          </a>
        </Reveal>

        <Reveal delay={0.08} className="md:col-span-8">
          <div className="overflow-hidden rounded-[var(--raio)] bg-papel">
            <Espiral cor="bg-agua" />
            <div className="grid gap-10 p-5 md:grid-cols-2 md:gap-16 md:p-10">
              <div>
                <h3 className="t-lead text-roxo">Período</h3>
                <ul className="mt-5 grid gap-5">
                  {p.opcoes.map((o) => (
                    <li key={o.nome}>
                      <p className="t-corpo flex justify-between gap-4 font-semibold">
                        <span>{o.nome}</span>
                        <span className="tabular-nums">{o.horario}</span>
                      </p>
                      <p className="t-corpo max-w-[36ch] text-suave first-letter:uppercase">{o.texto}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="t-lead text-roxo">Também</h3>
                <ul className="mt-5 grid gap-5">
                  {avulsos.map((a) => (
                    <li key={a.nome}>
                      <p className="t-corpo flex justify-between gap-4 font-semibold">
                        <span>{a.nome}</span>
                        <span>{a.valor}</span>
                      </p>
                      <p className="t-corpo max-w-[36ch] text-suave">{a.texto}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
