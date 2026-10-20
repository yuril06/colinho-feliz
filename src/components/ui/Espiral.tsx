import { cn } from "@/lib/utils";

/** A fileira de furos da espiral no alto de cada folha da agenda (círculos chapados). */
export function Espiral({ className, cor = "bg-chao" }: { className?: string; cor?: string }) {
  return (
    <div aria-hidden className={cn("flex justify-between gap-2 overflow-hidden px-5 pt-4", className)}>
      {Array.from({ length: 24 }).map((_, i) => (
        <span key={i} className={cn("size-2.5 shrink-0 rounded-full", cor, i >= 10 && "max-sm:hidden", i >= 16 && "max-lg:hidden")} />
      ))}
    </div>
  );
}
