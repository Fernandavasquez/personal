import Link from "next/link";
import { type Consejo, formatearFecha, tonos } from "@/data/consejos";
import { Icono } from "./Icono";

export function TarjetaConsejo({ consejo, animar = false, indice = 0 }: { consejo: Consejo; animar?: boolean; indice?: number }) {
  const tono = tonos[consejo.tono];
  return (
    <li
      data-aparecer={animar ? "" : undefined}
      style={animar ? ({ "--retraso": `${indice * 100}ms` } as React.CSSProperties) : undefined}
      className="h-full"
    >
      <Link
        href={`/blog/${consejo.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white bg-white/85 shadow-suave transition-all duration-300 hover:-translate-y-1 hover:shadow-flotante"
      >
        <div className={`relative h-32 bg-gradient-to-br ${tono.degradado}`}>
          <div aria-hidden className="absolute -right-6 -bottom-10 size-32 rounded-full bg-white/40" />
          <div aria-hidden className="absolute top-5 right-16 size-10 rounded-full bg-white/50" />
          <span className={`absolute top-5 left-6 rounded-full bg-white px-3 py-1 text-xs font-semibold ${tono.texto}`}>
            {consejo.categoria}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="text-xs text-tinta-suave">
            {formatearFecha(consejo.fecha)} · {consejo.minutos} min de lectura
          </p>
          <h3 className="mt-2 text-balance font-display text-xl font-medium leading-snug">{consejo.titulo}</h3>
          <p className="mt-2.5 flex-1 text-[0.95rem] leading-relaxed text-tinta-suave">{consejo.resumen}</p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-cielo-600">
            Leer consejo
            <Icono nombre="flecha" className="size-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </li>
  );
}
