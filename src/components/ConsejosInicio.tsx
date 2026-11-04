import Link from "next/link";
import { consejos } from "@/data/consejos";
import { Icono } from "./Icono";
import { TarjetaConsejo } from "./TarjetaConsejo";
import { Titulo } from "./Titulo";

export function ConsejosInicio() {
  const recientes = [...consejos].sort((a, b) => b.fecha.localeCompare(a.fecha)).slice(0, 3);
  return (
    <section id="consejos" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Titulo
          etiqueta="Consejos"
          descripcion="Ideas sencillas y prácticas para que aproveches la tecnología en tu negocio."
        >
          Aprende a <span className="italic text-cielo-600">crecer en digital</span>
        </Titulo>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {recientes.map((consejo, i) => (
            <TarjetaConsejo key={consejo.slug} consejo={consejo} animar indice={i} />
          ))}
        </ul>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-cielo-200 bg-white/80 px-6 py-3 font-semibold text-tinta transition-colors hover:border-cielo-300 hover:bg-white"
          >
            Ver todos los consejos
            <Icono nombre="flecha" className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
