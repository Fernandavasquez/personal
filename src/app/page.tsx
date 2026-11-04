import { Contacto } from "@/components/Contacto";
import { Encabezado } from "@/components/Encabezado";
import { Pie } from "@/components/Pie";
import { PorQueDigitalizar } from "@/components/PorQueDigitalizar";
import { Portada } from "@/components/Portada";
import { Preguntas } from "@/components/Preguntas";
import { Proceso } from "@/components/Proceso";
import { Servicios } from "@/components/Servicios";
import { SobreMi } from "@/components/SobreMi";

export default function Inicio() {
  return (
    <>
      <Encabezado />
      <main className="flex-1">
        <Portada />
        <PorQueDigitalizar />
        <Servicios />
        <Proceso />
        <SobreMi />
        <Preguntas />
        <Contacto />
      </main>
      <Pie />
    </>
  );
}
