import type { ReactNode } from "react";

export function Titulo({
  etiqueta,
  children,
  descripcion,
  centrado = true,
}: {
  etiqueta: string;
  children: ReactNode;
  descripcion?: ReactNode;
  centrado?: boolean;
}) {
  return (
    <div className={centrado ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-cielo-600 shadow-suave">
        <span className="size-1.5 rounded-full bg-cielo-400" />
        {etiqueta}
      </p>
      <h2 className="mt-5 text-balance font-display text-3xl font-medium leading-[1.15] tracking-tight sm:text-[2.6rem]">
        {children}
      </h2>
      {descripcion && (
        <p className="mt-4 text-pretty text-lg leading-relaxed text-tinta-suave">{descripcion}</p>
      )}
    </div>
  );
}
