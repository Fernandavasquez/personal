// Artículos del blog "Consejos". Para agregar uno nuevo, copia un bloque y cambia su contenido.
// Tipos de bloque: "p" (párrafo), "h2" (subtítulo), "lista" (viñetas) y "nota" (recuadro destacado).

export type Bloque =
  | { tipo: "p"; texto: string }
  | { tipo: "h2"; texto: string }
  | { tipo: "lista"; items: string[] }
  | { tipo: "nota"; texto: string };

export type Consejo = {
  slug: string;
  titulo: string;
  resumen: string;
  fecha: string; // AAAA-MM-DD
  minutos: number;
  categoria: string;
  tono: "cielo" | "lavanda" | "menta" | "durazno";
  contenido: Bloque[];
};

export const consejos: Consejo[] = [
  {
    slug: "senales-de-que-tu-negocio-necesita-un-sistema",
    titulo: "5 señales de que tu negocio ya necesita un sistema",
    resumen:
      "Si todavía llevas todo en cuadernos, hojas de Excel sueltas o en tu memoria, estas señales te dirán si llegó el momento de dar el paso.",
    fecha: "2026-11-03",
    minutos: 4,
    categoria: "Sistemas",
    tono: "lavanda",
    contenido: [
      {
        tipo: "p",
        texto:
          "Muchos negocios empiezan con un cuaderno y una calculadora, y está perfecto. Pero conforme creces, esas herramientas se quedan cortas y empiezan a costarte tiempo y dinero sin que te des cuenta. Estas son cinco señales de que es momento de tener un sistema propio.",
      },
      { tipo: "h2", texto: "1. No sabes con exactitud cuánto inventario tienes" },
      {
        tipo: "p",
        texto:
          "Si para saber cuántas unidades te quedan tienes que ir a contar a la bodega, o te enteras de que algo se acabó cuando un cliente lo pide, un sistema de inventario te avisaría antes y te ahorraría ventas perdidas.",
      },
      { tipo: "h2", texto: "2. Pasas horas haciendo cuentas y reportes" },
      {
        tipo: "p",
        texto:
          "Cerrar el día, calcular planillas o preparar el reporte del mes no debería llevarte toda una tarde. Un sistema hace esos cálculos solo, sin errores, y te deja el reporte listo en un clic.",
      },
      { tipo: "h2", texto: "3. La información está regada en muchos lugares" },
      {
        tipo: "p",
        texto:
          "Un poco en el cuaderno, otro poco en el chat de WhatsApp, algo en una hoja de Excel en la computadora de alguien más… Cuando la información está dispersa, es fácil perder datos y tomar malas decisiones.",
      },
      { tipo: "h2", texto: "4. Dependes de una sola persona para que todo funcione" },
      {
        tipo: "p",
        texto:
          "Si solo tú (o un empleado) sabe cómo están las cuentas, el negocio se detiene cuando esa persona no está. Un sistema ordena los procesos para que cualquiera de tu equipo pueda consultar y trabajar.",
      },
      { tipo: "h2", texto: "5. Quieres crecer, pero sientes que no das abasto" },
      {
        tipo: "p",
        texto:
          "Abrir otra sucursal, vender en línea o atender más clientes es mucho más fácil cuando tu operación ya está ordenada. El sistema crece contigo.",
      },
      {
        tipo: "nota",
        texto:
          "¿Te identificaste con dos o más señales? Probablemente un sistema a la medida te ahorraría tiempo desde el primer mes. Escríbeme y lo platicamos sin compromiso.",
      },
    ],
  },
  {
    slug: "pagina-web-o-solo-redes-sociales",
    titulo: "¿Página web o solo redes sociales? Lo que tu negocio necesita",
    resumen:
      "Las redes sociales son excelentes para darte a conocer, pero no son tuyas. Te explico por qué una página web propia es la base de tu presencia digital.",
    fecha: "2026-11-03",
    minutos: 3,
    categoria: "Páginas web",
    tono: "cielo",
    contenido: [
      {
        tipo: "p",
        texto:
          "Muchos negocios en Guatemala venden muy bien por Facebook, Instagram o WhatsApp. ¡Y eso está genial! Pero depender solo de redes sociales tiene algunos riesgos que conviene conocer.",
      },
      { tipo: "h2", texto: "Las redes sociales no son tuyas" },
      {
        tipo: "p",
        texto:
          "Si la plataforma cambia sus reglas, baja el alcance de tus publicaciones o bloquea tu cuenta, pierdes de un día para otro el contacto con tus clientes. Tu página web, en cambio, es tuya: nadie te la puede quitar.",
      },
      { tipo: "h2", texto: "Google te encuentra por tu página" },
      {
        tipo: "p",
        texto:
          "Cuando alguien busca “pastelería en Xela” o “ferretería cerca de mí”, Google muestra páginas web. Sin una, es mucho más difícil que te encuentren clientes nuevos que todavía no te siguen.",
      },
      { tipo: "h2", texto: "Una página da confianza" },
      {
        tipo: "p",
        texto:
          "Una página propia, con tu información clara, tus servicios y tus datos de contacto, hace que tu negocio se vea serio y profesional, sobre todo para clientes que te visitan por primera vez.",
      },
      { tipo: "h2", texto: "Lo ideal: usar las dos" },
      {
        tipo: "lista",
        items: [
          "Las redes sociales te ayudan a darte a conocer y a conversar con tus clientes.",
          "Tu página web es el lugar oficial donde encuentran todo: servicios, precios, ubicación y contacto.",
          "Desde tus redes puedes enviar a la gente a tu página, y desde tu página a tus redes.",
        ],
      },
      {
        tipo: "nota",
        texto: "Tu página web es como tu local en internet: abierto las 24 horas y siempre con tu mejor cara.",
      },
    ],
  },
  {
    slug: "como-preparar-tu-negocio-para-digitalizarlo",
    titulo: "Cómo preparar tu negocio antes de digitalizarlo",
    resumen:
      "Una lista sencilla de lo que conviene tener a la mano antes de empezar tu página o sistema, para que el proyecto avance rápido y salga como lo imaginas.",
    fecha: "2026-11-03",
    minutos: 3,
    categoria: "Primeros pasos",
    tono: "menta",
    contenido: [
      {
        tipo: "p",
        texto:
          "Digitalizar tu negocio no tiene que ser complicado. Con un poco de preparación, el proceso es más rápido, más económico y el resultado se parece mucho más a lo que tienes en mente.",
      },
      { tipo: "h2", texto: "1. Ten claro qué problema quieres resolver" },
      {
        tipo: "p",
        texto:
          "¿Quieres que te encuentren más clientes? ¿Ordenar tu inventario? ¿Dejar de hacer planillas a mano? Empezar por el problema más importante ayuda a definir qué necesitas primero.",
      },
      { tipo: "h2", texto: "2. Reúne tu información" },
      {
        tipo: "lista",
        items: [
          "Tu logo y los colores de tu marca, si ya los tienes.",
          "Fotos de buena calidad de tus productos, tu local o tu trabajo.",
          "La lista de tus servicios o productos, con descripciones y precios.",
          "Tus datos de contacto: teléfono, WhatsApp, redes y ubicación.",
        ],
      },
      { tipo: "h2", texto: "3. Piensa en cómo trabajas hoy" },
      {
        tipo: "p",
        texto:
          "Si vas a necesitar un sistema, anota los pasos que sigues en tu día a día: cómo recibes un pedido, cómo registras una venta, cómo calculas un pago. Eso me permite diseñar algo que se adapte a ti y no al revés.",
      },
      { tipo: "h2", texto: "4. Busca ejemplos que te gusten" },
      {
        tipo: "p",
        texto:
          "Guarda páginas o aplicaciones que te llamen la atención, aunque sean de otro rubro. Son una gran guía para entender el estilo que buscas.",
      },
      {
        tipo: "nota",
        texto:
          "¿No tienes todo listo? ¡No te preocupes! Te acompaño en cada paso y juntos definimos lo que haga falta.",
      },
    ],
  },
];

export function obtenerConsejo(slug: string) {
  return consejos.find((consejo) => consejo.slug === slug);
}

export function formatearFecha(fecha: string) {
  const [anio, mes, dia] = fecha.split("-").map(Number);
  return new Intl.DateTimeFormat("es-GT", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(Date.UTC(anio, mes - 1, dia)),
  );
}

export const tonos = {
  cielo: { fondo: "bg-cielo-100", texto: "text-cielo-600", degradado: "from-cielo-200 to-cielo-100" },
  lavanda: { fondo: "bg-lavanda", texto: "text-lavanda-fuerte", degradado: "from-lavanda to-cielo-100" },
  menta: { fondo: "bg-menta", texto: "text-menta-fuerte", degradado: "from-menta to-cielo-100" },
  durazno: { fondo: "bg-durazno", texto: "text-durazno-fuerte", degradado: "from-durazno to-lavanda" },
} as const;
