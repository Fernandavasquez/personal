import { useId } from "react";

// Logotipo de Fernanda Vásquez: monograma "FV" dentro de los signos < >, como una etiqueta de código,
// sobre un cuadro suave celeste–lavanda. Representa la programación y el desarrollo web.
// Los colores son fijos para que el logo se vea igual en modo claro y oscuro.
export function Logo({ className = "size-10" }: { className?: string }) {
  const id = useId();
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id={`${id}-fondo`} x1="4" y1="2" x2="36" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#a3d3f6" />
          <stop offset="0.55" stopColor="#7fb6ea" />
          <stop offset="1" stopColor="#a99ce8" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="38" height="38" rx="12" fill={`url(#${id}-fondo)`} />
      <rect x="1" y="1" width="38" height="38" rx="12" fill="none" stroke="#fff" strokeOpacity="0.45" />
      {/* Signos de código < > */}
      <g fill="none" stroke="#fff5d8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 15.5l-4 4.5 4 4.5" />
        <path d="M32 15.5l4 4.5-4 4.5" />
      </g>
      {/* F y V */}
      <g fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11.5 26.5V13.5h6M11.5 19.75h4.5" />
        <path d="M20 13.5l3.75 13 3.75-13" />
      </g>
    </svg>
  );
}
