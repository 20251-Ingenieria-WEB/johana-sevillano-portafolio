import React from 'react';

type Idioma = {
    nombre: string;
    porcentaje: number;
};

const idiomas: Idioma[] = [
    { nombre: 'Español', porcentaje: 100 },
    { nombre: 'Inglés', porcentaje: 65 },
];

export default function Idiomas() {
    return (
        <div className="mt-6">
            <h3 className="mb-2 text-sm font-semibold text-gray-700">Idiomas</h3>
            <ul className="space-y-2">
                {idiomas.map((idioma) => (
                    <li key={idioma.nombre}>
                        <div className="flex justify-between text-xs text-gray-600">
                            <span>{idioma.nombre}</span>
                            <span>{idioma.porcentaje}%</span>
                        </div>
                        <div className="h-2 w-full rounded bg-gray-200">
                            <div
                                className="h-2 rounded bg-blue-500"
                                style={{ width: `${idioma.porcentaje}%` }}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
