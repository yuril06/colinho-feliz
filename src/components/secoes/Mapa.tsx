import { escola } from "@/config/escola";
import { enderecoCompleto } from "@/lib/utils";
import { Reveal } from "../ui/Reveal";

/** Como chegar: o mapa do Google embutido (carrega só quando chega perto) e o botão para abrir no app. */
export function Mapa() {
  const e = escola.endereco;
  const busca = encodeURIComponent(`${escola.nome}, ${enderecoCompleto()}`);
  const mapa = `https://maps.google.com/maps?q=${encodeURIComponent(enderecoCompleto())}&z=16&hl=pt-BR&output=embed`;

  return (
    <section id="mapa" aria-labelledby="titulo-mapa" className="bg-agua py-20 md:py-32">
      <div className="moldura grid gap-8 md:grid-cols-12 md:items-center md:gap-x-8">
        <Reveal className="md:col-span-4">
          <h2 id="titulo-mapa" className="t-titulo">
            Como chegar
          </h2>
          <address className="t-lead mt-5 not-italic">
            {e.rua}
            <br />
            {e.bairro}
          </address>
          <p className="t-corpo mt-2">
            {e.cidade} – {e.estado}, {e.cep}
          </p>
          <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap md:grid">
            <a href={e.mapsUrl} target="_blank" rel="noopener noreferrer" className="botao w-full sm:w-auto">
              Abrir no Google Maps
            </a>
            <a
              href={`https://www.waze.com/ul?q=${busca}&ll=${e.latitude},${e.longitude}&navigate=yes`}
              target="_blank"
              rel="noopener noreferrer"
              className="link t-corpo self-center justify-self-center md:justify-self-start"
            >
              Ir pelo Waze
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="md:col-span-8">
          <div className="overflow-hidden rounded-[var(--raio)] bg-foto">
            <iframe
              src={mapa}
              title={`Mapa: ${escola.nome} na ${e.rua}, ${e.bairro}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="block aspect-[4/5] w-full border-0 sm:aspect-[16/10]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
