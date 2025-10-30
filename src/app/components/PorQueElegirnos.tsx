"use client";
import React from "react";
import {
  ClockIcon,
  ChatBubbleBottomCenterTextIcon,
  DocumentCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export default function PorQueElegirnos() {
  const razones = [
    {
      title: "Rápido y Personalizado",
      description:
        "Atendemos tus dudas de inmediato y te ayudamos en cada paso del trámite.",
      icon: ClockIcon,
    },
    {
      title: "Certificado de Transferencia por WhatsApp",
      description:
        "Recibe tu certificado de manera digital y segura directamente en tu teléfono.",
      icon: DocumentCheckIcon,
    },
    {
      title: "Flexibilidad Total",
      description:
        "Nos adaptamos a tus horarios y necesidades para simplificar todo el proceso.",
      icon: UserGroupIcon,
    },
    {
      title: "Asistencia Amigable",
      description: "Te guiamos paso a paso con un trato cercano y profesional.",
      icon: ChatBubbleBottomCenterTextIcon,
    },
  ];

  return (
    <section
      id="porque-elegirnos"
      className="py-20 px-6 sm:px-20 bg-white text-center scroll-mt-32"
    >
      {/* Título */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
        ¿Por qué Elegirnos?
      </h2>

      {/* Texto introductorio */}
      <p className="max-w-3xl mx-auto text-gray-700 text-lg sm:text-xl mb-12">
        En <span className="font-semibold text-[#a2172b]">Legal Firma</span>,
        hacemos que los trámites para vender o transferir un vehículo sean
        simples, rápidos y claros. Nos encargamos de todo, desde la firma hasta
        el seguimiento, para que tú no tengas que preocuparte.
      </p>

      {/* Tarjetas con razones */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {razones.map((r) => {
          const Icon = r.icon;
          return (
            <div
              key={r.title}
              className="bg-white rounded-lg shadow-lg p-6 transition transform hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center gap-4"
            >
              <Icon className="w-12 h-12 text-[#a2172b] transition-transform duration-300 hover:scale-110" />
              <h3 className="text-xl font-semibold text-gray-900">{r.title}</h3>
              <p className="text-gray-700 text-center">{r.description}</p>
            </div>
          );
        })}
      </div>

      {/* Botón CTA */}
      <div className="mt-12">
        <a
          href="#contacto"
          className="inline-block bg-[#a2172b] hover:bg-red-800 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition-all text-lg"
        >
          Contáctanos
        </a>
      </div>
    </section>
  );
}
