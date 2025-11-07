"use client";
import { useState } from "react";

export default function Simulador() {
  const [tasacion, setTasacion] = useState(""); // solo números
  const [resultado, setResultado] = useState<number | null>(null);

  const formatoCLP = (valor: number) =>
    valor.toLocaleString("es-CL", { style: "currency", currency: "CLP" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const soloNumeros = e.target.value.replace(/\D/g, "");
    setTasacion(soloNumeros);

    // Limpiar resultado si el input está vacío
    if (soloNumeros === "") {
      setResultado(null);
    }
  };

  const handleCalcular = () => {
    const monto = parseFloat(tasacion);
    if (isNaN(monto)) {
      setResultado(null);
      return;
    }
    const calculo = monto * 0.015 + 36100 + 49000;
    setResultado(calculo);
  };

  return (
    <section className="py-20 px-6 sm:px-20 bg-gray-50 text-center scroll-mt-32">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
        Simulador de Tasación
      </h2>
      <p className="max-w-3xl mx-auto text-gray-700 text-lg sm:text-xl mb-12">
        Ingresa el monto de tasación y calcula el total a pagar de manera rápida
        y segura.
      </p>

      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6">
        <input
          type="text"
          placeholder="Monto de tasación"
          value={tasacion ? formatoCLP(Number(tasacion)) : ""}
          onChange={handleInputChange}
          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-left text-gray-900 placeholder:text-left placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#a2172b] focus:border-[#a2172b]"
        />

        <button
          onClick={handleCalcular}
          className="w-full bg-[#a2172b] hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-all text-lg"
        >
          Calcular
        </button>

        {resultado !== null && (
          <p className="text-gray-900 font-bold text-xl mt-4">
            Total a pagar:{" "}
            <span className="text-[#a2172b]">{formatoCLP(resultado)}</span>
          </p>
        )}
      </div>
    </section>
  );
}
