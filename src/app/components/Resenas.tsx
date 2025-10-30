"use client";
import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

export default function Reseñas() {
  const reviews = [
    {
      nombre: "Juan R.",
      comentario: "Excelente servicio y atención, muy profesional.",
      rating: 5,
    },
    {
      nombre: "María P.",
      comentario: "Muy recomendable, equipo confiable y eficiente.",
      rating: 4,
    },
    {
      nombre: "Carlos G.",
      comentario: "Nos ayudaron a gestionar todo de forma rápida y segura.",
      rating: 5,
    },
    {
      nombre: "Ana L.",
      comentario: "Servicio ágil y confiable, totalmente recomendable.",
      rating: 5,
    },
    {
      nombre: "Pedro M.",
      comentario: "Excelente atención y seguimiento durante todo el proceso.",
      rating: 4,
    },
    {
      nombre: "Ruth M.",
      comentario: "Excelente atención y seguimiento durante todo el proceso.",
      rating: 4,
    },
  ];

  return (
    <section
      id="resenas"
      className="py-20 px-6 sm:px-20 bg-gray-50 text-center scroll-mt-32"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900">
        Reseñas de nuestros clientes
      </h2>

      {/* Contenedor responsive */}
      <div className="flex flex-nowrap gap-6 overflow-x-auto md:grid md:grid-cols-3 md:gap-8 scroll-smooth snap-x snap-mandatory">
        {reviews.map((r, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 md:w-auto bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 flex flex-col items-center snap-start"
          >
            {/* Estrellas */}
            <div className="flex mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon
                  key={i}
                  className={`w-5 h-5 ${
                    i < r.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Comentario */}
            <p className="text-gray-700 text-center mb-6">
              &ldquo;{r.comentario}&rdquo;
            </p>

            {/* Nombre */}
            <p className="font-semibold text-gray-900">- {r.nombre}</p>
          </div>
        ))}
      </div>

      {/* Indicador scroll en móvil */}
      <p className="mt-4 text-gray-500 text-sm md:hidden">
        Desliza horizontalmente para ver más reseñas
      </p>
    </section>
  );
}
