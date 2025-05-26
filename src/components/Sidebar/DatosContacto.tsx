import React from 'react';
import { FiMapPin, FiPhone, FiMail, FiGlobe } from 'react-icons/fi';

export default function DatosContacto() {
    return (
        <div className="mt-6 space-y-3 text-sm text-gray-700">
            <div className="flex items-center gap-2">
                <FiMapPin className="text-blue-500" />
                <span>Medellín, Colombia</span>
            </div>
            <div className="flex items-center gap-2">
                <FiPhone className="text-green-500" />
                <span>+57 319 696 0915</span> {/* puedes cambiarlo o quitarlo */}
            </div>
            <div className="flex items-center gap-2">
                <FiMail className="text-red-500" />
                <span>johanasevillano@email.com</span> {/* cambia por el real si quieres */}
            </div>
            <div className="flex items-center gap-2">
                <FiGlobe className="text-purple-500" />
                <a
                    href="https://github.com/johanasev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    github.com/johanasev
                </a>
            </div>
        </div>
    );
}
