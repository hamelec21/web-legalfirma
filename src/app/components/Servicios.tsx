"use client";
import React from "react";
import {
  ArrowPathIcon,
  DocumentTextIcon,
  TruckIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function Servicios() {
  const servicios = [
    {
      title: "Transferencia de Vehículos",
      description: "Incluye contrato digital y firma electrónica.",
      icon: TruckIcon,
    },
    {
      title: "Mandato con poder especial",
      description:
        "Documento que da total autoridad para representar a otra persona.",
      icon: DocumentTextIcon,
    },
    {
      title: "Permiso para sacar el auto del país",
      description: "Necesario si el vehículo va a cruzar fronteras.",
      icon: ShieldCheckIcon,
    },
    {
      title: "Gestión de trámites rápidos",
      description: "Simplificamos todos tus procesos de manera segura.",
      icon: ArrowPathIcon,
    },
  ];

  return (
    <section
      id="servicios"
      className="py-20 px-6 sm:px-20 bg-gray-100 text-center scroll-mt-32"
    >
      {/* Título */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
        Nuestros Servicios
      </h2>

      {/* Texto introductorio */}
      <p className="max-w-3xl mx-auto text-gray-700 text-lg sm:text-xl mb-12">
        En <span className="font-semibold text-[#a2172b]">Legal Firma</span>,
        transformamos los trámites complejos en procesos simples y rápidos.
        Descubre nuestros servicios diseñados para que vender, transferir o
        gestionar tu vehículo sea una experiencia clara, segura y sin
        complicaciones.
      </p>

      {/* Tarjetas de servicios */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicios.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.title}
              className="bg-white rounded-lg shadow-lg p-6 transition transform hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center gap-4"
            >
              <Icon className="w-12 h-12 text-[#a2172b] transition-transform duration-300 hover:scale-110" />
              <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
              <p className="text-gray-700 text-center">{s.description}</p>
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
