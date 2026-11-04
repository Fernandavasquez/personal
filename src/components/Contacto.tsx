import { enlaceWhatsapp, sitio } from "@/data/sitio";
import { Icono } from "./Icono";
import { IconoWhatsapp } from "./IconosMarca";

export function Contacto() {
  return (
    <section id="contacto" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div data-aparecer className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-cielo-200 via-cielo-100 to-lavanda px-6 py-16 text-center sm:px-14 sm:py-20">
          <div aria-hidden className="absolute -top-20 -right-20 size-72 rounded-full bg-white/40 blur-2xl" />
          <div aria-hidden className="absolute -bottom-24 -left-16 size-72 rounded-full bg-menta/70 blur-2xl" />

          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-medium leading-[1.15] tracking-tight sm:text-5xl">
              ¿Llevamos tu negocio <span className="italic text-cielo-700">al siguiente nivel?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-tinta-suave">
              Escríbeme y platiquemos de tu idea.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={enlaceWhatsapp()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-tinta px-8 py-4 text-lg font-semibold text-white shadow-flotante transition-all hover:-translate-y-0.5 hover:bg-cielo-700"
              >
                <IconoWhatsapp className="size-6" />
                Escríbeme por WhatsApp
              </a>
              <a
                href={`mailto:${sitio.correo}`}
                className="inline-flex items-center gap-2.5 rounded-full bg-white/90 px-7 py-4 font-semibold text-tinta shadow-suave transition-all hover:-translate-y-0.5 hover:shadow-flotante"
              >
                <Icono nombre="correo" className="size-5 text-cielo-600" />
                {sitio.correo}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
