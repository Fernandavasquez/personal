"use client";

import { useSyncExternalStore } from "react";
import { Icono } from "./Icono";

// El tema se guarda como clase "dark" en <html>; el script de layout.tsx la aplica antes de pintar.
function suscribir(alCambiar: () => void) {
  const observador = new MutationObserver(alCambiar);
  observador.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observador.disconnect();
}

const esOscuro = () => document.documentElement.classList.contains("dark");

export function BotonTema({ className = "" }: { className?: string }) {
  const oscuro = useSyncExternalStore(suscribir, esOscuro, () => false);

  const cambiar = () => {
    const nuevo = !oscuro;
    document.documentElement.classList.toggle("dark", nuevo);
    try {
      localStorage.setItem("tema", nuevo ? "oscuro" : "claro");
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={cambiar}
      aria-label={oscuro ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={oscuro ? "Modo claro" : "Modo oscuro"}
      className={`grid size-11 place-items-center rounded-2xl text-tinta-suave transition-colors hover:bg-cielo-100 hover:text-tinta ${className}`}
    >
      <Icono nombre={oscuro ? "sol" : "luna"} className="size-5" />
    </button>
  );
}
