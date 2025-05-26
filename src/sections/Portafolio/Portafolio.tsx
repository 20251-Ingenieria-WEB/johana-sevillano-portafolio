'use client';
import React, { useState } from 'react';

type Proyecto = {
    id: number;
    titulo: string;
    descripcion: string;
    imagen: string;
    detalle: string;
    link: string;
};

const proyectos: Proyecto[] = [
    {
        id: 1,
        titulo: 'Dashboard de Marketing',
        descripcion: 'Visualización de métricas de campañas en Power BI.',
        imagen: '/proyectos/powerbi.jpg',
        detalle: 'Incluye KPIs clave, segmentación por campañas, y análisis comparativo semanal.',
        link: 'https://github.com/johanasev/dashboard-marketing',
    },
    {
        id: 2,
        titulo: 'Diseño de catálogo digital',
        descripcion: 'Diseño editorial para productos de una marca de moda.',
        imagen: '/proyectos/catalogo.jpg',
        detalle: 'Catálogo exportado en PDF y versión web animada en Figma.',
        link: 'https://www.behance.net/johanasev',
    },
    {
        id: 3,
        titulo: 'App de citas médicas',
        descripcion: 'Frontend en Next.js y backend en Spring Boot.',
        imagen: '/proyectos/citas.jpg',
        detalle: 'CRUD de médicos y horarios, consumo de API y despliegue en Vercel.',
        link: 'https://github.com/johanasev/citasalud',
    },
];

export default function Portafolio() {
    const [proyectoActivo, setProyectoActivo] = useState<Proyecto | null>(null);

    return (
        <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">Portafolio</h2>
            <div className="flex gap-4 overflow-x-auto pb-4">
                {proyectos.map((proyecto) => (
                    <div
                        key={proyecto.id}
                        className="min-w-[250px] flex-shrink-0 rounded bg-white p-4 shadow"
                    >
                        <img src={proyecto.imagen} alt={proyecto.titulo} className="mb-2 h-40 w-full rounded object-cover" />
                        <h3 className="text-lg font-semibold">{proyecto.titulo}</h3>
                        <p className="text-sm text-gray-600">{proyecto.descripcion}</p>
                        <button
                            onClick={() => setProyectoActivo(proyecto)}
                            className="mt-2 text-blue-600 hover:underline text-sm"
                        >
                            Saber más
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {proyectoActivo && (
                <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
                    <div className="relative w-full max-w-md rounded bg-white p-6 shadow-md">
                        <button
                            onClick={() => setProyectoActivo(null)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                            ✖
                        </button>
                        <h3 className="mb-2 text-xl font-semibold">{proyectoActivo.titulo}</h3>
                        <p className="mb-2 text-sm text-gray-700">{proyectoActivo.detalle}</p>
                        <a
                            href={proyectoActivo.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 hover:underline"
                        >
                            Ver proyecto en GitHub o Behance
                        </a>
                    </div>
                </div>
            )}
        </section>
    );
}
