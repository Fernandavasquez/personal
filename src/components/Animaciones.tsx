"use client";

import { useEffect } from "react";

// Hace aparecer suavemente cada elemento con el atributo `data-aparecer` cuando entra en pantalla.
// Sin JavaScript (o con "reducir movimiento" activado) todo se muestra normal, sin animación.
export function Animaciones() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const temporizadores: number[] = [];
    const mostrar = (elemento: Element) => {
      elemento.setAttribute("data-visible", "");
      const retraso = parseInt(getComputedStyle(elemento).getPropertyValue("--retraso")) || 0;
      temporizadores.push(window.setTimeout(() => elemento.setAttribute("data-listo", ""), 800 + retraso));
    };

    const elementos = document.querySelectorAll<HTMLElement>("[data-aparecer]");
    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) {
            mostrar(entrada.target);
            observador.unobserve(entrada.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    for (const elemento of elementos) {
      // Lo que ya está en pantalla al cargar se muestra sin animar.
      if (elemento.getBoundingClientRect().top < window.innerHeight * 0.9) {
        elemento.setAttribute("data-visible", "");
        elemento.setAttribute("data-listo", "");
      } else {
        observador.observe(elemento);
      }
    }
    document.documentElement.classList.add("animar");

    return () => {
      observador.disconnect();
      temporizadores.forEach(clearTimeout);
    };
  }, []);

  return null;
}
