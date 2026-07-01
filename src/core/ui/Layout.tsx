import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

export function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-adventum-crema flex flex-col">
      
      <nav className="bg-adventum-noche text-white shadow-xl border-b border-blue-950 relative z-[100]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between h-20 items-center">
            
            {/* Logo */}
            <div className="flex-shrink-0 font-extrabold text-xl md:text-2xl tracking-tight">
              <Link to="/" onClick={() => setIsOpen(false)} className="hover:opacity-90 transition-opacity">
                Consultoría <span className="text-adventum-oro">Ruta Valencia</span>
              </Link>
            </div>
            
            {/* Menú Desktop */}
            <div className="hidden md:flex space-x-8 font-semibold text-sm uppercase tracking-widest items-center">
              <Link to="/" className="hover:text-adventum-oro transition-colors duration-200">Inicio</Link>
              <Link to="/tramites" className="hover:text-adventum-oro transition-colors duration-200">Trámites</Link>
              
              <div className="relative group h-20 flex items-center">
                <Link to="/servicios" className="hover:text-adventum-oro transition-colors duration-200 flex items-center gap-1 cursor-pointer">
                  Servicios
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </Link>
                
                <div className="absolute left-0 top-full pt-4 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[150] transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(23,37,84,0.2)] border border-slate-100 py-2 overflow-hidden flex flex-col">
                    {[
                      { path: "/servicios#estudios", label: "Estudios" },
                      { path: "/servicios#visados", label: "Visados" },
                      { path: "/servicios#residencias", label: "Permisos de Residencia" },
                      { path: "/servicios#valencia-vip", label: "Valencia VIP" }
                    ].map((item, idx) => (
                      <Link key={idx} to={item.path} className="group/item flex items-center px-6 py-4 text-[0.95rem] font-semibold text-adventum-noche hover:bg-adventum-terracota/30 hover:text-adventum-coral transition-all duration-200 border-b border-slate-50 last:border-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-adventum-oro mr-3 opacity-0 group-hover/item:opacity-100 transition-opacity"></span>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link to="/cita" className="hover:text-adventum-oro transition-colors duration-200">Reserva tu cita</Link>
            </div>
            
            {/* Botón Área Cliente (Desktop) */}
            <div className="hidden md:block">
              <Link to="/login" className="bg-adventum-coral text-white px-6 py-2.5 rounded-full font-bold hover:opacity-90 transition-all shadow-md shadow-adventum-coral/20 text-sm uppercase tracking-wider">
                Área Cliente
              </Link>
            </div>

            {/* Botón Hamburguesa (Móvil) */}
            <button className="md:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path></svg>
            </button>
          </div>
        </div>

        {/* Menú Móvil Desplegable */}
        {isOpen && (
          <div className="md:hidden bg-adventum-noche border-t border-blue-900 p-6 flex flex-col space-y-4 font-semibold uppercase text-sm tracking-widest">
            <Link to="/" onClick={() => setIsOpen(false)}>Inicio</Link>
            <Link to="/tramites" onClick={() => setIsOpen(false)}>Trámites</Link>
            <Link to="/servicios" onClick={() => setIsOpen(false)}>Servicios</Link>
            <Link to="/cita" onClick={() => setIsOpen(false)}>Reserva tu cita</Link>
            <Link to="/login" className="text-adventum-coral" onClick={() => setIsOpen(false)}>Área Cliente</Link>
          </div>
        )}
      </nav>

      <main className="flex-grow"><Outlet /></main>

      <footer className="bg-adventum-noche text-blue-200/60 py-10 border-t border-blue-950 text-center text-sm">
        <div className="max-w-7xl mx-auto px-6 space-y-2">
          <p className="font-medium text-blue-200">Consultoría Ruta Valencia — Especialistas en Extranjería y Movilidad Internacional</p>
          <p>© {new Date().getFullYear()} Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}