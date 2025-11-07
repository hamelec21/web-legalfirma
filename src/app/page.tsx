import Head from "next/head";
import Hero from "./components/Hero";
import Nosotros from "./components/Nosotros";
import Servicios from "./components/Servicios";
import PorQueElegirnos from "./components/PorQueElegirnos";
import Reseñas from "./components/Resenas";
import PreguntasFrecuentes from "./components/Faq";
import ContactoFooter from "./components/ContactoFooter";
import Simulador from "./components/Simulador";

export default function Home() {
  return (
    <>
      <Head>
        {/* Título de la página */}
        <title>Legal Firma</title>

        {/* Meta descripción optimizada */}
        <meta
          name="description"
          content="Ofrecemos servicios profesionales de transferencia de vehículos, cambio de dueño y traspaso de autos. Simplifica todos los trámites de compra-venta de automóviles, con atención rápida, segura y confiable."
        />

        {/* Palabras clave (keywords) con long-tail */}
        <meta
          name="keywords"
          content="
            transferencia de vehículos, cambio de dueño de auto, traspaso de autos, trámites de vehículos, 
            transferencia de automóviles, compra venta de vehículos, transferencias online, compra y venta de autos,
            cómo hacer transferencia de auto rápido y seguro, transferencia de vehículos sin problemas legales,
            cambio de dueño de auto en Santiago, traspaso de autos usados con gestoría profesional,
            servicios de transferencia de vehículos a domicilio, requisitos para transferir un automóvil usado,
            trámite de transferencia de autos particulares online, compra y venta de vehículos sin complicaciones,
            gestoría para transferencia de automóviles en Chile, traspaso de vehículos con certificado actualizado
          "
        />

        {/* Open Graph / Social Media */}
        <meta
          property="og:title"
          content="Transferencia de Vehículos | Traspaso y Cambio de Dueño Rápido y Seguro"
        />
        <meta
          property="og:description"
          content="Servicios profesionales de transferencia de vehículos y traspaso de autos. Simplifica tus trámites de compra-venta con nuestra atención rápida y segura."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://www.legalfirma.com" />
      </Head>

      <main className="font-sans">
        <Hero />
        <Nosotros />
        <Servicios />
        <Simulador/>
        <PorQueElegirnos />
        <Reseñas />
        <PreguntasFrecuentes />
        <ContactoFooter />
      </main>
    </>
  );
}
