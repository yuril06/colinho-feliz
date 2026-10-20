import Image from "next/image";
import { escola } from "@/config/escola";
import { mensagemPadraoWhatsapp, whatsappLink } from "@/lib/utils";

/** Borda de cima em ondinhas, como o recorte de um cartão-postal. */
function Ondas() {
  const n = 12;
  const largura = 100 / n;
  const d =
    `M0 12 ` +
    Array.from({ length: n }, (_, i) => `A${largura / 2} 10 0 0 1 ${(i + 1) * largura} 12`).join(" ") +
    ` V14 H0 Z`;
  return (
    <svg viewBox="0 0 100 14" preserveAspectRatio="none" className="block h-4 w-full md:h-6" aria-hidden>
      <path d={d} className="fill-papel" />
    </svg>
  );
}

/** Rodapé: o verso do cartão-postal da agenda. */
export function Footer() {
  const e = escola.endereco;
  return (
    <footer className="bg-roxo pt-20 pb-28 md:pt-32 md:pb-16">
      <div className="moldura mx-auto max-w-[64rem]">
        <Ondas />
        <div className="grid gap-10 rounded-b-[var(--raio)] bg-papel p-6 md:grid-cols-2 md:gap-12 md:p-12">
          <div>
            <p className="t-titulo text-acento">Com carinho,</p>
            <p className="t-corpo mt-5 max-w-[34ch]">
              a equipe da {escola.nome}. {escola.frase} Esperamos vocês para um café e uma volta pela casa.
            </p>
          </div>
          <div className="relative">
            <span className="absolute top-0 right-0 block rotate-3 rounded-2xl bg-rosa p-1.5">
              <span className="block rounded-xl bg-papel p-1">
                <Image src="/escola/marca.png" alt="" width={854} height={622} className="h-auto w-14 md:w-20" />
              </span>
            </span>
            <ul className="t-corpo grid gap-3 pt-24 md:pt-28">
              <li>
                <a href={whatsappLink(mensagemPadraoWhatsapp)} target="_blank" rel="noopener noreferrer" className="link">
                  WhatsApp {escola.contato.whatsappExibicao}
                </a>
              </li>
              <li>
                <a href={e.mapsUrl} target="_blank" rel="noopener noreferrer" className="link">
                  {e.rua}, {e.bairro}
                </a>
              </li>
              <li>
                {e.cidade} – {e.estado}, {e.cep}
              </li>
              {escola.contato.email && (
                <li>
                  <a href={`mailto:${escola.contato.email}`} className="link">
                    {escola.contato.email}
                  </a>
                </li>
              )}
              {escola.contato.instagram && (
                <li>
                  <a href={`https://instagram.com/${escola.contato.instagram}`} target="_blank" rel="noopener noreferrer" className="link">
                    @{escola.contato.instagram}
                  </a>
                </li>
              )}
            </ul>
          </div>
          <p className="t-nota text-center text-suave md:col-span-2">
            © {new Date().getFullYear()} {escola.nomeCompleto}. Fotos ilustrativas: Unsplash.
          </p>
        </div>
      </div>
    </footer>
  );
}
