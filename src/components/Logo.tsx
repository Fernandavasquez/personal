import Image from "next/image";
import nombre from "../../public/zentra-nombre.png";
import nombreClaro from "../../public/zentra-nombre-claro.png";
import simbolo from "../../public/zentra-simbolo.png";

// Logotipo de Zentra: el símbolo "Z" y el nombre "ZENTRA".
// En modo oscuro se usa la versión del nombre con letras claras para que se lea bien.
export function Logo({
  subtitulo,
  className = "",
  claseSimbolo = "",
}: {
  subtitulo?: string;
  className?: string;
  claseSimbolo?: string;
}) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Image src={simbolo} alt="" priority sizes="80px" className={`h-10 w-auto shrink-0 ${claseSimbolo}`} />
      <span className="flex flex-col gap-1">
        <span className="sr-only">Zentra</span>
        <Image src={nombre} alt="" priority sizes="170px" className="h-[17px] w-auto dark:hidden" />
        <Image src={nombreClaro} alt="" loading="eager" sizes="170px" className="hidden h-[17px] w-auto dark:block" />
        {subtitulo && <span className="text-xs leading-none text-tinta-suave">{subtitulo}</span>}
      </span>
    </span>
  );
}
