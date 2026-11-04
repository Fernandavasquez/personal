import Image from "next/image";
import { sitio } from "@/data/sitio";
import foto from "../../public/fernanda.jpg";
import { Icono, type NombreIcono } from "./Icono";

const valores: { icono: NombreIcono; titulo: string; texto: string }[] = [
  { icono: "chat", titulo: "Te explico todo claro", texto: "Sin palabras técnicas complicadas." },
  { icono: "ubicacion", titulo: "Cerca de ti", texto: "Conozco cómo trabajan los negocios de Xela." },
  { icono: "corazon", titulo: "Compromiso real", texto: "Tu proyecto lo cuido como si fuera mío." },
];

export function SobreMi() {
  return (
    <section id="sobre-mi" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Foto de presentación */}
        <div data-aparecer className="group relative mx-auto w-full max-w-sm">
          <div aria-hidden className="absolute -inset-4 rotate-3 rounded-[2.5rem] bg-gradient-to-br from-cielo-200 to-lavanda transition-transform duration-500 group-hover:rotate-6" />
          <div className="relative overflow-hidden rounded-[2rem] border-8 border-white bg-white shadow-flotante transition-transform duration-500 group-hover:-translate-y-1">
            <Image
              src={foto}
              alt={`${sitio.nombre}, ${sitio.titulo}, el día de su graduación`}
              placeholder="blur"
              sizes="(min-width: 1024px) 640px, 100vw"
              className="aspect-[4/5] w-full origin-[62%_30%] scale-[1.25] object-cover object-[50%_24%] transition-transform duration-700 group-hover:scale-[1.32]"
            />
          </div>
        </div>

        <div data-aparecer style={{ "--retraso": `${120}ms` } as React.CSSProperties}>
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-cielo-600 shadow-suave">
            <span className="size-1.5 rounded-full bg-cielo-400" />
            Sobre mí
          </p>
          <h2 className="mt-5 text-balance font-display text-3xl font-medium leading-[1.15] tracking-tight sm:text-[2.6rem]">
            Hola, soy Fernanda <span className="italic text-cielo-600">y me encanta ayudarte a crecer</span>
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-tinta-suave">
            <p>
              Soy {sitio.titulo.toLowerCase()} y vivo en {sitio.ubicacion}. Me dedico a crear páginas web y
              sistemas que resuelven problemas reales de negocios como el tuyo, en Xela y en todo el país.
            </p>
            <p>
              Creo que la tecnología debe hacerte la vida más fácil, no más complicada. Por eso trabajo de
              cerca contigo, escucho lo que necesitas y construyo soluciones sencillas de usar, bonitas y
              que realmente funcionen.
            </p>
          </div>

          <figure className="relative mt-8 rounded-3xl border-l-4 border-cielo-300 bg-white/80 py-5 pr-6 pl-7 shadow-suave">
            <blockquote className="font-display text-xl leading-snug italic text-tinta sm:text-2xl">
              “{sitio.frase}”
            </blockquote>
            <figcaption className="mt-3 text-sm font-semibold text-cielo-600">— {sitio.nombreCorto}</figcaption>
          </figure>

          <ul className="mt-9 grid gap-4 sm:grid-cols-3">
            {valores.map((valor) => (
              <li key={valor.titulo} className="rounded-2xl border border-white bg-white/80 p-5 shadow-suave">
                <Icono nombre={valor.icono} className="size-6 text-cielo-500" />
                <p className="mt-3 font-semibold">{valor.titulo}</p>
                <p className="mt-1 text-sm text-tinta-suave">{valor.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
