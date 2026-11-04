"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { enlacesNavegacion, sitio } from "@/data/sitio";
import { BotonTema } from "./BotonTema";
import { Icono } from "./Icono";
import { Logo } from "./Logo";

export function Encabezado() {
  const [abierto, setAbierto] = useState(false);
  const [conSombra, setConSombra] = useState(false);

  useEffect(() => {
    const alDesplazar = () => setConSombra(window.scrollY > 8);
    alDesplazar();
    window.addEventListener("scroll", alDesplazar, { passive: true });
    return () => window.removeEventListener("scroll", alDesplazar);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        conSombra || abierto ? "bg-white/80 shadow-suave backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setAbierto(false)}>
          <Logo className="size-10 drop-shadow-sm" />
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold">{sitio.nombreCorto}</span>
            <span className="block text-xs text-tinta-suave">Desarrollo web y sistemas</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {enlacesNavegacion.map((enlace) => (
            <li key={enlace.href}>
              <Link
                href={enlace.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-tinta-suave transition-colors hover:bg-cielo-100 hover:text-tinta"
              >
                {enlace.texto}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <BotonTema />
          <Link
            href="/#contacto"
            className="ml-1 hidden rounded-full bg-tinta px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-cielo-700 hover:shadow-suave xl:inline-flex"
          >
            Hablemos
          </Link>
          <button
            type="button"
            onClick={() => setAbierto((valor) => !valor)}
            aria-expanded={abierto}
            aria-controls="menu-movil"
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            className="grid size-11 place-items-center rounded-2xl text-tinta transition-colors hover:bg-cielo-100 xl:hidden"
          >
            <Icono nombre={abierto ? "equis" : "menu"} />
          </button>
        </div>
      </nav>

      {abierto && (
        <div id="menu-movil" className="border-t border-cielo-100 px-5 pt-2 pb-6 xl:hidden">
          <ul className="flex flex-col">
            {enlacesNavegacion.map((enlace) => (
              <li key={enlace.href}>
                <Link
                  href={enlace.href}
                  onClick={() => setAbierto(false)}
                  className="block rounded-2xl px-4 py-3 font-medium text-tinta-suave hover:bg-cielo-100 hover:text-tinta"
                >
                  {enlace.texto}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#contacto"
            onClick={() => setAbierto(false)}
            className="mt-3 flex justify-center rounded-full bg-tinta px-5 py-3 font-semibold text-white"
          >
            Hablemos
          </Link>
        </div>
      )}
    </header>
  );
}
