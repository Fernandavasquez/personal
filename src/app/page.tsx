import { Animaciones } from "@/components/Animaciones";
import { Cifras } from "@/components/Cifras";
import { Clientes } from "@/components/Clientes";
import { ConsejosInicio } from "@/components/ConsejosInicio";
import { Contacto } from "@/components/Contacto";
import { PorQueDigitalizar } from "@/components/PorQueDigitalizar";
import { Portada } from "@/components/Portada";
import { Preguntas } from "@/components/Preguntas";
import { Proceso } from "@/components/Proceso";
import { Servicios } from "@/components/Servicios";
import { SobreMi } from "@/components/SobreMi";
import { Tecnologias } from "@/components/Tecnologias";

export default function Inicio() {
  return (
    <main className="flex-1">
      <Portada />
      <Cifras />
      <PorQueDigitalizar />
      <Servicios />
      <Clientes />
      <Tecnologias />
      <Proceso />
      <SobreMi />
      <ConsejosInicio />
      <Preguntas />
      <Contacto />
      <Animaciones />
    </main>
  );
}
