import React from 'react';

type EducacionItem = {
  institucion: string;
  titulo: string;
  fechas: string;
  descripcion: string;
};

const educacion: EducacionItem[] = [
  {
    institucion: 'Institución Universitaria Pascual Bravo',
    titulo: 'Diseño Gráfico',
    fechas: '2015 - 2017',
    descripcion: 'Diseño editorial, publicitario, y fundamentos de comunicación visual.',
  },
  {
    institucion: 'Platzi / OpenBootcamp / Udemy',
    titulo: 'Cursos en Data Science, SQL y Power BI',
    fechas: '2021 - Presente',
    descripcion: 'Formación continua en herramientas de análisis y visualización de datos.',
  },
  {
    institucion: 'Universidad de Antioquia',
    titulo: 'Ingeniería de Sistemas (en curso)',
    fechas: '2020 - Actualidad',
    descripcion: 'Desarrollo web, fundamentos de programación, bases de datos y sistemas operativos.',
  },
];

export default function Educacion() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Educación</h2>
      <div className="space-y-4">
        {educacion.map((item) => (
          <div
            key={item.institucion}
            className="bg-white rounded shadow p-4 hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold">{item.titulo}</h3>
            <p className="text-sm text-gray-600">{item.institucion} — {item.fechas}</p>
            <p className="text-sm mt-2 text-gray-700">{item.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
