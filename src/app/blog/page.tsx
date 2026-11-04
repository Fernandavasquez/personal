import type { Metadata } from "next";
import { TarjetaConsejo } from "@/components/TarjetaConsejo";
import { consejos } from "@/data/consejos";
import { sitio } from "@/data/sitio";

export const metadata: Metadata = {
  title: `Consejos para digitalizar tu negocio · ${sitio.nombreCorto}`,
  description:
    "Consejos sencillos sobre páginas web, sistemas y tecnología para negocios de Guatemala, por Fernanda Vásquez.",
};

export default function Blog() {
  const ordenados = [...consejos].sort((a, b) => b.fecha.localeCompare(a.fecha));

  return (
    <main className="relative flex-1 overflow-hidden pt-36 pb-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 size-[26rem] rounded-full bg-cielo-200/70 blur-3xl" />
        <div className="absolute top-10 right-[-6rem] size-[22rem] rounded-full bg-lavanda blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-cielo-600 uppercase shadow-suave">
            <span className="size-1.5 rounded-full bg-cielo-400" />
            Blog
          </p>
          <h1 className="mt-5 text-balance font-display text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl">
            Consejos para <span className="italic text-cielo-600">digitalizar tu negocio</span>
          </h1>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-tinta-suave">
            Te comparto lo que he aprendido ayudando a negocios a dar el salto digital, explicado de forma sencilla y sin
            tecnicismos.
          </p>
        </div>

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ordenados.map((consejo) => (
            <TarjetaConsejo key={consejo.slug} consejo={consejo} />
          ))}
        </ul>
      </div>
    </main>
  );
}
