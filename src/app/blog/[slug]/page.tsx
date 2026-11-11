import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icono } from "@/components/Icono";
import { TarjetaConsejo } from "@/components/TarjetaConsejo";
import { consejos, formatearFecha, obtenerConsejo, tonos } from "@/data/consejos";
import { enlaceWhatsapp, sitio } from "@/data/sitio";

export function generateStaticParams() {
  return consejos.map((consejo) => ({ slug: consejo.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const consejo = obtenerConsejo(slug);
  if (!consejo) return {};
  return {
    title: `${consejo.titulo} · ${sitio.empresa}`,
    description: consejo.resumen,
    openGraph: { title: consejo.titulo, description: consejo.resumen, type: "article", locale: "es_GT" },
  };
}

export default async function ArticuloConsejo({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const consejo = obtenerConsejo(slug);
  if (!consejo) notFound();

  const tono = tonos[consejo.tono];
  const otros = consejos.filter((otro) => otro.slug !== consejo.slug).slice(0, 2);

  return (
    <main className="relative flex-1 overflow-hidden pt-32 pb-24">
      <div aria-hidden className={`pointer-events-none absolute inset-x-0 top-0 -z-10 h-[30rem] bg-gradient-to-b ${tono.degradado} opacity-70`} />

      <article className="mx-auto max-w-3xl px-5 sm:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-tinta-suave transition-colors hover:text-tinta"
        >
          <Icono nombre="flecha" className="size-4 rotate-180" />
          Todos los consejos
        </Link>

        <header className="mt-8">
          <span className={`inline-block rounded-full bg-white px-3.5 py-1 text-xs font-semibold ${tono.texto}`}>
            {consejo.categoria}
          </span>
          <h1 className="mt-5 text-balance font-display text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl">
            {consejo.titulo}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-tinta-suave">{consejo.resumen}</p>
          <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-tinta-suave">
            <span className="font-semibold text-tinta">{sitio.nombreCorto}</span>
            <span aria-hidden>·</span>
            <time dateTime={consejo.fecha}>{formatearFecha(consejo.fecha)}</time>
            <span aria-hidden>·</span>
            {consejo.minutos} min de lectura
          </p>
        </header>

        <div className="mt-12 rounded-[2rem] border border-white bg-white/85 p-7 shadow-suave sm:p-12">
          {consejo.contenido.map((bloque, i) => {
            switch (bloque.tipo) {
              case "h2":
                return (
                  <h2 key={i} className="mt-10 font-display text-2xl font-medium first:mt-0">
                    {bloque.texto}
                  </h2>
                );
              case "lista":
                return (
                  <ul key={i} className="mt-5 space-y-3">
                    {bloque.items.map((item) => (
                      <li key={item} className="flex gap-3 text-lg leading-relaxed text-tinta-suave">
                        <Icono nombre="check" className="mt-1.5 size-5 shrink-0 text-cielo-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              case "nota":
                return (
                  <p
                    key={i}
                    className={`mt-10 rounded-3xl ${tono.fondo} px-6 py-5 text-lg leading-relaxed font-medium text-tinta`}
                  >
                    {bloque.texto}
                  </p>
                );
              default:
                return (
                  <p key={i} className="mt-4 text-lg leading-relaxed text-tinta-suave first:mt-0">
                    {bloque.texto}
                  </p>
                );
            }
          })}
        </div>

        <aside className="mt-10 flex flex-col items-center gap-5 rounded-[2rem] bg-gradient-to-br from-cielo-200 via-cielo-100 to-lavanda p-8 text-center sm:flex-row sm:text-left">
          <div className="flex-1">
            <p className="font-display text-2xl font-medium">¿Platicamos sobre tu negocio?</p>
            <p className="mt-1.5 text-tinta-suave">Cuéntame tu idea y te ayudo a hacerla realidad.</p>
          </div>
          <a
            href={enlaceWhatsapp(`¡Hola Fernanda! Leí tu consejo "${consejo.titulo}" y me gustaría platicar.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-tinta px-6 py-3.5 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-cielo-700"
          >
            Escríbeme
            <Icono nombre="flecha" className="size-4" />
          </a>
        </aside>
      </article>

      {otros.length > 0 && (
        <section className="mx-auto mt-20 max-w-6xl px-5 sm:px-8">
          <h2 className="text-center font-display text-3xl font-medium">Otros consejos</h2>
          <ul className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
            {otros.map((otro) => (
              <TarjetaConsejo key={otro.slug} consejo={otro} />
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
