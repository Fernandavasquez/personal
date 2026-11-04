import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { BotonWhatsapp } from "@/components/BotonWhatsapp";
import { Encabezado } from "@/components/Encabezado";
import { Pie } from "@/components/Pie";
import { sitio } from "@/data/sitio";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "opsz"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${sitio.nombreCorto} · Desarrollo web y sistemas en Quetzaltenango`,
  description:
    "Ingeniera en Informática y Sistemas en Quetzaltenango, con clientes en toda Guatemala. Páginas web completas, sistemas web a la medida y servicio mensual para digitalizar tu negocio.",
  keywords: [
    "desarrollo web Quetzaltenango",
    "páginas web Guatemala",
    "sistemas a medida",
    "digitalizar negocio",
    "Xela",
  ],
  openGraph: {
    title: `${sitio.nombreCorto} · Digitaliza tu negocio`,
    description:
      "Páginas web completas y sistemas web a la medida para negocios de Guatemala.",
    locale: "es_GT",
    type: "website",
  },
};

// Aplica el tema guardado (o el del sistema) antes de pintar la página, para evitar un destello.
const scriptTema = `try{var t=localStorage.getItem("tema");if(t==="oscuro"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-GT"
      suppressHydrationWarning
      className={`${fraunces.variable} ${jakarta.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: scriptTema }} />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Encabezado />
        {children}
        <Pie />
        <BotonWhatsapp />
      </body>
    </html>
  );
}
