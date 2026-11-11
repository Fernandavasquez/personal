import Link from "next/link";
import { enlacesNavegacion, sitio } from "@/data/sitio";
import { Logo } from "./Logo";

export function Pie() {
  return (
    <footer className="border-t border-cielo-100 bg-white/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10 text-sm text-tinta-suave sm:px-8 lg:flex-row lg:justify-between">
        <Logo subtitulo={sitio.nombre} />
        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {enlacesNavegacion.map((enlace) => (
            <li key={enlace.href}>
              <Link href={enlace.href} className="hover:text-tinta">
                {enlace.texto}
              </Link>
            </li>
          ))}
        </ul>
        <p>© 2026 {sitio.empresa}</p>
      </div>
    </footer>
  );
}
