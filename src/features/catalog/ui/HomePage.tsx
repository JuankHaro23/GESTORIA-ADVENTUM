import React from 'react';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="flex flex-col w-full bg-adventum-crema text-slate-900">
      
      {/* 1. HERO SECTION (Usando Terracota, Coral y Noche) */}
      <section className="relative bg-adventum-terracota/30 py-20 md:py-32 overflow-hidden border-b border-adventum-terracota">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex flex-col md:flex-row items-center gap-16 relative z-10">
          <div className="md:w-3/5 space-y-8">
            <span className="inline-flex items-center rounded-full bg-white px-4 py-1 text-sm font-semibold text-adventum-coral ring-1 ring-inset ring-adventum-coral/30 shadow-sm">
              Tu puente legal entre Ecuador y España
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-adventum-noche tracking-tighter leading-tight">
              Hacemos realidad tu nueva vida en España
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed max-w-2xl">
              Gestionamos tus visados y trámites de extranjería con la calidez que mereces y la profesionalidad que necesitas. Resultados garantizados en tiempo récord.
            </p>
            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <Link to="/cita" className="inline-flex justify-center items-center bg-adventum-coral text-white px-10 py-4 rounded-full font-bold hover:opacity-90 transition-all shadow-lg shadow-adventum-coral/30 hover:shadow-adventum-coral/50 transform hover:-translate-y-1 text-lg">
                Reserva tu Cita Gratuita
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
              </Link>
              <Link to="/tramites" className="inline-flex justify-center items-center bg-white text-adventum-noche px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all shadow border border-slate-200 text-lg">
                Explorar Trámites
              </Link>
            </div>
          </div>
          <div className="md:w-2/5 relative">
            {/* Efectos de luz usando tus colores de marca */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-adventum-terracota rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-adventum-oro rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            
            <div className="relative bg-white p-4 rounded-3xl shadow-2xl shadow-slate-200/70 border border-slate-100">
              <div className="bg-adventum-noche rounded-2xl h-96 w-full flex items-center justify-center overflow-hidden">
                <span className="text-adventum-oro font-medium">[ Imagen representativa ]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BANDA DE ESTADÍSTICAS (Fondo Azul Noche con Oro) */}
      <section className="bg-adventum-noche text-white py-16 relative">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="currentColor"></circle></pattern></defs><rect width="100%" height="100%" fill="url(#dots)"></rect></svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
          {[
            { value: '+1.500', label: 'Casos de Éxito' },
            { value: '98%', label: 'Tasa de Aprobación' },
            { value: '24h', label: 'Respuesta Inicial' },
            { value: '10 Años', label: 'Especialización' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div className="text-5xl md:text-6xl font-extrabold text-adventum-oro tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-sm uppercase tracking-widest font-semibold text-slate-300 pt-2 border-t border-slate-700 w-24">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. GRID DE SERVICIOS (Limpio y Elegante) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center mb-20">
            <h2 className="text-sm font-semibold text-adventum-coral uppercase tracking-widest mb-3">Nuestra Especialidad</h2>
            <p className="text-4xl font-extrabold text-adventum-noche tracking-tighter">Tu Visado, sin estrés.</p>
            <p className="text-lg text-slate-600 mt-5 leading-relaxed">Analizamos tu perfil y diseñamos la estrategia legal perfecta para garantizar tu entrada y residencia en España.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {icon: '💼', title: 'Visado de Trabajo', desc: 'Permisos por cuenta ajena, propia o personal altamente cualificado.'},
              {icon: '🎓', title: 'Visado de Estudiante', desc: 'Matrículas, prórrogas y autorización de trabajo para estudiantes.'},
              {icon: '🌍', title: 'Nómadas Digitales', desc: 'Residencia para teletrabajadores internacionales con ley de startups.'},
            ].map((service) => (
              <div key={service.title} className="bg-adventum-crema hover:bg-white rounded-3xl p-10 border border-slate-200 hover:border-adventum-terracota shadow-sm hover:shadow-2xl hover:shadow-adventum-coral/10 transition-all duration-300 group">
                <div className="text-5xl mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-2xl font-bold text-adventum-noche mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed text-base">{service.desc}</p>
                <Link to="/servicios" className="inline-flex items-center text-adventum-coral font-bold group-hover:opacity-70 transition-colors">
                  Descubrir Requisitos
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
