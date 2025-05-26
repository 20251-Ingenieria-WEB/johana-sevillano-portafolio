import React from 'react';

type Conocimiento = {
  titulo: string;
  descripcion: string;
  icono: string; // puede ser URL de un SVG en línea o un archivo local en public/
};

const conocimientos: Conocimiento[] = [
  {
    titulo: 'Análisis de Datos',
    descripcion: 'Capacidad para transformar datos en información útil para la toma de decisiones.',
    icono: '/icons/data.svg', // por ahora lo dejamos genérico, lo explico abajo
  },
  {
    titulo: 'Diseño Gráfico',
    descripcion: 'Más de 6 años de experiencia en diseño editorial y publicitario.',
    icono: '/icons/design.svg',
  },
  {
    titulo: 'Power BI',
    descripcion: 'Creación de dashboards interactivos para marketing y reporting financiero.',
    icono: '/icons/powerbi.svg',
  },
  {
    titulo: 'Gestión de Bases de Datos',
    descripcion: 'Diseño y administración de bases de datos SQL y herramientas como Supabase.',
    icono: '/icons/db.svg',
  },
];

export default function Conocimientos() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Conocimientos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {conocimientos.map((item) => (
          <div
            key={item.titulo}
            className="bg-white rounded shadow p-4 flex items-start gap-4 hover:shadow-md transition"
          >
            <img src={item.icono} alt={item.titulo} className="w-10 h-10" />
            <div>
              <h3 className="text-lg font-semibold">{item.titulo}</h3>
              <p className="text-sm text-gray-600">{item.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
