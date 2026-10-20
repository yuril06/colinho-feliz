import { escola } from "@/config/escola";
import { mensagemPadraoWhatsapp, whatsappLink } from "@/lib/utils";
import { IconeWhatsApp } from "./ui/icones";

/** Botão flutuante de WhatsApp (o único elemento com sombra: ele flutua de verdade). */
export function WhatsAppFlutuante() {
  return (
    <a
      href={whatsappLink(mensagemPadraoWhatsapp)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Conversar no WhatsApp ${escola.contato.whatsappExibicao}`}
      className="fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-full bg-[#12803F] p-3.5 text-white shadow-[0_10px_30px_-8px_rgb(0_0_0/0.45)] transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-[#0E6A34] active:scale-95 sm:right-6 sm:bottom-6 sm:pr-6" /* taste-skill-ignore: botão fixo, flutua sobre a página */
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      <IconeWhatsApp className="size-7" />
      <span className="t-nota hidden font-semibold sm:inline">WhatsApp</span>
    </a>
  );
}
