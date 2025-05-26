'use client';
import React, { useState } from 'react';

export default function Perfil() {
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <section className="mb-12 px-2 sm:px-6">
      <div className="rounded-lg bg-white p-6 text-center shadow-md">
        <img
          src="/johana.jpg"
          alt="Johana Sevillano"
          className="mx-auto -mt-20 h-32 w-32 rounded-full border-4 border-white object-cover shadow-lg"
        />
        <h2 className="mt-4 text-2xl font-bold text-gray-800">Johana Sevillano</h2>
        <p className="mt-2 text-gray-600">
          Soy analista de datos con enfoque en visualización, diseño y marketing digital. Me gusta crear soluciones creativas que conecten con las personas.
        </p>
        <button
          onClick={() => setMostrarModal(true)}
          className="mt-4 rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Saber más
        </button>
      </div>

      {/* Modal */}
      {mostrarModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <button
              onClick={() => setMostrarModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
            <h3 className="mb-2 text-xl font-semibold text-gray-800">Más sobre mí</h3>
            <p className="text-sm text-gray-700">
              Tengo más de 6 años de experiencia combinando el diseño gráfico, la gestión de bases de datos, el análisis de métricas y la mejora continua en distintos sectores. Me apasiona visualizar datos de forma clara, precisa y estética. Disfruto aprender, colaborar en equipo y afrontar retos que exijan creatividad y lógica.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
