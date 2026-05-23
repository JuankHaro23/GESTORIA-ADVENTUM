import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export function Layout() {
  return (
    <div className="min-h-screen bg-adventum-crema flex flex-col">
      
      {/* Barra de Navegación (Azul Noche Premium) */}
      <nav className="bg-adventum-noche text-white shadow-xl border-b border-blue-950 relative z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between h-20 items-center">
            
            {/* Logo de la Marca */}
            <div className="flex-shrink-0 font-extrabold text-2xl tracking-tight">
              <Link to="/" className="hover:opacity-90 transition-opacity">
                Gestoría <span className="text-adventum-oro">Adventum</span>
              </Link>
            </div>
            
            {/* Enlaces Principales de Navegación */}
            <div className="hidden md:flex space-x-8 font-semibold text-sm uppercase tracking-widest">
              <Link to="/" className="hover:text-adventum-oro transition-colors duration-200">Inicio</Link>
              <Link to="/tramites" className="hover:text-adventum-oro transition-colors duration-200">Trámites</Link>
              <Link to="/servicios" className="hover:text-adventum-oro transition-colors duration-200">Servicios</Link>
              <Link to="/cita" className="hover:text-adventum-oro transition-colors duration-200">Reserva tu cita</Link>
            </div>
            
            {/* Botón de Acción Destacado (Coral Llamativo) */}
            <div>
              <Link to="/login" className="bg-adventum-coral text-white px-6 py-2.5 rounded-full font-bold hover:opacity-90 transition-all shadow-md shadow-adventum-coral/20 text-sm uppercase tracking-wider inline-block">
                Área Cliente
              </Link>
            </div>
            
          </div>
        </div>
      </nav>

      {/* Contenido Dinámico de las Páginas */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Pie de Página Cohesivo */}
      <footer className="bg-adventum-noche text-blue-200/60 py-10 border-t border-blue-950 text-center text-sm">
        <div className="max-w-7xl mx-auto px-6 space-y-2">
          <p className="font-medium text-blue-200">Gestoría Adventum — Especialistas en Extranjería y Movilidad Internacional</p>
          <p>© {new Date().getFullYear()} Todos los derechos reservados.</p>
        </div>
      </footer>

    </div>
  );
}
