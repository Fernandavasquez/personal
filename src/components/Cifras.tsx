import type { ReactNode } from "react";
import { sitio } from "@/data/sitio";
import { Contador } from "./Contador";
import { Icono, type NombreIcono } from "./Icono";

const cifras: { icono: NombreIcono; valor: ReactNode; texto: string; fondo: string; color: string }[] = [
  {
    icono: "cohete",
    valor: <Contador valor={sitio.proyectosEntregados} sufijo="+" />,
    texto: "Proyectos entregados",
    fondo: "bg-cielo-100",
    color: "text-cielo-600",
  },
  {
    icono: "estrella",
    valor: <Contador valor={sitio.aniosExperiencia} />,
    texto: sitio.aniosExperiencia === 1 ? "Año de experiencia" : "Años de experiencia",
    fondo: "bg-lavanda",
    color: "text-lavanda-fuerte",
  },
  {
    icono: "mapa",
    valor: "Toda Guatemala",
    texto: "Clientes en todo el país",
    fondo: "bg-menta",
    color: "text-menta-fuerte",
  },
];

export function Cifras() {
  return (
    <section aria-label="Cifras" className="relative -mt-6 pb-6">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <ul
          data-aparecer
          className="grid divide-y divide-cielo-100 rounded-[2rem] border border-white bg-white/85 shadow-flotante backdrop-blur sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          {cifras.map((cifra) => (
            <li key={cifra.texto} className="group flex items-center gap-4 px-7 py-6 sm:justify-center">
              <span className={`grid size-12 shrink-0 place-items-center rounded-2xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${cifra.fondo} ${cifra.color}`}>
                <Icono nombre={cifra.icono} />
              </span>
              <div>
                <p className="font-display text-3xl font-semibold leading-none tracking-tight">{cifra.valor}</p>
                <p className="mt-1.5 text-sm text-tinta-suave">{cifra.texto}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
