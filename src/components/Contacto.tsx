import { enlaceLlamada, enlaceWhatsapp, sitio } from "@/data/sitio";
import { Icono } from "./Icono";

function IconoWhatsapp({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3z" />
    </svg>
  );
}

function IconoFacebook({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M14 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V2.3A22 22 0 0 0 14.6 2C12.2 2 10.6 3.5 10.6 6.2v2.3H8V12h2.6v10H14V12h2.7l.4-3.5z" />
    </svg>
  );
}

export function Contacto() {
  const tarjeta =
    "flex items-center gap-4 rounded-3xl bg-white/90 p-5 text-left shadow-suave transition-all hover:-translate-y-1 hover:shadow-flotante";

  return (
    <section id="contacto" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-cielo-200 via-cielo-100 to-lavanda px-6 py-16 text-center sm:px-14 sm:py-20">
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
