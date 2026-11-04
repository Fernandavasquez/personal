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
          descripcion="Trabajo con todo tipo de negocios, pequeños o grandes, en Xela y en todo el país. Estos son algunos ejemplos de lo que puedo hacer por el tuyo."
        >
          Para <span className="italic text-cielo-600">todo tipo de negocio</span>
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

        <p data-aparecer className="mt-10 text-center text-lg text-tinta-suave">
          …y <strong className="font-semibold text-tinta">cualquier otro negocio</strong> que quiera crecer en digital. ✨
        </p>
      </div>
    </section>
  );
}
