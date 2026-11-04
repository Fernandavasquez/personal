import { Icono, type NombreIcono } from "./Icono";
import { Titulo } from "./Titulo";

const pasos: { icono: NombreIcono; titulo: string; texto: string }[] = [
  {
    icono: "chat",
    titulo: "Platicamos",
    texto: "Me cuentas cómo funciona tu negocio y qué quieres lograr. Sin tecnicismos y sin compromiso.",
  },
  {
    icono: "pincel",
    titulo: "Diseñamos",
    texto: "Te presento una propuesta visual y un plan claro, con tiempos y costos definidos desde el inicio.",
  },
  {
    icono: "codigo",
    titulo: "Desarrollo",
    texto: "Construyo tu página o sistema y te muestro avances para que lo revises y opines en cada etapa.",
  },
  {
    icono: "cohete",
    titulo: "Lanzamos",
    texto: "Lo publicamos, te enseño a usarlo y te sigo acompañando para que todo funcione perfecto.",
  },
];

export function Proceso() {
  return (
    <section id="proceso" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Titulo
          etiqueta="Cómo trabajo"
          descripcion="Un proceso sencillo y transparente: siempre sabrás en qué etapa va tu proyecto."
        >
          De la idea a tu negocio <span className="italic text-cielo-600">en línea</span>
        </Titulo>

        <div className="relative mt-16">
        <div
          aria-hidden
          className="absolute top-8 right-[12%] left-[12%] hidden h-0.5 bg-[repeating-linear-gradient(90deg,var(--color-cielo-300)_0_8px,transparent_8px_16px)] md:block"
        />
        <ol className="relative grid gap-10 md:grid-cols-4 md:gap-6">
          {pasos.map((paso, i) => (
            <li key={paso.titulo} data-aparecer style={{ "--retraso": `${i * 120}ms` } as React.CSSProperties} className="relative flex flex-col items-center text-center">
              <span className="relative grid size-16 place-items-center rounded-full border-4 border-cielo-50 bg-white text-cielo-600 shadow-flotante">
                <Icono nombre={paso.icono} className="size-7" />
                <span className="absolute -top-1 -right-1 grid size-6 place-items-center rounded-full bg-tinta text-xs font-semibold text-white">
                  {i + 1}
                </span>
              </span>
              <h3 className="mt-5 font-display text-xl font-medium">{paso.titulo}</h3>
              <p className="mt-2 max-w-xs leading-relaxed text-tinta-suave">{paso.texto}</p>
            </li>
          ))}
        </ol>
        </div>
      </div>
    </section>
  );
}
