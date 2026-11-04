import { enlaceWhatsapp, sitio } from "@/data/sitio";
import { Icono } from "./Icono";

const barras = [38, 52, 46, 64, 58, 76, 88];

export function Portada() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Manchas de color de fondo */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 size-[28rem] rounded-full bg-cielo-200/70 blur-3xl" />
        <div className="absolute top-20 right-[-6rem] size-[24rem] rounded-full bg-lavanda blur-3xl" />
        <div className="absolute bottom-0 left-1/3 size-[20rem] rounded-full bg-menta/80 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-cielo-200 bg-white/70 px-4 py-1.5 text-sm text-tinta-suave backdrop-blur">
            <Icono nombre="ubicacion" className="size-4 text-cielo-500" />
            {sitio.ubicacion}
          </p>

          <h1 className="mt-6 text-balance font-display text-[2.6rem] font-medium leading-[1.08] tracking-tight sm:text-6xl">
            Tu negocio merece{" "}
            <span className="relative whitespace-nowrap italic text-cielo-600">
              crecer en digital
              <svg
                aria-hidden
                viewBox="0 0 300 12"
                className="absolute -bottom-2 left-0 w-full text-cielo-300"
                preserveAspectRatio="none"
              >
                <path d="M2 9c60-6 160-8 296-3" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-tinta-suave">
            Soy <strong className="font-semibold text-tinta">{sitio.nombre}</strong>, {sitio.titulo.toLowerCase()}.
            Creo páginas web completas, con su diseño y su lógica, y sistemas web a la medida para que
            tu negocio venda más, se organice mejor y ahorre tiempo.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={enlaceWhatsapp()}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-tinta px-7 py-4 font-semibold text-white shadow-flotante transition-all hover:-translate-y-0.5 hover:bg-cielo-700"
            >
              Quiero digitalizar mi negocio
              <Icono nombre="flecha" className="size-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full border border-cielo-200 bg-white/80 px-7 py-4 font-semibold text-tinta transition-colors hover:border-cielo-300 hover:bg-white"
            >
              Ver servicios
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-tinta-suave">
            {["Atención cercana y en español", "Diseño a tu medida", "Acompañamiento después del lanzamiento"].map(
              (punto) => (
                <li key={punto} className="flex items-center gap-2">
                  <span className="grid size-5 place-items-center rounded-full bg-menta text-menta-fuerte">
                    <Icono nombre="check" className="size-3.5" />
                  </span>
                  {punto}
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Ilustración: panel de un negocio digitalizado */}
        <div aria-hidden className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative rounded-[2rem] border border-white bg-white/85 p-6 shadow-flotante backdrop-blur">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-tinta-suave">Ventas de la semana</p>
                <p className="mt-1 font-display text-3xl font-semibold">En aumento</p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-menta px-3 py-1 text-sm font-semibold text-menta-fuerte">
                <Icono nombre="grafica" className="size-4" />
                Al día
              </span>
            </div>

            <div className="mt-8 flex h-40 items-end gap-3">
              {barras.map((alto, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t-xl ${i === barras.length - 1 ? "bg-cielo-400" : "bg-cielo-200"}`}
                  style={{ height: `${alto}%` }}
                />
              ))}
            </div>
            <div className="mt-3 flex justify-between text-xs text-tinta-suave">
              {["L", "M", "M", "J", "V", "S", "D"].map((dia, i) => (
                <span key={i} className="flex-1 text-center">{dia}</span>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { icono: "carrito", texto: "Pedidos", fondo: "bg-durazno", color: "text-durazno-fuerte" },
                { icono: "caja", texto: "Inventario", fondo: "bg-lavanda", color: "text-lavanda-fuerte" },
                { icono: "chat", texto: "Clientes", fondo: "bg-mantequilla", color: "text-mantequilla-fuerte" },
              ].map((item) => (
                <div key={item.texto} className={`rounded-2xl ${item.fondo} p-3`}>
                  <Icono nombre={item.icono as "carrito"} className={`size-5 ${item.color}`} />
                  <p className="mt-2 text-xs font-semibold text-tinta">{item.texto}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -top-12 -left-4 flex animate-flotar items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-flotante sm:-left-10">
            <span className="grid size-9 place-items-center rounded-xl bg-durazno text-durazno-fuerte">
              <Icono nombre="carrito" className="size-5" />
            </span>
            <div>
              <p className="text-xs text-tinta-suave">Tienda en línea</p>
              <p className="text-sm font-semibold">¡Nuevo pedido!</p>
            </div>
          </div>

          <div className="absolute -right-3 -bottom-6 flex animate-flotar items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-flotante [animation-delay:-3.5s] sm:-right-8">
            <span className="grid size-9 place-items-center rounded-xl bg-lavanda text-lavanda-fuerte">
              <Icono nombre="reloj" className="size-5" />
            </span>
            <div>
              <p className="text-xs text-tinta-suave">Abierto en internet</p>
              <p className="text-sm font-semibold">24 horas, 7 días</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
