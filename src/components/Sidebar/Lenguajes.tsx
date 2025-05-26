import React from 'react';

type Lenguaje = {
    nombre: string;
    porcentaje: number;
};

const lenguajes: Lenguaje[] = [
    { nombre: 'JavaScript', porcentaje: 85 },
    { nombre: 'TypeScript', porcentaje: 75 },
    { nombre: 'SQL', porcentaje: 70 },
    { nombre: 'Python', porcentaje: 60 },
];

export default function Lenguajes() {
    return (
        <div className="mt-6">
            <h3 className="mb-2 text-sm font-semibold text-gray-700">Lenguajes de Programación</h3>
            <ul className="space-y-2">
                {lenguajes.map((lenguaje) => (
                    <li key={lenguaje.nombre}>
                        <div className="flex justify-between text-xs text-gray-600">
                            <span>{lenguaje.nombre}</span>
                            <span>{lenguaje.porcentaje}%</span>
                        </div>
                        <div className="h-2 w-full rounded bg-gray-200">
                            <div
                                className="h-2 rounded bg-green-500"
                                style={{ width: `${lenguaje.porcentaje}%` }}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
