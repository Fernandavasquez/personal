import { Icono } from "./Icono";
import { Titulo } from "./Titulo";

const preguntas = [
  {
    pregunta: "Mi negocio es pequeño, ¿de verdad lo necesito?",
    respuesta:
      "¡Sí! Los negocios pequeños son los que más ganan al digitalizarse: les permite competir con negocios más grandes, llegar a más clientes y ordenar su trabajo sin contratar más personal.",
  },
  {
    pregunta: "No sé nada de tecnología, ¿podré usarlo?",
    respuesta:
      "Claro que sí. Diseño todo para que sea fácil de usar y, al terminar, te enseño paso a paso cómo manejar tu página o sistema. Si te queda alguna duda, estoy para ayudarte.",
  },
  {
    pregunta: "¿Cuánto tiempo tarda un proyecto?",
    respuesta:
      "Depende de lo que necesites. Una página informativa puede estar lista en pocas semanas; un sistema a la medida lleva más tiempo. Antes de empezar te doy un plan con fechas claras.",
  },
  {
    pregunta: "¿Cuánto cuesta?",
    respuesta:
      "Cada negocio es diferente, por eso preparo una cotización según lo que necesitas. Escríbeme por WhatsApp, platicamos sin compromiso y te envío una propuesta clara.",
  },
  {
    pregunta: "¿Qué incluye el servicio mensual?",
    respuesta:
      "Mantenimiento, actualizaciones, respaldos, revisión de seguridad, cambios de contenido y soporte. Tú te enfocas en tu negocio y yo me encargo de que tu página o sistema funcione bien.",
  },
];

export function Preguntas() {
  return (
    <section id="preguntas" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Titulo etiqueta="Preguntas frecuentes">
          Resolvamos tus <span className="italic text-cielo-600">dudas</span>
        </Titulo>

        <div className="mt-12 space-y-3">
          {preguntas.map((item, i) => (
            <details
              key={item.pregunta}
              data-aparecer
              style={{ "--retraso": `${i * 70}ms` } as React.CSSProperties}
              className="group rounded-3xl border border-white bg-white/85 shadow-suave transition-shadow open:shadow-flotante"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-semibold [&::-webkit-details-marker]:hidden">
                {item.pregunta}
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-cielo-100 text-cielo-600 transition-transform duration-300 group-open:rotate-45">
                  <Icono nombre="mas" className="size-4" />
                </span>
              </summary>
              <p className="px-6 pb-6 leading-relaxed text-tinta-suave">{item.respuesta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
