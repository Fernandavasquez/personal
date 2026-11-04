import { enlaceWhatsapp } from "@/data/sitio";
import { Icono, type NombreIcono } from "./Icono";
import { Titulo } from "./Titulo";

const servicios: {
  icono: NombreIcono;
  titulo: string;
  resumen: string;
  incluye: string[];
  fondo: string;
  color: string;
  mensaje: string;
}[] = [
  {
    icono: "monitor",
    titulo: "Páginas web completas",
    resumen: "Diseño y lógica: una página bonita por fuera y que funciona por dentro.",
    incluye: [
      "Diseño atractivo que se ve bien en celular y computadora",
      "Frontend: lo que tus clientes ven y usan",
      "Backend: formularios, base de datos y panel para administrar",
      "Preparada para aparecer en Google",
    ],
    fondo: "bg-cielo-100",
    color: "text-cielo-600",
    mensaje: "¡Hola Fernanda! Me interesa una página web para mi negocio.",
  },
  {
    icono: "flujo",
    titulo: "Sistemas web a la medida",
    resumen: "Herramientas hechas para la forma en que trabaja tu negocio, no al revés.",
    incluye: [
      "Control de inventario, ventas y clientes",
      "Planillas y nómina",
      "Reportes y estadísticas automáticas",
      "Usuarios y permisos para tu equipo",
    ],
    fondo: "bg-lavanda",
    color: "text-lavanda-fuerte",
    mensaje: "¡Hola Fernanda! Me interesa un sistema web a la medida.",
  },
  {
    icono: "corazon",
    titulo: "Servicio mensual",
    resumen: "Tu página o sistema siempre al día, sin preocuparte por la parte técnica.",
    incluye: [
      "Mantenimiento y actualizaciones",
      "Cambios de contenido, precios y fotos",
      "Respaldos y revisión de seguridad",
      "Soporte cuando lo necesites",
    ],
    fondo: "bg-menta",
    color: "text-menta-fuerte",
    mensaje: "¡Hola Fernanda! Me interesa el servicio mensual.",
  },
];

export function Servicios() {
  return (
    <section id="servicios" className="relative py-20 sm:py-28">
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-white/70 to-transparent" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Titulo
          etiqueta="Servicios"
          descripcion="Elige lo que necesitas hoy. Si aún no sabes qué te conviene, lo platicamos y te recomiendo la mejor opción para tu negocio."
        >
          Soluciones digitales <span className="italic text-cielo-600">hechas para ti</span>
        </Titulo>

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {servicios.map((servicio, i) => (
            <li
              key={servicio.titulo}
              data-aparecer
              style={{ "--retraso": `${i * 110}ms` } as React.CSSProperties}
              className={`relative flex flex-col rounded-[2rem] border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-flotante ${
                i === 1 ? "border-cielo-300 shadow-flotante" : "border-cielo-100 shadow-suave"
              }`}
            >
              {i === 1 && (
                <span className="absolute -top-3.5 left-8 inline-flex items-center gap-1.5 rounded-full bg-tinta px-3.5 py-1 text-xs font-semibold text-white">
                  <Icono nombre="estrella" className="size-3.5" />
                  Mi especialidad
                </span>
              )}
              <span className={`grid size-14 place-items-center rounded-2xl ${servicio.fondo} ${servicio.color}`}>
                <Icono nombre={servicio.icono} className="size-7" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-medium">{servicio.titulo}</h3>
              <p className="mt-3 leading-relaxed text-tinta-suave">{servicio.resumen}</p>

              <ul className="mt-6 flex-1 space-y-3 border-t border-cielo-100 pt-6">
                {servicio.incluye.map((punto) => (
                  <li key={punto} className="flex gap-3 text-[0.95rem] text-tinta">
                    <Icono nombre="check" className="mt-0.5 size-5 shrink-0 text-cielo-500" />
                    {punto}
                  </li>
                ))}
              </ul>

              <a
                href={enlaceWhatsapp(servicio.mensaje)}
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold transition-all ${
                  i === 1
                    ? "bg-tinta text-white hover:bg-cielo-700"
                    : "bg-cielo-100 text-tinta hover:bg-cielo-200"
                }`}
              >
                Cotizar
                <Icono nombre="flecha" className="size-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
