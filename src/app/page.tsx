import { Animaciones } from "@/components/Animaciones";
import { BotonWhatsapp } from "@/components/BotonWhatsapp";
import { Contacto } from "@/components/Contacto";
import { Encabezado } from "@/components/Encabezado";
import { Pie } from "@/components/Pie";
import { PorQueDigitalizar } from "@/components/PorQueDigitalizar";
import { Portada } from "@/components/Portada";
import { Preguntas } from "@/components/Preguntas";
import { Proceso } from "@/components/Proceso";
import { Servicios } from "@/components/Servicios";
import { SobreMi } from "@/components/SobreMi";
import { Tecnologias } from "@/components/Tecnologias";

export default function Inicio() {
  return (
    <>
      <Encabezado />
      <main className="flex-1">
        <Portada />
        <PorQueDigitalizar />
        <Servicios />
        <Tecnologias />
        <Proceso />
        <SobreMi />
        <Preguntas />
        <Contacto />
      </main>
      <Pie />
      <BotonWhatsapp />
      <Animaciones />
    </>
  );
}
