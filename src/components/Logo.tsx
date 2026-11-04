import { useId } from "react";

// Logotipo de Fernanda Vásquez: monograma "FV" en un cuadro suave celeste–lavanda,
// con una chispa que representa la creatividad y la transformación digital.
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
      <g fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        {/* F */}
        <path d="M9.5 28.5V11.5h8M9.5 19.5h6" />
        {/* V */}
        <path d="M19.5 11.5l4.75 17 4.75-17" />
      </g>
      {/* Chispa */}
      <path
        d="M32.5 5.5c.25 1.4.85 2 2.25 2.25-1.4.25-2 .85-2.25 2.25-.25-1.4-.85-2-2.25-2.25 1.4-.25 2-.85 2.25-2.25z"
        fill="#fff5d8"
      />
    </svg>
  );
}
