"use client";
import React from "react";
import {
  AcademicCapIcon,
  LightBulbIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/outline";

export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="py-20 px-6 sm:px-20 bg-gray-50 text-center scroll-mt-32"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 animate-fadeUp">
        Sobre Nosotros
      </h2>

      <p className="max-w-3xl mx-auto text-gray-700 text-lg sm:text-xl animate-fadeUp delay-150 mb-12">
        Legal Firma presenta sus servicios para que los trámites de venta o
        transferencia de vehículos sean simples, rápidos y claros. Nos
        encargamos de todo, desde la firma hasta el seguimiento, para que tú no
        tengas que preocuparte.
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6 transition transform hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center gap-4">
          <AcademicCapIcon className="w-12 h-12 text-[#a2172b]" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Profesionalismo
          </h3>
          <p className="text-gray-700 text-center">
            Excelencia y confiabilidad en cada proyecto que asumimos.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 transition transform hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center gap-4">
          <LightBulbIcon className="w-12 h-12 text-[#a2172b]" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Innovación
          </h3>
          <p className="text-gray-700 text-center">
            Incorporamos tecnología avanzada para simplificar procesos.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 transition transform hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center gap-4">
          <ChatBubbleLeftIcon className="w-12 h-12 text-[#a2172b]" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Soporte</h3>
          <p className="text-gray-700 text-center">
            Atención rápida y personalizada para cada consulta o trámite.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12">
        <a
          href="#contacto"
          className="inline-block bg-[#a2172b] hover:bg-red-800 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition-all"
        >
          Contáctanos
        </a>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeUp {
          animation: fadeUp 0.8s ease forwards;
        }
        .delay-150 {
          animation-delay: 0.15s;
        }
      `}</style>
    </section>
  );
}
