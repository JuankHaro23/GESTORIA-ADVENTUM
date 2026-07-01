import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../../../core/ui/ScrollReveal';

export function HomePage() {
  return (
    <div className="flex flex-col w-full bg-adventum-crema text-slate-900 overflow-hidden">
      
      {/* 1. HERO SECTION (El Gancho y el Dolor) */}
      <section className="relative bg-adventum-terracota/30 py-20 md:py-32 border-b border-adventum-terracota">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex flex-col md:flex-row items-center gap-16 relative z-10">
          
          <div className="md:w-3/5 space-y-8">
            <ScrollReveal>
              <span className="inline-flex items-center rounded-full bg-white px-4 py-1 text-sm font-semibold text-adventum-coral ring-1 ring-inset ring-adventum-coral/30 shadow-sm">
                Tu puente legal entre Ecuador y España
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-adventum-noche tracking-tighter leading-tight mt-6">
                Estudia en España<br/> Nosotros nos ocupamos del resto
              </h1>
              <p className="text-xl text-slate-700 leading-relaxed max-w-2xl mt-6">
                Estudiar en otro país da vértigo, pero con el equipo correcto es el inicio de la mejor etapa de tu vida.
              </p>
              <div className="pt-8 flex flex-col sm:flex-row gap-4">
                <Link to="/cita" className="inline-flex justify-center items-center bg-adventum-coral text-white px-10 py-4 rounded-full font-bold hover:opacity-90 transition-all shadow-xl shadow-adventum-coral/30 hover:shadow-adventum-coral/50 transform hover:-translate-y-1 text-lg">
                  Agendar Asesoría Gratuita
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                </Link>
                <Link to="/servicios" className="inline-flex justify-center items-center bg-white text-adventum-noche px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all shadow border border-slate-200 text-lg">
                  Explorar Servicios
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <div className="md:w-2/5 relative animate-float">
            {/* Efectos de luz de tu diseño original */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-adventum-terracota rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-adventum-oro rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            
            {/* Contenedor asimétrico */}
            <div className="relative bg-white p-4 rounded-[3rem] rounded-bl-3xl rounded-tr-3xl shadow-2xl shadow-slate-200/70 border border-slate-100">
              <div className="bg-adventum-noche rounded-[2.5rem] rounded-bl-2xl rounded-tr-2xl h-[28rem] w-full flex items-center justify-center overflow-hidden">
                <span className="text-adventum-oro font-medium">[ Imagen representativa Valencia ]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BANDA DE ESTADÍSTICAS */}
      <section className="bg-adventum-noche text-white py-20 relative">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="currentColor"></circle></pattern></defs><rect width="100%" height="100%" fill="url(#dots)"></rect></svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
          {[
            { value: '98%', label: 'Tasa de Aprobación', delay: 200 },
            { value: '24h', label: 'Respuesta Inicial', delay: 400 },
            { value: '3 años', label: 'Especialización', delay: 600 },
          ].map((stat) => (
            <ScrollReveal key={stat.label} delay={stat.delay}>
              <div className="flex flex-col items-center">
                <div className="text-5xl md:text-6xl font-extrabold text-adventum-oro tracking-tight mb-2">
                  {stat.value}
                </div>
                <div className="text-sm uppercase tracking-widest font-semibold text-slate-300 pt-2 border-t border-slate-700 w-24">
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 3. GRID DE LOS 3 PILARES */}
      <section className="py-28 bg-white rounded-t-[4rem] -mt-8 relative z-20 shadow-[0_-20px_40px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-xl mx-auto text-center mb-20">
              <h2 className="text-sm font-semibold text-adventum-coral uppercase tracking-widest mb-3">Nuestra Especialidad</h2>
              <p className="text-4xl md:text-5xl font-extrabold text-adventum-noche tracking-tighter">Todo lo que necesitas.</p>
              <p className="text-lg text-slate-600 mt-5 leading-relaxed">Desde la elección de tu maestría hasta la entrega de las llaves de tu nuevo piso en Valencia.</p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {icon: '🎓', title: 'Estudios', desc: 'El Máster o Carrera ideal para ti, en la ciudad que elijas. Gestión de postulación y matrícula.', link: 'estudios', delay: 0},
              {icon: '⚖️', title: 'Visados y Residencias', desc: 'Tu expediente en manos expertas. Tramitamos tu visado de estudio y tu posterior permiso de trabajo.', link: 'visados', delay: 200},
              {icon: '🌟', title: 'Valencia VIP', desc: 'Aterriza con tranquilidad. Búsqueda de piso, recibimiento en aeropuerto y primeros trámites en la ciudad.', link: 'valencia-vip', delay: 400},
            ].map((service) => (
              <ScrollReveal key={service.title} delay={service.delay}>
                <div className="bg-adventum-crema hover:bg-white rounded-[2.5rem] p-10 border border-slate-200 hover:border-adventum-terracota shadow-sm hover:shadow-2xl hover:shadow-adventum-coral/10 transition-all duration-300 group h-full flex flex-col">
                  <div className="text-5xl mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-adventum-noche mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed text-base flex-grow">{service.desc}</p>
                  <Link to={`/servicios#${service.link}`} className="inline-flex items-center text-adventum-coral font-bold group-hover:opacity-70 transition-colors">
                    Ver Detalles
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRE-FOOTER CTA (Llamado a la acción final) */}
      <section className="bg-adventum-crema py-24 border-t border-slate-200 text-center">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-adventum-noche mb-6">¿Listo para empezar tu aventura?</h2>
            <p className="text-lg text-slate-600 mb-10">Agenda tu asesoría gratuita y diseñemos juntos tu plan de llegada a España</p>
            <Link to="/cita" className="inline-flex justify-center items-center bg-adventum-coral text-white px-12 py-4 rounded-full font-bold hover:opacity-90 transition-all shadow-xl shadow-adventum-coral/30 hover:-translate-y-1 text-lg">
              Agendar Asesoría Gratuita
            </Link>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
