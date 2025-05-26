import React from 'react';

const habilidades: string[] = [
    'Análisis de datos',
    'Visualización en Power BI',
    'Diseño gráfico (Illustrator, InDesign)',
    'Gestión de bases de datos',
    'Trabajo en equipo',
    'Comunicación asertiva',
    'Metodologías ágiles',
    'Pensamiento crítico'
];

export default function Habilidades() {
    return (
        <div className="mt-6">
            <h3 className="mb-2 text-sm font-semibold text-gray-700">Habilidades Extra</h3>
            <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
                {habilidades.map((habilidad) => (
                    <li key={habilidad}>{habilidad}</li>
                ))}
            </ul>
        </div>
    );
}
