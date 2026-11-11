// Datos del sitio en un solo lugar: cambia aquí tu información y se actualiza toda la página.

export const sitio = {
  nombre: "Fernanda Lisbeth Vásquez Castillo",
  nombreCorto: "Fernanda Vásquez",
  empresa: "Zentra",
  titulo: "Ingeniera en Informática y Sistemas",
  ubicacion: "Quetzaltenango, Guatemala",
  // Tu frase personal: aparece en la sección "Sobre mí".
  frase: "La tecnología es mi herramienta; el crecimiento de tu negocio, mi propósito.",

  // Teléfono para WhatsApp: código de país (502) + número, sin espacios.
  whatsapp: "50257844154",
  telefonoVisible: "+502 5784 4154",
  correo: "castilloferlisbeth@gmail.com",
  github: "https://github.com/Fernandavasquez",

  // Cifras de confianza: actualízalas cuando crezcan.
  proyectosEntregados: 10,
  aniosExperiencia: 2,
};

export const enlacesNavegacion = [
  { href: "/#por-que", texto: "Por qué digitalizar" },
  { href: "/#servicios", texto: "Servicios" },
  { href: "/#clientes", texto: "Clientes" },
  { href: "/#tecnologias", texto: "Tecnologías" },
  { href: "/#sobre-mi", texto: "Sobre mí" },
  { href: "/blog", texto: "Consejos" },
];

export function enlaceWhatsapp(mensaje = "¡Hola Fernanda! Me interesa digitalizar mi negocio.") {
  if (!sitio.whatsapp) return "#contacto";
  return `https://wa.me/${sitio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}
