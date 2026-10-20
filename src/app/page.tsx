import { Footer } from "@/components/Footer";
import { WhatsAppFlutuante } from "@/components/WhatsAppFlutuante";
import { Cantinhos } from "@/components/secoes/Cantinhos";
import { Capa } from "@/components/secoes/Capa";
import { Dia } from "@/components/secoes/Dia";
import { Duvidas } from "@/components/secoes/Duvidas";
import { Periodos } from "@/components/secoes/Periodos";
import { Servicos } from "@/components/secoes/Servicos";
import { Visita } from "@/components/secoes/Visita";

export default function Home() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[70] focus:bg-papel focus:px-4 focus:py-2"
      >
        Pular para o conteúdo
      </a>
      <main id="conteudo">
        <Capa />
        <Servicos />
        <Cantinhos />
        <Dia />
        <Periodos />
        <Duvidas />
        <Visita />
      </main>
      <Footer />
      <WhatsAppFlutuante />
    </>
  );
}
