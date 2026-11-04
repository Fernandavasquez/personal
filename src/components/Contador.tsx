"use client";

import { useEffect, useRef, useState } from "react";

// Muestra un número que "cuenta" desde 0 hasta su valor cuando aparece en pantalla.
// El HTML inicial ya trae el valor final (bueno para Google y si no hay JavaScript).
export function Contador({ valor, sufijo = "" }: { valor: number; sufijo?: string }) {
  const [actual, setActual] = useState(valor);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const elemento = ref.current;
    if (!elemento || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cuadro = 0;
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) return;
        observador.disconnect();
        const inicio = performance.now();
        const duracion = 1400;
        const paso = (ahora: number) => {
          const progreso = Math.min((ahora - inicio) / duracion, 1);
          const suavizado = 1 - Math.pow(1 - progreso, 3);
          setActual(Math.round(valor * suavizado));
          if (progreso < 1) cuadro = requestAnimationFrame(paso);
        };
        setActual(0);
        cuadro = requestAnimationFrame(paso);
      },
      { threshold: 0.6 },
    );
    observador.observe(elemento);
    return () => {
      observador.disconnect();
      cancelAnimationFrame(cuadro);
    };
  }, [valor]);

  return (
    <span ref={ref} className="tabular-nums">
      {actual}
      {sufijo}
    </span>
  );
}
