import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Espaço de foto. Sem `src`, mostra um bloco liso com a legenda do que vai ali,
 * para a escola trocar depois. Com `src`, mostra a foto cobrindo o espaço.
 */
export function Foto({
  src,
  rotulo,
  className,
  sizes = "100vw",
  prioridade = false,
  rotuloEmbaixo = false,
}: {
  src?: string;
  rotulo: string;
  className?: string;
  sizes?: string;
  prioridade?: boolean;
  /** Legenda no pé do espaço (quando algo cobre o centro, como a capa). */
  rotuloEmbaixo?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-[var(--raio)] bg-foto", className)}>
      {src ? (
        <Image src={src} alt={rotulo} fill sizes={sizes} priority={prioridade} className="object-cover" />
      ) : (
        <span aria-hidden className={cn("t-nota absolute inset-0 grid p-[var(--margem)] text-center text-suave", rotuloEmbaixo ? "items-end justify-items-center pb-6" : "place-items-center")}>espaço para foto · {rotulo}</span>
      )}
    </div>
  );
}
