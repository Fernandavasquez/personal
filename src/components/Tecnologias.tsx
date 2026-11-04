import { Icono, type NombreIcono } from "./Icono";
import { Titulo } from "./Titulo";

const grupos: {
  icono: NombreIcono;
  titulo: string;
  descripcion: string;
  fondo: string;
  color: string;
  punto: string;
  tecnologias: string[];
}[] = [
  {
    icono: "monitor",
    titulo: "Frontend",
    descripcion: "Lo que tus clientes ven: rápido, bonito y adaptable a cualquier pantalla.",
    fondo: "bg-cielo-100",
    color: "text-cielo-600",
    punto: "bg-cielo-400",
    tecnologias: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Hook Form", "Zod"],
  },
  {
    icono: "engranes",
    titulo: "Backend",
    descripcion: "La lógica que hace funcionar todo: seguro, ordenado y escalable.",
    fondo: "bg-lavanda",
    color: "text-lavanda-fuerte",
    punto: "bg-lavanda-fuerte",
    tecnologias: ["Node.js", "NestJS", "APIs REST", "Autenticación JWT", "Swagger", "Reportes PDF y Excel"],
  },
  {
    icono: "caja",
    titulo: "Bases de datos",
    descripcion: "Tu información guardada de forma segura y siempre disponible.",
    fondo: "bg-menta",
    color: "text-menta-fuerte",
    punto: "bg-menta-fuerte",
    tecnologias: ["PostgreSQL", "TypeORM", "Respaldos", "Modelado de datos"],
  },
  {
    icono: "herramienta",
    titulo: "Herramientas",
    descripcion: "Buenas prácticas para entregar proyectos confiables y fáciles de mantener.",
    fondo: "bg-durazno",
    color: "text-durazno-fuerte",
    punto: "bg-durazno-fuerte",
    tecnologias: ["Git y GitHub", "Docker", "Postman", "Pruebas automatizadas"],
  },
];

export function Tecnologias() {
  return (
    <section id="tecnologias" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Titulo
          etiqueta="Tecnologías"
          descripcion="Trabajo con herramientas modernas, las mismas que usan empresas de todo el mundo, para que tu proyecto sea rápido, seguro y crezca contigo."
        >
          Herramientas que <span className="italic text-cielo-600">domino</span>
        </Titulo>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2">
          {grupos.map((grupo, i) => (
            <li
              key={grupo.titulo}
              data-aparecer
              style={{ "--retraso": `${i * 90}ms` } as React.CSSProperties}
              className="rounded-[2rem] border border-white bg-white/85 p-7 shadow-suave transition-shadow duration-300 hover:shadow-flotante sm:p-8"
            >
              <div className="flex items-center gap-4">
                <span className={`grid size-12 shrink-0 place-items-center rounded-2xl ${grupo.fondo} ${grupo.color}`}>
                  <Icono nombre={grupo.icono} />
                </span>
                <div>
                  <h3 className="font-display text-xl font-medium">{grupo.titulo}</h3>
                  <p className="text-sm text-tinta-suave">{grupo.descripcion}</p>
                </div>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {grupo.tecnologias.map((tecnologia) => (
                  <li
                    key={tecnologia}
                    className="inline-flex items-center gap-2 rounded-full border border-cielo-100 bg-cielo-50 px-3.5 py-1.5 text-sm font-medium text-tinta transition-colors hover:border-cielo-200 hover:bg-white"
                  >
                    <span className={`size-1.5 rounded-full ${grupo.punto}`} />
                    {tecnologia}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
