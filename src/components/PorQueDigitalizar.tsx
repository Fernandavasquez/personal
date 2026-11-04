import { Icono, type NombreIcono } from "./Icono";
import { Titulo } from "./Titulo";

const razones: { icono: NombreIcono; titulo: string; texto: string; fondo: string; color: string }[] = [
  {
    icono: "lupa",
    titulo: "Te encuentran más clientes",
    texto: "Hoy la gente busca en Google y en redes antes de comprar. Si tu negocio no aparece, ese cliente se va con alguien que sí aparece.",
    fondo: "bg-cielo-100",
    color: "text-cielo-600",
  },
  {
    icono: "reloj",
    titulo: "Atiendes las 24 horas",
    texto: "Tu página muestra productos, precios y horarios aunque tu local esté cerrado. Tus clientes pueden consultar y pedir a cualquier hora.",
    fondo: "bg-lavanda",
    color: "text-lavanda-fuerte",
  },
  {
    icono: "caja",
    titulo: "Todo ordenado en un lugar",
    texto: "Inventario, ventas, clientes y pagos en un sistema, no en cuadernos ni hojas sueltas. Menos errores, menos pérdidas.",
    fondo: "bg-menta",
    color: "text-menta-fuerte",
  },
  {
    icono: "rayo",
    titulo: "Ahorras tiempo cada día",
    texto: "Automatiza cálculos, reportes y tareas repetitivas para dedicar tu energía a lo que de verdad hace crecer tu negocio.",
    fondo: "bg-mantequilla",
    color: "text-mantequilla-fuerte",
  },
  {
    icono: "grafica",
    titulo: "Decides con datos reales",
    texto: "Sabe qué se vende más, qué día entra más gente y dónde se te va el dinero, con reportes claros y siempre actualizados.",
    fondo: "bg-durazno",
    color: "text-durazno-fuerte",
  },
  {
    icono: "escudo",
    titulo: "Das una imagen profesional",
    texto: "Una página propia y bien hecha genera confianza. Tus clientes ven un negocio serio, moderno y fácil de contactar.",
    fondo: "bg-cielo-100",
    color: "text-cielo-600",
  },
];

const antes = [
  "Pedidos anotados en cuadernos o en el chat",
  "No sabes con exactitud cuánto inventario tienes",
  "Solo te conocen quienes pasan por tu local",
  "Horas armando cuentas y reportes a mano",
];

const despues = [
  "Pedidos ordenados y en un solo lugar",
  "Inventario al día con alertas cuando algo se acaba",
  "Te encuentran por internet en Xela y en todo el país",
  "Reportes listos en un clic",
];

export function PorQueDigitalizar() {
  return (
    <section id="por-que" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Titulo
          etiqueta="Por qué digitalizar ya"
          descripcion="Tus clientes ya están en internet. Digitalizarte no es un lujo de empresas grandes: es la forma de que un negocio de cualquier tamaño siga creciendo."
        >
          El mejor momento para digitalizar tu negocio{" "}
          <span className="italic text-cielo-600">es hoy</span>
        </Titulo>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {razones.map((razon, i) => (
            <li
              key={razon.titulo}
              data-aparecer
              style={{ "--retraso": `${(i % 3) * 90}ms` } as React.CSSProperties}
              className="group rounded-3xl border border-white bg-white/80 p-7 shadow-suave transition-all duration-300 hover:-translate-y-1 hover:shadow-flotante"
            >
              <span className={`grid size-12 place-items-center rounded-2xl ${razon.fondo} ${razon.color}`}>
                <Icono nombre={razon.icono} />
              </span>
              <h3 className="mt-5 font-display text-xl font-medium">{razon.titulo}</h3>
              <p className="mt-2.5 leading-relaxed text-tinta-suave">{razon.texto}</p>
            </li>
          ))}
        </ul>

        <div data-aparecer className="mt-16 grid overflow-hidden rounded-[2rem] shadow-flotante md:grid-cols-2">
          <div className="bg-white p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-durazno-fuerte">Sin digitalizar</p>
            <ul className="mt-6 space-y-4">
              {antes.map((punto) => (
                <li key={punto} className="flex gap-3 text-tinta-suave">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-durazno text-durazno-fuerte">
                    <Icono nombre="equis" className="size-3.5" />
                  </span>
                  {punto}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-cielo-200 via-cielo-100 to-lavanda p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cielo-700">Con tu negocio digital</p>
            <ul className="mt-6 space-y-4">
              {despues.map((punto) => (
                <li key={punto} className="flex gap-3 font-medium text-tinta">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-white text-menta-fuerte">
                    <Icono nombre="check" className="size-3.5" />
                  </span>
                  {punto}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
