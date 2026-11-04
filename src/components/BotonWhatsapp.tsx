"use client";

import { useEffect, useState } from "react";
import { enlaceWhatsapp } from "@/data/sitio";
import { IconoWhatsapp } from "./IconosMarca";

// Botón fijo en la esquina; aparece cuando la persona baja de la portada.
export function BotonWhatsapp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const alDesplazar = () => setVisible(window.scrollY > 400);
    alDesplazar();
    window.addEventListener("scroll", alDesplazar, { passive: true });
    return () => window.removeEventListener("scroll", alDesplazar);
  }, []);

  return (
    <a
      href={enlaceWhatsapp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbeme por WhatsApp"
      className={`group fixed right-5 bottom-5 z-40 flex items-center gap-3 transition-all duration-500 sm:right-8 sm:bottom-8 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <span className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-tinta shadow-flotante transition-all group-hover:-translate-x-1 sm:block">
        ¿Hablamos? 💬
      </span>
      <span className="relative grid size-15 place-items-center rounded-full bg-[#25d366] text-white shadow-flotante transition-transform group-hover:scale-105">
        <span aria-hidden className="absolute inset-0 animate-ping rounded-full bg-[#25d366]/40 [animation-duration:2.4s]" />
        <IconoWhatsapp className="relative size-8" />
      </span>
    </a>
  );
}
