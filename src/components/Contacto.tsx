import { enlaceLlamada, enlaceWhatsapp, sitio } from "@/data/sitio";
import { Icono } from "./Icono";
import { IconoFacebook, IconoWhatsapp } from "./IconosMarca";

export function Contacto() {
  const tarjeta =
    "flex items-center gap-4 rounded-3xl bg-white/90 p-5 text-left shadow-suave transition-all hover:-translate-y-1 hover:shadow-flotante";

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
              Escríbeme y platiquemos de tu idea. La primera consulta es gratis y sin compromiso.
            </p>

            <a
              href={enlaceWhatsapp()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-tinta px-8 py-4 text-lg font-semibold text-white shadow-flotante transition-all hover:-translate-y-0.5 hover:bg-cielo-700"
            >
              <IconoWhatsapp className="size-6" />
              Escríbeme por WhatsApp
            </a>

            <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
              <a href={enlaceWhatsapp()} target="_blank" rel="noopener noreferrer" className={tarjeta}>
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-menta text-menta-fuerte">
                  <IconoWhatsapp />
                </span>
                <span>
                  <span className="block text-sm text-tinta-suave">WhatsApp</span>
                  <span className="block font-semibold">{sitio.telefonoVisible}</span>
                </span>
              </a>

              <a href={enlaceLlamada()} className={tarjeta}>
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-cielo-100 text-cielo-600">
                  <Icono nombre="telefono" />
                </span>
                <span>
                  <span className="block text-sm text-tinta-suave">Llamada</span>
                  <span className="block font-semibold">{sitio.telefonoVisible}</span>
                </span>
              </a>

              {sitio.facebookUrl ? (
                <a href={sitio.facebookUrl} target="_blank" rel="noopener noreferrer" className={tarjeta}>
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-lavanda text-lavanda-fuerte">
                    <IconoFacebook />
                  </span>
                  <span>
                    <span className="block text-sm text-tinta-suave">Facebook</span>
                    <span className="block font-semibold">{sitio.facebookNombre}</span>
                  </span>
                </a>
              ) : (
                <div className={tarjeta}>
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-lavanda text-lavanda-fuerte">
                    <IconoFacebook />
                  </span>
                  <span>
                    <span className="block text-sm text-tinta-suave">Facebook</span>
                    <span className="block font-semibold">{sitio.facebookNombre}</span>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
