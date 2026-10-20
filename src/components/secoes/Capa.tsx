import Image from "next/image";
import { escola } from "@/config/escola";
import { Espiral } from "../ui/Espiral";
import { Foto } from "../ui/Foto";

/** Capa: a foto da sala de fundo e, por cima, a capa da agenda da Colinho com tudo o que importa. */
export function Capa() {
  return (
    <section id="inicio" aria-labelledby="titulo-inicio" className="relative grid min-h-[100svh] place-items-center py-6 md:py-12">
      <Foto src={escola.hero.foto} rotulo="a sala do berçário" rotuloEmbaixo prioridade className="!absolute inset-0 !rounded-none" />

      <div className="relative z-10 mx-[var(--margem)] flex min-h-[70svh] w-[calc(100%-2*var(--margem))] max-w-[44rem] flex-col overflow-hidden rounded-[var(--raio)] bg-papel md:min-h-[62svh]">
        <Espiral cor="bg-foto" />
        <div className="flex flex-1 flex-col px-6 pt-6 pb-6 md:px-10 md:pt-8 md:pb-10">
          <div className="flex items-start justify-between gap-6">
            <h1 id="titulo-inicio" className="t-display max-w-[7ch] pt-2">
              <span translate="no" className="block text-acento">Colinho</span>
              <span translate="no" className="block text-roxo">Feliz</span>
              <span className="sr-only">, {escola.slogan.toLowerCase()}</span>
            </h1>
            <Image
              src="/escola/logo.png"
              alt={`Logo da ${escola.nome}`}
              width={854}
              height={1031}
              priority
              className="h-28 w-auto shrink-0 md:h-40"
            />
          </div>

          <ul className="t-lead mt-8 grid gap-1.5 md:mt-10">
            <li className="flex items-center gap-2.5"><span className="coracao" aria-hidden />Berçário e recreação infantil</li>
            <li className="flex items-center gap-2.5"><span className="coracao !bg-roxo" aria-hidden />A partir de 4 meses</li>
            <li className="flex items-center gap-2.5"><span className="coracao !bg-teal" aria-hidden />
              {escola.endereco.bairro}, {escola.endereco.cidade}
            </li>
          </ul>
          <p className="t-corpo mt-5 max-w-[36ch]">
            Um espaço acolhedor e seguro onde aprender, brincar e crescer caminham juntos. Integral ou meio período.
          </p>

          <div className="mt-auto flex flex-col gap-4 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <a href="#visita" className="botao w-full sm:w-auto">
              {escola.hero.cta}
            </a>
            <a href="#servicos" className="link t-corpo self-center">
              Ver os serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
