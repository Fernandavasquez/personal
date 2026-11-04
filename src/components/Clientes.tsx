import { Icono, type NombreIcono } from "./Icono";
import { Titulo } from "./Titulo";

const negocios: { icono: NombreIcono; nombre: string; ejemplo: string; fondo: string; color: string }[] = [
  { icono: "tienda", nombre: "Tiendas y comercios", ejemplo: "Catálogo en línea e inventario", fondo: "bg-cielo-100", color: "text-cielo-600" },
  { icono: "plato", nombre: "Restaurantes y cafés", ejemplo: "Menú digital y pedidos", fondo: "bg-durazno", color: "text-durazno-fuerte" },
  { icono: "salud", nombre: "Clínicas y consultorios", ejemplo: "Citas y expedientes", fondo: "bg-menta", color: "text-menta-fuerte" },
  { icono: "tijeras", nombre: "Salones y spas", ejemplo: "Reservas y promociones", fondo: "bg-lavanda", color: "text-lavanda-fuerte" },
  { icono: "libro", nombre: "Colegios y academias", ejemplo: "Inscripciones y notas", fondo: "bg-mantequilla", color: "text-mantequilla-fuerte" },
  { icono: "herramienta", nombre: "Ferreterías y distribuidoras", ejemplo: "Control de productos y ventas", fondo: "bg-cielo-100", color: "text-cielo-600" },
  { icono: "edificio", nombre: "Empresas y oficinas", ejemplo: "Planillas, reportes y procesos", fondo: "bg-lavanda", color: "text-lavanda-fuerte" },
  { icono: "corazon", nombre: "Emprendimientos", ejemplo: "Tu primera página profesional", fondo: "bg-durazno", color: "text-durazno-fuerte" },
];

export function Clientes() {
  return (
    <section id="clientes" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Titulo
          etiqueta="¿Para quién trabajo?"
          descripcion="Desde Quetzaltenango trabajo con clientes de todo el país. Platicamos por WhatsApp, llamada o videollamada, así que no importa en qué departamento esté tu negocio."
        >
          Negocios de <span className="italic text-cielo-600">toda Guatemala</span>
        </Titulo>

        <ul className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {negocios.map((negocio, i) => (
            <li
              key={negocio.nombre}
              data-aparecer
              style={{ "--retraso": `${(i % 4) * 70}ms` } as React.CSSProperties}
              className="rounded-3xl border border-white bg-white/80 p-5 shadow-suave transition-all duration-300 hover:-translate-y-1 hover:shadow-flotante sm:p-6"
            >
              <span className={`grid size-11 place-items-center rounded-2xl ${negocio.fondo} ${negocio.color}`}>
                <Icono nombre={negocio.icono} className="size-5.5" />
              </span>
              <h3 className="mt-4 font-semibold leading-snug">{negocio.nombre}</h3>
              <p className="mt-1 text-sm text-tinta-suave">{negocio.ejemplo}</p>
            </li>
          ))}
        </ul>

        <div
          data-aparecer
          className="mt-8 flex flex-col items-center gap-4 rounded-3xl bg-gradient-to-r from-cielo-100 via-lavanda to-menta px-6 py-6 text-center sm:flex-row sm:justify-center sm:text-left"
        >
          <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white text-cielo-600 shadow-suave">
            <Icono nombre="mapa" />
          </span>
          <p className="max-w-2xl text-tinta">
            <strong className="font-semibold">¿Tu negocio está en otro lugar del país?</strong>{" "}
            <span className="text-tinta-suave">
              Guatemala, Huehuetenango, San Marcos, Retalhuleu o donde estés: trabajamos juntos en línea con la misma
              atención cercana.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
