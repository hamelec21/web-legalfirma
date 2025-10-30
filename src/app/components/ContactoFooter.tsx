"use client";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ChatBubbleOvalLeftIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export default function ContactoFooter() {
  const corporateColor = "#a2172b";

  const contactos = [
    {
      icon: PhoneIcon,
      title: "Teléfono",
      text: "+56 9 8436 9223",
      link: "tel:+56984369223",
    },
    {
      icon: ChatBubbleOvalLeftIcon,
      title: "WhatsApp",
      text: "Escríbenos directo",
      link: "https://wa.me/56984369223?text=Hola!%20Quisiera%20hacer%20una%20consulta%20sobre%20una%20transferencia%20de%20veh%C3%ADculo.",
    },
    {
      icon: EnvelopeIcon,
      title: "Correo",
      text: "transferencias@legalfirma.cl",
      link: "mailto:transferencias@legalfirma.cl",
    },
    {
      icon: MapPinIcon,
      title: "Ubicación",
      text: "Malloa, Chile",
      link: "https://goo.gl/maps/",
    },
  ];

  return (
    <section
      id="contacto"
      className="py-20 px-6 sm:px-20 bg-white text-gray-900"
    >
      {/* Título */}
      <h2
        className="text-3xl sm:text-4xl font-bold text-center mb-10"
        style={{ color: corporateColor }}
      >
        Contáctanos
      </h2>

      {/* Bloques de contacto */}
      <div className="max-w-4xl mx-auto grid gap-4 sm:gap-6 grid-cols-2 md:grid-cols-4">
        {contactos.map((item, index) => {
          const Icon = item.icon;
          return (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center bg-gray-50 border border-gray-200 rounded-2xl py-6 sm:py-8 px-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={
                { "--tw-ring-color": corporateColor } as React.CSSProperties
              }
            >
              <Icon
                className="w-10 h-10 sm:w-12 sm:h-12 mb-3"
                style={{ color: corporateColor }}
              />
              <h3 className="text-lg font-semibold mb-1 text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm text-center">{item.text}</p>
            </a>
          );
        })}
      </div>

      {/* Horario */}
      <div className="max-w-2xl mx-auto mt-10 flex flex-col items-center bg-gray-50 border border-gray-200 rounded-2xl py-6 px-4 text-center shadow-sm">
        <ClockIcon
          className="w-10 h-10 mb-3"
          style={{ color: corporateColor }}
        />
        <h3 className="text-lg font-semibold mb-1">Horario de atención</h3>
        <p className="text-gray-600 text-sm">
          Lunes a Viernes de 08:30 a 20:00
        </p>
        <p className="text-gray-600 text-sm">
          Sábados y Domingos de 9:00 a 17:00
        </p>
      </div>
    </section>
  );
}
