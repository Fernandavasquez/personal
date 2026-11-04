import { enlacesNavegacion, sitio } from "@/data/sitio";

export function Pie() {
  return (
    <footer className="border-t border-cielo-100 bg-white/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10 text-sm text-tinta-suave sm:px-8 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="font-display text-base font-semibold text-tinta">{sitio.nombre}</p>
          <p className="mt-1">
            {sitio.titulo} · {sitio.ubicacion}
          </p>
        </div>
        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {enlacesNavegacion.map((enlace) => (
            <li key={enlace.href}>
              <a href={enlace.href} className="hover:text-tinta">
                {enlace.texto}
              </a>
            </li>
          ))}
        </ul>
        <p>© 2026 {sitio.nombreCorto}</p>
      </div>
    </footer>
  );
}
