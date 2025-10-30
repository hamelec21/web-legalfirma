"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  ChevronDownIcon,
  ClipboardDocumentCheckIcon,
  ClockIcon,
  MapPinIcon,
  DocumentTextIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";

export default function PreguntasFrecuentes() {
  const corporateColor = "#a2172b";

  const faqs = [
    {
      q: "¿Qué ocurre si no estoy familiarizado con el uso de Internet?",
      a: "Nosotras lo vamos ayudando en cada paso a paso.",
      icon: ClipboardDocumentCheckIcon,
    },
    {
      q: "¿Y si el comprador y el vendedor están en lugares distintos?",
      a: "Nos encargamos de toda la coordinación y firma de documentos de forma remota, sin que tengas que desplazarte.",
      icon: ClockIcon,
    },
    {
      q: "¿Qué historial guardan de mis trámites?",
      a: "Guardamos la información de las transferencias que hiciste con nosotros, lo que nos permite ayudarte más rápido si tienes dudas o necesitas seguimiento.",
      icon: MapPinIcon,
    },
    {
      q: "¿Qué necesito para transferir un vehículo?",
      a: "Datos personales, cédula de identidad vigente, clave única, permiso de circulación.",
      icon: DocumentTextIcon,
    },
    {
      q: "¿Soy empresa, puedo comprar o vender el vehículo?",
      a: "Soy empresa, puedo comprar o vender el vehículoo.",
      icon: KeyIcon,
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (openIndex !== null && contentRefs.current[openIndex]) {
      const el = contentRefs.current[openIndex];
      if (el) {
        el.style.height = `${el.scrollHeight}px`;
      }
    }
  }, [openIndex]);

  return (
    <section id="faq" className="py-16 px-5 sm:px-20 bg-gray-100 text-gray-900">
      <h2
        className="text-3xl sm:text-4xl font-bold text-center mb-6"
        style={{ color: corporateColor }}
      >
        Preguntas Frecuentes
      </h2>
      <p className="max-w-3xl mx-auto text-center mb-12 text-gray-700">
        Aquí encontrarás respuestas a las dudas más comunes sobre nuestros
        servicios.
      </p>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const Icon = faq.icon;
          return (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all border ${
                isOpen ? "border-red-300" : "border-gray-200"
              }`}
            >
              <button
                className={`w-full flex justify-between items-center p-4 text-left font-medium focus:outline-none transition-colors ${
                  isOpen ? "bg-red-50" : "hover:bg-gray-50"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className="w-6 h-6 flex-shrink-0"
                    style={{ color: corporateColor }}
                  />
                  <span className="text-sm sm:text-base">{faq.q}</span>
                </div>
                <ChevronDownIcon
                  className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  style={{ color: corporateColor }}
                />
              </button>

              <div
                ref={(el) => {
                  contentRefs.current[index] = el;
                }}
                className={`px-4 overflow-hidden text-gray-700 transition-[height,opacity] duration-300 ease-in-out ${
                  isOpen ? "pb-4 opacity-100" : "h-0 opacity-0"
                }`}
                style={{
                  height: isOpen ? contentRefs.current[index]?.scrollHeight : 0,
                }}
              >
                <p className="mt-2 text-sm sm:text-base">{faq.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
