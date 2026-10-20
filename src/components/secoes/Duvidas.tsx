import { escola } from "@/config/escola";
import { enderecoCompleto, mensagemPadraoWhatsapp, whatsappLink } from "@/lib/utils";
import { Foto } from "../ui/Foto";
import { Reveal } from "../ui/Reveal";

/** Dúvidas ao lado de uma foto alta (com uma quadrada sobreposta no canto). */
export function Duvidas() {
  const [alta, quadrada] = escola.fotosDuvidas;
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: escola.faq.map((f) => ({
      "@type": "Question",
      name: f.pergunta,
      acceptedAnswer: { "@type": "Answer", text: f.resposta },
    })),
  };

  return (
    <section id="duvidas" aria-labelledby="titulo-duvidas" className="bg-folha py-20 md:py-32">
      <div className="moldura grid gap-12 md:grid-cols-12 md:gap-x-8">
        <Reveal className="relative mb-10 md:order-2 md:col-span-6 md:col-start-7 md:mb-0">
          <Foto src={alta} rotulo="crianças brincando" sizes="(min-width: 768px) 50vw, 100vw" className="aspect-[4/5] md:aspect-[3/4]" />
          <Foto
            src={quadrada}
            rotulo="detalhe"
            sizes="(min-width: 768px) 17vw, 38vw"
            className="!absolute right-0 -bottom-10 aspect-square w-[38%] border-6 border-folha md:right-auto md:-left-10 md:w-[34%]"
          />
        </Reveal>

        <div className="md:col-span-5">
          <Reveal>
            <h2 id="titulo-duvidas" className="t-titulo">
              Dúvidas das famílias
            </h2>
            <ul className="t-corpo mt-6 grid gap-1">
              <li>{enderecoCompleto()}</li>
              <li>{escola.horario.exibicao}</li>
              <li>WhatsApp {escola.contato.whatsappExibicao}</li>
            </ul>
          </Reveal>

          <div className="mt-8 grid gap-2">
            {escola.faq.map((f, i) => (
              <Reveal key={f.pergunta} delay={Math.min(i, 5) * 0.04}>
                <details name="duvidas" className="group">
                  <summary className="t-corpo flex min-h-14 cursor-pointer items-center justify-between gap-6 rounded-2xl bg-papel px-5 py-3 font-bold transition-colors hover:text-acento group-open:rounded-b-none">
                    {f.pergunta}
                    <svg viewBox="0 0 16 16" className="size-4 shrink-0 transition-transform duration-300 group-open:rotate-180" aria-hidden>
                      <path d="M3 6l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </summary>
                  <p className="t-corpo rounded-b-2xl bg-papel px-5 pb-5">{f.resposta}</p>
                </details>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <a
              href={whatsappLink(mensagemPadraoWhatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="botao mt-8 w-full md:w-auto"
            >
              Perguntar no WhatsApp
            </a>
          </Reveal>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </section>
  );
}
