import React from 'react';
import InfoPersonal from '@/components/Sidebar/InfoPersonal';
import DatosContacto from '@/components/Sidebar/DatosContacto';
import Idiomas from '@/components/Sidebar/Idiomas';
import Lenguajes from '@/components/Sidebar/Lenguajes';
import Habilidades from '@/components/Sidebar/Habilidades';

export default function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-[250px_1fr_80px]">
      {/* Sidebar izquierda (oculta en móvil) */}
      <aside className="hidden md:sticky md:top-0 md:block h-screen overflow-y-auto border-r border-gray-200 bg-white p-4 shadow-sm">
        <InfoPersonal />
        <DatosContacto />
        <Idiomas />
        <Lenguajes />
        <Habilidades />
      </aside>

      {/* Contenido principal */}
      <main className="overflow-y-auto p-6 sm:p-10">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </main>

      {/* Sidebar derecha (oculta en móvil) */}
      <aside className="hidden md:sticky md:top-0 md:flex h-screen flex-col items-center gap-4 border-l border-gray-200 bg-white p-4 shadow-sm">
        <a href="https://github.com/johanasev" target="_blank" rel="noopener noreferrer">
          <img src="/github.svg" alt="GitHub" className="h-6 w-6" />
        </a>
        <a href="https://www.linkedin.com/in/johanasevillano/" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
        </a>
      </aside>
    </div>
  );
}
