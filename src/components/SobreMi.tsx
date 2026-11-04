import { sitio } from "@/data/sitio";
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
        {/* Tarjeta de presentación (reemplazable por una foto en /public) */}
        <div className="relative mx-auto w-full max-w-sm">
          <div aria-hidden className="absolute -inset-4 rotate-3 rounded-[2.5rem] bg-gradient-to-br from-cielo-200 to-lavanda" />
          <div className="relative rounded-[2rem] bg-white p-8 text-center shadow-flotante">
            <div className="mx-auto grid size-32 place-items-center rounded-full bg-gradient-to-br from-cielo-100 via-white to-lavanda font-display text-5xl font-medium text-cielo-600 ring-8 ring-cielo-50">
              FV
            </div>
            <p className="mt-6 font-display text-2xl font-medium">{sitio.nombreCorto}</p>
            <p className="mt-1 text-tinta-suave">{sitio.titulo}</p>
            <div className="mt-6 flex flex-col gap-2.5 text-sm">
              <span className="inline-flex items-center justify-center gap-2 rounded-full bg-cielo-50 px-4 py-2 text-tinta-suave">
                <Icono nombre="birrete" className="size-4 text-cielo-500" />
                Ingeniería en Informática y Sistemas
              </span>
              <span className="inline-flex items-center justify-center gap-2 rounded-full bg-cielo-50 px-4 py-2 text-tinta-suave">
                <Icono nombre="ubicacion" className="size-4 text-cielo-500" />
                {sitio.ubicacion}
              </span>
            </div>
          </div>
        </div>

        <div>
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
              sistemas que resuelven problemas reales de negocios como el tuyo.
            </p>
            <p>
              Creo que la tecnología debe hacerte la vida más fácil, no más complicada. Por eso trabajo de
              cerca contigo, escucho lo que necesitas y construyo soluciones sencillas de usar, bonitas y
              que realmente funcionen.
            </p>
          </div>

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
